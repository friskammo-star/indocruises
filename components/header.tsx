"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Careers", href: "/#careers" },
  { name: "Contact", href: "/#contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("Home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)

      // Determine active section
      const sections = ["contact", "careers", "services", "fleet", "about"]
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200) {
            const name = navItems.find(n => n.href === `#${id}`)?.name
            if (name) { setActiveSection(name); return }
          }
        }
      }
      setActiveSection("Home")
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.4)]" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-[88px] sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 group -ml-1 sm:ml-0" aria-label="IndoCruises Home">
            <div className="relative flex h-[84px] w-[103px] sm:h-[96px] sm:w-[116px] items-center justify-center overflow-hidden">
              <Image src="/logo_transparent.png" alt="Indocruises Logo" fill priority className="object-contain transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="flex flex-col w-[180px] sm:w-[200px] ml-0 sm:ml-1">
              <div className="flex justify-between w-full font-serif text-[24px] sm:text-[26px] font-semibold leading-none text-deep-navy">
                {"INDOCRUISES".split("").map((c, i) => <span key={i}>{c}</span>)}
              </div>
              <div className="flex justify-between w-full text-[8px] sm:text-[9px] uppercase font-medium mt-[4px] sm:mt-[5px] text-deep-navy/70">
                {"MARITIME".split("").map((c, i) => <span key={`m-${i}`}>{c}</span>)}
                <span className="w-1.5 sm:w-2"></span>
                {"SERVICES".split("").map((c, i) => <span key={`s-${i}`}>{c}</span>)}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.15em] transition-colors duration-200 ${
                  activeSection === item.name
                    ? "text-deep-navy"
                    : "text-deep-navy/60 hover:text-deep-navy"
                }`}
              >
                {item.name}
                {activeSection === item.name && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-5 bg-deep-navy rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-6 relative px-7 py-3 text-[12px] font-bold uppercase tracking-[0.2em] text-white bg-deep-navy overflow-hidden group transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,17,42,0.4)]"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Get in Touch
              </span>
              <span className="absolute inset-0 bg-teal translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-4 flex flex-col justify-between">
              <span className={`block h-[2px] w-full bg-deep-navy transform transition-all duration-300 origin-center ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-[2px] bg-deep-navy transition-all duration-200 ${mobileMenuOpen ? "w-0 opacity-0" : "w-4 opacity-100"}`} />
              <span className={`block h-[2px] w-full bg-deep-navy transform transition-all duration-300 origin-center ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </nav>

        {/* Mobile Navigation — Full-screen overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 top-[88px] sm:top-[96px] z-40 bg-white"
            >
              <div className="flex flex-col h-full px-6 pt-8 pb-12">
                {/* Nav links */}
                <div className="flex-1 flex flex-col justify-start gap-1">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={item.href}
                        className={`block py-4 text-[15px] font-semibold uppercase tracking-[0.2em] transition-colors duration-200 border-b border-deep-navy/5 ${
                          activeSection === item.name
                            ? "text-deep-navy"
                            : "text-deep-navy/50 hover:text-deep-navy"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="flex items-center justify-between">
                          {item.name}
                          {activeSection === item.name && (
                            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                          )}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="mt-6"
                >
                  <Link
                    href="#contact"
                    className="block w-full py-4 text-center bg-deep-navy text-white font-bold uppercase tracking-[0.2em] text-[13px] hover:bg-ocean-deep transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get In Touch
                  </Link>
                  <p className="text-center text-[11px] text-deep-navy/30 mt-4 tracking-wider uppercase">Indocruises Maritime Services</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
