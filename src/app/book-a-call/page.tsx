"use client";

import Link from "next/link";
import { CheckCircle, Star, Users, Clock, Phone } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

const COLOR = "#0891b2";

const whatToExpect = [
  "We learn about your book idea and goals",
  "We assess your target audience and market",
  "We give you an honest, personalised publishing roadmap",
  "We discuss options, timelines, and investment — openly",
];

const testimonials = [
  {
    quote: "I came in skeptical. I left with a plan. Worth every minute.",
    name: "Michael T.",
    title: "Business Author",
    initials: "MT",
  },
  {
    quote: "The strategist I spoke with knew my industry inside out. The call alone was worth more than I expected.",
    name: "Rachel K.",
    title: "Executive Coach",
    initials: "RK",
  },
  {
    quote: "No hard sell, just real advice. I booked again the same day.",
    name: "Daniel W.",
    title: "Tech Founder",
    initials: "DW",
  },
];

const statsStrip = [
  { value: "1,800+", label: "Authors Helped", Icon: Users },
  { value: "4.9★", label: "Average Rating", Icon: Star },
  { value: "30 Min", label: "Call Length", Icon: Clock },
  { value: "Free", label: "No Obligation", Icon: Phone },
];

export default function BookACallPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-12 overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white to-slate-50/30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white"
              style={{ background: COLOR }}
            >
              Free Strategy Call
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-5">
              <span className="text-black">Book Your Free </span>
              <span className="text-primary">Strategy Call</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
              30 minutes. No obligation. Leave with a clear publishing roadmap.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* MAIN 2-COLUMN */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            {/* LEFT */}
            <SlideLeft>
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black mb-8">
                  <span className="text-black">What to expect </span>
                  <span className="text-primary">on the call</span>
                </h2>
                <div className="flex flex-col gap-4 mb-10">
                  {whatToExpect.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 font-bold text-white text-sm">
                        {i + 1}
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed pt-1">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Team member card */}
                <div className="mb-8">
                  <h3 className="font-bold text-slate-800 text-sm mb-4 uppercase tracking-widest text-xs text-primary">
                    You&apos;ll speak with:
                  </h3>
                  <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                      <Users size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 mb-1">A Senior Publishing Strategist</div>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Every call is taken by one of our senior strategists — published authors themselves with 10+ years of industry experience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100">
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <Star key={j} size={13} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="font-[family-name:var(--font-playfair)] italic text-slate-700 mb-4">
                    &quot;I came in skeptical. I left with a plan. Worth every minute.&quot;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">MT</div>
                    <span className="text-sm font-semibold text-slate-700">Michael T.</span>
                  </div>
                </div>
              </div>
            </SlideLeft>

            {/* RIGHT — Calendly embed */}
            <SlideRight delay={0.1}>
              <div style={{ minHeight: "600px" }} className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
                {/* Replace the Calendly URL above with your actual Calendly link */}
                <iframe
                  src="https://calendly.com/theauthorsuccess/strategy-call"
                  width="100%"
                  height="700"
                  frameBorder={0}
                  title="Book a Strategy Call"
                />
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-12" style={{ background: "#0891b2" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statsStrip.map(({ value, label, Icon }, i) => (
              <FadeUp key={label} delay={i * 0.08}>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="font-[family-name:var(--font-playfair)] text-3xl font-black text-white">{value}</div>
                  <div className="text-white/80 text-sm mt-1">{label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block text-primary">What Authors Say</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black">
                <span className="text-black">After the </span>
                <span className="text-primary">Call</span>
              </h2>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScaleIn key={t.name} delay={i * 0.1}>
                <div className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <Star key={j} size={13} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="font-[family-name:var(--font-playfair)] text-base italic text-slate-700 mb-6 leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-xs shrink-0"
                      style={{ background: COLOR }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-800">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.title}</div>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-cyan-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black mb-4">
              <span className="text-black">Still have questions? </span>
              <span className="text-primary">We&apos;re here.</span>
            </h2>
            <p className="text-slate-600 mb-6">
              Chat with our team or drop us a message — we respond within one business day.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-cyan-200 transition-all"
            >
              Contact Us
            </Link>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
