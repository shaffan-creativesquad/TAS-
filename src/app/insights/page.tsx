import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Mail } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Insights | The Author Success",
  description: "Strategy, economics and content intelligence for founders, consultants and professionals building authority through books.",
};

const COLOR = "#0891b2";

const articles = [
  {
    cat: "Strategy",
    title: "Why Every Consultant Needs a Book (With Numbers)",
    excerpt: "We tracked 400 consultant clients for 3 years. The ones with books earn 3× more inbound. Here's the data.",
    date: "Oct 1, 2026",
    initials: "TAS",
    readTime: "7 min",
  },
  {
    cat: "Economics",
    title: "The Real ROI of a Business Book",
    excerpt: "A data-driven breakdown of what a published authority book actually returns — in leads, fees and speaking gigs.",
    date: "Sep 22, 2026",
    initials: "TAS",
    readTime: "9 min",
  },
  {
    cat: "Content Engine",
    title: "One Book = 12 Months of Content: The Exact Playbook",
    excerpt: "How to extract 52 LinkedIn posts, 24 podcast pitches and a year of email sequences from a single manuscript.",
    date: "Sep 14, 2026",
    initials: "TAS",
    readTime: "6 min",
  },
  {
    cat: "Lead Generation",
    title: "How to Build a Client Funnel Around Your Book",
    excerpt: "The architecture behind a book that generates warm inbound consultations — not just Amazon sales.",
    date: "Sep 5, 2026",
    initials: "TAS",
    readTime: "8 min",
  },
  {
    cat: "Frameworks",
    title: "Why Every Firm Needs a Signature Framework",
    excerpt: "Named methodologies win business. Here's how to extract, name and package yours in a way clients remember.",
    date: "Aug 28, 2026",
    initials: "TAS",
    readTime: "5 min",
  },
  {
    cat: "Strategy",
    title: "How CEOs Use Books to Build Category Authority",
    excerpt: "The playbook used by the founders who define their industries — not just compete in them.",
    date: "Aug 19, 2026",
    initials: "TAS",
    readTime: "7 min",
  },
  {
    cat: "Economics",
    title: "Book vs Whitepaper: Which Builds More B2B Authority?",
    excerpt: "We compared 200 clients who published each. The results are not what most marketers expect.",
    date: "Aug 10, 2026",
    initials: "TAS",
    readTime: "6 min",
  },
  {
    cat: "Lead Generation",
    title: "Turn Your Book Into a Consultation Funnel",
    excerpt: "The CTA architecture, landing page structure and follow-up sequence that turns readers into booked calls.",
    date: "Aug 1, 2026",
    initials: "TAS",
    readTime: "8 min",
  },
  {
    cat: "Content Engine",
    title: "20 Years of Experience → 200 Pages: How to Extract Your Expertise",
    excerpt: "The interview framework we use to surface frameworks, stories and insights from subject-matter experts.",
    date: "Jul 22, 2026",
    initials: "TAS",
    readTime: "10 min",
  },
];

const catColor: Record<string, string> = {
  Strategy:         "bg-green-50 text-green-700",
  Economics:        "bg-amber-50 text-amber-700",
  "Content Engine": "bg-blue-50 text-blue-700",
  "Lead Generation":"bg-rose-50 text-rose-700",
  Frameworks:       "bg-purple-50 text-purple-700",
};

const readingPaths = [
  {
    role: "For Founders",
    icon: "🏢",
    articles: [
      "How CEOs Use Books to Build Category Authority",
      "The Real ROI of a Business Book",
      "Why Every Firm Needs a Signature Framework",
    ],
    cta: "/who-we-help/founders-ceos",
  },
  {
    role: "For Consultants",
    icon: "🎯",
    articles: [
      "Why Every Consultant Needs a Book (With Numbers)",
      "How to Build a Client Funnel Around Your Book",
      "Turn Your Book Into a Consultation Funnel",
    ],
    cta: "/who-we-help/consultants",
  },
  {
    role: "For Professional Services",
    icon: "⚖️",
    articles: [
      "Book vs Whitepaper: Which Builds More B2B Authority?",
      "The Real ROI of a Business Book",
      "Why Every Firm Needs a Signature Framework",
    ],
    cta: "/who-we-help/professionals",
  },
  {
    role: "For B2B Companies",
    icon: "📡",
    articles: [
      "One Book = 12 Months of Content: The Exact Playbook",
      "How CEOs Use Books to Build Category Authority",
      "20 Years of Experience → 200 Pages: How to Extract Your Expertise",
    ],
    cta: "/who-we-help/businesses",
  },
];

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
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white"
              style={{ background: COLOR }}
            >
              Insights
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-5">
              <span className="text-black">Strategy, Economics &amp; </span>
              <span className="text-primary">Content Intelligence</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto mb-6">
              For founders, consultants and professionals building authority through books. Not tips for aspiring writers.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* TOPIC FILTER CHIPS */}
      <section className="py-6 bg-white border-b border-slate-100 sticky top-[68px] z-30 backdrop-blur-md bg-white/95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {["All", "Strategy", "Economics", "Content Engine", "Lead Generation", "Frameworks"].map((chip) => (
              <span
                key={chip}
                className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-colors ${
                  chip === "All"
                    ? "bg-primary text-white"
                    : "bg-slate-100 text-slate-600 border border-transparent hover:bg-cyan-50 hover:text-primary hover:border-primary/20"
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
                <span className="text-black">All </span>
                <span className="text-primary">Insights</span>
              </h2>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <ScaleIn key={article.title} delay={i * 0.06}>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full">
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
                      <span className="text-xs text-slate-400">· {article.readTime} read</span>
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

      {/* READING PATHS BY ROLE */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary block mb-3">Start Here</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-slate-900 mb-3">
              Pick Your Role. Read Three Essays. Then Talk to Us.
            </h2>
            <p className="text-brand-body max-w-xl mx-auto">Curated reading paths — three articles, one strategy call.</p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {readingPaths.map((path, i) => (
              <FadeUp key={path.role} delay={i * 0.08}>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md hover:border-primary/20 transition-all h-full flex flex-col">
                  <div className="text-3xl mb-3">{path.icon}</div>
                  <div className="font-[family-name:var(--font-playfair)] font-bold text-slate-900 mb-4">{path.role}</div>
                  <ol className="space-y-2.5 flex-1">
                    {path.articles.map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-brand-body leading-relaxed">
                        <span className="w-4 h-4 bg-primary/10 text-primary rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">{j + 1}</span>
                        {a}
                      </li>
                    ))}
                  </ol>
                  <Link
                    href={path.cta}
                    className="mt-5 pt-4 border-t border-slate-200 text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    See {path.role.replace("For ", "")} Page <ArrowRight size={12} />
                  </Link>
                </div>
              </FadeUp>
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
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">
              Ready to Write Your Book?
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Stop reading about it. Book a free strategy call and leave with a clear publishing roadmap built for your goals.
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
