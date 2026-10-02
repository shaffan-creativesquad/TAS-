import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, Megaphone, Award, Clock, TrendingUp, Users } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "Book Marketing Services | The Author Success",
  description: "Professional book launch strategy, Amazon SEO, social media campaigns, ARC programs, and PR outreach. 300+ bestsellers launched. 3x average sales increase.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "Launch & Grow";
const headline = "Get Your Book in Front of the Right Readers";
const subline = "Data-driven marketing strategies that generate sales from day one.";
const desc = "A great book without marketing stays undiscovered. Our launch strategists combine Amazon SEO, social media campaigns, email marketing, influencer outreach, and press coverage to build pre-launch buzz and sustain post-launch momentum. We've helped over 300 authors hit bestseller status in their categories.";
const serviceLabel = "Marketing";

const stats = [
  { value: "300+", label: "Bestsellers Launched", Icon: TrendingUp },
  { value: "3x", label: "Avg. Sales Increase", Icon: Award },
  { value: "50K+", label: "Avg. Launch Reach", Icon: Users },
  { value: "4 Wks", label: "Pre-Launch Prep", Icon: Clock },
];

const subServices = [
  { tag: "Strategy", title: "Book Launch Strategy", desc: "A full 90-day launch plan covering pre-launch buzz, launch day execution, and post-launch sustainment — mapped to your specific genre and audience." },
  { tag: "Amazon", title: "Amazon SEO & Optimization", desc: "Keyword research, category optimization, A+ content, book description copywriting, and Amazon Ads setup to maximize organic discoverability." },
  { tag: "Social", title: "Social Media Campaigns", desc: "Instagram, TikTok (BookTok), Facebook, and Pinterest campaigns targeting the right readers with content that gets shared." },
  { tag: "PR", title: "Press & Media Outreach", desc: "Professional press releases, media kit creation, and targeted outreach to book bloggers, podcasters, journalists, and book clubs." },
];

const steps = [
  { num: "01", title: "Market Research", desc: "We analyze your genre, target audience, competitive landscape, and identify the highest-impact marketing channels for your book." },
  { num: "02", title: "Launch Strategy Build", desc: "We create a customized 90-day launch plan with specific tactics, timelines, and deliverables for each marketing channel." },
  { num: "03", title: "Pre-Launch Campaign", desc: "ARC distribution to early readers, social media build-up, email list warming, and pre-order optimization — 4 weeks before launch." },
  { num: "04", title: "Launch Week Execution", desc: "Coordinated launch-day push across all channels — social posts, email blasts, influencer activations, and Amazon Ads go live simultaneously." },
  { num: "05", title: "Reporting & Optimization", desc: "Weekly analytics reports during the launch period with real-time optimization based on what's driving the most sales." },
];

const included = [
  "90-day marketing strategy document",
  "Amazon SEO keyword research",
  "Optimized book title & description",
  "Amazon category & keyword setup",
  "ARC (Advance Review Copy) program",
  "Email marketing campaign (3 sequences)",
  "Social media content calendar",
  "BookTok & Bookstagram outreach",
  "Press release writing & distribution",
  "Book blogger outreach (50+ contacts)",
  "Amazon Ads campaign setup",
  "Post-launch analytics reporting",
];

const testimonials = [
  { quote: "Pre-launch strategy got me 200 ARC readers before release day. I hit #1 in my Amazon category on launch day with 600 reviews in the first week.", name: "Michelle C.", title: "Romance Author · #1 Amazon Category", result: "#1 Amazon Category" },
  { quote: "The BookTok campaign went viral — 50,000 TikTok views in 3 days. My book sold out its first print run before launch week was over.", name: "Tyler S.", title: "YA Author · 15,000 Copies Sold", result: "15,000 Copies Sold" },
  { quote: "The Amazon SEO work alone tripled my organic traffic. Three months after launch I'm still seeing consistent daily sales because the discoverability is so strong.", name: "Nina P.", title: "Self-Help Author · Bestseller", result: "Sustained Bestseller" },
];

const faqs = [
  { q: "When should I start book marketing?", a: "Ideally 8–12 weeks before your launch date. Pre-launch activities like ARC distribution, email list building, and social media presence are critical for a strong launch day." },
  { q: "Do you run Amazon Ads?", a: "Yes, we set up and manage Sponsored Products and Sponsored Brands campaigns on Amazon, with ongoing optimization to maximize your ad spend ROI." },
  { q: "What is an ARC program?", a: "ARC (Advance Review Copy) is when we send your book to early readers before launch to generate verified reviews on Amazon and Goodreads before your official release date." },
  { q: "Can you help with a book that's already published?", a: "Absolutely. We can run marketing campaigns for existing titles to boost sales, improve Amazon rankings, and build a long-term reader audience." },
  { q: "Do you guarantee bestseller status?", a: "We can't guarantee specific rankings, but our strategies have achieved Amazon category bestseller status for over 300 authors. Results depend on your genre, competition, and execution of the strategy." },
];

export default function MarketingPage() {
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
                <span className="text-black">Every Type of </span><span style={{ color: COLOR }}>{serviceLabel}</span><span className="text-black"> Covered</span>
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">No Hidden Fees.<br />No Surprises.</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">When you work with us, you get everything listed below — included in your quoted price. We believe in transparent pricing with no unexpected add-ons.</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><Megaphone size={22} className="text-white" /></div>
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

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>Author Stories</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black">
                <span className="text-black">Real Results, Real </span><span style={{ color: COLOR }}>Authors</span>
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>FAQ</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black">
                <span className="text-black">Common </span><span style={{ color: COLOR }}>Questions</span>
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
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><Megaphone size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4">
              <span className="text-white">Ready to Get Started?</span>
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Book a free 30-minute consultation with one of our publishing experts. No commitment — just honest advice about your project.</p>
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
