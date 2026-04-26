"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const slides = [
  {
    image: "/images/indonesian-cruise.png",
    subtitle: "Welcome to Indocruises",
    title: "World-Class Vessel\nManagement",
    description: "Indonesia's market leader in full-service yacht management, delivering uncompromising excellence across the archipelago.",
  },
  {
    image: "/images/indonesian-cruise-2.png",
    subtitle: "Expertise & Integrity",
    title: "Navigating Excellence\nSince Day One",
    description: "A wealth of experience, extensive regional knowledge, and reputable contacts — all at your service.",
  },
  {
    image: "/images/indonesian-cruise-3.png",
    subtitle: "Your Trusted Partner",
    title: "Luxury Meets\nReliability",
    description: "Real-time assistance and unwavering commitment to the highest standards of maritime service.",
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  return (
    <section className="relative h-screen overflow-hidden bg-deep-navy">
      {/* Background images with Ken Burns */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.8 }, scale: { duration: 20, ease: "linear" } }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays — cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/70 via-deep-navy/30 to-deep-navy/80 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/60 via-transparent to-transparent z-[1]" />

      {/* Subtle animated grain */}
      <div className="absolute inset-0 z-[2] noise-overlay opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Subtitle line */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-5"
                >
                  <span className="h-px w-10 bg-gold" />
                  <span className="text-gold text-xs font-semibold uppercase tracking-[0.3em]">
                    {slides[current].subtitle}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] font-normal text-white leading-[1.05] whitespace-pre-line"
                >
                  {slides[current].title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-lg lg:text-xl text-white/75 max-w-xl leading-relaxed font-light"
                >
                  {slides[current].description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-wrap gap-5 pt-4"
                >
                  <a
                    href="#services"
                    className="group relative inline-flex items-center gap-3 bg-gold px-10 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-deep-navy overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_35px_rgba(212,168,67,0.45)]"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Explore Services</span>
                    <span className="absolute inset-0 bg-teal translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center gap-3 border border-white/30 bg-white/5 backdrop-blur-md px-10 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white/15 hover:border-white/50"
                  >
                    Discover More
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide indicators — vertical on right side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className="group relative flex items-center justify-center"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`block w-[3px] rounded-full transition-all duration-500 ${
                index === current
                  ? "h-10 bg-gold shadow-[0_0_8px_rgba(212,168,67,0.5)]"
                  : "h-4 bg-white/30 group-hover:bg-white/60 group-hover:h-6"
              }`}
            />
          </button>
        ))}
      </div>

    </section>
  )
}
