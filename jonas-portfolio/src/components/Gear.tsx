'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Lightbulb, Monitor, Headphones, Settings, Zap } from 'lucide-react';

const Gear = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const gearCategories = [
    {
      title: 'Lighting Equipment',
      icon: Lightbulb,
      items: [
        { name: 'GrandMA3 Console', description: 'Professional lighting control' },
        { name: 'LED Moving Heads', description: 'RGBW color mixing fixtures' },
        { name: 'Spotlights', description: 'High-intensity beam projectors' },
        { name: 'DMX Controllers', description: 'Digital lighting control' }
      ]
    },
    {
      title: 'Photography Gear',
      icon: Camera,
      items: [
        { name: 'Canon EOS R5', description: 'Full-frame mirrorless camera' },
        { name: 'Professional Lenses', description: '24-70mm, 70-200mm, 85mm' },
        { name: 'Studio Lighting', description: 'Continuous LED panels' },
        { name: 'Tripods & Gimbals', description: 'Stabilization equipment' }
      ]
    },
    {
      title: 'Video Production',
      icon: Monitor,
      items: [
        { name: 'Sony FX6', description: 'Cinema camera system' },
        { name: 'Gimbal Stabilizer', description: 'Smooth motion capture' },
        { name: 'Audio Equipment', description: 'Professional microphones' },
        { name: 'Editing Setup', description: 'High-performance workstation' }
      ]
    }
  ];

  const floatingElements = [
    { icon: Camera, delay: 0, position: 'top-20 left-10' },
    { icon: Lightbulb, delay: 0.5, position: 'top-40 right-20' },
    { icon: Monitor, delay: 1, position: 'bottom-40 left-20' },
    { icon: Headphones, delay: 1.5, position: 'bottom-20 right-10' },
    { icon: Settings, delay: 2, position: 'top-1/2 left-1/4' },
    { icon: Zap, delay: 2.5, position: 'top-1/3 right-1/3' }
  ];

  return (
    <section id="gear" className="py-20 bg-cinematic-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cinematic-cyan/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cinematic-amber/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={isInView ? { 
              opacity: 0.6, 
              scale: 1, 
              rotate: 0,
              y: [0, -20, 0]
            } : { opacity: 0, scale: 0, rotate: -180 }}
            transition={{ 
              duration: 1, 
              delay: element.delay,
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }}
            className={`absolute ${element.position} w-16 h-16 bg-gradient-to-r from-cinematic-cyan/20 to-cinematic-amber/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cinematic-cyan/30`}
          >
            <element.icon className="w-8 h-8 text-cinematic-cyan" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 glow-text">
            Behind the Scenes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cinematic-cyan to-cinematic-amber mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            The professional equipment and tools I use to bring your vision to life
          </p>
        </motion.div>

        {/* Gear Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {gearCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.2 }}
              className="group"
            >
              <div className="bg-cinematic-gray/30 backdrop-blur-sm rounded-2xl p-8 border border-cinematic-cyan/20 hover:border-cinematic-cyan/40 transition-all duration-300 h-full">
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cinematic-cyan to-cinematic-amber rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                    <category.icon className="w-8 h-8 text-cinematic-black" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{category.title}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-cinematic-cyan to-cinematic-amber mx-auto rounded-full"></div>
                </div>

                {/* Gear Items */}
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.4 + categoryIndex * 0.2 + itemIndex * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-cinematic-black/50 hover:bg-cinematic-black/70 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-cinematic-cyan rounded-full animate-pulse-glow"></div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                        <p className="text-gray-400 text-xs">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Setup Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-cinematic-gray/20 backdrop-blur-sm rounded-2xl p-8 border border-cinematic-cyan/20"
        >
          <h3 className="text-2xl font-display font-bold text-white text-center mb-8">
            Studio Setup
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* 3D Scene Description */}
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                My studio is equipped with state-of-the-art lighting and camera systems, 
                designed to create the perfect environment for both photography and video production.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cinematic-cyan rounded-full animate-pulse-glow"></div>
                  <span className="text-white font-medium">Professional lighting grid with 20+ fixtures</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cinematic-amber rounded-full animate-pulse-glow"></div>
                  <span className="text-white font-medium">Soundproofed studio space</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cinematic-cyan rounded-full animate-pulse-glow"></div>
                  <span className="text-white font-medium">High-resolution camera systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cinematic-amber rounded-full animate-pulse-glow"></div>
                  <span className="text-white font-medium">Real-time monitoring and control</span>
                </div>
              </div>
            </div>

            {/* 3D Scene Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cinematic-cyan/10 to-cinematic-amber/10 rounded-2xl flex items-center justify-center border border-cinematic-cyan/20">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cinematic-cyan to-cinematic-amber rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                    <Settings className="w-12 h-12 text-cinematic-black" />
                  </div>
                  <p className="text-gray-400 text-sm">3D Studio Visualization</p>
                  <p className="text-gray-500 text-xs mt-2">Interactive 3D scene would be here</p>
                </div>
              </div>
              
              {/* Animated elements around the scene */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-cinematic-cyan/30 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-cinematic-amber/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-cinematic-glow/40 rounded-full animate-pulse-glow"></div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how I can bring your vision to life with professional equipment and creative expertise.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cinematic-cyan to-cinematic-amber text-cinematic-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gear;
