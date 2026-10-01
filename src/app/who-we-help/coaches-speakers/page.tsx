import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, BookOpen, Mic, Users, Clock } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Books for Coaches & Speakers | The Author Success",
  description: "Published coaches and speakers command higher fees, fill more programs, and get booked on bigger stages. 500+ coach and speaker books published.",
};

const COLOR = "#0891b2";

const stats = [
  { value: "500+", label: "Coach & Speaker Books", Icon: BookOpen },
  { value: "2.4×", label: "Higher Speaking Fees", Icon: Mic },
  { value: "600+", label: "Stage Bookings", Icon: Users },
  { value: "10 Wks", label: "Avg. Delivery", Icon: Clock },
];

const features = [
  "Your coaching philosophy in print — scalable beyond 1:1 sessions",
  "Sells your programs before you pitch them — clients arrive pre-sold",
  "Gets you booked on podcasts and stages as a recognised expert",
];

const flow = [
  { label: "Book", desc: "Your signature asset" },
  { label: "Speaking Bookings", desc: "Stage invitations" },
  { label: "Program Launches", desc: "Higher-ticket sales" },
  { label: "Legacy", desc: "Lasting impact" },
];

const bookExamples = [
  { title: "The Breakthrough Method", badge: "TEDx Referenced", desc: "The coaching framework behind hundreds of client transformations, now in print." },
  { title: "Own the Room", badge: "#1 Self-Help", desc: "A speaking coach shares the exact system for commanding any stage with confidence." },
  { title: "Limitless Living", badge: "Podcast Hit", desc: "The mindset and method that helped thousands break through their biggest barriers." },
];

export default function CoachesSpeakersPage() {
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
                Coaches &amp; Speakers
              </div>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-5">
                <span className="text-black">Your Book Is Your Stage </span>
                <span className="text-primary">— Every Day, Everywhere</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                Published coaches and speakers command higher fees, fill more programs, and get booked on bigger stages.
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
                  <span className="text-black">Signature </span>
                  <span className="text-primary">Method Books</span>
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Your book is the foundation of your coaching empire — a platform that works around the clock, converting readers into clients and getting you in front of the audiences that matter most.
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
                <span className="text-primary">Legacy</span>
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
              &quot;My fees tripled after I published. The book did the selling for me.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">JT</div>
              <div className="text-left">
                <div className="font-bold text-slate-800 text-sm">James T.</div>
                <div className="text-xs text-slate-500">Executive Coach</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4">
              <span className="text-black">Ready to Write Your </span>
              <span className="text-primary">Signature Book?</span>
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              Book a free 30-minute strategy call. We&apos;ll map out your book concept, positioning, and a publishing roadmap — at no cost.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-10 py-4 rounded-full shadow-lg shadow-cyan-200 transition-all"
            >
              Book Your Free Strategy Call <ArrowRight size={18} />
            </Link>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
