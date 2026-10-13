import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, Users, Award, Clock, TrendingUp } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Author Marketing & Brand Building Services | The Author Success",
  description: "Build a powerful author brand — website, social media, email list, and reader community. 250+ authors branded. Average 10,000 email subscribers built.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "Author Marketing";
const headline = "Author Marketing That Makes Your Name the Bestseller.";
const subline = "Author marketing services that turn one book into a recognizable name, a loyal audience, and a lasting career.";
const desc = "A great book can get noticed once. A great author brand keeps readers coming back for every launch after it. Our author branding services shape how readers, media, and clients see you across your website, social media, email list, and public presence, so your name carries weight long before your next book drops.";
const serviceLabel = "Author Marketing";

const stats = [
  { value: "Brand", label: "Identity — Voice, bio, and visuals that fit you", Icon: Users },
  { value: "Platform", label: "Built — Website, social, and email, connected", Icon: TrendingUp },
  { value: "Media", label: "Ready — PR outreach and press kits", Icon: Award },
  { value: "Built", label: "to Last — An audience that grows with every book", Icon: Clock },
];

const subServices = [
  { tag: "Identity", title: "Author Brand Identity", desc: "Positioning, bio writing, brand voice, and a visual identity built around you. Our author branding services make sure readers recognize you at a glance, whether they find you on a shelf, a feed, or a stage." },
  { tag: "Platform", title: "Website & Social Presence", desc: "Our author platform building gives you a professional author website with book pages, a press kit, and email capture, plus optimized social profiles and a content strategy tailored to your readers." },
  { tag: "Audience", title: "Reader Email List Building", desc: "Lead magnets, signup optimization, and welcome sequences that turn casual readers into a loyal list you own, ready for every launch." },
  { tag: "PR", title: "Author PR & Media Outreach", desc: "Our author PR services put your name in front of journalists, podcast hosts, and event organizers, with press kits and pitching that position you as the go-to voice in your space." },
];

const steps = [
  { num: "01", title: "Brand Discovery", desc: "We learn your story, genre, readers, and career goals, then study comparable authors to find the space your brand should own." },
  { num: "02", title: "Brand Identity", desc: "Your positioning, author bio, brand voice, and visual identity are developed and refined with you until they feel unmistakably yours." },
  { num: "03", title: "Platform Building", desc: "Our author platform building brings your website, social profiles, and email system to life, all branded consistently across every touchpoint." },
  { num: "04", title: "Launch & Grow", desc: "Your brand goes live with a content strategy, email sequences, and author PR services that build momentum and put your name in front of the right audiences." },
];

const included = [
  "Author brand strategy document",
  "Professional author bio (short and long)",
  "Brand voice guidelines",
  "Visual identity system",
  "Social media profile optimization",
  "Content calendar and post templates",
  "Email list setup and welcome sequence",
  "Reader community strategy",
  "Press kit design",
  "Media appearance preparation",
  "Comparable author analysis",
  "Progress reporting and brand reviews",
];

const testimonials = [
  { quote: "Before working with the team, I was promoting my book without a clear direction. They helped me shape a consistent author brand, refine my message, and reach readers who genuinely connect with my work. I now feel confident showing up online as an author.", name: "Olivia Grant", title: "Contemporary Fiction Author", result: "Author Brand Strategy" },
  { quote: "My launch had momentum because every part of the campaign worked together from my author website and social content to reader outreach and promotional planning. I didn't just sell a book; I built an audience I can keep growing with future releases.", name: "James Whitmore", title: "Nonfiction & Business Author", result: "Book Launch Campaign" },
  { quote: "The marketing strategy gave my books the visibility they had been missing. I finally understood how to position myself, speak directly to my ideal readers, and create a professional presence that makes people remember my name.", name: "Sienna Morales", title: "Romance Author", result: "Reader Growth Program" },
];

const faqs = [
  { q: "What's included in an author brand?", a: "Your positioning, author bio, brand voice, visual identity, website, social presence, and email list, all working together so readers recognize and trust your name wherever they find you." },
  { q: "Which social platforms should I focus on?", a: "The ones where your readers already spend time. Our author marketing services start by mapping where your audience lives, so you invest in the right platforms instead of chasing all of them." },
  { q: "Do I need a website as an author?", a: "Yes. Your website is the one platform you fully own. It's home base for your books, your press kit, and your email list, and a core part of author platform building." },
  { q: "How long does it take to build an author brand?", a: "It depends on where you're starting and how many platforms are involved. We'll share a clear timeline after your consultation." },
  { q: "Can you help with an existing author brand?", a: "Absolutely. Our author branding services can refresh, refocus, or expand a brand you've already started, without losing the readers you've earned." },
  { q: "Do you offer PR on its own?", a: "Yes. Our author PR services are available as a standalone service for authors who already have a strong brand and want more media visibility." },
];

export default function AuthorMarketingPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: `linear-gradient(145deg, ${COLOR}22 0%, #ffffff 50%, ${COLOR}12 100%)` }}>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white" style={{ background: COLOR }}>{badge}</div>
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-4"><span className="text-black">Author Marketing</span><br /><span className="text-primary">That Makes Your Name the Bestseller.</span></h1>
                <p className="text-lg font-semibold mb-4" style={{ color: COLOR }}>{subline}</p>
                <p className="text-brand-body leading-relaxed mb-8">{desc}</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:opacity-90" style={{ background: COLOR }}>Get a Free Quote <ArrowRight size={16} /></Link>
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>What We Offer</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Every Type of Your </span><span style={{ color: COLOR }}>Author Brand, Covered</span></h2>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Our Proven </span><span style={{ color: COLOR }}>Process</span></h2>
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
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">Your Whole Brand.<br />One Clear Price.</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">Our author marketing services include everything listed below in your quoted price. No hidden add-ons, no surprise invoices.</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><Users size={22} className="text-white" /></div>
                  <div>
                    <div className="text-white font-semibold text-sm">Free Consultation Included</div>
                    <div className="text-[#CFFAFE] text-xs">Talk to an author marketing specialist before you commit. No pressure, no obligation.</div>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Their Names. Our Marketing. </span><span style={{ color: COLOR }}>Real Wins.</span></h2>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Questions Before </span><span style={{ color: COLOR }}>You Go Public</span></h2>
            </div>
          </FadeUp>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><Users size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4"><span className="text-white">Your Readers Are Searching. Be There.</span></h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Book a free consultation with an author marketing specialist and get a clear plan for your brand, platform, and visibility. No commitment, just honest advice.</p>
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
