'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar, MapPin, Lightbulb, Camera, Video } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timeline = [
    {
      year: '2020',
      title: 'Started Freelance Career',
      description: 'Began working as a freelance lighting programmer and photographer',
      icon: Lightbulb
    },
    {
      year: '2021',
      title: 'Video Production Expansion',
      description: 'Added video production services to portfolio',
      icon: Video
    },
    {
      year: '2022',
      title: 'Major Event Productions',
      description: 'Worked on large-scale live events and festivals',
      icon: Award
    },
    {
      year: '2023',
      title: 'Photography Focus',
      description: 'Specialized in event and portrait photography',
      icon: Camera
    },
    {
      year: '2024',
      title: 'Current',
      title: 'Full-Service Creative',
      description: 'Providing comprehensive lighting, photography, and video services',
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-20 bg-cinematic-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cinematic-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cinematic-amber/5 rounded-full blur-3xl"></div>
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cinematic-cyan to-cinematic-amber mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Profile Image Container */}
            <div className="relative group">
              <div className="w-80 h-80 mx-auto bg-cinematic-gray rounded-2xl overflow-hidden relative">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gradient-to-br from-cinematic-cyan/20 to-cinematic-amber/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-cinematic-cyan to-cinematic-amber rounded-full flex items-center justify-center mx-auto mb-4">
                      <Camera className="w-12 h-12 text-cinematic-black" />
                    </div>
                    <p className="text-gray-400 text-sm">Profile Photo</p>
                  </div>
                </div>
                
                {/* Animated spotlight effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cinematic-cyan/20 to-transparent transform -skew-x-12 animate-pulse-glow"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cinematic-cyan rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cinematic-amber rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-white">
                Passionate Visual Storyteller
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Based in Breda, Netherlands, I specialize in creating immersive visual experiences 
                through lighting design, photography, and video production. With over 4 years of 
                experience in the industry, I bring technical expertise and creative vision to every project.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My work spans from intimate portrait sessions to large-scale live events, always 
                focusing on capturing the perfect moment and creating the right atmosphere through 
                strategic lighting and composition.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-cinematic-cyan mb-2">50+</div>
                <div className="text-gray-400 text-sm">Events Produced</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-cinematic-amber mb-2">4+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>Breda, Netherlands</span>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-display font-bold text-white text-center mb-12">
            My Journey
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cinematic-cyan to-cinematic-amber rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-cinematic-gray/50 backdrop-blur-sm rounded-lg p-6 border border-cinematic-cyan/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <item.icon className="w-5 h-5 text-cinematic-cyan" />
                        <span className="text-cinematic-cyan font-semibold">{item.year}</span>
                      </div>
                      <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-4 h-4 bg-cinematic-cyan rounded-full border-4 border-cinematic-black animate-pulse-glow"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
