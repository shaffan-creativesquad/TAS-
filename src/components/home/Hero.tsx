"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle, Play } from "lucide-react";
import { motion } from "framer-motion";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: "easeOut" as const, delay },
  };
}

function BookCover({
  title, author, genre, bg, spine, textColor, accentColor, className,
}: {
  title: string; author: string; genre: string;
  bg: string; spine: string; textColor: string; accentColor: string; className?: string;
}) {
  return (
    <div
      className={`relative rounded-[3px_10px_10px_3px] overflow-hidden shadow-2xl cursor-pointer group ${className}`}
      style={{ width: 160, height: 228 }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-4" style={{ background: spine }} />
      <div className="absolute left-4 right-0 top-0 bottom-0 flex flex-col justify-between p-3" style={{ background: bg }}>
        <div>
          <span
            className="text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
            style={{ background: `${accentColor}30`, color: accentColor }}
          >
            {genre}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="h-px opacity-20" style={{ background: textColor }} />
          <div className="h-px opacity-10 w-2/3" style={{ background: textColor }} />
        </div>
        <div>
          <div className="font-[family-name:var(--font-playfair)] text-[13px] font-bold leading-tight mb-2" style={{ color: textColor }}>
            {title}
          </div>
          <div className="text-[9px] uppercase tracking-widest opacity-60" style={{ color: textColor }}>
            {author}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
    </div>
  );
}

const books = [
  { title: "The Midnight Verdict", author: "J. Harrison", genre: "Thriller", bg: "linear-gradient(160deg,#0f172a 0%,#1e293b 100%)", spine: "#DC2626", textColor: "#f8fafc", accentColor: "#F59E0B", className: "float-a" },
  { title: "Whispers of Forever", author: "E. Chen", genre: "Romance", bg: "linear-gradient(160deg,#881337 0%,#be123c 100%)", spine: "#4C0519", textColor: "#fff1f2", accentColor: "#FCA5A5", className: "float-b" },
  { title: "Beyond the Stars", author: "A. Mitchell", genre: "Sci-Fi", bg: "linear-gradient(160deg,#0c4a6e 0%,#075985 100%)", spine: "#082f49", textColor: "#e0f2fe", accentColor: "#7DD3FC", className: "float-c" },
  { title: "Rise to Power", author: "K. Williams", genre: "Business", bg: "linear-gradient(160deg,#14532d 0%,#166534 100%)", spine: "#052e16", textColor: "#f0fdf4", accentColor: "#86EFAC", className: "float-a" },
];

export default function Hero() {
  const [form, setForm] = useState({ name: "", email: "", service: "" });

  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/60 via-white to-slate-50/40 pointer-events-none" />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(#DC2626 1px, transparent 1px)", backgroundSize: "36px 36px" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-[1fr_480px] gap-12 xl:gap-16 items-center">

          {/* ── LEFT ── */}
          <div>
            {/* Badge */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 bg-white border border-red-200 shadow-sm rounded-full px-4 py-1.5 mb-7">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} size={11} className="text-amber-400 fill-amber-400" />)}
              </div>
              <span className="text-xs font-semibold text-slate-700">Trusted by <strong className="text-primary">1,800+ Authors</strong> Worldwide</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 {...fadeUp(0.08)} className="font-[family-name:var(--font-playfair)] text-[3.2rem] sm:text-[3.75rem] lg:text-[4rem] font-black text-brand-dark leading-[1.08] mb-5">
              We Publish
              <br />
              <span className="text-gradient">Bestselling</span>
              <br />
              Books for You
            </motion.h1>

            <motion.p {...fadeUp(0.16)} className="text-brand-body text-lg leading-relaxed mb-7 max-w-[480px]">
              From ghostwriting to global distribution — professional publishing services for ambitious authors. Your story, published right.
            </motion.p>

            {/* Checklist */}
            <motion.div {...fadeUp(0.24)} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-9">
              {[
                "100% Royalty Ownership",
                "Strict NDA & Confidentiality",
                "Amazon & 40+ Platforms",
                "Dedicated Project Manager",
                "Unlimited Revisions",
                "24/7 Author Support",
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-brand-dark-2">
                  <CheckCircle size={15} className="text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.32)} className="flex flex-wrap gap-3 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-red-200 hover:shadow-red-300 transition-all text-[0.95rem]"
              >
                Start Publishing <ArrowRight size={17} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2.5 bg-white border-2 border-slate-200 hover:border-slate-900 text-slate-800 font-bold px-7 py-4 rounded-full transition-all text-[0.95rem]"
              >
                <Play size={16} className="fill-slate-800" /> See Our Work
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-8 pt-5 border-t border-slate-100">
              {[
                { value: "2,500+", label: "Books Published" },
                { value: "1,800+", label: "Happy Authors" },
                { value: "98%", label: "Satisfaction Rate" },
                { value: "40+", label: "Global Platforms" },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-brand-dark">{s.value}</div>
                  <div className="text-xs text-brand-muted mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Book covers + form ── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
          >
            {/* Book covers cluster */}
            <div className="relative h-[300px] mb-6 hidden sm:block">
              <div className="absolute inset-x-8 bottom-0 h-20 bg-red-100/60 blur-2xl rounded-full" />
              <div className="absolute top-0 left-4"       style={{ transform: "rotate(-8deg)" }}><BookCover {...books[0]} /></div>
              <div className="absolute top-4 left-[160px]" style={{ transform: "rotate(4deg)" }}><BookCover {...books[1]} /></div>
              <div className="absolute top-0 left-[310px]" style={{ transform: "rotate(-3deg)" }}><BookCover {...books[2]} /></div>
              <div className="absolute top-6 right-0"      style={{ transform: "rotate(7deg)" }}><BookCover {...books[3]} /></div>
            </div>

            {/* Form card */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/60 p-7">
              <div className="flex items-center justify-between mb-1">
                <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-brand-dark">
                  Get Free Consultation
                </h2>
                <span className="text-xs bg-green-100 text-green-700 font-semibold px-2.5 py-1 rounded-full">● Live</span>
              </div>
              <p className="text-brand-muted text-xs mb-5">Our expert calls you within 24 hours — no commitment.</p>

              <form className="flex flex-col gap-3" onSubmit={e => e.preventDefault()}>
                <input
                  type="text" placeholder="Your Full Name"
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors placeholder:text-slate-400"
                />
                <input
                  type="email" placeholder="Email Address"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors placeholder:text-slate-400"
                />
                <select
                  value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors text-slate-500"
                >
                  <option value="">Select a Service...</option>
                  {["Ghostwriting","Book Editing","Cover Design","Publishing","Book Marketing","Audiobooks","Full Package"].map(s => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 rounded-xl shadow-lg shadow-red-100 transition-all mt-0.5"
                >
                  Claim Free Consultation →
                </button>
              </form>

              <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-slate-100">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-amber-400 fill-amber-400" />)}
                </div>
                <span className="text-xs text-slate-400">4.9 / 5 from 1,200+ author reviews</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
