import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, BookOpen } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "How It Works | The Author Success",
  description: "Our 8-step process turns your expertise into an authority book — then the book works for you: leads, speaking invites, consulting clients.",
};

const process = [
  { n: "01", title: "Strategy",   desc: "We map your positioning, audience and goals. You leave with a book concept no one else owns.",              time: "2 hrs your time"  },
  { n: "02", title: "Interviews", desc: "8–12 recorded sessions where we extract your expertise, stories and proprietary frameworks.",                time: "8–10 hrs your time"},
  { n: "03", title: "Research",   desc: "Our team handles all market research, data gathering and source verification.",                              time: "0 hrs your time"  },
  { n: "04", title: "Writing",    desc: "Ghostwritten chapter by chapter in your voice. You review and approve — we iterate.",                        time: "Review only"      },
  { n: "05", title: "Editing",    desc: "Developmental, copy and proofread passes. Polished to a commercial standard.",                              time: "Approve only"     },
  { n: "06", title: "Design",     desc: "Interior formatting + cover design. Print-ready and eBook optimised. Multiple concepts provided.",           time: "Approve only"     },
  { n: "07", title: "Publishing", desc: "Amazon KDP, IngramSpark and 40+ global platforms. ISBN, ASIN, BISAC — all handled.",                         time: "0 hrs your time"  },
  { n: "08", title: "Marketing",  desc: "Launch PR, LinkedIn content, podcast pitches and lead-gen setup. We build the runway before you land.",      time: "Show up"          },
];

const b2bSteps = [
  { step: "Expert knowledge",          desc: "You already have this — we help package it" },
  { step: "Book strategy",             desc: "Positioning, audience, concept" },
  { step: "Ghostwriting",              desc: "Written in your voice, under your name" },
  { step: "Editing",                   desc: "Polished to a commercial standard" },
  { step: "Book design",               desc: "Cover + interior formatting" },
  { step: "Publishing",                desc: "Amazon, IngramSpark, 40+ platforms" },
  { step: "Amazon / distribution",     desc: "Available worldwide on day one" },
  { step: "PR",                        desc: "Press coverage & media placements" },
  { step: "LinkedIn thought leadership", desc: "52 posts extracted from 12 chapters" },
  { step: "Lead generation",           desc: "Book as a consultation funnel" },
  { step: "Speaking / podcasts",       desc: "Podcast invites + speaker enquiries" },
  { step: "Consulting clients",        desc: "Inbound, pre-qualified, premium" },
];

const hub = [
  { label: "LinkedIn",        icon: "💼" },
  { label: "PR & Media",      icon: "📰" },
  { label: "Podcast Invites", icon: "🎙️" },
  { label: "Speaking",        icon: "🎤" },
  { label: "Lead Magnet",     icon: "🧲" },
  { label: "Email Sequences", icon: "✉️" },
  { label: "Sales Decks",     icon: "📊" },
  { label: "Webinars",        icon: "💻" },
];

const contentMath = [
  { value: "1",   label: "Book",          sub: "16 weeks to build"   },
  { value: "12",  label: "Chapters",      sub: "your full framework" },
  { value: "52",  label: "LinkedIn Posts",sub: "a year of content"   },
  { value: "24",  label: "Talks / Pitches",sub: "podcast & speaking" },
  { value: "∞",   label: "Conversations", sub: "with ideal clients"  },
];

const faqs = [
  { q: "How much of my time does this take?",           a: "About 12 hours total — 2 for strategy and 8–10 for recorded interviews. We handle everything else: research, writing, editing, design, publishing and marketing." },
  { q: "Will the book sound like me?",                  a: "Yes. Our ghostwriting process starts by capturing your voice through interviews. Every chapter goes through your review, and we iterate until it sounds exactly like you — only more polished." },
  { q: "Do I own the IP?",                              a: "100%. You are the sole author and copyright owner. We sign a full NDA before we start. The book is yours forever — royalties, rights, everything." },
  { q: "How long does the full process take?",          a: "Typically 14–18 weeks from kickoff to published book. A Lead-gen eBook can be ready in 6 weeks; a Research Report campaign can run to 6 months." },
  { q: "Can I publish under my own name on Amazon?",   a: "Yes. Your name is on the cover, spine and copyright page. The ghostwriting relationship is completely confidential." },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/60 via-white to-slate-50/30 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
              The Process
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.08] mb-6">
              <span className="text-black">12 Hours of Your Time.</span>
              <br />
              <span className="text-primary">We Do the Rest.</span>
            </h1>
            <p className="text-brand-body text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Our 8-step process extracts your expertise, writes your book, and turns it into a platform that generates leads, speaking invites and consulting clients — for years.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/book-a-call"
                className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all"
              style={{ background: "#089bb2" }}
              >
                Book a Strategy Call <ArrowRight size={17} />
              </Link>
              <Link
                href="/our-books"
                className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-900 text-slate-800 font-bold px-7 py-4 rounded-full transition-all"
              >
                See Our Book Formats
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section className="py-10" style={{ background: "#089bb2" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "2 hrs",      label: "Strategy sessions"     },
              { value: "8–10 hrs",   label: "Interviews (recorded)" },
              { value: "0 hrs",      label: "Research & writing"    },
              { value: "14–18 wks",  label: "Published book"        },
            ].map(s => (
              <div key={s.label}>
                <div className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-black text-white mb-1">{s.value}</div>
                <div className="text-white/60 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR 8-STEP PROCESS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary block mb-3">Step by Step</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Our 8-Step Process
            </h2>
            <p className="text-brand-body max-w-xl mx-auto">From strategy session to published book — every step handled by specialists.</p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((step, i) => (
              <FadeUp key={step.n} delay={i * 0.06}>
                <div className="relative bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-white text-xs font-black">{step.n}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-primary bg-cyan-50 px-2 py-1 rounded-full">{step.time}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-primary/30 text-2xl font-light">›</div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>

          {/* second row connector */}
          <div className="hidden lg:flex justify-center my-2">
            <div className="text-primary/30 text-2xl font-light rotate-90">›</div>
          </div>
        </div>
      </section>

      {/* ── BOOK TO BUSINESS ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary block mb-3">After the Book</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              A Book Is the Beginning, Not the End.
            </h2>
            <p className="text-brand-body max-w-xl mx-auto">Every step below is built on top of your book. With one, everything compounds.</p>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Staircase */}
            <SlideLeft>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
                <div className="space-y-3">
                  {b2bSteps.map((item, i) => (
                    <div key={item.step} className="flex items-center gap-4 pl-12 relative">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-primary/30 rounded-full flex items-center justify-center text-xs font-black text-primary shadow-sm">
                        {i + 1}
                      </div>
                      <div className="bg-white border border-slate-100 rounded-xl px-4 py-3 flex-1 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                        <div className="font-semibold text-slate-900 text-sm">{item.step}</div>
                        <div className="text-brand-muted text-xs mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SlideLeft>

            {/* Hub & spokes list */}
            <SlideRight>
              <div className="sticky top-28">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary block mb-3">One Book. Every Channel.</span>
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-slate-900 mb-4">
                  We Build the Platform Around It.
                </h3>
                <p className="text-brand-body mb-8 text-sm leading-relaxed">
                  Your book becomes the source material for every marketing channel — content, PR, speaking, leads. We build all of it.
                </p>

                {/* Center hub card */}
                <div className="bg-primary rounded-2xl p-5 flex items-center gap-4 mb-5 shadow-lg shadow-cyan-200">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <BookOpen size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-black text-lg font-[family-name:var(--font-playfair)]">Your Book</div>
                    <div className="text-white/70 text-xs">The asset that powers everything</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {hub.map(item => (
                    <div key={item.label} className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl px-4 py-3 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-cyan-50 border border-cyan-100 rounded-2xl p-4">
                  <p className="text-sm text-brand-body">
                    <span className="font-bold text-slate-900">Not just a book.</span> A reason for every ideal client to call — for years after publication.
                  </p>
                </div>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── CONTENT MATH ── */}
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-3">
              One Book = 12 Months of Content.
            </h2>
            <p className="text-white/70 mb-12">And a reason for every ideal client to call.</p>
          </FadeUp>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {contentMath.map((item, i) => (
              <FadeUp key={item.label} delay={i * 0.08}>
                <div className="flex items-center gap-3">
                  <div className="bg-white/15 border border-white/25 rounded-2xl p-5 text-center w-[110px]">
                    <div className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-1">{item.value}</div>
                    <div className="text-white/90 text-xs font-bold leading-tight">{item.label}</div>
                    <div className="text-white/50 text-[10px] mt-1 leading-tight">{item.sub}</div>
                  </div>
                  {i < contentMath.length - 1 && (
                    <div className="text-white/30 text-2xl font-light hidden sm:block">→</div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-slate-900 mb-3">Common Questions</h2>
            <p className="text-brand-body">Everything you need to know before you start.</p>
          </FadeUp>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div className="border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                  <h3 className="font-semibold text-slate-900 mb-2 flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-brand-body text-sm leading-relaxed pl-7">{faq.a}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">
              Ready to Turn Your Expertise Into Authority?
            </h2>
            <p className="text-white/70 mb-8">30-minute strategy call. No obligation. You leave with a book concept.</p>
            <Link
              href="/book-a-call"
              className="inline-flex items-center gap-2 bg-white hover:bg-white/90 font-bold px-10 py-4 rounded-full shadow-lg transition-all text-lg"
              style={{ color: "#089bb2" }}
            >
              Book a Strategy Call <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
