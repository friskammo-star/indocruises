"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Anchor, Globe, Handshake, ArrowUpRight, Ship } from "lucide-react"

const featuredPartners = [
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
      "Marine engineering, aluminum vessel procurement, and premium provisioning — supporting build quality and onboard standards across the managed fleet.",
    logo: "/images/dnd.jpeg",
    url: "https://dockanddecksolutions.com/marine-engineering",
    icon: Anchor,
  },
]

const logoPartners = [
  {
    id: "bgm",
    name: "Bali Gapura Marina",
    logo: "/images/bali-gapura-marina.png",
    url: "https://baligapuramarina.com",
  },
  {
    id: "cwc",
    name: "CWC",
    logo: "/images/cwc.jpeg",
    url: "#",
  },
  {
    id: "jms",
    name: "JMS",
    logo: "/images/jms.jpeg",
    url: "#",
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

        {/* Featured Partner Cards — 3 equal vertical columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredPartners.map((partner, i) => {
            const isExternal = partner.url !== "#"
            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ willChange: "opacity, transform" }}
                className="h-full"
              >
                <a
                  href={partner.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group relative flex h-full flex-col bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-gold/40 transition-[border-color,background-color,box-shadow] duration-500 hover:bg-white/[0.06] hover:shadow-[0_12px_48px_rgba(251,191,36,0.08)] overflow-hidden"
                >
                  {/* Gold top accent */}
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                  {/* Logo plate — prominent focal point */}
                  <div className="relative h-40 bg-white/[0.06] border-b border-white/10 flex items-center justify-center p-8">
                    <div className="relative w-full h-full max-w-[180px]">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-8 gap-4">
                    <div className="flex items-center gap-2">
                      <partner.icon className="h-3.5 w-3.5 text-gold" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                        {partner.role}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-white group-hover:text-gold transition-colors duration-300 leading-tight">
                      {partner.name}
                    </h3>

                    <p className="text-sm text-white/50 font-light leading-relaxed flex-1">
                      {partner.description}
                    </p>

                    {/* Link cue */}
                    {isExternal && (
                      <div className="flex items-center gap-2 pt-4 mt-auto border-t border-white/10 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/40 group-hover:text-gold transition-colors duration-300">
                        <span>Visit Partner</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    )}
                  </div>
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* Logo strip — subtle secondary tier */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20"
        >
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="h-px w-12 bg-white/15" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
              Trusted Collaborators
            </span>
            <span className="h-px w-12 bg-white/15" />
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
            {logoPartners.map((partner) => {
              const isExternal = partner.url !== "#"
              const LogoWrapper: any = isExternal ? "a" : "div"
              const linkProps = isExternal
                ? { href: partner.url, target: "_blank", rel: "noopener noreferrer" }
                : {}

              return (
                <LogoWrapper
                  key={partner.id}
                  {...linkProps}
                  className="group relative flex items-center justify-center h-28 bg-white/[0.06] border border-white/10 hover:border-gold/30 hover:bg-white/[0.1] transition-[border-color,background-color] duration-500 p-6"
                  aria-label={partner.name}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                </LogoWrapper>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
