"use client"

import { motion } from "framer-motion"
import { Anchor, ChevronRight } from "lucide-react"

const openings = [
  {
    title: "Port Operations Coordinator",
    description:
      "Manage port clearances, customs documentation, and logistics for incoming vessels.",
  },
  {
    title: "Hospitality & Service Crew",
    description:
      "Deliver world-class onboard hospitality and guest experience on luxury yachts.",
  },
]

export default function Careers() {
  return (
    <section id="careers" className="relative py-32 lg:py-40 bg-pearl overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <Anchor className="h-4 w-4 text-gold" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-teal">
              Join Our Crew
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl lg:text-5xl xl:text-[3.5rem] text-deep-navy leading-[1.15]"
          >
            Build Your Career at{" "}
            <span className="italic text-teal">Sea</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-20 bg-gold mx-auto mt-6 mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-muted-foreground leading-relaxed font-light"
          >
            Join Indonesia&apos;s leading maritime services team. We&apos;re looking for
            passionate professionals ready to deliver excellence on the water.
          </motion.p>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {openings.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <a
                href="#contact"
                className="group relative block bg-white p-8 border border-foam hover:border-teal/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(8,145,178,0.08)]"
              >
                {/* Gold top accent */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <h3 className="font-serif text-xl text-deep-navy group-hover:text-teal transition-colors duration-300">
                      {job.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 self-center">
                    <span className="flex h-10 w-10 items-center justify-center border border-foam group-hover:border-teal group-hover:bg-teal transition-all duration-300">
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground font-light mb-6">
            Don&apos;t see the right role? We&apos;re always open to hearing from talented
            maritime professionals.
          </p>
          <a
            href="mailto:careers@indocruises.com"
            className="group relative inline-flex items-center gap-3 bg-deep-navy px-10 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-white overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(6,17,42,0.3)]"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Send Your CV
            </span>
            <span className="absolute inset-0 bg-teal translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
