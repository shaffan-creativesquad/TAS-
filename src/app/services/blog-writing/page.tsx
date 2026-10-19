import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, Rss, Award, Clock, TrendingUp } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Professional Blog Writing Services for Authors | The Author Success",
  description: "Consistent, SEO-optimized blog writing in your voice. Monthly packages available. 10,000+ posts written. Grow your audience between book launches.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "Consistent Content";
const headline = "Blogs Your Readers Savor and Search Engines Favor";
const subline = "Blog writing services that keep your author platform visible, current, and growing long after launch day.";
const desc = "Remain visible between books. Our professional blog writer team composes research-rich posts in your voice that captivate readers and strengthen your search presence.";
const serviceLabel = "Blog Writing";

const stats = [
  { value: "Blogs", label: "Written", Icon: Rss },
  { value: "Average", label: "Delivery", Icon: Clock },
  { value: "Traffic", label: "Growth", Icon: TrendingUp },
  { value: "Client", label: "Reputation", Icon: Award },
];

const subServices = [
  { tag: "Author Blog", title: "Blog Writing for Authors", desc: "Fresh posts for your author website that share your writing journey, book news, genre perspectives, plus moments that bring readers closer." },
  { tag: "SEO", title: "SEO-Focused Blog Writing", desc: "Our SEO blog writing services deliver keyword-focused posts built to climb Google rankings and reach readers already searching your genre." },
  { tag: "Ghostwritten", title: "Ghostwriting for Your Blog", desc: "Expertly composed posts written in your voice and published under your name, with no credit to us." },
  { tag: "Packages", title: "Ongoing Blog Content Plans", desc: "Steady monthly publishing that keeps your platform active and your audience engaged all year long." },
];

const steps = [
  { num: "01", title: "Complimentary Consultation", desc: "We define your topics, posting rhythm, target keywords, and content goals around your book and your brand." },
  { num: "02", title: "Writing & Editing", desc: "Each post is written in your voice with smart SEO structure and persuasive storytelling, then polished by our editors. You review every piece and request changes before it goes live." },
  { num: "03", title: "Design & Formatting", desc: "We organize your monthly content calendar and format each post with distinct headings, links, and image suggestions." },
  { num: "04", title: "Publish & Launch", desc: "We can format and upload approved posts to your WordPress, Squarespace, or Wix site whenever you need us to." },
];

const included = [
  "Content planning",
  "Monthly content calendar",
  "SEO keyword research",
  "Blog writing",
  "Meta descriptions",
  "Image suggestions",
  "Internal linking",
  "Brand voice matching",
  "Editing and proofreading",
  "CTA placement",
  "Publishing support",
  "Monthly reporting",
];

const testimonials = [
  { quote: "It Sounds Like Me.", subtext: "Your professional blog writer learns your tone, rhythm, and writing style first, so each post feels natural to your readers.", name: "Emily Carter", title: "Fiction Author", result: "Voice Match" },
  { quote: "My Blog Is Finally Consistent.", subtext: "A steady content plan keeps your blog updated while you focus on writing your next manuscript.", name: "Daniel Brooks", title: "Non-Fiction Author", result: "Consistent Blog" },
  { quote: "Readers Are Finding Me.", subtext: "Our SEO blog writing services help your posts reach readers searching for books and topics related to your genre.", name: "Sophia Bennett", title: "Self-Help Author", result: "SEO Growth" },
];

const faqs = [
  { q: "How frequently should I post on my author blog?", a: "There's no need to post every day. A schedule, such as one post each week, can keep your site fresh." },
  { q: "What topics work well for an author blog?", a: "You can cover new releases, behind-the-scenes writing, book-related topics, or questions your readers often ask." },
  { q: "Will the posts sound like me?", a: "Yes. Your professional blog writer studies your voice and manner first, and you approve every post before it's published." },
  { q: "Can you publish posts on my website?", a: "Absolutely. We can format and upload your approved posts to WordPress, Squarespace, or Wix for you." },
  { q: "Can blog posts be turned into social media content?", a: "Yes. We can turn each post into captions, newsletter snippets, and short-form content to help you reach more people." },
];

export default function BlogWritingPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: `linear-gradient(145deg, ${COLOR}22 0%, #ffffff 50%, ${COLOR}12 100%)` }}>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white" style={{ background: COLOR }}>{badge}</div>
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-4"><span className="text-black">Blogs Your Readers Savor</span><br /><span className="text-primary">and Search Engines Favor</span></h1>
                <p className="text-lg font-semibold mb-4" style={{ color: COLOR }}>{subline}</p>
                <p className="text-brand-body leading-relaxed mb-8">{desc}</p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:opacity-90" style={{ background: COLOR }}>Get a Free Quote <ArrowRight size={16} /></Link>
                  <Link href="/portfolio" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-800 text-slate-800 font-bold px-7 py-4 rounded-full transition-all">View Our Work</Link>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Whatever Your Blog Needs, </span><span style={{ color: COLOR }}>We Write It</span></h2>
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
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>How It operates</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">A Process That Keeps Your </span><span style={{ color: COLOR }}>Blog Moving</span></h2>
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
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">Straightforward Pricing.<br />Zero Surprises.</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">Everything listed is included in your quoted price. Our pricing is clear, so you always know what to expect.</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><Rss size={22} className="text-white" /></div>
                  <div>
                    <div className="text-white font-semibold text-sm">Free Consultation Included</div>
                    <div className="text-[#CFFAFE] text-xs">Talk to a publishing expert before you decide, there&apos;s no obligation.</div>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Real Authors. Real Readers. </span><span style={{ color: COLOR }}>Real Results.</span></h2>
              <p className="text-brand-body mt-3 max-w-xl mx-auto">Hear from authors who trusted our blog writing services to keep their platforms active and their audiences growing.</p>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <div className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex mb-4">{[1,2,3,4,5].map(j => <Star key={j} size={13} className="text-amber-400 fill-amber-400" />)}</div>
                  <p className="font-[family-name:var(--font-playfair)] text-base font-bold text-brand-dark mb-2 leading-relaxed">&quot;{t.quote}&quot;</p>
                  <p className="text-sm text-brand-body mb-4 leading-relaxed">{t.subtext}</p>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Your Questions, </span><span style={{ color: COLOR }}>Answered</span></h2>
            </div>
          </FadeUp>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><Rss size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4"><span className="text-white">Ready to Hire a Blog Writer?</span></h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">When you hire a blog writer from us, you get a free 30-minute chat with a publishing expert first. There&apos;s no pressure, just honest advice about your blog.</p>
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
