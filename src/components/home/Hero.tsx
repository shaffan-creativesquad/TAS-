"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: "easeOut" as const, delay },
  };
}

function BookCover({ src, alt, width = 120, height = 175 }: {
  src: string; alt: string; width?: number; height?: number;
}) {
  return (
    <div
      className="relative rounded-[3px_10px_10px_3px] overflow-hidden shadow-2xl cursor-pointer group"
      style={{ width, height }}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="130px" />
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
    </div>
  );
}

const books = [
  { src: "/midnight-verdict.jpeg",   alt: "The Midnight Verdict" },
  { src: "/Whispers of Eden.jpeg",   alt: "Whispers of Eden" },
  { src: "/Beyond the Horizon.jpeg", alt: "Beyond the Horizon" },
  { src: "/The Last Oracle.jpeg",    alt: "The Last Oracle" },
];

export default function Hero() {
  const [form, setForm] = useState({ name: "", email: "", service: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/60 via-white to-slate-50/40 pointer-events-none" />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-[1fr_480px] gap-12 xl:gap-16 items-center">

          {/* ── LEFT ── */}
          <div>
            {/* Badge */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 bg-white border border-cyan-200 shadow-sm rounded-full px-4 py-1.5 mb-7">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} size={11} className="text-amber-400 fill-amber-400" />)}
              </div>
              <span className="text-xs font-semibold text-slate-700">Trusted by <strong className="text-primary">Authors</strong> Worldwide</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 {...fadeUp(0.08)} className="font-[family-name:var(--font-playfair)] text-[3.2rem] sm:text-[3.75rem] lg:text-[4rem] font-black text-brand-dark leading-[1.08] mb-5">
              <span className="text-black">Your Head Has a</span>
              <br />
              <span className="text-gradient">Bestseller</span>
              <span className="text-black"> in It.</span>
              <br />
              <span className="text-black">We Know the Way Out.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.16)} className="text-brand-body text-lg leading-relaxed mb-7 max-w-[480px]">
              Do you have a story to tell? We help bring your ideas to life as beautiful books. From writing and editing to cover design and distribution, your voice always comes first.
            </motion.p>

            {/* Checklist */}
            <motion.div {...fadeUp(0.24)} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-9">
              {[
                "You Keep All Your Royalties",
                "Featured on Leading Global Platforms",
                "Careful Editing for Every Sentence",
                "Your Ideas Stay Confidential",
                "A Dedicated Project Manager",
                "Unwavering, Human Support",
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
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-cyan-200 hover:shadow-cyan-300 transition-all text-[0.95rem]"
              >
                Publish My Book <ArrowRight size={17} />
              </Link>
              <Link
                href="/our-books"
                className="inline-flex items-center gap-2.5 bg-white border-2 border-slate-200 hover:border-slate-900 text-slate-800 font-bold px-7 py-4 rounded-full transition-all text-[0.95rem]"
              >
                Browse Our Library
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
              <div className="absolute inset-x-8 bottom-0 h-20 bg-cyan-100/60 blur-2xl rounded-full pointer-events-none" />
              <div className="absolute top-0 left-4"       style={{ transform: "rotate(-8deg)" }}>
                <BookCover {...books[0]} width={160} height={228} />
              </div>
              <div className="absolute top-4 left-[160px]" style={{ transform: "rotate(4deg)" }}>
                <BookCover {...books[1]} width={160} height={228} />
              </div>
              <div className="absolute top-0 left-[310px]" style={{ transform: "rotate(-3deg)" }}>
                <BookCover {...books[2]} width={160} height={228} />
              </div>
              <div className="absolute top-6 right-0"      style={{ transform: "rotate(7deg)" }}>
                <BookCover {...books[3]} width={160} height={228} />
              </div>
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

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-6 gap-3 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={24} className="text-green-500" />
                  </div>
                  <p className="font-semibold text-brand-dark text-sm">Request received! We&apos;ll call you within 24 hours.</p>
                  <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", service: "" }); }} className="text-xs text-primary underline">Submit another</button>
                </div>
              ) : (
                <form
                  className="flex flex-col gap-3"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setStatus("loading");
                    try {
                      const res = await fetch("/api/hero-form", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(form),
                      });
                      if (!res.ok) throw new Error();
                      setStatus("success");
                    } catch {
                      setStatus("error");
                    }
                  }}
                >
                  <input
                    type="text" placeholder="Your Full Name" required
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors placeholder:text-slate-400"
                  />
                  <input
                    type="email" placeholder="Email Address" required
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
                  {status === "error" && (
                    <p className="text-xs text-red-600 font-medium">Something went wrong. Please try again.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 rounded-xl shadow-lg shadow-cyan-100 transition-all mt-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : "Claim Free Consultation →"}
                  </button>
                </form>
              )}

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
