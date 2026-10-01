"use client";

import { Eye, Headphones, Zap, Lock, Users, ShieldCheck } from "lucide-react";
import { FadeUp, SlideLeft } from "@/components/ui/Animate";

const features = [
  {
    icon: Eye,
    title: "Transparency",
    desc: "We believe lack of transparency creates problems, so we are committed to complete openness with every author, at every step.",
    color: "#0891B2",
    bg: "bg-cyan-50",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Our dedicated account managers guide you through the entire process and keep you informed, at all times — day or night.",
    color: "#0891B2",
    bg: "bg-cyan-50",
  },
  {
    icon: Zap,
    title: "Quick Turnarounds",
    desc: "With rapid turnaround times, we ensure your project moves faster than the competition — without sacrificing quality.",
    color: "#D97706",
    bg: "bg-amber-50",
  },
  {
    icon: Lock,
    title: "Guaranteed Privacy",
    desc: "We value the trust authors place in us. Every project is covered by a signed NDA and protected with complete confidentiality.",
    color: "#059669",
    bg: "bg-emerald-50",
  },
  {
    icon: Users,
    title: "Team of Ghostwriters",
    desc: "Based on your book's needs, we handpick a skilled ghostwriter right from the beginning — matched to your genre and voice.",
    color: "#7C3AED",
    bg: "bg-purple-50",
  },
  {
    icon: ShieldCheck,
    title: "Zero Plagiarism Policy",
    desc: "Our strict zero-plagiarism approach guarantees every client receives 100% original, tailored, and unique content — always.",
    color: "#BE185D",
    bg: "bg-pink-50",
  },
];

export default function WhatWeBring() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeUp>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Our Commitment</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-black text-brand-dark mb-4">
              What We Bring to<br />the Table
            </h2>
            <p className="text-brand-body text-base leading-relaxed max-w-2xl mx-auto">
              We didn&apos;t earn our reputation as a leading book publishing company by chance. We achieved it through strategic planning and by delivering authors what no one else could.
            </p>
          </div>
        </FadeUp>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FadeUp key={f.title} delay={i * 0.08}>
              <div className="group bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 ${f.bg} rounded-2xl flex items-center justify-center mb-5`}>
                  <f.icon size={24} style={{ color: f.color }} />
                </div>

                {/* Text */}
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-brand-dark mb-2">
                  {f.title}
                </h3>
                <p className="text-brand-body text-sm leading-relaxed">{f.desc}</p>

                {/* Bottom accent line */}
                <div
                  className="mt-5 h-0.5 w-0 group-hover:w-12 rounded-full transition-all duration-500"
                  style={{ background: f.color }}
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
