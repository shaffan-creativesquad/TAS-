"use client";

import Link from "next/link";
import { Shield, Lock, Users, Clock, Zap, Trophy, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const left = [
  { icon: Shield, title: "100% Royalty Ownership", desc: "Every dollar from your book sales goes directly to you — no splits." },
  { icon: Lock, title: "Full Confidentiality", desc: "NDA signed before we start. Your story and identity stay private." },
  { icon: Users, title: "Dedicated Expert Team", desc: "Writer, editor, designer, and marketer assigned specifically to you." },
];
const right = [
  { icon: Clock, title: "24/7 Author Support", desc: "Real humans available around the clock via chat, phone, or email." },
  { icon: Zap, title: "Fast Turnaround", desc: "Most projects delivered ahead of schedule — never compromising quality." },
  { icon: Trophy, title: "Proven Track Record", desc: "2,500+ published books with a 98% satisfaction rate since 2015." },
];

const bigStats = [
  { value: "2,500+", label: "Books Published", sub: "Across all genres" },
  { value: "1,800+", label: "Happy Authors", sub: "Worldwide" },
  { value: "40+", label: "Platforms", sub: "Global distribution" },
  { value: "98%", label: "Satisfaction", sub: "5-star average" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
            Why Authors Trust Us
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-black text-brand-dark mb-4">
            <span className="text-black">Built for Authors,</span><br /><span className="text-black">By </span><span className="text-primary">Publishing</span><span className="text-black"> Experts</span>
          </h2>
          <p className="text-brand-muted max-w-lg mx-auto text-sm leading-relaxed">
            We&apos;ve navigated the complex publishing world for 1,800+ authors. Here&apos;s what makes us different.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-3 gap-5 mb-8">
          {/* Left features */}
          <div className="flex flex-col gap-4">
            {left.map((f, i) => (
              <motion.div
                key={f.title}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover-lift"
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, ease: "easeOut", delay: i * 0.1 }}
              >
                <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center mb-3">
                  <f.icon size={18} className="text-primary" />
                </div>
                <h4 className="font-semibold text-brand-dark mb-1 text-sm">{f.title}</h4>
                <p className="text-brand-muted text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Center: big dark card */}
          <motion.div
            className="bg-brand-dark rounded-3xl p-8 flex flex-col justify-between"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.95, ease: "easeOut", delay: 0.1 }}
          >
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Trophy size={22} className="text-white" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-3">
                The Complete Author Solution
              </h3>
              <p className="text-[#CFFAFE] text-sm leading-relaxed mb-6">
                Stop juggling 5 different freelancers. We handle everything under one roof — from your first draft to a global bestseller.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                "One dedicated project manager",
                "Regular progress updates",
                "Revision cycles included",
                "Post-launch support",
              ].map(item => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-[#CFFAFE]">
                  <CheckCircle size={14} className="text-white shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-7 block bg-white hover:bg-slate-50 text-primary font-bold py-3 rounded-xl text-center text-sm transition-colors shadow-lg"
            >
              Get Started Today
            </Link>
          </motion.div>

          {/* Right features */}
          <div className="flex flex-col gap-4">
            {right.map((f, i) => (
              <motion.div
                key={f.title}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover-lift"
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, ease: "easeOut", delay: i * 0.1 }}
              >
                <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center mb-3">
                  <f.icon size={18} className="text-primary" />
                </div>
                <h4 className="font-semibold text-brand-dark mb-1 text-sm">{f.title}</h4>
                <p className="text-brand-muted text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden">
          {bigStats.map((s, i) => (
            <motion.div
              key={s.label}
              className="bg-white px-8 py-7 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: i * 0.08 }}
            >
              <div className="font-[family-name:var(--font-playfair)] text-3xl font-black text-primary mb-1">{s.value}</div>
              <div className="font-semibold text-brand-dark text-sm">{s.label}</div>
              <div className="text-xs text-brand-muted mt-0.5">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
