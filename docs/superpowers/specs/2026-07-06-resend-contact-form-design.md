# Resend Contact Form Design

## Goal

Make the existing homepage contact form send inquiries through Resend when visitors click **Send Message**.

## Current State

- `components/contact.tsx` renders a static client-side form.
- `app/page.tsx` renders `<Contact />` on the homepage.
- The project uses Next.js App Router, TypeScript, npm, and no existing email backend.
- Public company email shown in the footer is `info@indocruises.co.id`.

## Selected Approach

Add a server-side App Router endpoint at `app/api/contact/route.ts` and keep Resend calls out of browser code.

Rejected alternatives:

1. Server Action: workable, but adds more coupling to the animated client component.
2. Browser-side Resend call: rejected because it would expose `RESEND_API_KEY`.

## Environment

Required deployment variables:

- `RESEND_API_KEY`: Resend API key.
- `RESEND_FROM_EMAIL`: verified sender using the production domain, e.g. `Indocruises <noreply@indocruises.co.id>`.

The recipient is fixed to `info@indocruises.co.id` per user choice.

## Data Flow

1. Visitor fills `name`, `email`, `subject`, `message`.
2. `Contact` submits JSON to `POST /api/contact`.
3. API route validates required fields and email shape.
4. API route sends via `resend.emails.send()`:
   - `from`: `process.env.RESEND_FROM_EMAIL`
   - `to`: `info@indocruises.co.id`
   - `subject`: `Website inquiry: <subject>`
   - `replyTo`: visitor email
   - `html` and `text`: sanitized inquiry details
   - `tags`: contact form metadata
5. Client shows pending, success, or failure state.

## Error Handling

- Missing env config returns `500` without exposing secrets.
- Invalid input returns `400` with a generic validation message.
- Resend `{ data, error }` response is checked directly.
- Network-level exceptions may be caught separately and returned as generic `500`.
- Client keeps entered values on failure and clears them on success.

## Resend Guardrails

- Import `Resend` from `resend`.
- API key read only from `process.env.RESEND_API_KEY`.
- `resend.emails.send()` is awaited.
- `{ data, error }` response pattern is handled.
- SDK params use camelCase, including `replyTo`.
- Production `from` must come from verified `RESEND_FROM_EMAIL`, not `onboarding@resend.dev`.

## Testing

Use test-first implementation:

1. Add a focused test for the API route that fails before implementation.
2. Mock the `resend` package only at the module boundary.
3. Verify valid payload calls `emails.send()` with `to: info@indocruises.co.id`, `replyTo`, `html`, `text`, and env sender.
4. Verify invalid payload does not send and returns `400`.
5. Run the focused test, then `npm run lint` or `npm run build` for integration verification.
