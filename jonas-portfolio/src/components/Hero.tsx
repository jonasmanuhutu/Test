'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// 3D Scene Component
function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.2;
      sphereRef.current.rotation.y = time * 0.3;
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.1;
      boxRef.current.rotation.z = time * 0.15;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.y = time * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating Camera Rig */}
      <Box
        ref={boxRef}
        position={[2, 1, 0]}
        args={[0.5, 0.3, 0.8]}
        castShadow
      >
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </Box>
      
      {/* Light Beam */}
      <Sphere
        ref={sphereRef}
        position={[-1.5, 0.5, 0]}
        args={[0.3, 32, 32]}
        castShadow
      >
        <meshStandardMaterial
          color="#ffb000"
          emissive="#ffb000"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>
      
      {/* Film Reel */}
      <Torus
        ref={torusRef}
        position={[0, -1, 1]}
        args={[0.4, 0.1, 16, 32]}
        castShadow
      >
        <meshStandardMaterial
          color="#333333"
          metalness={0.7}
          roughness={0.3}
        />
      </Torus>
    </group>
  );
}

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (titleRef.current && subtitleRef.current && ctaRef.current) {
      const tl = gsap.timeline();
      
      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out'
      })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.5')
      .from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.3');
    }
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain"
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-cinematic-black via-cinematic-dark to-cinematic-black" />
        <div className="absolute inset-0 bg-cinematic-black/40" />
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 z-10">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          <pointLight position={[-10, -10, -5]} color="#00ffff" intensity={0.3} />
          <pointLight position={[10, -10, 5]} color="#ffb000" intensity={0.3} />
          
          <Scene />
          
          <Environment preset="night" />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          ref={titleRef}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 glow-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          Jonas Manuhutu
        </motion.h1>
        
        <motion.p
          ref={subtitleRef}
          className="text-xl sm:text-2xl lg:text-3xl text-cinematic-cyan mb-8 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          Lighting Programmer & Visual Storyteller
        </motion.p>
        
        <motion.div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <motion.button
            onClick={scrollToPortfolio}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-cinematic-cyan text-cinematic-cyan font-semibold rounded-lg hover:bg-cinematic-cyan hover:text-cinematic-black transition-all duration-300 glow-border"
          >
            View My Work
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-cinematic-amber text-cinematic-black font-semibold rounded-lg hover:bg-cinematic-amber/90 transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-cinematic-cyan rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cinematic-cyan rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;