"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Modal from "@/components/Modal";

type Project = {
  id: string;
  title: string;
  type: "Lighting Design" | "Photography" | "Video Work";
};

const ALL: Project[] = Array.from({ length: 9 }).map((_, i) => ({
  id: `p-${i + 1}`,
  title: `Project ${i + 1}`,
  type: (i % 3 === 0
    ? "Lighting Design"
    : i % 3 === 1
    ? "Photography"
    : "Video Work") as Project["type"],
}));

const FILTERS: Project["type"][] = ["Lighting Design", "Photography", "Video Work"];

export default function PortfolioGrid() {
  const [query, setQuery] = useState<Project["type"] | "All">("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const projects = useMemo(() => {
    if (query === "All") return ALL;
    return ALL.filter((p) => p.type === query);
  }, [query]);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6">
        {(["All", ...FILTERS] as const).map((f) => (
          <button
            key={f}
            onClick={() => setQuery(f)}
            className={
              "px-4 py-2 rounded-full border border-[var(--border)] glass" +
              (query === f ? " text-foreground" : " text-muted")
            }
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <motion.button
            key={p.id}
            whileHover={{ y: -4 }}
            onClick={() => setSelected(p)}
            className="relative aspect-[16/10] rounded-xl overflow-hidden glass border border-[var(--border)] text-left"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center text-sm text-muted">
              {p.title} — {p.type}
            </div>
          </motion.button>
        ))}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.title}>
        <div className="aspect-video w-full rounded-md bg-black/40 flex items-center justify-center text-muted">
          Gallery Placeholder
        </div>
      </Modal>
    </div>
  );
}
