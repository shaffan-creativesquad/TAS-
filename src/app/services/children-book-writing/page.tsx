import type { Metadata } from "next";
import Link from "next/link";
import { Baby, Clock, Award, Users } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Professional Children's Book Writing Services | The Author Success",
  description:
    "Expert children's book writers for picture books, early readers, and middle grade. 400+ children's books written. All ages, all genres, 100% confidential.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "For Young Readers";
const headline = "Expert Children's Book Writing That Kids Love";
const subline =
  "Age-appropriate stories with imagination, heart, and the right developmental voice.";
const desc =
  "Writing for children is a specialized craft — every word must earn its place, the pacing must be perfect, and the story must connect emotionally with both the child and the adult reading aloud. Our children's book writers bring deep genre expertise across all age groups, from board books to middle grade.";

const stats = [
  { value: "400+", label: "Children's Books Written", Icon: Baby },
  { value: "3–6 Wks", label: "Average Delivery", Icon: Clock },
  { value: "4.9/5", label: "Parent Rating", Icon: Award },
  { value: "100%", label: "NDA Guaranteed", Icon: Users },
];

const subServices = [
  {
    tag: "Picture Books",
    title: "Picture Book Writing",
    desc: "32–48 page picture books with perfectly paced text, read-aloud rhythm, and an emotional arc that satisfies both children and parents.",
  },
  {
    tag: "Early Reader",
    title: "Early Reader Chapter Books",
    desc: "Beginning chapter books for ages 6–9 with controlled vocabulary, short chapters, and engaging plots that build reading confidence.",
  },
  {
    tag: "Middle Grade",
    title: "Middle Grade Fiction",
    desc: "Full-length middle grade novels (20,000–50,000 words) for readers aged 8–12 — adventure, mystery, fantasy, and more.",
  },
  {
    tag: "Educational",
    title: "Educational Children's Books",
    desc: "Curriculum-aligned children's books on STEM, history, social-emotional learning, and other educational topics.",
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery & Brief",
    desc: "We learn your story concept, target age group, main character, key message, and any specific requirements.",
  },
  {
    num: "02",
    title: "Outline & Characters",
    desc: "A story outline and character descriptions are presented for approval before writing begins.",
  },
  {
    num: "03",
    title: "First Draft",
    desc: "Your dedicated children's writer crafts the full story with age-appropriate language, pacing, and emotional resonance.",
  },
  {
    num: "04",
    title: "Revisions",
    desc: "You review and provide feedback. We revise until the story is exactly right — no limit on revision rounds.",
  },
  {
    num: "05",
    title: "Final Delivery",
    desc: "Final manuscript delivered in DOCX format, ready for illustration and publishing.",
  },
];

const included = [
  "Dedicated children's book writer",
  "Age-group appropriateness review",
  "Story outline & character brief",
  "Full manuscript writing",
  "Read-aloud rhythm check",
  "Developmental vocabulary review",
  "Unlimited revision rounds",
  "NDA before project starts",
  "Educational alignment (if required)",
  "Illustration notes for illustrator",
  "Final DOCX delivery",
  "Publishing support available",
];

const testimonials = [
  {
    quote:
      "My picture book is now in 200 school libraries. The writer perfectly captured the rhyme and rhythm I wanted — children ask for it every night.",
    name: "Michelle B.",
    title: "Picture Book Author · 200 Libraries",
    result: "200 School Libraries",
  },
  {
    quote:
      "They wrote my middle grade series — 4 books in 8 months. The consistency in voice, characters, and world-building is remarkable.",
    name: "Tom L.",
    title: "Middle Grade Author · 4-Book Series",
    result: "4-Book Series",
  },
  {
    quote:
      "My educational book about science is used in classrooms across 3 states. The writer made complex concepts accessible and fun for 7-year-olds.",
    name: "Dr. Emma K.",
    title: "Educational Author",
    result: "Classroom Adoption",
  },
];

const faqs = [
  {
    q: "What age groups do you write for?",
    a: "0–3 (board books), 3–6 (picture books), 6–9 (early readers), 8–12 (middle grade), and 12+ (young adult).",
  },
  {
    q: "Can I provide the story idea?",
    a: "Yes — most clients come with a concept or character. We develop it into a complete, publishable story.",
  },
  {
    q: "How long is a picture book?",
    a: "Picture books are typically 500–1,000 words for 32 pages. Board books are 100–200 words. We match the length to the age group.",
  },
  {
    q: "Do you also provide illustrations?",
    a: "Illustration is a separate service we offer. We match you with a professional illustrator after the writing is complete.",
  },
  {
    q: "Will my name be on the cover?",
    a: "100%. All work is covered by NDA and you receive full copyright. Your name on the cover, always.",
  },
];

export default function ChildrenBookWritingPage() {
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
                Write My Children's Book
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
                Children's Book Writing Services
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
                From Idea to Finished Story
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
                Stories Kids Ask For Again and Again
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
            <h2 className="text-3xl font-extrabold md:text-5xl">Ready to Write Your Children's Book?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              Share your story idea and let our expert writers craft a book that kids will treasure.
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
