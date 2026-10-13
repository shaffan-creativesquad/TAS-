import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Star, Briefcase, TrendingUp, PenLine, Layout, Shield } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Business Proposal Writing Services | The Author Success",
  description: "Professional business proposal writing that wins clients, funding, and partnerships. RFPs, business plans, grant proposals, and book proposals. NDA included.",
};

const COLOR = "#0891B2";
const LIGHT_BG = "#ECFEFF";

const badge = "WIN MORE DEALS";
const headline = "Business Proposal Writing That Wins Contracts.";
const subline = "Business proposal writing services that turn your expertise into persuasive documents that win clients, funding, and partnerships.";
const desc = "Whether you're answering an RFP, courting investors, or applying for funding, the right words decide who wins. Our writers blend sharp strategy with clean, persuasive prose that tells your audience exactly why you're the obvious choice.";

const stats = [
  { value: "Built to Persuade", label: "Every Page Makes Your Case", Icon: TrendingUp },
  { value: "Tailored, Never Templated", label: "Written for Each Opportunity", Icon: PenLine },
  { value: "Polished Design", label: "Easy to Read, Hard to Ignore", Icon: Layout },
  { value: "NDA First", label: "Your Strategy Stays Confidential", Icon: Shield },
];

const subServices = [
  { tag: "CLIENT PROPOSALS", title: "RFP & Client Proposals", desc: "Structured, persuasive responses to Requests for Proposal that clearly present your approach, value, timeline, and pricing — all mapped to what the buyer is actually scoring." },
  { tag: "BUSINESS PLANS", title: "Business Plans", desc: "Our business plan writing services build investor-ready plans with a clear market story, a credible strategy, and financials that make sense, whether you're raising capital or securing a loan." },
  { tag: "GRANTS", title: "Grant Proposals", desc: "Our grant proposal writing services craft compelling applications for arts, cultural, community, and business funding, written to align precisely with each funder's priorities." },
  { tag: "AUTHORITY", title: "White Papers & Book Proposals", desc: "Research-backed white papers that position you as a thought leader, plus polished book proposals with synopses, market analysis, and author bios that publishers take seriously." },
];

const steps = [
  { num: "01", title: "Brief & Research", desc: "Tell us about your offer, your audience, and the opportunity. You sign our NDA, and we research the client, the market, and the decision criteria so your proposal is grounded in specifics." },
  { num: "02", title: "Strategy & Structure", desc: "We map the proposal to what your reader cares about most, anticipate their objections, and shape a value narrative that leads naturally to \"yes.\"" },
  { num: "03", title: "Writing & Design", desc: "Your professional proposal writer drafts every section with clarity and persuasion, then our designers give it a polished, professional layout that's easy to navigate." },
  { num: "04", title: "Review & Delivery", desc: "You review the draft and share feedback. We refine, proofread, and deliver your final proposal in PDF and editable formats, ready to send." },
];

const included = [
  "Client and opportunity research",
  "Proposal structure and strategy",
  "Executive summary writing",
  "Full proposal writing",
  "Value proposition development",
  "Pricing section guidance",
  "Case study integration",
  "Professional layout and design",
  "Proofreading and editing",
  "PDF and editable formats",
  "Revision rounds included",
  "Rush delivery on request",
];

const testimonials = [
  { quote: "We had a strong service offering, but our proposal did not clearly explain the value to the client. The final document was structured, persuasive, and easy to follow. It gave us the confidence to submit our bid knowing we had presented our business professionally.", name: "Aisha Rahman", title: "Founder, BrightPath Consulting", result: "Proposal Won" },
  { quote: "The writer took our notes, research, and financial details and turned them into a proposal that made sense from the first page to the last. The language was professional without being confusing, and the strategy helped us communicate exactly why our solution was the right fit.", name: "Daniel Foster", title: "Director, Northbridge Solutions", result: "Business Growth" },
  { quote: "I needed a polished proposal for an important funding opportunity, but I was struggling to organize the market research and financial projections. The finished proposal was clear, credible, and compelling. It helped us move from an idea on paper to serious conversations with potential partners.", name: "Meera Shah", title: "Co-Founder, GreenWave Ventures", result: "Funding Conversations" },
];

const faqs = [
  { q: "How long does a proposal take?", a: "It depends on the length, complexity, and research involved. Once we understand your opportunity and deadline, we'll give you a clear delivery timeline." },
  { q: "Do you write business plans?", a: "Yes. Our business plan writing services cover startup plans, growth plans, and investor- or lender-ready documents, built around your goals and your numbers." },
  { q: "Can you help with grant applications?", a: "Absolutely. Our grant proposal writing services support arts, cultural, community, and business grants, with every application tailored to the funder's guidelines and priorities." },
  { q: "Do you write book proposals for publishers?", a: "Yes. We prepare query letters and full book proposals, including synopses, sample chapter guidance, market analysis, and author bios." },
  { q: "What information do you need from me?", a: "Details about your offer, your audience, any RFP or funding guidelines, past results, and pricing. Your writer will guide you through the rest." },
  { q: "Do you offer proposal templates?", a: "Every proposal we write is custom, because templates rarely win competitive bids. If you need a reusable framework for future proposals, our business proposal writing services can build one for your team." },
];

export default function BusinessProposalPage() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: `linear-gradient(145deg, ${COLOR}22 0%, #ffffff 50%, ${COLOR}12 100%)` }}>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideLeft>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5 text-white" style={{ background: COLOR }}>{badge}</div>
                <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.25rem] font-black leading-[1.1] mb-4"><span className="text-black">Business Proposal Writing</span><br /><span className="text-primary">That Wins Contracts.</span></h1>
                <p className="text-lg font-semibold mb-4" style={{ color: COLOR }}>{subline}</p>
                <p className="text-brand-body leading-relaxed mb-8">{desc}</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:opacity-90" style={{ background: COLOR }}>Get My Proposal Written <ArrowRight size={16} /></Link>
                  <Link href="#process" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-800 text-slate-800 font-bold px-7 py-4 rounded-full transition-all">See How It Works</Link>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Every Pitch, Plan, and </span><span style={{ color: COLOR }}>Proposal, Covered</span></h2>
              <p className="text-brand-muted mt-3 max-w-xl mx-auto text-sm">Whether you&apos;re answering an RFP, courting investors, or applying for funding, the right words decide who wins.</p>
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
      <section id="process" className="py-20" style={{ background: LIGHT_BG }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>How It Works</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">How We Build </span><span style={{ color: COLOR }}>Your Proposal</span></h2>
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
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">Everything Your<br />Proposal Needs</h2>
                <p className="text-[#CFFAFE] leading-relaxed mb-8">Every element below comes in your quoted price. We&apos;ll go over the cost with you before starting — no hidden fees, no surprise invoices.</p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-white/20"><Briefcase size={22} className="text-white" /></div>
                  <div>
                    <div className="text-white font-semibold text-sm">Free Consultation Included</div>
                    <div className="text-[#CFFAFE] text-xs">Talk to a publishing specialist before you commit — no obligation.</div>
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
              <span className="text-xs font-bold uppercase tracking-[0.18em] mb-3 block" style={{ color: COLOR }}>Client Results</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Real Clients. </span><span style={{ color: COLOR }}>Real Contracts.</span></h2>
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
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black"><span className="text-black">Questions Before </span><span style={{ color: COLOR }}>You Pitch</span></h2>
            </div>
          </FadeUp>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScaleIn>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" style={{ background: COLOR }}><Briefcase size={28} className="text-white" /></div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black mb-4"><span className="text-white">Your Next Big Yes Starts Here.</span></h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Book a free consultation and let a professional proposal writer help you craft the proposal that closes.</p>
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
