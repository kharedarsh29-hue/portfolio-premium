"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { services } from "@/data/services"

export default function Services() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section id="services" className="pt-32 pb-32 bg-bg-secondary">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <p className="section-label">Services</p>
          <h2 className="section-heading max-w-3xl">
            Everything you need to
            <br />
            <span className="text-gradient">scale your business</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.04 * i }}
              layout
              onClick={() => setExpanded(expanded === service.id ? null : service.id)}
              className={`cursor-pointer rounded-3xl border transition-all duration-400 h-full ${
                expanded === service.id
                  ? "border-accent/25 bg-bg-card"
                  : "border-border-subtle bg-bg-card/50 hover:border-border-default hover:bg-bg-card"
              }`}
            >
              <div className="p-10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center text-xl shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-text-primary">
                        {service.title}
                      </h3>
                      <p className="text-xs text-text-muted mt-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expanded === service.id ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center text-sm text-text-muted shrink-0 mt-1"
                  >
                    +
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expanded === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-8 text-sm text-text-secondary leading-relaxed paragraph-max">
                        {service.description}
                      </p>
                      <div className="mt-8 flex flex-wrap gap-2">
                        {service.features.map((f) => (
                          <span
                            key={f}
                            className="px-3 py-1.5 text-xs rounded-full bg-white/[0.04] border border-white/[0.04] text-text-muted"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {expanded !== service.id && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1 text-xs rounded-full bg-white/[0.03] text-text-muted"
                      >
                        {f}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="px-3 py-1 text-xs text-text-muted">
                        +{service.features.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
