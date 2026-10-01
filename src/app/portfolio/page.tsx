import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { FadeUp, ScaleIn } from "@/components/ui/Animate";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | The Author Success",
  description: "Browse 2,500+ books we've published across every genre.",
};

const successStories = [
  {
    quote: "Hit Amazon Top 100 in week one — beyond anything I imagined.",
    name: "J. Harrison",
    book: "The Midnight Verdict",
    result: "Amazon Top 100",
    color: "#0891B2",
  },
  {
    quote: "10,000 copies sold in 3 months. The marketing team is phenomenal.",
    name: "E. Chen",
    book: "Whispers of Eden",
    result: "10,000 Copies",
    color: "#881337",
  },
  {
    quote: "#1 in my category on launch day. The cover design did all the work.",
    name: "J. Rodriguez",
    book: "Beyond the Horizon",
    result: "#1 Category",
    color: "#1e3a5f",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white to-slate-50/30 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp delay={0}><span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 block">Published Works</span></FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl font-black text-brand-dark leading-[1.1] mb-5">
              <span className="text-black">2,500+ Books</span><br />
              <span className="text-gradient">Brought to Life</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="text-brand-body text-lg max-w-xl mx-auto">
              A showcase of the incredible stories we&apos;ve helped publish — across every genre, for every kind of author.
            </p>
          </FadeUp>
        </div>
      </section>

      <PortfolioGrid />

      {/* ── SUCCESS STORIES ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Results That Matter</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark">
                <span className="text-black">Real Numbers,</span><br /><span className="text-black">Real </span><span className="text-primary">Authors</span>
              </h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-5">
            {successStories.map((s, i) => (
              <FadeUp key={s.name} delay={i * 0.1}>
                <div className="bg-white border border-slate-100 rounded-2xl p-7 hover-lift">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map(j => <Star key={j} size={14} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="font-[family-name:var(--font-playfair)] text-lg italic text-brand-dark mb-5">
                    &quot;{s.quote}&quot;
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-xs"
                        style={{ background: s.color }}
                      >
                        {s.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-brand-dark">{s.name}</div>
                        <div className="text-xs text-brand-muted">{s.book}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-black uppercase bg-cyan-50 text-primary border border-cyan-200 px-2.5 py-1 rounded-full">
                      {s.result}
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CFFAFE] mb-6">
              Every Book We Publish Reaches Readers on
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Amazon KDP", "Barnes & Noble", "Apple Books", "Audible", "Kobo", "Google Play Books", "IngramSpark", "Scribd", "Draft2Digital", "Findaway Voices"].map(p => (
                <div key={p} className="bg-white/15 border border-white/25 hover:border-white/50 rounded-full px-5 py-2 text-sm font-semibold text-[#CFFAFE] hover:text-white transition-colors">
                  {p}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark mb-4">
              <span className="text-black">Your Book Could Be</span><br /><span className="text-black">Our Next </span><span className="text-primary">Success</span><span className="text-black"> Story</span>
            </h2>
            <p className="text-brand-muted text-sm mb-8">
              Let&apos;s talk about your book and build your publishing plan together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-10 py-4 rounded-full shadow-xl shadow-cyan-200 transition-all"
            >
              Start My Publishing Journey <ArrowRight size={18} />
            </Link>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
