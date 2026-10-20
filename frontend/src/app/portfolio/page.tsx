import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, BookOpen, Globe, Award, Users } from "lucide-react";
import { FadeUp, ScaleIn } from "@/components/ui/Animate";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | The Author Success",
  description: "Explore author success stories from every genre, each one written, designed, and published with our team.",
};

const COLOR = "#0891b2";

const highlights = [
  { big: "Every Genre", small: "Welcome Here", Icon: BookOpen },
  { big: "Global Reach", small: "Major Retailers", Icon: Globe },
  { big: "Author-Owned", small: "100% Royalties", Icon: Award },
  { big: "One Team", small: "Draft to Shelf", Icon: Users },
];

const successStories = [
  {
    quote: "The team helped turn my ideas into a polished book that reflects my expertise. The process felt organized, collaborative, and clear from start to finish.",
    name: "David M.",
    title: "Business Author",
    color: "#0891B2",
  },
  {
    quote: "The help I received from the beginning until the book became a reality was invaluable. The end result was a reflection of what I wanted.",
    name: "Laura Bennett",
    title: "Memoir Author",
    color: "#881337",
  },
  {
    quote: "I valued the team's focus on the details and practical insights. They guided me to be more confident and focused about the publishing process.",
    name: "James R.",
    title: "Professional Author",
    color: "#1e3a5f",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white to-slate-50/30 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp delay={0}><span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 block">Our Authors&apos; Work</span></FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl font-black text-brand-dark leading-[1.1] mb-5">
              <span className="text-black">The Books Our Authors</span><br />
              <span className="text-primary">Are Proud Of</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="text-brand-body text-lg max-w-xl mx-auto">
              Explore author success stories from every genre, each one written, designed, and published with our team.
            </p>
          </FadeUp>
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

      <PortfolioGrid />

      <div className="bg-white py-6 border-t border-slate-100">
        <p className="text-center text-sm text-brand-muted">
          Looking for books in your genre?{" "}
          <Link href="/contact" className="text-primary font-bold hover:underline">Ask us for more examples</Link>
        </p>
      </div>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Behind the Success</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black">
                <span className="text-black">Success Stories </span><span className="text-primary">Worth Sharing</span>
              </h2>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-5">
            {successStories.map((s, i) => (
              <FadeUp key={s.name} delay={i * 0.1}>
                <div className="bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map(j => <Star key={j} size={14} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="font-[family-name:var(--font-playfair)] text-base italic text-brand-dark mb-5 leading-relaxed">
                    &quot;{s.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-xs shrink-0"
                      style={{ background: s.color }}
                    >
                      {s.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-brand-dark">{s.name}</div>
                      <div className="text-xs text-brand-muted">{s.title}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeUp>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CFFAFE] mb-6">
              Find Our Authors On
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Amazon KDP", "Apple Books", "Barnes & Noble", "Kobo", "Google Play Books", "Audible", "IngramSpark", "Findaway Voices", "Draft2Digital", "Scribd"].map(p => (
                <div key={p} className="bg-white/15 border border-white/25 hover:border-white/50 rounded-full px-5 py-2 text-sm font-semibold text-[#CFFAFE] hover:text-white transition-colors">
                  {p}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">
              Ready to Join These Authors?
            </h2>
            <p className="text-white/80 text-sm mb-8">
              Tell us about your idea, and we&apos;ll help you plan the path from first draft to published book.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-white/90 font-bold px-10 py-4 rounded-full shadow-xl transition-all"
              style={{ color: "#089bb2" }}
            >
              Start My Book <ArrowRight size={18} />
            </Link>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
