"use client";

import Link from "next/link";
import { CheckCircle, Star, Users, Clock, Award, MessageCircle, ArrowRight } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

const COLOR = "#0891b2";

const callSteps = [
  "Tell us about your book idea and what you want it to achieve",
  "We look at your readers and where your book fits in the market",
  "You get honest advice and a clear plan for moving forward",
  "We walk through your options, timelines, and costs openly",
];

const highlights = [
  { big: "Zero Cost", small: "Completely Free", Icon: Award },
  { big: "Real Advice", small: "No Sales Pitch", Icon: MessageCircle },
  { big: "Clear Plan", small: "Next Steps Included", Icon: CheckCircle },
  { big: "Your Pace", small: "No Pressure", Icon: Clock },
];

const testimonials = [
  {
    quote: "The consultation helped me turn scattered ideas into a practical publishing plan.",
    name: "Michael B.",
    initials: "MB",
  },
  {
    quote: "I finally have a clear direction for turning my idea into a book.",
    name: "Jessica M.",
    initials: "JM",
  },
  {
    quote: "Helpful advice, honest answers, and a plan I can follow.",
    name: "Daniel K.",
    initials: "DK",
  },
];

export default function BookACallPage() {
  return (
    <>
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
              Free Consultation
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-5">
              <span className="text-black">Get Expert Advice on </span>
              <span className="text-primary">Your Book, Free</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
              Book a free book publishing consultation and leave with clear next steps for your book. No pressure, no obligation.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">

            <SlideLeft>
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black mb-8">
                  <span className="text-black">Here&apos;s How the </span>
                  <span className="text-primary">Call Works</span>
                </h2>
                <div className="flex flex-col gap-4 mb-10">
                  {callSteps.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 font-bold text-white text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed pt-1">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                    Your Call Is With
                  </h3>
                  <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                      <Users size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 mb-1">An Experienced Publishing Specialist</div>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Talk to a book publishing expert who understands writing, publishing, and marketing, and can answer your questions in plain, simple language.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100">
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <Star key={j} size={13} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="font-[family-name:var(--font-playfair)] italic text-slate-700 mb-4">
                    &quot;One call gave me the clarity I needed to move forward.&quot;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">AR</div>
                    <span className="text-sm font-semibold text-slate-700">Alex R.</span>
                  </div>
                </div>
              </div>
            </SlideLeft>

            <SlideRight delay={0.1}>
              <div style={{ minHeight: "600px" }} className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
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

      <section className="py-12" style={{ background: COLOR }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map(({ big, small, Icon }, i) => (
              <FadeUp key={big} delay={i * 0.08}>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="font-[family-name:var(--font-playfair)] text-xl font-black text-white">{big}</div>
                  <div className="text-white/80 text-sm mt-1">{small}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block text-primary">Author Feedback</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black">
                <span className="text-black">Authors Who Found </span>
                <span className="text-primary">Their Next Step</span>
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
                    <div className="font-bold text-sm text-slate-800">{t.name}</div>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cyan-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black mb-4">
              <span className="text-black">Have a Question First? </span>
              <span className="text-primary">Ask Away.</span>
            </h2>
            <p className="text-slate-600 mb-6">
              Tell us what you&apos;re wondering about, and we&apos;ll walk you through it personally.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-cyan-200 transition-all"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
