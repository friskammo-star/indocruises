import assert from "node:assert/strict"
import test from "node:test"

import { CONTACT_EMAIL_TO } from "./contact-email.ts"
import { handleContactRequest, type ContactEmailSender } from "./contact-handler.ts"

const VALID_BODY = {
  name: "John Smith",
  email: "john@example.com",
  subject: "How can we help?",
  message: "Tell us about your vessel and requirements...",
}

function contactRequest(body: unknown) {
  return new Request("https://example.test/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  })
}

test("valid request sends exactly once and returns the email id", async () => {
  const sent: Parameters<ContactEmailSender>[0][] = []
  const sendEmail: ContactEmailSender = async (payload) => {
    sent.push(payload)
    return { id: "email_123" }
  }

  const response = await handleContactRequest(
    contactRequest(VALID_BODY),
    sendEmail,
    { RESEND_FROM_EMAIL: " Indocruises <noreply@indocruises.co.id> " },
  )

  assert.equal(response.status, 200)
  assert.deepEqual(await response.json(), { ok: true, id: "email_123" })
  assert.equal(sent.length, 1)
  assert.equal(sent[0].from, "Indocruises <noreply@indocruises.co.id>")
  assert.deepEqual(sent[0].to, [CONTACT_EMAIL_TO])
  assert.equal(sent[0].replyTo, VALID_BODY.email)
  assert.equal(sent[0].subject, `Website inquiry: ${VALID_BODY.subject}`)
})

test("invalid email returns 400 and does not send", async () => {
  let sendCount = 0
  const sendEmail: ContactEmailSender = async () => {
    sendCount += 1
    return { id: "email_123" }
  }

  const response = await handleContactRequest(
    contactRequest({ ...VALID_BODY, email: "not-an-email" }),
    sendEmail,
    { RESEND_FROM_EMAIL: "Indocruises <noreply@indocruises.co.id>" },
  )

  assert.equal(response.status, 400)
  assert.deepEqual(await response.json(), { error: "Please complete all fields with a valid email address." })
  assert.equal(sendCount, 0)
})

test("missing RESEND_FROM_EMAIL returns 500 and does not send", async () => {
  let sendCount = 0
  const sendEmail: ContactEmailSender = async () => {
    sendCount += 1
    return { id: "email_123" }
  }

  const response = await handleContactRequest(
    contactRequest(VALID_BODY),
    sendEmail,
    {},
  )

  assert.equal(response.status, 500)
  assert.deepEqual(await response.json(), { error: "Contact form is not configured." })
  assert.equal(sendCount, 0)
})

test("sender throwing returns 500", async () => {
  const sendEmail: ContactEmailSender = async () => {
    throw new Error("Resend unavailable")
  }

  const response = await handleContactRequest(
    contactRequest(VALID_BODY),
    sendEmail,
    { RESEND_FROM_EMAIL: "Indocruises <noreply@indocruises.co.id>" },
  )

  assert.equal(response.status, 500)
  assert.deepEqual(await response.json(), { error: "Message could not be sent. Please try again later." })
}
)
