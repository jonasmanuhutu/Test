'use client';

import { motion } from 'framer-motion';
import { Instagram, Youtube, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/jonasmanuhutu', color: 'hover:text-pink-400' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@jonasmanuhutu', color: 'hover:text-red-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/jonasmanuhutu', color: 'hover:text-blue-400' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@jonasmanuhutu.com', color: 'hover:text-cinematic-cyan' },
  ];

  return (
    <footer className="bg-cinematic-dark/50 backdrop-blur-sm border-t border-cinematic-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-cinematic-cyan glow-text">
              Jonas Manuhutu
            </h3>
            <p className="text-gray-300 text-sm">
              Lighting Programmer & Visual Storyteller
            </p>
            <p className="text-gray-400 text-xs">
              Based in Breda, Netherlands
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                  aria-label={social.name}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Lighting Programming</li>
              <li>Live Event Production</li>
              <li>Photography & Videography</li>
              <li>Visual Storytelling</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-cinematic-gray/50 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Jonas Manuhutu — Crafted with Light & Vision
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;