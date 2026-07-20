"use client";

import { motion } from "framer-motion";
import { HiChartBar, HiCube, HiLightningBolt, HiUsers } from "react-icons/hi";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { stats } from "@/lib/data";

const pillars = [
  {
    icon: HiCube,
    title: "3D Innovation",
    description: "Pushing the boundaries of web graphics with cutting-edge Three.js and WebGL technology.",
    gradient: "from-indigo-500/20 to-purple-500/20",
    iconColor: "text-indigo-400",
  },
  {
    icon: HiLightningBolt,
    title: "Performance First",
    description: "Every line of code optimized for speed. We deliver buttery-smooth experiences at 60fps.",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: HiUsers,
    title: "User Centered",
    description: "Deep research-driven design that anticipates user needs and creates intuitive journeys.",
    gradient: "from-pink-500/20 to-cyan-500/20",
    iconColor: "text-pink-400",
  },
  {
    icon: HiChartBar,
    title: "Data Driven",
    description: "We measure everything. Our designs are backed by analytics and proven conversion patterns.",
    gradient: "from-cyan-500/20 to-indigo-500/20",
    iconColor: "text-cyan-400",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="About Us"
          title="Where Vision Meets Technology"
          description="We're a team of designers, engineers, and dreamers who believe the web should be more than flat pages. We create immersive 3D experiences that redefine digital interaction."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-6 text-center group cursor-default"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`glass rounded-2xl p-8 group cursor-default relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <pillar.icon className={`text-3xl mb-4 ${pillar.iconColor}`} />
                  <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
