"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "@/components/ui/Animate";

const books = [
  { title: "The Midnight Verdict", author: "J. Harrison", genre: "Thriller",    bg: "#0891B2", spine: "#0891B2", text: "#f8fafc", accent: "#F59E0B", result: "Amazon Top 100" },
  { title: "Whispers of Eden",     author: "E. Chen",     genre: "Romance",     bg: "#881337", spine: "#4c0519", text: "#fff1f2", accent: "#FCA5A5", result: "10K Copies Sold" },
  { title: "Beyond the Horizon",   author: "J. Rodriguez",genre: "Self-Help",   bg: "#1e3a5f", spine: "#0c2340", text: "#eff6ff", accent: "#93C5FD", result: "#1 Category" },
  { title: "The Last Oracle",      author: "A. Johnson",  genre: "Fantasy",     bg: "#3b0764", spine: "#1e0336", text: "#faf5ff", accent: "#C4B5FD", result: "Pre-Orders Sold Out" },
  { title: "Silicon Dreams",       author: "D. Thompson", genre: "Sci-Fi",      bg: "#0c4a6e", spine: "#062a3e", text: "#e0f2fe", accent: "#7DD3FC", result: "Audible Bestseller" },
  { title: "Roots of Gold",        author: "M. Santos",   genre: "Memoir",      bg: "#78350f", spine: "#451a03", text: "#fffbeb", accent: "#FCD34D", result: "Press Coverage" },
  { title: "Rise & Conquer",       author: "K. Williams", genre: "Business",    bg: "#14532d", spine: "#052e16", text: "#f0fdf4", accent: "#86EFAC", result: "Wall St. Pick" },
  { title: "The Iron Crown",       author: "T. Morgan",   genre: "Historical",  bg: "#431407", spine: "#27100a", text: "#fff7ed", accent: "#FDBA74", result: "Award Winner" },
  { title: "Mind Unlocked",        author: "P. Evans",    genre: "Psychology",  bg: "#1e1b4b", spine: "#0f0e27", text: "#eef2ff", accent: "#A5B4FC", result: "5K+ Reviews" },
  { title: "Little Wonders",       author: "S. Park",     genre: "Children's",  bg: "#064e3b", spine: "#022c22", text: "#ecfdf5", accent: "#6EE7B7", result: "School Favourite" },
  { title: "The Dark Algorithm",   author: "R. Blake",    genre: "Thriller",    bg: "#27272a", spine: "#18181b", text: "#fafafa", accent: "#F87171", result: "Kindle #1" },
  { title: "Sacred Grounds",       author: "L. Brooks",   genre: "Spiritual",   bg: "#44403c", spine: "#292524", text: "#fefce8", accent: "#FDE68A", result: "Bestseller Week 1" },
];

const genres = ["All", "Thriller", "Romance", "Self-Help", "Fantasy", "Sci-Fi", "Memoir", "Business", "Children's", "Historical", "Psychology", "Spiritual"];

function BookCard({ b }: { b: typeof books[0] }) {
  return (
    <div
      className="relative group rounded-[3px_10px_10px_3px] overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
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
            className="text-[7px] font-bold uppercase tracking-widest mb-1.5 px-1.5 py-0.5 rounded-full self-start inline-block"
            style={{ background: `${b.accent}15`, color: b.accent }}
          >
            {b.result}
          </div>
          <div className="h-px opacity-20 mb-2" style={{ background: b.text }} />
          <div className="font-[family-name:var(--font-playfair)] text-[10px] font-bold leading-tight mb-1" style={{ color: b.text }}>
            {b.title}
          </div>
          <div className="text-[7px] uppercase tracking-wider opacity-50" style={{ color: b.text }}>{b.author}</div>
        </div>
      </div>
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/75 transition-all duration-300 z-20 flex items-center justify-center">
        <ArrowUpRight size={22} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
}

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? books : books.filter(b => b.genre === active);

  return (
    <>
      {/* ── GENRE FILTER ── */}
      <section className="sticky top-[68px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {genres.map(g => (
              <button
                key={g}
                onClick={() => setActive(g)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-colors ${
                  active === g
                    ? "bg-primary text-white border-primary"
                    : "border-slate-200 text-slate-500 hover:border-primary hover:text-primary"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOK GRID ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {filtered.map((b, i) => (
                <FadeUp key={b.title} delay={i * 0.05}>
                  <BookCard b={b} />
                </FadeUp>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-brand-muted text-sm">No books found in this genre yet.</p>
            </div>
          )}

          <p className="text-center text-sm text-brand-muted mt-8">
            {active === "All"
              ? <>Showing {books.length} of <strong className="text-brand-dark">2,500+</strong> published books.</>
              : <>Showing {filtered.length} <strong className="text-brand-dark">{active}</strong> book{filtered.length !== 1 ? "s" : ""}.</>
            }{" "}
            <Link href="/contact" className="text-primary font-semibold hover:underline">
              Contact us to see more in your genre →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
