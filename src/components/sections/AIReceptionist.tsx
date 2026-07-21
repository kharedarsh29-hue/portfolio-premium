"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import VoiceVisual from "@/components/ui/VoiceVisual"

const stepsData = [
  { icon: "📞", title: "Inbound Call", desc: "Customer calls. AI answers instantly — no wait times, no missed calls." },
  { icon: "🧠", title: "AI Understands", desc: "Natural language processing understands intent. Books appointments, answers FAQs, qualifies leads." },
  { icon: "📅", title: "Takes Action", desc: "Creates calendar events, sends confirmation SMS/WhatsApp, logs to CRM in real time." },
  { icon: "📊", title: "Reports", desc: "Detailed analytics: call volume, booking rates, popular inquiries, missed opportunities." },
]

const featuresData = [
  "24/7 Availability", "Natural Conversations", "Calendar Sync",
  "Multi-Language", "CRM Integration", "Lead Scoring", "Custom Voice", "SMS Follow-ups",
]

export default function AIReceptionist() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="ai-receptionist" className="relative pt-32 pb-32 overflow-x-hidden bg-bg-primary">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[140px] pointer-events-none" />

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <p className="section-label">AI Receptionist</p>
          <h2 className="section-heading max-w-3xl">
            Your AI receptionist.
            <br />
            <span className="text-gradient">Works 24/7. Never complains.</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />
              <div className="space-y-0">
                {stepsData.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.15 * i }}
                    className="relative flex gap-8 pb-32 last:pb-0"
                  >
                    <div className="relative z-10 w-12 h-12 rounded-full bg-accent/15 border border-accent/20 flex items-center justify-center text-base shrink-0">
                      {step.icon}
                    </div>
                    <div className="flex-1 min-w-0 pt-1">
                      <h3 className="text-lg font-heading font-semibold text-text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-secondary leading-relaxed paragraph-max">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="glass-strong rounded-3xl p-10"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center text-base shrink-0">
                  🎙️
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">AI Voice Agent</p>
                  <p className="text-xs text-text-muted mt-1">Active &mdash; Online</p>
                </div>
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="ml-auto w-2.5 h-2.5 rounded-full bg-green-500 shrink-0"
                />
              </div>

              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04]">
                  <span className="text-base shrink-0">📞</span>
                  <span className="text-sm text-text-secondary">+1 (555) 123-4567</span>
                  <span className="ml-auto text-xs text-accent">Connected</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04]">
                  <span className="text-base shrink-0">📅</span>
                  <span className="text-sm text-text-secondary">Today: 12 appointments booked</span>
                </div>
              </div>

              <VoiceVisual />

              <div className="flex flex-wrap gap-3">
                {featuresData.map((f) => (
                  <span key={f} className="px-3 py-1.5 text-xs rounded-full bg-white/[0.04] border border-white/[0.04] text-text-muted">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
