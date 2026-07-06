"use client"

import { type FormEvent, useState } from "react"
import { motion } from "framer-motion"
import { Send, Anchor } from "lucide-react"

const initialForm = { name: "", email: "", subject: "", message: "" }

type ContactForm = typeof initialForm
type SubmitStatus = "idle" | "sending" | "sent" | "error"

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm)
  const [status, setStatus] = useState<SubmitStatus>("idle")
  const [error, setError] = useState("")

  function updateField(field: keyof ContactForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = (await response.json()) as { ok?: boolean; error?: string }

      if (!response.ok || !data.ok) {
        setStatus("error")
        setError(data.error || "Message could not be sent. Please try again later.")
        return
      }

      setForm(initialForm)
      setStatus("sent")
    } catch {
      setStatus("error")
      setError("Message could not be sent. Please try again later.")
    }
  }
  return (
    <section id="contact" className="relative py-32 lg:py-40 bg-pearl overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <Anchor className="h-4 w-4 text-gold" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-teal">Contact Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl text-deep-navy leading-tight"
          >
            Ready to Set <span className="italic text-teal">Sail?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-10"
          >
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Whether you need full vessel management or specialized support, our team is ready to discuss bespoke solutions.
            </p>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form className="bg-white shadow-xl shadow-deep-navy/5 p-10 lg:p-14 space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-deep-navy/80">Full Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    required
                    className="w-full border-0 border-b border-foam bg-transparent py-3 text-deep-navy placeholder:text-muted-foreground/50 focus:outline-none focus:border-teal transition-colors font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-deep-navy/80">Email Address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    required
                    className="w-full border-0 border-b border-foam bg-transparent py-3 text-deep-navy placeholder:text-muted-foreground/50 focus:outline-none focus:border-teal transition-colors font-light"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-subject" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-deep-navy/80">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={form.subject}
                  onChange={(event) => updateField("subject", event.target.value)}
                  required
                  className="w-full border-0 border-b border-foam bg-transparent py-3 text-deep-navy placeholder:text-muted-foreground/50 focus:outline-none focus:border-teal transition-colors font-light"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-deep-navy/80">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your vessel and requirements..."
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  required
                  className="w-full border-0 border-b border-foam bg-transparent py-3 text-deep-navy placeholder:text-muted-foreground/50 focus:outline-none focus:border-teal transition-colors font-light resize-none"
                />
              </div>

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

              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative inline-flex items-center gap-3 bg-deep-navy px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-white overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(6,17,42,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-deep-navy">
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
