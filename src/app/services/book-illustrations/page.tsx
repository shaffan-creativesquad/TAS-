import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, Paintbrush, Eye, Printer, Users } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Children's Book Illustration Services | The Author Success",
  description: "Original children's book illustrations with character design, sketch approval at every stage, and print-ready files. Book a free consultation today.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "CHILDREN'S BOOK ILLUSTRATIONS";
const headline = "You Wrote the Story. We'll Draw the Magic.";
const subline = "Our children's book illustrators bring your characters and story to life with artwork that feels fun, warm, and right for young readers.";
const desc = "A great children's book illustration does more than decorate a page — it makes the story feel real to a young reader. We match you with an illustrator whose style fits your book, keep you involved at every stage, and deliver artwork that's ready to print and publish.";

const stats = [
  { value: "Original Artwork", label: "Created for Your Book", Icon: Paintbrush },
  { value: "Character Design", label: "Sheets Included", Icon: Users },
  { value: "Sketch Approval", label: "at Every Stage", Icon: Eye },
  { value: "Print-Ready", label: "Files Delivered", Icon: Printer },
];

const subServices = [
  { tag: "PICTURE BOOKS", title: "Picture Book Illustrations", desc: "Our picture book illustration services cover every page in full color, in any style you choose, matched to your story and the age of your readers." },
  { tag: "CHARACTER", title: "Character Design", desc: "Original character sheets with different poses, expressions, and outfits, so your characters look the same on every page and in every future book." },
  { tag: "INTERIOR", title: "Interior Illustrations", desc: "Black-and-white or full-color illustrations for chapter books, activity books, non-fiction, and learning titles." },
  { tag: "COVER", title: "Illustrated Cover Art", desc: "Original cover artwork for books that need a fully illustrated look, designed to stand out on shelves and online." },
];

const steps = [
  { num: "01", title: "Style & Brief", desc: "We learn about your story, your readers, and the styles you love. We match you with the artist whose style fits your book best." },
  { num: "02", title: "Character Design", desc: "Your illustrator creates rough character designs for your approval, so you're happy with how your characters look before the full illustrations begin." },
  { num: "03", title: "Sketches & Feedback", desc: "You'll see the sketches first and can share your thoughts before we move on. This gives us a chance to make changes early." },
  { num: "04", title: "Final Artwork & Delivery", desc: "Once you're happy with the sketches, we add the color and final details, then send you the finished files for print, eBooks, and marketing." },
];

const included = [
  "Illustrator matching",
  "Style consultation",
  "Character design sheets",
  "Rough sketch approval",
  "Full-color illustrations",
  "Print-ready CMYK files (300 dpi)",
  "Digital RGB versions",
  "Transparent background files",
  "Cover illustration (if needed)",
  "Revision rounds on sketches and final artwork",
  "Illustration plan mapping out every page",
  "One project manager to keep things simple and on track",
];

const testimonials = [
  { quote: "I had the story written for years, but I struggled to picture how the characters should look. The illustrator understood my ideas right away and turned them into characters that felt exactly right for the story.", name: "M. Rachel", title: "Children's Book Author", result: "Perfect Characters" },
  { quote: "The fact that we could see the sketches first made a lot of difference. We were able to give the artists feedback on which parts we liked and disliked before they completed the illustrations. This way, they got the desired feel into the artwork.", name: "David K.", title: "Picture Book Author", result: "Story Captured" },
  { quote: "I was nervous that I would choose the correct style of illustration for my first book, but after seeing a number of different options, they found an illustrator who really grasped what my book was all about. With the artwork completed, my book is now truly finished.", name: "Emily S.", title: "First-Time Author", result: "First Book Done" },
];

const faqs = [
  { q: "How do I choose an illustration style?", a: "During your consultation, we'll show you samples in different styles and talk through what suits your story and age group. If you already have a look in mind, we'll match you with an illustrator who works in that style." },
  { q: "How many illustrations will my book need?", a: "It depends on your book's length and format. Before work begins, we create an illustration plan that maps out every page, so you know exactly what to expect." },
  { q: "Can you match the style of my earlier books?", a: "Yes. If you're continuing a series, we'll study your existing artwork and keep the characters and style consistent from one book to the next." },
  { q: "What file formats will I receive?", a: "You'll receive print-ready CMYK files at 300 dpi, RGB versions for digital use, and transparent background files for marketing materials." },
  { q: "Do I own the illustrations?", a: "Yes. Once your project is complete, the illustrations belong to you, so you can use them in your book, your marketing, and future editions." },
  { q: "Can I hire a children's book illustrator without your publishing services?", a: "Absolutely. You can hire us for illustrations only, or combine them with writing, design, and publishing when you're ready." },
  { q: "How much do children's book illustration services cost?", a: "Each book is different, so we'll price your project based on the artwork you need, the style you choose, and how detailed the illustrations are. We'll give you the full price upfront, so you won't have to worry about extra fees later." },
];

export default function BookIllustrationsPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: `linear-gradient(145deg, ${COLOR}22 0%, #ffffff 50%, ${COLOR}12 100%)` }}>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white" style={{ background: COLOR }}>{badge}</div>
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-4"><span className="text-black">You Wrote the Story.</span><br /><span className="text-primary">We'll Draw the Magic.</span></h1>
                <p className="text-lg font-semibold mb-4" style={{ color: COLOR }}>{subline}</p>
                <p className="text-brand-body leading-relaxed mb-8">{desc}</p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:opacity-90" style={{ background: COLOR }}>Get My Book Illustrated <ArrowRight size={16} /></Link>
                  <Link href="#process" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-800 text-slate-800 font-bold px-7 py-4 rounded-full transition-all">See How It Works</Link>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Illustrations for Every Kind of </span><span style={{ color: COLOR }}>Children&apos;s Book</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">From soft watercolors to bold digital art, our illustrators create original artwork in the style that suits your story, your readers, and the age group you&apos;re writing for.</p>
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
      <section id="process" className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>Our Process</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">From First Sketch to </span><span style={{ color: COLOR }}>Final Color in Four Steps</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">We keep the process simple and keep you involved along the way, so you see your characters take shape before anything is finalized.</p>
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
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">Everything Your Artwork<br />Needs, in One Package</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">From our first conversation to your final artwork, your quote covers the whole process. We&apos;ll make sure you know what&apos;s included and what it will cost before we get started, so there are no unexpected charges later.</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><Paintbrush size={22} className="text-white" /></div>
                  <div>
                    <div className="text-white font-semibold text-sm">Free Consultation Included</div>
                    <div className="text-[#CFFAFE] text-xs">Talk to our team about your book before you commit — no obligation.</div>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">What Authors Say About </span><span style={{ color: COLOR }}>Their Illustrations</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">In their own words, from authors who trusted us to bring their stories to life on the page.</p>
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
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              {/* <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>FAQ</span> */}
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Questions Before </span><span style={{ color: COLOR }}>the First Sketch</span></h2>
            </div>
          </FadeUp>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><Paintbrush size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4"><span className="text-white">Let&apos;s Give Your Characters a Face</span></h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Book a free consultation and tell us about your story. We&apos;ll go over different illustration styles and help you find an artist who&apos;s a good fit for your book.</p>
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
