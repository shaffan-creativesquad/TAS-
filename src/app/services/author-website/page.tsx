import type { Metadata } from "next";
import Link from "next/link";
import { Laptop, Clock, Award, TrendingUp } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Professional Author Website Design Services | The Author Success",
  description:
    "Beautiful author websites built to grow your audience and sell your books. 400+ author websites designed. Mobile-responsive, SEO-ready, launched in 2–3 weeks.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "Author Website Design";
const headline = "Author Websites That Win Readers";
const subline =
  "Your author website gives you a place that's truly yours online. We'll create a simple, welcoming site that shows off your books, helps readers get to know you, and makes it easy for them to find and buy your next book.";
const desc =
  "Social media is always changing, and you never know when the rules might change too. Your author website gives you a place that's yours. Readers can learn about you, sign up for your emails, and easily find and buy your books.";

const stats = [
  { value: "Custom", label: "Designs", Icon: Laptop },
  { value: "Mobile", label: "Ready Builds", Icon: TrendingUp },
  { value: "Email List", label: "Signup", Icon: Award },
  { value: "SEO", label: "Foundations", Icon: Clock },
];

const subServices = [
  {
    tag: "Custom",
    title: "Custom Author Website",
    desc: "We build your website around you and your books. The design, pages, and content are made to fit your style and give your readers a place that feels like you.",
  },
  {
    tag: "Template",
    title: "Template Author Website",
    desc: "Want to get your website up and running sooner? We start with a ready-made design and customize it with your branding, content, and book pages. It's simple, professional, and made for your needs.",
  },
  {
    tag: "Landing Page",
    title: "Book Launch Landing Pages",
    desc: "Focused book website design for a single title, with pre-order links, email signup, review requests, and a press kit to support your launch.",
  },
  {
    tag: "Redesign",
    title: "Website Redesign",
    desc: "A fresh look for an existing author website, with cleaner design, faster loading, better mobile performance, and a layout that guides visitors to buy.",
  },
];

const steps = [
  {
    num: "01",
    title: "Complimentary Consultation",
    desc: "We talk about your brand, your readers, and what you want your website to do. Together, we decide on the pages, features, and design direction before any work begins.",
  },
  {
    num: "02",
    title: "Writing & Editing",
    desc: "Whether you have copy ready or need us to write it, our team prepares your homepage, author bio, and book descriptions so every page sounds like you and speaks to your readers.",
  },
  {
    num: "03",
    title: "Design & Formatting",
    desc: "Your author website designer creates a homepage mockup for your approval, then builds the full site on WordPress or Squarespace, making sure it looks great and loads quickly on every device.",
  },
  {
    num: "04",
    title: "Publish & Launch",
    desc: "Your website goes live on your own domain after full testing. We then walk you through a training session, so you can update your content with confidence whenever you need to.",
  },
];

const included = [
  "Custom website design",
  "Mobile-responsive build",
  "WordPress or Squarespace setup",
  "Book pages with purchase links",
  "About and author bio page",
  "Email signup integration",
  "Blog setup",
  "Contact form",
  "Social media integration",
  "Basic SEO setup",
  "Google Analytics setup",
  "Training session and documentation",
];

const testimonials = [
  {
    quote:
      "I knew that I needed an author website, but I wasn't sure what it should contain. The team helped me convert my books, bio, and ideas into a website that remains professional yet doesn't lose the personal aspect of my brand. Now it finally seems as though I have a proper online home.",
    name: "Rebecca M.",
    title: "Fiction Author",
    result: "Online Home",
  },
  {
    quote:
      "The website I used to have seemed out of date and was hard to use on a mobile device. The redesign had a major impact; everything now looks neater, and readers no longer have to search around in order to find my books and the purchase links.",
    name: "Thomas R.",
    title: "Business Author",
    result: "Redesigned",
  },
  {
    quote:
      "What I enjoyed most was that I could take an active role without needing to deal with all the technical aspects; they listened to my requirements, showed me the design before carrying out the build, and made the entire process easy to follow.",
    name: "Claire D.",
    title: "Memoir Author",
    result: "Launched",
  },
];

const faqs = [
  {
    q: "Do I really need a website as an author?",
    a: "Yes. Readers, journalists, and event organizers often search for you online before they buy your book or reach out. A website gives them one trusted place to find your books, your story, and a way to contact you.",
  },
  {
    q: "What platform do you build on?",
    a: "We build on WordPress or Custom, depending on your needs and how hands-on you'd like to be with updates. We'll recommend the best fit during your consultation.",
  },
  {
    q: "Can I update the website myself?",
    a: "Absolutely. Every site comes with a training session and simple documentation, so you can add books, blog posts, and news without needing a developer.",
  },
  {
    q: "Do you write the website copy?",
    a: "We can. Our writers can prepare your homepage, author bio, and book descriptions, or polish copy you've already written.",
  },
  {
    q: "What about hosting and my domain name?",
    a: "We'll help you choose and connect your domain and hosting. Any third-party costs are explained upfront, so there are no surprises.",
  },
  {
    q: "Can you redesign my existing author website?",
    a: "Yes. We review your current site, keep what works, and rebuild the rest with a cleaner design, faster loading, and a clearer path for readers to buy your books.",
  },
  {
    q: "How much do author website design services cost?",
    a: "Every project is quoted individually based on the number of pages, features, and whether you choose a custom or template design. The price you're quoted is the price you pay, with no hidden fees.",
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
                Your Author Brand Deserves Its Own Address
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
                Four Steps From Big Idea to Live Website
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">We keep the process simple and keep you involved along the way, so you always know what&apos;s happening with your website.</p>
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
                Every Page, Perfectly Placed
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">From the time we have that first conversation until your project is ready for its big launch, your quotation will cover all that you require. We will discuss the price and services before getting started, so there are no unpleasant surprises down the road.</p>
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
                Author Stories
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                What Authors Say About Their New Websites
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">In their own words, from authors who trusted us to build their home online.</p>
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
                Questions Authors Ask Before Going Live
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
            <Laptop className="mx-auto mb-6 h-16 w-16 opacity-90" />
            <h2 className="text-3xl font-extrabold md:text-5xl">Readers Are Googling You. Be Worth Finding.</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              Book a free consultation with our team. We&apos;ll talk through your books, your goals, and what your author website needs to bring in more readers.
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
