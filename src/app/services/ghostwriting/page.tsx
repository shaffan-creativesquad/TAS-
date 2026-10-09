import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, PenLine, Award, Clock, Users } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Professional Ghostwriting Services | The Author Success",
  description: "Expert ghostwriters for fiction, non-fiction, memoirs, and business books. 100% confidential, NDA signed, unlimited revisions. Your story — published under your name.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "GHOSTWRITING";
const headline = "Ghostwriting Services for People With More Ideas Than Hours";
const subline = "You know what you want to say. We help you say it in a book that sounds like you and carries your name.";
const desc = "A lot of people have a book they want to write, but finding the time is another story. Our ghostwriting services help you turn that idea into a finished book. When you hire a ghostwriter, a professional ghostwriter gets to know your voice, ideas, and goals, then works with you chapter by chapter. Everything is covered by a signed NDA, and once the manuscript is finished, it's completely yours.";

const highlightCards = [
  { top: "Written in", bottom: "Your Voice", Icon: PenLine },
  { top: "NDA Signed", bottom: "Before We Begin", Icon: Award },
  { top: "Full Copyright", bottom: "Ownership", Icon: Clock },
  { top: "You Approve", bottom: "Every Chapter", Icon: Users },
];

const subServices = [
  { tag: "FICTION", title: "Fiction & Genre Books", desc: "Thrillers, romance, fantasy, science fiction, and literary fiction. Our fiction ghostwriting services focus on believable characters, good pacing, and stories that keep readers interested from one page to the next." },
  { tag: "NON-FICTION", title: "Non-Fiction & Self-Help", desc: "From personal development to health, history, and big ideas, our non- fiction ghostwriting services turn your knowledge and research into a book that is clear, credible, and easy to read." },
  { tag: "BUSINESS", title: "Business Books", desc: "An experienced business book ghostwriter takes your methods, case studies, and lessons learned and turns them into a book that builds your reputation and supports your business." },
  { tag: "PERSONAL", title: "Memoir & Biography", desc: "Through relaxed, in-depth interviews, our memoir ghostwriting services help you tell your life story honestly and with care, in words that feel like your own." },
  { tag: "YOUTH", title: "Children's & Young Adult", desc: "From picture books to YA novels, we write stories with imagination and heart, pitched at the right level for young readers." },
];

const steps = [
  { num: "01", title: "Complimentary Consultation", desc: "Tell us about your idea, your audience, and what you want the book to achieve. You sign our NDA, and we match you with a professional ghostwriter suited to your genre and goals." },
  { num: "02", title: "Writing & Editing", desc: "Your ghostwriter talks with you about the book, puts together the outline, and writes the manuscript chapter by chapter. You review each chapter along the way, while our editors clean up the final draft and make sure it still sounds like you." },
  { num: "03", title: "Design & Formatting", desc: "Once the manuscript is complete, our designers create a cover that suits your genre and format the interior for print and all major eReaders." },
  { num: "04", title: "Publish & Launch", desc: "Your book goes live on Amazon and other leading global platforms. We handle the launch, your name goes on the cover, and you keep every royalty." },
];

const included = [
  "A dedicated professional ghostwriter matched to your genre",
  "NDA signed before any work begins",
  "In-depth interviews to capture your voice",
  "Topic and background research",
  "Detailed chapter-by-chapter outline",
  "Chapter-by-chapter review and feedback",
  "Revision rounds at every stage",
  "Internal editorial review",
  "Full copyright and ownership",
  "Final manuscript in publish-ready formats",
  "A faithful project manager as your single point of contact",
  "Writing samples shared during your free consultation",
];

const testimonials = [
  { quote: "I'd had the idea for my book for years, but I just never had the time to sit down and write it. The team helped me organize my thoughts, shape the story, and finally turn the idea into a real book. It still feels completely like my book.", name: "Michael T.", title: "Founder & Author", result: "Business Book" },
  { quote: "I knew my subject inside and out, but I had no idea how to turn all of that knowledge into a book. My writer asked the right questions, understood what I was trying to say, and made the whole process feel much easier. I was involved without having to do the actual writing.", name: "Rachel D.", title: "Leadership Consultant", result: "Non-Fiction Author" },
  { quote: "I was nervous that a ghostwriter might make my story sound like someone else wrote it. Thankfully, that never happened. My writer took the time to understand my experiences and the way I speak, and the final manuscript felt natural and true to my story.", name: "Daniel R.", title: "Memoir Author", result: "Personal Story" },
];

const faqs = [
  { q: "Is ghostwriting ethical and legal?", a: "Yes. Ghostwriting has long been used by business leaders, public figures, and authors in every genre. You own the copyright, and only your name appears on the book." },
  { q: "Will my name appear on the book?", a: "Always. You are the author. Your writer works behind the scenes under a signed NDA, and the credit is entirely yours." },
  { q: "How do you match me with the right professional ghostwriter?", a: "During the consultation, we talk about your book, your goals, and the kind of voice you want. Then we match you with a professional ghostwriter who's a good fit for your project." },
  { q: "Can I see writing samples before committing?", a: "Yes. During your free consultation, we'll share samples that reflect your genre and style so that you can move forward with confidence." },
  { q: "What if I'm not happy with the writing?", a: "You review each chapter as it's written, so nothing is finalized without your approval. If something isn't right, we revise it until it is." },
  { q: "How long does ghostwriting take?", a: "It depends on the length of your book, the genre, and how much research is involved. Your project manager will share a clear timeline at the start." },
  { q: "How much do ghostwriting services cost?", a: "Every project is priced individually based on its length, scope, and complexity. The price you're quoted is the price you pay, and we never take a share of your royalties." },
];

export default function GhostwritingPage() {
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
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:opacity-90" style={{ background: COLOR }}>Talk to a Ghostwriter <ArrowRight size={16} /></Link>
                  <Link href="/portfolio" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-800 text-slate-800 font-bold px-7 py-4 rounded-full transition-all">See Our Work</Link>
                </div>
              </div>
            </SlideLeft>
            <SlideRight delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {highlightCards.map(({ top, bottom, Icon }, i) => (
                  <FadeUp key={top} delay={i * 0.08}>
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${COLOR}15` }}><Icon size={18} style={{ color: COLOR }} /></div>
                      <div className="font-[family-name:var(--font-playfair)] text-xl font-black" style={{ color: COLOR }}>{top}</div>
                      <div className="text-xs text-brand-muted mt-0.5">{bottom}</div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* WHAT WE WRITE */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>What We Write</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4">
                <span className="text-black">You Bring the Genre. </span><span style={{ color: COLOR }}>We Bring the Genius.</span>
              </h2>
              <p className="text-brand-body max-w-2xl mx-auto">We match each project with a writer who knows your genre and understands how to make that type of book work.</p>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* HOW IT WORKS */}
      <section className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>The Roadmap</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4">
                <span className="text-black">How Your Book Gets Written </span><span style={{ color: COLOR }}>(Without You Writing It)</span>
              </h2>
              <p className="text-brand-body max-w-2xl mx-auto">A clear, collaborative process that keeps you involved at every important step, so you always know where your book stands without having to sit down and write it.</p>
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
                <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block text-[#CFFAFE]">What&apos;s Included</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">Everything Included.<br />Nothing Tacked On Later.</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">Your quote covers the full writing process from first conversation to final manuscript. You&apos;ll know exactly what you&apos;re paying for before we start, with no surprise charges along the way.</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><PenLine size={22} className="text-white" /></div>
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

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>Author Stories</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4">
                <span className="text-black">The Authors </span><span style={{ color: COLOR }}>Behind the Books</span>
              </h2>
              <p className="text-brand-body max-w-xl mx-auto">In their own words, from authors who trusted us with their ideas and their names.</p>
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
                <span className="text-black">What Authors Ask Before They </span><span style={{ color: COLOR }}>Hire a Ghostwriter</span>
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
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><PenLine size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4">
              <span className="text-white">Got the Ideas? We&apos;ve Got the Writers.</span>
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Book a free 30-minute consultation with our team. We&apos;ll talk through your idea, answer your questions, and give you an honest picture of what it takes to bring your book to life.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white font-bold px-10 py-4 rounded-full shadow-lg transition-all hover:bg-white/90" style={{ color: "#089bb2" }}>Book Free Consultation <ArrowRight size={18} /></Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-primary text-brand-dark-2 font-bold px-8 py-4 rounded-full transition-all">Explore All Services</Link>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
