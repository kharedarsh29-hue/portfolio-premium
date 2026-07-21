"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const phases = [
  { step: "01", title: "Discover", desc: "We dive deep into your business, goals, audience, and competition. No assumptions — just research and clarity.", color: "from-accent to-accent-light" },
  { step: "02", title: "Design", desc: "Wireframes, prototypes, and premium UI design. Every pixel is crafted to tell your brand story and drive action.", color: "from-accent-light to-amber-500" },
  { step: "03", title: "Develop", desc: "Clean code, modern tech, and meticulous attention to detail. We build fast, secure, and scalable systems.", color: "from-amber-500 to-emerald-500" },
  { step: "04", title: "Automate", desc: "Connect the tools. Set up the workflows. Build the automations. Your business starts running on autopilot.", color: "from-emerald-500 to-cyan-500" },
  { step: "05", title: "Launch & Grow", desc: "Deploy, monitor, optimize. We don't disappear after launch — we ensure everything runs smoothly.", color: "from-cyan-500 to-accent" },
]

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="process" className="pt-32 pb-32 bg-bg-primary">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <p className="section-label">Process</p>
          <h2 className="section-heading max-w-3xl">
            How I work — from idea
            <br />
            to <span className="text-gradient">launch</span>.
          </h2>
        </motion.div>

        <div ref={ref} className="relative max-w-[820px]">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent-light/20 to-accent/30 hidden md:block" />

          <div className="space-y-0">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="relative flex gap-8 pb-16 md:pb-20 last:pb-0"
              >
                <div className={`relative z-10 w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center text-xs md:text-base font-bold text-white shadow-lg shadow-black/20 shrink-0`}>
                  {phase.step}
                </div>
                <div className="flex-1 min-w-0 pt-1 md:pt-3">
                  <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed paragraph-max">
                    {phase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
