import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Partners from "@/components/partners"
import Services from "@/components/services"
import Careers from "@/components/careers"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Partners />
      <About />
      <Services />
      <Careers />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
