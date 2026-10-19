import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Mail, Users, Briefcase, Building2, Stethoscope } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Insights | The Author Success",
  description: "Practical ideas for founders, consultants, and professionals who want their book to build authority and grow their business.",
};

const COLOR = "#0891b2";

const articles = [
  {
    cat: "Strategy",
    title: "Why Every Consultant Should Write a Book",
    excerpt: "How a book helps consultants stand out, earn trust, and bring in clients without relying only on referrals.",
    date: "Oct 12, 2026",
    readTime: "5 min",
  },
  {
    cat: "ROI & Costs",
    title: "What a Business Book Really Returns",
    excerpt: "A practical look at the value a published book can bring in leads, speaking invitations, and client fees.",
    date: "Oct 10, 2026",
    readTime: "6 min",
  },
  {
    cat: "Content",
    title: "One Book, a Year of Content",
    excerpt: "How to turn a single manuscript into LinkedIn posts, podcast pitches, and email content for months.",
    date: "Oct 8, 2026",
    readTime: "4 min",
  },
  {
    cat: "Lead Generation",
    title: "How to Build a Client Funnel Around Your Book",
    excerpt: "The simple structure that turns readers into warm inquiries, not just Amazon sales.",
    date: "Oct 6, 2026",
    readTime: "7 min",
  },
  {
    cat: "Frameworks",
    title: "Why Every Firm Needs a Signature Framework",
    excerpt: "How to name and package your method so clients understand it and remember it.",
    date: "Oct 4, 2026",
    readTime: "5 min",
  },
  {
    cat: "Strategy",
    title: "How CEOs Use Books to Lead Their Industry",
    excerpt: "What founders do differently when they use a book to shape their market, not just compete in it.",
    date: "Oct 2, 2026",
    readTime: "6 min",
  },
  {
    cat: "ROI & Costs",
    title: "Book or Whitepaper: Which Builds More Authority?",
    excerpt: "Comparing two popular B2B content formats, and when each one makes the most sense.",
    date: "Sep 29, 2026",
    readTime: "5 min",
  },
  {
    cat: "Lead Generation",
    title: "Turn Your Book Into a Consultation Funnel",
    excerpt: "Calls to action, landing pages, and follow-ups that turn interested readers into booked calls.",
    date: "Sep 26, 2026",
    readTime: "6 min",
  },
  {
    cat: "Content",
    title: "From Years of Experience to a Finished Book",
    excerpt: "The interview process we use to uncover the stories, ideas, and lessons inside your expertise.",
    date: "Sep 23, 2026",
    readTime: "7 min",
  },
];

const catColor: Record<string, string> = {
  Strategy:         "bg-green-50 text-green-700",
  "ROI & Costs":    "bg-amber-50 text-amber-700",
  Content:          "bg-blue-50 text-blue-700",
  "Lead Generation":"bg-rose-50 text-rose-700",
  Frameworks:       "bg-purple-50 text-purple-700",
};

const readingPaths = [
  {
    role: "Founders & CEOs",
    Icon: Building2,
    articles: [
      "What Founders Gain by Publishing First",
      "Is a Business Book Worth the Investment?",
      "Capturing Decades of Expertise in One Book",
    ],
    cta: "/who-we-help/founders-ceos",
    ctaLabel: "Explore Founder Books",
  },
  {
    role: "Consultants",
    Icon: Briefcase,
    articles: [
      "The Consultant's Case for Writing a Book",
      "From Reader to Client: Mapping the Journey",
      "Naming Your Method So Clients Remember It",
    ],
    cta: "/who-we-help/consultants",
    ctaLabel: "Explore Consultant Books",
  },
  {
    role: "Professionals",
    Icon: Stethoscope,
    articles: [
      "Books vs Reports: Choosing the Right Format",
      "Pages That Book Calls: Smart Book CTAs",
      "Is a Business Book Worth the Investment?",
    ],
    cta: "/who-we-help/professionals",
    ctaLabel: "Explore Professional Books",
  },
  {
    role: "Businesses",
    Icon: Users,
    articles: [
      "Turning One Manuscript Into Months of Posts",
      "What Founders Gain by Publishing First",
      "Books vs Reports: Choosing the Right Format",
    ],
    cta: "/who-we-help/businesses",
    ctaLabel: "Explore Business Books",
  },
];

export default function InsightsPage() {
  return (
    <>
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
              <span className="text-black">Write Smarter. Publish Better. </span>
              <span className="text-primary">Grow Faster.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto mb-6">
              Practical ideas for founders, consultants, and professionals who want their book to build authority and grow their business.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-6 bg-white border-b border-slate-100 sticky top-[68px] z-30 backdrop-blur-md bg-white/95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {["All", "Strategy", "ROI & Costs", "Content", "Lead Generation", "Frameworks"].map((chip) => (
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
                  From Idea to Published Book: The Complete Roadmap
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Plenty of great book ideas never reach readers. This guide walks through every stage of turning an idea into a published book, and how to move through each step without wasting time or money.
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

      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black">
                <span className="text-black">Worth </span>
                <span className="text-primary">Reading</span>
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
                        TAS
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

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary block mb-3">Starting Point</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-slate-900 mb-3">
                Find Your Path. Start Reading.
              </h2>
              <p className="text-brand-body max-w-xl mx-auto">Read what matters to you, then book a free call.</p>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {readingPaths.map((path, i) => (
              <FadeUp key={path.role} delay={i * 0.08}>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md hover:border-primary/20 transition-all h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <path.Icon size={18} className="text-primary" />
                  </div>
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
                    {path.ctaLabel} <ArrowRight size={12} />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "#0891b2" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-5">
              <Mail size={22} className="text-white" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-white mb-3">
              Get Fresh Insights Weekly
            </h2>
            <p className="text-white/80 mb-8">
              Practical publishing and authority-building advice, sent straight to your inbox.
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

      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">
              Done Reading? Let&apos;s Start Writing.
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Book a free strategy call and leave with a clear plan built around your goals.
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
