"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";

type BeamProps = {
  color: string;
  from?: [number, number, number];
  to?: [number, number, number];
};

function Beam({ color, from = [0, 0, 0], to = [1, 0, 0] }: BeamProps) {
  return (
    <mesh>
      <cylinderGeometry args={[0.01, 0.01, Math.hypot(to[0]-from[0], to[1]-from[1], to[2]-from[2]), 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
}

function Truss() {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 0.05, 0.05]} />
        <meshStandardMaterial color="#20242a" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.4, 0]}>
        <boxGeometry args={[3, 0.05, 0.05]} />
        <meshStandardMaterial color="#20242a" metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  );
}

function GearRig() {
  return (
    <group>
      <Truss />
      <Beam color="#00e0ff" />
      <Beam color="#ffae42" from={[0,0,0]} to={[0.4,0.2,0.8]} />
    </group>
  );
}

export default function GearScene() {
  return (
    <div className="rounded-xl overflow-hidden glass border border-[var(--border)]">
      <Canvas dpr={[1, 2]} gl={{ antialias: true }} style={{ height: 320 }}>
        <color attach="background" args={[0,0,0]} />
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0.4, 3]} fov={50} />
          <ambientLight intensity={0.3} />
          <directionalLight position={[3,3,3]} intensity={1.5} />
          <GearRig />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}
