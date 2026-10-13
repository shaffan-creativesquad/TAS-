import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, BookOpen, Award, Clock } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Professional Book Editing Services | The Author Success",
  description: "Developmental editing, line editing, copy editing, and proofreading by expert editors. Flawless manuscripts ready for publishing. Fast turnaround, unlimited revisions.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "Book Editing Services";
const headline = "Book Editing Services, From Good to Great";
const subline = "Book editing services for founders, leaders, and authors who refuse to publish anything less than their best.";
const desc = "Your book will sit on client desks, travel into boardrooms, and speak for you long after the launch. Our manuscript editing services sharpen your argument, tighten your prose, and polish every page, so the book reads with the same authority you bring to the room.";
const serviceLabel = "Editing";

const stats = [
  { value: "NDA First", label: "Signed before we read a page", Icon: Award },
  { value: "Every Genre", label: "Business, memoir, fiction, and beyond", Icon: BookOpen },
  { value: "Your Voice", label: "Sharpened, never replaced", Icon: Star },
  { value: "One Team", label: "From first edit to final proof", Icon: Clock },
];

const subServices = [
  { tag: "Big Picture", title: "Developmental Editing", desc: "Our developmental editing services test the backbone of your book: structure, flow, frameworks, and the promise you make to readers. You receive a clear editorial letter and margin notes that show exactly what to strengthen." },
  { tag: "Sentence Level", title: "Line & Copy Editing", desc: "Line-by-line refinement for clarity, rhythm, grammar, and tone. Your prose reads confident, consistent, and impossible to skim." },
  { tag: "Final Pass", title: "Proofreading", desc: "Our proofreading services for books catch the last typo, stray comma, and formatting slip before your name goes to print." },
  { tag: "Feedback", title: "Manuscript Critique", desc: "Not ready for a full edit? Get an honest, professional read with strengths, gaps, and a clear roadmap for your next draft." },
];

const steps = [
  { num: "01", title: "Manuscript Review & Consultation", desc: "Tell us about your manuscript, your readers, and what you want the book to achieve. You sign our NDA, we review a sample of your pages, and we match you with a professional book editor who knows your genre." },
  { num: "02", title: "Developmental & Line Editing", desc: "Your editor starts with developmental editing services for structure, pacing, and flow, then moves into line and copy editing for clarity, rhythm, and style. You review every tracked change and comment." },
  { num: "03", title: "Proofreading & Final Polish", desc: "Once the revisions are settled, our proofreading services for books catch every remaining typo, punctuation slip, and inconsistency, leaving you with a clean manuscript that still sounds unmistakably like you." },
  { num: "04", title: "Ready for Publishing", desc: "Your polished manuscript is ready for cover design, formatting, and publication. Take it to any publisher or platform, or let our team carry it all the way to launch while you keep every royalty." },
];

const included = [
  "Dedicated editor assigned",
  "Developmental structure review",
  "Argument and framework analysis",
  "Line-by-line prose refinement",
  "Grammar, punctuation, and syntax fixes",
  "Style guide adherence",
  "Tracked changes with comments",
  "Detailed editorial letter",
  "Pacing and flow improvements",
  "Consistency checks throughout",
  "Signed NDA for full confidentiality",
  "Revision rounds included",
];

const testimonials = [
  { quote: "I had a strong idea but struggled to bring the manuscript together. The developmental edit gave me a clear direction, improved the pacing, and helped every chapter serve a purpose. The final version feels completely transformed.", name: "Eleanor Brooks", title: "Contemporary Fiction Author", result: "Reader Favorite" },
  { quote: "My editor refined the language while preserving the heart of my story. The feedback was thoughtful, practical, and easy to apply. I now have a polished manuscript I'm proud to share with agents and readers.", name: "Daniel Mercer", title: "Historical Fiction Author", result: "Editor's Choice" },
  { quote: "The copyedit caught details I would never have noticed on my own. From sentence flow to consistency and clarity, every improvement made my book feel more professional. I couldn't be happier with the result.", name: "Sophie Bennett", title: "Romance Author", result: "Five-Star Review" },
];

const faqs: { q: string; a: ReactNode }[] = [
  { q: "What is the major difference between heavy editing and proofreading?", a: (
    <div>
      <p className="mb-3">Editing requires a comprehensive approach in order to capture the desired results. Proofreading and heavy editing both are the same technology because we used these methods to detect several problems including major content problems and minor errors.</p>
      <ul className="flex flex-col gap-3">
        <li><strong>Proofreading and Copy Editing:</strong> To correct the main grammatical and typing errors, we use copy-editing service. We only select perfectly written books for proofreading in order to remove flaws and errors.</li>
        <li><strong>Heavy Editing:</strong> Heavy editing involves in-depth revisions and review for checking grammar, diction, transitions, flow, style, syntax, sentence structure, and tone. If you are a skilled writer, then it takes minor proofreading, but most manuscripts need heavy editing. We adjust the price on the condition of manuscript.</li>
        <li><strong>Preliminary Review and Analysis:</strong> We will provide you comprehensive feedback on your manuscript and also give chance to discuss your manuscript with our writing editing experts. They read your content thoroughly and then editors give comments about your material and suggest how to improve it with revisions and analysis.</li>
        <li><strong>Developmental Editing:</strong> Developmental editing is a collective work of the editor and author. In this process, the editor assists the author in revising, writing, and planning your manuscript. It involves heavy editing and is used for fixing major issues like character development, structure narrative, pacing, style, and voice. This service is best for new or first-time authors.</li>
        <li><strong>Ghostwriting or Rewriting:</strong> Sometimes new authors need assistance that wants something more than editing. In this scenario, we provide ghostwriting and/or rewriting services. Ghostwriting involves authentic content while rewriting involves paraphrasing of the existing content.</li>
      </ul>
    </div>
  ) },
  { q: "How can I find out which kind of service I need?", a: (
    <div className="flex flex-col gap-3">
      <p>It depends on the level of your content and the clarity of your concept. Mostly, this question comes to our mind during the development stage of the manuscript. If you have a perfectly written manuscript, then you need only effective proofreading for the final polishing of your content. Heavy editing is great for initial drafts, quickly written or inexperienced authors. Critical analysis and review are best for getting feedback or comments about your manuscript.</p>
      <p>In this way, you will get in-depth recommendations and guidance that help you in the development process. If you are looking for additional support or content, we also offer ghostwriting and rewriting services that add depth and remove flaws from your material. You can send a sample of your writing or material without any hesitation because we provide free initial review and analysis. We will also provide our expert opinion about your material and suggest the best services accordingly.</p>
    </div>
  ) },
  { q: "Will my editor execute the revisions?", a: "Yes, we will love to implement changes and give feedback for additional improvement, but it all depends on you. Generally, we track all the edits and then correct the grammatical errors. This thing helps you identify the changes we made." },
  { q: "I have written a book before, but was not thriving. Can you help?", a: (
    <div className="flex flex-col gap-3">
      <p>Writing process needs creativity and skill. It&apos;s like an art that only a few people have. An editor is a must-have for a writer because he can track edits and collaborate with the writer to dig out the best final results. If you have existing material or manuscript, then we also help to make it better by evaluating it comprehensively and addressing all types of errors and issues. We also provide free book proposals and modified query letters in our ghostwriting packages.</p>
      <p>How to find a notable literary agent? Don&apos;t fret because we will give a list of genre-appropriate literary agents in order to send your proposal or query letter. Our services are best for competent and new authors who are searching for a firm for enhancing their material. We have a professional team of writers, editors, publishers, and marketers that help you capture your publishing goals.</p>
    </div>
  ) },
  { q: "How do you help in publishing and marketing once the book is complete?", a: (
    <div className="flex flex-col gap-3">
      <p>There is no doubt that the publishing market is highly competitive and overwhelming particularly for new writers. We will also assist our clients in this matter by providing consultation and support for hybrid, typical, or self-publishing houses.</p>
      <p>We offer query letters or proposals in our different ghostwriting packages without any cost. This tool will help you advertise and market your book to publishers and literary agents. We will also help you find the best literary agent of different genres for sending your proposal or customized query letter.</p>
    </div>
  ) },
  { q: "What will I get with my Interior Book Design?", a: "The ebook-ready and print-ready files you need to distribute your book both online and in print." },
  { q: "What do I need to prepare for my Interior Book Design project?", a: "You'll need to provide your final manuscript, the genre of your book, plus a rough idea of the styles you like so this can be incorporated into the design." },
  { q: "How much will the price vary?", a: "The price of your project will vary based on the number of words in your manuscript and the imagery (if any) you'd like to be included. Once you contact the designer, you'll be able to negotiate price before committing to the project." },
  { q: "What's the turnaround time?", a: "This may vary slightly depending on the size of project. You can lock this down when discussing the project with your consultant." },
];

export default function EditingPage() {
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
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-4"><span className="text-black">Book Editing Services,</span><br /><span className="text-primary">From Good to Great</span></h1>
                <p className="text-lg font-semibold mb-4" style={{ color: COLOR }}>{subline}</p>
                <p className="text-brand-body leading-relaxed mb-8">{desc}</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:opacity-90" style={{ background: COLOR }}>Get a Free Quote <ArrowRight size={16} /></Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-800 text-slate-800 font-bold px-7 py-4 rounded-full transition-all">Talk to an Editor</Link>
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
                <span className="text-black">Every Edit Your Book Needs. </span><span style={{ color: COLOR }}>None It Doesn&apos;t.</span>
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
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">Clear Pricing.<br />Clean Manuscripts.</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">Our book editing services come with everything below, built into your quote. What you see is exactly what you get.</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><BookOpen size={22} className="text-white" /></div>
                  <div>
                    <div className="text-white font-semibold text-sm">Free Consultation Included</div>
                    <div className="text-[#CFFAFE] text-xs">Talk to an editorial specialist before you commit. No pressure, no obligation.</div>
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
                <span className="text-black">Words From the Writers </span><span style={{ color: COLOR }}>Who Got Published</span>
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
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><BookOpen size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4">
              <span className="text-white">Almost There? Let&apos;s Finish It.</span>
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Book a free consultation with an editorial specialist and find the manuscript editing services your draft actually needs. No commitment, just honest advice.</p>
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
