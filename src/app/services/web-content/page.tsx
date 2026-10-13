import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, Monitor, Mic, Search, Target } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Web Content Writing Services | The Author Success",
  description: "Our web content writing services create clear, engaging copy that turns visitors into readers, clients, and buyers.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "WEB CONTENT WRITING";
const headline = "Web Content That Turns Visitors Into Readers";
const subline = "Our web content writing services create clear, engaging copy that turns visitors into readers, clients, and buyers.";
const desc = "When a visitor arrives at your website, you would like them to be able to see what it is all about and feel like they have come to the right place. We create the copy that will do just that.";

const stats = [
  { value: "Written in", label: "Your Voice", Icon: Mic },
  { value: "SEO", label: "Built In", Icon: Search },
  { value: "Clear Calls", label: "to Action", Icon: Target },
  { value: "Ready to", label: "Upload", Icon: Monitor },
];

const subServices = [
  { tag: "AUTHOR SITE", title: "Author Website Copy", desc: "Copy for your homepage, about page, book pages, and contact page that tells readers a little about you, introduces your books, and gives them a reason to stick around." },
  { tag: "LANDING PAGES", title: "Book Landing Pages", desc: "Focused launch pages for new books, written to bring in pre-orders, email signups, and reviews." },
  { tag: "SEO", title: "SEO Web Copy", desc: "Our seo content writing services work your name, genre, and topic keywords into your pages naturally, so the right people can find you on Google." },
  { tag: "BUSINESS", title: "Business & Publisher Websites", desc: "Service pages, about sections, and calls to action for publishing companies and businesses that want their website to bring in more clients." },
];

const steps = [
  { num: "01", title: "Brand & Audience Brief", desc: "Your website content writer learns about your brand, your voice, your audience, and what you want each page to achieve." },
  { num: "02", title: "Copy Strategy", desc: "We plan the structure and key messages for every page, so visitors are guided naturally from their first click to the action you want them to take." },
  { num: "03", title: "Writing & SEO", desc: "We write each page with clear messaging and strong calls to action, working your keywords naturally into headings, body copy, and meta descriptions." },
  { num: "04", title: "Review & Delivery", desc: "You review the copy and share your feedback. Once you're happy, we deliver the final version in your preferred format, or upload it to your website for you." },
];

const included = [
  "Website copy strategy",
  "Homepage copy",
  "About page copy",
  "Service or book page copy",
  "Contact page copy",
  "SEO keyword integration",
  "Meta titles and descriptions",
  "Clear calls to action",
  "Consistent brand voice",
  "Revision rounds included",
  "Mobile-friendly formatting",
  "Website upload support",
];

const testimonials = [
  {
    quote: "The original website copy did not make it clear what we provided or the reasons why clients should select us, but the new content now seems far more professional and helps visitors to understand our services better. The entire process went smoothly and the team carefully took our feedback into account.",
    name: "Lauren D.",
    title: "Small Business Owner",
    result: "More Professional Copy",
  },
  {
    quote: "I wanted my author website to have a more personal touch and for it to give readers a better insight into my books. The team wonderfully captured my voice and made both the homepage and the book pages much more engaging. All the elements now seem to be connected and match my writing style.",
    name: "Ethan R.",
    title: "Fiction Author",
    result: "Voice Perfectly Captured",
  },
  {
    quote: "The most significant change was the clarity of the website; the service pages now describe what we do using simple language and the calls to action sound natural rather than being aggressive. This was precisely the sort of update that our website required.",
    name: "Nadia S.",
    title: "Marketing Consultant",
    result: "Clearer Messaging",
  },
];

const faqs = [
  { q: "How long does website copy take?", a: "It depends on how many pages you need and how much research is involved. We'll give you a clear timeline before we start." },
  { q: "Can you write in my voice?", a: "Yes. We review your existing content, ask about your style, and write copy that sounds natural and true to you." },
  { q: "Is SEO included?", a: "Yes. Every page includes keyword research, natural keyword placement, and meta titles and descriptions to help you get found on Google." },
  { q: "Can you upload the copy to my website?", a: "Absolutely. We can upload the copy to most common website platforms, or deliver it in a document if you prefer to do it yourself." },
  { q: "Do you write book descriptions for book pages?", a: "Yes. We write book descriptions that give readers a feel for your story and make them want to buy." },
  { q: "Do I need new copy if I already have a website?", a: "If your website isn't bringing in readers, signups, or clients, the copy is often the reason. We can review your current pages and rewrite only what needs improving." },
  { q: "How much do web content writing services cost?", a: "Every project is priced based on the number of pages and the amount of research needed. We'll give you the full price upfront, so you won't have to worry about extra fees later." },
];

export default function WebContentPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: `linear-gradient(145deg, ${COLOR}22 0%, #ffffff 50%, ${COLOR}12 100%)` }}>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white" style={{ background: COLOR }}>{badge}</div>
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-4"><span className="text-black">Web Content</span><br /><span className="text-primary">That Turns Visitors Into Readers</span></h1>
                <p className="text-lg font-semibold mb-4" style={{ color: COLOR }}>{subline}</p>
                <p className="text-brand-body leading-relaxed mb-8">{desc}</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:opacity-90" style={{ background: COLOR }}>Get My Web Copy Written <ArrowRight size={16} /></Link>
                  <Link href="/portfolio" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-800 text-slate-800 font-bold px-7 py-4 rounded-full transition-all">See How It Works</Link>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Website Copy for </span><span style={{ color: COLOR }}>Authors and Businesses</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">When a visitor arrives at your website, you would like them to be able to see what it is all about and feel like they have come to the right place. We create the copy that will do just that.</p>
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
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>Our Process</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">From Brief to Published </span><span style={{ color: COLOR }}>in Four Steps</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">We will guide you through the whole process, be there with you, and ensure that the copy is suitable before making any final decisions.</p>
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
                <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block text-[#CFFAFE]">What&apos;s Included</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">Everything Copy Needs</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">From our first conversation to your final copy, your quote covers the whole process. We&apos;ll make sure you know what&apos;s included and what it will cost before we get started, so there are no unexpected charges later.</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><Monitor size={22} className="text-white" /></div>
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
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>Client Stories</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Real Client </span><span style={{ color: COLOR }}>Stories</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">In their own words, from authors and businesses who trusted us with their websites.</p>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Questions Before </span><span style={{ color: COLOR }}>We Write a Word</span></h2>
            </div>
          </FadeUp>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><Monitor size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4"><span className="text-white">Let&apos;s Give Your Website Better Words</span></h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Book a free consultation and tell us about your website. We&apos;ll talk through your goals and show you how the right words can bring in more readers and clients.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white font-bold px-10 py-4 rounded-full shadow-lg transition-all hover:bg-white/90" style={{ color: "#089bb2" }}>Get Started Today <ArrowRight size={18} /></Link>
              <Link href="/services" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-primary text-brand-dark-2 font-bold px-8 py-4 rounded-full transition-all">View All Services</Link>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
