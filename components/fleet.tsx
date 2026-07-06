"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Anchor, ChevronLeft, ChevronRight, Ruler, Users, UserCog } from "lucide-react"

const vessels = [
  {
    name: "Ocean Majesty",
    category: "Luxury Motor Yacht",
    length: "120 ft",
    guests: "12 Guests",
    crew: "8 Crew",
    image: "/images/yacht-1.jpg",
    description:
      "We manage every detail of this luxury motor yacht — from maintenance and crew to provisioning and regulatory compliance.",
  },
  {
    name: "Azure Explorer",
    category: "Expedition Vessel",
    length: "145 ft",
    guests: "16 Guests",
    crew: "12 Crew",
    image: "/images/yacht-2.jpg",
    description:
      "Full operational management for this expedition vessel — ensuring seamless voyages across the Indonesian archipelago.",
  },
  {
    name: "Pacific Pearl",
    category: "Private Charter",
    length: "95 ft",
    guests: "8 Guests",
    crew: "5 Crew",
    image: "/images/hero-yacht.jpg",
    description:
      "End-to-end charter management for this sleek vessel — handling logistics, crew, and guest experience with precision.",
  },
]

export default function Fleet() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(0)

  const go = (index: number) => {
    setDirection(index > active ? 1 : -1)
    setActive(index)
  }

  const prev = () => {
    setDirection(-1)
    setActive((a) => (a - 1 + vessels.length) % vessels.length)
  }

  const next = () => {
    setDirection(1)
    setActive((a) => (a + 1) % vessels.length)
  }

  const vessel = vessels[active]

  const imageVariants = {
    enter: (d: number) => ({ opacity: 0, scale: 1.1, x: d > 0 ? 80 : -80 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, scale: 0.95, x: d > 0 ? -80 : 80 }),
  }

  return (
    <section id="fleet" className="relative bg-deep-navy overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay z-[1]" />

      {/* Wave divider at top */}
      <div className="absolute -top-px left-0 right-0 overflow-hidden text-[var(--pearl)] pointer-events-none z-[2]">
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

      <div className="relative z-10">
        {/* ─── Top: Section Header ─── */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 lg:pt-40 pb-16">
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <span className="h-px w-8 bg-gold/50" />
              <Anchor className="h-4 w-4 text-gold" />
              <span className="h-px w-8 bg-gold/50" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-[1.1]"
            >
              Vessels We{" "}
              <span className="italic text-white/50">Proudly Manage</span>
            </motion.h2>
          </div>
        </div>

        {/* ─── Main: Full-width Showcase ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
          {/* Left: Full-bleed Image */}
          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={vessel.image}
                  alt={vessel.name}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-deep-navy/40 z-[1] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent z-[1] lg:hidden" />

            {/* Gold corner accent */}
            <div className="absolute top-8 left-8 z-[2]">
              <div className="w-px h-12 bg-gold/50" />
              <div className="h-px w-12 bg-gold/50 -mt-12" />
            </div>

            {/* Vessel number — big watermark */}
            <motion.span
              key={`num-${active}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.07, y: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute bottom-6 left-8 font-serif text-[10rem] lg:text-[14rem] leading-none text-white z-[2] select-none pointer-events-none"
            >
              {String(active + 1).padStart(2, "0")}
            </motion.span>
          </div>

          {/* Right: Details Panel */}
          <div className="relative flex flex-col justify-center px-8 lg:px-20 py-16 lg:py-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                {/* Category badge */}
                <span className="inline-block text-gold text-[11px] uppercase tracking-[0.3em] font-semibold border border-gold/30 px-4 py-1.5">
                  {vessel.category}
                </span>

                {/* Name */}
                <h3 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1]">
                  {vessel.name}
                </h3>

                {/* Gold bar */}
                <div className="h-[2px] w-16 bg-gold" />

                {/* Description */}
                <p className="text-white/60 text-lg leading-relaxed font-light max-w-md">
                  {vessel.description}
                </p>

                {/* Specs row */}
                <div className="flex items-center gap-8 pt-4">
                  <div className="flex items-center gap-3">
                    <Ruler className="h-4 w-4 text-teal" />
                    <div>
                      <span className="text-white/40 text-[10px] uppercase tracking-wider block">Length</span>
                      <span className="text-white text-sm font-serif">{vessel.length}</span>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-teal" />
                    <div>
                      <span className="text-white/40 text-[10px] uppercase tracking-wider block">Capacity</span>
                      <span className="text-white text-sm font-serif">{vessel.guests}</span>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div className="flex items-center gap-3">
                    <UserCog className="h-4 w-4 text-teal" />
                    <div>
                      <span className="text-white/40 text-[10px] uppercase tracking-wider block">Crew</span>
                      <span className="text-white text-sm font-serif">{vessel.crew}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="mt-16 flex items-center justify-between">
              {/* Dot indicators */}
              <div className="flex items-center gap-3">
                {vessels.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className="group flex items-center"
                    aria-label={`View vessel ${i + 1}`}
                  >
                    <span
                      className={`block h-[3px] rounded-full transition-all duration-500 ${
                        i === active
                          ? "w-10 bg-gold shadow-[0_0_8px_rgba(212,168,67,0.4)]"
                          : "w-4 bg-white/20 group-hover:bg-white/40 group-hover:w-6"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-12 h-12 flex items-center justify-center border border-white/15 text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
                  aria-label="Previous vessel"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 flex items-center justify-center border border-white/15 text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
                  aria-label="Next vessel"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom spacer */}
        <div className="h-20 lg:h-28" />
      </div>
    </section>
  )
}
