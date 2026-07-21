"use client"

import { useState, useEffect, type RefObject } from "react"

export function useMousePosition(ref?: RefObject<HTMLDivElement | null>) {
  const [pos, setPos] = useState({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        setPos({
          x: e.clientX,
          y: e.clientY,
          normalizedX: (e.clientX - cx) / (rect.width / 2),
          normalizedY: (e.clientY - cy) / (rect.height / 2),
        })
      } else {
        setPos({ x: e.clientX, y: e.clientY, normalizedX: 0, normalizedY: 0 })
      }
    }
    window.addEventListener("mousemove", handler)
    return () => window.removeEventListener("mousemove", handler)
  }, [ref])

  return pos
}
