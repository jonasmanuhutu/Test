"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/HeroScene"), { ssr: false });
const SpotlightProfile = dynamic(() => import("@/components/SpotlightProfile"), { ssr: false });
const Timeline = dynamic(() => import("@/components/Timeline"), { ssr: false });
const PortfolioGrid = dynamic(() => import("@/components/PortfolioGrid"), { ssr: false });
const BredaMap = dynamic(() => import("@/components/BredaMap"), { ssr: false });
const GearScene = dynamic(() => import("@/components/GearScene"), { ssr: false });

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <HeroScene />
        </div>
        <div className="container mx-auto px-6 md:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-semibold glow-text tracking-tight"
          >
            Jonas Manuhutu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-2xl text-muted/90 mt-3"
          >
            Lighting Programmer & Visual Storyteller
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8">
            <Link href="#portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass light-sweep text-foreground/90 hover:text-foreground border border-[var(--border)]">
              View My Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container mx-auto px-6 md:px-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-2xl md:text-3xl font-medium mb-4">
            About
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <SpotlightProfile />
            <div>
              <p className="max-w-prose text-foreground/80">
                I’m Jonas, a freelance lighting programmer/operator and video-/photographer based in Breda, Netherlands. I craft immersive visual experiences for live shows, events, and brand campaigns — blending precise control with cinematic storytelling.
              </p>
              <div className="mt-6">
                <Timeline />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="section">
        <div className="container mx-auto px-6 md:px-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-2xl md:text-3xl font-medium mb-6">
            Portfolio
          </motion.h2>
          <PortfolioGrid />
        </div>
      </section>

      {/* Gear */}
      <section id="gear" className="section">
        <div className="container mx-auto px-6 md:px-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-2xl md:text-3xl font-medium mb-6">
            Behind the Scenes / Gear
          </motion.h2>
          <p className="max-w-3xl text-foreground/80">
            A peek into the tools of the trade — lighting consoles, camera rigs, and workflows that shape the show.
          </p>
          <div className="mt-6">
            <GearScene />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container mx-auto px-6 md:px-10">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-2xl md:text-3xl font-medium mb-6">
            Contact
          </motion.h2>
          <form className="grid grid-cols-1 gap-4 max-w-xl">
            <input className="glass rounded-md px-4 py-3 bg-surface/40 outline-none focus:ring-2 ring-[var(--accent)]" placeholder="Your name" />
            <input className="glass rounded-md px-4 py-3 bg-surface/40 outline-none focus:ring-2 ring-[var(--accent)]" placeholder="Your email" />
            <textarea className="glass rounded-md px-4 py-3 bg-surface/40 outline-none focus:ring-2 ring-[var(--accent)]" placeholder="Tell me about your project" rows={5} />
            <button className="justify-self-start px-6 py-3 rounded-full glass light-sweep border border-[var(--border)]">
              Send
            </button>
          </form>
          <div className="mt-6 flex gap-6 text-sm text-muted">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="light-sweep">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="light-sweep">YouTube</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="light-sweep">LinkedIn</a>
          </div>
          <div className="mt-8">
            <BredaMap />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-[var(--border)]/60 bg-surface/20">
        <div className="container mx-auto px-6 md:px-10 flex items-center justify-between text-sm text-muted">
          <span>© 2025 Jonas Manuhutu — Crafted with Light & Vision.</span>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#portfolio" className="hover:text-foreground">Portfolio</a>
            <a href="#gear" className="hover:text-foreground">Gear</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
