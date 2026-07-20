"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { BsPlayFill } from "react-icons/bs";
import Scene3D from "@/components/three/Scene3D";
import Hero3D from "@/components/three/Hero3D";
import ParticleField from "@/components/three/ParticleField";
import Button from "@/components/ui/Button";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="hero-gradient" />

      <motion.div className="absolute inset-0 z-0" style={{ opacity }}>
        <Scene3D className="w-full h-full" cameraPosition={[0, 0, 6]} intensity={0.3}>
          <Hero3D />
          <ParticleField count={1500} />
        </Scene3D>
      </motion.div>

      <motion.div style={{ scale, y }} className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full glass text-indigo-300 border border-indigo-500/20 mb-8">
            Digital Innovation Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-white">We Build</span>
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Digital Realities
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We craft immersive 3D web experiences that captivate audiences, 
          drive engagement, and transform how brands connect with their users.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Your Project
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary" size="lg">
            <BsPlayFill size={20} />
            Watch Showreel
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest uppercase"
        >
          <span>Scroll</span>
          <div className="w-4 h-6 rounded-full border border-gray-500/50 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-pink-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
