"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ALL_BOOKS = [
  { title: "The Midnight Verdict", author: "J. Harrison", genre: "Thriller",    bg: "#0891B2", spine: "#0891B2", text: "#f8fafc", accent: "#F59E0B", result: "Amazon Top 100",      platform: "Amazon KDP" },
  { title: "Whispers of Eden",     author: "E. Chen",     genre: "Romance",     bg: "#881337", spine: "#4c0519", text: "#fff1f2", accent: "#FCA5A5", result: "10K Copies Sold",     platform: "Amazon KDP" },
  { title: "Beyond the Horizon",   author: "J. Rodriguez",genre: "Self-Help",   bg: "#1e3a5f", spine: "#0c2340", text: "#eff6ff", accent: "#93C5FD", result: "#1 Category",         platform: "IngramSpark" },
  { title: "The Last Oracle",      author: "A. Johnson",  genre: "Fantasy",     bg: "#3b0764", spine: "#1e0336", text: "#faf5ff", accent: "#C4B5FD", result: "Pre-Orders Sold Out", platform: "Amazon KDP" },
  { title: "Silicon Dreams",       author: "D. Thompson", genre: "Sci-Fi",      bg: "#0c4a6e", spine: "#062a3e", text: "#e0f2fe", accent: "#7DD3FC", result: "Audible Bestseller",  platform: "Audible" },
  { title: "Roots of Gold",        author: "M. Santos",   genre: "Memoir",      bg: "#78350f", spine: "#451a03", text: "#fffbeb", accent: "#FCD34D", result: "Press Coverage",      platform: "IngramSpark" },
  { title: "Rise & Conquer",       author: "K. Williams", genre: "Business",    bg: "#14532d", spine: "#052e16", text: "#f0fdf4", accent: "#86EFAC", result: "Wall St. Pick",       platform: "Amazon KDP" },
  { title: "The Iron Crown",       author: "T. Morgan",   genre: "Historical",  bg: "#431407", spine: "#27100a", text: "#fff7ed", accent: "#FDBA74", result: "Award Winner",        platform: "Apple Books" },
  { title: "Mind Unlocked",        author: "P. Evans",    genre: "Psychology",  bg: "#1e1b4b", spine: "#0f0e27", text: "#eef2ff", accent: "#A5B4FC", result: "5K+ Reviews",         platform: "Amazon KDP" },
  { title: "Little Wonders",       author: "S. Park",     genre: "Children's",  bg: "#064e3b", spine: "#022c22", text: "#ecfdf5", accent: "#6EE7B7", result: "School Favourite",    platform: "IngramSpark" },
  { title: "The Dark Algorithm",   author: "R. Blake",    genre: "Thriller",    bg: "#27272a", spine: "#18181b", text: "#fafafa", accent: "#F87171", result: "Kindle #1",           platform: "Amazon KDP" },
  { title: "Sacred Grounds",       author: "L. Brooks",   genre: "Spiritual",   bg: "#44403c", spine: "#292524", text: "#fefce8", accent: "#FDE68A", result: "Bestseller Week 1",   platform: "Kobo" },
];

const GENRES = ["All", "Thriller", "Romance", "Self-Help", "Fantasy", "Sci-Fi", "Memoir", "Business", "Children's"];

function MiniBookCard({ b }: { b: typeof ALL_BOOKS[0] }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
    >
      {/* Cover */}
      <div
        className="relative rounded-[3px_12px_12px_3px] overflow-hidden shadow-lg group-hover:shadow-2xl transition-all group-hover:-translate-y-2 mb-3"
        style={{ aspectRatio: "2/3" }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-3 z-10" style={{ background: b.spine }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(150deg, ${b.bg} 0%, ${b.bg}dd 100%)` }} />
        <div className="absolute inset-0 left-3 flex flex-col justify-between p-3 z-10">
          <span
            className="text-[7px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full self-start"
            style={{ background: `${b.accent}28`, color: b.accent }}
          >
            {b.genre}
          </span>
          <div>
            <div
              className="text-[7px] font-bold uppercase tracking-widest mb-1.5 px-1.5 py-0.5 rounded-full self-start inline-flex items-center gap-1"
              style={{ background: `${b.accent}20`, color: b.accent }}
            >
              <TrendingUp size={5} />
              {b.result}
            </div>
            <div className="h-px opacity-20 mb-2" style={{ background: b.text }} />
            <div
              className="font-[family-name:var(--font-playfair)] text-[10px] font-bold leading-tight mb-1"
              style={{ color: b.text }}
            >
              {b.title}
            </div>
            <div className="text-[7px] uppercase tracking-wider opacity-50" style={{ color: b.text }}>
              {b.author}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-300 z-20 flex items-center justify-center">
          <ArrowUpRight size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Meta below cover */}
      <div className="px-0.5">
        <p className="text-brand-dark font-semibold text-xs leading-tight truncate">{b.title}</p>
        <p className="text-brand-muted text-[11px]">{b.author}</p>
        <span
          className="inline-block mt-1 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-50 text-primary"
        >
          {b.result}
        </span>
      </div>
    </motion.div>
  );
}

type Props = { title?: string; subtitle?: string };

export default function BooksShowcase({
  title = "Books We've Brought to Life",
  subtitle = "A glimpse of the titles we've published — across every genre, for every kind of author.",
}: Props) {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? ALL_BOOKS : ALL_BOOKS.filter(b => b.genre === active);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Published Works</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark mb-3">
            {title}
          </h2>
          <p className="text-brand-body text-sm max-w-lg mx-auto">{subtitle}</p>
        </div>

        {/* Genre tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {GENRES.map(g => (
            <button
              key={g}
              onClick={() => setActive(g)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${
                active === g
                  ? "bg-primary text-white border-primary shadow-lg shadow-cyan-200"
                  : "border-slate-200 text-slate-500 hover:border-primary hover:text-primary bg-white"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Book grid */}
        <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map(b => (
              <MiniBookCard key={b.title} b={b} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <div className="text-center mt-10 pt-8 border-t border-slate-200">
          <p className="text-brand-muted text-sm mb-4">
            Showing <strong className="text-brand-dark">{filtered.length}</strong> of <strong className="text-brand-dark">2,500+</strong> published books
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3 rounded-full shadow-lg shadow-cyan-200 transition-all text-sm"
          >
            View Full Portfolio <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
