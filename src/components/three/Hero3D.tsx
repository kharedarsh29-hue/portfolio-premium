"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, TorusKnot } from "@react-three/drei";
import * as THREE from "three";

export default function Hero3D() {
  const groupRef = useRef<THREE.Group>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1 + mouse.x * 0.1;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.1 + mouse.y * 0.05;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      torusRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
        <Sphere args={[1.2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#6366f1"
            roughness={0.1}
            metalness={0.9}
            distort={0.3}
            speed={2}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>

      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
        <TorusKnot
          ref={torusRef}
          args={[1.8, 0.4, 128, 16]}
          position={[0, 0, 0]}
        >
          <MeshDistortMaterial
            color="#ec4899"
            roughness={0.2}
            metalness={0.7}
            distort={0.2}
            speed={1.5}
            transparent
            opacity={0.4}
            wireframe
          />
        </TorusKnot>
      </Float>

      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.8}>
        <mesh position={[0, 0, 0]} scale={[2.5, 2.5, 2.5]}>
          <ringGeometry args={[1.4, 1.6, 64]} />
          <meshBasicMaterial
            color="#06b6d4"
            transparent
            opacity={0.15}
            side={THREE.DoubleSide}
          />
        </mesh>
      </Float>

      {[-2.5, -1.5, 1.5, 2.5].map((x, i) => (
        <Float key={i} speed={0.6 + i * 0.2} rotationIntensity={0.1} floatIntensity={0.3}>
          <mesh position={[x, Math.sin(i * 1.5) * 1.5, -2]} scale={0.08}>
            <dodecahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#6366f1" : "#ec4899"}
              transparent
              opacity={0.3}
              emissive={i % 2 === 0 ? "#6366f1" : "#ec4899"}
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}
