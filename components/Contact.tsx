'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiLinkedin, FiYoutube, FiSend } from 'react-icons/fi'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'jonas@manuhutu.com',
    href: 'mailto:jonas@manuhutu.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+31 6 1234 5678',
    href: 'tel:+31612345678',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Breda, Netherlands',
    href: '#',
  },
]

const socialLinks = [
  {
    icon: FiInstagram,
    name: 'Instagram',
    href: 'https://instagram.com/jonasmanuhutu',
    color: '#E4405F',
  },
  {
    icon: FiYoutube,
    name: 'YouTube',
    href: 'https://youtube.com/@jonasmanuhutu',
    color: '#FF0000',
  },
  {
    icon: FiLinkedin,
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/jonasmanuhutu',
    color: '#0A66C2',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setSubmitStatus('idle'), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="section-container bg-cinematic-black">
      <div className="max-w-7xl mx-auto w-full" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 glow-text">Get In Touch</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cinematic-cyan to-cinematic-amber mx-auto mb-6" />
          <p className="text-xl text-cinematic-white/70 max-w-2xl mx-auto">
            Let&apos;s create something extraordinary together. Reach out for collaborations, bookings, or just to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-cinematic-cyan">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-cinematic-cyan bg-cinematic-darkGray/50 text-white placeholder-cinematic-white/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-cinematic-cyan">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-cinematic-cyan bg-cinematic-darkGray/50 text-white placeholder-cinematic-white/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-cinematic-cyan">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-cinematic-cyan bg-cinematic-darkGray/50 text-white placeholder-cinematic-white/50 transition-all"
                  placeholder="Project inquiry, booking, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-cinematic-cyan">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-cinematic-cyan bg-cinematic-darkGray/50 text-white placeholder-cinematic-white/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
                >
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6 text-cinematic-cyan">
                Contact Information
              </h3>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 glass-effect p-4 rounded-lg hover:bg-cinematic-gray/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-br from-cinematic-cyan/20 to-cinematic-amber/20 rounded-lg group-hover:from-cinematic-cyan/40 group-hover:to-cinematic-amber/40 transition-all">
                    <info.icon className="w-6 h-6 text-cinematic-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-cinematic-white/70">{info.label}</p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cinematic-cyan">
                Follow My Work
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="p-4 glass-effect rounded-lg hover:bg-cinematic-gray/50 transition-all duration-300 group"
                    style={{
                      boxShadow: `0 0 0 0 ${social.color}40`,
                    }}
                  >
                    <social.icon className="w-8 h-8 text-cinematic-white group-hover:text-cinematic-cyan transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="glass-effect rounded-xl overflow-hidden h-64 spotlight-effect"
            >
              <div className="relative w-full h-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074')`,
                    filter: 'brightness(0.4) contrast(1.2)',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <FiMapPin className="w-12 h-12 mx-auto mb-2 text-cinematic-cyan" />
                    <p className="text-xl font-bold glow-text">Breda, Netherlands</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
