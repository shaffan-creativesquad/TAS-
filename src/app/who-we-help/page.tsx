import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Building2, Target, Mic2, Scale, Network, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Who We Help | The Author Success",
  description: "Our book publishing services for authors fit who you are and what you want your book to do. Find your path below.",
};

type Vertical = {
  id: string;
  label: string;
  Icon: LucideIcon;
  headline: string;
  sub: string;
  pipeline: string[];
  books: { title: string; badge: string }[];
  features: string[];
  quote: string;
  quoteBy: string;
  slug: string;
  ctaLabel: string;
};

const verticals: Vertical[] = [
  {
    id: "founders-ceos",
    label: "Founders & CEOs",
    Icon: Building2,
    headline: "Let Your Book Make the Introduction",
    sub: "A book lets you share your story, your vision, and what matters to you, helping investors, partners, and clients get to know you before you meet.",
    pipeline: ["Your Story", "Trust", "Visibility", "New Opportunities"],
    books: [
      { title: "Founder Story Books",        badge: "FOUNDER STORY"     },
      { title: "Leadership & Strategy Books", badge: "THOUGHT LEADERSHIP" },
      { title: "Legacy & Memoir Books",       badge: "LEGACY"            },
    ],
    features: [
      "Ghostwriting in your voice",
      "Print, eBook, and audiobook editions",
      "Launch and media support",
      "Author bio and speaker profile",
    ],
    quote: "The book helped me communicate my vision and build trust with potential partners.",
    quoteBy: "Founder & CEO",
    slug: "founders-ceos",
    ctaLabel: "See Founder Books",
  },
  {
    id: "consultants",
    label: "Consultants",
    Icon: Target,
    headline: "Write the Book That Makes Clients Choose You First",
    sub: "A book explains your method before the first call, so prospects show up ready to work with you. It helps you stand out in a crowded market and win clients without depending only on referrals.",
    pipeline: ["Your Method", "Credibility", "Warm Leads", "Better Clients"],
    books: [
      { title: "Framework Books",       badge: "SIGNATURE METHOD"  },
      { title: "Case Study Books",      badge: "CLIENT LESSONS"    },
      { title: "Industry Insight Books", badge: "THOUGHT LEADERSHIP" },
    ],
    features: [
      "Framework development and naming",
      "Real client case studies",
      "Calls to action that bring in leads",
      "LinkedIn content from your chapters",
    ],
    quote: "My book paid off by helping potential clients understand my expertise before our first call.",
    quoteBy: "Business Consultant",
    slug: "consultants",
    ctaLabel: "See Consultant Books",
  },
  {
    id: "coaches-speakers",
    label: "Coaches & Speakers",
    Icon: Mic2,
    headline: "Inspire More People With One Book",
    sub: "Having a published book can help you get noticed by event organizers and podcast hosts, giving you more chances to share your ideas and speak to new audiences.",
    pipeline: ["Your Message", "Speaking Invites", "Podcast Features", "Program Growth"],
    books: [
      { title: "Signature Method Books",    badge: "SIGNATURE METHOD" },
      { title: "Personal Growth Books",     badge: "SELF-HELP"        },
      { title: "Keynote-to-Book Projects",  badge: "KEYNOTE TO BOOK"  },
    ],
    features: [
      "Speaker bio and talk descriptions",
      "Podcast pitch materials",
      "Companion workbook",
      "Course content drawn from your book",
    ],
    quote: "The book opened new opportunities to share my message with a wider audience.",
    quoteBy: "Coach & Speaker",
    slug: "coaches-speakers",
    ctaLabel: "See Coach & Speaker Books",
  },
  {
    id: "professionals",
    label: "Professionals",
    Icon: Scale,
    headline: "Be the Name Clients Recommend",
    sub: "Lawyers, accountants, advisors, and clinicians who publish give clients a clear look at how they think and work. A helpful book builds trust, answers common questions, and brings in clients who value your expertise.",
    pipeline: ["Helpful Guide", "Client Trust", "Referrals", "Growing Practice"],
    books: [
      { title: "Client & Patient Guides",    badge: "CLIENT EDUCATION"    },
      { title: "Industry Expertise Books",   badge: "PROFESSIONAL INSIGHT" },
      { title: "Practical How-To Guides",    badge: "PRACTICAL GUIDE"      },
    ],
    features: [
      "Content shaped for your profession",
      "Client welcome guide edition",
      "Referral-friendly formats",
      "Help with disclaimers and sensitive wording",
    ],
    quote: "My book makes it easier for clients to understand my expertise and approach.",
    quoteBy: "Professional Services Client",
    slug: "professionals",
    ctaLabel: "See Professional Books",
  },
  {
    id: "businesses",
    label: "Businesses",
    Icon: Network,
    headline: "Turn Your Brand Into an Authority",
    sub: "A book or report about your company will give people an opportunity to get insight into what knowledge and values your company holds. It will help you create trust beyond marketing tools.",
    pipeline: ["Brand Book", "Media Attention", "Market Authority", "Bigger Deals"],
    books: [
      { title: "Thought Leadership Books",    badge: "THOUGHT LEADERSHIP" },
      { title: "Industry Reports & Research", badge: "RESEARCH REPORT"    },
      { title: "Company Story Books",         badge: "BRAND STORY"        },
    ],
    features: [
      "Research and survey support",
      "Charts and infographics",
      "Press release and media outreach",
      "LinkedIn content series",
    ],
    quote: "The book paid for itself by giving our team a powerful tool to build client trust.",
    quoteBy: "B2B Business Client",
    slug: "businesses",
    ctaLabel: "See Business Books",
  },
];

export default function WhoWeHelpPage() {
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
              Who We Help
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.08] mb-6">
              <span className="text-black">Your Expertise Deserves</span>
              <br />
              <span className="text-primary">Its Own Book.</span>
            </h1>
            <p className="text-brand-body text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Our book publishing services for authors fit who you are and what you want your book to do, including publishing help for self published authors. Pick your path below.
            </p>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {verticals.map(v => (
                <a
                  key={v.id}
                  href={`#${v.id}`}
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-primary hover:bg-cyan-50 text-slate-800 hover:text-primary text-sm font-semibold px-4 py-2 rounded-full transition-all"
                >
                  <v.Icon size={14} /> {v.label}
                </a>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {verticals.map((v, idx) => (
        <section
          key={v.id}
          id={v.id}
          className={`py-24 scroll-mt-20 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-14 items-start ${idx % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>

              <SlideLeft delay={0}>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div
                    className="inline-flex items-center gap-2 text-white rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5"
                    style={{ background: "#0891B2" }}
                  >
                    <v.Icon size={14} /> {v.label}
                  </div>

                  <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight">
                    {v.headline}
                  </h2>
                  <p className="text-brand-body mb-6 leading-relaxed">{v.sub}</p>

                  <div className="flex flex-wrap items-center gap-2 mb-8 justify-center lg:justify-start">
                    {v.pipeline.map((step, i) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="bg-white border border-slate-200 text-slate-800 font-semibold text-xs px-3 py-1.5 rounded-full shadow-sm">{step}</span>
                        {i < v.pipeline.length - 1 && <span className="text-primary/40 font-light">→</span>}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 w-full">
                    {v.features.map(f => (
                      <div key={f} className="flex items-start gap-2 text-sm text-slate-800">
                        <CheckCircle size={15} className="text-primary shrink-0 mt-0.5" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <Link
                      href={`/who-we-help/${v.slug}`}
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3.5 rounded-full shadow-lg transition-all"
                    >
                      {v.ctaLabel} <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </SlideLeft>

              <SlideRight delay={0.1}>
                <div className="space-y-4">
                  {v.books.map((book) => (
                    <div
                      key={book.title}
                      className="flex items-center gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
                    >
                      <div
                        className="w-12 h-16 rounded-lg flex items-center justify-center text-white shadow-md shrink-0"
                        style={{ background: "linear-gradient(135deg, #0891B2, #0369a1)" }}
                      >
                        <BookOpen size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-[family-name:var(--font-playfair)] font-bold text-slate-900 text-sm leading-tight">{book.title}</div>
                        <span className="inline-block mt-1.5 text-[10px] font-bold bg-cyan-50 text-primary px-2 py-0.5 rounded-full">{book.badge}</span>
                      </div>
                    </div>
                  ))}

                  <div className="bg-primary rounded-2xl p-6 text-white">
                    <div className="text-3xl text-white/20 font-serif mb-2">&ldquo;</div>
                    <p className="font-[family-name:var(--font-playfair)] font-bold text-base leading-snug mb-3">
                      {v.quote}
                    </p>
                    <cite className="text-white/50 text-xs not-italic">— {v.quoteBy}</cite>
                  </div>
                </div>
              </SlideRight>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">
              Not Sure Which Fits You? Let&apos;s Talk.
            </h2>
            <p className="text-white/80 mb-8">Book a free 30-minute call and leave with a book idea built around your goals. No obligation.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-white/90 font-bold px-10 py-4 rounded-full shadow-lg transition-all text-lg"
              style={{ color: "#089bb2" }}
            >
              Book a Strategy Call <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
