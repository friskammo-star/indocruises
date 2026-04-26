"use client"

import Image from "next/image"

const partners = [
  { id: 1, src: "/images/partner-1.png", alt: "MarineTech Solutions" },
  { id: 2, src: "/images/partner-2.png", alt: "Oceania Shipyards" },
  { id: 3, src: "/images/partner-3.png", alt: "Nautical Logistics" },
  { id: 4, src: "/images/partner-4.png", alt: "BlueWater Insurance" },
]

export default function Partners() {
  return (
    <section className="py-12 bg-white border-y border-foam/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-deep-navy/40">
          Trusted by Industry Leaders
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden">
        {/* Gradient Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex animate-marquee whitespace-nowrap min-w-max">
          {/* First set of logos */}
          <div className="flex items-center justify-around gap-16 px-8 min-w-full">
            {partners.map((partner) => (
              <div key={`set1-${partner.id}`} className="relative h-16 w-40 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
            {/* Repeat again within the same set to ensure enough width for seamless scrolling */}
            {partners.map((partner) => (
              <div key={`set1-repeat-${partner.id}`} className="relative h-16 w-40 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          
          {/* Second identical set of logos for seamless loop */}
          <div className="flex items-center justify-around gap-16 px-8 min-w-full">
            {partners.map((partner) => (
              <div key={`set2-${partner.id}`} className="relative h-16 w-40 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
            {partners.map((partner) => (
              <div key={`set2-repeat-${partner.id}`} className="relative h-16 w-40 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
