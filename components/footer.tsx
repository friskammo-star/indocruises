import Link from "next/link"
import Image from "next/image"
import { Anchor, Instagram, Linkedin } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Careers", href: "/#careers" },
  { name: "Contact", href: "/#contact" },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pb-16 border-b border-white/5">

          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col gap-0 w-[240px]">
              <div className="flex justify-between w-full font-serif text-[28px] font-semibold text-white leading-none">
                {"INDOCRUISES".split("").map((c, i) => <span key={i}>{c}</span>)}
              </div>
              <div className="flex justify-between w-full text-[10px] text-white/70 uppercase font-light mt-[5px]">
                {"MARITIME".split("").map((c, i) => <span key={`m-${i}`}>{c}</span>)}
                <span className="w-2"></span>
                {"SERVICES".split("").map((c, i) => <span key={`s-${i}`}>{c}</span>)}
              </div>
            </Link>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
              Indonesia&apos;s premier provider of luxury yacht management and full-service maritime operations.
            </p>
            <div className="flex gap-3 pt-2">
              {[
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
              ].map(({ Icon, href, label }) => (
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

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-8">Navigation</h4>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-white transition-colors font-light"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-8">Contact</h4>
            <div className="space-y-5 text-sm text-white/40 font-light">
              <p>
                Jl. Kunti II No.67<br />Seminyak, Kuta, Badung<br />Bali, Indonesia
              </p>
              <p>
                <a href="mailto:info@indocruises.co.id" className="hover:text-gold transition-colors">info@indocruises.co.id</a>
              </p>
              <p>
                Telp/WA: <a href="https://wa.me/628113988988" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">0811-3988-988</a>
              </p>
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
