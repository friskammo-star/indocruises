"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Anchor, Shield, Globe, Eye, Target, CheckCircle2 } from "lucide-react"

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      className="font-serif text-5xl lg:text-6xl text-gold tabular-nums"
    >
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Counter from={0} to={target} />
          {suffix}
        </motion.span>
      ) : (
        "0" + suffix
      )}
    </motion.span>
  )
}

function Counter({ from, to }: { from: number; to: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {to}
    </motion.span>
  )
}

const stats = [
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 30, suffix: "+", label: "Vessels Managed" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
]

const missions = [
  "Deliver seamless yacht management solutions backed by regional execution",
  "Maximize vessel profitability and asset value through disciplined operations",
  "Maintain the highest safety and compliance standards across every voyage",
  "Elevate guest experiences through refined onboard hospitality and trained crew",
  "Support sustainable tourism throughout Indonesia",
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section id="about" ref={sectionRef} className="relative py-32 lg:py-40 bg-pearl overflow-hidden">
      {/* Decorative compass element */}
      <div className="absolute top-20 right-10 w-64 h-64 opacity-[0.03] animate-compass-spin pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="1" className="text-deep-navy" />
          <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-deep-navy" />
          <line x1="100" y1="5" x2="100" y2="195" stroke="currentColor" strokeWidth="0.5" className="text-deep-navy" />
          <line x1="5" y1="100" x2="195" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-deep-navy" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          {/* Images Column */}
          <motion.div
            className="lg:col-span-5 relative"
            style={{ y: imageY }}
          >
            <div className="relative">
              {/* Main image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-[500px] lg:h-[600px] w-full overflow-hidden"
              >
                <Image
                  src="/images/about-bg.jpeg"
                  alt="Luxury yacht managed by Indocruises"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Gold accent line */}
              <div className="absolute -left-6 top-10 w-px h-32 bg-gradient-to-b from-transparent via-gold to-transparent hidden lg:block" />
            </div>
          </motion.div>

          {/* Text Column */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <Anchor className="h-4 w-4 text-gold" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-teal">About Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl lg:text-5xl xl:text-[3.5rem] text-deep-navy leading-[1.15]"
            >
              Setting the Standard for{" "}
              <span className="italic text-teal">Maritime Excellence</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] w-20 bg-gold origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed font-light"
            >
              PT. IMS is a premium Indonesian yacht and liveaboard management company focused on vessel operations, charter management, marine hospitality, technical support, and commercial yacht services across Indonesia. Its international team supports private owners and commercial operators with practical expertise developed over decades in Indonesian waters.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg text-muted-foreground leading-relaxed font-light"
            >
              With a focus on strong service standards, operational discipline, and sustainable marine tourism, PT. IMS supports private owners, investors, and charter operators across Komodo, Raja Ampat, the Banda Sea, Ambon, and Indonesia&apos;s remote cruising grounds.
            </motion.p>

            {/* Vision & Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4"
            >
              {/* Vision */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center bg-teal/10">
                    <Eye className="h-5 w-5 text-teal" />
                  </div>
                  <h4 className="font-serif text-xl text-deep-navy">Our Vision</h4>
                </div>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  To become Indonesia&apos;s leading integrated yacht and liveaboard management company, delivering refined marine hospitality grounded in operational discipline and trusted crew standards.
                </p>
              </div>

              {/* Mission */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center bg-teal/10">
                    <Target className="h-5 w-5 text-teal" />
                  </div>
                  <h4 className="font-serif text-xl text-deep-navy">Our Mission</h4>
                </div>
                <ul className="space-y-2">
                  {missions.map((mission, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground font-light leading-relaxed">{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 relative bg-deep-navy text-white overflow-hidden"
        >
          {/* Wave pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.1] pointer-events-none"
            style={{
              backgroundImage: "url('/images/wave-pattern.png')",
              backgroundSize: "500px",
              backgroundRepeat: "repeat",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center py-12 px-8 ${
                  i < stats.length - 1 ? "md:border-r border-b md:border-b-0 border-white/10" : ""
                }`}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
                <span className="mt-3 text-[11px] uppercase tracking-[0.25em] text-white/50 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
