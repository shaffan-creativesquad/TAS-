"use client";

import { motion } from "framer-motion";

const COVERS = [
  { title: "The Midnight Verdict", author: "J. Harrison", genre: "Thriller",    bg: "#0891B2", spine: "#0891B2", text: "#f8fafc", accent: "#F59E0B" },
  { title: "Whispers of Eden",     author: "E. Chen",     genre: "Romance",     bg: "#881337", spine: "#4c0519", text: "#fff1f2", accent: "#FCA5A5" },
  { title: "The Last Oracle",      author: "A. Johnson",  genre: "Fantasy",     bg: "#3b0764", spine: "#1e0336", text: "#faf5ff", accent: "#C4B5FD" },
  { title: "Silicon Dreams",       author: "D. Thompson", genre: "Sci-Fi",      bg: "#0c4a6e", spine: "#062a3e", text: "#e0f2fe", accent: "#7DD3FC" },
  { title: "Rise & Conquer",       author: "K. Williams", genre: "Business",    bg: "#14532d", spine: "#052e16", text: "#f0fdf4", accent: "#86EFAC" },
  { title: "Mind Unlocked",        author: "P. Evans",    genre: "Psychology",  bg: "#1e1b4b", spine: "#0f0e27", text: "#eef2ff", accent: "#A5B4FC" },
  { title: "The Iron Crown",       author: "T. Morgan",   genre: "Historical",  bg: "#431407", spine: "#27100a", text: "#fff7ed", accent: "#FDBA74" },
  { title: "Little Wonders",       author: "S. Park",     genre: "Children's",  bg: "#064e3b", spine: "#022c22", text: "#ecfdf5", accent: "#6EE7B7" },
];

const ROTATIONS = [-5, -2, 1, -3, 4, -1, 3, -4];

type Props = { count?: number; width?: number };

export default function BookCoversStrip({ count = 6, width = 70 }: Props) {
  return (
    <div className="flex items-end justify-center gap-2 sm:gap-3">
      {COVERS.slice(0, count).map((b, i) => (
        <motion.div
          key={b.title}
          className="relative rounded-[3px_10px_10px_3px] overflow-hidden shadow-xl flex-shrink-0"
          style={{ width, aspectRatio: "2/3", rotate: `${ROTATIONS[i]}deg` }}
          whileHover={{ scale: 1.12, rotate: 0, zIndex: 20, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-2.5 z-10" style={{ background: b.spine }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(150deg, ${b.bg} 0%, ${b.bg}ee 100%)` }} />
          <div className="absolute inset-0 left-2.5 flex flex-col justify-between p-2 z-10">
            <span
              className="text-[6px] font-bold uppercase tracking-wider px-1 py-0.5 rounded-full self-start"
              style={{ background: `${b.accent}28`, color: b.accent }}
            >
              {b.genre}
            </span>
            <div>
              <div className="h-px opacity-20 mb-1.5" style={{ background: b.text }} />
              <div
                className="font-[family-name:var(--font-playfair)] text-[8px] font-bold leading-tight mb-0.5"
                style={{ color: b.text }}
              >
                {b.title}
              </div>
              <div className="text-[6px] uppercase tracking-wider opacity-40" style={{ color: b.text }}>
                {b.author}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
