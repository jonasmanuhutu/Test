'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ExternalLink, Filter } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  id: number;
  title: string;
  category: 'lighting' | 'photography' | 'video';
  description: string;
  image: string;
  video?: string;
  year: string;
  client?: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Electric Dreams Festival',
    category: 'lighting',
    description: 'Full lighting design and programming for a 3-day electronic music festival featuring 50+ artists and 20,000 attendees.',
    image: '/api/placeholder/600/400',
    year: '2024',
    client: 'Electric Dreams Events',
    technologies: ['GrandMA3', 'Avolites', 'LED Strips', 'Moving Heads']
  },
  {
    id: 2,
    title: 'Corporate Conference Lighting',
    category: 'lighting',
    description: 'Professional lighting setup for a major tech conference with dynamic stage lighting and audience illumination.',
    image: '/api/placeholder/600/400',
    year: '2024',
    client: 'TechCorp International',
    technologies: ['Chroma-Q', 'ETC ColorSource', 'DMX Control']
  },
  {
    id: 3,
    title: 'Concert Photography Series',
    category: 'photography',
    description: 'Behind-the-scenes photography capturing the energy and artistry of live performances.',
    image: '/api/placeholder/600/400',
    year: '2024',
    client: 'Various Artists',
    technologies: ['Canon EOS R5', 'Low Light Photography', 'Post Processing']
  },
  {
    id: 4,
    title: 'Music Video Production',
    category: 'video',
    description: 'Complete video production including lighting design, cinematography, and post-production for indie band music video.',
    image: '/api/placeholder/600/400',
    video: '/api/placeholder/video',
    year: '2024',
    client: 'Midnight Echo',
    technologies: ['Sony FX6', 'DaVinci Resolve', 'Color Grading']
  },
  {
    id: 5,
    title: 'Theater Production Lighting',
    category: 'lighting',
    description: 'Atmospheric lighting design for a contemporary theater production with dynamic mood changes.',
    image: '/api/placeholder/600/400',
    year: '2023',
    client: 'Breda Theater',
    technologies: ['ETC Eos', 'Theatrical Fixtures', 'Cue Programming']
  },
  {
    id: 6,
    title: 'Wedding Cinematography',
    category: 'video',
    description: 'Elegant wedding video capturing intimate moments with cinematic lighting and smooth camera work.',
    image: '/api/placeholder/600/400',
    year: '2023',
    client: 'Private Client',
    technologies: ['Gimbal Stabilization', 'Natural Lighting', 'Color Grading']
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', name: 'All Work', count: projects.length },
    { id: 'lighting', name: 'Lighting Design', count: projects.filter(p => p.category === 'lighting').length },
    { id: 'photography', name: 'Photography', count: projects.filter(p => p.category === 'photography').length },
    { id: 'video', name: 'Video Work', count: projects.filter(p => p.category === 'video').length },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
      id="portfolio"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-cinematic-black"
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
            Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of my work in lighting design, photography, and video production
          </p>
          <div className="w-24 h-1 bg-cinematic-cyan mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-cinematic-cyan text-cinematic-black'
                  : 'bg-cinematic-dark text-white hover:bg-cinematic-gray border border-cinematic-cyan/20'
              }`}
            >
              <Filter size={16} />
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="relative overflow-hidden rounded-lg bg-cinematic-dark border border-cinematic-cyan/20 hover:border-cinematic-cyan/40 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-to-br from-cinematic-gray to-cinematic-dark flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-cinematic-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-cinematic-cyan">
                          {project.category === 'lighting' ? '💡' : project.category === 'photography' ? '📸' : '🎥'}
                        </span>
                      </div>
                      <p className="text-cinematic-cyan text-sm">{project.title}</p>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-cinematic-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-cinematic-cyan rounded-full flex items-center justify-center"
                      >
                        {project.video ? <Play size={24} className="text-cinematic-black" /> : <ExternalLink size={24} className="text-cinematic-black" />}
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-cinematic-amber text-sm font-semibold">
                        {project.year}
                      </span>
                      <span className="text-cinematic-cyan text-xs uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cinematic-cyan transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    {project.client && (
                      <p className="text-cinematic-cyan text-xs mt-2">
                        Client: {project.client}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-cinematic-dark rounded-lg border border-cinematic-cyan/20"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 w-8 h-8 bg-cinematic-cyan/20 hover:bg-cinematic-cyan/40 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <X size={20} className="text-white" />
                </button>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Project Media */}
                    <div className="space-y-4">
                      <div className="relative h-64 bg-gradient-to-br from-cinematic-gray to-cinematic-dark rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-cinematic-cyan/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-3xl">
                              {selectedProject.category === 'lighting' ? '💡' : selectedProject.category === 'photography' ? '📸' : '🎥'}
                            </span>
                          </div>
                          <p className="text-cinematic-cyan">{selectedProject.title}</p>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {selectedProject.title}
                        </h3>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-cinematic-amber font-semibold">
                            {selectedProject.year}
                          </span>
                          <span className="text-cinematic-cyan text-sm uppercase tracking-wide">
                            {selectedProject.category}
                          </span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>

                      {selectedProject.client && (
                        <div>
                          <h4 className="text-lg font-semibold text-cinematic-cyan mb-2">
                            Client
                          </h4>
                          <p className="text-white">{selectedProject.client}</p>
                        </div>
                      )}

                      <div>
                        <h4 className="text-lg font-semibold text-cinematic-cyan mb-2">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-cinematic-cyan/20 text-cinematic-cyan rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;