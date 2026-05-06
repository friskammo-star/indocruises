import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, CheckCircle2, ArrowRight } from "lucide-react"

import Header from "@/components/header"
import Footer from "@/components/footer"

// Exhaustive data for all 15 core services
const servicesData: Record<string, any> = {
  "vessel-operations-management": {
    title: "Vessel Operations Management",
    headerImage: "/images/hero-1.jpg",
    overview:
      "Comprehensive day-to-day operational support including route planning, cruise scheduling, port coordination, fuel monitoring, SOP implementation, and voyage supervision to ensure safe and efficient yacht operations.",
    features: [
      {
        title: "Route Planning & Cruise Scheduling",
        description: "Strategic voyage planning with optimized routes, seasonal scheduling, and weather-informed itineraries tailored to maximize guest satisfaction and operational efficiency across the Indonesian archipelago."
      },
      {
        title: "Port Coordination & Clearance",
        description: "Seamless coordination with port authorities, harbor masters, and local agencies to ensure smooth arrivals, departures, and anchorage across all Indonesian ports and marine parks."
      },
      {
        title: "Fuel Monitoring & Bunkering",
        description: "Real-time fuel consumption tracking, quality-controlled bunkering logistics, and cost-efficient fuel procurement strategies to ensure reliable vessel performance."
      },
      {
        title: "SOP Implementation & Compliance",
        description: "Development and enforcement of Standard Operating Procedures covering all aspects of vessel operations, ensuring consistency, safety, and regulatory compliance at every level."
      },
      {
        title: "Voyage Supervision & Reporting",
        description: "Continuous voyage oversight with live tracking, incident reporting, performance analytics, and post-voyage reviews to drive operational improvement."
      }
    ],
    contentImage: "/images/complete-vessel-management.jpg",
    contentImageAlt: "Luxury yacht cutting through the ocean",
  },
  "technical-engineering-management": {
    title: "Technical & Engineering Management",
    headerImage: "/images/yacht-1.jpg",
    overview:
      "Preventive maintenance systems, engine servicing, generator support, electrical systems management, dry dock coordination, spare parts procurement, and engineering supervision designed to maintain maximum vessel performance.",
    features: [
      {
        title: "Preventive Maintenance Systems",
        description: "Structured, schedule-driven maintenance programs that prevent failures before they occur, extending asset life and ensuring uninterrupted operations."
      },
      {
        title: "Engine & Generator Servicing",
        description: "Expert servicing and overhaul of main engines, auxiliary generators, and propulsion systems, supported by advanced diagnostics and certified marine engineers."
      },
      {
        title: "Electrical Systems Management",
        description: "Comprehensive management of onboard electrical infrastructure including power distribution, navigation electronics, lighting systems, and AV installations."
      },
      {
        title: "Spare Parts Procurement",
        description: "Global sourcing of genuine OEM spare parts with efficient customs clearance and logistics to minimize downtime and maintain vessel readiness."
      },
      {
        title: "Engineering Supervision",
        description: "Dedicated technical supervision for all engineering works, ensuring quality standards, budget adherence, and timely completion of all maintenance and repair activities."
      }
    ],
    contentImage: "/images/maintenance-refit.jpg",
    contentImageAlt: "Engineering team maintaining yacht systems",
  },
  "crew-recruitment-management": {
    title: "Crew Recruitment & Management",
    headerImage: "/images/yacht-2.jpg",
    overview:
      "Professional recruitment, payroll, crew rotation, training, hospitality standards, certification monitoring, and onboard performance management for captains, engineers, dive teams, chefs, and hospitality staff.",
    features: [
      {
        title: "Professional Recruitment",
        description: "Rigorous screening and selection of qualified maritime professionals including captains, engineers, dive instructors, chefs, and hospitality crew matched to your vessel's unique requirements."
      },
      {
        title: "Payroll & Benefits Administration",
        description: "Complete crew payroll management, benefits coordination, contract administration, and compliance with Indonesian labor regulations and international maritime standards."
      },
      {
        title: "Crew Rotation & Scheduling",
        description: "Structured rotation programs ensuring optimal crew rest, work-life balance, and continuous vessel staffing without service interruptions."
      },
      {
        title: "Training & Development",
        description: "Ongoing professional development programs including safety drills, hospitality training, STCW certification, and specialized skills development for all crew members."
      },
      {
        title: "Performance Management",
        description: "Systematic onboard performance evaluations, feedback mechanisms, and career development pathways to maintain the highest standards of service excellence."
      }
    ],
    contentImage: "/images/day-to-day-operations.jpg",
    contentImageAlt: "Professional yacht crew at work",
  },
  "charter-revenue-management": {
    title: "Charter & Revenue Management",
    headerImage: "/images/hero-1.jpg",
    overview:
      "International sales representation, OTA integration, broker partnerships, pricing strategies, occupancy forecasting, CRM management, booking administration, and revenue optimization programs.",
    features: [
      {
        title: "International Sales Representation",
        description: "Global market reach through established networks of luxury travel agents, charter brokers, and high-net-worth client databases across key international markets."
      },
      {
        title: "OTA Integration & Digital Distribution",
        description: "Strategic integration with leading Online Travel Agencies and booking platforms to maximize online visibility, direct bookings, and digital revenue channels."
      },
      {
        title: "Pricing & Revenue Optimization",
        description: "Dynamic pricing strategies informed by market intelligence, seasonal demand patterns, and competitive analysis to maximize yield and occupancy rates."
      },
      {
        title: "CRM & Booking Administration",
        description: "End-to-end booking lifecycle management from inquiry to post-trip follow-up, powered by professional CRM systems to nurture guest relationships and drive repeat business."
      },
      {
        title: "Occupancy Forecasting & Analytics",
        description: "Data-driven demand forecasting, performance analytics, and revenue reporting to inform strategic decisions and identify growth opportunities."
      }
    ],
    contentImage: "/images/complete-vessel-management.jpg",
    contentImageAlt: "Luxury yacht charter experience",
  },
  "guest-experience-hospitality": {
    title: "Guest Experience & Hospitality Management",
    headerImage: "/images/yacht-2.jpg",
    overview:
      "Guest relations, concierge services, premium dining experiences, itinerary personalization, onboard events, honeymoon setups, wellness programs, and VIP guest handling.",
    features: [
      {
        title: "Guest Relations & Concierge",
        description: "Dedicated guest liaison services delivering personalized attention, anticipating needs, and ensuring every aspect of the onboard experience exceeds expectations."
      },
      {
        title: "Premium Dining Experiences",
        description: "World-class culinary programs featuring bespoke menus, locally sourced ingredients, private dining setups, and accommodating all dietary requirements with exceptional quality."
      },
      {
        title: "Itinerary Personalization",
        description: "Tailor-made voyage itineraries designed around each guest's interests — from remote dive sites and cultural excursions to private beach setups and sunset cruises."
      },
      {
        title: "Onboard Events & Celebrations",
        description: "Expertly curated onboard events including honeymoon packages, birthday celebrations, corporate retreats, and themed evenings with seamless coordination."
      },
      {
        title: "Wellness & VIP Programs",
        description: "Holistic wellness offerings including spa treatments, yoga sessions, and wellness programs alongside VIP guest handling protocols for distinguished clientele."
      }
    ],
    contentImage: "/images/day-to-day-operations.jpg",
    contentImageAlt: "Luxury hospitality experience onboard",
  },
  "financial-management-reporting": {
    title: "Financial Management & Reporting",
    headerImage: "/images/services-bg.jpg",
    overview:
      "Complete financial management services including budgeting, forecasting, cost optimization, transparent reporting, and strategic financial planning to protect and maximize your maritime investment.",
    features: [
      {
        title: "Budget Planning & Forecasting",
        description: "Detailed annual budgets and rolling forecasts that provide clear visibility into operational costs, capital expenditure requirements, and revenue projections."
      },
      {
        title: "Cost Optimization Strategies",
        description: "Proactive identification of cost-saving opportunities across operations, procurement, and crew management without compromising quality or safety."
      },
      {
        title: "Transparent Monthly Reporting",
        description: "Comprehensive financial reports delivered monthly with detailed breakdowns of income, expenditure, variances, and key performance indicators."
      },
      {
        title: "Accounts Payable & Receivable",
        description: "Efficient management of all financial transactions, vendor payments, charter revenue collection, and cash flow management to maintain healthy financial operations."
      },
      {
        title: "Tax & Regulatory Financial Compliance",
        description: "Expert navigation of Indonesian tax obligations, financial regulations, and reporting requirements to ensure full compliance and minimize fiscal risk."
      }
    ],
    contentImage: "/images/hero-1.jpg",
    contentImageAlt: "Financial management and reporting",
  },
  "legal-compliance-management": {
    title: "Legal & Compliance Management",
    headerImage: "/images/services-bg.jpg",
    overview:
      "Support for Indonesian maritime permits, tourism licensing, insurance coordination, flag compliance, safety audits, immigration documentation, and marine park operational permits.",
    features: [
      {
        title: "Maritime Permits & Licensing",
        description: "Full management of Indonesian maritime permits including CAIT cruising permits, tourism operation licenses, and marine park entry authorizations."
      },
      {
        title: "Flag State & Classification Compliance",
        description: "Continuous monitoring and management of flag state regulations and classification society standards, ensuring all certifications remain valid and inspections are proactively handled."
      },
      {
        title: "Immigration & Customs Documentation",
        description: "Efficient handling of crew and guest immigration documentation, visa coordination, customs declarations, and port authority clearances across Indonesian waters."
      },
      {
        title: "Safety Audits & Inspections",
        description: "Comprehensive safety management system implementation, regular audits, and inspection preparation to ensure compliance with international maritime safety standards."
      },
      {
        title: "Insurance Coordination",
        description: "Strategic insurance program management including policy selection, coverage optimization, premium negotiation, and efficient claims resolution."
      }
    ],
    contentImage: "/images/hero-1.jpg",
    contentImageAlt: "Legal compliance and maritime documentation",
  },
  "safety-security-management": {
    title: "Safety & Security Management",
    headerImage: "/images/yacht-1.jpg",
    overview:
      "Comprehensive safety and security management encompassing emergency response planning, crew safety training, security protocols, and safety equipment maintenance to protect crew, guests, and vessel.",
    features: [
      {
        title: "Safety Management Systems (SMS)",
        description: "Design, implementation, and maintenance of comprehensive Safety Management Systems aligned with ISM Code and international maritime safety standards."
      },
      {
        title: "Emergency Response Planning",
        description: "Detailed emergency response procedures, crisis management protocols, and regular drill programs to ensure crew readiness for any contingency."
      },
      {
        title: "Security Protocols & Risk Assessment",
        description: "Ongoing security risk assessments, vessel hardening measures, and guest safety protocols tailored to operational areas across the Indonesian archipelago."
      },
      {
        title: "Safety Equipment & Maintenance",
        description: "Regular inspection and maintenance of all life-saving appliances, firefighting equipment, and safety systems to ensure full operational readiness."
      },
      {
        title: "Crew Safety Training Programs",
        description: "Structured safety training programs including firefighting, sea survival, first aid, and crowd management, ensuring all crew hold valid certifications."
      }
    ],
    contentImage: "/images/maintenance-refit.jpg",
    contentImageAlt: "Safety and security operations onboard",
  },
  "procurement-logistics": {
    title: "Procurement & Logistics",
    headerImage: "/images/yacht-2.jpg",
    overview:
      "Strategic procurement and logistics management covering supply chain optimization, spare parts sourcing, customs handling, premium provisioning, and efficient delivery to remote destinations across the Indonesian archipelago.",
    features: [
      {
        title: "Strategic Sourcing & Vendor Management",
        description: "Established relationships with trusted suppliers and vendors, ensuring competitive pricing, quality assurance, and reliable delivery for all vessel requirements."
      },
      {
        title: "Spare Parts & Equipment Procurement",
        description: "Global sourcing of genuine OEM parts and marine equipment with expedited shipping and efficient customs clearance to minimize vessel downtime."
      },
      {
        title: "Premium Provisioning Services",
        description: "Sourcing and delivery of the finest local and international provisions, ensuring your vessel is stocked to the highest standards regardless of destination remoteness."
      },
      {
        title: "Customs & Import Handling",
        description: "Expert management of Indonesian customs procedures, import documentation, duty optimization, and clearance for all vessel supplies and equipment."
      },
      {
        title: "Remote Destination Logistics",
        description: "Specialized logistics solutions for Indonesia's most remote destinations, ensuring reliable supply chains even in challenging and distant operating environments."
      }
    ],
    contentImage: "/images/day-to-day-operations.jpg",
    contentImageAlt: "Procurement and logistics operations",
  },
  "marketing-branding": {
    title: "Marketing & Branding",
    headerImage: "/images/hero-1.jpg",
    overview:
      "Brand strategy, website management, social media campaigns, luxury content creation, photography, videography, digital advertising, and international trade representation.",
    features: [
      {
        title: "Brand Strategy & Positioning",
        description: "Development of distinctive brand identities that resonate with the luxury charter and liveaboard market, differentiating your vessel in a competitive landscape."
      },
      {
        title: "Website & Digital Presence",
        description: "Professional website design, development, and management with SEO optimization, ensuring a compelling digital presence that drives direct bookings."
      },
      {
        title: "Social Media & Content Creation",
        description: "Strategic social media campaigns with professionally produced photography, videography, and luxury content that captivates target audiences and builds brand awareness."
      },
      {
        title: "Digital Advertising & Performance Marketing",
        description: "Targeted digital advertising campaigns across search, social, and display channels, optimized for reach, engagement, and conversion."
      },
      {
        title: "International Trade Representation",
        description: "Representation at international boat shows, luxury travel exhibitions, and trade events to build broker relationships and attract global charter clients."
      }
    ],
    contentImage: "/images/complete-vessel-management.jpg",
    contentImageAlt: "Marketing and brand development",
  },
  "reservation-customer-service": {
    title: "Reservation & Customer Service",
    headerImage: "/images/yacht-2.jpg",
    overview:
      "End-to-end reservation management including booking administration, CRM systems, guest communications, inquiry handling, and post-trip follow-up to deliver exceptional customer service at every touchpoint.",
    features: [
      {
        title: "Booking Administration",
        description: "Efficient management of the entire booking lifecycle from initial inquiry through confirmation, pre-arrival preparation, and post-departure review."
      },
      {
        title: "CRM & Guest Database Management",
        description: "Professional CRM systems to maintain detailed guest profiles, track preferences, manage communications, and nurture long-term relationships."
      },
      {
        title: "Multi-Channel Inquiry Handling",
        description: "Responsive inquiry management across email, phone, social media, and OTA platforms, ensuring prompt, professional responses to all prospective guests."
      },
      {
        title: "Pre-Arrival Guest Coordination",
        description: "Comprehensive pre-trip coordination including travel logistics, dietary requirements, activity preferences, and special occasion arrangements."
      },
      {
        title: "Post-Trip Follow-Up & Reviews",
        description: "Structured post-voyage communication including satisfaction surveys, review management, and personalized follow-ups to encourage repeat bookings and referrals."
      }
    ],
    contentImage: "/images/day-to-day-operations.jpg",
    contentImageAlt: "Customer service and reservations",
  },
  "dry-dock-refit-management": {
    title: "Dry Dock & Refit Management",
    headerImage: "/images/yacht-1.jpg",
    overview:
      "End-to-end dry dock and refit project management including shipyard selection, scope development, budget control, timeline management, and quality assurance to preserve and enhance vessel value.",
    features: [
      {
        title: "Dry-Docking Project Management",
        description: "Complete supervision of dry-docking projects from planning through execution, ensuring timelines, budgets, and quality standards are met without compromise."
      },
      {
        title: "Refit Scope & Design",
        description: "Development of detailed refit specifications, design coordination with naval architects, and scope management to transform and modernize your vessel."
      },
      {
        title: "Shipyard Selection & Coordination",
        description: "Strategic selection of premier regional shipyards matched to project requirements, with full coordination of yard services, subcontractors, and logistics."
      },
      {
        title: "Budget Control & Cost Management",
        description: "Rigorous budget management with transparent cost tracking, change order control, and financial reporting throughout the refit process."
      },
      {
        title: "Quality Assurance & Sea Trials",
        description: "Comprehensive quality inspections at every project stage, final systems testing, and supervised sea trials to ensure all works meet the highest standards."
      }
    ],
    contentImage: "/images/maintenance-refit.jpg",
    contentImageAlt: "Yacht dry-docked for maintenance and refit",
  },
  "insurance-risk-management": {
    title: "Insurance & Risk Management",
    headerImage: "/images/services-bg.jpg",
    overview:
      "Comprehensive insurance and risk management services including policy selection, coverage optimization, claims handling, risk assessment, and loss prevention strategies to protect your maritime asset.",
    features: [
      {
        title: "Insurance Policy Management",
        description: "Expert selection and management of hull & machinery, P&I, and commercial liability insurance policies from leading maritime underwriters."
      },
      {
        title: "Coverage Optimization",
        description: "Regular review and optimization of insurance coverage to ensure adequate protection, competitive premiums, and alignment with operational requirements."
      },
      {
        title: "Claims Resolution",
        description: "Efficient management of insurance claims from initial notification through assessment, documentation, and settlement to ensure fair and timely outcomes."
      },
      {
        title: "Risk Assessment & Mitigation",
        description: "Systematic identification and evaluation of operational, financial, and environmental risks with proactive mitigation strategies and contingency planning."
      },
      {
        title: "Loss Prevention Programs",
        description: "Proactive loss prevention initiatives including crew training, safety improvements, and operational protocols designed to reduce incidents and lower insurance costs."
      }
    ],
    contentImage: "/images/hero-1.jpg",
    contentImageAlt: "Insurance and risk management services",
  },
  "sustainability-environmental": {
    title: "Sustainability & Environmental Programs",
    headerImage: "/images/yacht-1.jpg",
    overview:
      "Environmental compliance, sustainable operations programs, waste management, marine conservation support, eco-friendly operational practices, and carbon footprint reduction initiatives.",
    features: [
      {
        title: "Environmental Compliance",
        description: "Ensuring full compliance with Indonesian and international environmental regulations including MARPOL standards, marine park rules, and waste discharge requirements."
      },
      {
        title: "Sustainable Operations Programs",
        description: "Development and implementation of sustainable operating practices that minimize environmental impact while maintaining luxury service standards."
      },
      {
        title: "Waste Management & Recycling",
        description: "Comprehensive waste management systems including waste segregation, recycling programs, and responsible disposal practices across all vessel operations."
      },
      {
        title: "Marine Conservation Support",
        description: "Active participation in marine conservation initiatives, coral reef protection programs, and responsible diving practices that preserve Indonesia's precious marine ecosystems."
      },
      {
        title: "Carbon Footprint Reduction",
        description: "Energy efficiency programs, fuel optimization strategies, and carbon offset initiatives to reduce the environmental footprint of vessel operations."
      }
    ],
    contentImage: "/images/complete-vessel-management.jpg",
    contentImageAlt: "Sustainability and environmental stewardship",
  },
  "owner-representation-oversight": {
    title: "Owner Representation & Asset Oversight",
    headerImage: "/images/services-bg.jpg",
    overview:
      "Dedicated owner representation providing strategic advisory, asset oversight, transparent communication, and proactive management to protect and maximize the value of your maritime investment.",
    features: [
      {
        title: "Dedicated Owner Representative",
        description: "A single point of contact acting as your trusted representative, overseeing all aspects of vessel management and ensuring your interests are always prioritized."
      },
      {
        title: "Asset Oversight & Value Protection",
        description: "Continuous monitoring and management of your vessel as a valuable asset, with strategies focused on maintaining and enhancing long-term value."
      },
      {
        title: "Strategic Advisory Services",
        description: "Expert guidance on operational strategy, market positioning, capital investment decisions, and long-term planning to optimize your maritime investment."
      },
      {
        title: "Transparent Reporting & Communication",
        description: "Regular, detailed reporting on all aspects of vessel operations, finances, and compliance, with open communication channels for complete visibility."
      },
      {
        title: "Vendor & Contract Oversight",
        description: "Professional management and oversight of all third-party vendors, service contracts, and commercial agreements to ensure accountability and value for money."
      }
    ],
    contentImage: "/images/hero-1.jpg",
    contentImageAlt: "Owner representation and strategic oversight",
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
