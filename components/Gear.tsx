'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei'
import { FiCamera, FiMonitor, FiZap } from 'react-icons/fi'

interface GearItem {
  name: string
  category: string
  description: string
  icon: React.ElementType
}

const gearItems: GearItem[] = [
  {
    name: 'MA Lighting GrandMA3',
    category: 'Lighting Console',
    description: 'Industry-standard lighting control for complex shows',
    icon: FiMonitor,
  },
  {
    name: 'Robe Moving Heads',
    category: 'Lighting Fixtures',
    description: 'Professional moving head fixtures for dynamic effects',
    icon: FiZap,
  },
  {
    name: 'Sony A7S III',
    category: 'Camera',
    description: 'Low-light cinema camera for stunning video',
    icon: FiCamera,
  },
  {
    name: 'Aputure 600D Pro',
    category: 'Lighting',
    description: 'Professional LED light for photography/video',
    icon: FiZap,
  },
  {
    name: 'Canon EOS R5',
    category: 'Camera',
    description: 'High-resolution mirrorless for photography',
    icon: FiCamera,
  },
  {
    name: 'Chamsys MagicQ',
    category: 'Software',
    description: 'Lighting control and visualization software',
    icon: FiMonitor,
  },
]

// 3D Camera Model Component
function Camera3D() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        {/* Camera Body */}
        <boxGeometry args={[2, 1.5, 1]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        {/* Lens */}
        <cylinderGeometry args={[0.6, 0.6, 1.5, 32]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0.8, 0.3]}>
        {/* Viewfinder */}
        <boxGeometry args={[0.5, 0.3, 0.3]} />
        <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={0.5} />
      </mesh>
    </Float>
  )
}

// 3D Light Fixture Model
function LightFixture() {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group>
        <mesh position={[0, 0, 0]}>
          {/* Base */}
          <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.5, 0]}>
          {/* Arm */}
          <cylinderGeometry args={[0.2, 0.2, 1, 16]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 1.2, 0]}>
          {/* Light Head */}
          <coneGeometry args={[0.6, 1, 32]} />
          <meshStandardMaterial color="#ff9500" emissive="#ff9500" emissiveIntensity={0.7} />
        </mesh>
        {/* Light Beam */}
        <pointLight position={[0, 1.5, 0]} intensity={2} color="#00d9ff" distance={5} />
      </group>
    </Float>
  )
}

export default function Gear() {
  const [activeScene, setActiveScene] = useState<'camera' | 'light'>('camera')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="gear" className="section-container bg-gradient-to-b from-cinematic-darkGray to-cinematic-black">
      <div className="max-w-7xl mx-auto w-full" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 glow-text">Gear & Tools</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cinematic-cyan to-cinematic-amber mx-auto mb-6" />
          <p className="text-xl text-cinematic-white/70 max-w-2xl mx-auto">
            Professional equipment I use to bring creative visions to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[500px] glass-effect rounded-2xl overflow-hidden"
          >
            {/* Scene Toggle Buttons */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <button
                onClick={() => setActiveScene('camera')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeScene === 'camera'
                    ? 'bg-cinematic-cyan text-cinematic-black'
                    : 'glass-effect text-white'
                }`}
              >
                Camera
              </button>
              <button
                onClick={() => setActiveScene('light')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeScene === 'light'
                    ? 'bg-cinematic-amber text-cinematic-black'
                    : 'glass-effect text-white'
                }`}
              >
                Lighting
              </button>
            </div>

            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 8]} />
              <OrbitControls 
                enableZoom={false} 
                autoRotate 
                autoRotateSpeed={1}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 4}
              />
              
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              
              {activeScene === 'camera' ? <Camera3D /> : <LightFixture />}
            </Canvas>

            {/* Interactive hint */}
            <div className="absolute bottom-4 right-4 glass-effect px-4 py-2 rounded-lg text-sm text-cinematic-white/70">
              Drag to rotate
            </div>
          </motion.div>

          {/* Gear List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold mb-6 text-cinematic-cyan">
              Professional Equipment
            </h3>
            <div className="grid gap-4">
              {gearItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="glass-effect p-4 rounded-lg hover:bg-cinematic-gray/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-cinematic-cyan/20 to-cinematic-amber/20 rounded-lg group-hover:from-cinematic-cyan/40 group-hover:to-cinematic-amber/40 transition-all">
                      <item.icon className="w-6 h-6 text-cinematic-cyan" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-lg font-bold">{item.name}</h4>
                        <span className="text-xs text-cinematic-amber font-semibold">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-cinematic-white/70 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Behind the Scenes Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="glass-effect p-8 rounded-2xl text-center max-w-3xl mx-auto spotlight-effect"
        >
          <h3 className="text-2xl font-bold mb-4 glow-text">
            Always Evolving
          </h3>
          <p className="text-lg text-cinematic-white/80 leading-relaxed">
            I continuously invest in the latest technology and techniques to deliver cutting-edge 
            results. From the newest lighting control systems to state-of-the-art cameras, 
            I ensure every project benefits from professional-grade equipment and expertise.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
