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
