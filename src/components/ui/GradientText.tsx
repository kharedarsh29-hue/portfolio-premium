"use client";

import { motion } from "framer-motion";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  from?: string;
  via?: string;
  to?: string;
}

export default function GradientText({
  children,
  className = "",
  as: Tag = "span",
  from = "#818cf8",
  via = "#ec4899",
  to = "#06b6d4",
}: GradientTextProps) {
  return (
    <Tag
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${from}, ${via}, ${to})`,
      }}
    >
      {children}
    </Tag>
  );
}
