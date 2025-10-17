'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Box, Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// 3D Lighting Console Component
function LightingConsole() {
  const groupRef = useRef<THREE.Group>(null);
  const faderRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
    }
    
    if (faderRef.current) {
      faderRef.current.position.y = Math.sin(time * 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Console Base */}
      <Box position={[0, -0.3, 0]} args={[2, 0.2, 1]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </Box>
      
      {/* Console Surface */}
      <Box position={[0, -0.1, 0]} args={[2, 0.1, 1]}>
        <meshStandardMaterial color="#2a2a2a" metalness={0.9} roughness={0.1} />
      </Box>
      
      {/* Faders */}
      {Array.from({ length: 8 }, (_, i) => (
        <Box
          key={i}
          ref={i === 0 ? faderRef : undefined}
          position={[-0.6 + i * 0.15, 0, 0]}
          args={[0.05, 0.3, 0.05]}
        >
          <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.2} />
        </Box>
      ))}
      
      {/* Screen */}
      <Box position={[0, 0.1, 0.45]} args={[0.8, 0.3, 0.05]}>
        <meshStandardMaterial color="#000000" emissive="#00ffff" emissiveIntensity={0.1} />
      </Box>
    </group>
  );
}

// 3D Camera Component
function Camera() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.3;
      groupRef.current.position.y = Math.sin(time * 0.8) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Camera Body */}
      <Box position={[0, 0, 0]} args={[0.3, 0.2, 0.4]}>
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </Box>
      
      {/* Lens */}
      <Cylinder position={[0, 0, 0.3]} args={[0.08, 0.08, 0.2]}>
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </Cylinder>
      
      {/* Viewfinder */}
      <Box position={[0, 0.1, -0.1]} args={[0.15, 0.08, 0.05]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>
    </group>
  );
}

// 3D Light Fixture Component
function LightFixture() {
  const groupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.2;
    }
    
    if (lightRef.current) {
      const material = lightRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.3 + Math.sin(time * 3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base */}
      <Cylinder position={[0, -0.2, 0]} args={[0.1, 0.1, 0.1]}>
        <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      {/* Arm */}
      <Box position={[0, 0, 0]} args={[0.05, 0.3, 0.05]}>
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </Box>
      
      {/* Light Head */}
      <Sphere
        ref={lightRef}
        position={[0, 0.2, 0]}
        args={[0.08, 16, 16]}
      >
        <meshStandardMaterial
          color="#ffb000"
          emissive="#ffb000"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </group>
  );
}

// 3D Scene Component
function GearScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-5, 5, 5]} color="#00ffff" intensity={0.4} />
      <pointLight position={[5, -5, 5]} color="#ffb000" intensity={0.4} />
      
      <LightingConsole />
      <Camera />
      <LightFixture />
      
      <Environment preset="night" />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

const Gear = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [, setHoveredItem] = useState<string | null>(null);

  const gearItems = [
    {
      id: 'lighting',
      title: 'Lighting Control',
      description: 'GrandMA3, Avolites, ETC Eos consoles for precise lighting control',
      items: ['GrandMA3 Full Size', 'Avolites Quartz', 'ETC Eos Family', 'Chroma-Q ColorForce']
    },
    {
      id: 'cameras',
      title: 'Camera Equipment',
      description: 'Professional cameras and lenses for photography and videography',
      items: ['Canon EOS R5', 'Sony FX6', 'Various Lenses', 'Gimbal Stabilizers']
    },
    {
      id: 'fixtures',
      title: 'Light Fixtures',
      description: 'Modern LED and traditional fixtures for every lighting need',
      items: ['Moving Head LEDs', 'Strip Lights', 'Spotlights', 'Flood Lights']
    },
    {
      id: 'software',
      title: 'Software & Tools',
      description: 'Industry-standard software for lighting design and video editing',
      items: ['GrandMA3 Software', 'DaVinci Resolve', 'Adobe Creative Suite', 'QLab']
    }
  ];

  useGSAP(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  return (
    <section
      id="gear"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-cinematic-dark/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 glow-text">
            Behind the Scenes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The tools and equipment that bring my creative vision to life
          </p>
          <div className="w-24 h-1 bg-cinematic-cyan mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-96 mb-16 rounded-lg overflow-hidden border border-cinematic-cyan/20"
        >
          <GearScene />
        </motion.div>

        {/* Gear Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gearItems.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div
                className="bg-cinematic-dark/50 backdrop-blur-sm p-8 rounded-lg border border-cinematic-cyan/20 hover:border-cinematic-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
                onMouseEnter={() => setHoveredItem(category.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cinematic-cyan/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">
                      {category.id === 'lighting' ? '🎛️' : 
                       category.id === 'cameras' ? '📷' : 
                       category.id === 'fixtures' ? '💡' : '💻'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cinematic-cyan transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-cinematic-cyan rounded-full mr-3"></div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '8+', label: 'Years Experience' },
            { number: '200+', label: 'Events Produced' },
            { number: '50+', label: 'Happy Clients' },
            { number: '24/7', label: 'Available Support' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-cinematic-cyan mb-2 glow-text">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gear;