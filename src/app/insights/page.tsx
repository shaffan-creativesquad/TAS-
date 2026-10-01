import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Mail } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Insights for Authors | The Author Success",
  description: "Expert advice on writing, publishing, and building your author platform. Articles, guides, and strategies from The Author Success team.",
};

const COLOR = "#0891b2";

const articles = [
  {
    cat: "Writing",
    title: "How to Write a Book That Actually Sells",
    excerpt: "Most books fail not because of bad writing, but bad positioning. Here's the framework we use with 2,500+ authors.",
    date: "Oct 1, 2026",
    initials: "TAS",
  },
  {
    cat: "Publishing",
    title: "Self-Publishing vs Traditional: The Real Numbers",
    excerpt: "A data-driven breakdown of royalties, timelines, and control — so you can make the right choice for your goals.",
    date: "Sep 22, 2026",
    initials: "TAS",
  },
  {
    cat: "Marketing",
    title: "The First 30 Days After Your Book Launches",
    excerpt: "The launch window is everything. Here's the exact playbook our marketing team uses to hit Amazon's algorithm.",
    date: "Sep 14, 2026",
    initials: "TAS",
  },
  {
    cat: "Strategy",
    title: "Why Every Consultant Needs a Book (With Numbers)",
    excerpt: "We tracked 400 consultant clients for 3 years. The ones with books earn 3× more inbound. Here's why.",
    date: "Sep 5, 2026",
    initials: "TAS",
  },
  {
    cat: "Writing",
    title: "How to Find Your Author Voice in 5 Sessions",
    excerpt: "Voice is the hardest thing to teach — and the most important. Our ghostwriters use these five exercises.",
    date: "Aug 28, 2026",
    initials: "TAS",
  },
  {
    cat: "Publishing",
    title: "The Complete Guide to Amazon KDP in 2026",
    excerpt: "Distribution, pricing, categories, keywords — everything you need to launch on Amazon and actually rank.",
    date: "Aug 19, 2026",
    initials: "TAS",
  },
];

const catColor: Record<string, string> = {
  Writing: "bg-blue-50 text-blue-600",
  Publishing: "bg-purple-50 text-purple-600",
  Marketing: "bg-orange-50 text-orange-600",
  Strategy: "bg-green-50 text-green-600",
};

export default function InsightsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-white">
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
              The Author Success Blog
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-5">
              <span className="text-black">Insights for </span>
              <span className="text-primary">Authors</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
              Expert advice on writing, publishing, and building your author platform.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* FILTER CHIPS */}
      <section className="py-6 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {["All", "Writing", "Publishing", "Marketing", "Strategy"].map((chip) => (
              <span
                key={chip}
                className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-colors ${
                  chip === "All"
                    ? "bg-cyan-50 text-primary border border-primary/30"
                    : "bg-slate-100 text-slate-600 border border-transparent hover:border-slate-300"
                }`}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-xs font-bold uppercase tracking-[0.18em] mb-8 text-primary">Featured Article</div>
          </FadeUp>
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
            <SlideLeft>
              <div className="h-72 lg:h-full min-h-[300px] bg-primary/10 flex items-center justify-center">
                <BookOpen size={64} className="text-primary opacity-60" />
              </div>
            </SlideLeft>
            <SlideRight delay={0.1}>
              <div className="p-8 lg:p-10">
                <span className="bg-cyan-50 text-primary text-xs font-black uppercase px-3 py-1 rounded-full inline-block mb-4">Strategy</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-black text-slate-800 mb-4 leading-tight">
                  The Author&apos;s Roadmap: From Idea to Bestseller
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Most authors begin with passion and end with a manuscript that never reaches its audience. In this in-depth guide, we break down the seven stages every successful book passes through — and how to navigate each one without wasting time or money.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black">
                <span className="text-black">Latest </span>
                <span className="text-primary">Articles</span>
              </h2>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <ScaleIn key={article.title} delay={i * 0.08}>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
                  <span
                    className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full inline-block mb-4 w-fit ${catColor[article.cat] ?? "bg-slate-100 text-slate-600"}`}
                  >
                    {article.cat}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] font-black text-base text-slate-800 mb-3 leading-snug flex-1">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white font-bold text-[10px]">
                        {article.initials}
                      </div>
                      <span className="text-xs text-slate-500">{article.date}</span>
                    </div>
                    <Link href="#" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
                      Read <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER STRIP */}
      <section className="py-16" style={{ background: "#0891b2" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-5">
              <Mail size={22} className="text-white" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-white mb-3">
              Get Weekly Insights
            </h2>
            <p className="text-white/80 mb-8">
              Join 8,000+ authors getting actionable publishing advice every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 rounded-full text-sm text-slate-800 outline-none border-2 border-transparent focus:border-white/50 bg-white"
              />
              <button
                type="button"
                className="bg-white text-primary font-bold px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4">
              <span className="text-black">Ready to Write </span>
              <span className="text-primary">Your Book?</span>
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              Stop reading about it. Book a free strategy call and leave with a clear publishing roadmap built for your goals.
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
