"use client";

import { motion } from "framer-motion";

type Item = { year: string; title: string; detail: string };

const items: Item[] = [
  { year: "2016", title: "Started in Live Events", detail: "First steps in lighting and media." },
  { year: "2019", title: "Freelance Lighting Programmer", detail: "Touring and festivals across NL/EU." },
  { year: "2022", title: "Video/Photography", detail: "Visual storytelling for artists & brands." },
  { year: "2024", title: "Cinematic Focus", detail: "Integrating filmic aesthetics into live design." },
];

export default function Timeline() {
  return (
    <div className="grid gap-6">
      {items.map((it, idx) => (
        <motion.div
          key={it.year}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: idx * 0.05 }}
          className="grid grid-cols-[80px_1fr] gap-4 items-baseline"
        >
          <div className="text-muted text-sm">{it.year}</div>
          <div className="glass rounded-md p-4 border border-[var(--border)]">
            <div className="font-medium">{it.title}</div>
            <div className="text-muted text-sm mt-1">{it.detail}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
