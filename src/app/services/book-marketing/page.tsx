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

const badge = "BOOK MARKETING";
const headline = "Book Marketing for Authors Who Want Readers, Not Just Reviews";
const subline = "We help your book reach the readers who are already looking for something like it.";
const desc = "Publishing a book is a big milestone, but getting people to buy it is a different job altogether. Our book marketing services bring together Amazon book marketing, social media, press outreach, and targeted book advertising services to build interest before launch and keep sales moving long after it.";

const highlightCards = [
  { top: "Strategy Built", bottom: "Around Your Genre", Icon: TrendingUp },
  { top: "Amazon Listing", bottom: "Optimization", Icon: Award },
  { top: "Launch Plans", bottom: "With Clear Milestones", Icon: Clock },
  { top: "Reports You", bottom: "Can Actually Read", Icon: Users },
];

const subServices = [
  { tag: "STRATEGY", title: "Book Launch Strategy", desc: "Our book launch marketing begins before your book is released. We create a plan based on your genre and audience, from building interest before launch to getting your book in front of readers after it goes live." },
  { tag: "AMAZON", title: "Amazon Optimization", desc: "Amazon is where many readers go when they're looking for their next book. Our Amazon book marketing includes keyword research, category selection, A+ content, and a clear book description that helps turn visitors into buyers." },
  { tag: "ADVERTISING", title: "Book Advertising", desc: "Our book advertising services include Amazon Ads, Facebook, and Instagram campaigns focused on reaching readers who are likely to be interested in your book. We keep an eye on the results and adjust the campaigns based on what's working." },
  { tag: "SOCIAL", title: "Social Media & BookTok", desc: "We create content for Instagram, TikTok, Facebook, and Pinterest, and connect with BookTok and Bookstagram creators who can introduce your book to engaged readers." },
  { tag: "PR", title: "Press & Media Outreach", desc: "Press releases, media kits, and personal outreach to book bloggers, podcasters, journalists, and book clubs who can help get your book talked about." },
];

const steps = [
  { num: "01", title: "Complimentary Consultation", desc: "Tell us about your book, your readers, and what you want it to achieve. We look at your genre, your current listing, and comparable titles, then put together a marketing plan built around your goals." },
  { num: "02", title: "Writing & Editing", desc: "Whether we've written your book or you're bringing a finished manuscript, our editors make sure it's polished and ready for readers. At the same time, we write your book description, author bio, and campaign content." },
  { num: "03", title: "Design & Formatting", desc: "Our designers make sure your cover stands out in a crowded marketplace, and we create the graphics, ads, and social content your campaign needs." },
  { num: "04", title: "Publish & Launch", desc: "Your book goes live with full book launch marketing behind it, including Amazon book marketing, targeted ads, social campaigns, and press outreach. After launch, we keep tracking results and adjusting the campaign to keep sales moving." },
];

const included = [
  "Amazon keyword research",
  "Optimized book title, subtitle, and description",
  "Amazon category and keyword setup",
  "Advance review copy (ARC) program",
  "Email marketing campaigns",
  "Social media content calendar",
  "BookTok and Bookstagram outreach",
  "Press release writing and distribution",
  "Book blogger and podcast outreach",
  "Amazon Ads campaign setup and management",
  "Post-launch performance reporting",
];

const testimonials = [
  { quote: "I had already published my book, but sales had slowed down and I wasn't sure what to change. The team gave me a clear strategy, improved my Amazon listing, and helped get the book back in front of the right readers. I finally felt like the marketing had a direction.", name: "Emily R.", title: "Non-Fiction Author", result: "Non-Fiction" },
  { quote: "What impressed me most was the fact that they did not follow the same marketing plan for all their books but made time to get acquainted with my book, my genre, and the target audience. It was all very well structured, and the process of launching the book turned out to be much easier than expected.", name: "Marcus T.", title: "Fiction Author", result: "Fiction" },
  { quote: "I knew posting on social media wasn't going to be enough. The team helped me with Amazon, email, ads, and outreach, and they made sure everything worked together. I also liked knowing where the marketing money was going instead of just spending it and hoping for the best.", name: "Laura M.", title: "Business Author", result: "Business" },
];

const faqs = [
  { q: "When should I start marketing my book?", a: "The earlier, the better. Starting before your release date gives us time to build an audience, gather early reviews, and set up pre-orders, which all help your book launch with momentum." },
  { q: "Do you run Amazon Ads?", a: "Yes. We handle keyword research, campaign setup, and ongoing management, adjusting your ads based on performance so your budget goes toward what's working." },
  { q: "What is an ARC program?", a: "ARC stands for Advance Review Copy. We share early copies of your book with selected readers before launch, so your book has honest reviews in place when it goes live." },
  { q: "Can you help with a book that's already published?", a: "Absolutely. Many authors come to us after launch. We review your listing, pricing, and current marketing, then build a plan to bring your book back in front of readers." },
  { q: "Do you guarantee bestseller status?", a: "We will not lie to you by saying that our team can guarantee that the book will be successful in reaching the top sales list position, but what we will assure you is the proper marketing strategy and communication regarding the process." },
  { q: "How much do book marketing services cost?", a: "Every campaign is quoted based on your goals, timeline, and the channels involved. The price you're quoted is the price you pay, and you always keep 100% of your royalties." },
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
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:opacity-90" style={{ background: COLOR }}>Plan My Book Launch <ArrowRight size={16} /></Link>
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
                <span className="text-black">Wherever Readers Scroll, Search, or Shop, </span><span style={{ color: COLOR }}>Your Book Shows Up</span>
              </h2>
              <p className="text-brand-body max-w-2xl mx-auto">Every book has a different audience, so we focus on the channels where your readers actually spend their time.</p>
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
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>The Launch Plan</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4">
                <span className="text-black">Four Steps to Getting </span><span style={{ color: COLOR }}>Your Book Noticed</span>
              </h2>
              <p className="text-brand-body max-w-2xl mx-auto">A clear, organized process so you always know what&apos;s happening, what&apos;s coming next, and how your book is performing.</p>
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
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">All the Marketing.<br />One Honest Price.</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">Your quote covers the full marketing campaign from planning to post-launch reporting. You’ll know exactly what’s included before we begin, with no unexpected add-ons along the way. A custom marketing strategy built for your genre and goals</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><Megaphone size={22} className="text-white" /></div>
                  <div>
                    <div className="text-white font-semibold text-sm">Free Consultation Included</div>
                    <div className="text-[#CFFAFE] text-xs">Talk to our team about your book and your goals before you commit. No obligation, no pressure.</div>
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
                <span className="text-black">Readers Found Them. Here&apos;s What They </span><span style={{ color: COLOR }}>Said About Us.</span>
              </h2>
              <p className="text-brand-body max-w-xl mx-auto">In their own words, from authors who trusted us to introduce their books to the world.</p>
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
                <span className="text-black">Questions Authors Ask Before </span><span style={{ color: COLOR }}>Hitting &quot;Publish&quot;</span>
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
              <span className="text-white">Your Book Deserves Readers. Let&apos;s Go Find Them.</span>
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Book a free consultation with our team. We&apos;ll talk about your book, your goals, and who you want to reach, then give you an honest idea of what it&apos;ll take to get your book in front of the right readers.</p>
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
