"use client"

import { motion } from "framer-motion"
import MagneticButton from "@/components/ui/MagneticButton"

const methods = [
  { label: "Email", value: "hello@example.com", href: "mailto:hello@example.com", icon: "✉️" },
  { label: "WhatsApp", value: "+1 (555) 123-4567", href: "https://wa.me/15551234567", icon: "💬" },
  { label: "Instagram", value: "@yourhandle", href: "https://instagram.com", icon: "📸" },
  { label: "LinkedIn", value: "Connect with me", href: "https://linkedin.com", icon: "🔗" },
]

const serviceOptions = [
  "Premium Website", "Shopify Store", "WhatsApp Automation",
  "Instagram Automation", "AI Receptionist", "Lead Generation",
  "CRM Automation", "Other",
]

export default function Contact() {
  return (
    <section id="contact" className="pt-32 pb-32 bg-bg-secondary overflow-hidden">
      <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full bg-accent/[0.04] blur-[100px] pointer-events-none" />

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <p className="section-label">Contact</p>
          <h2 className="section-heading max-w-3xl">
            Ready to build
            <br />
            something <span className="text-gradient">great</span>?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="text-base text-text-secondary leading-relaxed paragraph-max heading-desc-gap mb-16">
              Tell me about your project. I&apos;ll get back to you within 24 hours with a plan and a quote.
            </p>

            <div className="space-y-4 mb-16">
              {methods.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl glass hover:border-accent/15 transition-all duration-300 group"
                >
                  <span className="text-xl">{m.icon}</span>
                  <div>
                    <p className="text-xs text-text-muted">{m.label}</p>
                    <p className="text-sm text-text-primary group-hover:text-accent transition-colors">
                      {m.value}
                    </p>
                  </div>
                  <span className="ml-auto text-sm text-text-muted group-hover:text-accent transition-colors">→</span>
                </a>
              ))}
            </div>

            <MagneticButton size="lg" href="https://calendly.com">
              Book a Free Consultation
            </MagneticButton>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="glass rounded-3xl p-10">
              <h3 className="text-lg font-heading font-semibold text-text-primary mb-8">
                Send a Message
              </h3>
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs text-text-muted mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-border-subtle text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/40 transition-colors text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-text-muted mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-border-subtle text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/40 transition-colors text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-text-muted mb-2">Service</label>
                  <select
                    name="service"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-border-subtle text-text-primary focus:outline-none focus:border-accent/40 transition-colors text-sm"
                  >
                    <option value="" className="bg-bg-card">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s.toLowerCase().replace(/\s+/g, "-")} className="bg-bg-card">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-text-muted mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-border-subtle text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/40 transition-colors text-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full py-4 rounded-xl bg-accent text-white font-medium hover:bg-accent-light transition-colors text-sm h-14 flex items-center justify-center"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
