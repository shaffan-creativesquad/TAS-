import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, BookOpen, Award, Clock } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Professional Book Editing Services | The Author Success",
  description: "Developmental editing, line editing, copy editing, and proofreading by expert editors. Flawless manuscripts ready for publishing. Fast turnaround, unlimited revisions.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "Editorial Excellence";
const headline = "Flawless Manuscripts That Editors Love";
const subline = "Multi-level editing from developmental structure to final proofreading polish.";
const desc = "A great story deserves great editing. Our editorial team provides four levels of editing — developmental, line, copy, and proofreading — ensuring your manuscript is publication-ready, reader-approved, and worthy of five-star reviews. We don't just fix errors; we make your writing shine.";
const serviceLabel = "Editing";

const stats = [
  { value: "2,500+", label: "Manuscripts Edited", Icon: BookOpen },
  { value: "99.9%", label: "Error-Free Rate", Icon: Award },
  { value: "2–4 Wks", label: "Average Turnaround", Icon: Clock },
  { value: "4.9/5", label: "Author Rating", Icon: Star },
];

const subServices = [
  { tag: "Big Picture", title: "Developmental Editing", desc: "We assess the structure, pacing, character arcs, plot holes, and overall narrative flow — then provide a detailed editorial letter and in-manuscript notes." },
  { tag: "Sentence-Level", title: "Line & Copy Editing", desc: "Line-by-line refinement of your prose — clarity, rhythm, word choice, consistency, grammar, and style — for a manuscript that reads effortlessly." },
  { tag: "Final Pass", title: "Proofreading", desc: "The final sweep before publishing. We catch every remaining typo, punctuation error, formatting inconsistency, and stray comma." },
  { tag: "Feedback", title: "Manuscript Critique", desc: "Not ready for full editing? Get a detailed Reader's Report covering strengths, weaknesses, market positioning, and specific improvement recommendations." },
];

const steps = [
  { num: "01", title: "Manuscript Submission", desc: "Submit your manuscript via our secure portal. We accept DOCX, PDF, or Google Docs format." },
  { num: "02", title: "Editorial Assessment", desc: "Your editor reviews the full manuscript and identifies the key areas for improvement before editing begins." },
  { num: "03", title: "Editing Rounds", desc: "Your manuscript goes through its agreed editing levels with tracked changes, inline comments, and a detailed editorial letter." },
  { num: "04", title: "Author Review", desc: "You review all changes and comments. We schedule a call to discuss the editorial feedback and your questions." },
  { num: "05", title: "Final Polish", desc: "We incorporate your responses and deliver a clean, publication-ready manuscript ready for formatting." },
];

const included = [
  "Dedicated senior editor assigned",
  "Developmental structure analysis",
  "Plot and character arc review",
  "Line-by-line prose refinement",
  "Grammar, punctuation, syntax fixes",
  "Style guide adherence",
  "Tracked changes with comments",
  "Detailed editorial letter",
  "Pacing and flow improvements",
  "Dialogue enhancement",
  "Consistency checks throughout",
  "Two rounds of revisions included",
];

const testimonials = [
  { quote: "My manuscript came back cleaner and tighter than I thought possible. The developmental feedback revealed structural issues I'd been blind to for months. Worth every penny.", name: "Amanda R.", title: "Thriller Author · #1 Amazon Category", result: "#1 Amazon Category" },
  { quote: "Three editing passes and my memoir went from 'good' to 'unputdownable.' My editor understood exactly what the story needed.", name: "Marcus T.", title: "Memoir Author · Press Coverage", result: "Featured in Publishers Weekly" },
  { quote: "The editorial letter alone was worth the investment. Detailed, honest, and actionable. My next book will be so much better because of this edit.", name: "Claire O.", title: "Literary Fiction Author", result: "5-Star Reviews" },
];

const faqs = [
  { q: "What's the difference between the editing levels?", a: "Developmental editing looks at big-picture structure and story. Line editing refines prose quality. Copy editing fixes grammar and consistency. Proofreading is the final error sweep. We recommend them in sequence, but you can choose any level." },
  { q: "Do you edit all genres?", a: "Yes — fiction (all genres), non-fiction, memoirs, business books, self-help, children's books, academic, and more. We match you with an editor who specializes in your genre." },
  { q: "How long does editing take?", a: "A 60,000-word manuscript typically takes 2–4 weeks depending on the editing level. Proofreading is faster (5–7 days). Rush turnaround is available." },
  { q: "Will my voice be preserved?", a: "Absolutely. Our editors enhance your voice, they don't replace it. We respect your writing style and only make changes that serve clarity and readability." },
  { q: "What format should I submit my manuscript in?", a: "We prefer Microsoft Word (.docx) with double-spaced text and Times New Roman 12pt. We can also work with Google Docs or PDF." },
];

export default function EditingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: `linear-gradient(145deg, ${COLOR}22 0%, #ffffff 50%, ${COLOR}12 100%)` }}>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white" style={{ background: COLOR }}>{badge}</div>
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-black leading-[1.1] mb-4">{headline}</h1>
                <p className="text-lg font-semibold mb-4" style={{ color: COLOR }}>{subline}</p>
                <p className="text-brand-body leading-relaxed mb-8">{desc}</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:opacity-90" style={{ background: COLOR }}>Get Free Quote <ArrowRight size={16} /></Link>
                  <Link href="/portfolio" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-800 text-slate-800 font-bold px-7 py-4 rounded-full transition-all">See Our Work</Link>
                </div>
              </div>
            </SlideLeft>
            <SlideRight delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ value, label, Icon }, i) => (
                  <FadeUp key={label} delay={i * 0.08}>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${COLOR}15` }}><Icon size={18} style={{ color: COLOR }} /></div>
                      <div className="font-[family-name:var(--font-playfair)] text-2xl font-black text-brand-dark">{value}</div>
                      <div className="text-xs text-brand-muted mt-0.5">{label}</div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>What We Offer</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black">
                <span className="text-black">Every Type of </span><span style={{ color: COLOR }}>{serviceLabel}</span><span className="text-black"> Covered</span>
              </h2>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {subServices.map((sub, i) => (
              <FadeUp key={sub.title} delay={i * 0.08}>
                <div className="rounded-2xl p-6 border border-slate-100 hover:border-transparent hover:shadow-xl transition-all" style={{ background: LIGHT_BG }}>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full text-white inline-block mb-4" style={{ background: COLOR }}>{sub.tag}</span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-brand-dark mb-2">{sub.title}</h3>
                  <p className="text-sm text-brand-body leading-relaxed">{sub.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>How It Works</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black">
                <span className="text-black">Our Proven </span><span style={{ color: COLOR }}>Process</span>
              </h2>
            </div>
          </FadeUp>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px border-t-2 border-dashed" style={{ borderColor: `${COLOR}40` }} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, i) => (
                <FadeUp key={step.num} delay={i * 0.08}>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 font-[family-name:var(--font-playfair)] text-xl font-black text-white shadow-lg" style={{ background: COLOR }}>{step.num}</div>
                    <h4 className="font-bold text-brand-dark text-center text-sm mb-2">{step.title}</h4>
                    <p className="text-xs text-brand-muted text-center leading-relaxed">{step.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block text-[#CFFAFE]">Everything Included</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">No Hidden Fees.<br />No Surprises.</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">When you work with us, you get everything listed below — included in your quoted price. We believe in transparent pricing with no unexpected add-ons.</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><BookOpen size={22} className="text-white" /></div>
                  <div>
                    <div className="text-white font-semibold text-sm">Free Consultation Included</div>
                    <div className="text-[#CFFAFE] text-xs">Talk to a publishing expert before you commit — no obligation.</div>
                  </div>
                </div>
              </div>
            </SlideLeft>
            <SlideRight delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle size={15} className="shrink-0 mt-0.5 text-white" />
                    <span className="text-[#CFFAFE] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>Author Stories</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black">
                <span className="text-black">Real Results, Real </span><span style={{ color: COLOR }}>Authors</span>
              </h2>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <div className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex mb-4">{[1,2,3,4,5].map(j => <Star key={j} size={13} className="text-amber-400 fill-amber-400" />)}</div>
                  <p className="font-[family-name:var(--font-playfair)] text-base italic text-brand-dark-2 mb-6 leading-relaxed">&quot;{t.quote}&quot;</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-xs shrink-0" style={{ background: COLOR }}>{t.name.split(" ").map(n => n[0]).join("")}</div>
                      <div>
                        <div className="font-bold text-sm text-brand-dark">{t.name}</div>
                        <div className="text-xs text-brand-muted">{t.title}</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-black uppercase px-2.5 py-1 rounded-full whitespace-nowrap" style={{ background: `${COLOR}15`, color: COLOR }}>{t.result}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>FAQ</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black">
                <span className="text-black">Common </span><span style={{ color: COLOR }}>Questions</span>
              </h2>
            </div>
          </FadeUp>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FadeUp key={faq.q} delay={i * 0.07}>
                <details className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-semibold text-brand-dark text-sm gap-4">
                    {faq.q}
                    <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 border border-slate-200 group-open:rotate-45 transition-transform" style={{ color: COLOR }}>+</span>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-brand-body leading-relaxed border-t border-slate-100 pt-4">{faq.a}</div>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cyan-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><BookOpen size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4">
              <span className="text-black">Ready to Get </span><span style={{ color: COLOR }}>Started?</span>
            </h2>
            <p className="text-brand-body mb-8 max-w-lg mx-auto">Book a free 30-minute consultation with one of our publishing experts. No commitment — just honest advice about your project.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-full shadow-lg shadow-cyan-200 transition-all hover:opacity-90" style={{ background: COLOR }}>Book Free Consultation <ArrowRight size={18} /></Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-primary text-brand-dark-2 font-bold px-8 py-4 rounded-full transition-all">All Services</Link>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
