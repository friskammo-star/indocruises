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

export default function Home() {
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
