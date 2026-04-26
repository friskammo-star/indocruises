import { Award, Shield, Eye } from "lucide-react"

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl leading-tight">
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg text-secondary font-medium">
              Quality, Integrity, Transparency
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              With over 20 years of experience, Indocruises Maritime Services offers unrivalled vessel management services rooted in the quality and integrity of our team.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our commitment to these values leads to a solutions based approach, emphasising transparency and trust.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Leveraging strong local relationships, we ensure efficient and reliable maritime services, transforming boat owners&apos; visions into reality and making every trip unforgettable.
            </p>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  Quality
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  We maintain the highest standards in every service we provide, ensuring excellence in all aspects of vessel management.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  Integrity
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  We value honesty and ethical practices in every interaction, building trust with our clients through consistent reliability.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  Transparency
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Open communication and clear processes ensure you always know exactly what&apos;s happening with your vessel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
