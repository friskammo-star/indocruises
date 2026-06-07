import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-medium text-primary-foreground sm:text-4xl lg:text-5xl">
            Start Your Journey
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 font-medium">
            Get in Touch Today
          </p>
          <p className="mt-6 text-primary-foreground/70 leading-relaxed">
            Contact us now to experience seamless boating services that elevate your maritime experience.
          </p>
          <div className="mt-10">
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-10"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
