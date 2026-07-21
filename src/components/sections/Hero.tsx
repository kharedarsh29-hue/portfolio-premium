"use client"

import { useRef, Suspense } from "react"
import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, useGLTF, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"
import MagneticButton from "@/components/ui/MagneticButton"

function Laptop3D() {
  const groupRef = useRef<THREE.Group>(null!)
  const { scene } = useGLTF("/models/laptop.glb")

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.15) * 0.02
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.04
    }
  })

  return (
    <Float speed={0.8} rotationIntensity={0.04} floatIntensity={0.3}>
      <group ref={groupRef} position={[0, -0.3, 0]} scale={0.9}>
        <primitive object={scene} />
      </group>
    </Float>
  )
}

function Particles() {
  const count = 40
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#e85d04" transparent opacity={0.35} sizeAttenuation />
    </points>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.02] via-transparent to-bg-primary pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] rounded-full bg-accent-light/5 blur-[100px] pointer-events-none" />

      <div className="container-hero relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center pt-32 pb-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="section-label"
          >
            Premium Digital Agency
          </motion.p>

          <div>
            {[
              { text: "Crafting Digital", delay: 1.0 },
              { text: "Experiences That", delay: 1.2 },
              { text: "Grow Businesses.", delay: 1.4, gradient: true },
            ].map((line) => (
              <div key={line.text} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: line.delay,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className={`text-[clamp(2.5rem,7vw,5.5rem)] font-heading font-bold leading-[1.0] tracking-[-0.04em] ${
                    line.gradient ? "text-gradient" : "text-text-primary"
                  }`}
                >
                  {line.text}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="mt-8 text-base text-text-secondary leading-relaxed paragraph-max"
          >
            Premium websites, AI receptionists, and smart automations that turn visitors into clients — on autopilot.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.0 }}
            className="mt-10 flex flex-wrap gap-10"
          >
            <MagneticButton size="lg" href="#portfolio">
              View Projects
            </MagneticButton>
            <MagneticButton size="lg" variant="outline" href="#contact">
              Book a Call
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.3 }}
            className="mt-16 flex items-center gap-8"
          >
            <div className="flex -space-x-2">
              {["S", "M", "P", "A"].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-bg-primary bg-bg-elevated flex items-center justify-center text-[10px] font-medium text-text-secondary"
                >
                  {c}
                </div>
              ))}
            </div>
            <span className="text-xs text-text-muted">Trusted by 50+ businesses</span>
          </motion.div>
        </div>

        <div className="hidden lg:block relative h-[520px]">
          <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 2]}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <directionalLight position={[-5, -5, -5]} intensity={0.2} />
            <Suspense fallback={null}>
              <Laptop3D />
              <Particles />
            </Suspense>
          </Canvas>

          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-4">
            {["Shopify", "WhatsApp", "AI", "3D"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-[10px] font-medium rounded-full bg-white/[0.03] border border-white/[0.06] text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-4 h-6 rounded-full border border-white/[0.07] flex items-start justify-center p-1"
        >
          <div className="w-[2px] h-1.5 rounded-full bg-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}
