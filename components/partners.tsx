"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Anchor } from "lucide-react"

const partners = [
  { id: 1, src: "/images/partner-1.png", name: "MarineTech Solutions" },
  { id: 2, src: "/images/partner-2.png", name: "Oceania Shipyards" },
  { id: 3, src: "/images/partner-3.png", name: "Nautical Logistics" },
  { id: 4, src: "/images/partner-4.png", name: "BlueWater Insurance" },
]

// Duplicate logos for seamless infinite scroll
const marqueeLogos = [...partners, ...partners, ...partners, ...partners]

export default function Partners() {
  return (
    <section className="relative py-20 lg:py-24 bg-deep-navy overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 noise-overlay opacity-40" />

      {/* Decorative subtle compass */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="95" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="100" cy="100" r="75" fill="none" stroke="white" strokeWidth="0.5" />
          <line x1="100" y1="5" x2="100" y2="195" stroke="white" strokeWidth="0.5" />
          <line x1="5" y1="100" x2="195" y2="100" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-14 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <span className="h-px w-8 bg-gold/40" />
            <Anchor className="h-3.5 w-3.5 text-gold" />
            <span className="h-px w-8 bg-gold/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl lg:text-4xl text-white leading-tight"
          >
            Our Trusted <span className="italic text-gold">Partners</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-white/40 text-sm leading-relaxed font-light max-w-md mx-auto"
          >
            Collaborating with leading maritime organizations to deliver excellence across Indonesia.
          </motion.p>
        </div>

        {/* Marquee */}
        <div className="relative">
          {/* Gradient masks for smooth fade-in/out edges */}
          <div className="absolute top-0 bottom-0 left-0 w-32 lg:w-48 z-10 bg-gradient-to-r from-deep-navy to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-32 lg:w-48 z-10 bg-gradient-to-l from-deep-navy to-transparent pointer-events-none" />

          {/* Track */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee items-center gap-4">
              {marqueeLogos.map((partner, i) => (
                <div
                  key={`logo-${i}`}
                  className="flex-shrink-0 group"
                >
                  <div className="relative h-14 w-14 mx-8 flex items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm transition-all duration-500 group-hover:bg-white/[0.12] group-hover:border-gold/30 group-hover:shadow-[0_0_20px_rgba(212,168,67,0.1)]">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      width={32}
                      height={32}
                      className="object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Names Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-3xl px-6 lg:px-8 mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3"
        >
          {partners.map((partner, i) => (
            <span key={partner.id} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden sm:block w-1 h-1 rounded-full bg-gold/30" />
              )}
              <span className="text-[11px] uppercase tracking-[0.15em] text-white/30 font-medium">
                {partner.name}
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
