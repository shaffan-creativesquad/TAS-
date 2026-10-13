import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Crown, Rocket, Lightbulb, TrendingUp,
  FileText, BarChart2, Target, Users, type LucideIcon,
} from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Our Books | The Author Success",
  description: "Explore the formats behind the books published by our authors, from quick guides to full-length flagship titles, each built to grow your credibility.",
};

export const formats: {
  slug: string; title: string; tagline: string; desc: string;
  bestFor: string; tags: string[]; badge: string | null;
  Icon: LucideIcon; accent: string;
}[] = [
  {
    slug: "flagship-book",
    title: "Flagship Books",
    tagline: "Your complete expertise, in one book",
    desc: "A full-length book that brings together everything you know and positions you as a go-to name in your field.",
    bestFor: "Experts ready to lead their market",
    tags: ["Authority", "Reputation"],
    badge: "FLAGSHIP",
    Icon: Crown,
    accent: "#0891b2",
  },
  {
    slug: "founder-story",
    title: "Founder Story Books",
    tagline: "The journey behind your company",
    desc: "Your story of building something from the ground up, told in a way that earns trust from investors, partners, and clients.",
    bestFor: "Founders and CEOs",
    tags: ["Personal Brand", "Trust"],
    badge: null,
    Icon: Rocket,
    accent: "#0891b2",
  },
  {
    slug: "big-idea-book",
    title: "Big Idea Books",
    tagline: "Bold ideas worth talking about",
    desc: "A book built around a fresh point of view that challenges the usual thinking and gets people talking.",
    bestFor: "Speakers and industry voices",
    tags: ["Visibility", "Speaking"],
    badge: null,
    Icon: Lightbulb,
    accent: "#0891b2",
  },
  {
    slug: "method-book",
    title: "Method Books",
    tagline: "How you work, explained clearly",
    desc: "Your process laid out step by step, so readers understand your approach and want to work with you.",
    bestFor: "Consultants and coaches",
    tags: ["Leads", "Sales Support"],
    badge: null,
    Icon: TrendingUp,
    accent: "#0891b2",
  },
  {
    slug: "expert-guide",
    title: "Expert Guides",
    tagline: "Clear answers for your clients",
    desc: "Practical guides for professionals in fields like law, medicine, finance, and accounting, written in plain language.",
    bestFor: "Professionals and practices",
    tags: ["Trust", "Education"],
    badge: null,
    Icon: FileText,
    accent: "#0891b2",
  },
  {
    slug: "research-report",
    title: "Research Reports",
    tagline: "Fresh data people want to quote",
    desc: "Original research turned into a polished report that gives journalists and industry leaders a reason to mention your brand.",
    bestFor: "B2B companies",
    tags: ["Media", "Authority"],
    badge: "PR-FRIENDLY",
    Icon: BarChart2,
    accent: "#0891b2",
  },
  {
    slug: "quick-start-ebook",
    title: "Quick-Start eBooks",
    tagline: "One problem, one clear solution",
    desc: "A short, focused eBook that solves a single problem for your ideal reader and invites them to take the next step.",
    bestFor: "Building leads quickly",
    tags: ["Leads", "Growth"],
    badge: "QUICK START",
    Icon: Target,
    accent: "#0891b2",
  },
  {
    slug: "client-story-book",
    title: "Client Story Books",
    tagline: "Real results, told as stories",
    desc: "A collection of client success stories your team can share in sales meetings, proposals, and presentations.",
    bestFor: "Sales teams and agencies",
    tags: ["Proof", "Sales Support"],
    badge: null,
    Icon: Users,
    accent: "#0891b2",
  },
];

const ladder = [
  { tier: "01", title: "Quick-Start eBook",          desc: "A simple starting point that brings in interested readers."                                       },
  { tier: "02", title: "Expert Guide",                desc: "A trusted resource that builds your reputation."                                                  },
  { tier: "03", title: "Flagship or Founder Book",   desc: "Your signature book and strongest credibility asset."                                             },
  { tier: "04", title: "Client Story Book",          desc: "Proof of results your team can share anywhere."                                                   },
  { tier: "05", title: "Research Report & Campaign", desc: "Original insights paired with media outreach for the widest reach."                               },
];

export default function OurBooksPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/60 via-white to-slate-50/30 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
              Book Formats
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.08] mb-6">
              <span className="text-black">Find the Book That</span>
              <br />
              <span className="text-primary">Fits Your Goals</span>
            </h1>
            <p className="text-brand-body text-lg leading-relaxed max-w-2xl mx-auto mb-4">
              Explore the formats behind the books published by our authors, from quick guides to full-length flagship titles, each built to grow your credibility.
            </p>
            <p className="text-brand-muted text-sm">
              Unsure where to start?{" "}
              <Link href="/book-a-call" className="text-primary font-semibold underline underline-offset-2">
                Book a free call
              </Link>
              , and we&apos;ll help you choose.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {formats.map((f, i) => (
              <FadeUp key={f.slug} delay={i * 0.05}>
                <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">
                  <div className="h-1 w-full" style={{ background: f.accent }} />
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
                        style={{ background: `${f.accent}18` }}
                      >
                        <f.Icon size={20} style={{ color: f.accent }} strokeWidth={1.75} />
                      </div>
                      {f.badge && (
                        <span
                          className="text-[10px] font-bold text-white px-2.5 py-1 rounded-full whitespace-nowrap"
                          style={{ background: f.accent }}
                        >
                          {f.badge}
                        </span>
                      )}
                    </div>

                    <div className="font-[family-name:var(--font-playfair)] text-slate-900 text-base font-bold leading-tight mb-1">
                      {f.title}
                    </div>
                    <div className="text-xs font-semibold mb-3" style={{ color: f.accent }}>
                      {f.tagline}
                    </div>

                    <p className="text-brand-muted text-sm leading-relaxed flex-1">{f.desc}</p>

                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <div className="text-xs text-brand-muted mb-2">
                        <span className="font-semibold text-slate-600">Best for:</span> {f.bestFor}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {f.tags.map(g => (
                          <span key={g} className="text-[10px] font-semibold bg-cyan-50 text-primary px-2 py-0.5 rounded-full">{g}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideLeft>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary block mb-3">Level Up</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-slate-900 mb-4">
                  Every Big Author Started With One Book
                </h2>
                <p className="text-brand-body mb-8">
                  Begin with the format that fits your goals today. Each step adds to your self-published book portfolio and gives you more reach as you grow.
                </p>
                <Link
                  href="/book-a-call"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-all"
                >
                  Help Me Choose <ArrowRight size={16} />
                </Link>
              </div>
            </SlideLeft>

            <SlideRight>
              <div className="space-y-3">
                {ladder.map((item, i) => (
                  <div
                    key={item.tier}
                    className="flex items-start gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm"
                    style={{ marginLeft: `${i * 16}px` }}
                  >
                    <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-black">{item.tier}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-[family-name:var(--font-playfair)] font-bold text-slate-900 text-sm">{item.title}</div>
                      <p className="text-brand-muted text-xs mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <FadeUp>
            <div className="text-6xl text-primary/20 font-serif leading-none mb-4">&ldquo;</div>
            <blockquote className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-slate-900 mb-5 leading-snug">
              The right format turns a good idea into a book that works.
            </blockquote>
            <cite className="text-brand-muted text-sm not-italic">— The Author Success Team</cite>
          </FadeUp>
        </div>
      </section>

      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">
              Still Deciding? We&apos;ll Help You Pick.
            </h2>
            <p className="text-white/80 mb-8">A free strategy call helps you find the right format and leaves you with a book idea to build on.</p>
            <Link
              href="/book-a-call"
              className="inline-flex items-center gap-2 bg-white hover:bg-white/90 font-bold px-10 py-4 rounded-full shadow-lg transition-all text-lg"
              style={{ color: "#0891b2" }}
            >
              Book a Strategy Call <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
