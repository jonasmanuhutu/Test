'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

    if (profileRef.current) {
      gsap.fromTo(
        profileRef.current,
        { opacity: 0, scale: 0.8, rotationY: -15 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: profileRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const experiences = [
    {
      year: '2020 - Present',
      title: 'Freelance Lighting Programmer',
      description: 'Specializing in live events, concerts, and corporate productions across Europe.'
    },
    {
      year: '2018 - 2020',
      title: 'Technical Director',
      description: 'Led technical operations for major events and festivals in the Netherlands.'
    },
    {
      year: '2016 - 2018',
      title: 'Lighting Technician',
      description: 'Started career working with various production companies and venues.'
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-cinematic-dark/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 glow-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-cinematic-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image with Dynamic Lighting */}
          <motion.div
            ref={profileRef}
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-lg">
              {/* Dynamic Lighting Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cinematic-cyan/20 via-transparent to-cinematic-amber/20 animate-pulse-glow"></div>
                  
              {/* Profile Image Placeholder */}
              <div className="relative w-full h-96 bg-gradient-to-br from-cinematic-gray to-cinematic-dark rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-cinematic-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-cinematic-cyan">JM</span>
                  </div>
                  <p className="text-cinematic-cyan text-sm">Profile Photo</p>
                </div>
              </div>

              {/* Spotlight Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-cinematic-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            ref={textRef}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-cinematic-cyan mb-4">
                Visual Storyteller
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Based in Breda, Netherlands, I specialize in creating immersive lighting experiences 
                that bring stories to life. With over 8 years of experience in live event production, 
                I combine technical expertise with artistic vision to craft unforgettable moments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-cinematic-cyan mb-4">
                Technical Excellence
              </h3>
              <p className="text-gray-300 leading-relaxed">
                From intimate venues to large-scale festivals, I program and operate lighting systems 
                that enhance every performance. My expertise spans modern LED technology, traditional 
                tungsten fixtures, and cutting-edge projection mapping.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-cinematic-cyan mb-4">
                Creative Vision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Beyond technical skills, I bring a photographer&apos;s eye and filmmaker&apos;s sensibility to 
                every project. Whether capturing the perfect moment or designing dynamic lighting 
                sequences, I create visual narratives that resonate with audiences.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          ref={timelineRef}
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12 glow-text">
            Experience Timeline
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-cinematic-cyan/30"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-cinematic-dark/50 backdrop-blur-sm p-6 rounded-lg border border-cinematic-cyan/20 hover:border-cinematic-cyan/40 transition-all duration-300">
                      <h4 className="text-xl font-bold text-cinematic-cyan mb-2">
                        {exp.title}
                      </h4>
                      <p className="text-cinematic-amber font-semibold mb-2">
                        {exp.year}
                      </p>
                      <p className="text-gray-300">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cinematic-cyan rounded-full border-4 border-cinematic-dark"></div>
                  
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