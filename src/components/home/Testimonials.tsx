"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Thriller Author",
    book: "The Midnight Verdict",
    result: "Amazon Top 100 in Week 1",
    text: "The Author Success transformed my rough concept into a polished thriller. The ghostwriting team nailed my voice on the very first draft. My book hit Amazon Top 100 in its first week — I was speechless.",
    initials: "SM",
    color: "#0891B2",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Self-Help Author",
    book: "Beyond the Horizon",
    result: "#1 in Category on Launch Day",
    text: "From editing to the Amazon launch campaign — every detail was handled flawlessly. My self-help book hit #1 in its category on launch day. I couldn't have done this without their marketing expertise.",
    initials: "JR",
    color: "#2563EB",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Romance Novelist",
    book: "Whispers of Eden",
    result: "10,000 Copies Sold in 3 Months",
    text: "The cover design alone was worth every penny — it perfectly captures the essence of my story. But the entire process, from edits to distribution, was seamless. 10,000 copies in 3 months says it all.",
    initials: "EC",
    color: "#7C3AED",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Sci-Fi Author",
    book: "Silicon Dreams",
    result: "Audible Bestseller 3 Months Straight",
    text: "The audiobook narrator they matched me with was incredible — my story came alive in ways I never imagined. 3 consecutive months on Audible's bestseller list. Production quality rivals the biggest publishers.",
    initials: "DT",
    color: "#059669",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Memoirist",
    book: "Roots of Gold",
    result: "Featured in 3 Newspapers",
    text: "Sharing my personal story was scary, but the team made it feel safe. They handled every sensitive detail with care, and the press coverage we got on launch was beyond my wildest dreams.",
    initials: "MS",
    color: "#D97706",
    rating: 5,
  },
  {
    name: "Alex Johnson",
    role: "Fantasy Author",
    book: "The Last Oracle",
    result: "Pre-Orders Sold Out Before Launch",
    text: "Their marketing strategy was precision-engineered. Pre-orders sold out before the book even went live. The social media campaign generated buzz I've never seen for a debut fantasy novel.",
    initials: "AJ",
    color: "#0891B2",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
            Author Stories
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-black text-brand-dark">
            Real Authors.<br />Real Results.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left: big featured */}
          <div className="lg:col-span-3">
            <div className="bg-brand-dark rounded-3xl p-8 sm:p-10 h-full relative overflow-hidden">
              <div className="absolute top-6 right-8 opacity-[0.06]">
                <Quote size={100} className="text-white" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  {/* Result badge */}
                  <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-3 py-1 mb-6">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-xs font-bold text-primary">{testimonials[active].result}</span>
                  </div>

                  <div className="flex mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-amber-400 fill-amber-400" />)}
                  </div>

                  <p className="font-[family-name:var(--font-playfair)] text-white text-xl leading-relaxed italic mb-8">
                    &quot;{testimonials[active].text}&quot;
                  </p>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold"
                      style={{ background: testimonials[active].color }}
                    >
                      {testimonials[active].initials}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{testimonials[active].name}</div>
                      <div className="text-slate-400 text-xs">
                        {testimonials[active].role} ·{" "}
                        <span className="text-white/80">{testimonials[active].book}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => setActive(Math.max(0, active - 1))}
                  disabled={active === 0}
                  className="w-9 h-9 rounded-full border border-white/20 hover:border-white/40 flex items-center justify-center text-white disabled:opacity-30 transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setActive(Math.min(testimonials.length - 1, active + 1))}
                  disabled={active === testimonials.length - 1}
                  className="w-9 h-9 rounded-full border border-white/20 hover:border-white/40 flex items-center justify-center text-white disabled:opacity-30 transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: list */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 p-4 rounded-2xl text-left border transition-all ${
                  i === active
                    ? "bg-white border-cyan-200 shadow-md"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className={`font-semibold text-sm truncate ${i === active ? "text-primary" : "text-brand-dark"}`}>
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-400 truncate">{t.book}</div>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <div className="flex">
                    {[1,2,3,4,5].map(j => <Star key={j} size={9} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <span className={`text-[8px] font-bold uppercase ${i === active ? "text-primary" : "text-slate-400"}`}>
                    {t.result.split(" ").slice(0, 2).join(" ")}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
