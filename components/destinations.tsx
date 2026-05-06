"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Anchor, MapPin, Navigation } from "lucide-react"

const destinations = [
  {
    name: "Komodo National Park",
    description: "Home to the legendary Komodo dragons and world-class diving with pristine coral reefs and thrilling drift dives.",
    image: "/images/komodo-national-park.png",
  },
  {
    name: "Raja Ampat",
    description: "The crown jewel of marine biodiversity — over 1,500 fish species and 600 coral species in crystal-clear waters.",
    image: "/images/raja-ampat.png",
  },
  {
    name: "Banda Sea",
    description: "Remote pelagic encounters and historic spice islands offering some of Indonesia's most exclusive diving experiences.",
    image: "/images/banda-sea.png",
  },
  {
    name: "Ambon",
    description: "A macro photographer's paradise with rare critters, vibrant coral walls, and the famous Ambon Bay muck diving.",
    image: "/images/ambon.png",
  },
  {
    name: "Alor",
    description: "Untouched reefs, dramatic walls, and exhilarating currents in one of Indonesia's most pristine diving frontiers.",
    image: "/images/alor.png",
  },
  {
    name: "Forgotten Islands",
    description: "A true off-the-grid adventure through remote atolls and uninhabited islands in the far eastern reaches of Indonesia.",
    image: "/images/forgotten-islands.png",
  },
  {
    name: "Flores",
    description: "Dramatic volcanic landscapes, traditional villages, and vibrant underwater seascapes along Indonesia's eastern corridor.",
    image: "/images/flores.png",
  },
  {
    name: "Sulawesi",
    description: "From the Bunaken Marine Park to the Togean Islands — diverse marine habitats and rich cultural heritage.",
    image: "/images/sulawesi.png",
  },
]

export default function Destinations() {
  return (
    <section id="destinations" className="relative py-32 lg:py-40 bg-pearl overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-teal/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <Navigation className="h-4 w-4 text-gold" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-teal">
              Where We Operate
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl lg:text-5xl xl:text-[3.5rem] text-deep-navy leading-[1.15]"
          >
            Premier Marine{" "}
            <span className="italic text-teal">Destinations</span>
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
            PT. IMS operates throughout Indonesia&apos;s most extraordinary marine
            destinations — from the legendary reefs of Raja Ampat to the remote
            frontiers of the Banda Sea.
          </motion.p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden bg-white border border-foam hover:border-teal/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(8,145,178,0.08)]"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-deep-navy/20 to-transparent" />

                {/* Location pin overlay */}
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-gold" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/90">
                    Indonesia
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Gold top accent */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />

                <h3 className="font-serif text-lg text-deep-navy group-hover:text-teal transition-colors duration-300 mb-2">
                  {dest.name}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {dest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
