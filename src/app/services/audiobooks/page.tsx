import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, Headphones, Award, Clock, Globe, TrendingUp } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Audiobook Production & Distribution Services | The Author Success",
  description: "Professional audiobook production — narrator casting, studio recording, mastering, and distribution to Audible, Spotify & 30+ platforms. Delivery in 3–5 weeks.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "Audiobook Production Services";
const headline = "Your Book Has a Voice. Let It Be Heard.";
const subline = "Audiobook production services that turn your pages into a polished listen for Audible, Spotify, Apple Books, and beyond.";
const desc = "Your readers are already listening on their commutes, at the gym, and between meetings. We handle everything it takes to reach them, from narrator casting and studio recording to mastering and release. The result is a professionally produced audiobook that sounds like it belongs on the bestseller shelf, because it does.";
const serviceLabel = "Audiobooks";

const stats = [
  { value: "Human", label: "Voices — Professional narrators, never robotic", Icon: Headphones },
  { value: "Studio", label: "Quality — Recorded, edited, and mastered", Icon: Award },
  { value: "Major", label: "Platforms — Audible, Spotify, Apple Books & more", Icon: Globe },
  { value: "Your", label: "Royalties — Every earning stays yours", Icon: TrendingUp },
];

const subServices = [
  { tag: "Narration", title: "Professional Human Narration", desc: "Our audiobook narration services match your book with a professional voice artist suited to its genre, tone, and audience. Fiction gets characters with presence, and business books get a voice with authority." },
  { tag: "Production", title: "Full Post-Production", desc: "Editing, noise reduction, mastering, and chapter splitting, all handled by audio professionals. Every file is prepared to meet the technical standards of Audible audiobook production and other leading platforms." },
  { tag: "Distribution", title: "Audible & Platform Distribution", desc: "Our audiobook distribution services place your title on Audible, Amazon, Apple Books, Spotify, and other major listening platforms, so your book reaches listeners wherever they press play." },
  { tag: "Multilingual", title: "Multilingual Narration", desc: "Take your book beyond English with narration in additional languages from native-speaking voice artists, and open the door to entirely new audiences." },
];

const steps = [
  { num: "01", title: "Consultation & Script Preparation", desc: "Share your book and goals with us. You sign our NDA, and we turn your manuscript into a clean narration script with pronunciation and character notes." },
  { num: "02", title: "Narrator Casting & Recording", desc: "Our audiobook narration services start with auditions matched to your genre. You pick the voice, and your narrator records chapter by chapter in a professional studio." },
  { num: "03", title: "Post-Production & Mastering", desc: "Our audiobook production services edit, clean, and master every chapter to meet the standards of Audible audiobook production and other major platforms." },
  { num: "04", title: "Publish & Distribute", desc: "Our audiobook distribution services handle metadata and submissions, taking your title live on Audible, Spotify, Apple Books, and beyond while you keep every royalty." },
];

const included = [
  "Professional narrator casting with auditions",
  "Script preparation and pronunciation guide",
  "Studio-quality recording sessions",
  "Audio editing and cleanup",
  "Noise reduction and mastering",
  "Platform technical quality checks",
  "Chapter splitting and file labeling",
  "Audible and Amazon distribution",
  "Distribution to additional listening platforms",
  "Audiobook cover art sized to platform specs",
  "Metadata and platform optimization",
  "Royalty setup in your account",
];

const testimonials = [
  { quote: "Hearing the first finished chapter was an unforgettable moment. The narrator captured the emotion and personality of my characters better than I could have hoped, and the sound quality was exceptional from beginning to end.", name: "Natalie Harper", title: "Contemporary Romance Author", result: "Audiobook Launch Success" },
  { quote: "The team made what felt like a complicated process incredibly easy. They helped me choose the right narrator, prepared my manuscript for recording, and delivered a polished audiobook that was ready for Audible without any stress on my side.", name: "Ethan Cole", title: "Business & Leadership Author", result: "Professional Production" },
  { quote: "I wanted my nonfiction book to sound clear, credible, and engaging for busy listeners. The production team delivered exactly that. Every chapter was clean, consistent, and professionally mastered for release across multiple platforms.", name: "Priya Lawson", title: "Personal Development Author", result: "Multi-Platform Release" },
];

const faqs = [
  { q: "How do I choose between royalty share and a flat fee?", a: "A flat fee means you pay for production upfront and keep your full audiobook royalties. Royalty share lowers your upfront cost but splits earnings with the narrator. We'll walk you through both during your consultation so you can choose what fits your goals." },
  { q: "Can I choose my own narrator?", a: "Yes. You'll hear auditions matched to your book and make the final choice. If none feel right, we'll find more options." },
  { q: "Where will my audiobook be available?", a: "Our audiobook distribution services cover Audible, Amazon, Apple Books, Spotify, and other leading platforms, so listeners can find you wherever they listen." },
  { q: "How long is the average audiobook?", a: "It depends on your word count. As a rough guide, about 9,000 to 10,000 words make one finished hour of audio." },
  { q: "Do you offer author-narrated audiobooks?", a: "Yes. If you'd like to narrate your own book, our team can guide your recording and handle the full post-production and Audible audiobook production process." },
];

export default function AudiobooksPage() {
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
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-4"><span className="text-black">Your Book Has a Voice.</span><br /><span className="text-primary">Let It Be Heard.</span></h1>
                <p className="text-lg font-semibold mb-4" style={{ color: COLOR }}>{subline}</p>
                <p className="text-brand-body leading-relaxed mb-8">{desc}</p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:opacity-90" style={{ background: COLOR }}>Get a Free Quote <ArrowRight size={16} /></Link>
                  <Link href="/portfolio" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-800 text-slate-800 font-bold px-7 py-4 rounded-full transition-all">Hear Our Work</Link>
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
                <span className="text-black">Your Book Deserves </span><span style={{ color: COLOR }}>to Be Heard</span>
              </h2>
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
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">Crystal-Clear Audio.<br />Crystal-Clear Pricing.</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">Our audiobook production services include everything listed below in your quoted price. No hidden add-ons, no surprise invoices.</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><Headphones size={22} className="text-white" /></div>
                  <div>
                    <div className="text-white font-semibold text-sm">Free Consultation Included</div>
                    <div className="text-[#CFFAFE] text-xs">Talk to an audiobook specialist before you commit. No pressure, no obligation.</div>
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
                <span className="text-black">Heard by Listeners. </span><span style={{ color: COLOR }}>Loved by Authors.</span>
              </h2>
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
              {/* <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>FAQ</span> */}
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black">
                <span className="text-black">Asked Often. </span><span style={{ color: COLOR }}>Answered Clearly.</span>
              </h2>
            </div>
          </FadeUp>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><Headphones size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4">
              <span className="text-white">Your Story Is Ready to Be Heard.</span>
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Book a free consultation with an audiobook specialist. We&apos;ll map out narration, production, and release, with no commitment and only honest advice.</p>
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
