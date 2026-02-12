'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@jonasmanuhutu.com',
      href: 'mailto:hello@jonasmanuhutu.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+31 6 1234 5678',
      href: 'tel:+31612345678'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Breda, Netherlands',
      href: '#'
    }
  ];

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your vision to life? Let&apos;s discuss your next project
          </p>
          <div className="w-24 h-1 bg-cinematic-cyan mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-cinematic-cyan mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you&apos;re planning a live event, need professional photography, 
                or want to create compelling video content, I&apos;m here to help bring 
                your creative vision to life with technical excellence and artistic flair.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center p-4 bg-cinematic-dark/50 rounded-lg border border-cinematic-cyan/20 hover:border-cinematic-cyan/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-cinematic-cyan/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-cinematic-cyan/30 transition-colors duration-300">
                    <info.icon size={24} className="text-cinematic-cyan" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-cinematic-cyan transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <h4 className="text-lg font-semibold text-cinematic-cyan mb-4">
                Based in Breda
              </h4>
              <div className="h-48 bg-gradient-to-br from-cinematic-gray to-cinematic-dark rounded-lg flex items-center justify-center border border-cinematic-cyan/20">
                <div className="text-center">
                  <MapPin size={32} className="text-cinematic-cyan mx-auto mb-2" />
                  <p className="text-cinematic-cyan text-sm">Interactive Map</p>
                  <p className="text-gray-400 text-xs">Breda, Netherlands</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-cinematic-dark/50 backdrop-blur-sm p-8 rounded-lg border border-cinematic-cyan/20"
          >
            <h3 className="text-2xl font-bold text-cinematic-cyan mb-6">
              Send a Message
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle size={64} className="text-cinematic-cyan mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-300">
                  Thank you for your message. I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-cinematic-black border border-cinematic-cyan/20 rounded-lg text-white placeholder-gray-400 focus:border-cinematic-cyan focus:outline-none focus:ring-2 focus:ring-cinematic-cyan/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-cinematic-black border border-cinematic-cyan/20 rounded-lg text-white placeholder-gray-400 focus:border-cinematic-cyan focus:outline-none focus:ring-2 focus:ring-cinematic-cyan/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-cinematic-black border border-cinematic-cyan/20 rounded-lg text-white placeholder-gray-400 focus:border-cinematic-cyan focus:outline-none focus:ring-2 focus:ring-cinematic-cyan/20 transition-all duration-300"
                    placeholder="Project type or inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-cinematic-black border border-cinematic-cyan/20 rounded-lg text-white placeholder-gray-400 focus:border-cinematic-cyan focus:outline-none focus:ring-2 focus:ring-cinematic-cyan/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-cinematic-cyan text-cinematic-black font-semibold py-4 px-6 rounded-lg hover:bg-cinematic-cyan/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-cinematic-black border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;