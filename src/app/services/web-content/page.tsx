import type { Metadata } from "next";
import Link from "next/link";
import { Monitor, Clock, TrendingUp, Award } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Professional Web Content Writing Services | The Author Success",
  description:
    "Website copy, landing pages, and SEO content for authors and publishers. 2,000+ pages written. Average 35% conversion rate improvement. Fast turnaround.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "Convert Visitors";
const headline = "Web Content Writing That Engages and Converts";
const subline =
  "Professional website copy, landing pages, and brand messaging that turns visitors into readers.";
const desc =
  "Your website is your most important marketing asset — and weak copy is the number one reason visitors leave without converting. Our web copywriters produce clear, compelling content for author websites, publishing company pages, and book landing pages that communicate your brand and drive action.";

const stats = [
  { value: "2,000+", label: "Pages Written", Icon: Monitor },
  { value: "48 hrs", label: "Average Delivery", Icon: Clock },
  { value: "35%", label: "Avg. Conversion Lift", Icon: TrendingUp },
  { value: "98%", label: "Client Approval", Icon: Award },
];

const subServices = [
  {
    tag: "Author Site",
    title: "Author Website Copy",
    desc: "Homepage, about page, book pages, and contact copy that captures your author brand and encourages reader engagement.",
  },
  {
    tag: "Landing Pages",
    title: "Book Landing Pages",
    desc: "High-converting launch pages for new books — built to capture pre-orders, email signups, and review requests.",
  },
  {
    tag: "SEO",
    title: "SEO Web Copy",
    desc: "Search engine optimized website copy that ranks for your name, genre, and book topic keywords.",
  },
  {
    tag: "Publisher",
    title: "Publishing Company Websites",
    desc: "Professional copy for publishing service websites — service pages, about sections, testimonials, and calls to action.",
  },
];

const steps = [
  {
    num: "01",
    title: "Brand & Audience Brief",
    desc: "We learn your brand voice, target audience, key messages, and conversion goals before writing a word.",
  },
  {
    num: "02",
    title: "Copy Strategy",
    desc: "Page structure and messaging hierarchy are planned to guide visitors through the right journey.",
  },
  {
    num: "03",
    title: "Copywriting",
    desc: "Every page is written with clear messaging, emotional appeal, and strategic calls to action.",
  },
  {
    num: "04",
    title: "SEO Optimization",
    desc: "Keywords are woven naturally into headings, body copy, and meta descriptions for search visibility.",
  },
  {
    num: "05",
    title: "Revisions & Delivery",
    desc: "You review, we refine, and final copy is delivered in your preferred format.",
  },
];

const included = [
  "Website copy strategy",
  "Homepage copy",
  "About page copy",
  "Service/book page copy",
  "Contact page copy",
  "SEO keyword integration",
  "Meta titles & descriptions",
  "Calls to action",
  "Brand voice consistency",
  "Two rounds of revisions",
  "Mobile-friendly formatting",
  "CMS upload support",
];

const testimonials = [
  {
    quote:
      "My author website conversion rate doubled after the copy rewrite. More email signups, more book sales — the difference was immediate.",
    name: "Caroline M.",
    title: "Romance Author",
    result: "2x Conversion Rate",
  },
  {
    quote:
      "The book landing page generated 1,200 pre-orders in 3 weeks. The copy communicated exactly why readers needed to buy this book.",
    name: "James K.",
    title: "Thriller Author · 1,200 Pre-Orders",
    result: "1,200 Pre-Orders",
  },
  {
    quote:
      "My website now ranks on page one for my author name and genre keywords. Organic traffic drives steady book sales every month.",
    name: "Anna S.",
    title: "Self-Help Author",
    result: "Page 1 Rankings",
  },
];

const faqs = [
  {
    q: "How long does website copy take?",
    a: "A full 5-page author website takes 5–7 business days. Individual pages can be delivered in 24–48 hours.",
  },
  {
    q: "Do you write in my voice?",
    a: "Yes. We conduct a voice interview and review your existing content to ensure copy sounds authentically like you.",
  },
  {
    q: "Do you include SEO optimization?",
    a: "Yes — all copy is written with target keywords integrated naturally, plus meta titles and descriptions for every page.",
  },
  {
    q: "Can you upload the copy to my website?",
    a: "Yes — we offer CMS upload support for WordPress, Squarespace, Wix, and most major platforms.",
  },
  {
    q: "Do you write product descriptions for book pages?",
    a: "Yes — Amazon book descriptions, book blurbs, and product page copy are all part of our web content offering.",
  },
];

export default function WebContentPage() {
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
                Get My Web Copy Written
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
                Web Content Writing Services
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
                How We Write Your Web Content
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
                    <Monitor className="h-4 w-4" style={{ color: COLOR }} />
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
                Copy That Converts
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
            <Monitor className="mx-auto mb-6 h-16 w-16 opacity-90" />
            <h2 className="text-3xl font-extrabold md:text-5xl">Ready to Convert More Visitors?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              Get website copy that speaks to your readers and turns traffic into book sales.
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
