import type { Metadata } from "next";
import Link from "next/link";
import { Laptop, Clock, Award, TrendingUp } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Professional Author Website Design Services | The Author Success",
  description:
    "Beautiful author websites built to grow your audience and sell your books. 400+ author websites designed. Mobile-responsive, SEO-ready, launched in 2–3 weeks.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "Your Digital Home";
const headline = "Professional Author Websites That Build Your Brand";
const subline =
  "Beautiful, functional author websites designed to grow your audience and sell your books.";
const desc =
  "Your author website is the one platform you truly own — unlike social media, it can't be taken away or changed by an algorithm. We design and build professional author websites that look stunning, load fast, and convert visitors into readers, subscribers, and buyers.";

const stats = [
  { value: "400+", label: "Author Websites Built", Icon: Laptop },
  { value: "2–3 Wks", label: "Average Delivery", Icon: Clock },
  { value: "99%", label: "Client Satisfaction", Icon: Award },
  { value: "2x", label: "Avg. Email List Growth", Icon: TrendingUp },
];

const subServices = [
  {
    tag: "Custom",
    title: "Custom Author Website",
    desc: "Fully custom designed website built to your brand — unique design, professional photography integration, and seamless user experience.",
  },
  {
    tag: "Template",
    title: "Template Author Website",
    desc: "Professionally customized website from premium templates — launched in 1–2 weeks with your branding, content, and book pages.",
  },
  {
    tag: "Book Landing",
    title: "Book Launch Landing Pages",
    desc: "High-converting standalone landing pages for book launches — pre-order links, email capture, review requests, and press kit.",
  },
  {
    tag: "Redesign",
    title: "Website Redesign",
    desc: "Modernize an existing author website — improved design, faster loading, mobile optimization, and better conversion structure.",
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery & Planning",
    desc: "We define your brand, audience, required pages, functionality, and design direction before any work begins.",
  },
  {
    num: "02",
    title: "Design Mockup",
    desc: "A full homepage mockup is presented for approval before development — ensuring the vision is right before we build.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Your site is built on WordPress or Squarespace with mobile responsiveness, fast loading, and SEO foundations.",
  },
  {
    num: "04",
    title: "Content Integration",
    desc: "All copy, images, book covers, and media are integrated and the site is tested across all devices.",
  },
  {
    num: "05",
    title: "Launch & Training",
    desc: "Site goes live with a custom domain and you receive a training session to manage content updates.",
  },
];

const included = [
  "Custom design (up to 8 pages)",
  "Mobile-responsive build",
  "WordPress or Squarespace setup",
  "Book pages with purchase links",
  "About & bio page",
  "Email capture integration",
  "Blog setup",
  "Contact form",
  "Social media integration",
  "Basic SEO setup",
  "Google Analytics",
  "Training session & documentation",
];

const testimonials = [
  {
    quote:
      "My website went from embarrassing to stunning in 2 weeks. My email list doubled in the first month from the improved signup forms and UX.",
    name: "Sandra K.",
    title: "Romance Author · 2x Email Growth",
    result: "2x Email Growth",
  },
  {
    quote:
      "Professional, fast, and exactly what I envisioned. The team built my author brand online and I've had press inquiries I never expected.",
    name: "Dr. Lee H.",
    title: "Non-Fiction Author",
    result: "Press Inquiries",
  },
  {
    quote:
      "My book landing page converted 18% of visitors to pre-orders. The design and copy worked together perfectly.",
    name: "Chris M.",
    title: "Thriller Author · 18% Conversion",
    result: "18% Conversion Rate",
  },
];

const faqs = [
  {
    q: "Do I need a website as an author?",
    a: "Yes — it's the only online platform you fully own. It builds SEO, captures emails, and serves as your professional home base.",
  },
  {
    q: "What platform do you build on?",
    a: "We primarily build on WordPress (most flexible) and Squarespace (easiest to manage). We recommend based on your technical comfort level.",
  },
  {
    q: "Can I update it myself?",
    a: "Yes. We build with easy-to-edit page builders and provide training so you can update content without needing a developer.",
  },
  {
    q: "Do you provide the copy?",
    a: "Copywriting is available as an add-on. We can write all page content, or you can provide your own for us to design around.",
  },
  {
    q: "What about hosting and domain?",
    a: "We help you set up and configure hosting and your domain. Ongoing hosting costs are typically $10–20/month, paid directly to the host.",
  },
];

export default function AuthorWebsitePage() {
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
                Build My Author Website
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
                Author Website Design Services
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
                How We Build Your Website
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
                    <Laptop className="h-4 w-4" style={{ color: COLOR }} />
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
                Websites That Grow Audiences
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
            <Laptop className="mx-auto mb-6 h-16 w-16 opacity-90" />
            <h2 className="text-3xl font-extrabold md:text-5xl">Ready for Your Author Website?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              Own your platform. Build your audience. Sell your books — starting with a stunning author website.
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
