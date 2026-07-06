import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Terms of Service | Indocruises Maritime Services",
  description:
    "Terms and conditions governing the use of Indocruises Maritime Services' website and services.",
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-40 pb-20 bg-deep-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-sea-blue/40 to-deep-navy" />
        <div className="absolute inset-0 noise-overlay opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-3 text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-6">
            <span className="h-px w-8 bg-gold" />
            Legal
            <span className="h-px w-8 bg-gold" />
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-white/60 text-lg font-light max-w-xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-pearl">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-12">

            <div>
              <p className="text-sm text-muted-foreground font-light">
                Last updated: April 25, 2026
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                By accessing and using the Indocruises Maritime Services website and
                services, you accept and agree to be bound by the terms and
                provisions of this agreement. If you do not agree to these terms,
                please do not use our website or services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                2. Description of Services
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                Indocruises Maritime Services provides professional yacht and vessel
                management services across Indonesia, including but not limited to:
                vessel maintenance, crew management, port clearance, customs
                facilitation, provisioning, and charter management. The scope of
                specific services will be detailed in individual service agreements.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                3. User Responsibilities
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                You agree to provide accurate, current, and complete information
                when using our services or making inquiries. You are responsible for
                maintaining the confidentiality of any account credentials and for
                all activities that occur under your account.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                4. Booking and Payment
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                All service bookings are subject to availability and confirmation by
                Indocruises Maritime Services. Payment terms, cancellation policies,
                and refund conditions will be specified in the relevant service
                agreement or booking confirmation. Prices are quoted in the currency
                specified at the time of booking and may be subject to applicable
                taxes and fees.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                5. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                All content on this website, including but not limited to text,
                graphics, logos, images, and software, is the property of
                Indocruises Maritime Services and is protected by Indonesian and
                international copyright laws. You may not reproduce, distribute, or
                create derivative works from any content without our prior written
                consent.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                6. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                Indocruises Maritime Services shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising out
                of or related to your use of our services. Our total liability shall
                not exceed the amount paid by you for the specific service giving
                rise to the claim. Maritime operations are subject to inherent risks,
                and we recommend all clients maintain appropriate insurance coverage.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                7. Safety and Compliance
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                All services are provided in compliance with applicable Indonesian
                maritime regulations and international maritime conventions. Clients
                are expected to cooperate with all safety procedures and regulatory
                requirements. Indocruises reserves the right to refuse or terminate
                services if safety standards cannot be maintained.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                8. Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                Your use of our services is also governed by our Privacy Policy. By
                using our services, you consent to the collection and use of
                information as described in our Privacy Policy.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                9. Modifications
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                Indocruises Maritime Services reserves the right to modify these
                Terms of Service at any time. Changes will be effective immediately
                upon posting on this website. Your continued use of our services
                after any modifications constitutes acceptance of the updated terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                10. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                These terms shall be governed by and construed in accordance with
                the laws of the Republic of Indonesia. Any disputes arising from
                these terms or your use of our services shall be subject to the
                exclusive jurisdiction of the courts of Denpasar, Bali, Indonesia.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                11. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="bg-white p-6 border border-foam space-y-2">
                <p className="text-sm font-medium text-deep-navy">
                  Indocruises Maritime Services
                </p>
                <p className="text-sm text-muted-foreground font-light">
                  Benoa Harbor, Marina Complex
                  <br />
                  Bali, Indonesia 80222
                </p>
                <p className="text-sm text-muted-foreground font-light">
                  Email:{" "}
                  <a
                    href="mailto:legal@indocruises.com"
                    className="text-teal hover:underline"
                  >
                    legal@indocruises.com
                  </a>
                </p>
                <p className="text-sm text-muted-foreground font-light">
                  Phone:{" "}
                  <a
                    href="tel:+62361123456"
                    className="text-teal hover:underline"
                  >
                    +62 361 123 456
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
