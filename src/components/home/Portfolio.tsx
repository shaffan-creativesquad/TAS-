import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const books = [
  { title: "The Midnight Verdict", author: "J. Harrison", genre: "Thriller",   bg: "#0891B2", spine: "#0891B2", text: "#f8fafc", accent: "#F59E0B",   outcome: "Amazon Top 100" },
  { title: "Whispers of Eden",     author: "E. Chen",     genre: "Romance",    bg: "#881337", spine: "#4c0519", text: "#fff1f2", accent: "#FCA5A5",   outcome: "10K Copies Sold" },
  { title: "Beyond the Horizon",   author: "J. Rodriguez",genre: "Self-Help",  bg: "#1e3a5f", spine: "#0c2340", text: "#eff6ff", accent: "#93C5FD",   outcome: "#1 Category" },
  { title: "The Last Oracle",      author: "A. Johnson",  genre: "Fantasy",    bg: "#3b0764", spine: "#1e0336", text: "#faf5ff", accent: "#C4B5FD",   outcome: "Pre-Orders Sold Out" },
  { title: "Silicon Dreams",       author: "D. Thompson", genre: "Sci-Fi",     bg: "#0c4a6e", spine: "#062a3e", text: "#e0f2fe", accent: "#7DD3FC",   outcome: "Audible Bestseller" },
  { title: "Roots of Gold",        author: "M. Santos",   genre: "Memoir",     bg: "#78350f", spine: "#451a03", text: "#fffbeb", accent: "#FCD34D",   outcome: "Press Coverage" },
  { title: "Rise & Conquer",       author: "K. Williams", genre: "Business",   bg: "#14532d", spine: "#052e16", text: "#f0fdf4", accent: "#86EFAC",   outcome: "Wall St. Pick" },
  { title: "The Iron Crown",       author: "T. Morgan",   genre: "Historical", bg: "#431407", spine: "#27100a", text: "#fff7ed", accent: "#FDBA74",   outcome: "Award Winner" },
  { title: "Mind Unlocked",        author: "P. Evans",    genre: "Psychology", bg: "#1e1b4b", spine: "#0f0e27", text: "#eef2ff", accent: "#A5B4FC",   outcome: "5K+ Reviews" },
  { title: "Little Wonders",       author: "S. Park",     genre: "Children's", bg: "#064e3b", spine: "#022c22", text: "#ecfdf5", accent: "#6EE7B7",   outcome: "School Favourite" },
];

function BookCover({ b }: { b: typeof books[0] }) {
  return (
    <div
      className="relative group rounded-[3px_8px_8px_3px] overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
      style={{ aspectRatio: "2/3", minHeight: 140 }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-3 z-10" style={{ background: b.spine }} />
      <div className="absolute inset-0" style={{ background: `linear-gradient(150deg, ${b.bg} 0%, ${b.bg}e0 100%)` }} />
      <div className="absolute inset-0 left-3 flex flex-col justify-between p-2.5 z-10">
        <span
          className="text-[7px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full self-start"
          style={{ background: `${b.accent}25`, color: b.accent }}
        >
          {b.genre}
        </span>
        <div>
          {/* Outcome badge */}
          <div
            className="text-[6px] font-bold uppercase tracking-widest mb-1.5 px-1.5 py-0.5 rounded-full self-start inline-flex items-center gap-0.5"
            style={{ background: `${b.accent}20`, color: b.accent }}
          >
            {b.outcome}
          </div>
          <div className="h-px opacity-20 mb-1.5" style={{ background: b.text }} />
          <div className="font-[family-name:var(--font-playfair)] text-[10px] font-bold leading-tight mb-1" style={{ color: b.text }}>
            {b.title}
          </div>
          <div className="text-[7px] uppercase tracking-wider opacity-50" style={{ color: b.text }}>{b.author}</div>
        </div>
      </div>
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-300 z-20 flex items-center justify-center">
        <ArrowUpRight size={22} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
              Published Works
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-black text-brand-dark">
              <span className="text-black">2,500+ Books</span><br /><span className="text-black">Real </span><span className="text-primary">Outcomes</span>
            </h2>
            <p className="text-brand-muted text-sm mt-2 max-w-sm">
              Every book comes with a result worth celebrating — bestseller ranks, media coverage, and sold-out launches.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-bold px-6 py-3 rounded-full transition-all text-sm shrink-0"
          >
            Full Portfolio <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Magazine-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-3">
          {books.slice(0, 6).map(b => <BookCover key={b.title} b={b} />)}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {books.slice(6).map(b => <BookCover key={b.title} b={b} />)}
        </div>

        {/* Genre tags */}
        <div className="flex flex-wrap gap-2 mt-8 justify-center">
          {["Thriller","Romance","Self-Help","Fantasy","Sci-Fi","Memoir","Business","Children's","Historical","Psychology","Literary Fiction","True Crime"].map(g => (
            <span key={g} className="bg-slate-100 text-slate-600 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-slate-200 hover:border-primary hover:text-primary transition-colors cursor-pointer">
              {g}
            </span>
          ))}
        </div>

        {/* Platform row */}
        <div className="mt-12 bg-slate-50 border border-slate-100 rounded-2xl p-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-5">
            Every book we publish reaches readers on
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Amazon KDP","Barnes & Noble","Apple Books","Audible","Kobo","Google Play","IngramSpark","Scribd"].map(p => (
              <div key={p} className="bg-white border border-slate-200 rounded-full px-5 py-2 text-xs font-bold text-brand-body shadow-sm">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
