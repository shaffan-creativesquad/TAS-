import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, FileText, Mic, Search, CheckSquare } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Professional Article Writing Services | The Author Success",
  description: "SEO-optimized article writing and publishing for authors and experts. Guest posts, blog articles, thought leadership content. 5,000+ articles written.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "ARTICLE WRITING & PUBLISHING";
const headline = "Your Expertise, Published Where It Matters";
const subline = "Our article writing services turn your expertise into well-researched articles that build authority.";
const desc = "Good articles can keep bringing people to your website long after you publish them. We write articles that sound like you and reflect your knowledge, whether they're for your blog, industry publications, or guest posts. Each one is written in your name and with SEO in mind.";

const stats = [
  { value: "Written in Your Voice", label: "Every Article Sounds Like You", Icon: Mic },
  { value: "SEO-Ready Structure", label: "Built to Be Found on Google", Icon: Search },
  { value: "Original & Checked", label: "Plagiarism-Free Every Time", Icon: CheckSquare },
  { value: "Editor Reviewed", label: "Before Every Delivery", Icon: FileText },
];

const subServices = [
  { tag: "SEO", title: "SEO Articles", desc: "Keyword-focused articles with clear headings, meta descriptions, and internal links, written to help the right readers find you through search." },
  { tag: "GUEST POSTS", title: "Guest Post Writing", desc: "Our guest post writing services create articles tailored to the style and audience of industry blogs and publications in your field." },
  { tag: "PUBLISHING", title: "Article Publishing", desc: "Our article publishing services pitch your articles to relevant websites and publications, giving your work the best chance of being accepted and seen." },
  { tag: "THOUGHT LEADERSHIP", title: "LinkedIn & Thought Leadership", desc: "Long-form articles and LinkedIn pieces that share your ideas, build trust, and keep your name in front of the people who matter." },
];

const steps = [
  { num: "01", title: "Topic & Keyword Research", desc: "We find the topics and keywords your audience is searching for, so every article has a clear purpose." },
  { num: "02", title: "Article Brief", desc: "We create a brief covering the title, target keyword, structure, and key points, and share it with you for approval." },
  { num: "03", title: "Writing & Editorial Review", desc: "Your writer researches and writes the article in your voice, then a senior editor reviews it for clarity, accuracy, and SEO." },
  { num: "04", title: "Delivery & Publishing", desc: "You receive the final article ready to publish, or we pitch it to relevant publications on your behalf." },
];

const included = [
  "SEO keyword research",
  "Topic ideas",
  "Fully researched article writing",
  "SEO optimization",
  "Meta title and description",
  "Internal linking suggestions",
  "Image alt text recommendations",
  "Editorial review",
  "Plagiarism check",
  "Revision rounds included",
  "Publishing and pitching support",
  "Performance tracking",
];

const testimonials = [
  { quote: "I had plenty of ideas but struggled to turn them into articles that sounded like me. They took the time to understand my work and what I wanted to say. The articles were clear, easy to read, and felt like something I would actually write.", name: "Oliver W.", title: "Business Consultant", result: "Voice Matched" },
  { quote: "Guest posts take a lot of time, especially when every website has its own way of doing things. Getting help with that made my life a lot easier, and the articles still fit my industry and the people I wanted to reach.", name: "Priya N.", title: "Marketing Professional", result: "Guest Posts Done" },
  { quote: "I kept telling myself I needed to post more on my website, but I never seemed to have the time. Having someone take care of the content made it much easier to stay on track.", name: "Marcus E.", title: "Entrepreneur", result: "Consistent Content" },
];

const faqs = [
  { q: "How long are your articles?", a: "Most articles run between 800 and 2,000 words, depending on the topic and where they'll be published. We'll recommend the right length for your goals." },
  { q: "Do you publish the articles for me?", a: "We can. We'll publish on your blog or pitch your articles to relevant publications. Final acceptance is always up to each publication's editors, but we give every pitch the best possible chance." },
  { q: "Will my articles rank on Google?", a: "No one can guarantee rankings, but every article is built on keyword research and SEO best practices to give it the strongest chance of being found." },
  { q: "Can you write in my voice?", a: "Yes. We study your existing content, ask about your views, and write so that every article sounds like it came from you." },
  { q: "How many articles do I need each month?", a: "It depends on your goals. Many authors start with two to four articles a month, and we'll suggest a pace that fits your budget and plans." },
  { q: "How much do article writing services cost?", a: "Every project is quoted individually based on article length, research, and publishing needs. The price you're quoted is the price you pay, with no hidden fees." },
];

export default function ArticleWritingPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: `linear-gradient(145deg, ${COLOR}22 0%, #ffffff 50%, ${COLOR}12 100%)` }}>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white" style={{ background: COLOR }}>{badge}</div>
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-4"><span className="text-black">Your Expertise,</span><br /><span className="text-primary">Published Where It Matters</span></h1>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Articles for Every Goal </span><span style={{ color: COLOR }}>and Platform</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">Whether you want to rank on Google, appear in respected publications, or grow your reputation on LinkedIn, we write the articles that get you there.</p>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">From Idea to Published Article </span><span style={{ color: COLOR }}>in Four Steps</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">We keep things simple, so you know what&apos;s happening with your articles at every step.</p>
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
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">Research, Writing, and Publishing,<br />All Included</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">We&apos;ll go over the cost with you before starting, so you know what&apos;s included and what you&apos;ll be paying. No hidden fees or unexpected charges later.</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><FileText size={22} className="text-white" /></div>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">What Authors Say About </span><span style={{ color: COLOR }}>Their Articles</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">In their own words, from authors and experts who trusted us to share their ideas.</p>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Questions Experts Ask Before </span><span style={{ color: COLOR }}>Their First Article</span></h2>
            </div>
          </FadeUp>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><FileText size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4"><span className="text-white">Let&apos;s Get Your Ideas Published</span></h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Book a free consultation with our team. We&apos;ll talk through your expertise, your audience, and the articles that will help you grow your authority.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white font-bold px-10 py-4 rounded-full shadow-lg transition-all hover:bg-white/90" style={{ color: "#089bb2" }}>Book a Free Consultation <ArrowRight size={18} /></Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-primary text-brand-dark-2 font-bold px-8 py-4 rounded-full transition-all">View All Services</Link>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
