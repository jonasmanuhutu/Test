"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function SpotlightProfile() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el!.style.setProperty("--mx", `${x}px`);
      el!.style.setProperty("--my", `${y}px`);
    }
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full max-w-xl aspect-[4/3] rounded-xl overflow-hidden glass"
      style={{
        background:
          "radial-gradient(360px 260px at var(--mx,50%) var(--my,50%), rgba(0,224,255,0.15), transparent 60%), rgba(0,0,0,0.2)",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 flex items-center justify-center text-muted"
      >
        Profile Photo
      </motion.div>
    </div>
  );
}
