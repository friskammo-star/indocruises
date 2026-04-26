"use client"

import Image from "next/image"

const partners = [
  { id: 1, src: "/images/partner-1.png", name: "MarineTech Solutions" },
  { id: 2, src: "/images/partner-2.png", name: "Oceania Shipyards" },
  { id: 3, src: "/images/partner-3.png", name: "Nautical Logistics" },
  { id: 4, src: "/images/partner-4.png", name: "BlueWater Insurance" },
]

const logos = [...partners, ...partners]

export default function Partners() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by Industry Leaders
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="flex animate-marquee items-center">
            {logos.map((partner, i) => (
              <div
                key={`logo-${i}`}
                className="flex-shrink-0 mx-6 relative h-12 w-32 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
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
