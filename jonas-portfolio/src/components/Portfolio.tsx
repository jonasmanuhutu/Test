'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Play, Camera, Lightbulb, ExternalLink, Filter } from 'lucide-react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Festival Lighting Design',
      category: 'lighting',
      type: 'video',
      thumbnail: '/api/placeholder/600/400',
      description: 'Large-scale festival lighting design with dynamic color programming',
      year: '2024',
      client: 'Summer Festival Breda'
    },
    {
      id: 2,
      title: 'Corporate Event Photography',
      category: 'photography',
      type: 'image',
      thumbnail: '/api/placeholder/600/400',
      description: 'Professional event photography for corporate conference',
      year: '2024',
      client: 'TechCorp Netherlands'
    },
    {
      id: 3,
      title: 'Music Video Production',
      category: 'video',
      type: 'video',
      thumbnail: '/api/placeholder/600/400',
      description: 'Cinematic music video with custom lighting setup',
      year: '2023',
      client: 'Local Artist'
    },
    {
      id: 4,
      title: 'Wedding Photography',
      category: 'photography',
      type: 'image',
      thumbnail: '/api/placeholder/600/400',
      description: 'Intimate wedding photography with natural lighting',
      year: '2023',
      client: 'Private Client'
    },
    {
      id: 5,
      title: 'Theater Lighting',
      category: 'lighting',
      type: 'video',
      thumbnail: '/api/placeholder/600/400',
      description: 'Dramatic theater lighting for live performance',
      year: '2023',
      client: 'Breda Theater'
    },
    {
      id: 6,
      title: 'Product Photography',
      category: 'photography',
      type: 'image',
      thumbnail: '/api/placeholder/600/400',
      description: 'Commercial product photography with studio lighting',
      year: '2022',
      client: 'Local Business'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Work', icon: Filter },
    { id: 'lighting', label: 'Lighting Design', icon: Lightbulb },
    { id: 'photography', label: 'Photography', icon: Camera },
    { id: 'video', label: 'Video Work', icon: Play }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-cinematic-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-cinematic-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cinematic-amber/5 rounded-full blur-3xl"></div>
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
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cinematic-cyan to-cinematic-amber mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A collection of my recent work in lighting design, photography, and video production
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-cinematic-cyan text-cinematic-black font-semibold'
                  : 'bg-cinematic-gray/30 text-gray-300 hover:bg-cinematic-gray/50'
              }`}
            >
              <filter.icon className="w-4 h-4" />
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative bg-cinematic-gray rounded-xl overflow-hidden border border-cinematic-cyan/20 hover:border-cinematic-cyan/40 transition-all duration-300">
                {/* Project Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-cinematic-cyan/20 to-cinematic-amber/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cinematic-cyan to-cinematic-amber rounded-full flex items-center justify-center mx-auto mb-4">
                      {project.type === 'video' ? (
                        <Play className="w-8 h-8 text-cinematic-black" />
                      ) : (
                        <Camera className="w-8 h-8 text-cinematic-black" />
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{project.title}</p>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-cinematic-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-cinematic-cyan rounded-full flex items-center justify-center mx-auto mb-2">
                        <ExternalLink className="w-6 h-6 text-cinematic-black" />
                      </div>
                      <p className="text-white font-semibold">View Project</p>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                    <span className="text-cinematic-cyan text-sm font-medium">{project.year}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{project.client}</span>
                    <div className="flex items-center space-x-1">
                      {project.type === 'video' ? (
                        <Play className="w-4 h-4 text-cinematic-cyan" />
                      ) : (
                        <Camera className="w-4 h-4 text-cinematic-amber" />
                      )}
                      <span className="text-xs text-gray-400 capitalize">{project.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cinematic-black/95 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-cinematic-gray rounded-2xl overflow-hidden border border-cinematic-cyan/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-cinematic-black/50 rounded-full flex items-center justify-center hover:bg-cinematic-black/70 transition-colors duration-300"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Modal Content */}
              <div className="aspect-video bg-gradient-to-br from-cinematic-cyan/20 to-cinematic-amber/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cinematic-cyan to-cinematic-amber rounded-full flex items-center justify-center mx-auto mb-4">
                    {selectedProject.type === 'video' ? (
                      <Play className="w-12 h-12 text-cinematic-black" />
                    ) : (
                      <Camera className="w-12 h-12 text-cinematic-black" />
                    )}
                  </div>
                  <p className="text-gray-400">Project Media</p>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-display font-bold text-white">{selectedProject.title}</h3>
                  <span className="text-cinematic-cyan font-semibold">{selectedProject.year}</span>
                </div>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Client: {selectedProject.client}</span>
                  <div className="flex items-center space-x-2">
                    {selectedProject.type === 'video' ? (
                      <Play className="w-5 h-5 text-cinematic-cyan" />
                    ) : (
                      <Camera className="w-5 h-5 text-cinematic-amber" />
                    )}
                    <span className="text-cinematic-cyan capitalize">{selectedProject.category}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
