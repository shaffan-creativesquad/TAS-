import type { Metadata } from "next";
import Link from "next/link";
import { Baby, Clock, Award, Globe } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Children's Book Publication Services | The Author Success",
  description:
    "Complete children's book publishing — writing, illustration, design, and global distribution. 300+ children's books published. School & library distribution included.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "Children's Book Publishing";
const headline = "Children's Book Publishing for Bedtime Favorites";
const subline =
  "From writing and illustration to design and distribution, our children's book publishing services turn your story into a book young readers will want to hear again and again.";
const desc =
  "As a full-service children's book publishing company, we know that a book for a toddler and a book for a ten-year-old are completely different projects. Each one gets a team that understands its readers.";

const stats = [
  { value: "Original", label: "Illustrations", Icon: Baby },
  { value: "Age-Right", label: "Writing", Icon: Award },
  { value: "Print + eBook", label: "Editions", Icon: Globe },
  { value: "100%", label: "Royalties Yours", Icon: Clock },
];

const subServices = [
  {
    tag: "Picture Books",
    title: "Picture Book Publishing",
    desc: "Complete publishing for picture books, including writing, illustration, layout, printing, and distribution, so your story looks as good as it reads.",
  },
  {
    tag: "Early Readers",
    title: "Early Reader Books",
    desc: "Chapter books for children who are just finding their feet as readers, with the right vocabulary level, short chapters, and illustrations that keep them turning pages.",
  },
  {
    tag: "Middle Grade",
    title: "Middle Grade Publishing",
    desc: "Longer fiction and non-fiction for readers aged 8 to 12, with the pacing, characters, and themes that keep this age group hooked.",
  },
  {
    tag: "Board Books",
    title: "Board Books & Activity Books",
    desc: "Sturdy board books, activity books, and learning titles designed for little hands and the youngest readers.",
  },
];

const steps = [
  {
    num: "01",
    title: "Complimentary Consultation",
    desc: "We start by talking about your story, the age group you're writing for, and how you want the book to look. From there, we'll decide on the page count, format, and illustration style before we get started.",
  },
  {
    num: "02",
    title: "Writing & Editing",
    desc: "Whether we write your story or polish your draft, our editors make sure the language, pacing, and vocabulary suit your young readers, while keeping your voice and message front and center.",
  },
  {
    num: "03",
    title: "Design & Formatting",
    desc: "Our illustrators create original artwork that brings your characters and world to life. Then we lay out the text and pictures together into a print-ready book and eBook.",
  },
  {
    num: "04",
    title: "Publish & Launch",
    desc: "We register your ISBN and publish a children's book that's ready for Amazon, bookstores, and library and school suppliers. Your name goes on the cover, and you keep every royalty.",
  },
];

const included = [
  "Story writing or editing",
  "Age-appropriate language review",
  "Original, professional illustrations",
  "Character design",
  "Full book layout and design",
  "Custom cover design",
  "ISBN registration",
  "Print-on-demand setup",
  "Amazon KDP publishing",
  "School and library distribution support",
  "eBook version (optional)",
  "3D book mockups",
];

const testimonials = [
  {
    quote:
      "For years, I had written the story but didn't know how to turn it into a real children's book. The team assisted me in shaping the story, in developing the characters, and in putting all the elements together in a visual format. It was a very special experience when I first saw the completed pages.",
    name: "Amanda R.",
    title: "Children's Book Author",
    result: "Published",
  },
  {
    quote:
      "These illustrations played a very important role in the perception of my story because the characters looked exactly like I expected, and they were really patient with all my suggestions. The book looks very personal and polished, and it really fits the needs of children.",
    name: "James T.",
    title: "Picture Book Author",
    result: "Illustrated",
  },
  {
    quote:
      "I was concerned that getting the book published would be a complicated matter, particularly since it was my first book. They made it clear to me at every stage, starting with formatting and the arrangement of the ISBN and going on to distribution. I always knew exactly what was going on and what required my approval.",
    name: "Sophie M.",
    title: "First-Time Author",
    result: "First Book Published",
  },
];

const faqs = [
  {
    q: "How many illustrations does a picture book need?",
    a: "It depends on the length and format of your book. Before any artwork begins, we create an illustration plan that maps out every page, so you know exactly what to expect.",
  },
  {
    q: "Can I provide my own illustrations?",
    a: "Yes. If you already have artwork, we'll review it, prepare it for print, and design the layout around it.",
  },
  {
    q: "How do I get my book into schools and libraries?",
    a: "We distribute through IngramSpark, which makes your book available to the suppliers many schools and libraries order from. We can also prepare marketing materials to help you reach educators directly.",
  },
  {
    q: "What age groups do you publish for?",
    a: "We publish for every stage of childhood, from board books for toddlers to picture books, early readers, and middle grade titles for readers up to age 12.",
  },
  {
    q: "Can the book be printed in full color?",
    a: "Yes. We set up full-color printing for both paperback and hardcover editions, along with an eBook version if you'd like one.",
  },
  {
    q: "Can I self-publish a children's book and still keep my rights?",
    a: "Absolutely. When you self publish a children's book with us, you keep full ownership of your story, your illustrations, and every royalty it earns.",
  },
  {
    q: "How much do children's book publishing services cost?",
    a: "Every project is quoted individually based on length, format, and illustration needs. The price you're quoted is the price you pay, with no hidden fees.",
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

      {/* ── What We Publish ── */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block rounded-full px-4 py-1 text-sm font-semibold uppercase tracking-widest" style={{ background: COLOR, color: "white" }}>
                What We Publish
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Little Hands, Growing Minds, One Publishing Team
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
                From Idea to Illustrated Book in Four Simple Steps
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">We keep the process simple and keep you involved along the way, so you always know what&apos;s happening with your book.</p>
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
                All It Takes to Land on Bedtime Shelves
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">From our first conversation to holding the finished book in your hands, your quote covers the whole process. We’ll make sure you know what’s included and what it will cost before we get started, so there are no unexpected charges later.</p>
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
                Author Stories
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Happy Authors, Happier Little Readers
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">In their own words, from authors who trusted us to bring their stories to young readers.</p>
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
              {/* <span className="mb-3 inline-block rounded-full px-4 py-1 text-sm font-semibold uppercase tracking-widest" style={{ background: COLOR, color: "white" }}>
                FAQ
              </span> */}
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Questions Every Children&apos;s Author Asks
              </h2>
            </div>
          </FadeUp>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 text-white" style={{ background: `linear-gradient(135deg, ${COLOR} 0%, #0e7490 100%)` }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScaleIn>
            <Baby className="mx-auto mb-6 h-16 w-16 opacity-90" />
            <h2 className="text-3xl font-extrabold md:text-5xl">Let&apos;s Turn Your Story Into Someone&apos;s Favorite Book</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              Book a free consultation with our team. We&apos;ll talk through your story, answer your questions, and show you what it takes to bring your children&apos;s book to life.
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
