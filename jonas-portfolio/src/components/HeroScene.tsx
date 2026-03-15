"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, DepthOfField, Bloom, Vignette } from "@react-three/postprocessing";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function FloatingRig() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t / 3) * 0.2;
      groupRef.current.position.y = Math.sin(t) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 0.6, 0.5]} />
        <meshStandardMaterial color="#111417" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0.8, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.5, 32]} />
        <meshStandardMaterial color="#151a1f" metalness={0.6} roughness={0.35} />
      </mesh>
      <mesh position={[-0.7, 0.1, 0.25]} rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
        <cylinderGeometry args={[0.05, 0.05, 1.2, 16]} />
        <meshStandardMaterial color="#0b0e11" metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  );
}

function StageLights() {
  const cyan = new THREE.Color("#00e0ff");
  const amber = new THREE.Color("#ffae42");
  return (
    <group>
      <spotLight color={cyan} position={[3, 3, 3]} intensity={3.2} angle={0.5} penumbra={0.6} castShadow />
      <spotLight color={amber} position={[-4, 2.5, 2]} intensity={2.0} angle={0.6} penumbra={0.5} castShadow />
      <ambientLight intensity={0.2} />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }}>
      <color attach="background" args={[7 / 255, 8 / 255, 10 / 255]} />
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0.4, 3.2]} fov={50} />
        <StageLights />
        <FloatingRig />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.25} />
        </mesh>
        <EffectComposer>
          <DepthOfField focusDistance={0.02} focalLength={0.02} bokehScale={2.2} />
          <Bloom intensity={0.35} luminanceThreshold={0.2} luminanceSmoothing={0.2} mipmapBlur />
          <Vignette eskil={false} offset={0.3} darkness={0.8} />
        </EffectComposer>
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
