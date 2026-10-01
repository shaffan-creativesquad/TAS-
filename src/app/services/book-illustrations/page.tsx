import type { Metadata } from "next";
import Link from "next/link";
import { Image, Clock, Paintbrush, Award } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Professional Book Illustration Services | The Author Success",
  description:
    "Original book illustrations for children's books, picture books, and graphic novels. 30+ styles, 500+ books illustrated. Character design and full manuscript illustration.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "Visual Storytelling";
const headline = "Beautiful Book Illustrations That Bring Stories to Life";
const subline =
  "Professional illustrations for children's books, graphic novels, and illustrated publications.";
const desc =
  "Great illustrations transform good books into unforgettable experiences. Our network of professional illustrators creates original, publication-quality artwork in any style — from whimsical watercolors to digital graphic novel art — tailored to your book's genre, tone, and audience.";

const stats = [
  { value: "500+", label: "Books Illustrated", Icon: Image },
  { value: "4–8 Wks", label: "Average Delivery", Icon: Clock },
  { value: "30+", label: "Illustration Styles", Icon: Paintbrush },
  { value: "4.9/5", label: "Author Rating", Icon: Award },
];

const subServices = [
  {
    tag: "Picture Books",
    title: "Children's Picture Book Illustrations",
    desc: "Full-colour picture book illustrations in any style — watercolor, digital, ink, flat, and more — matched to your story and target age group.",
  },
  {
    tag: "Character",
    title: "Character Design",
    desc: "Original character sheets with multiple poses, expressions, and outfits to ensure consistency across all illustrations and future titles.",
  },
  {
    tag: "Interior",
    title: "Interior Book Illustrations",
    desc: "Black & white or colour interior illustrations for chapter books, non-fiction, activity books, and educational titles.",
  },
  {
    tag: "Cover",
    title: "Illustrated Cover Art",
    desc: "Original hand-crafted or digitally-illustrated cover art for books that require a fully illustrated aesthetic.",
  },
];

const steps = [
  {
    num: "01",
    title: "Style & Brief",
    desc: "We review your story, target audience, and preferred illustration styles, then match you with the ideal illustrator.",
  },
  {
    num: "02",
    title: "Character Sketches",
    desc: "Rough character designs are presented for approval before any full illustrations are produced.",
  },
  {
    num: "03",
    title: "Sketch Approval",
    desc: "Line sketches of each illustration are presented for your review and feedback before final coloring.",
  },
  {
    num: "04",
    title: "Final Illustrations",
    desc: "Approved sketches are completed with full color, texture, and detail to production-ready standards.",
  },
  {
    num: "05",
    title: "File Delivery",
    desc: "All illustration files delivered in print-ready CMYK at 300dpi, plus RGB versions for digital use.",
  },
];

const included = [
  "Illustrator matching & casting",
  "Style consultation",
  "Character design sheets",
  "Rough sketch approval process",
  "Full colour illustrations",
  "Print-ready CMYK files (300dpi)",
  "Digital RGB versions",
  "Transparent background files",
  "Cover illustration (if applicable)",
  "Unlimited revisions on sketches",
  "Two rounds of final revisions",
  "Source files included",
];

const testimonials = [
  {
    quote:
      "The illustrations brought my characters to life exactly as I imagined them. Parents tell me their children ask to read the book every night.",
    name: "Sophie T.",
    title: "Children's Author · Award-Nominated",
    result: "Award Nominated",
  },
  {
    quote:
      "Character consistency across 32 pages was perfect. The illustrator understood the story and added details I hadn't even asked for.",
    name: "Michael C.",
    title: "Picture Book Series Author",
    result: "5-Book Series",
  },
  {
    quote:
      "My graphic novel illustrations are stunning. The style matched my genre perfectly — readers compare them to traditionally published works.",
    name: "Jess L.",
    title: "Graphic Novel Author",
    result: "Publisher Attention",
  },
];

const faqs = [
  {
    q: "How do I choose an illustration style?",
    a: "We present 3–5 style options with portfolio examples matched to your genre and age group. You choose based on mood, aesthetics, and preference.",
  },
  {
    q: "How many illustrations do I get?",
    a: "A standard 32-page picture book includes 14–16 full spreads. Custom quantities are available for any project type.",
  },
  {
    q: "Can you match an existing illustration style?",
    a: "Yes. If you have an existing series with established artwork, we match new illustrations to maintain consistency.",
  },
  {
    q: "What file formats do you provide?",
    a: "Print-ready CMYK PDF and TIFF at 300dpi, plus RGB PNG/JPEG for digital. Source files (PSD/AI) included on request.",
  },
  {
    q: "Do I own the illustrations?",
    a: "Yes — full copyright is transferred to you upon project completion. The illustrations are 100% yours.",
  },
];

export default function BookIllustrationsPage() {
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
                Get My Book Illustrated
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
                Book Illustration Services
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
                From Concept to Final Artwork
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
                    <Paintbrush className="h-4 w-4" style={{ color: COLOR }} />
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
                Illustrations Authors Love
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
            <Paintbrush className="mx-auto mb-6 h-16 w-16 opacity-90" />
            <h2 className="text-3xl font-extrabold md:text-5xl">Bring Your Story to Life Visually</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              Work with our professional illustrators to create artwork that captivates readers of all ages.
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
