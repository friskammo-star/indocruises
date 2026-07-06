export type ContactFormInput = {
  name: string
  email: string
  subject: string
  message: string
}

export type ContactEmailPayload = {
  from: string
  to: string[]
  subject: string
  replyTo: string
  html: string
  text: string
  tags: { name: string; value: string }[]
}

export const CONTACT_EMAIL_TO = "info@indocruises.co.id"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const HTML_ESCAPE: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
}

function hasStringField(value: unknown, field: keyof ContactFormInput): value is Record<keyof ContactFormInput, string> {
  return typeof value === "object" && value !== null && typeof (value as Record<string, unknown>)[field] === "string"
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => HTML_ESCAPE[character])
}

export function parseContactFormInput(value: unknown): ContactFormInput | null {
  if (!["name", "email", "subject", "message"].every((field) => hasStringField(value, field as keyof ContactFormInput))) {
    return null
  }

  const input = {
    name: value.name.trim(),
    email: value.email.trim(),
    subject: value.subject.trim(),
    message: value.message.trim(),
  }

  if (!input.name || !EMAIL_PATTERN.test(input.email) || !input.subject || !input.message) {
    return null
  }

  return input
}

export function buildContactEmail(input: ContactFormInput, from: string): ContactEmailPayload {
  const text = `Full Name: ${input.name}\nEmail Address: ${input.email}\nSubject: ${input.subject}\n\nMessage:\n${input.message}`
  const html = `<p><strong>Full Name:</strong> ${escapeHtml(input.name)}</p><p><strong>Email Address:</strong> ${escapeHtml(input.email)}</p><p><strong>Subject:</strong> ${escapeHtml(input.subject)}</p><p><strong>Message:</strong><br>${escapeHtml(input.message).replace(/\n/g, "<br>")}</p>`

  return {
    from,
    to: [CONTACT_EMAIL_TO],
    subject: `Website inquiry: ${input.subject}`,
    replyTo: input.email,
    html,
    text,
    tags: [{ name: "category", value: "contact_form" }],
  }
}
