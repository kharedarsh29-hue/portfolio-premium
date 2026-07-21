"use client"

import { motion } from "framer-motion"

interface BrowserFrameProps {
  children: React.ReactNode
}

export default function BrowserFrame({ children }: BrowserFrameProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative rounded-xl overflow-hidden border border-border-subtle bg-bg-card shadow-xl shadow-black/25"
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-bg-elevated border-b border-border-subtle">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-amber-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <div className="ml-4 flex-1 max-w-[200px] h-5 rounded bg-white/[0.04] flex items-center px-2">
          <span className="text-[9px] text-text-muted truncate">example.com</span>
        </div>
      </div>
      <div className="relative overflow-hidden">
        {children}
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.03] transition-colors duration-400" />
      </div>
    </motion.div>
  )
}
