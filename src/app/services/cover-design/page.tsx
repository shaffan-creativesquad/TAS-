import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, Palette, Award, Clock, TrendingUp } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Professional Book Cover Design Services | The Author Success",
  description: "Custom book cover design that sells. 3 concepts, unlimited revisions, print-ready + eBook files. Genre-specialist designers with 3,000+ covers published.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "Visual Impact";
const headline = "Covers That Stop the Scroll and Sell the Book";
const subline = "Genre-accurate, eye-catching designs that convert browsers into buyers.";
const desc = "Readers judge books by their covers — and that's not a problem when your cover is exceptional. Our designers study bestseller aesthetics in your genre to create covers that feel instantly familiar yet completely unique. We deliver print-ready files, eBook covers, 3D mockups, and full series branding.";
const serviceLabel = "Cover Design";

const stats = [
  { value: "3,000+", label: "Covers Designed", Icon: Palette },
  { value: "92%", label: "First-Concept Approval", Icon: Award },
  { value: "10–14d", label: "Average Delivery", Icon: Clock },
  { value: "400%", label: "Avg. Sales Lift", Icon: TrendingUp },
];

const subServices = [
  { tag: "Digital", title: "eBook Cover Design", desc: "Amazon-optimized eBook covers designed to pop at thumbnail size. We analyze your genre's bestseller shelf to ensure yours stands out and fits in." },
  { tag: "Print", title: "Full Print Package", desc: "Complete print cover including front, spine, and back cover — sized to your exact page count and trim size, print-ready at 300dpi CMYK." },
  { tag: "Series", title: "Series Branding", desc: "Building a series? We create a consistent visual identity across all books so readers can instantly recognize your brand on the shelf." },
  { tag: "Marketing", title: "3D Mockup Renders", desc: "Photorealistic 3D renders of your book for social media, press releases, author website, and Amazon A+ content pages." },
];

const steps = [
  { num: "01", title: "Design Brief", desc: "You complete our detailed design brief covering genre, comparable titles, mood, color preferences, and any specific imagery ideas." },
  { num: "02", title: "Concept Research", desc: "Our designer analyzes your genre's bestsellers and develops 3 distinct cover concepts with different visual approaches." },
  { num: "03", title: "Concept Presentation", desc: "We present all 3 concepts with a rationale for each design decision. You choose your favorite direction." },
  { num: "04", title: "Design Refinement", desc: "We refine the chosen concept through as many revision rounds as needed until you love every detail." },
  { num: "05", title: "Final File Delivery", desc: "You receive print-ready CMYK PDF, eBook RGB JPG/PNG, and editable layered files — everything you need." },
];

const included = [
  "3 initial design concepts",
  "Genre bestseller research",
  "eBook cover (RGB, Amazon specs)",
  "Print front cover (CMYK 300dpi)",
  "Spine design (sized to page count)",
  "Back cover with blurb layout",
  "Author photo placement",
  "Barcode & ISBN placement",
  "Unlimited revision rounds",
  "3D photorealistic mockup renders",
  "Social media sizing variants",
  "Editable layered source files",
];

const testimonials = [
  { quote: "My cover stopped people scrolling on Amazon. Sales jumped 400% in week one. The designer nailed the thriller aesthetic perfectly — dark, tense, and impossible to ignore.", name: "Lisa P.", title: "Thriller Author · Amazon Top 100", result: "Amazon Top 100" },
  { quote: "Three concepts to choose from, all of them stunning. The final design looks like it belongs next to James Patterson on the shelf. This team gets book covers.", name: "Ryan B.", title: "Crime Fiction Author", result: "Bestseller Week 1" },
  { quote: "My series now has a consistent, professional look that readers immediately recognize. Branding across 5 books — all perfect.", name: "Sofia K.", title: "Fantasy Series Author · 20K Copies", result: "20,000 Copies Sold" },
];

const faqs = [
  { q: "How do I communicate what I want?", a: "We provide a detailed design brief form asking about your genre, comparable covers you love, mood, color preferences, and any specific ideas. The more detail you give us, the better the concepts." },
  { q: "What if I don't like any of the 3 initial concepts?", a: "In the rare case none of the concepts work for you, we'll create new directions at no extra charge. Our goal is a cover you love — we won't stop until we get there." },
  { q: "Do you provide the spine and back cover too?", a: "Yes, our full print package includes front cover, spine (sized to your exact page count), and back cover with blurb, author bio, and barcode placement." },
  { q: "What files do I receive?", a: "You receive: print-ready PDF (CMYK 300dpi), eBook JPG/PNG (RGB, Amazon optimized), 3D mockup renders, and the editable source files (PSD/AI)." },
  { q: "Can you design a cover for a book in a series I've already started?", a: "Absolutely. Send us your existing covers and we'll create a new cover that matches your established series aesthetic perfectly." },
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
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-black leading-[1.1] mb-4">{headline}</h1>
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

      {/* WHAT WE OFFER */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>What We Offer</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black">
                <span className="text-black">Every Type of </span><span style={{ color: COLOR }}>{serviceLabel}</span><span className="text-black"> Covered</span>
              </h2>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black">
                <span className="text-black">Our Proven </span><span style={{ color: COLOR }}>Process</span>
              </h2>
            </div>
          </FadeUp>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px border-t-2 border-dashed" style={{ borderColor: `${COLOR}40` }} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">No Hidden Fees.<br />No Surprises.</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">When you work with us, you get everything listed below — included in your quoted price. We believe in transparent pricing with no unexpected add-ons.</p>
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>FAQ</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black">
                <span className="text-black">Common </span><span style={{ color: COLOR }}>Questions</span>
              </h2>
            </div>
          </FadeUp>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FadeUp key={faq.q} delay={i * 0.07}>
                <details className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-semibold text-brand-dark text-sm gap-4">
                    {faq.q}
                    <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 border border-slate-200 group-open:rotate-45 transition-transform" style={{ color: COLOR }}>+</span>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-brand-body leading-relaxed border-t border-slate-100 pt-4">{faq.a}</div>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cyan-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><Palette size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4">
              <span className="text-black">Ready to Get </span><span style={{ color: COLOR }}>Started?</span>
            </h2>
            <p className="text-brand-body mb-8 max-w-lg mx-auto">Book a free 30-minute consultation with one of our publishing experts. No commitment — just honest advice about your project.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-full shadow-lg shadow-cyan-200 transition-all hover:opacity-90" style={{ background: COLOR }}>Book Free Consultation <ArrowRight size={18} /></Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-primary text-brand-dark-2 font-bold px-8 py-4 rounded-full transition-all">All Services</Link>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
