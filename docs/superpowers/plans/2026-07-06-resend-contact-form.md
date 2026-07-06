# Resend Contact Form Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the homepage contact form send inquiries to `info@indocruises.co.id` through Resend.

**Architecture:** Keep all Resend usage server-side. Split form validation/email payload building into small library functions, route handling into an injectable handler, and `app/api/contact/route.ts` into the thin Resend wiring layer. The client component submits JSON and renders pending/success/error state.

**Tech Stack:** Next.js App Router, React client component, TypeScript, Node built-in test runner, Resend Node.js SDK.

## Global Constraints

- Use existing npm package manager.
- Add dependency: `resend`.
- Resend API key must come from `process.env.RESEND_API_KEY`.
- Sender must come from verified-domain env var `RESEND_FROM_EMAIL`; never use `onboarding@resend.dev` in production code.
- Recipient is fixed: `info@indocruises.co.id`.
- Resend import must be `import { Resend } from "resend"`.
- `resend.emails.send()` must be awaited and its `{ data, error }` result checked.
- SDK params must use camelCase, especially `replyTo`.

---

## File Structure

- Modify `package.json`: add `test` script and `resend` dependency through `npm install resend`.
- Create `lib/contact-email.ts`: parse/validate form input, escape HTML, build Resend email payload.
- Create `lib/contact-email.test.ts`: Node test coverage for valid payload and invalid input.
- Create `lib/contact-handler.ts`: request handler that accepts a send function and env object for testability.
- Create `lib/contact-handler.test.ts`: Node test coverage for status codes and send/no-send behavior.
- Create `app/api/contact/route.ts`: instantiate Resend and call `handleContactRequest()`.
- Modify `components/contact.tsx`: controlled form submission to `/api/contact` with status UI.

---

### Task 1: Contact email payload library

**Files:**
- Create: `lib/contact-email.ts`
- Test: `lib/contact-email.test.ts`
- Modify: `package.json`

**Interfaces:**
- Produces:
  - `type ContactFormInput = { name: string; email: string; subject: string; message: string }`
  - `type ContactEmailPayload = { from: string; to: string[]; subject: string; replyTo: string; html: string; text: string; tags: { name: string; value: string }[] }`
  - `const CONTACT_EMAIL_TO = "info@indocruises.co.id"`
  - `function parseContactFormInput(value: unknown): ContactFormInput | null`
  - `function buildContactEmail(input: ContactFormInput, from: string): ContactEmailPayload`

- [ ] **Step 1: Install Resend and add test script**

Run:

```bash
npm install resend
```

Then update `package.json` scripts to include Node tests:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "test": "node --test"
  }
}
```

- [ ] **Step 2: Write the failing payload test**

Create `lib/contact-email.test.ts`:

```ts
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
```

- [ ] **Step 3: Run test to verify it fails**

Run:

```bash
npm test -- lib/contact-email.test.ts
```

Expected: FAIL with module-not-found for `./contact-email.ts`.

- [ ] **Step 4: Write minimal implementation**

Create `lib/contact-email.ts`:

```ts
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

function readTrimmedString(source: Record<string, unknown>, key: keyof ContactFormInput) {
  const value = source[key]
  return typeof value === "string" ? value.trim() : ""
}

export function parseContactFormInput(value: unknown): ContactFormInput | null {
  if (!value || typeof value !== "object") return null

  const source = value as Record<string, unknown>
  const input = {
    name: readTrimmedString(source, "name"),
    email: readTrimmedString(source, "email"),
    subject: readTrimmedString(source, "subject"),
    message: readTrimmedString(source, "message"),
  }

  if (!input.name || !input.subject || !input.message || !EMAIL_PATTERN.test(input.email)) {
    return null
  }

  return input
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

export function buildContactEmail(input: ContactFormInput, from: string): ContactEmailPayload {
  const text = [
    `Full Name: ${input.name}`,
    `Email Address: ${input.email}`,
    `Subject: ${input.subject}`,
    "",
    "Message:",
    input.message,
  ].join("\n")

  const html = `
    <h2>Website Contact Form Inquiry</h2>
    <p><strong>Full Name:</strong> ${escapeHtml(input.name)}</p>
    <p><strong>Email Address:</strong> ${escapeHtml(input.email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(input.subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(input.message).replaceAll("\n", "<br />")}</p>
  `

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
```

- [ ] **Step 5: Run test to verify it passes**

Run:

```bash
npm test -- lib/contact-email.test.ts
```

Expected: PASS for 3 tests.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json lib/contact-email.ts lib/contact-email.test.ts
git commit -m "Add contact email payload builder"
```

---

### Task 2: Injectable contact API handler

**Files:**
- Create: `lib/contact-handler.ts`
- Test: `lib/contact-handler.test.ts`

**Interfaces:**
- Consumes from Task 1:
  - `buildContactEmail(input, from)`
  - `parseContactFormInput(value)`
  - `ContactEmailPayload`
- Produces:
  - `type ContactEmailSender = (payload: ContactEmailPayload) => Promise<{ id: string }>`
  - `function handleContactRequest(request: Request, sendEmail: ContactEmailSender, env: { RESEND_FROM_EMAIL?: string }): Promise<Response>`

- [ ] **Step 1: Write the failing handler test**

Create `lib/contact-handler.test.ts`:

```ts
import assert from "node:assert/strict"
import test from "node:test"

import { CONTACT_EMAIL_TO } from "./contact-email.ts"
import { handleContactRequest, type ContactEmailSender } from "./contact-handler.ts"

function jsonRequest(body: unknown) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  })
}

test("sends a valid contact request", async () => {
  const sent: unknown[] = []
  const sendEmail: ContactEmailSender = async (payload) => {
    sent.push(payload)
    return { id: "email_123" }
  }

  const response = await handleContactRequest(
    jsonRequest({
      name: "John Smith",
      email: "john@example.com",
      subject: "How can we help?",
      message: "Tell us about your vessel and requirements...",
    }),
    sendEmail,
    { RESEND_FROM_EMAIL: "Indocruises <noreply@indocruises.co.id>" },
  )

  assert.equal(response.status, 200)
  assert.deepEqual(await response.json(), { ok: true, id: "email_123" })
  assert.equal(sent.length, 1)
  assert.equal((sent[0] as { from: string }).from, "Indocruises <noreply@indocruises.co.id>")
  assert.deepEqual((sent[0] as { to: string[] }).to, [CONTACT_EMAIL_TO])
  assert.equal((sent[0] as { replyTo: string }).replyTo, "john@example.com")
})

test("returns 400 and does not send invalid contact request", async () => {
  let sends = 0
  const sendEmail: ContactEmailSender = async (payload) => {
    sends += 1
    return { id: payload.subject }
  }

  const response = await handleContactRequest(
    jsonRequest({ name: "John", email: "bad", subject: "Hi", message: "Body" }),
    sendEmail,
    { RESEND_FROM_EMAIL: "Indocruises <noreply@indocruises.co.id>" },
  )

  assert.equal(response.status, 400)
  assert.deepEqual(await response.json(), { error: "Please complete all fields with a valid email address." })
  assert.equal(sends, 0)
})

test("returns 500 and does not send when sender env is missing", async () => {
  let sends = 0
  const sendEmail: ContactEmailSender = async () => {
    sends += 1
    return { id: "email_123" }
  }

  const response = await handleContactRequest(
    jsonRequest({ name: "John", email: "john@example.com", subject: "Hi", message: "Body" }),
    sendEmail,
    {},
  )

  assert.equal(response.status, 500)
  assert.deepEqual(await response.json(), { error: "Contact form is not configured." })
  assert.equal(sends, 0)
})

test("returns 500 when email sender fails", async () => {
  const sendEmail: ContactEmailSender = async () => {
    throw new Error("network down")
  }

  const response = await handleContactRequest(
    jsonRequest({ name: "John", email: "john@example.com", subject: "Hi", message: "Body" }),
    sendEmail,
    { RESEND_FROM_EMAIL: "Indocruises <noreply@indocruises.co.id>" },
  )

  assert.equal(response.status, 500)
  assert.deepEqual(await response.json(), { error: "Message could not be sent. Please try again later." })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
npm test -- lib/contact-handler.test.ts
```

Expected: FAIL with module-not-found for `./contact-handler.ts`.

- [ ] **Step 3: Write minimal implementation**

Create `lib/contact-handler.ts`:

```ts
import { buildContactEmail, parseContactFormInput, type ContactEmailPayload } from "./contact-email"

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
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```bash
npm test -- lib/contact-handler.test.ts
```

Expected: PASS for 4 tests.

- [ ] **Step 5: Commit**

```bash
git add lib/contact-handler.ts lib/contact-handler.test.ts
git commit -m "Add contact form request handler"
```

---

### Task 3: Resend route wiring

**Files:**
- Create: `app/api/contact/route.ts`

**Interfaces:**
- Consumes from Task 2:
  - `handleContactRequest(request, sendEmail, env)`
- Produces:
  - `POST(request: Request): Promise<Response>`

- [ ] **Step 1: Write route implementation**

Create `app/api/contact/route.ts`:

```ts
import { Resend } from "resend"

import { handleContactRequest } from "@/lib/contact-handler"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  return handleContactRequest(
    request,
    async (payload) => {
      const { data, error } = await resend.emails.send(payload)

      if (error) {
        throw new Error(error.message)
      }

      if (!data?.id) {
        throw new Error("Resend did not return an email id")
      }

      return { id: data.id }
    },
    { RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL },
  )
}
```

- [ ] **Step 2: Verify Resend guardrails in code**

Check `app/api/contact/route.ts` manually:

```ts
import { Resend } from "resend"
const resend = new Resend(process.env.RESEND_API_KEY)
const { data, error } = await resend.emails.send(payload)
```

Expected: import is from `resend`, API key uses env, send is awaited, `{ data, error }` is checked.

- [ ] **Step 3: Run focused tests**

Run:

```bash
npm test -- lib/contact-email.test.ts lib/contact-handler.test.ts
```

Expected: all 7 tests PASS.

- [ ] **Step 4: Run TypeScript/build verification**

Run:

```bash
npm run build
```

Expected: Next.js build completes without TypeScript or route errors.

- [ ] **Step 5: Commit**

```bash
git add app/api/contact/route.ts
git commit -m "Wire contact form to Resend"
```

---

### Task 4: Client form submission UI

**Files:**
- Modify: `components/contact.tsx`

**Interfaces:**
- Consumes:
  - `POST /api/contact` accepts JSON `{ name, email, subject, message }`.
  - Success response: `{ ok: true, id: string }`.
  - Error response: `{ error: string }`.
- Produces:
  - Contact form with controlled fields, pending button text, success message, error message.

- [ ] **Step 1: Update imports and component state**

Modify the top of `components/contact.tsx`:

```tsx
"use client"

import { FormEvent, useState } from "react"
import { motion } from "framer-motion"
import { Send, Anchor } from "lucide-react"

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [error, setError] = useState("")

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")
    setError("")

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    })

    const result = (await response.json()) as { ok?: boolean; error?: string }

    if (!response.ok) {
      setStatus("error")
      setError(result.error || "Message could not be sent. Please try again later.")
      return
    }

    setForm(initialForm)
    setStatus("sent")
  }
```

Keep the existing JSX after this opening logic.

- [ ] **Step 2: Wire the form element**

Change the form opening tag to:

```tsx
<form onSubmit={handleSubmit} className="bg-white shadow-xl shadow-deep-navy/5 p-10 lg:p-14 space-y-8">
```

- [ ] **Step 3: Wire fields**

For full name input, add:

```tsx
name="name"
value={form.name}
onChange={(event) => updateField("name", event.target.value)}
required
```

For email input, add:

```tsx
name="email"
value={form.email}
onChange={(event) => updateField("email", event.target.value)}
required
```

For subject input, add:

```tsx
name="subject"
value={form.subject}
onChange={(event) => updateField("subject", event.target.value)}
required
```

For message textarea, add:

```tsx
name="message"
value={form.message}
onChange={(event) => updateField("message", event.target.value)}
required
```

- [ ] **Step 4: Add status messages and pending state**

Insert this block immediately before the submit button:

```tsx
{status === "sent" && (
  <p className="text-sm font-light text-teal" role="status">
    Thank you. Your message has been sent.
  </p>
)}

{status === "error" && (
  <p className="text-sm font-light text-red-600" role="alert">
    {error}
  </p>
)}
```

Change the submit button opening tag to:

```tsx
<button
  type="submit"
  disabled={status === "sending"}
  className="group relative inline-flex items-center gap-3 bg-deep-navy px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-white overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(6,17,42,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
>
```

Change the label text inside the button to:

```tsx
{status === "sending" ? "Sending..." : "Send Message"}
```

- [ ] **Step 5: Run build verification**

Run:

```bash
npm run build
```

Expected: build completes without React or TypeScript errors.

- [ ] **Step 6: Commit**

```bash
git add components/contact.tsx
git commit -m "Submit contact form from client"
```

---

### Task 5: Final verification

**Files:**
- Verify: `lib/contact-email.ts`
- Verify: `lib/contact-handler.ts`
- Verify: `app/api/contact/route.ts`
- Verify: `components/contact.tsx`
- Verify: `package.json`

**Interfaces:**
- Consumes all previous tasks.
- Produces verified feature ready for deploy with env vars.

- [ ] **Step 1: Run focused tests**

Run:

```bash
npm test -- lib/contact-email.test.ts lib/contact-handler.test.ts
```

Expected: all 7 tests PASS.

- [ ] **Step 2: Run production build**

Run:

```bash
npm run build
```

Expected: build completes successfully.

- [ ] **Step 3: Verify Resend compliance**

Check these exact facts in the final code:

```ts
import { Resend } from "resend"
const resend = new Resend(process.env.RESEND_API_KEY)
const { data, error } = await resend.emails.send(payload)
replyTo: input.email
from,
to: [CONTACT_EMAIL_TO]
```

Expected:

- `Resend` import is from `resend`.
- API key is only env-based.
- send call is awaited.
- `{ data, error }` is checked.
- params use `replyTo`, not `reply_to`.
- production sender uses `RESEND_FROM_EMAIL`, not `onboarding@resend.dev`.
- recipient is `info@indocruises.co.id`.

- [ ] **Step 4: Commit verification-only changes if any**

If final verification required edits, commit them:

```bash
git add package.json package-lock.json lib/contact-email.ts lib/contact-email.test.ts lib/contact-handler.ts lib/contact-handler.test.ts app/api/contact/route.ts components/contact.tsx
git commit -m "Polish Resend contact form"
```

If there are no edits, do not create an empty commit.
