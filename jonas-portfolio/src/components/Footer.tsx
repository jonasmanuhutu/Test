'use client';

import { motion } from 'framer-motion';
import { Camera, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cinematic-black border-t border-cinematic-cyan/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cinematic-cyan to-cinematic-amber rounded-full flex items-center justify-center">
              <Camera className="w-5 h-5 text-cinematic-black" />
            </div>
            <span className="text-xl font-display font-bold text-white">
              Jonas Manuhutu
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-lg mb-8 flex items-center justify-center space-x-2"
          >
            <span>Crafted with</span>
            <Heart className="w-5 h-5 text-cinematic-amber animate-pulse" />
            <span>Light & Vision</span>
          </motion.p>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-sm"
          >
            © {currentYear} Jonas Manuhutu. All rights reserved.
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-gray-600 text-xs"
          >
            Based in Breda, Netherlands • Available for projects worldwide
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
