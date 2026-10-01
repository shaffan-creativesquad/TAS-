"use client";

import { Award, Users, Mic, Globe, TrendingUp, BookOpen } from "lucide-react";
import { FadeUp, ScaleIn } from "@/components/ui/Animate";

const spokes = [
  {
    icon: Award,
    title: "Credibility",
    desc: "A published book instantly positions you as the authority in your field.",
    color: "#0891B2",
    bg: "bg-cyan-50",
  },
  {
    icon: Users,
    title: "Leads",
    desc: "Your book becomes your best sales tool — attracting high-quality clients 24/7.",
    color: "#7C3AED",
    bg: "bg-purple-50",
  },
  {
    icon: Mic,
    title: "Speaking",
    desc: "Published authors get invited to speak at conferences, podcasts, and events.",
    color: "#D97706",
    bg: "bg-amber-50",
  },
  {
    icon: Globe,
    title: "Media",
    desc: "Books open doors to press coverage, interviews, and feature stories.",
    color: "#059669",
    bg: "bg-emerald-50",
  },
  {
    icon: TrendingUp,
    title: "Marketing",
    desc: "A book fuels your entire content strategy — blogs, social posts, and ads.",
    color: "#BE185D",
    bg: "bg-pink-50",
  },
  {
    icon: BookOpen,
    title: "Distribution",
    desc: "Global reach across Amazon, Audible, Apple Books, and 40+ platforms.",
    color: "#1E3A5F",
    bg: "bg-blue-50",
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
              <span className="text-black">What </span><span className="text-primary">Your Book</span><span className="text-black"> Unlocks</span>
            </h2>
            <p className="text-brand-body text-base leading-relaxed max-w-2xl mx-auto">
              A professionally published book is far more than words on a page — it&apos;s a business asset that generates credibility, opportunity, and revenue long after launch.
            </p>
          </div>
        </FadeUp>

        {/* Hub and Spoke Layout */}
        <div className="relative">
          {/* Desktop: Hub-and-spoke grid */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 items-center">

            {/* Left spokes */}
            <div className="flex flex-col gap-6">
              {spokes.slice(0, 3).map((s, i) => (
                <FadeUp key={s.title} delay={i * 0.08}>
                  <div className="group bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-x-1 transition-all duration-300 flex items-start gap-4">
                    <div className={`w-12 h-12 ${s.bg} rounded-2xl flex items-center justify-center shrink-0`}>
                      <s.icon size={22} style={{ color: s.color }} />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-brand-dark mb-1">{s.title}</h3>
                      <p className="text-brand-body text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Center: Hub */}
            <ScaleIn>
              <div className="flex items-center justify-center">
                <div className="relative">
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full bg-cyan-200/40 blur-2xl scale-125" />
                  {/* Hub circle */}
                  <div className="relative w-52 h-52 rounded-full bg-primary flex flex-col items-center justify-center shadow-2xl shadow-cyan-300/50">
                    <BookOpen size={36} className="text-white mb-3" />
                    <span className="font-[family-name:var(--font-playfair)] text-2xl font-black text-white leading-tight text-center">
                      Your<br />Book
                    </span>
                    <span className="text-white/70 text-[10px] uppercase tracking-widest mt-1">The Core Asset</span>
                  </div>
                  {/* Connector lines */}
                  <div className="absolute top-1/2 -left-6 w-6 h-px bg-cyan-200" />
                  <div className="absolute top-1/2 -right-6 w-6 h-px bg-cyan-200" />
                </div>
              </div>
            </ScaleIn>

            {/* Right spokes */}
            <div className="flex flex-col gap-6">
              {spokes.slice(3).map((s, i) => (
                <FadeUp key={s.title} delay={(i + 3) * 0.08}>
                  <div className="group bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:translate-x-1 transition-all duration-300 flex items-start gap-4">
                    <div className={`w-12 h-12 ${s.bg} rounded-2xl flex items-center justify-center shrink-0`}>
                      <s.icon size={22} style={{ color: s.color }} />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-brand-dark mb-1">{s.title}</h3>
                      <p className="text-brand-body text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

          </div>

          {/* Mobile: simple grid */}
          <div className="lg:hidden">
            {/* Hub */}
            <ScaleIn>
              <div className="flex items-center justify-center mb-8">
                <div className="relative w-40 h-40 rounded-full bg-primary flex flex-col items-center justify-center shadow-2xl shadow-cyan-300/50">
                  <BookOpen size={28} className="text-white mb-2" />
                  <span className="font-[family-name:var(--font-playfair)] text-xl font-black text-white leading-tight text-center">
                    Your<br />Book
                  </span>
                </div>
              </div>
            </ScaleIn>
            {/* Spokes */}
            <div className="grid sm:grid-cols-2 gap-4">
              {spokes.map((s, i) => (
                <FadeUp key={s.title} delay={i * 0.07}>
                  <div className="group bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-xl transition-all duration-300 flex items-start gap-4">
                    <div className={`w-11 h-11 ${s.bg} rounded-xl flex items-center justify-center shrink-0`}>
                      <s.icon size={20} style={{ color: s.color }} />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-sm font-bold text-brand-dark mb-1">{s.title}</h3>
                      <p className="text-brand-body text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
