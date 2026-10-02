import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Who We Help | The Author Success",
  description: "Authority books for founders, consultants, coaches, professional services firms and B2B companies. Find your vertical and see what we build.",
};

const verticals = [
  {
    id: "founders-ceos",
    label: "Founders & CEOs",
    icon: "🏢",
    headline: "The Book That Tells Your Story Before You Enter the Room.",
    sub: "Investors read it before meetings. Clients read it before engagements. Journalists quote it. A founder book is the highest-leverage credibility asset you can own.",
    pipeline: ["Founder Story", "Credibility", "Press Coverage", "Inbound Deals"],
    books: [
      { title: "The Founding Vision",           badge: "Category Defining" },
      { title: "Built to Last",                 badge: "Amazon #1" },
      { title: "The Executive Framework",       badge: "10K+ Copies" },
    ],
    features: [
      "Ghostwritten narrative in your voice",
      "Hardcover + eBook + audiobook",
      "Launch PR kit and media pitches",
      "Executive bio and speaker one-sheet",
    ],
    cta: "/our-books/founder-story",
    ctaLabel: "See Founder Story Books",
    slug: "founders-ceos",
  },
  {
    id: "consultants",
    label: "Consultants",
    icon: "🎯",
    headline: "Stop Relying on Referrals. Write the Book That Brings Clients to You.",
    sub: "Your methodology deserves a book. Once it's published, it generates warm inbound leads, raises your positioning and sells your high-ticket engagements.",
    pipeline: ["Authority Book", "Inbound Leads", "Premium Enquiries", "High-Ticket Clients"],
    books: [
      { title: "The 7-Figure Consulting Framework", badge: "Amazon #1"     },
      { title: "The 90-Day Transformation",         badge: "10K Copies"    },
      { title: "Your Signature Method",             badge: "Speaker Invite" },
    ],
    features: [
      "Framework extraction and naming",
      "Lead-gen optimised CTA structure",
      "Case studies from your practice",
      "LinkedIn content series (52 posts)",
    ],
    cta: "/our-books/authority-book",
    ctaLabel: "See Authority Books",
    slug: "consultants",
  },
  {
    id: "coaches-speakers",
    label: "Coaches & Speakers",
    icon: "🎤",
    headline: "The Book That Gets You Booked.",
    sub: "Conference organisers, podcast hosts and event bookers look for published authors first. A well-positioned book turns speaking from something you chase into something you get offered.",
    pipeline: ["Signature Book", "Speaking Enquiries", "Podcast Invites", "Program Launches"],
    books: [
      { title: "The Inner Game of Leadership",  badge: "TEDx Speaker"  },
      { title: "Unblock: The Coaching Method",  badge: "5K+ Copies"    },
      { title: "Your Transformational Journey", badge: "Program Launch" },
    ],
    features: [
      "Speaker abstract and stage biography",
      "Podcast pitch kit",
      "Companion workbook design",
      "Online course content extraction",
    ],
    cta: "/our-books/thought-leadership",
    ctaLabel: "See Thought-Leadership Books",
    slug: "coaches-speakers",
  },
  {
    id: "professionals",
    label: "Professional Services",
    icon: "⚖️",
    headline: "Build the Credibility That Justifies Premium Fees.",
    sub: "Lawyers, accountants, financial advisors and clinicians who publish build trust faster, attract better clients and command higher rates — in every market.",
    pipeline: ["Professional Guide", "Client Trust", "Referral Velocity", "Premium Engagements"],
    books: [
      { title: "The Estate Planning Playbook",    badge: "Client Gift"   },
      { title: "Business Exit Strategies",        badge: "Firm Referrals" },
      { title: "The Patient's Financial Roadmap", badge: "5-Star Rating" },
    ],
    features: [
      "Compliance review by industry specialist",
      "Client welcome guide version",
      "Practice referral integration",
      "Regulatory disclaimer management",
    ],
    cta: "/our-books/professional-guide",
    ctaLabel: "See Professional Guides",
    slug: "professionals",
  },
  {
    id: "businesses",
    label: "B2B & SaaS",
    icon: "📡",
    headline: "The Research Report That Makes Your Category.",
    sub: "B2B companies and SaaS businesses that publish original research earn media mentions, conference invitations and the kind of brand authority that paid media can't buy.",
    pipeline: ["Research Report", "PR Coverage", "Category Leadership", "Enterprise Sales"],
    books: [
      { title: "State of B2B Sales 2026",           badge: "40 Press Mentions" },
      { title: "The SaaS Benchmark Report",          badge: "500+ Downloads"    },
      { title: "10 Companies Transforming Healthcare", badge: "Award Winning"   },
    ],
    features: [
      "Survey design and field management",
      "Data visualisation and infographics",
      "40+ media distribution",
      "LinkedIn data post series",
    ],
    cta: "/our-books/research-report",
    ctaLabel: "See Research Reports",
    slug: "businesses",
  },
];

export default function WhoWeHelpPage() {
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
              Who We Help
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.08] mb-6">
              <span className="text-black">Books for People</span>
              <br />
              <span className="text-primary">Whose Expertise Is the Product.</span>
            </h1>
            <p className="text-brand-body text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              We work with five types of professional. Pick yours to see the books we build, the pipeline it creates and the results our clients get.
            </p>

            {/* Quick-jump chips */}
            <div className="flex flex-wrap gap-2.5 justify-center">
              {verticals.map(v => (
                <a
                  key={v.id}
                  href={`#${v.id}`}
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-primary hover:bg-cyan-50 text-slate-800 hover:text-primary text-sm font-semibold px-4 py-2 rounded-full transition-all"
                >
                  <span>{v.icon}</span> {v.label}
                </a>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── VERTICALS ── */}
      {verticals.map((v, idx) => (
        <section
          key={v.id}
          id={v.id}
          className={`py-24 scroll-mt-20 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-14 items-start ${idx % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>

              {/* ── Text side ── */}
              <SlideLeft delay={0}>
                <div
                  className="inline-flex items-center gap-2 text-white rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5"
                  style={{ background: "#0891B2" }}
                >
                  <span className="text-base">{v.icon}</span> {v.label}
                </div>

                <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight">
                  {v.headline}
                </h2>
                <p className="text-brand-body mb-6 leading-relaxed">{v.sub}</p>

                {/* Pipeline flow */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  {v.pipeline.map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="bg-white border border-slate-200 text-slate-800 font-semibold text-xs px-3 py-1.5 rounded-full shadow-sm">{step}</span>
                      {i < v.pipeline.length - 1 && <span className="text-primary/40 font-light">→</span>}
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {v.features.map(f => (
                    <div key={f} className="flex items-start gap-2 text-sm text-slate-800">
                      <CheckCircle size={15} className="text-primary shrink-0 mt-0.5" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={v.cta}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3.5 rounded-full shadow-lg transition-all"
                  >
                    {v.ctaLabel} <ArrowRight size={16} />
                  </Link>
                  <Link
                    href={`/who-we-help/${v.slug}`}
                    className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-900 text-slate-800 font-bold px-6 py-3.5 rounded-full transition-all"
                  >
                    Full Detail Page
                  </Link>
                </div>
              </SlideLeft>

              {/* ── Book cards ── */}
              <SlideRight delay={0.1}>
                <div className="space-y-4">
                  {v.books.map((book, i) => (
                    <div
                      key={book.title}
                      className="flex items-center gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
                    >
                      {/* Mini book spine */}
                      <div
                        className="w-12 h-16 rounded-lg flex items-center justify-center text-white text-xs font-black shadow-md shrink-0"
                        style={{ background: `linear-gradient(135deg, #0891B2, #0369a1)` }}
                      >
                        📖
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-[family-name:var(--font-playfair)] font-bold text-slate-900 text-sm leading-tight">{book.title}</div>
                        <span className="inline-block mt-1.5 text-[10px] font-bold bg-cyan-50 text-primary px-2 py-0.5 rounded-full">{book.badge}</span>
                      </div>
                    </div>
                  ))}

                  {/* Quote card */}
                  <div className="bg-primary rounded-2xl p-6 text-white">
                    <div className="text-3xl text-white/20 font-serif mb-2">&ldquo;</div>
                    <p className="font-[family-name:var(--font-playfair)] font-bold text-base leading-snug mb-3">
                      The book paid for itself in the first two engagements.
                    </p>
                    <cite className="text-white/50 text-xs not-italic">— {v.label} Client</cite>
                  </div>
                </div>
              </SlideRight>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">
              Ready to Turn Your Expertise Into Authority?
            </h2>
            <p className="text-white/70 mb-8">30-minute strategy call. No obligation. You leave with a book concept tailored to your vertical.</p>
            <Link
              href="/book-a-call"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-10 py-4 rounded-full shadow-lg transition-all text-lg"
            >
              Book a Strategy Call <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
