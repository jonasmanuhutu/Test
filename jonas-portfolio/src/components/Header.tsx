"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-40 transition-colors" +
        (scrolled ? " glass border-b border-[var(--border)]/60" : "")
      }
    >
      <div className="container mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
        <Link href="#" className="text-lg font-semibold glow-text tracking-tight">JM</Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#portfolio" className="hover:text-foreground">Portfolio</a>
          <a href="#gear" className="hover:text-foreground">Gear</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
          <a
            href="#portfolio"
            className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-full glass light-sweep border border-[var(--border)]"
          >
            View My Work
          </a>
        </nav>
      </div>
    </header>
  );
}
