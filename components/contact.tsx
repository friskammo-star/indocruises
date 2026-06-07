"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Anchor } from "lucide-react"

export default function Contact() {
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

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-deep-navy/5 group-hover:bg-deep-navy transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-deep-navy/60 group-hover:text-gold transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-deep-navy text-sm mb-1">Head Office</h4>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    Jl. Kunti II No.67<br />Seminyak, Kuta, Badung<br />Bali, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-deep-navy/5 group-hover:bg-deep-navy transition-colors duration-300">
                  <Mail className="h-5 w-5 text-deep-navy/60 group-hover:text-gold transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-deep-navy text-sm mb-1">Email</h4>
                  <a href="mailto:info@indocruises.co.id" className="text-teal text-sm hover:text-deep-navy transition-colors">
                    info@indocruises.co.id
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-deep-navy/5 group-hover:bg-deep-navy transition-colors duration-300">
                  <Phone className="h-5 w-5 text-deep-navy/60 group-hover:text-gold transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-deep-navy text-sm mb-1">Telp/WA</h4>
                  <a href="https://wa.me/628113988988" target="_blank" rel="noopener noreferrer" className="text-teal text-sm hover:text-deep-navy transition-colors">
                    0811-3988-988
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form className="bg-white shadow-xl shadow-deep-navy/5 p-10 lg:p-14 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-deep-navy/80">Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Smith"
                    className="w-full border-0 border-b border-foam bg-transparent py-3 text-deep-navy placeholder:text-muted-foreground/50 focus:outline-none focus:border-teal transition-colors font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-deep-navy/80">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border-0 border-b border-foam bg-transparent py-3 text-deep-navy placeholder:text-muted-foreground/50 focus:outline-none focus:border-teal transition-colors font-light"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-subject" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-deep-navy/80">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="How can we help?"
                  className="w-full border-0 border-b border-foam bg-transparent py-3 text-deep-navy placeholder:text-muted-foreground/50 focus:outline-none focus:border-teal transition-colors font-light"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-deep-navy/80">Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell us about your vessel and requirements..."
                  className="w-full border-0 border-b border-foam bg-transparent py-3 text-deep-navy placeholder:text-muted-foreground/50 focus:outline-none focus:border-teal transition-colors font-light resize-none"
                />
              </div>

              <button
                type="submit"
                className="group relative inline-flex items-center gap-3 bg-deep-navy px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-white overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(6,17,42,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-deep-navy">
                  Send Message
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
