"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Ship,
  Settings,
  ClipboardList,
  Briefcase,
  Anchor,
  ArrowRight,
  Users,
  TrendingUp,
  Star,
  Shield,
  Megaphone,
  CalendarCheck,
  Wrench,
  ShieldCheck,
  Leaf,
  Eye,
  Package,
  Scale,
  HeartHandshake,
} from "lucide-react"

const services = [
  {
    icon: Ship,
    title: "Vessel Operations Management",
    slug: "vessel-operations-management",
    description:
      "Comprehensive day-to-day operational support including route planning, cruise scheduling, port coordination, and voyage supervision.",
  },
  {
    icon: Settings,
    title: "Technical & Engineering Management",
    slug: "technical-engineering-management",
    description:
      "Preventive maintenance systems, engine servicing, electrical systems management, and engineering supervision for maximum vessel performance.",
  },
  {
    icon: Users,
    title: "Crew Recruitment & Management",
    slug: "crew-recruitment-management",
    description:
      "Professional recruitment, payroll, crew rotation, training, certification monitoring, and onboard performance management.",
  },
  {
    icon: TrendingUp,
    title: "Charter & Revenue Management",
    slug: "charter-revenue-management",
    description:
      "International sales representation, OTA integration, broker partnerships, pricing strategies, and revenue optimization programs.",
  },
  {
    icon: Star,
    title: "Guest Experience & Hospitality",
    slug: "guest-experience-hospitality",
    description:
      "Guest relations, concierge services, elevated dining experiences, itinerary personalization, and VIP guest handling.",
  },
  {
    icon: Briefcase,
    title: "Financial Management & Reporting",
    slug: "financial-management-reporting",
    description:
      "Transparent financial oversight, budget management, cost optimization, and detailed reporting for complete asset visibility.",
  },
  {
    icon: Scale,
    title: "Legal & Compliance Management",
    slug: "legal-compliance-management",
    description:
      "Indonesian maritime permits, tourism licensing, insurance coordination, flag compliance, safety audits, and documentation.",
  },
  {
    icon: Shield,
    title: "Safety & Security Management",
    slug: "safety-security-management",
    description:
      "Comprehensive safety protocols, emergency response planning, security systems, and crew safety training programs.",
  },
  {
    icon: Package,
    title: "Procurement & Logistics",
    slug: "procurement-logistics",
    description:
      "Strategic sourcing, supply chain management, spare parts procurement, customs handling, and provisioning services.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Branding",
    slug: "marketing-branding",
    description:
      "Brand strategy, website management, social media campaigns, luxury content creation, and international trade representation.",
  },
  {
    icon: CalendarCheck,
    title: "Reservation & Customer Service",
    slug: "reservation-customer-service",
    description:
      "Booking administration, CRM management, guest communications, and end-to-end reservation lifecycle management.",
  },
  {
    icon: Wrench,
    title: "Dry Dock & Refit Management",
    slug: "dry-dock-refit-management",
    description:
      "End-to-end dry dock project management, refit coordination, shipyard partnerships, and quality assurance oversight.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance & Risk Management",
    slug: "insurance-risk-management",
    description:
      "Policy management, claims resolution, risk assessment, and comprehensive coverage strategies to safeguard your asset.",
  },
  {
    icon: Leaf,
    title: "Sustainability & Environmental",
    slug: "sustainability-environmental",
    description:
      "Environmental compliance, sustainable operations programs, waste management, and eco-friendly operational practices.",
  },
  {
    icon: Eye,
    title: "Owner Representation & Oversight",
    slug: "owner-representation-oversight",
    description:
      "Dedicated owner representation, asset oversight, strategic advisory, and transparent communication on all vessel matters.",
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Top SVG Wave divider linking from About section */}
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

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services-bg.jpg"
          alt="Ocean background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-deep-navy/92" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-transparent to-deep-navy" />
      </div>

      {/* Noise */}
      <div className="absolute inset-0 z-[1] noise-overlay" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl text-white leading-tight"
          >
            Core <span className="italic text-gold">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-white/60 leading-relaxed font-light text-lg"
          >
            PT. IMS provides complete end-to-end yacht and liveaboard management services — from vessel operations and crew management to charter revenue optimization and sustainability programs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              key={service.slug}
              className="h-full"
            >
              <Link 
                href={`/services/${service.slug}`}
                className="block group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] p-10 transition-all duration-700 hover:bg-white/[0.08] hover:-translate-y-3 overflow-hidden h-full"
              >
                {/* Hover border glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                </div>

                {/* Icon */}
                <div className="relative h-16 w-16 flex items-center justify-center mb-8">
                  <div className="absolute inset-0 bg-teal/10 rounded-full group-hover:bg-teal/20 transition-colors duration-500" />
                  <div className="absolute inset-0 rounded-full animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <service.icon className="h-7 w-7 text-teal relative z-10 transition-transform duration-500 group-hover:scale-110" />
                </div>

                <h3 className="font-serif text-xl text-white mb-4 group-hover:text-gold transition-colors duration-500">
                  {service.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed font-light group-hover:text-white/70 transition-colors duration-500">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-gold text-[11px] font-semibold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span>Learn More</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      {/* SVG Wave divider linking to Contact section */}
      <div className="absolute -bottom-px left-0 right-0 overflow-hidden text-[var(--pearl)] pointer-events-none z-0 rotate-180">
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
