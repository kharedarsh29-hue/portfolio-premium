"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const statsData = [
  { value: "50+", label: "Projects Delivered" },
  { value: "35+", label: "Happy Clients" },
  { value: "4+", label: "Years Experience" },
  { value: "200+", label: "Automations Built" },
]

const valuesData = [
  { number: "01", title: "Strategy First", desc: "Every project starts with understanding your business, goals, and audience before writing a single line of code." },
  { number: "02", title: "Craft Over Speed", desc: "We don't do templates. Every pixel, interaction, and animation is intentionally designed to create impact." },
  { number: "03", title: "Results Driven", desc: "Beautiful is good. Profitable is better. Every solution we build is engineered to grow your business." },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" className="pt-32 pb-32 bg-bg-primary">
      <div className="container-site">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="section-label"
            >
              About
            </motion.p>
            <h2 className="section-heading">
              Building digital
              <br />
              <span className="text-gradient">products</span> that
              <br />
              drive growth.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center gap-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base text-text-secondary leading-relaxed paragraph-max"
            >
              I help businesses bridge the gap between stunning design and intelligent automation. Whether it&apos;s a premium website, an AI receptionist, or a fully automated sales pipeline — every project is built with the same philosophy: craftsmanship that converts.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-sm text-text-muted leading-relaxed paragraph-max"
            >
              From Shopify stores to WhatsApp bots, I combine design thinking with technical execution to deliver solutions that feel premium and perform relentlessly.
            </motion.p>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="text-left flex flex-col items-start"
            >
              <div className="text-5xl md:text-6xl font-heading font-bold text-text-primary mb-4 leading-none">
                {inView && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + 0.08 * i }}
                  >
                    {stat.value}
                  </motion.span>
                )}
              </div>
              <p className="text-sm text-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {valuesData.map((v, i) => (
            <motion.div
              key={v.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="p-10 rounded-3xl bg-bg-card border border-border-subtle hover:border-border-default transition-colors duration-500"
            >
              <span className="text-4xl font-heading font-bold text-accent/20 leading-none">
                {v.number}
              </span>
              <h3 className="mt-6 text-xl font-heading font-semibold text-text-primary">
                {v.title}
              </h3>
              <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
