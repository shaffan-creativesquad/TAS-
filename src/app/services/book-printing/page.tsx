import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, Printer, Globe, Eye, Package } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Book Printing Services | The Author Success",
  description: "Book printing services that turn your files into beautifully bound books, from a single proof copy to a full print run.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "PRINT QUALITY";
const headline = "Book Printing That Feels Like a Bestseller.";
const subline = "Book printing services that turn your files into beautifully bound books, from a single proof copy to a full print run.";
const desc = "From one copy to thousands, we match your project with the right printing solution. Our book printing services cover specifications, file preparation, quality control, and fulfillment, so you never have to wrestle with printer jargon.";

const stats = [
  { value: "Paperback &", label: "Hardcover", Icon: Printer },
  { value: "Print on", label: "Demand", Icon: Globe },
  { value: "Proof", label: "First", Icon: Eye },
  { value: "Tracked", label: "Delivery", Icon: Package },
];

const subServices = [
  { tag: "ON DEMAND", title: "Print-on-Demand Setup", desc: "Our print-on-demand book printing setup lets you sell physical copies worldwide with no inventory and no upfront printing costs. Each book is printed only when a reader orders it." },
  { tag: "PAPERBACK", title: "Paperback Printing", desc: "Crisp, durable paperback book printing for launch events, bookstore stock, and direct sales, with your choice of trim size, paper stock, and matte or gloss cover." },
  { tag: "HARDCOVER", title: "Hardcover & Specialty Editions", desc: "Premium hardcover book printing for gift books, collector editions, and keepsakes, including case-laminate covers and special formats that feel truly elevated." },
  { tag: "PROOF", title: "Author Proof Copies", desc: "Hold a physical proof before the full run, so you can check print quality, color accuracy, and binding before committing to a single extra copy." },
];

const steps = [
  { num: "01", title: "Print Specifications", desc: "We help you choose trim size, binding, paper stock, cover finish, and quantity, all matched to your goals and budget." },
  { num: "02", title: "File Preparation", desc: "We check and prepare your interior and cover files to exact printer specifications, from bleed and resolution to color profiles." },
  { num: "03", title: "Proof & Approval", desc: "You approve a digital proof, then review a physical proof copy before any full print run begins." },
  { num: "04", title: "Print & Deliver", desc: "Your books are printed and bound with quality checks at every stage, then shipped with tracking to you or your distribution partner." },
];

const included = [
  "Print specification consultation",
  "File preflight check",
  "Print-ready file preparation",
  "Digital proof approval",
  "Physical proof copy",
  "Quality control review",
  "Paperback and hardcover printing",
  "Binding options (perfect, case, saddle stitch)",
  "Multiple paper stock options",
  "Matte or gloss cover finish",
  "Tracked delivery",
  "Fulfillment to multiple addresses",
];

const testimonials = [
  {
    quote: "I wanted my debut novel to feel like a real bookstore book, not just a printed manuscript. The finished paperback exceeded my expectations; the cover was sharp, the pages were clean, and the binding felt strong and professional. Seeing my name on the spine was unforgettable.",
    name: "Grace Holloway",
    title: "Contemporary Fiction Author",
    result: "Paperback Book Printing",
  },
  {
    quote: "The print quality brought my children's book to life. The illustrations came out bright and detailed, the colors matched my vision, and the hardcover feels durable enough for little hands. Parents at my launch immediately commented on how beautiful it looked.",
    name: "Owen Mitchell",
    title: "Children's Picture Book Author",
    result: "Full-Color Hardcover",
  },
  {
    quote: "I needed a high-quality print run for my speaking events and client gifts. From the first proof to the delivered boxes, everything was handled carefully. My books arrived looking polished, consistent, and ready to put directly into readers' hands.",
    name: "Nadia Patel",
    title: "Business & Leadership Author",
    result: "Professional Print Run",
  },
];

const faqs = [
  { q: "Is there a smallest quantity you print in bulk?", a: "Minimums depend on the format and printing method. Our book printing services cover everything from small runs to large orders, and we'll recommend the most cost-effective option for your quantity." },
  { q: "What's the difference between print on demand and bulk printing?", a: "Print-on-demand book printing prints each copy as it's ordered, so there's no inventory or upfront cost. Bulk printing produces a larger run at once, which lowers the cost per copy and works well for events, bookstores, and direct sales." },
  { q: "How long does printing take?", a: "Timelines depend on quantity, format, and finishing options. Once your specs are set, we'll share a clear production and delivery schedule." },
  { q: "Can my book match the quality of traditionally published titles?", a: "Yes. With the right paper, binding, and finish, our paperback book printing and hardcover book printing deliver books that look and feel just as polished as anything on a bookstore shelf." },
  { q: "Do you ship internationally?", a: "Yes. We offer tracked delivery to locations around the world, including fulfillment to multiple addresses." },
  { q: "Can I see a copy before the full print run?", a: "Absolutely. You'll approve a digital proof and receive a physical proof copy before we print the full order." },
];

export default function BookPrintingPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: `linear-gradient(145deg, ${COLOR}22 0%, #ffffff 50%, ${COLOR}12 100%)` }}>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white" style={{ background: COLOR }}>{badge}</div>
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-4"><span className="text-black">Book Printing</span><br /><span className="text-primary">That Feels Like a Bestseller.</span></h1>
                <p className="text-lg font-semibold mb-4" style={{ color: COLOR }}>{subline}</p>
                <p className="text-brand-body leading-relaxed mb-8">{desc}</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:opacity-90" style={{ background: COLOR }}>Get a Printing Quote <ArrowRight size={16} /></Link>
                  <Link href="/portfolio" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-800 text-slate-800 font-bold px-7 py-4 rounded-full transition-all">See How It Works</Link>
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

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>What We Offer</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Every Way to </span><span style={{ color: COLOR }}>Print Your Book</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">From one copy to thousands, we match your project with the right printing solution.</p>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">From Files to </span><span style={{ color: COLOR }}>Finished Books</span></h2>
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
                <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block text-[#CFFAFE]">What&apos;s Included</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">Everything Your Book<br />Deserves, Included</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">Your quote covers the work from the first planning session to the final delivery. We&apos;ll go over the costs before getting started, so you know what you&apos;re paying for. No extra charges later.</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><Printer size={22} className="text-white" /></div>
                  <div>
                    <div className="text-white font-semibold text-sm">Free Consultation Included</div>
                    <div className="text-[#CFFAFE] text-xs">Talk to a printing expert before you commit — no obligation.</div>
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
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>Client Results</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Printed, Bound, </span><span style={{ color: COLOR }}>and Beloved</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">Authors who held their finished books in their hands and loved what they saw.</p>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Questions Before </span><span style={{ color: COLOR }}>We Hit Print</span></h2>
            </div>
          </FadeUp>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><Printer size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4"><span className="text-white">Let&apos;s Print the Book You Dreamed Of.</span></h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Get a custom quote for book printing services and hold your professionally printed book in your hands.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white font-bold px-10 py-4 rounded-full shadow-lg transition-all hover:bg-white/90" style={{ color: "#089bb2" }}>Get Started Today <ArrowRight size={18} /></Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-primary text-brand-dark-2 font-bold px-8 py-4 rounded-full transition-all">View All Services</Link>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
