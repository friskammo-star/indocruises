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
      "Our flagship vessel management service is designed for owners who expect nothing less than perfection. We take full command of your yacht’s operations—covering technical performance, crew management, financial control, and regulatory compliance—so your vessel runs flawlessly at all times. Whether cruising through Indonesia’s most remote destinations or operating from its busiest ports, we ensure every detail is handled with precision, allowing you to enjoy complete confidence, uninterrupted performance, and total peace of mind.",
    features: [
      {
        title: "24/7 Dedicated Shore-Side Support",
        description: "Your vessel is backed by a responsive, expert team around the clock, ready to act immediately in any situation—from routine assistance to critical emergency response."
      },
      {
        title: "Strategic Preventative Maintenance",
        description: "We don’t just maintain your yacht—we protect and enhance its long-term value through carefully planned maintenance programs that prevent issues before they arise."
      },
      {
        title: "Financial Management & Budget Optimization",
        description: "Gain full visibility and control over your vessel’s finances with detailed forecasting, cost optimization strategies, and transparent reporting designed to protect your investment."
      },
      {
        title: "Elite Crew Management",
        description: "We source, manage, and retain top-tier crew, ensuring the right people are always on board, fully supported through structured rotations, training, and seamless payroll administration."
      },
      {
        title: "Comprehensive Insurance Handling",
        description: "From policy management to efficient claims resolution, we safeguard your asset with meticulous oversight, minimizing risk and eliminating administrative burden."
      }
    ],
    contentImage: "/images/complete-vessel-management.jpg",
    contentImageAlt: "Luxury yacht cutting through the ocean",
  },
  "day-to-day-operations": {
    title: "Day-to-Day Operations",
    headerImage: "/images/yacht-2.jpg",
    overview:
      "Our day-to-day operations service is built to remove every layer of complexity from yacht ownership in Indonesia’s vast and dynamic archipelago. We take full control of logistics, coordination, and on-the-ground execution—ensuring every movement is seamless, every detail anticipated, and every journey flawlessly delivered. From the moment your vessel departs to the final anchorage, you and your guests experience nothing but effortless, uninterrupted enjoyment.",
    features: [
      {
        title: "Bespoke Itinerary Planning & Weather Intelligence",
        description: "Every voyage is carefully designed around your preferences, enhanced by real-time weather routing to ensure optimal safety, comfort, and experience."
      },
      {
        title: "Premium Provisioning Without Compromise",
        description: "We source and deliver the finest local and international supplies, ensuring your vessel is stocked to the highest standards—no matter how remote the destination."
      },
      {
        title: "Reliable Bunkering & Fuel Assurance",
        description: "Secure, high-quality fuel supply across Indonesia’s islands, with strict quality control to protect your vessel’s performance and reliability."
      },
      {
        title: "VIP Concierge & Curated Experiences",
        description: "From private island access to exclusive shore excursions, we craft exceptional, personalized experiences that elevate every journey for you and your guests."
      },
      {
        title: "Real-Time Operational Oversight",
        description: "Stay fully informed with live tracking, detailed reporting, and proactive management, giving you complete visibility and confidence at all times."
      }
    ],
    contentImage: "/images/day-to-day-operations.jpg",
    contentImageAlt: "Captain steering a luxury vessel",
  },
  "maintenance-refit": {
    title: "Maintenance & Refit",
    headerImage: "/images/yacht-1.jpg",
    overview:
      "Protect and enhance the value of your vessel with our expert technical management services, designed to deliver uncompromising performance and long-term reliability. We work alongside the region’s most trusted shipyards and specialists to execute everything from routine maintenance to complex repairs and full-scale refits—ensuring your yacht remains in peak condition, both technically and aesthetically, wherever it operates in Indonesia.",
    features: [
      {
        title: "Dry-Docking & Project Management Excellence",
        description: "End-to-end supervision of dry-docking and refit projects, ensuring timelines, budgets, and quality standards are executed without compromise."
      },
      {
        title: "Advanced Machinery Maintenance & Diagnostics",
        description: "Comprehensive engine and system overhauls supported by precise diagnostics to prevent failures and optimize performance."
      },
      {
        title: "Hull Care & Premium Finishing",
        description: "Professional hull cleaning, anti-fouling treatments, and detailed finishing to maintain efficiency, appearance, and long-term durability."
      },
      {
        title: "Technology & System Upgrades",
        description: "Seamless integration and upgrading of navigation and communication systems to keep your vessel modern, safe, and fully compliant."
      },
      {
        title: "Global Parts Sourcing & Customs Handling",
        description: "Fast, reliable procurement of genuine spare parts, with efficient customs clearance to eliminate delays and operational downtime."
      }
    ],
    contentImage: "/images/maintenance-refit.jpg",
    contentImageAlt: "Yacht dry-docked for maintenance",
  },
  "administrative-compliance": {
    title: "Administrative & Compliance",
    headerImage: "/images/services-bg.jpg",
    overview:
      "Navigating Indonesia’s intricate maritime regulatory landscape requires more than basic knowledge—it demands deep local expertise, established relationships, and constant attention to detail. Our administrative and compliance services are built to remove complexity entirely, managing every regulatory, legal, and documentation requirement with precision and discretion. From initial entry approvals to ongoing operational compliance, we ensure your vessel is always fully authorized, properly documented, and ready to sail without interruption. With our team handling the bureaucracy behind the scenes, you gain the freedom to operate confidently, efficiently, and without unnecessary risk anywhere across Indonesian waters.",
    features: [
      {
        title: "Flag State & Classification Compliance",
        description: "We continuously monitor and manage your vessel’s compliance with flag state regulations and classification society standards, ensuring all certifications remain valid, inspections are handled proactively, and your vessel consistently meets international safety and operational benchmarks."
      },
      {
        title: "CAIT & Cruising Permit Processing",
        description: "Our team manages the full lifecycle of Indonesian cruising permits (CAIT), from application to approval, coordinating directly with authorities to eliminate delays and ensure your vessel can move freely and legally throughout the archipelago."
      },
      {
        title: "Port Clearance, Immigration & Customs Coordination",
        description: "We handle all port formalities with efficiency and accuracy, including immigration processing, customs declarations, and port authority clearances, allowing your vessel to arrive and depart smoothly without administrative friction."
      },
      {
        title: "Safety Management System (SMS) Implementation",
        description: "We design, implement, and maintain comprehensive Safety Management Systems aligned with international maritime standards, ensuring your operations are not only compliant but also structured for maximum safety, accountability, and performance."
      },
      {
        title: "Crew Certification & STCW Compliance Management",
        description: "From initial verification to ongoing monitoring, we ensure all crew certifications meet STCW and regulatory requirements, reducing liability, maintaining professional standards, and ensuring readiness for inspection at any time."
      }
    ],
    ctaDescription: "Speak with our specialists to develop a fully customized compliance and administrative framework tailored to your vessel’s operations, ensuring seamless navigation through Indonesia’s regulatory environment while protecting your asset at every level.",
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
                  {service.features.map((feature: any, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-teal shrink-0 mt-0.5" />
                      <div className="text-muted-foreground font-light leading-relaxed">
                        {typeof feature === 'string' ? (
                          feature
                        ) : (
                          <>
                            <strong className="text-deep-navy font-semibold block mb-0.5">{feature.title}</strong>
                            {feature.description}
                          </>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                {service.ctaDescription && (
                  <p className="text-muted-foreground font-light mb-6 leading-relaxed">
                    {service.ctaDescription}
                  </p>
                )}
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
