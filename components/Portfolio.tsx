'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiX, FiExternalLink } from 'react-icons/fi'

type FilterType = 'All' | 'Lighting Design' | 'Photography' | 'Video Work'

interface Project {
  id: number
  title: string
  category: FilterType
  image: string
  description: string
  details: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Festival Main Stage',
    category: 'Lighting Design',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070',
    description: 'Dynamic lighting design for 50,000+ attendees',
    details: 'Created an immersive lighting experience for a major music festival, featuring synchronized LED walls, moving heads, and atmospheric effects that elevated the performances.',
  },
  {
    id: 2,
    title: 'Concert Photography',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070',
    description: 'Capturing energy and emotion on stage',
    details: 'Professional concert photography capturing the raw energy of live performances, focusing on dramatic lighting, artist expressions, and crowd atmosphere.',
  },
  {
    id: 3,
    title: 'Corporate Event Video',
    category: 'Video Work',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071',
    description: 'Cinematic event coverage and highlights',
    details: 'Produced a cinematic highlight reel for a major corporate event, featuring aerial shots, interviews, and beautifully lit venue footage.',
  },
  {
    id: 4,
    title: 'Theater Production',
    category: 'Lighting Design',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=2071',
    description: 'Atmospheric lighting for dramatic storytelling',
    details: 'Designed intricate lighting cues for a theatrical production, using color, intensity, and movement to enhance the emotional narrative.',
  },
  {
    id: 5,
    title: 'Artist Portraits',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070',
    description: 'Studio sessions with creative lighting',
    details: 'Portrait photography session featuring creative studio lighting setups, gels, and backdrops to capture the artist\'s personality.',
  },
  {
    id: 6,
    title: 'Music Video Production',
    category: 'Video Work',
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=2076',
    description: 'Full production from concept to delivery',
    details: 'Complete music video production including lighting design, cinematography, and post-production for an emerging artist.',
  },
]

const filters: FilterType[] = ['All', 'Lighting Design', 'Photography', 'Video Work']

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="section-container bg-cinematic-darkGray">
      <div className="max-w-7xl mx-auto w-full" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 glow-text">Portfolio</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cinematic-cyan to-cinematic-amber mx-auto mb-6" />
          <p className="text-xl text-cinematic-white/70 max-w-2xl mx-auto">
            A showcase of my latest work in lighting design, photography, and videography
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-cinematic-cyan to-blue-500 text-white shadow-lg shadow-cinematic-cyan/50'
                  : 'glass-effect text-cinematic-white/70 hover:text-white hover:bg-cinematic-gray'
              }`}
            >
              {filter}
            </button>
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
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-xl glass-effect cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-72 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-cinematic-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Hover Light Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cinematic-cyan/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-sm text-cinematic-cyan font-semibold mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-cinematic-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-cinematic-white/70 mb-4">{project.description}</p>
                  <div className="flex items-center text-cinematic-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="mr-2">View Details</span>
                    <FiExternalLink />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full glass-effect rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 glass-effect rounded-full hover:bg-cinematic-cyan/20 transition-colors"
                >
                  <FiX size={24} />
                </button>

                <div className="relative h-96">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${selectedProject.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-transparent to-transparent" />
                </div>

                <div className="p-8">
                  <span className="text-cinematic-cyan font-semibold mb-2 block">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-4xl font-bold mb-4 glow-text">
                    {selectedProject.title}
                  </h3>
                  <p className="text-lg text-cinematic-white/80 leading-relaxed">
                    {selectedProject.details}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
