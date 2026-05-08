"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function UnderConstruction() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Set target date to 14 days from now (adjust as needed)
  const targetDate = useRef(new Date(Date.now() + 14 * 24 * 60 * 60 * 1000))
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.current.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-deep-navy text-white flex flex-col items-center justify-center p-6 relative overflow-hidden" id="under-construction-page">
      {/* Video Background looped first 2 seconds */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-deep-navy/80" />
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(8, 145, 178, 0.25), transparent 70%)'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center mt-12">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tight text-white/95"
        >
          Under Construction
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-slate-400 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto"
        >
          Indocruises Maritime Services is currently under construction.<br />
          We will be back shortly.
        </motion.p>

        {/* Clean Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-6 sm:gap-8 mb-16"
        >
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Mins" },
            { value: timeLeft.seconds, label: "Secs" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-2 font-medium tracking-wide">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-widest text-cyan-500/70 font-semibold">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Simple Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-300"
        >
          <a href="mailto:info@indocruises.co.id" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Mail className="w-4 h-4 opacity-70" />
            <span>info@indocruises.co.id</span>
          </a>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-600" />
          <a href="https://wa.me/6281219658407" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Phone className="w-4 h-4 opacity-70" />
            <span>+62 812-1965-8407</span>
          </a>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-600" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 opacity-70" />
            <span>Bali, Indonesia</span>
          </div>
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-xs text-slate-500 uppercase tracking-widest"
        >
          &copy; {new Date().getFullYear()} PT. Indocruises Maritime Services
        </motion.div>
      </div>
    </div>
  )
}
