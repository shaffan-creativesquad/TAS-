import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, Palette, Monitor, Layers, RotateCcw } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Professional Book Cover Design Services | The Author Success",
  description: "Custom book cover design that sells. 3 concepts, unlimited revisions, print-ready + eBook files. Genre-specialist designers with 3,000+ covers published.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "VISUAL IMPACT";
const headline = "Covers So Striking, Readers Can't Scroll Past";
const subline = "Captivating, genre-savvy designs that transform curious glances into confident purchases.";
const desc = "Every reader makes a snap judgment before turning a single page, and an exceptional cover makes that moment work in your favor. Our book cover design services bring together accomplished designers who understand the visual cues that make bestsellers irresistible in your genre. Each custom book cover design strikes a rare balance — recognizable to your ideal reader yet distinctly yours.";

const stats = [
  { value: "Designed for Your Genre", label: "Images That Connect with Readers", Icon: Palette },
  { value: "Shines on Amazon", label: "Holds Its Own at Thumbnail Size", Icon: Monitor },
  { value: "Complete Format Coverage", label: "eBook, Print, Spine & Back Cover", Icon: Layers },
  { value: "Refined to Perfection", label: "Until You're Completely Happy", Icon: RotateCcw },
];

const subServices = [
  { tag: "EBOOK", title: "eBook Cover Design", desc: "Our eBook cover design services produce digital covers that stay vivid and legible even at the smallest thumbnail. We study your genre's bestselling titles so your cover feels right at home among them, yet still rises above them." },
  { tag: "PRINT", title: "Full Print Package", desc: "A complete print cover with front, spine, and back, precisely sized to your page count and trim size. Every file is delivered print-ready at 300 dpi in CMYK, with no last-minute surprises at the printer." },
  { tag: "SERIES", title: "Series Branding", desc: "Writing a series? We create a cohesive visual identity that carries across every installment, so readers recognize your books on sight and reach for the next one without hesitation." },
  { tag: "MOCKUPS", title: "3D Mockup Renders", desc: "Lifelike 3D renders of your book, made for social media, press releases, your author website, and Amazon A+ Content pages. They help your launch look polished everywhere it appears." },
];

const steps = [
  { num: "01", title: "Complimentary Consultation", desc: "We begin by understanding your story, genre, comparable titles, preferred mood and palette, and any imagery you envision. This becomes the creative compass for your cover." },
  { num: "02", title: "Writing & Editing", desc: "We distill your book's essence into a sharp design brief, then refine your title treatment, tagline, and back-cover copy so every word on the cover earns its place." },
  { num: "03", title: "Design & Formatting", desc: "Your designer researches your genre's bestsellers and presents distinct concepts, each with its own creative direction. You choose your favorite, and we refine it through revision rounds until every detail feels exactly right." },
  { num: "04", title: "Publish & Launch", desc: "You receive everything you need to go live: a print-ready CMYK PDF, eBook files in RGB JPG or PNG, and editable layered files. Your cover is ready for Amazon, bookstores, and beyond." },
];

const included = [
  "Multiple initial design concepts",
  "In-depth genre bestseller research",
  "eBook cover formatted to Amazon specifications (RGB)",
  "Print-ready front cover (CMYK, 300 dpi)",
  "Spine design sized to your exact page count",
  "Back cover with an elegant blurb layout",
  "Seamless author photo placement",
  "Barcode and ISBN placement",
  "Thoughtful revision rounds until it's perfect",
  "Photorealistic 3D mockup renders",
  "Social media sizing variations",
  "Editable, layered source files",
];

const testimonials = [
  { quote: "My cover stopped people scrolling on Amazon. Sales jumped in week one. The designer nailed the thriller aesthetic perfectly — dark, tense, and impossible to ignore.", name: "Lisa P.", title: "Thriller Author · Amazon Top 100", result: "Amazon Top 100" },
  { quote: "Multiple concepts to choose from, all of them stunning. The final design looks like it belongs next to the biggest names on the shelf. This team gets book covers.", name: "Ryan B.", title: "Crime Fiction Author", result: "Bestseller Week 1" },
  { quote: "My series now has a consistent, professional look that readers immediately recognize. Branding across 5 books — all perfect.", name: "Sofia K.", title: "Fantasy Series Author · 20K Copies", result: "20,000 Copies Sold" },
];

const faqs = [
  { q: "How do I share my vision for the cover?", a: "Through a detailed design brief. You tell us about your genre, comparable titles, preferred mood and colors, and any imagery you have in mind. If you're unsure, our designers will guide you with thoughtful questions and visual references." },
  { q: "What if none of the initial concepts feel right?", a: "That's perfectly fine. We'll discuss what didn't resonate, refine our understanding of your vision, and develop fresh directions until something truly clicks." },
  { q: "Do you design the spine and back cover as well?", a: "Yes. Every print package includes a spine sized to your exact page count and a back cover with an elegant blurb layout, barcode, and ISBN placement." },
  { q: "Which files will I receive?", a: "You'll receive a print-ready CMYK PDF, eBook files in RGB JPG or PNG, social media size variations, and editable layered source files. Everything you need for print, digital, and promotion is included." },
  { q: "Can you design a cover for a series I've already started?", a: "Absolutely. We study your existing covers and create a new design that feels like a natural continuation, keeping your series visually consistent on every shelf." },
];

export default function CoverDesignPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: `linear-gradient(145deg, ${COLOR}22 0%, #ffffff 50%, ${COLOR}12 100%)` }}>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white" style={{ background: COLOR }}>{badge}</div>
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-4"><span className="text-black">Covers So Striking,</span><br /><span className="text-primary">Readers Can't Scroll Past</span></h1>
                <p className="text-lg font-semibold mb-4" style={{ color: COLOR }}>{subline}</p>
                <p className="text-brand-body leading-relaxed mb-8">{desc}</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:opacity-90" style={{ background: COLOR }}>Get Free Quote <ArrowRight size={16} /></Link>
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
                      <div className="font-[family-name:var(--font-playfair)] text-base font-black text-brand-dark leading-snug">{value}</div>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">A Cover for Every Format, </span><span style={{ color: COLOR }}>Shelf, and Screen</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">Our book cover design services span every edition your story will ever need, each one crafted with the same uncompromising attention to detail.</p>
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

      {/* OUR PROCESS */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>How It Works</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">From First Sketch to </span><span style={{ color: COLOR }}>Shelf-Ready Cover</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">A clear, collaborative process that keeps your vision at the heart of every design decision.</p>
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

      {/* WHAT'S INCLUDED */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block text-[#CFFAFE]">Everything Included</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">Transparent Pricing.<br />Not a Single Surprise.</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">Every element below comes standard in your quoted price. We believe great design deserves honest pricing, so there are no hidden fees and no unexpected add-ons.</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><Palette size={22} className="text-white" /></div>
                  <div>
                    <div className="text-white font-semibold text-sm">Free Consultation Included</div>
                    <div className="text-[#CFFAFE] text-xs">Talk to a publishing expert before you commit — no obligation.</div>
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

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>Author Stories</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black">
                <span className="text-black">Real Results, Real </span><span style={{ color: COLOR }}>Authors</span>
              </h2>
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

      {/* FAQ */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              {/* <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>FAQ</span> */}
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Questions </span><span style={{ color: COLOR }}>Worth Asking</span></h2>
            </div>
          </FadeUp>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><Palette size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4"><span className="text-white">Your Story Deserves a Cover Worth Judging</span></h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Book a free 30-minute consultation with one of our publishing experts. No commitment, just candid, thoughtful advice about bringing your cover to life.</p>
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
