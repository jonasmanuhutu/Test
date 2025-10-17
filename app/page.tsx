'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Gear from '@/components/Gear'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import Loader from '@/components/Loader'

export default function Home() {
  useEffect(() => {
    // Smooth scroll polyfill
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <main className="relative overflow-x-hidden film-grain">
      <Loader />
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Gear />
      <Contact />
      <Footer />
    </main>
  )
}
