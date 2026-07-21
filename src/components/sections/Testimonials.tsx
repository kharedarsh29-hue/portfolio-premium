"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { testimonials } from "@/data/testimonials"

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]

  return (
    <section id="testimonials" className="pt-32 pb-32 bg-bg-secondary">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <p className="section-label">Testimonials</p>
          <h2 className="section-heading max-w-3xl">
            What clients <span className="text-gradient">say</span>.
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="glass rounded-3xl p-12 md:p-16"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/15 to-accent-light/15 flex items-center justify-center text-2xl font-heading font-bold text-accent">
                  {t.name.charAt(0)}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <h3 className="text-lg font-heading font-semibold text-text-primary">
                    {t.name}
                  </h3>
                  <span className="text-sm text-text-muted">
                    {t.role}, {t.company}
                  </span>
                </div>
                <span className="inline-block text-xs px-4 py-1.5 rounded-full bg-accent/10 text-accent mb-6">
                  {t.project}
                </span>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed paragraph-max">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex gap-2 mt-8">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-accent-light text-lg">★</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-8 mt-16">
          <button
            onClick={() => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            ←
          </button>
          <div className="flex items-center gap-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === current ? "w-8 bg-accent" : "w-2 bg-white/[0.08] hover:bg-white/[0.15]"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-16 md:mt-20">
          {testimonials.slice(0, 3).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                current === i
                  ? "border-accent/20 bg-accent/[0.04]"
                  : "border-border-subtle bg-transparent hover:border-border-default"
              }`}
            >
              <p className="text-sm text-text-muted mb-1">{testimonials[i].name}</p>
              <p className="text-xs text-text-secondary line-clamp-2">
                &ldquo;{testimonials[i].content.slice(0, 80)}...&rdquo;
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
