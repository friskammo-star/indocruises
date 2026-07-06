import { buildContactEmail, parseContactFormInput, type ContactEmailPayload } from "./contact-email.ts"

export type ContactEmailSender = (payload: ContactEmailPayload) => Promise<{ id: string }>

type ContactEnv = {
  RESEND_FROM_EMAIL?: string
}

function json(body: Record<string, unknown>, status: number) {
  return Response.json(body, { status })
}

export async function handleContactRequest(
  request: Request,
  sendEmail: ContactEmailSender,
  env: ContactEnv,
) {
  const from = env.RESEND_FROM_EMAIL?.trim()

  if (!from) {
    return json({ error: "Contact form is not configured." }, 500)
  }

  let body: unknown

  try {
    body = await request.json()
  } catch {
    return json({ error: "Please complete all fields with a valid email address." }, 400)
  }

  const input = parseContactFormInput(body)

  if (!input) {
    return json({ error: "Please complete all fields with a valid email address." }, 400)
  }

  try {
    const result = await sendEmail(buildContactEmail(input, from))
    return Response.json({ ok: true, id: result.id })
  } catch {
    return json({ error: "Message could not be sent. Please try again later." }, 500)
  }
}
