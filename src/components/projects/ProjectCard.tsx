"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Project } from "@/data/projects"
import BrowserFrame from "./BrowserFrame"
import MagneticButton from "@/components/ui/MagneticButton"

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group"
    >
      <div
        onClick={() => setExpanded(!expanded)}
        className="cursor-pointer"
      >
        <BrowserFrame>
          <div className="aspect-[16/10] bg-gradient-to-br from-bg-elevated to-bg-card flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/20 to-amber-accent/20 flex items-center justify-center">
                <span className="text-2xl">
                  {project.industry.includes("Fashion")
                    ? "👗"
                    : project.industry.includes("Real Estate")
                    ? "🏠"
                    : project.industry.includes("Health")
                    ? "💪"
                    : project.industry.includes("Food")
                    ? "🍽️"
                    : project.industry.includes("Creative")
                    ? "🎨"
                    : "🛒"}
                </span>
              </div>
              <p className="text-xs text-text-muted">
                {project.image.replace("/projects/", "").replace(".jpg", "")}
              </p>
            </div>
          </div>
        </BrowserFrame>

        <div className="mt-4 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-heading font-semibold text-text-primary group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-text-muted mt-0.5">{project.industry}</p>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm text-text-muted shrink-0"
          >
            +
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-6 pb-4">
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs rounded-full bg-accent/10 text-accent border border-accent/10"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[11px] rounded-full bg-white/5 text-text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-sm font-medium bg-accent text-white rounded-xl hover:bg-accent-light transition-colors"
                  >
                    Visit Website
                  </a>
                )}
                <MagneticButton variant="outline" size="sm">
                  Case Study
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
