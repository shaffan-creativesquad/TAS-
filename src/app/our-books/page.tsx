import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Crown, Rocket, Lightbulb, TrendingUp,
  FileText, BarChart2, Target, Users, type LucideIcon,
} from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Our Books | The Author Success",
  description: "Eight kinds of authority book, one goal: build credibility, generate leads and grow your business.",
};

export const formats: {
  slug: string; title: string; tagline: string; desc: string;
  goal: string[]; chapters: number; weeks: string; badge: string | null;
  Icon: LucideIcon; accent: string;
}[] = [
  {
    slug: "authority-book",
    title: "Authority Books",
    tagline: "The definitive book for your niche",
    desc: "Your most comprehensive work — a full-length book that positions you as the leading voice in your industry.",
    goal: ["Credibility", "Category Authority"],
    chapters: 10,
    weeks: "14–18",
    badge: "Most Popular",
    Icon: Crown,
    accent: "#0891b2",
  },
  {
    slug: "founder-story",
    title: "Founder Story",
    tagline: "Your journey as your strongest asset",
    desc: "A narrative book that turns your founding story into a thought-leadership platform — the book investors, partners and clients read first.",
    goal: ["Personal Brand", "Credibility"],
    chapters: 8,
    weeks: "14–16",
    badge: null,
    Icon: Rocket,
    accent: "#0891b2",
  },
  {
    slug: "thought-leadership",
    title: "Thought-Leadership",
    tagline: "The book that earns you the stage",
    desc: "Opinionated, category-defining work that challenges conventional wisdom and earns media coverage and speaking invitations.",
    goal: ["Category Authority", "Speaking"],
    chapters: 9,
    weeks: "14–18",
    badge: null,
    Icon: Lightbulb,
    accent: "#0891b2",
  },
  {
    slug: "business-book",
    title: "Business Books",
    tagline: "Your methodology, made sellable",
    desc: "Structured around your proprietary framework — the book that codifies how you work and sells your consulting, coaching or program.",
    goal: ["Leads", "Sales Enablement"],
    chapters: 10,
    weeks: "14–18",
    badge: null,
    Icon: TrendingUp,
    accent: "#0891b2",
  },
  {
    slug: "professional-guide",
    title: "Professional Guides",
    tagline: "The trusted reference in your field",
    desc: "Practical, how-to books written for professionals in regulated industries — law, medicine, finance, accounting.",
    goal: ["Credibility", "Trust"],
    chapters: 8,
    weeks: "12–16",
    badge: null,
    Icon: FileText,
    accent: "#0891b2",
  },
  {
    slug: "research-report",
    title: "Research Reports",
    tagline: "Original data that earns press",
    desc: "Survey-based or proprietary research turned into a publishable report with PR distribution — the content type that earns backlinks and media mentions.",
    goal: ["PR", "Category Authority"],
    chapters: 6,
    weeks: "10–14",
    badge: "High PR Value",
    Icon: BarChart2,
    accent: "#0891b2",
  },
  {
    slug: "lead-gen-ebook",
    title: "Lead-Gen eBooks",
    tagline: "A guide that books consultations",
    desc: "A focused, high-value eBook designed to attract and convert your ideal client — built around one problem and one framework.",
    goal: ["Leads", "Sales Enablement"],
    chapters: 5,
    weeks: "6–8",
    badge: "Fastest Delivery",
    Icon: Target,
    accent: "#0891b2",
  },
  {
    slug: "case-study-book",
    title: "Case-Study Books",
    tagline: "Social proof your sales team uses",
    desc: "A curated collection of client transformation stories — used in enterprise sales, proposal stages and speaker pitches.",
    goal: ["Sales Enablement", "Trust"],
    chapters: 6,
    weeks: "10–12",
    badge: null,
    Icon: Users,
    accent: "#0891b2",
  },
];

const ladder = [
  { tier: "1", title: "Lead-Gen eBook",             time: "6–8 wks",   desc: "Fastest entry point. One focused guide that converts readers to consultations.",                slug: "lead-gen-ebook"    },
  { tier: "2", title: "Professional Guide",          time: "12–16 wks", desc: "A thorough, credibility-building reference for your industry or niche.",                        slug: "professional-guide" },
  { tier: "3", title: "Authority / Founder Book",   time: "14–18 wks", desc: "The flagship book that defines your category and generates the most long-term ROI.",            slug: "authority-book"    },
  { tier: "4", title: "Case-Study Book",            time: "10–12 wks", desc: "A collection of client wins — essential for enterprise sales and proposal stages.",             slug: "case-study-book"   },
  { tier: "5", title: "Research Report + Campaign", time: "12–20 wks", desc: "Original data + PR distribution. The highest-authority content format that exists.",            slug: "research-report"   },
];

export default function OurBooksPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/60 via-white to-slate-50/30 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
              Our Books
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.08] mb-6">
              <span className="text-black">Eight Kinds of Book.</span>
              <br />
              <span className="text-primary">One Goal: Authority.</span>
            </h1>
            <p className="text-brand-body text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              From a focused lead-gen guide to a full research report campaign — every format is designed to build your credibility and grow your business.
            </p>
            <p className="text-brand-muted text-sm">
              Not sure which format fits you?{" "}
              <Link href="/book-a-call" className="text-primary font-semibold underline underline-offset-2">
                Book a 30-min call
              </Link>{" "}
              — we&apos;ll tell you in the first 10 minutes.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── 8 FORMATS GRID ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {formats.map((f, i) => (
              <FadeUp key={f.slug} delay={i * 0.05}>
                <div className="group block h-full">
                  <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">
                    {/* Coloured top bar */}
                    <div className="h-1 w-full" style={{ background: f.accent }} />

                    <div className="p-5 flex-1 flex flex-col">
                      {/* Icon + badge row */}
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

                      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="text-xs text-brand-muted">
                          <span className="font-semibold text-slate-700">{f.chapters} chapters</span> · {f.weeks} wks
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {f.goal.map(g => (
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

      {/* ── AMBITION LADDER ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideLeft>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary block mb-3">The Ladder</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-slate-900 mb-4">
                From a Single Guide to a Full Authority Campaign
              </h2>
              <p className="text-brand-body mb-8">
                Start where you are. Each tier builds on the one before it — higher up means bigger investment and bigger reach.
              </p>
              <Link
                href="/book-a-call"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-all"
              >
                Find Your Tier <ArrowRight size={16} />
              </Link>
            </SlideLeft>

            <SlideRight>
              <div className="space-y-3">
                {ladder.map((item, i) => (
                  <div
                    key={item.slug}
                    className="flex items-start gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm"
                    style={{ marginLeft: `${i * 16}px` }}
                  >
                      <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shrink-0">
                        <span className="text-white text-xs font-black">{item.tier}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <div className="font-[family-name:var(--font-playfair)] font-bold text-slate-900 text-sm">{item.title}</div>
                          <span className="text-xs text-primary font-semibold whitespace-nowrap">{item.time}</span>
                        </div>
                        <p className="text-brand-muted text-xs mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                  </div>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <FadeUp>
            <div className="text-6xl text-primary/20 font-serif leading-none mb-4">&ldquo;</div>
            <blockquote className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-slate-900 mb-5 leading-snug">
              The book paid for itself in the first two consulting engagements.
            </blockquote>
            <cite className="text-brand-muted text-sm not-italic">— Client, Founder &amp; Consultant</cite>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">
              Not Sure Which Book Is Right for You?
            </h2>
            <p className="text-white/70 mb-8">A 30-minute strategy call places you on the ladder and gives you a book concept to take away.</p>
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
