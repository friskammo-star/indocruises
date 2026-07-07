import Link from "next/link"
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const socialLinks = [
  {
    Icon: Instagram,
    href: "https://www.instagram.com/indocruisesmaritimeservices/",
    label: "Instagram",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/ims-indocruises-maritimes-services-2467a0407/",
    label: "LinkedIn",
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-ocean-deep">
      {/* Wave pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "url('/images/wave-pattern.png')",
          backgroundSize: "500px",
          backgroundRepeat: "repeat",
        }}
      />
      {/* SVG Wave divider */}
      <div className="absolute -top-px left-0 right-0 overflow-hidden text-[var(--pearl)] pointer-events-none z-0">
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

      <div className="relative z-10 pt-32 pb-12 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="pb-16 border-b border-white/5">
          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-8">Contact</h4>
            <div className="space-y-5 text-sm text-white/40 font-light">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                <span>
                  Jl. Kunti II No.67<br />Seminyak, Kuta, Badung<br />Bali, Indonesia
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                <a href="mailto:info@indocruises.co.id" className="hover:text-gold transition-colors">info@indocruises.co.id</a>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                <a href="https://wa.me/628113988988" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">0811-3988-988</a>
              </p>
              <div className="flex gap-3 pt-3">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/40 hover:border-gold hover:text-gold transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-[12px] text-white/25 font-light">
            &copy; {new Date().getFullYear()} Indocruises Maritime Services. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="text-[12px] text-white/25 hover:text-white/50 transition-colors font-light">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-[12px] text-white/25 hover:text-white/50 transition-colors font-light">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
