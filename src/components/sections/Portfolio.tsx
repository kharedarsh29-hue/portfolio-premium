"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/data/projects"
import BrowserFrame from "@/components/projects/BrowserFrame"

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const [imgError, setImgError] = useState(false)

  const hasScreenshot = project.id === "nmk-fintech" || project.id === "sahibji-travels"

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: 0.06 * index }}
    >
      <div onClick={() => setExpanded(!expanded)} className="cursor-pointer group">
        <BrowserFrame>
          <div className={`aspect-[16/10] flex items-center justify-center relative overflow-hidden ${
            hasScreenshot
              ? "bg-bg-card"
              : project.industry.includes("Fashion")
              ? "bg-gradient-to-br from-violet-600/20 to-pink-600/10"
              : project.industry.includes("Real Estate")
              ? "bg-gradient-to-br from-blue-600/20 to-cyan-500/10"
              : project.industry.includes("Health")
              ? "bg-gradient-to-br from-emerald-600/20 to-green-600/10"
              : project.industry.includes("Food")
              ? "bg-gradient-to-br from-orange-500/20 to-amber-600/10"
              : project.industry.includes("Creative")
              ? "bg-gradient-to-br from-rose-500/20 to-purple-500/10"
              : "bg-gradient-to-br from-accent/20 to-accent-light/10"
          }`}>
            {hasScreenshot && !imgError ? (
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-top"
                onError={() => setImgError(true)}
              />
            ) : (
              <>
                <div className="absolute inset-0 opacity-[0.07]">
                  <div className="absolute top-3 left-3 right-16 h-1.5 rounded-full bg-white/30" />
                  <div className="absolute top-6 left-3 w-20 h-1.5 rounded-full bg-white/20" />
                  <div className="absolute top-10 left-3 right-8 h-1 rounded-full bg-white/10" />
                  <div className="absolute bottom-6 left-3 w-12 h-4 rounded bg-white/10" />
                  <div className="absolute bottom-6 right-3 w-8 h-4 rounded bg-white/15" />
                </div>
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-3xl shadow-lg shadow-black/20">
                    {project.industry.includes("Fashion") ? "👗"
                      : project.industry.includes("Real Estate") ? "🏠"
                      : project.industry.includes("Health") ? "💪"
                      : project.industry.includes("Food") ? "🍽️"
                      : project.industry.includes("Creative") ? "🎨"
                      : "🛒"}
                  </div>
                </div>
              </>
            )}
          </div>
        </BrowserFrame>
        <div className="mt-6 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-heading font-semibold text-text-primary group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-text-muted mt-1">{project.industry}</p>
          </div>
          <motion.span
            animate={{ rotate: expanded ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center text-sm text-text-muted shrink-0 mt-1"
          >
            +
          </motion.span>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-8 pb-4">
              <p className="text-sm text-text-secondary leading-relaxed paragraph-max mb-8">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.services.map((s) => (
                  <span key={s} className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/10">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs rounded-full bg-white/[0.04] text-text-muted">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-sm font-medium bg-accent text-white rounded-xl hover:bg-accent-light transition-colors h-14 inline-flex items-center"
                  >
                    Visit Website
                  </a>
                )}
                <span className="px-6 py-3 text-sm rounded-xl border border-border-default text-text-muted h-14 inline-flex items-center">
                  Case Study
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-32 pb-32 bg-bg-primary">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <p className="section-label">Portfoluio</p>
          <h2 className="section-heading max-w-3xl">
            <span className="text-gradient">Live projects</span>
            <br />
            I&apos;ve built.
          </h2>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
