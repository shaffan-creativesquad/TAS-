import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, BookMarked, Award, BookOpen, Globe } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Professional Book Publishing Services | The Author Success",
  description: "Self-publishing services that take your manuscript worldwide, with every royalty paid to you. Formatting, ISBNs, platform setup, and global book distribution.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "Book Publishing Services";
const headline = "Book Publishing From First Proof to Worldwide Release.";
const subline = "Self-publishing services that take your manuscript worldwide, with every royalty paid to you.";
const desc = "Publishing shouldn't feel like a second full-time job. We handle formatting, ISBNs, platform setup, and global book distribution, so you can publish a book online without decoding dashboards or chasing deadlines. Your book looks professional, reaches readers everywhere, and stays yours entirely.";

const stats = [
  { value: "100% Royalties", label: "Every sale paid to you", Icon: Award },
  { value: "Print + eBook", label: "Formatted for every format", Icon: BookOpen },
  { value: "Amazon Ready", label: "Full KDP setup handled", Icon: BookMarked },
  { value: "Worldwide Reach", label: "Online stores, bookstores, libraries", Icon: Globe },
];

const subServices = [
  { tag: "AMAZON", title: "Amazon KDP Publishing", desc: "Our Amazon KDP publishing services set up your Kindle eBook and paperback with optimized titles, descriptions, categories, and keywords, plus your Amazon Author Central profile and Kindle Direct Publishing help, minus the headaches." },
  { tag: "GLOBAL", title: "Worldwide Distribution", desc: "Our book publishing and distribution setup places your title with online retailers, bookstores, and libraries around the world, so readers can find it wherever they shop." },
  { tag: "DIGITAL", title: "eBook Formatting", desc: "Clean, reflowable eBook files that read beautifully on Kindle, Apple Books, Kobo, and other major e-readers." },
  { tag: "PRINT", title: "Print Interior Formatting", desc: "Print-ready interiors with proper margins, fonts, headers, page numbers, and chapter styling, so your paperback or hardcover looks bookstore-ready." },
];

const steps = [
  { num: "01", title: "Manuscript Review & Consultation", desc: "Tell us about your book and your goals. We review your manuscript for publishing readiness, flag anything that needs fixing, and recommend the right package for your project." },
  { num: "02", title: "Formatting & Design", desc: "We format your interior for print and eBook, making sure your book looks polished and professional on every page and every screen." },
  { num: "03", title: "ISBN & Platform Setup", desc: "Our ISBN publishing services register your ISBNs and set up your publisher details. We then build and optimize your Amazon KDP listing and configure your wider distribution channels." },
  { num: "04", title: "Publish & Distribute", desc: "Your book goes live on Amazon and rolls out through our global book distribution network to retailers, bookstores, and libraries, while you keep every royalty." },
];

const included = [
  "Print interior formatting",
  "eBook formatting for all major e-readers",
  "ISBN registration (print and digital)",
  "Copyright guidance",
  "Amazon KDP account setup",
  "Kindle eBook and paperback publishing",
  "Book description copywriting",
  "Category and keyword research",
  "Amazon Author Central setup",
  "Wide distribution setup",
  "Global retail and library reach",
  "100% royalties paid to your account",
];

const testimonials = [
  { quote: "Publishing my first book felt overwhelming until I had a team guiding every step. From preparing the manuscript and finalizing the cover to setting up the files for print and eBook, the process was clear, organized, and much easier than I expected.", name: "Hannah Reed", title: "Self-Help Author", result: "First Book Published" },
  { quote: "I wanted a book that looked professional in readers' hands and online. The attention to formatting, cover design, and publishing details gave my manuscript a polished final result that truly reflects the quality of my work.", name: "Victor Hayes", title: "Business Author", result: "Print & eBook Release" },
  { quote: "The best part was seeing my book move from a finished draft to a title available for readers to purchase. The team explained distribution in simple terms, kept me informed, and made sure every launch detail was handled with care.", name: "Amara Wells", title: "Memoir Author", result: "Distribution & Launch" },
];

const faqs = [
  { q: "How long does it take to publish a book?", a: "This depends on where your manuscript starts. A finished, edited manuscript moves quickly through formatting and setup, while projects that include writing or editing take longer. Most full projects span three to six months from consultation to launch, and we'll give you a clear timeline upfront." },
  { q: "How much does it cost to publish a book?", a: "Book publishing costs depend on your format, page count, and the services you need. We offer custom book publishing packages so you only pay for what your book actually requires, with no hidden fees." },
  { q: "Do I keep my royalties?", a: "Yes, all of them. Our self-publishing services never take a share of your sales. Your book, your rights, your earnings." },
  { q: "Where will my book be available?", a: "Through our book publishing and distribution setup, your book can reach Amazon, Barnes & Noble, Apple Books, Kobo, and other leading online retailers, along with bookstores and libraries worldwide." },
  { q: "Will my book be in physical bookstores?", a: "Your book becomes available for bookstores and libraries to order through global distribution channels. Shelf placement is up to individual stores, but we make sure your book is listed and easy to find." },
  { q: "Do I need my own Amazon account?", a: "Your book is published under your own KDP account, so the royalties and rights stay with you. If you don't have one yet, our Kindle Direct Publishing help covers the full setup." },
  { q: "Can you help me publish a book online if I've never done it before?", a: "Absolutely. We guide first-time authors through every step to publish a book online, from formatting to launch, so nothing feels confusing or overwhelming." },
];

export default function BookPublishingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: `linear-gradient(145deg, ${COLOR}22 0%, #ffffff 50%, ${COLOR}12 100%)` }}>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white" style={{ background: COLOR }}>{badge}</div>
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-4"><span className="text-black">Book Publishing</span><br /><span className="text-primary">From First Proof to Worldwide Release.</span></h1>
                <p className="text-lg font-semibold mb-4" style={{ color: COLOR }}>{subline}</p>
                <p className="text-brand-body leading-relaxed mb-8">{desc}</p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:opacity-90" style={{ background: COLOR }}>Get a Free Quote <ArrowRight size={16} /></Link>
                  <Link href="/portfolio" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-800 text-slate-800 font-bold px-7 py-4 rounded-full transition-all">See Our Work</Link>
                </div>
              </div>
            </SlideLeft>
            <SlideRight delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ value, label, Icon }, i) => (
                  <FadeUp key={label} delay={i * 0.08}>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${COLOR}15` }}><Icon size={18} style={{ color: COLOR }} /></div>
                      <div className="font-[family-name:var(--font-playfair)] text-xl font-black text-brand-dark">{value}</div>
                      <div className="text-xs text-brand-muted mt-0.5">{label}</div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>What We Offer</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">All Your Publishing Needs, </span><span style={{ color: COLOR }}>Covered</span></h2>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {subServices.map((sub, i) => (
              <FadeUp key={sub.title} delay={i * 0.08}>
                <div className="rounded-2xl p-6 border border-slate-100 hover:border-transparent hover:shadow-xl transition-all flex flex-col items-center text-center" style={{ background: LIGHT_BG }}>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full text-white inline-block mb-4" style={{ background: COLOR }}>{sub.tag}</span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-brand-dark mb-2">{sub.title}</h3>
                  <p className="text-sm text-brand-body leading-relaxed">{sub.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>How It Works</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Our Proven </span><span style={{ color: COLOR }}>Process</span></h2>
            </div>
          </FadeUp>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px border-t-2 border-dashed" style={{ borderColor: `${COLOR}40` }} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <FadeUp key={step.num} delay={i * 0.08}>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 font-[family-name:var(--font-playfair)] text-xl font-black text-white shadow-lg" style={{ background: COLOR }}>{step.num}</div>
                    <h4 className="font-bold text-brand-dark text-center text-sm mb-2">{step.title}</h4>
                    <p className="text-xs text-brand-muted text-center leading-relaxed">{step.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVERYTHING INCLUDED */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block text-[#CFFAFE]">Everything Included</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">Zero Hidden Fees.<br />Zero Royalty Cuts.</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">Our book publishing packages include everything below in your quoted price. You get affordable publishing services with transparent book publishing costs, with no hidden fees, no royalty splits, and no surprise invoices.</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><BookMarked size={22} className="text-white" /></div>
                  <div>
                    <div className="text-white font-semibold text-sm">Free Consultation Included</div>
                    <div className="text-[#CFFAFE] text-xs">Talk to a publishing specialist before you commit. No pressure, no obligation.</div>
                  </div>
                </div>
              </div>
            </SlideLeft>
            <SlideRight delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle size={15} className="shrink-0 mt-0.5 text-white" />
                    <span className="text-[#CFFAFE] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* AUTHOR STORIES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>Author Stories</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Authors Who </span><span style={{ color: COLOR }}>Hit Publish</span></h2>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <div className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex mb-4">{[1,2,3,4,5].map(j => <Star key={j} size={13} className="text-amber-400 fill-amber-400" />)}</div>
                  <p className="font-[family-name:var(--font-playfair)] text-base italic text-brand-dark-2 mb-6 leading-relaxed text-center">&quot;{t.quote}&quot;</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-xs shrink-0" style={{ background: COLOR }}>{t.name.split(" ").map(n => n[0]).join("")}</div>
                      <div>
                        <div className="font-bold text-sm text-brand-dark">{t.name}</div>
                        <div className="text-xs text-brand-muted">{t.title}</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-black uppercase px-2.5 py-1 rounded-full whitespace-nowrap" style={{ background: `${COLOR}15`, color: COLOR }}>{t.result}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Straight Answers, </span><span style={{ color: COLOR }}>Ready to Print</span></h2>
            </div>
          </FadeUp>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4"><span className="text-white">Your Book Is Ready.</span><br /><span className="text-white">The World Is Waiting.</span></h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Book a free consultation with a publishing specialist and get a clear plan, timeline, and quote for book publishing and distribution that fits your goals.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white font-bold px-10 py-4 rounded-full shadow-lg transition-all hover:bg-white/90" style={{ color: "#089bb2" }}>Book Free Consultation <ArrowRight size={18} /></Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-full transition-all">All Services</Link>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
