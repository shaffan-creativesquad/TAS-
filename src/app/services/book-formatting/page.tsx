import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, BookOpen, Award, Clock, Globe } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Professional Book Formatting Services | The Author Success",
  description: "Print and eBook interior formatting for Amazon KDP, IngramSpark, and all platforms. 3,000+ books formatted. Fast delivery, platform-approved files guaranteed.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "Book Formatting";
const headline = "Book Formatting, From Draft to Bookshelf";
const subline = "Publish-ready interiors for print and eBook, built to meet the requirements of every major platform.";
const desc = "Good formatting can make a big difference in how your book looks and feels. Our book formatting services turn your manuscript into clean, ready-to-publish print and eBook files that work with Amazon KDP, IngramSpark, and other platforms. Your book will look good and be easy to read on every page and screen.";
const serviceLabel = "Formatting";

const stats = [
  { value: "Print-Ready", label: "PDF Files", Icon: BookOpen },
  { value: "Every", label: "eReader Supported", Icon: Globe },
  { value: "KDP +", label: "IngramSpark Ready", Icon: Award },
  { value: "Genre", label: "Typography", Icon: Clock },
];

const subServices = [
  { tag: "Print", title: "Print Interior Formatting", desc: "Professional print layouts with the right margins, fonts, headers, page numbers, and chapter styling, so your paperback or hardcover feels like it came from a major publisher." },
  { tag: "eBook", title: "Kindle & eBook Formatting", desc: "Our Kindle formatting services and eBook formatting services produce clean, reflowable files that read smoothly on Kindle, Apple Books, Kobo, Nook, and every major eReader." },
  { tag: "Complex", title: "Complex Layout Formatting", desc: "Cookbooks, workbooks, children's books, and illustrated guides with images, tables, and special layouts that need extra care to get right." },
  { tag: "Series", title: "Series Formatting", desc: "Matching styles across every book in your series, so readers get the same polished, consistent look from book one to the latest release." },
];

const steps = [
  { num: "01", title: "File Review", desc: "Our manuscript formatting services start with a full review of your file, so we can catch and fix any issues before the formatting begins." },
  { num: "02", title: "Style Setup", desc: "We choose your typography, spacing, chapter headings, and overall style based on your genre and the look you have in mind." },
  { num: "03", title: "Print & eBook Formatting", desc: "We build your print interior to your chosen trim size and create your eBook files, making sure both meet each platform's technical requirements." },
  { num: "04", title: "Quality Check & Delivery", desc: "Every file goes through a final quality check before delivery, along with guidance to help you upload to each platform with confidence." },
];

const included = [
  "Print interior formatting (PDF)",
  "eBook formatting (EPUB)",
  "Kindle-ready files",
  "Trim size setup",
  "Font and typography setup",
  "Chapter heading design",
  "Page numbers, headers, and footers",
  "Table of contents for print and digital",
  "Front matter formatting",
  "Back matter formatting",
  "Amazon KDP and IngramSpark specification compliance",
  "Platform upload guidance",
];

const testimonials = [
  { quote: "I honestly didn't realize how much formatting could change the look of a book. Once they worked on my manuscript, it just looked so much better. The pages, spacing, fonts, and chapter headings all felt right. It no longer looked like something I had typed up in Word.", name: "David M.", title: "Fiction Author", result: "Print Ready" },
  { quote: "I thought the eBook part would be simple, but there was a lot more to it than I expected. They took care of the Kindle version and made sure it looked good on different screens. I didn't have to worry about the technical side, and they kept things easy for me.", name: "Laura R.", title: "Romance Author", result: "Kindle Ready" },
  { quote: "I had tables, pictures, and quite a few different sections in my book, so I was worried the formatting would be all over the place. They took their time with it and got everything sorted out. When I got the final files, everything looked the way it should.", name: "James T.", title: "Non-Fiction Author", result: "Complex Layout" },
];

const faqs = [
  { q: "What file should I send you?", a: "A Word document works best, but we can also work with Google Docs and most other common formats. We'll let you know if anything needs adjusting before we begin." },
  { q: "What trim sizes do you support?", a: "We format for all standard trim sizes offered by Amazon KDP and IngramSpark, and we can recommend the best size for your genre if you're unsure." },
  { q: "Does formatting include cover design?", a: "Cover design is a separate service, but we can handle both together so your cover and interior work as one finished book." },
  { q: "Will my eBook work on all eReaders?", a: "Yes. We create EPUB files and check them for Kindle, Apple Books, Kobo, Nook, and other major eReaders, so your book reads smoothly on any device." },
  { q: "How do I know my files will be accepted by KDP?", a: "Every file is built to Amazon KDP and IngramSpark specifications and checked before delivery. We also guide you through the upload, so there are no surprises." },
  { q: "How much do book formatting services cost?", a: "Every project is quoted individually based on your book's length, layout, and the formats you need. The price you're quoted is the price you pay, with no hidden fees." },
];

export default function FormattingServicesPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: `linear-gradient(145deg, ${COLOR}22 0%, #ffffff 50%, ${COLOR}12 100%)` }}>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white" style={{ background: COLOR }}>{badge}</div>
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-4"><span className="text-black">Book Formatting,</span><br /><span className="text-primary">From Draft to Bookshelf</span></h1>
                <p className="text-lg font-semibold mb-4" style={{ color: COLOR }}>{subline}</p>
                <p className="text-brand-body leading-relaxed mb-8">{desc}</p>
                <div className="flex flex-wrap gap-3">
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
                      <div className="font-[family-name:var(--font-playfair)] text-2xl font-black text-brand-dark">{value}</div>
                      <div className="text-xs text-brand-muted mt-0.5">{label}</div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>What We Offer</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Print, Kindle, or Complex Layouts, </span><span style={{ color: COLOR }}>We Handle It All</span></h2>
              <p className="text-brand-body mt-3 max-w-2xl mx-auto">Whether you&apos;re publishing a novel, memoir, business book, or something completely different, we make sure your book is properly formatted, easy to read, and ready to publish.</p>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {subServices.map((sub, i) => (
              <FadeUp key={sub.title} delay={i * 0.08}>
                <div className="rounded-2xl p-6 border border-slate-100 hover:border-transparent hover:shadow-xl transition-all" style={{ background: LIGHT_BG }}>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full text-white inline-block mb-4" style={{ background: COLOR }}>{sub.tag}</span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-brand-dark mb-2">{sub.title}</h3>
                  <p className="text-sm text-brand-body leading-relaxed">{sub.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>How It Works</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Our Proven </span><span style={{ color: COLOR }}>Process</span></h2>
              <p className="text-brand-body mt-3 max-w-xl mx-auto">A clear, organized process so you always know where your files stand and what&apos;s coming next.</p>
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
      <section className="py-20 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block text-[#CFFAFE]">Everything Included</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">Everything Your Book<br />Needs to Go Live</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">Your quote includes everything, from file analysis right up to delivery. There will be no surprises as to what your costs will be before we even begin.</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><BookOpen size={22} className="text-white" /></div>
                  <div>
                    <div className="text-white font-semibold text-sm">Free Consultation Included</div>
                    <div className="text-[#CFFAFE] text-xs">Talk to our team about your book before you commit. No obligation, no pressure.</div>
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>Author Stories</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Well-Formatted Books, </span><span style={{ color: COLOR }}>Well-Pleased Authors</span></h2>
              <p className="text-brand-body mt-3 max-w-xl mx-auto">In their own words, from authors who trusted us to get their pages ready for readers.</p>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <div className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex mb-4">{[1,2,3,4,5].map(j => <Star key={j} size={13} className="text-amber-400 fill-amber-400" />)}</div>
                  <p className="font-[family-name:var(--font-playfair)] text-base italic text-brand-dark-2 mb-6 leading-relaxed">&quot;{t.quote}&quot;</p>
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
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              {/* <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>FAQ</span> */}
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Common </span><span style={{ color: COLOR }}>Questions</span></h2>
            </div>
          </FadeUp>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><BookOpen size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4"><span className="text-white">Ready to Get Started?</span></h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Book a free 30-minute consultation with one of our publishing experts. No commitment — just honest advice about your project.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white font-bold px-10 py-4 rounded-full shadow-lg transition-all hover:bg-white/90" style={{ color: "#089bb2" }}>Book Free Consultation <ArrowRight size={18} /></Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-primary text-brand-dark-2 font-bold px-8 py-4 rounded-full transition-all">All Services</Link>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
