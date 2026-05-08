import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Partners from "@/components/partners"
import Services from "@/components/services"
import Destinations from "@/components/destinations"
import WhyChooseUs from "@/components/why-choose-us"
import Careers from "@/components/careers"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import UnderConstruction from "@/components/under-construction"

// ============================================
// 🔧 MAINTENANCE MODE TOGGLE
// Set to true  → show Under Construction page
// Set to false → show normal website
// ============================================
const MAINTENANCE_MODE = true

export default function Home() {
  if (MAINTENANCE_MODE) {
    return <UnderConstruction />
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Destinations />
      <WhyChooseUs />
      <Careers />
      <Partners />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
