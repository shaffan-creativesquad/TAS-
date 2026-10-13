import type { Metadata } from "next";
import Link from "next/link";
import { PenLine, BookOpen, Palette, Globe, Megaphone, Headphones, CheckCircle, ArrowRight, Star, FileText, Rss, Video, Briefcase, Baby, Image, Monitor, Laptop, Printer, TrendingUp, BarChart2 } from "lucide-react";
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
    badge: "MOST POPULAR",
    title: "Ghostwriting",
    subtitle: "Your ideas, written in your voice",
    desc: "Our ghostwriters write your book from start to finish, whether you have a detailed outline or just an idea. A signed NDA protects every project, and yours is the only name on the cover.",
    features: [
      "Fiction, Non-Fiction & Memoirs",
      "Children's & Young Adult Books",
      "Business & Self-Help Books",
      "Biography & Autobiography",
      "NDA Signed Before We Start",
      "Writing Samples During Consultation",
      "Chapter-by-Chapter Reviews",
      "Revision Rounds Included",
    ],
    color: "#0891B2",
    iconBg: "bg-cyan-50",
    iconColor: "text-primary",
    result: "NDA signed before we begin",
  },
  {
    id: "editing",
    icon: BookOpen,
    badge: null,
    title: "Book Editing",
    subtitle: "Where good drafts become great books",
    desc: "Our editors work through every layer of your manuscript, from big-picture structure to the final proofread, so your book reads smoothly and feels professionally finished.",
    features: [
      "Big-Picture Story Development",
      "Chapter and Structure Review",
      "Line-by-Line Polishing",
      "Final Proofread Before Publishing",
      "Feedback From Beta Readers",
      "Consistent Style Throughout",
      "Clear Edits With Helpful Notes",
      "Detailed Summary of Our Feedback",
    ],
    color: "#0891B2",
    iconBg: "bg-cyan-50",
    iconColor: "text-primary",
    result: "Editorial letter with every project",
  },
  {
    id: "design",
    icon: Palette,
    badge: null,
    title: "Cover Design",
    subtitle: "Finally, a book worth judging by its cover",
    desc: "Your cover is the first thing readers notice. Our designers create original, genre-right covers that stand out on Amazon, on bookstore shelves, and across social media.",
    features: [
      "Original Custom Artwork",
      "Genre-Specific Design",
      "Print-Ready Files (CMYK 300 dpi)",
      "eBook Cover (RGB)",
      "Spine & Back Cover Design",
      "3D Book Mockups",
      "Multiple Initial Concepts",
      "Revision Rounds Included",
    ],
    color: "#0891B2",
    iconBg: "bg-cyan-50",
    iconColor: "text-primary",
    result: "Designed for print, eBook, and online stores",
  },
  {
    id: "publishing",
    icon: Globe,
    badge: "GLOBAL REACH",
    title: "Publishing & Distribution",
    subtitle: "Formatted, published, and ready to sell",
    desc: "We handle formatting, ISBN registration, copyright, and distribution to major retailers around the world. Your royalties go straight to your own author account.",
    features: [
      "ISBN & Copyright Registration",
      "Print Interior Formatting",
      "eBook Formatting (EPUB)",
      "Amazon KDP Setup & Optimization",
      "IngramSpark Distribution",
      "Global Retailer Distribution",
      "Amazon Author Central Setup",
      "100% Royalty Ownership",
    ],
    color: "#0891B2",
    iconBg: "bg-cyan-50",
    iconColor: "text-primary",
    result: "You keep 100% of your royalties",
  },
  {
    id: "book-marketing",
    icon: Megaphone,
    badge: null,
    title: "Book Marketing",
    subtitle: "Marketing that sells books worldwide",
    desc: "Great books still need help being found. We combine Amazon optimization, social media, email, press outreach, and BookTok campaigns to build interest before launch and keep sales moving after it.",
    features: [
      "Amazon Listing and Keyword Setup",
      "Custom Launch Plan for Your Genre",
      "Social Media Content and Campaigns",
      "Reader Email Sequences",
      "Press Releases Sent to Media",
      "Early Reader Review Program",
      "BookTok and Bookstagram Outreach",
      "Clear Reports After Launch",
    ],
    color: "#0891B2",
    iconBg: "bg-cyan-50",
    iconColor: "text-primary",
    result: "Strategy built around your genre",
  },
  {
    id: "audiobooks",
    icon: Headphones,
    badge: null,
    title: "Audiobooks",
    subtitle: "Audiobooks that keep listeners hooked",
    desc: "We cast the right narrator, record in professional studios, and handle post-production, then distribute your audiobook to Audible, Spotify, Apple Books, and other major audio platforms.",
    features: [
      "Hand-Picked Narrator for Your Book",
      "Recording in Professional Studios",
      "Editing and Final Sound Polish",
      "Publishing on Audible Through ACX",
      "Wider Release Through Findaway Voices",
      "Single or Multi-Voice Narration",
      "Flexible Royalty or One-Time Payment",
      "Narration in Spanish and French",
    ],
    color: "#0891B2",
    iconBg: "bg-cyan-50",
    iconColor: "text-primary",
    result: "Distributed to all major audio platforms",
  },
];

const moreServices = [
  { icon: BarChart2,  title: "Digital Marketing",              desc: "Online campaigns that help readers find and buy your book.",                          href: "/services/digital-marketing" },
  { icon: Megaphone,  title: "Author Marketing",               desc: "Build your author brand and a loyal reader community.",                               href: "/services/author-marketing" },
  { icon: FileText,   title: "Article Writing & Publishing",   desc: "Well-researched articles and guest posts that build your authority.",                  href: "/services/article-writing" },
  { icon: Rss,        title: "Blog Writing",                   desc: "Blog posts readers want to keep reading.",                                             href: "/services/blog-writing" },
  { icon: Video,      title: "Book Trailer",                   desc: "Short videos that bring your story to life.",                                          href: "/services/book-trailer" },
  { icon: Briefcase,  title: "Business Proposal Writing",      desc: "Clear, convincing proposals and white papers.",                                        href: "/services/business-proposal" },
  { icon: Baby,       title: "Children's Book Publication",    desc: "Publishing support for children's books.",                                             href: "/services/childrens-book-publication" },
  { icon: Image,      title: "Children's Book Illustrations",  desc: "Original artwork for your characters and story.",                                      href: "/services/book-illustrations" },
  { icon: Monitor,    title: "Web Content Writing",            desc: "Website copy that sounds like you and connects with readers.",                         href: "/services/web-content" },
  { icon: Laptop,     title: "Author Website Design",          desc: "Professional author websites built to showcase your books.",                           href: "/services/author-website" },
  { icon: PenLine,    title: "Children's Book Editing",        desc: "Children's stories written for every age group and format.",                           href: "/services/childrens-book-editing" },
  { icon: Printer,    title: "Book Printing",                  desc: "Print-on-demand and bulk printing in professional quality.",                           href: "/services/book-printing" },
  { icon: Globe,      title: "Formatting Services",            desc: "Clean print and eBook interiors that meet every platform's standards.",                href: "/services/book-formatting" },
  { icon: TrendingUp, title: "Book Promotion",                 desc: "Targeted promotions that get readers talking about your book.",                        href: "/services/book-promotion" },
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
          <FadeUp delay={0}><span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 block">WRITE. PUBLISH. SELL.</span></FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl font-black text-brand-dark leading-[1.1] mb-5">
              <span className="text-black">Professional Publishing Services,</span><br />
              <span className="text-primary">From Writing to Marketing</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="text-brand-body text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Getting a book published involves a lot of moving parts. We handle everything from writing and editing to design, publishing, and marketing, so you don&apos;t have to find and manage different people for every step.
            </p>
          </FadeUp>

          <FadeUp delay={0.24}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {[
                { title: "Ghostwriting",   slug: "ghostwriting" },
                { title: "Book Editing",   slug: "editing" },
                { title: "Cover Design",   slug: "cover-design" },
                { title: "Publishing",     slug: "publishing" },
                { title: "Book Marketing", slug: "book-marketing" },
                { title: "Audiobooks",     slug: "audiobooks" },
              ].map(s => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="border border-slate-200 hover:border-primary hover:text-primary text-slate-600 text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                >
                  {s.title}
                </Link>
              ))}
              <Link
                href="#more-services"
                className="border border-slate-200 hover:border-primary hover:text-primary text-slate-600 text-xs font-semibold px-4 py-2 rounded-full transition-colors"
              >
                Explore More
              </Link>
            </div>
            <FadeUp delay={0.36}>
              <div className="pt-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted mb-5">Stories We&apos;ve Brought to Life</p>
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
                      See the books our authors have published in our{" "}
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
      <section id="more-services" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">WE ALSO OFFER</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-brand-dark">
                <span className="text-black">More Ways We </span><span className="text-primary">Help Authors</span>
              </h2>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {moreServices.map((s, i) => (
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
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">
              Still Deciding? Let&apos;s Talk It Through.
            </h2>
            <p className="text-white/80 text-sm mb-8 max-w-lg mx-auto">
              Book a free consultation. Our team will look at your project and recommend the services that fit your goals and budget.
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
