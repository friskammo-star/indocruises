"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Anchor } from "lucide-react"
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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-deep-navy/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3"
          : "bg-gradient-to-b from-black/40 to-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group" aria-label="IndoCruises Home">
            <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden">
              <Image src="/images/logo-transparent.png" alt="Indocruises Logo" fill className="object-contain transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold tracking-[0.2em] text-white">
                INDOCRUISES
              </span>
              <span className="text-[9px] tracking-[0.35em] text-gold/80 uppercase font-medium">
                Maritime Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-5 py-2 text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                  activeSection === item.name
                    ? "text-gold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.name}
                {activeSection === item.name && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-6 relative px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-deep-navy bg-gold rounded-none overflow-hidden group transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,168,67,0.4)]"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Get in Touch
              </span>
              <span className="absolute inset-0 bg-teal translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
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
              <span className={`block h-[2px] w-full bg-white transform transition-all duration-300 origin-center ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-[2px] bg-white transition-all duration-200 ${mobileMenuOpen ? "w-0 opacity-0" : "w-4 opacity-100"}`} />
              <span className={`block h-[2px] w-full bg-white transform transition-all duration-300 origin-center ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden mt-6"
            >
              <div className="bg-deep-navy/95 backdrop-blur-2xl border border-white/5 p-8 space-y-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-3 text-lg font-light tracking-widest text-white/90 hover:text-gold transition-colors border-b border-white/5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="pt-4"
                >
                  <Link
                    href="#contact"
                    className="block w-full py-4 text-center bg-gold text-deep-navy font-semibold uppercase tracking-[0.2em] text-sm hover:bg-gold-light transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
