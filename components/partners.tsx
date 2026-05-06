"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Anchor, Globe, Handshake, ChevronRight } from "lucide-react"

const featuredPartners = [
  {
    id: "bgm",
    name: "Bali Gapura Marina",
    role: "Official Partner",
    description:
      "Our official marina partner providing world-class berthing facilities, marine fuel, and comprehensive port services in the heart of Bali.",
    logo: "/images/BALI GAPURA LOGO.png",
    url: "https://baligapuramarina.com",
    icon: Anchor,
  },
  {
    id: "indocruises-com",
    name: "IndoCruises.com",
    role: "Marketing & Booking Support",
    description:
      "Your gateway to seamless cruise bookings across the Indonesian archipelago. Handling all marketing, reservations, and customer support.",
    logo: "/images/partner-indocruises.png",
    url: "https://www.indocruises.com/",
    icon: Globe,
  },
]

export default function Partners() {
  return (
    <section id="partners" className="relative py-32 lg:py-40 bg-deep-navy overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Batik pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: "url('/images/batik-pattern.png')",
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header — same structure as Careers, adapted for dark bg */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <Handshake className="h-4 w-4 text-gold" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-gold">
              Strategic Alliances
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl lg:text-5xl xl:text-[3.5rem] text-white leading-[1.15]"
          >
            Our{" "}
            <span className="italic text-gold">Partners</span>
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
            className="text-lg text-white/50 leading-relaxed font-light"
          >
            Collaborating with industry leaders to deliver unmatched maritime
            excellence across the Indonesian archipelago.
          </motion.p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredPartners.map((partner, i) => (
            <motion.div
              key={partner.id}
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
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block bg-white/[0.05] backdrop-blur-sm p-8 border border-white/10 hover:border-gold/40 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(251,191,36,0.08)]"
              >
                {/* Gold top accent */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  {/* Logo */}
                  <div className="relative flex-shrink-0 h-20 w-32 bg-white/10 rounded-lg overflow-hidden flex items-center justify-center p-3">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Info */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <partner.icon className="h-3.5 w-3.5 text-gold" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                        {partner.role}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-white group-hover:text-gold transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-white/40 font-light leading-relaxed">
                      {partner.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 self-center">
                    <span className="flex h-10 w-10 items-center justify-center border border-white/10 group-hover:border-gold group-hover:bg-gold transition-all duration-300">
                      <ChevronRight className="h-4 w-4 text-white/40 group-hover:text-deep-navy transition-colors duration-300" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
