'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { FiChevronDown } from 'react-icons/fi'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return
      
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      
      gsap.to(parallaxRef.current, {
        x,
        y,
        duration: 1,
        ease: 'power2.out',
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cinematic-black via-cinematic-darkGray to-cinematic-black opacity-90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071')`,
            filter: 'brightness(0.3) contrast(1.1)',
          }}
        />
      </div>

      {/* Animated Light Beams */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-cinematic-cyan/30 to-transparent blur-sm animate-pulse" />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-cinematic-amber/20 to-transparent blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div ref={parallaxRef} className="relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 relative"
          >
            <span className="inline-block glow-text">Jonas Manuhutu</span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, delay: 3.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-cinematic-cyan to-transparent mb-8 max-w-2xl mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4 }}
            className="text-xl md:text-3xl lg:text-4xl mb-4 text-cinematic-white/90"
          >
            Lighting Programmer & Visual Storyteller
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.3 }}
            className="text-lg md:text-xl text-cinematic-white/70 mb-12"
          >
            Based in Breda, Netherlands
          </motion.p>

          <motion.a
            href="#portfolio"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 4.6 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 217, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-block"
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-cinematic-cyan"
        >
          <FiChevronDown size={40} />
        </motion.div>
      </motion.a>

      {/* Spotlight Effect */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="w-full h-full bg-radial-gradient opacity-20" style={{
            background: 'radial-gradient(circle at center, rgba(0, 217, 255, 0.15) 0%, transparent 70%)',
          }} />
        </div>
      </div>
    </section>
  )
}
