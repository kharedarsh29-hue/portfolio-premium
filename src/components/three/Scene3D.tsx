"use client";

import { Canvas } from "@react-three/fiber";
import { Preload, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { Suspense } from "react";

interface Scene3DProps {
  children: React.ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  controls?: boolean;
  intensity?: number;
}

export default function Scene3D({
  children,
  className = "",
  cameraPosition = [0, 0, 6],
  intensity = 0.5,
}: Scene3DProps) {
  return (
    <div className={`${className}`}>
      <Canvas
        camera={{ position: cameraPosition, fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={intensity} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#ec4899" />
          <pointLight position={[0, 3, 3]} intensity={0.5} color="#6366f1" />
          <pointLight position={[0, -3, -3]} intensity={0.3} color="#06b6d4" />
          {children}
          <Preload all />
        </Suspense>
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
      </Canvas>
    </div>
  );
}
