"use client";

import Link from "next/link";
import { PenLine, BookOpen, Palette, Globe, Megaphone, Headphones, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: PenLine,
    title: "Ghostwriting",
    desc: "Our expert writers craft your entire book in your unique voice — fiction, non-fiction, memoirs, business books. 100% confidential with NDA signed upfront. Your name on the cover, always.",
    tag: "Most Popular",
    span: "lg:col-span-2",
    dark: true,
  },
  {
    icon: BookOpen,
    title: "Book Editing",
    desc: "From developmental to proofreading — we polish every sentence until your manuscript is flawless and ready for the world.",
    tag: null,
    span: "",
    dark: false,
  },
  {
    icon: Palette,
    title: "Cover Design",
    desc: "Eye-catching, genre-accurate covers designed to stand out on Amazon and every bookshelf.",
    tag: null,
    span: "",
    dark: false,
  },
  {
    icon: Globe,
    title: "Publishing & Distribution",
    desc: "ISBN, formatting, and global distribution to 40+ platforms. 100% of royalties go directly to you — forever.",
    tag: "Global Reach",
    span: "",
    dark: false,
  },
  {
    icon: Megaphone,
    title: "Book Marketing",
    desc: "Amazon SEO, social campaigns, press releases, BookTok — we put your book in front of the right readers.",
    tag: null,
    span: "",
    dark: false,
  },
  {
    icon: Headphones,
    title: "Audiobooks",
    desc: "Studio-quality narration and production. Reach millions on Audible, Spotify, and Apple Books.",
    tag: null,
    span: "lg:col-span-2",
    dark: true,
  },
];


export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
              Our Services
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-black text-brand-dark leading-tight">
              Everything You Need<br />to Publish Successfully
            </h2>
          </div>
          <div>
            <p className="text-brand-muted max-w-sm mb-4 text-sm leading-relaxed">
              Six world-class services. One dedicated team. Zero guesswork from draft to global bestseller.
            </p>
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-3 transition-all">
              See all services <ArrowUpRight size={15} />
            </Link>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.85, ease: "easeOut", delay: i * 0.07 }}
              className={s.span}
            >
              <Link
                href="/services"
                className={`group rounded-2xl p-6 border hover-lift cursor-pointer transition-all block h-full ${
                  s.dark
                    ? "bg-brand-dark border-brand-dark text-white"
                    : "bg-white border-slate-200 hover:border-cyan-100 hover:shadow-lg"
                }`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  s.dark ? "bg-white/10" : "bg-cyan-50"
                }`}>
                  <s.icon size={22} className={s.dark ? "text-white" : "text-primary"} />
                </div>

                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className={`font-[family-name:var(--font-playfair)] text-xl font-bold ${
                    s.dark ? "text-white" : "text-brand-dark"
                  }`}>{s.title}</h3>
                  {s.tag && (
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 mt-1 ${
                      s.dark ? "bg-primary text-white" : "bg-cyan-50 text-primary border border-cyan-200"
                    }`}>{s.tag}</span>
                  )}
                </div>

                <p className={`text-sm leading-relaxed mb-5 ${
                  s.dark ? "text-[#CFFAFE]" : "text-brand-muted"
                }`}>{s.desc}</p>

                <div className={`flex items-center gap-1.5 text-sm font-bold group-hover:gap-3 transition-all ${
                  s.dark ? "text-[#CFFAFE]" : "text-primary"
                }`}>
                  Learn more <ArrowUpRight size={15} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
