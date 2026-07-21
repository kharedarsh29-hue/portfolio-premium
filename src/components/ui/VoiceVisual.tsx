"use client"

import { motion } from "framer-motion"

export default function VoiceVisual() {
  const bars = Array.from({ length: 48 }).map((_, i) => ({
    height: 15 + Math.random() * 75,
    duration: 0.3 + Math.random() * 0.4,
    delay: Math.random() * 0.3,
  }))

  return (
    <div className="h-24 rounded-xl bg-white/[0.03] flex items-center justify-center mb-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.02] to-transparent" />
      <div className="flex items-center gap-[2px] h-16 relative">
        {bars.map((bar, i) => (
          <motion.div
            key={i}
            className="w-[3px] rounded-full"
            style={{
              background: `linear-gradient(to top, rgba(232,93,4,0.3), rgba(232,93,4,0.7))`,
            }}
            animate={{
              height: [`${bar.height * 0.3}%`, `${bar.height}%`, `${bar.height * 0.3}%`],
            }}
            transition={{
              duration: bar.duration,
              repeat: Infinity,
              delay: bar.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      {/* Glow dot */}
      <motion.div
        className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-accent/20 blur-xl"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.8, 1.1, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
