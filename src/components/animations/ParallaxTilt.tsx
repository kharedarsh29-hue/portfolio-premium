"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

interface ParallaxTiltProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function ParallaxTilt({
  children,
  className = "",
  intensity = 10,
}: ParallaxTiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mousePos = useMousePosition(ref);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { damping: 20, stiffness: 150 });
  const springY = useSpring(rotateY, { damping: 20, stiffness: 150 });

  const handleMove = () => {
    rotateX.set(-mousePos.normalizedY * intensity);
    rotateY.set(mousePos.normalizedX * intensity);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
