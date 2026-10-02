import type { Metadata } from "next";
import Link from "next/link";
import { PenLine, BookOpen, Palette, Globe, Megaphone, Headphones, CheckCircle, ArrowRight, Star, FileText, Rss, Video, Briefcase, Baby, Image, Monitor, Laptop, Printer, TrendingUp, BarChart2, Mic, BookMarked } from "lucide-react";
import { FadeUp, ScaleIn } from "@/components/ui/Animate";
import BookCoversStrip from "@/components/ui/BookCoversStrip";

export const metadata: Metadata = {
  title: "Services | The Author Success",
  description: "Professional ghostwriting, editing, cover design, publishing, marketing, and audiobook services.",
};

const services = [
  {
    id: "ghostwriting",
    icon: PenLine,
    badge: "Most Popular",
    title: "Ghostwriting",
    subtitle: "Your story, written by experts — in your voice",
    desc: "Our team of professional ghostwriters crafts your entire book from scratch. Whether you have a fully developed outline or just a spark of an idea, we transform it into a compelling, publish-ready manuscript. Every project is covered by a signed NDA — your name on the cover, and your story stays yours forever.",
    features: [
      "Fiction, Non-Fiction & Memoirs",
      "Children's & Young Adult Books",
      "Business & Self-Help Books",
      "Biography & Autobiography",
      "NDA signed before we start",
      "Sample chapter before commitment",
      "Chapter-by-chapter reviews",
      "Unlimited revision rounds",
    ],
    color: "#0891B2",
    iconBg: "bg-cyan-50",
    iconColor: "text-primary",
    result: "Avg. delivery: 8–10 weeks",
  },
  {
    id: "editing",
    icon: BookOpen,
    badge: null,
    title: "Book Editing",
    subtitle: "Flawless manuscripts that editors love",
    desc: "Our editorial team provides multi-level editing — from structural development all the way to final proofreading. We make sure your book reads with clarity, flow, and the kind of polish that convinces readers to leave five-star reviews.",
    features: [
      "Developmental Editing",
      "Structural Editing",
      "Line Editing & Copy Editing",
      "Proofreading",
      "Beta Reader Coordination",
      "Style Guide Adherence",
      "Tracked Changes with Notes",
      "Editorial Letter Included",
    ],
    color: "#0891B2",
    iconBg: "bg-cyan-50",
    iconColor: "text-primary",
    result: "Avg. delivery: 2–4 weeks",
  },
  {
    id: "design",
    icon: Palette,
    badge: null,
    title: "Cover Design",
    subtitle: "Covers that stop the scroll and sell the book",
    desc: "A professional cover is the single most powerful marketing tool for your book. Our designers create genre-accurate, eye-catching covers that stand out in Amazon search results, on bookstore shelves, and across social media.",
    features: [
      "Custom Original Artwork",
      "Genre-Specific Aesthetics",
      "Print-Ready Files (CMYK 300dpi)",
      "eBook Cover (RGB)",
      "Spine & Back Cover Design",
      "3D Book Mockup Renders",
      "3 Initial Concepts Provided",
      "Unlimited Revisions",
    ],
    color: "#0891B2",
    iconBg: "bg-cyan-50",
    iconColor: "text-primary",
    result: "Avg. delivery: 10–14 days",
  },
  {
    id: "publishing",
    icon: Globe,
    badge: "Global Reach",
    title: "Publishing & Distribution",
    subtitle: "From manuscript to global bookstores",
    desc: "We handle the complete publishing process — interior formatting for print and digital, ISBN registration, copyright filing, and global distribution to over 40 major platforms. You keep 100% of your royalties, paid directly to your author account.",
    features: [
      "ISBN & Copyright Registration",
      "Print Interior Formatting",
      "eBook Formatting (EPUB/MOBI)",
      "Amazon KDP Setup & Optimization",
      "IngramSpark Distribution",
      "40+ Platform Distribution",
      "Amazon Author Central Setup",
      "100% Royalty Ownership",
    ],
    color: "#0891B2",
    iconBg: "bg-cyan-50",
    iconColor: "text-primary",
    result: "Live on Amazon in 72 hours",
  },
  {
    id: "marketing",
    icon: Megaphone,
    badge: null,
    title: "Book Marketing",
    subtitle: "Get your book in front of the right readers",
    desc: "A great book without marketing stays undiscovered. Our data-driven marketing strategies combine Amazon optimization, social media campaigns, email marketing, press releases, and BookTok influencer outreach to maximize your book's visibility and sales from day one.",
    features: [
      "Amazon SEO & Keyword Optimization",
      "Book Launch Strategy",
      "Social Media Marketing",
      "Email Marketing Campaigns",
      "Press Release Writing & Distribution",
      "ARC (Advance Review Copy) Program",
      "BookTok & Bookstagram Campaigns",
      "Post-Launch Analytics Reports",
    ],
    color: "#0891B2",
    iconBg: "bg-cyan-50",
    iconColor: "text-primary",
    result: "Avg. 3x sales increase at launch",
  },
  {
    id: "audiobooks",
    icon: Headphones,
    badge: null,
    title: "Audiobooks",
    subtitle: "Reach millions of listeners worldwide",
    desc: "The audiobook market is the fastest growing segment in publishing. We handle professional narration casting, studio-quality recording, post-production mastering, and distribution to Audible, Spotify, Apple Books, and all major audio platforms.",
    features: [
      "Professional Narrator Casting",
      "Studio-Quality Recording",
      "Full Post-Production & Mastering",
      "ACX (Audible) Distribution",
      "Findaway Voices Distribution",
      "Multiple Narrator Options",
      "Royalty Share or Flat Fee",
      "Spanish & French Narration Available",
    ],
    color: "#0891B2",
    iconBg: "bg-cyan-50",
    iconColor: "text-primary",
    result: "Avg. delivery: 3–5 weeks",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white to-slate-50/30 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp delay={0}><span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 block">Full-Service Publishing</span></FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl font-black text-brand-dark leading-[1.1] mb-5">
              <span className="text-black">Every Service You Need</span><br />
              <span className="text-gradient">To Publish Your Book</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="text-brand-body text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Six world-class publishing services under one roof. No juggling freelancers, no guesswork — just professional results from start to finish.
            </p>
          </FadeUp>

          <FadeUp delay={0.24}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {[
                { title: "Ghostwriting", slug: "ghostwriting" },
                { title: "Book Editing", slug: "editing" },
                { title: "Cover Design", slug: "cover-design" },
                { title: "Publishing", slug: "publishing" },
                { title: "Book Marketing", slug: "marketing" },
                { title: "Audiobooks", slug: "audiobooks" },
              ].map(s => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="border border-slate-200 hover:border-primary hover:text-primary text-slate-600 text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                >
                  {s.title}
                </Link>
              ))}
            </div>
            <FadeUp delay={0.36}>
              <div className="pt-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted mb-5">Books We&apos;ve Helped Publish</p>
                <BookCoversStrip count={7} width={68} />
              </div>
            </FadeUp>
          </FadeUp>
        </div>
      </section>

      {/* ── FILTER CHIPS ── */}
      <section className="sticky top-[68px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: "All",        active: true  },
              { label: "Writing",    active: false },
              { label: "Editing",    active: false },
              { label: "Design",     active: false },
              { label: "Publishing", active: false },
              { label: "Marketing",  active: false },
            ].map(chip => (
              <span
                key={chip.label}
                className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-colors cursor-default ${
                  chip.active
                    ? "bg-primary text-white border-primary"
                    : "border-slate-200 text-slate-500 hover:border-primary hover:text-primary"
                }`}
              >
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          {services.map((s, i) => (
            <FadeUp key={s.id} delay={i * 0.06}>
              <div
                id={s.id}
                className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                {/* Color panel */}
                <div
                  className={`p-10 flex flex-col justify-between ${i % 2 === 1 ? "lg:order-2" : ""}`}
                  style={{ background: `linear-gradient(135deg, ${s.color}15 0%, ${s.color}08 100%)`, borderLeft: `4px solid ${s.color}` }}
                >
                  {s.badge && (
                    <span
                      className="self-start text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full text-white mb-4"
                      style={{ background: s.color }}
                    >
                      {s.badge}
                    </span>
                  )}
                  <div>
                    <div className={`w-14 h-14 ${s.iconBg} rounded-2xl flex items-center justify-center mb-5`}>
                      <s.icon size={24} className={s.iconColor} />
                    </div>
                    <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-brand-dark mb-2">
                      {s.title}
                    </h2>
                    <p className="font-semibold text-sm mb-4" style={{ color: s.color }}>{s.subtitle}</p>
                    <p className="text-brand-body leading-relaxed text-sm mb-6">{s.desc}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-xs font-semibold text-brand-muted">{s.result}</span>
                    </div>
                    <Link
                      href={`/services/${s.id === "design" ? "cover-design" : s.id}`}
                      className="inline-flex items-center gap-2 text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-lg transition-all hover:opacity-90"
                      style={{ background: s.color }}
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Features panel */}
                <div className={`bg-white p-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h4 className="font-bold text-brand-dark text-sm uppercase tracking-wider mb-5">
                    What&apos;s Included
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {s.features.map(f => (
                      <div key={f} className="flex items-start gap-2.5">
                        <CheckCircle size={15} className="shrink-0 mt-0.5" style={{ color: s.color }} />
                        <span className="text-sm text-brand-dark-2">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex">
                        {[1,2,3,4,5].map(j => <Star key={j} size={12} className="text-amber-400 fill-amber-400" />)}
                      </div>
                      <span className="text-xs font-semibold text-brand-dark">4.9/5 satisfaction</span>
                    </div>
                    <p className="text-xs text-brand-muted">
                      Hundreds of authors have used this service. See their results in our{" "}
                      <Link href="/portfolio" className="text-primary font-semibold hover:underline">portfolio →</Link>
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── MORE SERVICES GRID ── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">We Also Offer</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-brand-dark">
                <span className="text-black">More Services for Every </span><span className="text-primary">Author</span>
              </h2>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              { icon: BookMarked, title: "Book Publishing",               desc: "End-to-end book publishing on Amazon KDP and global platforms.",         href: "/services/book-publishing" },
              { icon: TrendingUp, title: "Book Promotion",                desc: "Strategic promotion campaigns to boost visibility and sales.",            href: "/services/book-promotion" },
              { icon: FileText,   title: "eBook Writing",                 desc: "Professional eBook writing for any topic, niche, or audience.",          href: "/services/ebook-writing" },
              { icon: Globe,      title: "Formatting Services",           desc: "Print and digital interior formatting to industry standards.",            href: "/services/formatting-services" },
              { icon: BarChart2,  title: "Digital Marketing",             desc: "Full-funnel digital marketing campaigns for authors and books.",          href: "/services/digital-marketing" },
              { icon: Megaphone,  title: "Author Marketing",              desc: "Build your author brand and grow a loyal reader community.",              href: "/services/author-marketing" },
              { icon: Mic,        title: "Audio Book Recording",          desc: "Studio-quality narration and full post-production mastering.",            href: "/services/audio-book-recording" },
              { icon: FileText,   title: "Article Writing & Publishing",  desc: "SEO-optimized articles and guest posts to build your authority.",         href: "/services/article-writing" },
              { icon: Rss,        title: "Blog Writing",                  desc: "Consistent, engaging blog content that attracts readers.",                href: "/services/blog-writing" },
              { icon: Video,      title: "Book Trailer",                  desc: "Cinematic book trailers for social media and Amazon pages.",              href: "/services/book-trailer" },
              { icon: Briefcase,  title: "Business Proposal Writing",     desc: "Persuasive, polished business proposals and white papers.",               href: "/services/business-proposal" },
              { icon: Baby,       title: "Children Book Publication",     desc: "Complete publishing service for children's picture books.",               href: "/services/childrens-book-publication" },
              { icon: Image,      title: "Children's Book Illustrations", desc: "Vibrant, age-appropriate illustrations for children's books.",            href: "/services/book-illustrations" },
              { icon: Monitor,    title: "Web Content Writing",           desc: "Website copy, landing pages, and brand messaging that converts.",         href: "/services/web-content" },
              { icon: Laptop,     title: "Author Website Design",         desc: "Beautiful, professional author websites built to grow your brand.",       href: "/services/author-website" },
              { icon: PenLine,    title: "Children Book Writing",         desc: "Expert children's book writing across all age groups and formats.",       href: "/services/children-book-writing" },
              { icon: Printer,    title: "Book Printing",                 desc: "High-quality print-on-demand and bulk printing solutions.",               href: "/services/book-printing" },
            ].map((s, i) => (
              <FadeUp key={s.title} delay={(i % 4) * 0.07}>
                <Link
                  href={s.href}
                  className="group bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-lg hover:border-cyan-100 hover:-translate-y-1 transition-all block h-full"
                >
                  <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center mb-4">
                    <s.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] font-bold text-brand-dark text-sm mb-1.5">{s.title}</h3>
                  <p className="text-brand-muted text-xs leading-relaxed mb-3">{s.desc}</p>
                  <span className="text-xs font-bold text-primary group-hover:gap-2 flex items-center gap-1">
                    Learn More <ArrowRight size={11} />
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 mt-10" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">
              Not Sure Which Service<br />You Need?
            </h2>
            <p className="text-white/70 text-sm mb-8 max-w-lg mx-auto">
              Book a free 30-minute consultation. Our publishing experts will review your project and recommend the perfect solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-white/90 font-bold px-10 py-4 rounded-full shadow-xl transition-all"
              style={{ color: "#089bb2" }}
            >
              Book Free Consultation <ArrowRight size={18} />
            </Link>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
