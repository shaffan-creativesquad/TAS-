import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, BarChart2, TrendingUp, Users, Award } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Digital Marketing for Authors & Books | The Author Success",
  description: "Full-funnel digital marketing for authors — Amazon Ads, social media, email, SEO, and content marketing. 300+ campaigns. Average 4x ROAS.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "DIGITAL MARKETING";
const headline = "Digital Marketing for Authors That Turns Scrolls Into Sales";
const subline = "We take responsibility for ads, content, and results tracking so that your book gets to its intended audience while you just have to write.";
const desc = "These days, readers often find their next book through social media, search, or email. Our book digital marketing services bring ads, social media, content, email, and SEO together to help more of the right people discover your book.";

const highlightCards = [
  { top: "Campaigns Built", bottom: "for Your Genre", Icon: BarChart2 },
  { top: "Ads Aimed at", bottom: "Real Readers", Icon: TrendingUp },
  { top: "Budgets Managed", bottom: "With Care", Icon: Users },
  { top: "Clear, Honest", bottom: "Reporting", Icon: Award },
];

const subServices = [
  { tag: "AMAZON", title: "Amazon Advertising", desc: "Sponsored Products, Sponsored Brands, and Display ads managed by specialists who understand how book buyers search, browse, and decide what to read next." },
  { tag: "SOCIAL", title: "Social Media Marketing", desc: "Our social media marketing for authors covers Instagram, TikTok, Facebook, and Pinterest. We create content that feels like you, helps people get to know your work, and keeps your books in front of readers." },
  { tag: "ADS", title: "Facebook & Instagram Ads", desc: "We run Facebook and Instagram ads for people who are interested in what you write about, like certain authors and genres of books. We want to make sure that you reach the right audience, the one who will be interested in reading your book." },
  { tag: "CONTENT", title: "Content & Email Marketing", desc: "From blog posts and author newsletters to email campaigns, we create content that keeps readers connected to you and gives them a reason to come back when you have something new to share." },
  { tag: "SEO", title: "Author & Book SEO", desc: "We optimize your author website and book pages so readers can find you on Google and Amazon, even when you're not running ads." },
];

const steps = [
  { num: "01", title: "Complimentary Consultation", desc: "Tell us about your book, your readers, and your budget. We review your current online presence and build a digital marketing strategy for authors with clear goals for every channel." },
  { num: "02", title: "Writing & Editing", desc: "Our team writes your ad copy, social posts, email sequences, and website content. Every piece is edited to match your voice and speak directly to the readers you want to reach." },
  { num: "03", title: "Design & Formatting", desc: "We design ad creatives, social graphics, and landing pages, all formatted for every platform and screen size so your book looks great wherever readers see it." },
  { num: "04", title: "Publish & Launch", desc: "Your campaigns go live with tracking in place from day one. We monitor performance closely, adjust what isn't working, and send you regular reports so you always know how your book is doing." },
];

const included = [
  "Amazon Ads campaign setup and management",
  "Facebook and Instagram ad campaigns",
  "Social media content calendar",
  "Email marketing setup",
  "Author website and book SEO",
  "Ad creative design and copywriting",
  "Conversion tracking setup",
  "Regular performance updates",
  "Monthly detailed reports",
  "Ongoing campaign optimization",
  "A dedicated project manager as your single point of contact",
];

const testimonials = [
  { quote: "I had been trying to advertise my own book through ads, but I did not know what was actually working for me. This team helped me figure out my market, sorted out my campaigns, and provided me with a clear direction for my entire launch process.", name: "Sarah M.", title: "Fiction Author", result: "Fiction" },
  { quote: "What really struck me about the marketing was the focus on my particular genre. Everything seemed to tie together, not just marketing techniques but everything else, too. I noticed that people were showing an interest in my novel and visiting my author page.", name: "Daniel R.", title: "Business Author", result: "Business" },
  { quote: "I'm a writer, not a marketer, so trying to stay on top of advertising, social media, and analytics was getting to be too much. They handled that for me while still making sure I knew what was going on. It left me with a lot more time for writing.", name: "Emily K.", title: "Non-Fiction Author", result: "Non-Fiction" },
];

const faqs = [
  { q: "What budget do I need for digital marketing?", a: "This is based on what you want, what you write, and how we distribute it. We will advise on a budget that fits your book in your consultation, and we will never try to force you to spend more than you wish." },
  { q: "Do you manage Amazon Ads?", a: "Yes. We handle keyword research, campaign setup, and ongoing management, adjusting your ads based on performance so your budget goes toward what's working." },
  { q: "Do Facebook ads work for books?", a: "They can work very well when they're targeted properly. Our Facebook ads for authors focus on readers who already enjoy your genre or similar authors, which helps keep costs down and sales steady." },
  { q: "How quickly will I see results?", a: "Some campaigns generate clicks and conversions within a couple of weeks, while SEO and content marketing take time to develop. We will set realistic expectations from the beginning and update you on our progress as we go." },
  { q: "Can you market a book in any genre?", a: "Yes. We work with fiction, non-fiction, business, memoir, and children's books, and we tailor every campaign to the readers of that genre." },
  { q: "Do you create the ad creatives?", a: "Yes. Our team writes the ad copy and designs the visuals, then tests different versions to see which ones bring in the most readers." },
];

export default function DigitalMarketingPage() {
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
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:opacity-90" style={{ background: COLOR }}>Get a Free Quote <ArrowRight size={16} /></Link>
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

      {/* WHAT WE OFFER */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>What We Offer</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4">
                <span className="text-black">Every Platform Your Readers </span><span style={{ color: COLOR }}>Scroll, Covered</span>
              </h2>
              <p className="text-brand-body max-w-2xl mx-auto">We focus on the platforms where your readers already spend their time, and we make every channel work toward the same goal: selling more books.</p>
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
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>How We Grow Your Readership</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4">
                <span className="text-black">Four Steps From </span><span style={{ color: COLOR }}>Scroll to Sold</span>
              </h2>
              <p className="text-brand-body max-w-2xl mx-auto">A clear, organized process so you always know where your budget is going and what it&apos;s bringing back.</p>
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
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">Strategy, Ads, Content,<br />and Reports. All Included.</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">Your quote includes everything listed below, from strategy and content to reporting. You’ll know what you’re paying for from the start, with no surprise costs added later. A digital marketing strategy built for your genre and goals</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><BarChart2 size={22} className="text-white" /></div>
                  <div>
                    <div className="text-white font-semibold text-sm">Free Consultation Included</div>
                    <div className="text-[#CFFAFE] text-xs">Talk to our team about your book and your budget before you commit. No obligation, no pressure.</div>
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
                <span className="text-black">What Authors Say After the </span><span style={{ color: COLOR }}>Reports Come In</span>
              </h2>
              <p className="text-brand-body max-w-xl mx-auto">In their own words, from authors who trusted us to grow their readership online.</p>
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
                <span className="text-black">Everything You&apos;d Ask Before </span><span style={{ color: COLOR }}>Your First Campaign</span>
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
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><BarChart2 size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4">
              <span className="text-white">Your Readers Are Scrolling. Let&apos;s Make Them Stop.</span>
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Book a free consultation with our team. We’ll look at your book, talk through your goals, and give you an honest picture of what it will take to grow your readership online.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white font-bold px-10 py-4 rounded-full shadow-lg transition-all hover:bg-white/90" style={{ color: "#089bb2" }}>Book a Free Consultation <ArrowRight size={18} /></Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-primary text-brand-dark-2 font-bold px-8 py-4 rounded-full transition-all">Explore All Services</Link>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
