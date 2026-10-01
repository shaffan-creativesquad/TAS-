import type { Metadata } from "next";
import Link from "next/link";
import { Printer, Clock, Award, TrendingUp } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Professional Book Printing Services | The Author Success",
  description:
    "High-quality book printing — print-on-demand setup, bulk offset printing, hardcover editions. 500,000+ books printed. Fast turnaround, global fulfillment.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "Print Quality";
const headline = "Professional Book Printing for Every Project and Budget";
const subline =
  "High-quality print-on-demand and bulk printing with global fulfillment.";
const desc =
  "Whether you need 10 copies for a launch event or 10,000 for a retail distribution campaign, we source the right printing solution for your project. We manage print specifications, file preparation, quality checking, and fulfillment — so your books arrive looking exactly as you envisioned.";

const stats = [
  { value: "500K+", label: "Books Printed", Icon: Printer },
  { value: "5–10 Days", label: "Standard Delivery", Icon: Clock },
  { value: "50+", label: "Binding Options", Icon: Award },
  { value: "100%", label: "Quality Guaranteed", Icon: TrendingUp },
];

const subServices = [
  {
    tag: "POD",
    title: "Print-on-Demand Setup",
    desc: "Amazon KDP and IngramSpark print-on-demand configuration — sell physical copies worldwide with zero inventory and upfront printing cost.",
  },
  {
    tag: "Bulk",
    title: "Bulk Offset Printing",
    desc: "Cost-effective bulk printing for 500+ copies — perfect for author events, bookstore stocking, and direct sales.",
  },
  {
    tag: "Specialty",
    title: "Specialty & Hardcover",
    desc: "Premium hardcover, case laminate, and special format printing for gift books, collector editions, and premium publications.",
  },
  {
    tag: "Proof",
    title: "Author Proof Copies",
    desc: "Physical proof copies before mass printing to verify print quality, color accuracy, and binding before committing to a print run.",
  },
];

const steps = [
  {
    num: "01",
    title: "Print Specifications",
    desc: "We define trim size, binding, paper stock, cover finish, and print quantity based on your goals and budget.",
  },
  {
    num: "02",
    title: "File Preparation",
    desc: "Your files are checked and prepared to the exact printer's specifications — cover bleed, resolution, color profile.",
  },
  {
    num: "03",
    title: "Proof Review",
    desc: "A digital proof is approved and physical proof copies are sent to you before any full print run.",
  },
  {
    num: "04",
    title: "Print Production",
    desc: "Full production run with quality control checkpoints throughout the printing and binding process.",
  },
  {
    num: "05",
    title: "Delivery & Fulfillment",
    desc: "Books are shipped directly to you or to your distribution partner — tracked delivery to any location.",
  },
];

const included = [
  "Print specification consultation",
  "File preflight check",
  "Print-ready file preparation",
  "Digital proof approval",
  "Physical proof copy (1 copy)",
  "Quality control review",
  "Bulk print production",
  "Binding options (perfect, case, saddle)",
  "Multiple paper stock options",
  "Matte or gloss cover options",
  "Tracked delivery",
  "Fulfillment to multiple addresses",
];

const testimonials = [
  {
    quote:
      "1,000 copies for my launch event and not a single defect. The print quality was stunning — readers couldn't believe it was self-published.",
    name: "Karen M.",
    title: "Memoir Author · 1,000 Copy Launch",
    result: "Zero Defects",
  },
  {
    quote:
      "My hardcover collector edition sold out in a week. The premium quality justified the higher price point and readers loved the physical book.",
    name: "Robert T.",
    title: "History Author · Sold Out Edition",
    result: "Sold Out",
  },
  {
    quote:
      "Print-on-demand setup meant I could sell physical copies worldwide with zero upfront cost. Now I earn print royalties every month passively.",
    name: "Sandra L.",
    title: "Fiction Author",
    result: "Passive Print Income",
  },
];

const faqs = [
  {
    q: "What's the minimum print quantity for bulk printing?",
    a: "Offset bulk printing starts at 250–500 copies. For smaller quantities, print-on-demand is more cost-effective.",
  },
  {
    q: "What's the difference between POD and offset printing?",
    a: "POD prints one copy at a time with no upfront cost but higher per-unit cost. Offset printing has setup costs but lower per-unit pricing at volume.",
  },
  {
    q: "How long does bulk printing take?",
    a: "Standard: 10–15 business days. Rush options are available for time-sensitive events.",
  },
  {
    q: "Can you match the quality of traditionally published books?",
    a: "Yes. We use the same printing vendors used by major publishers — the quality is indistinguishable.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. We fulfill to any country with tracked international shipping. We also set up distribution for bookstores in your target markets.",
  },
];

export default function BookPrintingPage() {
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
                Get a Printing Quote
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
                Book Printing Services
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
                From Files to Finished Books
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
                    <Printer className="h-4 w-4" style={{ color: COLOR }} />
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
                Books Printed to Perfection
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
            <Printer className="mx-auto mb-6 h-16 w-16 opacity-90" />
            <h2 className="text-3xl font-extrabold md:text-5xl">Ready to Print Your Book?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              Get a custom printing quote and hold your professionally printed book in your hands.
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
