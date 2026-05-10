"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  Settings,
  Map,
  Star,
  Globe,
  Anchor,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
} from "lucide-react"

const reasons = [
  {
    title: "Integrated Full-Service Management",
    description:
      "Complete end-to-end vessel management covering every operational, technical, and commercial aspect under one trusted partner.",
    icon: Settings,
  },
  {
    title: "Deep Indonesian Operational Expertise",
    description:
      "Extensive local knowledge of Indonesia's maritime regulations, port systems, and cruising grounds built over decades.",
    icon: Map,
  },
  {
    title: "Refined Hospitality Standards",
    description:
      "A disciplined service culture embedded across every guest touchpoint — from refined dining to carefully planned excursions.",
    icon: Star,
  },
  {
    title: "International, Multi-Disciplinary Team",
    description:
      "An international team of captains, engineers, and hospitality specialists supported by a global charter network of brokers, OTAs, and luxury travel partners.",
    icon: Globe,
  },
  {
    title: "Experienced Marine Professionals",
    description:
      "Seasoned captains, engineers, and hospitality leads with deep experience operating across Indonesian waters.",
    icon: Anchor,
  },
  {
    title: "Strong Safety & Compliance Systems",
    description:
      "Rigorous safety management, regulatory compliance, and risk mitigation frameworks that protect your asset and guests.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable Management Solutions",
    description:
      "Flexible service models tailored to private yachts, commercial liveaboards, and growing fleet operations.",
    icon: TrendingUp,
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-32 lg:py-40 bg-deep-navy overflow-hidden">
      {/* Top SVG Wave divider */}
      <div className="absolute -top-px left-0 right-0 overflow-hidden text-[var(--pearl)] pointer-events-none z-10">
        <svg
          viewBox="0 0 2880 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[200%] h-16 md:h-20 animate-wave-drift"
          style={{ animationDuration: '8s' }}
          preserveAspectRatio="none"
        >
          <path
            d="M 0 40 Q 360 80 720 40 T 1440 40 T 2160 40 T 2880 40 V 0 H 0 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services-bg.jpg"
          alt="Ocean background"
          fill
          className="object-cover opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-deep-navy/98 to-deep-navy" />
      </div>

      {/* Batik pattern overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: "url('/images/batik-pattern.png')",
          backgroundSize: "500px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Decorative glow accents */}
      <div className="absolute top-20 -left-40 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-teal/[0.04] rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Noise texture */}
      <div className="absolute inset-0 z-[2] noise-overlay" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="h-px w-8 bg-gold/50" />
            <Anchor className="h-4 w-4 text-gold" />
            <span className="h-px w-8 bg-gold/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-tight"
          >
            Why Choose{" "}
            <span className="italic text-gold">PT. IMS</span>
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
            Trusted by vessel owners for dependable maritime management, combining deep Indonesian expertise with international service standards.
          </motion.p>
        </div>

        {/* Reasons Grid — 3 columns top, 4 columns bottom for visual balance */}
        <div className="space-y-6">
          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.slice(0, 3).map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] p-8 lg:p-10 transition-all duration-700 hover:bg-white/[0.08] hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover top accent */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold via-gold to-gold/50 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                {/* Icon */}
                <div className="relative h-14 w-14 flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors duration-500" />
                  <reason.icon className="h-6 w-6 text-gold relative z-10 transition-transform duration-500 group-hover:scale-110" />
                </div>

                <h3 className="font-serif text-lg text-white mb-3 group-hover:text-gold transition-colors duration-500">
                  {reason.title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed font-light group-hover:text-white/60 transition-colors duration-500">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom row: 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.slice(3).map((reason, i) => (
              <motion.div
                key={i + 3}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: (i + 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] p-8 transition-all duration-700 hover:bg-white/[0.08] hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover top accent */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold via-gold to-gold/50 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                {/* Icon */}
                <div className="relative h-14 w-14 flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors duration-500" />
                  <reason.icon className="h-6 w-6 text-gold relative z-10 transition-transform duration-500 group-hover:scale-110" />
                </div>

                <h3 className="font-serif text-lg text-white mb-3 group-hover:text-gold transition-colors duration-500">
                  {reason.title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed font-light group-hover:text-white/60 transition-colors duration-500">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom SVG Wave divider */}
      <div className="absolute -bottom-px left-0 right-0 overflow-hidden text-[var(--pearl)] pointer-events-none z-[3] rotate-180">
        <svg
          viewBox="0 0 2880 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[200%] h-16 md:h-20 animate-wave-drift"
          style={{ animationDuration: '8s' }}
          preserveAspectRatio="none"
        >
          <path
            d="M 0 40 Q 360 80 720 40 T 1440 40 T 2160 40 T 2880 40 V 0 H 0 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  )
}
