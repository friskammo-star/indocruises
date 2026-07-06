import { Resend } from "resend"

import { handleContactRequest } from "@/lib/contact-handler"

export async function POST(request: Request) {
  return handleContactRequest(
    request,
    async (payload) => {
      const apiKey = process.env.RESEND_API_KEY?.trim()

      if (!apiKey) {
        throw new Error("Contact email sender unavailable")
      }

      const resend = new Resend(apiKey)
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
