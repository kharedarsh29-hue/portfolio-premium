"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { automations } from "@/data/automations"
import AutomationVisual from "@/components/ui/AutomationVisual"

const categories = [
  { id: "all", label: "All" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "instagram", label: "Instagram" },
  { id: "workflow", label: "Workflows" },
  { id: "leads", label: "Lead Gen" },
]

export default function AutomationShowcase() {
  const [active, setActive] = useState("all")
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered =
    active === "all"
      ? automations
      : automations.filter((a) => a.category === active)

  return (
    <section id="automation" className="pt-32 pb-32 bg-bg-secondary">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <p className="section-label">Automation</p>
          <h2 className="section-heading max-w-3xl">
            Systems that
            <br />
            <span className="text-gradient">run while you sleep</span>.
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2 text-sm rounded-lg border transition-all duration-300 ${
                active === c.id
                  ? "bg-accent text-white border-accent"
                  : "bg-transparent text-text-muted border-border-subtle hover:border-border-default hover:text-text-secondary"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: 0.03 * i }}
                onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                className="cursor-pointer rounded-3xl border border-border-subtle bg-bg-card/50 hover:border-border-default hover:bg-bg-card transition-all duration-300 overflow-hidden"
              >
                <div className={`aspect-[16/9] relative overflow-hidden ${
                  item.category === "whatsapp"
                    ? "bg-gradient-to-br from-emerald-600/20 to-emerald-500/5"
                    : item.category === "instagram"
                    ? "bg-gradient-to-br from-pink-600/20 to-violet-600/5"
                    : item.category === "workflow"
                    ? "bg-gradient-to-br from-cyan-500/20 to-blue-600/5"
                    : "bg-gradient-to-br from-amber-600/20 to-orange-500/5"
                }`}>
                  <AutomationVisual category={item.category} />
                </div>
                <div className="p-10">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base font-heading font-semibold text-text-primary">
                      {item.title}
                    </h3>
                    <motion.span
                      animate={{ rotate: expanded === item.id ? 45 : 0 }}
                      className="text-sm text-text-muted shrink-0"
                    >
                      +
                    </motion.span>
                  </div>
                  <AnimatePresence>
                    {expanded === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-6 text-sm text-text-secondary leading-relaxed">
                          {item.description}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {item.tags.map((t) => (
                            <span key={t} className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.slice(0, 2).map((t) => (
                      <span key={t} className="px-3 py-1 text-xs rounded-full bg-white/[0.04] text-text-muted">
                        {t}
                      </span>
                    ))}
                    {item.tags.length > 2 && !expanded && (
                      <span className="px-3 py-1 text-xs text-text-muted">
                        +{item.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
