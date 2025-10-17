'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play, Camera, Lightbulb } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cinematic-gradient opacity-80"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cinematic-cyan/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cinematic-amber/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cinematic-glow/20 rounded-full blur-2xl animate-float"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-cinematic-cyan to-cinematic-amber rounded-full flex items-center justify-center mb-4 animate-glow">
            <Camera className="w-12 h-12 text-cinematic-black" />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 glow-text"
        >
          Jonas Manuhutu
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
            Lighting Programmer & Visual Storyteller
          </h2>
          <div className="flex items-center justify-center space-x-4 text-cinematic-cyan">
            <div className="flex items-center space-x-2">
              <Lightbulb className="w-5 h-5" />
              <span className="text-sm font-medium">Live Events</span>
            </div>
            <div className="w-1 h-1 bg-cinematic-cyan rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Camera className="w-5 h-5" />
              <span className="text-sm font-medium">Photography</span>
            </div>
            <div className="w-1 h-1 bg-cinematic-cyan rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span className="text-sm font-medium">Video Production</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12"
        >
          <motion.button
            onClick={scrollToPortfolio}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-transparent border-2 border-cinematic-cyan text-cinematic-cyan font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-cinematic-cyan hover:text-cinematic-black"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>View My Work</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-cinematic-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 text-gray-400 text-sm"
        >
          Based in Breda, Netherlands
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-cinematic-cyan"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
