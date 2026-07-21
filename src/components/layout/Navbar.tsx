"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#portfolio" },
  { label: "Automation", href: "#automation" },
  { label: "AI", href: "#ai-receptionist" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.4 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-[1280px] rounded-2xl transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-2xl shadow-black/30"
          : "bg-transparent border border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <a href="#hero" className="text-base font-heading font-bold tracking-tight">
          <span className="text-gradient">P</span>
          <span className="text-white/70">ortfolio</span>
        </a>

        <div className="hidden md:flex items-center gap-2">
          {links.slice(0, 5).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/[0.04]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 text-sm font-medium text-white bg-accent rounded-xl hover:bg-accent-light transition-colors"
          >
            Book a Call
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-2">
            <motion.span
              animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] bg-text-primary rounded-full"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-[2px] bg-text-primary rounded-full"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] bg-text-primary rounded-full"
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden px-6 pb-4"
          >
            <div className="flex flex-col gap-4 pt-4 border-t border-border-subtle">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
