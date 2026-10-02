import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, BookOpen, TrendingUp, Users, Clock } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Books for Consultants | The Author Success",
  description: "Stop relying on referrals. A professionally published book makes you the obvious choice in your niche. 400+ consultant books published.",
};

const COLOR = "#0891b2";

const stats = [
  { value: "400+", label: "Consultant Books", Icon: BookOpen },
  { value: "3×", label: "Avg. Inbound Increase", Icon: TrendingUp },
  { value: "89%", label: "Close Rate Post-Book", Icon: Users },
  { value: "12 Wks", label: "Avg. Delivery", Icon: Clock },
];

const features = [
  "Makes your methodology visible and sellable to premium clients",
  "Positions you as the authority — not just another consultant",
  "Generates warm inbound leads while you sleep",
];

const flow = [
  { label: "Book", desc: "Your lead-gen asset" },
  { label: "Credibility", desc: "Instant authority" },
  { label: "Inbound Leads", desc: "Warm enquiries" },
  { label: "High-Ticket Clients", desc: "Premium engagements" },
];

const bookExamples = [
  { title: "The 7-Figure Consulting Framework", badge: "Amazon #1", desc: "A step-by-step system used by elite consultants to scale past seven figures." },
  { title: "The 90-Day Transformation", badge: "10K Copies Sold", desc: "How to deliver measurable client results in less than three months." },
  { title: "Your Signature Method", badge: "Speaker Invite", desc: "How to package your expertise into a proprietary framework clients pay premium for." },
];

export default function ConsultantsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white to-slate-50/30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white"
                style={{ background: COLOR }}
              >
                Consultants
              </div>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-5">
                <span className="text-black">A Book That Brings You Consulting Clients </span>
                <span className="text-primary">— On Autopilot</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                Stop relying on referrals. A professionally published book makes you the obvious choice in your niche.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/book-a-call"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-cyan-200 transition-all"
                >
                  Book Strategy Call <ArrowRight size={16} />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-800 text-slate-800 font-bold px-7 py-4 rounded-full transition-all"
                >
                  See Portfolio
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-12" style={{ background: "#0891b2" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label, Icon }, i) => (
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

      {/* THE BOOK WE BUILD */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <SlideLeft>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block text-primary">The Book We Build For You</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-5">
                  <span className="text-black">Framework &amp; </span>
                  <span className="text-primary">Lead-Generation Books</span>
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Consultant books that work as your best salesperson — establishing your methodology, building trust with prospects, and closing deals before you even get on a call.
                </p>
              </div>
            </SlideLeft>
            <SlideRight delay={0.1}>
              <div className="flex flex-col gap-5">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <p className="text-slate-700 font-medium leading-relaxed">{f}</p>
                  </div>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* OUTCOME FLOW */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block text-primary">Your Journey</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black">
                <span className="text-black">From Book to </span>
                <span className="text-primary">High-Ticket Clients</span>
              </h2>
            </div>
          </FadeUp>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px border-t-2 border-dashed" style={{ borderColor: `${COLOR}40` }} />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {flow.map((step, i) => (
                <FadeUp key={step.label} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-white shadow-lg text-sm" style={{ background: COLOR }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="font-[family-name:var(--font-playfair)] font-black text-lg text-slate-800 mb-1">{step.label}</div>
                    <div className="text-xs text-slate-500">{step.desc}</div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOOK EXAMPLES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block text-primary">Portfolio</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black">
                <span className="text-black">Books We&apos;ve </span>
                <span className="text-primary">Built</span>
              </h2>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {bookExamples.map((book, i) => (
              <ScaleIn key={book.title} delay={i * 0.1}>
                <div className="bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-12 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <BookOpen size={24} className="text-primary" />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] font-black text-lg text-slate-800 mb-2">{book.title}</h3>
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">{book.desc}</p>
                  <span className="inline-block text-[10px] font-black uppercase px-3 py-1 rounded-full" style={{ background: `${COLOR}15`, color: COLOR }}>
                    {book.badge}
                  </span>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 bg-cyan-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="flex justify-center mb-5">
              {[1, 2, 3, 4, 5].map((j) => (
                <Star key={j} size={18} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <blockquote className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-black italic text-slate-800 leading-relaxed mb-6">
              &quot;The book paid for itself in the first two engagements.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">SM</div>
              <div className="text-left">
                <div className="font-bold text-slate-800 text-sm">Sarah M.</div>
                <div className="text-xs text-slate-500">Business Consultant</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4">
              <span className="text-black">Ready to Write Your </span>
              <span className="text-white">Consulting Book?</span>
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Book a free 30-minute strategy call. We&apos;ll map out your book concept, positioning, and a publishing roadmap — at no cost.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-white/90 font-bold px-10 py-4 rounded-full shadow-lg transition-all"
              style={{ color: "#089bb2" }}
            >
              Book Your Free Strategy Call <ArrowRight size={18} />
            </Link>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
