import assert from "node:assert/strict"
import test from "node:test"

import {
  CONTACT_EMAIL_TO,
  buildContactEmail,
  parseContactFormInput,
} from "./contact-email.ts"

test("builds a Resend contact email payload", () => {
  const input = parseContactFormInput({
    name: "John Smith",
    email: "john@example.com",
    subject: "How can we help?",
    message: "Tell us about your vessel and requirements...",
  })

  assert.deepEqual(input, {
    name: "John Smith",
    email: "john@example.com",
    subject: "How can we help?",
    message: "Tell us about your vessel and requirements...",
  })

  const payload = buildContactEmail(input, "Indocruises <noreply@indocruises.co.id>")

  assert.equal(payload.from, "Indocruises <noreply@indocruises.co.id>")
  assert.deepEqual(payload.to, [CONTACT_EMAIL_TO])
  assert.equal(payload.replyTo, "john@example.com")
  assert.equal(payload.subject, "Website inquiry: How can we help?")
  assert.match(payload.text, /Full Name: John Smith/)
  assert.match(payload.text, /Email Address: john@example\.com/)
  assert.match(payload.text, /Message:\nTell us about your vessel and requirements\.\.\./)
  assert.match(payload.html, /<strong>Full Name:<\/strong> John Smith/)
  assert.deepEqual(payload.tags, [{ name: "category", value: "contact_form" }])
})

test("rejects missing or malformed contact form input", () => {
  assert.equal(parseContactFormInput({ name: "", email: "john@example.com", subject: "Hi", message: "Body" }), null)
  assert.equal(parseContactFormInput({ name: "John", email: "not-an-email", subject: "Hi", message: "Body" }), null)
  assert.equal(parseContactFormInput({ name: "John", email: "john@example.com", subject: "", message: "Body" }), null)
  assert.equal(parseContactFormInput({ name: "John", email: "john@example.com", subject: "Hi", message: "" }), null)
})

test("escapes HTML in contact email content", () => {
  const input = parseContactFormInput({
    name: "<John>",
    email: "john@example.com",
    subject: "Need <script>",
    message: "A & B < C",
  })

  assert.ok(input)

  const payload = buildContactEmail(input, "Indocruises <noreply@indocruises.co.id>")

  assert.doesNotMatch(payload.html, /<script>/)
  assert.match(payload.html, /&lt;John&gt;/)
  assert.match(payload.html, /A &amp; B &lt; C/)
})
