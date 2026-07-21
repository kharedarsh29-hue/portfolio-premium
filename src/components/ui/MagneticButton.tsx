"use client"

import { useRef, type ReactNode } from "react"
import { motion } from "framer-motion"

interface Props {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  variant?: "primary" | "outline"
  size?: "sm" | "md" | "lg"
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)"
  }

  const sizeClasses = {
    sm: "px-4 text-xs",
    md: "px-6 text-sm",
    lg: "px-8 text-base",
  }

  const variantClasses = {
    primary: "bg-accent text-white hover:bg-accent-light",
    outline: "border border-border-default text-text-secondary hover:border-accent/40 hover:text-accent",
  }

  const Tag = href ? "a" : "button"
  const extraProps = href ? { href } : { onClick }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className="inline-block transition-transform duration-200 ease-out"
    >
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="inline-block">
        <Tag
          {...extraProps}
          className={`${sizeClasses[size]} ${variantClasses[variant]} h-14 rounded-xl font-medium transition-colors duration-300 inline-flex items-center justify-center ${className}`}
        >
          {children}
        </Tag>
      </motion.div>
    </div>
  )
}
