"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function Shape({ position, color, scale, speed, distort }: {
  position: [number, number, number];
  color: string;
  scale: number;
  speed: number;
  distort: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * speed * 0.3;
      ref.current.rotation.y = clock.getElapsedTime() * speed * 0.5;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          distort={distort}
          speed={2}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingShapes() {
  const shapes = useMemo(
    () => [
      { position: [-4, 2, -3] as [number, number, number], color: "#6366f1", scale: 0.6, speed: 0.5, distort: 0.3 },
      { position: [5, -1, -5] as [number, number, number], color: "#ec4899", scale: 0.8, speed: 0.3, distort: 0.4 },
      { position: [-3, -3, -6] as [number, number, number], color: "#06b6d4", scale: 0.5, speed: 0.6, distort: 0.2 },
      { position: [4, 3, -4] as [number, number, number], color: "#a78bfa", scale: 0.4, speed: 0.4, distort: 0.35 },
      { position: [0, -2, -8] as [number, number, number], color: "#f472b6", scale: 0.7, speed: 0.2, distort: 0.25 },
    ],
    []
  );

  return (
    <group>
      {shapes.map((s, i) => (
        <Shape key={i} {...s} />
      ))}
    </group>
  );
}
