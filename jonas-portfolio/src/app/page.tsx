'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Gear from '@/components/Gear';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    ScrollTrigger.refresh();
    
    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useGSAP(() => {
    // Page load animation
    gsap.fromTo('body', 
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="min-h-screen bg-cinematic-black text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Gear />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
