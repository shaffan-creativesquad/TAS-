import type { Metadata } from "next";
import Link from "next/link";
import { Baby, Clock, Award, Globe } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Children's Book Publication Services | The Author Success",
  description:
    "Complete children's book publishing — writing, illustration, design, and global distribution. 300+ children's books published. School & library distribution included.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "For Young Readers";
const headline = "Complete Children's Book Publishing From Concept to Shelf";
const subline =
  "End-to-end publication for picture books, early readers, and middle grade — beautifully crafted.";
const desc =
  "Children's books require a unique blend of storytelling, illustration, and production expertise. We offer a complete children's book publication service — from writing and illustration to formatting, printing, and global distribution — producing books that parents, teachers, and children love.";

const stats = [
  { value: "300+", label: "Children's Books Published", Icon: Baby },
  { value: "8–12 Wks", label: "Average Delivery", Icon: Clock },
  { value: "4.9/5", label: "Parent & Teacher Rating", Icon: Award },
  { value: "40+", label: "Distribution Platforms", Icon: Globe },
];

const subServices = [
  {
    tag: "Picture Books",
    title: "Picture Book Publishing",
    desc: "Full publication for 32–48 page picture books — writing, illustration, layout, printing, and distribution to Amazon and 40+ retailers.",
  },
  {
    tag: "Early Reader",
    title: "Early Reader Books",
    desc: "Age-appropriate chapter books for emerging readers with illustrations, proper vocabulary leveling, and educational alignment.",
  },
  {
    tag: "Middle Grade",
    title: "Middle Grade Publishing",
    desc: "Complete publishing service for longer-form middle grade fiction and non-fiction targeting readers aged 8–12.",
  },
  {
    tag: "Board Books",
    title: "Board Books & Activity Books",
    desc: "Durable board books, activity books, and educational titles formatted for the youngest readers.",
  },
];

const steps = [
  {
    num: "01",
    title: "Concept Development",
    desc: "We finalize your story concept, target age group, page count, and illustration style.",
  },
  {
    num: "02",
    title: "Writing & Editing",
    desc: "Story writing or editing with age-appropriate language, pacing, and developmental considerations.",
  },
  {
    num: "03",
    title: "Illustration",
    desc: "Professional illustrators create original artwork matched to your story's tone, characters, and world.",
  },
  {
    num: "04",
    title: "Layout & Design",
    desc: "Text and illustration are designed together into a beautiful, print-ready book layout.",
  },
  {
    num: "05",
    title: "Publishing & Distribution",
    desc: "Your book is published to Amazon, bookstores, school distributors, and 40+ global platforms.",
  },
];

const included = [
  "Story writing or editing",
  "Age-appropriate language review",
  "Professional illustration (12+ pages)",
  "Full book layout & design",
  "ISBN registration",
  "Print-on-demand setup",
  "Amazon KDP publishing",
  "IngramSpark distribution",
  "School & library distribution",
  "eBook version (optional)",
  "3D mockup renders",
  "Marketing materials",
];

const testimonials = [
  {
    quote:
      "My picture book is now in 200 school libraries across the country. The illustration quality is stunning — parents keep buying copies as gifts.",
    name: "Michelle T.",
    title: "Children's Author · 200 School Libraries",
    result: "200 School Libraries",
  },
  {
    quote:
      "From rough concept to published book in 10 weeks. The illustrator they assigned captured my characters perfectly.",
    name: "Peter L.",
    title: "Picture Book Author",
    result: "Published in 10 Weeks",
  },
  {
    quote:
      "My early reader series is now in Barnes & Noble. The production quality and distribution setup made the difference.",
    name: "Sandra K.",
    title: "Early Reader Series Author",
    result: "Barnes & Noble Listed",
  },
];

const faqs = [
  {
    q: "How many illustrations do I need for a picture book?",
    a: "A standard 32-page picture book has 14–16 full spreads (illustrations). We provide a complete illustration plan before starting.",
  },
  {
    q: "Can I provide my own illustrations?",
    a: "Yes. If you have an illustrator, we handle writing, editing, layout, and publishing. Or we can provide illustration separately.",
  },
  {
    q: "How do I get my book into schools?",
    a: "We set up distribution through Follett and Baker & Taylor, the two largest school and library distributors in North America.",
  },
  {
    q: "What age group do you write for?",
    a: "0–3 (board books), 3–6 (picture books), 6–9 (early readers), 8–12 (middle grade). We tailor content to the exact age group.",
  },
  {
    q: "Can the book be printed in color?",
    a: "Yes — full color print-on-demand is available through Amazon KDP and IngramSpark. We recommend full color for picture books.",
  },
];

export default function ChildrensBookPublicationPage() {
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
                Publish My Children's Book
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
                Children's Book Publishing Services
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
                From Concept to Published Book
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
                    <Baby className="h-4 w-4" style={{ color: COLOR }} />
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
                Books That Reach Young Readers
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
            <Baby className="mx-auto mb-6 h-16 w-16 opacity-90" />
            <h2 className="text-3xl font-extrabold md:text-5xl">Bring Your Children's Book to Life</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              Start your journey from concept to shelf with our complete children's book publishing team.
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
