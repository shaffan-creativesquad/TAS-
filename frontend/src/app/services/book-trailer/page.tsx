import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, Video, PenLine, Music, Globe, Mic } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Book Trailer Production Services | The Author Success",
  description: "Cinematic book trailers for TikTok, Instagram, Amazon, and more. Script, production, all platform formats included. Book a free consultation today.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "BOOK TRAILERS";
const headline = "Readers Judge a Book by Its Trailer, Too";
const subline = "Short, cinematic videos that make people stop, watch, and want your book.";
const desc = "A good book trailer should give people a feel for your story and make them want to know more. We create short videos that bring out the mood of your book and are easy to share on TikTok, Instagram, YouTube, Amazon, or your author website.";
const serviceLabel = "Book Trailer";

const stats = [
  { value: "Script & Storyboard", label: "Included in Every Package", Icon: PenLine },
  { value: "Licensed Music", label: "& Footage", Icon: Music },
  { value: "Every Platform", label: "Format Delivered", Icon: Globe },
  { value: "Voice-Over", label: "Optional Add-On", Icon: Mic },
];

const subServices = [
  { tag: "SOCIAL", title: "Social Media Trailers", desc: "Short vertical trailers made for TikTok, Instagram Reels, and YouTube Shorts, designed to grab attention in the first few seconds." },
  { tag: "AMAZON", title: "Amazon Book Trailers", desc: "Polished trailers formatted for your Amazon product page, giving browsers one more reason to click \"Buy.\"" },
  { tag: "CINEMATIC", title: "Cinematic Trailers", desc: "A custom book trailer with music, voice-over, and film-quality visuals that give your book the feel of a major release." },
  { tag: "ANIMATED", title: "Animated Book Trailers", desc: "An animated book trailer uses motion graphics and illustrated scenes, a great fit for children's books, fantasy, and non-fiction." },
];

const steps = [
  { num: "01", title: "Creative Brief", desc: "We learn about your book's genre, tone, readers, and strongest selling points to shape the trailer concept." },
  { num: "02", title: "Script & Storyboard", desc: "We write the script and create a visual storyboard for your approval before production begins." },
  { num: "03", title: "Production", desc: "Our team brings the trailer to life with licensed footage, animation, typography, music, and voice-over if needed." },
  { num: "04", title: "Review & Delivery", desc: "You review the cut and request any changes. Once approved, we deliver your trailer in every format your platforms need." },
];

const included = [
  "Creative brief consultation",
  "Script writing",
  "Visual storyboard",
  "Licensed stock footage",
  "Custom typography animation",
  "Licensed background music",
  "Professional voice-over (optional)",
  "Color grading",
  "Sound mixing and mastering",
  "Vertical, square, and widescreen formats",
  "Amazon-ready format",
  "Revision rounds included",
];

const testimonials = [
  { quote: "I had no clue how to turn my book into a video. They took the story, picked out the parts that would work best, and turned them into a trailer without giving the whole story away. I was really happy with how it turned out and couldn't wait to share it.", name: "Rachel M.", title: "Fiction Author", result: "Story Captured" },
  { quote: "They really understood what my book was about. There was nice music and pictures that fit. The timing was great too. It did not come off as a commercial just advertising my book.", name: "Daniel K.", title: "Mystery Author", result: "Authentic Feel" },
  { quote: "I wanted a trailer I could use on social media, my website, and Amazon. They made the different versions for me, so I didn't have to worry about sizes or anything technical. I could just post it wherever I needed it.", name: "Emily S.", title: "Romance Author", result: "All Platforms Covered" },
];

const faqs = [
  { q: "How long should a book trailer be?", a: "Most book trailers are around 30 to 60 seconds, especially for social media. If you want something more cinematic, it can be a little longer. We'll help you choose a length that fits your book and where you plan to share it." },
  { q: "Do you use actors?", a: "Usually, we use licensed footage, animation, and text to bring the trailer together. If you want real actors in your trailer, we can discuss that with you and see what would work best." },
  { q: "Can I use my own music?", a: "Yes, as long as you hold the rights to it. Otherwise, we'll choose licensed music that matches your book's tone." },
  { q: "What formats do you deliver?", a: "You'll receive vertical, square, and widescreen versions, plus a version ready for your Amazon product page." },
  { q: "Can you create trailers for a book series?", a: "Absolutely. We can create a consistent look across every book in your series, along with a trailer that introduces the whole collection." },
  { q: "How much do book trailer services cost?", a: "Every project is quoted individually based on length, style, and features like voice-over or animation. The price you're quoted is the price you pay, with no hidden fees." },
];

export default function BookTrailerPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: `linear-gradient(145deg, ${COLOR}22 0%, #ffffff 50%, ${COLOR}12 100%)` }}>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white" style={{ background: COLOR }}>{badge}</div>
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-4"><span className="text-black">Readers Judge a Book</span><br /><span className="text-primary">by Its Trailer, Too</span></h1>
                <p className="text-lg font-semibold mb-4" style={{ color: COLOR }}>{subline}</p>
                <p className="text-brand-body leading-relaxed mb-8">{desc}</p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>What We Offer</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Every Story Deserves Its </span><span style={{ color: COLOR }}>Own Trailer</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">Whether you need a quick social clip or a full cinematic piece, we create trailers that fit your book and the platforms your readers use.</p>
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
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>How It Works</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">From Script to Screen in </span><span style={{ color: COLOR }}>Four Steps</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">We keep things simple, so you know what&apos;s happening with your trailer at every step.</p>
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
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">Lights, Camera,<br />Everything Included</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">Your quote covers the full production from first idea to final cut. You&apos;ll know exactly what you&apos;re paying for before we start, with no surprise charges along the way.</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><Video size={22} className="text-white" /></div>
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>Author Stories</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">What Authors Said After </span><span style={{ color: COLOR }}>the Premiere</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">In their own words, from authors who trusted us to put their stories on screen.</p>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Questions Before </span><span style={{ color: COLOR }}>the Cameras Roll</span></h2>
            </div>
          </FadeUp>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><Video size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4"><span className="text-white">Ready to Put Your Book on Screen?</span></h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Book a free consultation with our team. We&apos;ll talk through your book, your audience, and the trailer that will bring your story to life.</p>
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
