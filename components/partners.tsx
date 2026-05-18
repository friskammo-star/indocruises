"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Globe, Handshake, ArrowUpRight, Ship, Anchor, Wrench } from "lucide-react"

const partners = [
  {
    id: "indocruises-com",
    name: "IndoCruises.com",
    role: "Booking & Guest Support",
    description:
      "Booking and guest support partner for PT. IMS managed vessels — handling reservations, marketing, and end-to-end customer care across the archipelago.",
    logo: "/images/partner-indocruises.png",
    url: "https://www.indocruises.com/",
    icon: Globe,
  },
  {
    id: "pt-sis",
    name: "PT. SIS",
    role: "Shipping Agency",
    description:
      "Professional shipping agency services delivering efficient vessel handling, port coordination, and marine operational support across Indonesia.",
    logo: "/images/pt-sis.jpeg",
    url: "#",
    icon: Ship,
  },
  {
    id: "dnd",
    name: "Dock & Deck Solutions",
    role: "Marine Engineering",
    description:
      "Marine engineering, aluminum vessel procurement, and premium provisioning.",
    logo: "/images/dnd.jpeg",
    url: "https://dockanddecksolutions.com/marine-engineering",
    icon: Wrench,
  },
  {
    id: "cwc",
    name: "CWC",
    role: "",
    description: "",
    logo: "/images/cwc.jpeg",
    url: "#",
    icon: Handshake,
  },
  {
    id: "jms",
    name: "JMS",
    role: "",
    description: "",
    logo: "/images/jms.jpeg",
    url: "#",
    icon: Handshake,
  },
]

export default function Partners() {
  return (
    <section id="partners" className="relative py-32 lg:py-40 bg-deep-navy overflow-hidden">
      {/* Decorative glows */}
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
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
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
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
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
            Collaborating with industry leaders to deliver dependable maritime
            services across the Indonesian archipelago.
          </motion.p>
        </div>

        {/* Partner Cards — 3 columns, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {partners.map((partner, i) => {
            const isExternal = partner.url !== "#"
            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ willChange: "opacity, transform" }}
                className="h-full"
              >
                <a
                  href={partner.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group relative flex h-full flex-col bg-white/[0.04] border border-white/10 hover:border-gold/40 transition-[border-color] duration-500 overflow-hidden"
                >
                  {/* Gold top accent */}
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                  {/* Logo plate */}
                  <div className="relative h-36 bg-white/[0.06] border-b border-white/10 flex items-center justify-center p-6">
                    <div className="relative w-full h-full max-w-[160px]">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 gap-3">
                    {partner.role && (
                      <div className="flex items-center gap-2">
                        <partner.icon className="h-3.5 w-3.5 text-gold" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                          {partner.role}
                        </span>
                      </div>
                    )}

                    <h3 className="font-serif text-xl text-white group-hover:text-gold transition-colors duration-300 leading-tight">
                      {partner.name}
                    </h3>

                    {partner.description && (
                      <p className="text-sm text-white/50 font-light leading-relaxed flex-1">
                        {partner.description}
                      </p>
                    )}

                    {/* Link cue */}
                    {isExternal && (
                      <div className="flex items-center gap-2 pt-3 mt-auto border-t border-white/10 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40 group-hover:text-gold transition-colors duration-300">
                        <span>Visit</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    )}
                  </div>
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
