import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, CheckCircle2, ArrowRight } from "lucide-react"

import Header from "@/components/header"
import Footer from "@/components/footer"

// Exhaustive data for all 4 services
const servicesData: Record<string, any> = {
  "complete-vessel-management": {
    title: "Complete Vessel Management",
    headerImage: "/images/hero-1.jpg",
    overview:
      "Our flagship service offering comprehensive oversight of your luxury vessel. From technical performance to crew scheduling, we ensure your yacht operates flawlessly out of Indonesian ports.",
    features: [
      "24/7 shore-side support and emergency response",
      "Comprehensive preventative maintenance scheduling",
      "Vessel budget forecasting and financial reporting",
      "Crew recruitment, rotation, and payroll management",
      "Insurance administration and claims handling",
    ],
    contentImage: "/images/hero-yacht.jpg",
    contentImageAlt: "Luxury yacht cutting through the ocean",
  },
  "day-to-day-operations": {
    title: "Day-to-Day Operations",
    headerImage: "/images/yacht-2.jpg",
    overview:
      "Seamless daily coordination tailored to the unique challenges of the Indonesian archipelago. We handle the logistics so you and your guests can focus entirely on the voyage.",
    features: [
      "Customised itinerary planning and weather routing",
      "Premium local and international provisioning",
      "Bunkering and fuel quality assurance across remote islands",
      "VIP guest concierge services and shore excursions",
      "Real-time tracking and operational reporting",
    ],
    contentImage: "/images/hero-3.jpg",
    contentImageAlt: "Captain steering a luxury vessel",
  },
  "maintenance-refit": {
    title: "Maintenance & Refit",
    headerImage: "/images/yacht-1.jpg",
    overview:
      "Protect your asset with our expert technical management. We partner with the finest regional dockyards to deliver world-class maintenance, repairs, and total vessel refits.",
    features: [
      "Dry-docking supervision and project management",
      "Machinery overhauls and diagnostic troubleshooting",
      "Hull cleaning, anti-fouling, and aesthetic detailing",
      "Navigational and communication software upgrades",
      "Spare parts sourcing and secure customs clearance",
    ],
    contentImage: "/images/hero-yacht.jpg",
    contentImageAlt: "Yacht dry-docked for maintenance",
  },
  "administrative-compliance": {
    title: "Administrative & Compliance",
    headerImage: "/images/services-bg.jpg",
    overview:
      "Navigating Indonesian maritime law requires localized expertise. We provide seamless back-office support, ensuring your vessel is always fully compliant and cleared to sail.",
    features: [
      "Flag state and classification society compliance",
      "Indonesian cruising permits (CAIT) processing",
      "Port clearance, immigration, and customs processing",
      "Safety Management System (SMS) implementation",
      "Crew certification and STCW compliance checks",
    ],
    contentImage: "/images/hero-1.jpg",
    contentImageAlt: "Navigation charts and compliance documents",
  },
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-pearl flex flex-col">
      <Header />

      {/* ─── Hero Section ─── */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-deep-navy pt-20">
        <Image
          src={service.headerImage}
          alt={service.title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/50 to-transparent" />
        <div className="absolute inset-0 noise-overlay opacity-50 z-[1]" />

        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {service.title}
          </h1>
          
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/#services" className="hover:text-gold transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold">{service.title}</span>
          </nav>
        </div>
      </section>

      {/* ─── Content Section ─── */}
      <section className="relative py-24 lg:py-32 flex-grow">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text & Features */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl text-deep-navy">Overview</h2>
                <div className="w-12 h-1 bg-gold" />
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  {service.overview}
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="font-serif text-2xl text-deep-navy">What&apos;s Included</h3>
                <ul className="space-y-4">
                  {service.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-teal shrink-0" />
                      <span className="text-muted-foreground font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href="/#contact"
                  className="group relative inline-flex items-center gap-4 bg-deep-navy px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-white overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(6,17,42,0.3)]"
                >
                  <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-deep-navy">
                    Discuss Your Requirements
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                </Link>
              </div>
            </div>

            {/* Right: Immersive Image with accent */}
            <div className="relative h-[500px] lg:h-[700px] w-full shadow-2xl overflow-hidden group">
              <Image
                src={service.contentImage}
                alt={service.contentImageAlt}
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 via-transparent to-transparent opacity-60" />
              
              {/* Gold frame accent */}
              <div className="absolute inset-6 border border-white/20 z-10 pointer-events-none transition-colors duration-700 group-hover:border-gold/50" />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
