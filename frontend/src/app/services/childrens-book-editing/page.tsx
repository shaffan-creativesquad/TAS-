import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, BookOpen, Mic, User, Shield } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Children's Book Writing Services | The Author Success",
  description: "Children's book writing services for picture books, early readers, and middle grade. Every age group covered. Read-aloud ready. NDA signed before we start.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "FOR YOUNG READERS";
const headline = "Children's Book Writing That Turns Ideas Into Favorites.";
const subline = "Children's book writing services that blend imagination, heart, and just the right words for little ears and growing minds.";
const desc = "Writing for children looks simple until you try it. Every word has to earn its place, every page turn has to land, and the story has to charm both the child listening and the adult reading aloud. When you hire a children's book writer from our team, you get a specialist who knows exactly how young readers think, laugh, and learn.";

const stats = [
  { value: "Every Age Group", label: "From First Words to Middle Grade", Icon: BookOpen },
  { value: "Read-Aloud Ready", label: "Rhythm Parents Love to Perform", Icon: Mic },
  { value: "Your Name on Cover", label: "Fully Credited to You", Icon: User },
  { value: "NDA First", label: "Signed Before We Start", Icon: Shield },
];

const subServices = [
  { tag: "PICTURE BOOKS", title: "Picture Book Writing", desc: "Our picture book writing services craft playful, perfectly paced text with a read-aloud rhythm and an emotional heartbeat, written to leave room for illustrations to shine." },
  { tag: "EARLY READERS", title: "Early Reader Chapter Books", desc: "Short chapters, friendly vocabulary, and plots that keep new readers turning pages and building confidence one chapter at a time." },
  { tag: "MIDDLE GRADE", title: "Middle Grade Fiction", desc: "Adventure, mystery, fantasy, and friendship stories with characters older kids root for and worlds they don't want to leave." },
  { tag: "EDUCATIONAL", title: "Educational Children's Books", desc: "Big ideas made small enough to love. Science, history, values, and emotional learning, explained through stories children actually want to read." },
];

const steps = [
  { num: "01", title: "Story Discovery", desc: "Tell us your idea, your target age group, your main character, and the message you want to share. You sign our NDA, and we pair you with a children's book ghostwriter who fits your story." },
  { num: "02", title: "Outline & Characters", desc: "Your writer shapes a story outline and character profiles for your approval, so the heart of the book is settled before a single page is written." },
  { num: "03", title: "Writing & Revisions", desc: "Your writer crafts the full story with age-appropriate language, pacing, and charm. You review each draft and share feedback, and we refine it until it reads exactly the way you imagined." },
  { num: "04", title: "Ready for Illustration", desc: "Your finished manuscript arrives with illustration notes, ready for an artist's touch. Take it anywhere, or let our team handle illustrations, publishing, and launch." },
];

const included = [
  "Dedicated children's book writer",
  "Story outline and character brief",
  "Full manuscript writing",
  "Age-group appropriateness review",
  "Read-aloud rhythm check",
  "Vocabulary review for your age group",
  "Revision rounds included",
  "Educational alignment (if needed)",
  "Illustration notes for your artist",
  "NDA before the project starts",
  "Final manuscript delivery",
  "Publishing support available",
];

const testimonials = [
  { quote: "My story had heart, but the wording was too long for young readers. The editing helped me simplify the language, strengthen the rhythm, and make every page more engaging without losing the magic of my original idea.", name: "Mia Collins", title: "Picture Book Author", result: "Age-Appropriate Edit" },
  { quote: "The feedback was thoughtful, encouraging, and incredibly detailed. My editor showed me where the story needed more emotion, clearer character moments, and a stronger ending. My manuscript now feels ready to become the book I always imagined.", name: "Noah Bennett", title: "Children's Adventure Author", result: "Developmental Editing" },
  { quote: "As a parent writing my first children's book, I wanted the story to be fun for kids but meaningful for families. The editing made the message clearer, improved the flow, and helped turn my draft into a polished bedtime story.", name: "Layla Morgan", title: "Children's Bedtime Story Author", result: "First Book Done" },
];

const faqs = [
  { q: "What age groups do you write for?", a: "Our children's book writing services cover board books, picture books, early readers, chapter books, and middle grade, with writers matched to each age group." },
  { q: "Can I provide the story idea?", a: "Absolutely. Bring a full concept, a favorite character, or just a spark of an idea, and your children's book ghostwriter will shape it into a complete story." },
  { q: "How long is a picture book?", a: "Most picture books run around 32 pages with a few hundred words of text, though length varies by age group and style. We'll recommend the right format for your story." },
  { q: "Do you also provide illustrations?", a: "Yes. Alongside our picture book writing services, our illustrators can bring your characters to life, so the words and pictures work together." },
  { q: "Will my name be on the cover?", a: "Yes. You are the author. Your ghostwriter works behind the scenes under a signed NDA, and the credit is entirely yours." },
];

export default function ChildrensBookEditingPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: `linear-gradient(145deg, ${COLOR}22 0%, #ffffff 50%, ${COLOR}12 100%)` }}>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white" style={{ background: COLOR }}>{badge}</div>
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-4"><span className="text-black">Children's Book Writing</span><br /><span className="text-primary">That Turns Ideas Into Favorites.</span></h1>
                <p className="text-lg font-semibold mb-4" style={{ color: COLOR }}>{subline}</p>
                <p className="text-brand-body leading-relaxed mb-8">{desc}</p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:opacity-90" style={{ background: COLOR }}>Write My Children&apos;s Book <ArrowRight size={16} /></Link>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Children&apos;s Books, Written for </span><span style={{ color: COLOR }}>Every Stage</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">Writing for children looks simple until you try it. Every word has to earn its place, every page turn has to land, and the story has to charm both the child listening and the adult reading aloud.</p>
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
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>How It Works</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Our </span><span style={{ color: COLOR }}>Proven Process</span></h2>
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
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">Everything Your Story<br />Needs, Included</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">Every project is handled by a dedicated writer matched to your book&apos;s age group and style. You&apos;ll know what&apos;s included and what it costs before we start — no surprises.</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><BookOpen size={22} className="text-white" /></div>
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
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>Client Stories</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Every Story Has a </span><span style={{ color: COLOR }}>Happy Author</span></h2>
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              {/* <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>FAQ</span> */}
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Frequently Asked </span><span style={{ color: COLOR }}>Questions</span></h2>
            </div>
          </FadeUp>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><BookOpen size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4"><span className="text-white">Write the Book Kids Ask For by Name.</span></h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Share your idea and hire a children&apos;s book writer who can turn it into a story kids will treasure for years.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white font-bold px-10 py-4 rounded-full shadow-lg transition-all hover:bg-white/90" style={{ color: "#089bb2" }}>Start My Children&apos;s Book <ArrowRight size={18} /></Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-primary text-brand-dark-2 font-bold px-8 py-4 rounded-full transition-all">View All Services</Link>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
