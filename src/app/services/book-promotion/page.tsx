import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, Megaphone, Target, Mail, BarChart2 } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Book Promotion Services | The Author Success",
  description: "Strategic book promotion campaigns — Amazon rankings, ARC programs, BookTok, newsletter blasts. 3x average sales increase. 500+ books promoted.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "BOOK PROMOTION";
const headline = "Don't Let Your Book Be Amazon's Best-Kept Secret";
const subline = "Our book promotion services put your book in front of readers who are ready to buy.";
const desc = "Publishing your book is a big step, but readers still need a way to find it. We run promotions that get your book noticed through Amazon book promotion, reader newsletters, BookTok creators, and media outreach, so it keeps selling long after launch day.";

const stats = [
  { value: "Genre-Focused", label: "Campaigns for Your Readers", Icon: Target },
  { value: "Honest Reviews", label: "From Real Readers", Icon: Star },
  { value: "Newsletter &", label: "Influencer Reach", Icon: Mail },
  { value: "Clear Results", label: "Reports Every Campaign", Icon: BarChart2 },
];

const subServices = [
  { tag: "AMAZON", title: "Amazon Promotions", desc: "Free and discounted price promotions, timed carefully to lift your book's visibility in the categories where your readers are browsing." },
  { tag: "REVIEWS", title: "ARC & Review Programs", desc: "We share early copies of your book with real readers in your genre, so honest reviews are in place when your promotion goes live." },
  { tag: "EBOOK", title: "Reader Newsletter Features", desc: "Our ebook promotion services place your discounted eBook in curated reader newsletters that genre fans check for their next great read." },
  { tag: "SOCIAL", title: "BookTok & Bookstagram", desc: "We connect with BookTok and Bookstagram creators whose followers already love books like yours." },
];

const steps = [
  { num: "01", title: "Book Review & Strategy", desc: "We look at your book's genre, readers, current rankings, and reviews, then plan the promotions most likely to work for your title." },
  { num: "02", title: "Early Reviews & Buzz", desc: "We send your book to early readers and line up creators and newsletters, so your book has reviews and attention ready before the main push." },
  { num: "03", title: "Campaign Launch", desc: "Price promotions, newsletter features, creator posts, ads, and media outreach all go live together for the strongest possible impact." },
  { num: "04", title: "Results & Next Steps", desc: "You receive a clear report on rankings, reviews, and sales, along with recommendations to keep your book's momentum going." },
];

const included = [
  "Custom promotion strategy",
  "Amazon category and keyword review",
  "ARC reader distribution",
  "Review request sequences",
  "BookTok creator outreach",
  "Bookstagram campaign",
  "Reader newsletter placements",
  "Amazon Ads campaign",
  "Social media content",
  "Press release writing and distribution",
  "Ranking tracking",
  "Post-campaign results report",
];

const testimonials = [
  { quote: "I always believed in my book, but I struggled to get people to notice it. The team helped me reach readers who enjoy my kind of book, and I finally felt like my work was getting seen by the right people.", name: "Amanda R.", title: "Fiction Author", result: "Right Readers Reached" },
  { quote: "The team made the entire promotion process feel organized and manageable. They explained each step, kept me updated throughout the campaign, and gave me a clear report afterward so I could understand what had been done.", name: "James P.", title: "Business Author", result: "Clear Campaign Results" },
  { quote: "My book had been published for a while, and I wasn't sure how to create new interest around it. The team helped build a fresh campaign with reader features and promotional opportunities that gave the book a new push.", name: "Laura B.", title: "Romance Author", result: "New Momentum" },
];

const faqs = [
  { q: "When should I start promoting my book?", a: "Ideally, a few weeks before launch, so early reviews and buzz are ready on release day. That said, it's never too late to start." },
  { q: "Can you promote a book that's already published?", a: "Yes. Many authors come to us months or even years after launch. A well-planned promotion can bring an older book back in front of new readers." },
  { q: "Are the reviews real?", a: "Always. Early readers receive a copy of your book and leave honest reviews in their own words. We never buy reviews or offer anything in exchange for positive ones, which keeps your book in line with Amazon's rules." },
  { q: "Do you guarantee bestseller status?", a: "An honest promoter cannot guarantee anything regarding rankings, and we won't pretend that we can. All we do promise is a well-thought-out campaign and transparent reporting of how your book is performing." },
  { q: "What genres do you promote?", a: "We promote fiction, non-fiction, business, memoir, and children's books, and we tailor every campaign to the readers of that genre." },
  { q: "How is book promotion different from book marketing?", a: "Book marketing is your long-term strategy as a whole, while book promotion involves specific campaigns such as price reductions, highlighting the book in a newsletter, and contacting creators designed to give your book a significant boost in visibility." },
];

export default function BookPromotionPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: `linear-gradient(145deg, ${COLOR}22 0%, #ffffff 50%, ${COLOR}12 100%)` }}>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white" style={{ background: COLOR }}>{badge}</div>
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-4"><span className="text-black">Don't Let Your Book Be</span><br /><span className="text-primary">Amazon's Best-Kept Secret</span></h1>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Promotions That Put Your Book </span><span style={{ color: COLOR }}>in the Spotlight</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">We focus on the promotions that make sense for your genre and your goals, so every effort brings your book closer to the right readers.</p>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">The Promotion Playbook, </span><span style={{ color: COLOR }}>in Four Steps</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">We keep things simple, so you know what&apos;s happening with your promotion at every step.</p>
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
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">Your Full Promotion Plan,<br />All Included</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">Your quote covers the work from the first planning session to the final report. We&apos;ll go over the costs before getting started, so you know what you&apos;re paying for. No extra charges later.</p>
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>Author Stories</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">What Authors Say After </span><span style={{ color: COLOR }}>the Spotlight</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">In their own words, from authors who trusted us to introduce their books to more readers.</p>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Questions Authors Ask </span><span style={{ color: COLOR }}>Before They Promote</span></h2>
            </div>
          </FadeUp>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><Megaphone size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4"><span className="text-white">Ready to Put Your Book in the Spotlight?</span></h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Book a free consultation with our team. We&apos;ll go over your book, hear what you want to achieve, and help you figure out which promotions make sense for you.</p>
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
