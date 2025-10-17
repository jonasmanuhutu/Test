'use client'

import { motion } from 'framer-motion'
import { FiHeart, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi'

const socialLinks = [
  { icon: FiInstagram, href: 'https://instagram.com/jonasmanuhutu', name: 'Instagram' },
  { icon: FiYoutube, href: 'https://youtube.com/@jonasmanuhutu', name: 'YouTube' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/jonasmanuhutu', name: 'LinkedIn' },
]

const quickLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Gear', href: '#gear' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-t from-cinematic-black via-cinematic-darkGray to-cinematic-darkGray border-t border-cinematic-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold glow-text mb-4">JM</h3>
            <p className="text-cinematic-white/70 mb-4 leading-relaxed">
              Illuminating stories and capturing moments through the art of light and lens.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass-effect rounded-lg hover:bg-cinematic-cyan/20 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-cinematic-white group-hover:text-cinematic-cyan transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4 text-cinematic-cyan">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-cinematic-white/70 hover:text-cinematic-cyan transition-colors duration-300 inline-block hover:translate-x-2 transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-4 text-cinematic-cyan">Get In Touch</h4>
            <ul className="space-y-2 text-cinematic-white/70">
              <li>
                <a 
                  href="mailto:jonas@manuhutu.com"
                  className="hover:text-cinematic-cyan transition-colors duration-300"
                >
                  jonas@manuhutu.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+31612345678"
                  className="hover:text-cinematic-cyan transition-colors duration-300"
                >
                  +31 6 1234 5678
                </a>
              </li>
              <li>Breda, Netherlands</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cinematic-cyan/50 to-transparent mb-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between text-center md:text-left"
        >
          <p className="text-cinematic-white/60 mb-4 md:mb-0">
            © {currentYear} Jonas Manuhutu — Crafted with{' '}
            <FiHeart className="inline text-cinematic-cyan animate-pulse" /> Light & Vision
          </p>
          <div className="flex items-center space-x-4 text-cinematic-white/60 text-sm">
            <a href="#" className="hover:text-cinematic-cyan transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-cinematic-cyan transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>

        {/* Ambient light effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cinematic-cyan/30 to-transparent blur-sm" />
      </div>
    </footer>
  )
}
