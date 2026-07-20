"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  tilt?: boolean;
}

export default function GlassCard({ children, className = "", glowColor = "rgba(99, 102, 241, 0.15)", tilt = true }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mousePos = useMousePosition(cardRef);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = () => {
    if (!tilt) return;
    rotateX.set(-mousePos.normalizedY * 5);
    rotateY.set(mousePos.normalizedX * 5);
  };

  const handleMouseLeave = () => {
    if (!tilt) return;
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      className={`glass rounded-2xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_${glowColor}] ${className}`}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
