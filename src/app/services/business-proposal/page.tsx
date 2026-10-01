import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Clock, Award, TrendingUp } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Professional Business Proposal Writing Services | The Author Success",
  description:
    "Expert business proposal, white paper, and book proposal writing. 1,000+ proposals written. 78% average win rate. Rush delivery available.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "Win More Deals";
const headline = "Persuasive Business Proposals That Close Deals";
const subline =
  "Professional proposal and white paper writing that wins clients, funding, and partnerships.";
const desc =
  "A poorly written proposal loses deals before the meeting happens. Our business writing team produces polished, persuasive proposals, white papers, and pitch decks that communicate your value clearly and compellingly — whether you're pitching to investors, clients, or publishers.";

const stats = [
  { value: "1,000+", label: "Proposals Written", Icon: Briefcase },
  { value: "72 hrs", label: "Rush Delivery", Icon: Clock },
  { value: "78%", label: "Avg. Win Rate", Icon: Award },
  { value: "98%", label: "Client Satisfaction", Icon: TrendingUp },
];

const subServices = [
  {
    tag: "RFP",
    title: "RFP & Client Proposals",
    desc: "Structured responses to Requests for Proposal — clearly articulating your approach, value, timeline, and pricing.",
  },
  {
    tag: "White Paper",
    title: "White Papers & Reports",
    desc: "Authoritative, research-backed white papers that position you as a thought leader and generate qualified leads.",
  },
  {
    tag: "Publisher",
    title: "Book Proposal Writing",
    desc: "Query letters and full book proposals for traditional publishers — synopsis, sample chapters, market analysis, and author bio.",
  },
  {
    tag: "Grant",
    title: "Grant Proposals",
    desc: "Compelling grant applications for arts, writing, cultural, and business funding bodies.",
  },
];

const steps = [
  {
    num: "01",
    title: "Brief & Research",
    desc: "We gather all information about your offering, the client, and the opportunity to ground the proposal in specifics.",
  },
  {
    num: "02",
    title: "Structure & Strategy",
    desc: "We map the proposal structure to match the client's decision criteria and anticipate their questions.",
  },
  {
    num: "03",
    title: "Writing",
    desc: "Your proposal is written with clarity, persuasion, and a clear value narrative from opening to close.",
  },
  {
    num: "04",
    title: "Design & Formatting",
    desc: "Professional layout and design that makes the proposal visually impressive and easy to navigate.",
  },
  {
    num: "05",
    title: "Review & Delivery",
    desc: "Final review, revisions, and delivery in PDF and editable formats.",
  },
];

const included = [
  "Client/opportunity research",
  "Proposal structure strategy",
  "Executive summary writing",
  "Full body proposal writing",
  "Value proposition development",
  "Pricing section guidance",
  "Case study integration",
  "Professional layout & design",
  "Proofreading & editing",
  "PDF + editable formats",
  "One round of revisions",
  "Rush delivery available",
];

const testimonials = [
  {
    quote:
      "Won a $2M contract using a proposal they wrote. The clarity and professionalism made us stand out in a competitive bid process.",
    name: "James C.",
    title: "Technology Firm · $2M Contract Won",
    result: "$2M Contract",
  },
  {
    quote:
      "My book proposal got requests from 3 literary agents in the first week. The synopsis and market analysis were exactly what they wanted to see.",
    name: "Angela M.",
    title: "Non-Fiction Author · 3 Agent Requests",
    result: "3 Agent Requests",
  },
  {
    quote:
      "Our win rate on RFPs went from 20% to 65% after professionalizing our proposals. Game-changing investment.",
    name: "Mark T.",
    title: "Consulting Firm Owner",
    result: "65% Win Rate",
  },
];

const faqs = [
  {
    q: "How long does a proposal take?",
    a: "Standard proposals take 3–5 business days. Rush delivery in 24–72 hours is available for an additional fee.",
  },
  {
    q: "Do you write book proposals for publishers?",
    a: "Yes — full traditional publishing proposals including query letter, synopsis, market analysis, author bio, and sample chapters.",
  },
  {
    q: "Can you help with grant applications?",
    a: "Yes. We write grant proposals for arts councils, writing foundations, cultural grants, and small business funding.",
  },
  {
    q: "What information do you need from me?",
    a: "We'll send you a brief questionnaire covering the opportunity, your company/project, key differentiators, and any specific requirements.",
  },
  {
    q: "Do you offer proposal templates?",
    a: "We write every proposal from scratch to your specific opportunity — we don't use generic templates.",
  },
];

export default function BusinessProposalPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{ background: `linear-gradient(135deg, ${COLOR} 0%, #0e7490 100%)` }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="relative mx-auto max-w-6xl px-6 text-center text-white">
          <FadeUp>
            <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest backdrop-blur">
              {badge}
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              {headline}
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl">{subline}</p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="rounded-full px-8 py-4 text-base font-bold shadow-lg transition hover:scale-105 hover:opacity-90"
                style={{ background: "white", color: COLOR }}
              >
                Get Your Proposal Written
              </Link>
              <Link
                href="#process"
                className="rounded-full border border-white/40 bg-white/10 px-8 py-4 text-base font-semibold backdrop-blur transition hover:bg-white/20"
              >
                See How It Works
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* Stats bar */}
        <div className="relative mx-auto mt-16 max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur md:grid-cols-4">
            {stats.map(({ value, label, Icon }) => (
              <div key={label} className="text-center text-white">
                <Icon className="mx-auto mb-2 h-6 w-6 opacity-80" />
                <div className="text-2xl font-extrabold md:text-3xl">{value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider opacity-70">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block rounded-full px-4 py-1 text-sm font-semibold uppercase tracking-widest" style={{ background: COLOR, color: "white" }}>
                What We Offer
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Proposal Writing Services
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">{desc}</p>
            </div>
          </FadeUp>
          <div className="grid gap-6 md:grid-cols-2">
            {subServices.map((s, i) => (
              <SlideLeft key={s.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                  <span className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white" style={{ background: COLOR }}>
                    {s.tag}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </SlideLeft>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section id="process" className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block rounded-full px-4 py-1 text-sm font-semibold uppercase tracking-widest" style={{ background: COLOR, color: "white" }}>
                Our Process
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                How We Build Your Proposal
              </h2>
            </div>
          </FadeUp>
          <div className="relative">
            <div className="absolute left-8 top-0 hidden h-full w-0.5 md:block" style={{ background: `linear-gradient(to bottom, ${COLOR}, transparent)` }} />
            <div className="space-y-8">
              {steps.map((step, i) => (
                <SlideRight key={step.num} delay={i * 0.1}>
                  <div className="flex gap-6">
                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-white font-extrabold text-lg shadow-lg" style={{ background: COLOR }}>
                      {step.num}
                    </div>
                    <div className="flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                      <h3 className="mb-2 text-lg font-bold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </SlideRight>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block rounded-full px-4 py-1 text-sm font-semibold uppercase tracking-widest" style={{ background: COLOR, color: "white" }}>
                What's Included
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Everything You Get
              </h2>
            </div>
          </FadeUp>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item, i) => (
              <ScaleIn key={item} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full" style={{ background: LIGHT_BG }}>
                    <Briefcase className="h-4 w-4" style={{ color: COLOR }} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block rounded-full px-4 py-1 text-sm font-semibold uppercase tracking-widest" style={{ background: COLOR, color: "white" }}>
                Client Results
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Proposals That Win
              </h2>
            </div>
          </FadeUp>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <SlideLeft key={t.name} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="mb-4 text-3xl" style={{ color: COLOR }}>&ldquo;</div>
                  <p className="flex-1 text-gray-700 leading-relaxed italic">{t.quote}</p>
                  <div className="mt-6 border-t border-gray-100 pt-4">
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.title}</div>
                    <div className="mt-2 inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background: COLOR }}>
                      {t.result}
                    </div>
                  </div>
                </div>
              </SlideLeft>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block rounded-full px-4 py-1 text-sm font-semibold uppercase tracking-widest" style={{ background: COLOR, color: "white" }}>
                FAQ
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
          </FadeUp>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeUp key={faq.q} delay={i * 0.07}>
                <details className="group rounded-2xl border border-gray-100 bg-white shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-gray-900 marker:content-none">
                    {faq.q}
                    <span className="ml-4 shrink-0 text-xl transition group-open:rotate-45" style={{ color: COLOR }}>+</span>
                  </summary>
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</p>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 text-white" style={{ background: `linear-gradient(135deg, ${COLOR} 0%, #0e7490 100%)` }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScaleIn>
            <Briefcase className="mx-auto mb-6 h-16 w-16 opacity-90" />
            <h2 className="text-3xl font-extrabold md:text-5xl">Ready to Win More Deals?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              Start with a free consultation and let us help you write a proposal that closes.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="rounded-full px-10 py-4 text-base font-bold shadow-xl transition hover:scale-105 hover:opacity-90"
                style={{ background: "white", color: COLOR }}
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/40 bg-white/10 px-10 py-4 text-base font-semibold backdrop-blur transition hover:bg-white/20"
              >
                View All Services
              </Link>
            </div>
          </ScaleIn>
        </div>
      </section>
    </main>
  );
}
