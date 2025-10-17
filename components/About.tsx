'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiUsers, FiZap } from 'react-icons/fi'

const experiences = [
  {
    year: '2020 - Present',
    title: 'Freelance Lighting Programmer',
    description: 'Creating stunning lighting designs for concerts, festivals, and corporate events across Europe.',
  },
  {
    year: '2018 - Present',
    title: 'Visual Content Creator',
    description: 'Capturing compelling photography and videography for live events and promotional content.',
  },
  {
    year: '2017 - 2020',
    title: 'Technical Lighting Operator',
    description: 'Operated complex lighting systems for major touring productions and theater performances.',
  },
]

const stats = [
  { icon: FiZap, value: '500+', label: 'Projects Completed' },
  { icon: FiUsers, value: '200+', label: 'Happy Clients' },
  { icon: FiAward, value: '50+', label: 'Events & Festivals' },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about" className="section-container bg-gradient-to-b from-cinematic-black to-cinematic-darkGray">
      <div className="max-w-7xl mx-auto w-full" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 glow-text">About Me</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cinematic-cyan to-cinematic-amber mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Spotlight Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative spotlight-effect"
          >
            <div className="relative overflow-hidden rounded-2xl glass-effect p-2">
              <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070')`,
                  }}
                />
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Floating accent line */}
              <motion.div
                animate={{ 
                  scaleX: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cinematic-cyan to-cinematic-amber"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-cinematic-cyan">
              Crafting Light & Capturing Moments
            </h3>
            <p className="text-lg text-cinematic-white/80 mb-6 leading-relaxed">
              I&apos;m Jonas Manuhutu, a passionate lighting programmer and visual storyteller based in Breda, Netherlands. 
              With years of experience in the live events industry, I specialize in creating unforgettable visual 
              experiences through the art of light and lens.
            </p>
            <p className="text-lg text-cinematic-white/80 mb-8 leading-relaxed">
              My work spans from programming complex lighting systems for major concerts and festivals to capturing 
              stunning photography and videography. I believe that every moment deserves to be illuminated perfectly, 
              whether through a carefully designed light show or a perfectly timed photograph.
            </p>

            {/* Experience Timeline */}
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                  className="glass-effect p-4 rounded-lg hover:bg-cinematic-gray/50 transition-colors duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-cinematic-cyan rounded-full mt-2 animate-pulse" />
                    <div className="flex-1">
                      <p className="text-cinematic-cyan font-semibold">{exp.year}</p>
                      <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                      <p className="text-cinematic-white/70">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect p-8 rounded-xl text-center spotlight-effect"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-cinematic-cyan" />
              <h4 className="text-4xl font-bold mb-2 glow-text">{stat.value}</h4>
              <p className="text-cinematic-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
