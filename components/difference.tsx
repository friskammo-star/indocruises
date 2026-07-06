import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, BookOpen, RefreshCw, Heart, Flag, Star } from "lucide-react"

const differences = [
  {
    icon: Lightbulb,
    title: "Solutions Oriented",
    description: "We pride ourselves on delivering comprehensive, tailored services to meet our clients' diverse needs. Our experts collaborate closely with clients, understanding their unique requirements.",
  },
  {
    icon: BookOpen,
    title: "Detailed Expertise",
    description: "Backed by years of industry experience and extensive knowledge, our seasoned professionals possess unique skill sets and a deep understanding of vessel management's intricacies.",
  },
  {
    icon: RefreshCw,
    title: "Adaptability",
    description: "In the ever-changing maritime landscape, we thrive on adaptability. Recognizing the need for flexibility, we embrace change as an opportunity for growth.",
  },
]

const commitments = [
  {
    icon: Heart,
    title: "Personalised Experiences",
    description: "Every boat boasts distinct features and standards, and we make it our responsibility to ensure each trip provides a comprehensive and immersive experience.",
  },
  {
    icon: Flag,
    title: "Upholding Brand Identity",
    description: "We understand that each boat has its own branding, offering a unique experience through its interior design, ambiance, services, and even food and beverages.",
  },
  {
    icon: Star,
    title: "Commitment to Excellence",
    description: "We recognise boat owners invest significantly in crafting their brand identities. It is our duty to uphold and deliver these unique brand experiences on every trip.",
  },
]

export default function Difference() {
  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
            The Indocruises Difference
          </h2>
        </div>

        {/* First Row - Main Differences */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {differences.map((item) => (
            <div key={item.title} className="text-center">
              <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center max-w-4xl mx-auto bg-card rounded-xl p-10 shadow-sm">
          <p className="text-lg text-foreground leading-relaxed">
            Our mission is to turn boat owners&apos; visions into reality by embracing the unique characteristics of each vessel. We meticulously complete every charter pre-check list to ensure our guests enjoy a flawless experience.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Benefit from our hassle-free approach, integrity, and strong local relationships for efficient and reliable maritime services.
          </p>
        </div>

        {/* Second Row - Commitments */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {commitments.map((item) => (
            <div key={item.title} className="bg-card rounded-xl p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                <item.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button 
            variant="link" 
            className="text-primary hover:text-primary/80 p-0 h-auto font-medium group text-lg"
          >
            Discover More 
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
