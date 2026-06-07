import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Privacy Policy | Indocruises Maritime Services",
  description:
    "Learn how Indocruises Maritime Services collects, uses, and protects your personal information.",
}

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-white/60 text-lg font-light max-w-xl mx-auto">
            Your privacy matters to us. Learn how we handle your information.
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
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                We collect information that you provide directly to us when using
                our services, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground font-light leading-relaxed pl-4">
                <li>Name, email address, phone number, and other contact details</li>
                <li>Vessel information and service requirements</li>
                <li>Payment and billing information</li>
                <li>Communications and correspondence with our team</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                2. Automatic Information
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                When you visit our website, we may automatically collect certain
                information, including your IP address, browser type, operating
                system, referring URLs, pages viewed, and the dates and times of
                your visits. We use cookies and similar technologies to collect
                this information.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground font-light leading-relaxed pl-4">
                <li>Provide, maintain, and improve our maritime services</li>
                <li>Process bookings, transactions, and send related information</li>
                <li>Respond to your inquiries, comments, and requests</li>
                <li>Send you technical notices, updates, and administrative messages</li>
                <li>Communicate with you about services, offers, and events</li>
                <li>Comply with legal obligations and enforce our agreements</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                4. Information Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information only in the following
                circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground font-light leading-relaxed pl-4">
                <li>With service providers who assist in our operations (e.g., port authorities, crew agencies)</li>
                <li>To comply with applicable laws, regulations, or legal processes</li>
                <li>To protect the rights, property, and safety of Indocruises, our clients, or others</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                5. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                We implement appropriate technical and organizational security
                measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method
                of transmission over the Internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                6. Data Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                We retain your personal information for as long as necessary to
                fulfill the purposes for which it was collected, including to
                satisfy any legal, accounting, or reporting requirements. When
                your data is no longer needed, we will securely delete or
                anonymize it.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                7. Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                Our website uses cookies to enhance your browsing experience.
                Cookies are small text files stored on your device that help us
                understand how you use our website. You can control cookie
                preferences through your browser settings. Disabling cookies may
                affect some features of our website.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                8. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground font-light leading-relaxed pl-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Withdraw consent at any time where processing is based on consent</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed font-light">
                To exercise any of these rights, please contact us using the
                details provided below.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                9. Third-Party Links
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                Our website may contain links to third-party websites. We are not
                responsible for the privacy practices or content of these external
                sites. We encourage you to review the privacy policies of any
                third-party sites you visit.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                10. Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this policy periodically to stay informed
                about how we protect your information.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-deep-navy">
                11. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                If you have any questions or concerns about this Privacy Policy or
                our data practices, please contact us at:
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
                    href="mailto:privacy@indocruises.com"
                    className="text-teal hover:underline"
                  >
                    privacy@indocruises.com
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
