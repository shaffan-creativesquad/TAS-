import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight, CheckCircle, Clock, ArrowLeft, BookOpen,
  Crown, Rocket, Lightbulb, TrendingUp, FileText, BarChart2, Target, Users,
  type LucideIcon,
} from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "@/components/ui/Animate";

const formatIcons: Record<string, LucideIcon> = {
  "authority-book":    Crown,
  "founder-story":     Rocket,
  "thought-leadership": Lightbulb,
  "business-book":     TrendingUp,
  "professional-guide": FileText,
  "research-report":   BarChart2,
  "lead-gen-ebook":    Target,
  "case-study-book":   Users,
};

const formatData: Record<string, {
  title: string; tagline: string; color: string; badge?: string;
  hero: string; heroSub: string;
  forWho: string[];
  chapters: { title: string; desc: string }[];
  deliverables: string[];
  timeline: { phase: string; weeks: string; desc: string }[];
  faq: { q: string; a: string }[];
}> = {
  "authority-book": {
    title: "Authority Books",
    tagline: "The definitive book for your niche",
    color: "#0891b2",
    badge: "Most Popular",
    hero: "The Book That Makes You the Obvious Expert.",
    heroSub: "A full-length authority book that positions you as the leading voice in your industry — generating inbound leads, speaking invitations and media coverage for years.",
    forWho: ["Consultants & advisors with a proven methodology", "Founders building category authority", "Professionals who want to be the obvious choice in their niche"],
    chapters: [
      { title: "The Problem",        desc: "Define the core challenge your reader faces — and why existing solutions fail." },
      { title: "Your Framework",     desc: "Introduce your proprietary method or model. Name it, own it." },
      { title: "Pillar One",         desc: "The first principle of your framework, explained with examples and case studies." },
      { title: "Pillar Two",         desc: "The second principle — deeper, more specific, more actionable." },
      { title: "Pillar Three",       desc: "The third principle — often the hardest one, and the most valuable." },
      { title: "Implementation",     desc: "How to apply the full framework in 30, 60 or 90 days." },
      { title: "Common Mistakes",    desc: "The five mistakes that prevent most people from getting results." },
      { title: "Advanced Strategies",desc: "For readers already implementing — what separates good from great." },
      { title: "Case Studies",       desc: "Two or three full client transformation stories." },
      { title: "The Path Forward",   desc: "Next steps, resources and how to work with you." },
    ],
    deliverables: [
      "Professionally ghostwritten 40,000–60,000-word manuscript",
      "Custom cover design (3 concepts, unlimited revisions)",
      "Professional interior formatting — print + eBook",
      "Amazon KDP & IngramSpark publishing",
      "ISBN, ASIN, BISAC categorisation",
      "Launch PR kit (press release + media list)",
      "12 LinkedIn posts extracted from the book",
      "Author bio + speaker one-sheet",
    ],
    timeline: [
      { phase: "Strategy",       weeks: "Wk 1",      desc: "Positioning, audience, chapter outline. 2-hr session." },
      { phase: "Interviews",     weeks: "Wk 2–4",    desc: "8–10 recorded sessions. We extract everything." },
      { phase: "Writing",        weeks: "Wk 5–11",   desc: "Chapter-by-chapter drafts. You review each one." },
      { phase: "Editing",        weeks: "Wk 12–13",  desc: "Developmental + copy edit passes." },
      { phase: "Design & Proof", weeks: "Wk 14",     desc: "Cover + interior. Final proofread." },
      { phase: "Publishing",     weeks: "Wk 15–18",  desc: "Live on Amazon and 40+ platforms." },
    ],
    faq: [
      { q: "How much of my time does this take?",   a: "About 12 hours — 2 for strategy, 8–10 for interviews. Everything else is ours to handle." },
      { q: "Will it sound like me?",                a: "Yes. We start by capturing your voice through recorded interviews. You review every chapter before we move forward." },
      { q: "Do I own the copyright?",               a: "100%. We sign a full NDA before we start. Your name, your rights, your royalties — forever." },
    ],
  },

  "founder-story": {
    title: "Founder Story Books",
    tagline: "Your journey as your strongest asset",
    color: "#0891b2",
    hero: "Not a Corporate Brochure. A Founder Narrative Your Industry Remembers.",
    heroSub: "Turn your founding story into the thought-leadership platform that investors read before meetings, clients read before engagements, and journalists quote.",
    forWho: ["Founders who have built something worth writing about", "CEOs entering a new phase — fundraise, acquisition, scale", "Entrepreneurs who want a legacy asset and a business development tool"],
    chapters: [
      { title: "The Beginning",    desc: "Where you started, what you saw and why you couldn't ignore it." },
      { title: "The Problem",      desc: "The market failure or gap that made the company necessary." },
      { title: "The Struggle",     desc: "The honest account of what nearly ended it — and what kept you going." },
      { title: "The Breakthrough", desc: "The moment everything changed. The insight, the deal, the hire." },
      { title: "The Framework",    desc: "The operating principles you derived from the journey." },
      { title: "The Business",     desc: "How the company works today — the model, the team, the mission." },
      { title: "The Philosophy",   desc: "What you believe about your industry that most people get wrong." },
      { title: "The Future",       desc: "Where you are taking this — and the invitation to join you." },
    ],
    deliverables: [
      "Ghostwritten narrative manuscript (35,000–55,000 words)",
      "Custom cover design with founder portrait integration",
      "Hardcover + eBook + audiobook preparation",
      "Amazon publishing + IngramSpark distribution",
      "Launch PR kit and media talking points",
      "LinkedIn content series (12 posts)",
      "Speaker bio and one-sheet",
    ],
    timeline: [
      { phase: "Strategy",       weeks: "Wk 1",     desc: "Story arc, audience, positioning. 2-hr session." },
      { phase: "Interviews",     weeks: "Wk 2–4",   desc: "8 recorded sessions. Chronological, thematic, philosophical." },
      { phase: "Writing",        weeks: "Wk 5–11",  desc: "Narrative draft. Chapter reviews throughout." },
      { phase: "Editing",        weeks: "Wk 12–13", desc: "Story structure + line editing passes." },
      { phase: "Design",         weeks: "Wk 14",    desc: "Cover + interior. Your portrait, your brand." },
      { phase: "Publishing",     weeks: "Wk 15–16", desc: "Live on Amazon and IngramSpark." },
    ],
    faq: [
      { q: "What if my story isn't that dramatic?", a: "Every founder journey has the elements readers want — they're rarely obvious from the inside. Our interviews surface them." },
      { q: "Can I use a pen name or publish anonymously?", a: "Yes, though most founder books work best under your real name. We discuss positioning in the strategy session." },
      { q: "What's the difference between this and a memoir?", a: "A founder story is business-focused: your journey is the vehicle, but the destination is your philosophy and your offer." },
    ],
  },

  "thought-leadership": {
    title: "Thought-Leadership Books",
    tagline: "The book that earns you the stage",
    color: "#0891b2",
    hero: "Challenge the Consensus. Own the Category.",
    heroSub: "Opinionated, sharply argued books that challenge conventional wisdom — and make the media, conference organisers and podcast hosts come to you.",
    forWho: ["Industry experts with a genuinely different point of view", "Consultants or speakers who want keynote bookings", "Founders who want to define or redefine their category"],
    chapters: [
      { title: "The Provocation",    desc: "The bold claim that challenges the conventional wisdom. The reason to read on." },
      { title: "The Evidence",       desc: "Data, research and examples that validate the challenge." },
      { title: "Why Everyone Gets It Wrong", desc: "The systemic reason the industry keeps making this mistake." },
      { title: "The New Lens",       desc: "Your framework or model for seeing the problem differently." },
      { title: "Case: It Worked",    desc: "A full case study of your framework in action." },
      { title: "Case: How to Apply It", desc: "A second case — different context, same result." },
      { title: "The Objections",     desc: "Steel-man the strongest counter-arguments. Defeat them." },
      { title: "The Implications",   desc: "If this is true, what must change? For the industry, for the reader." },
      { title: "The Call to Action", desc: "What you want the reader to do next — and why now." },
    ],
    deliverables: [
      "Ghostwritten manuscript (40,000–55,000 words)",
      "Academic or business-style citations and references",
      "Cover design — bold, opinionated visual language",
      "Amazon + IngramSpark publishing",
      "Media pitch kit (press release, byline pitches)",
      "Conference speaker abstract",
      "LinkedIn thought-leadership series",
    ],
    timeline: [
      { phase: "Strategy",    weeks: "Wk 1",     desc: "Argument architecture, audience, target media." },
      { phase: "Research",    weeks: "Wk 2–3",   desc: "Data gathering, competitor argument analysis." },
      { phase: "Interviews",  weeks: "Wk 3–5",   desc: "6–8 sessions to extract your evidence and framework." },
      { phase: "Writing",     weeks: "Wk 6–12",  desc: "Argument-first structure. Chapter reviews throughout." },
      { phase: "Editing",     weeks: "Wk 13–14", desc: "Argument tightening + line edit." },
      { phase: "Design",      weeks: "Wk 15",    desc: "Cover + interior formatting." },
      { phase: "Publishing",  weeks: "Wk 16–18", desc: "Launch with PR distribution." },
    ],
    faq: [
      { q: "What if my view is controversial?", a: "Good. The books that get media coverage are the ones that make people uncomfortable. We help you argue it rigorously, not recklessly." },
      { q: "Will it get me speaking gigs?",     a: "It creates the conditions for them. A well-positioned thought-leadership book gives conference organisers a reason to reach out and a credibility signal to show their audience." },
      { q: "Do you help with academic citations?", a: "Yes. Our research team handles data sourcing, footnoting and bibliography formatting to whatever standard you need." },
    ],
  },

  "business-book": {
    title: "Business Books",
    tagline: "Your methodology, made sellable",
    color: "#0891b2",
    hero: "Codify Your Method. Sell It at Scale.",
    heroSub: "The book built around your proprietary framework — the asset that sells your consulting, coaching or program while you sleep.",
    forWho: ["Consultants with a repeatable methodology", "Coaches with a signature program", "Business owners who want to productise their expertise"],
    chapters: [
      { title: "The Problem",           desc: "The costly, frustrating problem your methodology solves." },
      { title: "Why the Old Ways Fail",  desc: "The four approaches everyone tries that don't work." },
      { title: "Introducing the Method",desc: "Name your framework. Show the overview. Build the tension." },
      { title: "Phase One",             desc: "First stage of the methodology, step by step." },
      { title: "Phase Two",             desc: "Second stage. Deeper, more nuanced, more transformative." },
      { title: "Phase Three",           desc: "Third stage — the hardest and most valuable." },
      { title: "Common Failure Points", desc: "Where most people get stuck and how to get unstuck." },
      { title: "Client Stories",        desc: "Three transformation case studies using your method." },
      { title: "Scaling the Method",    desc: "How to apply it faster, further, at higher levels." },
      { title: "Working With You",      desc: "Natural transition from reader to client." },
    ],
    deliverables: [
      "Ghostwritten manuscript (40,000–55,000 words)",
      "Framework diagram design (included)",
      "Cover + interior formatting",
      "Amazon KDP + IngramSpark",
      "Lead-gen landing page copy (1 page)",
      "12 LinkedIn posts from the book",
    ],
    timeline: [
      { phase: "Framework Design", weeks: "Wk 1",     desc: "Naming, structuring and positioning your methodology." },
      { phase: "Interviews",       weeks: "Wk 2–4",   desc: "8 sessions to extract evidence, stories and nuance." },
      { phase: "Writing",          weeks: "Wk 5–11",  desc: "Chapter drafts — you review at each milestone." },
      { phase: "Editing",          weeks: "Wk 12–13", desc: "Structural + line editing." },
      { phase: "Design",           weeks: "Wk 14",    desc: "Cover, interior, framework diagrams." },
      { phase: "Publishing",       weeks: "Wk 15–18", desc: "Live on Amazon and 40+ platforms." },
    ],
    faq: [
      { q: "What if my methodology isn't fully formed yet?", a: "That's what the strategy session is for. Most methodologies crystallise in the process of writing the book." },
      { q: "Can the book include a companion worksheet or workbook?", a: "Yes. We can produce a companion PDF or workbook alongside the main manuscript." },
      { q: "How does this generate leads?", a: "The book ends with a natural call to your consultation, program or offer. Readers who finish it are pre-sold." },
    ],
  },

  "professional-guide": {
    title: "Professional Guides",
    tagline: "The trusted reference in your field",
    color: "#0891b2",
    hero: "The Reference Book Your Clients Keep and Your Peers Quote.",
    heroSub: "Practical, authoritative guides for professionals in regulated industries — law, medicine, finance, accounting. Compliance-reviewed, credibility-certified.",
    forWho: ["Lawyers, accountants, financial advisors", "Clinicians building a patient-facing practice", "Regulated professionals who want to educate and build trust"],
    chapters: [
      { title: "Why This Guide Exists", desc: "The costly misunderstanding this guide solves." },
      { title: "The Fundamentals",      desc: "What every client or patient must know before anything else." },
      { title: "The Framework",         desc: "Your structured approach to this area of practice." },
      { title: "Common Mistakes",       desc: "The errors that cost clients money, time or health." },
      { title: "Working the System",    desc: "How to navigate the professional or regulatory landscape." },
      { title: "Case Studies",          desc: "Real (anonymised) scenarios with outcomes and lessons." },
      { title: "Choosing a Professional",desc: "How to find, evaluate and work with an expert like you." },
      { title: "Resources & Next Steps",desc: "Checklists, glossary and how to engage your practice." },
    ],
    deliverables: [
      "Ghostwritten manuscript (30,000–45,000 words)",
      "Compliance review by industry specialist",
      "Professional interior design with callout boxes and checklists",
      "Cover design",
      "Amazon + IngramSpark publishing",
      "Patient/client-facing summary PDF",
    ],
    timeline: [
      { phase: "Strategy + Compliance Scoping", weeks: "Wk 1",     desc: "Scope, disclaimers, target audience." },
      { phase: "Interviews",                    weeks: "Wk 2–3",   desc: "6–8 sessions." },
      { phase: "Writing",                       weeks: "Wk 4–9",   desc: "Chapter drafts with built-in compliance flags." },
      { phase: "Compliance Review",             weeks: "Wk 10–11", desc: "Legal / medical / financial review pass." },
      { phase: "Editing + Design",              weeks: "Wk 12–14", desc: "Final edit, interior, cover." },
      { phase: "Publishing",                    weeks: "Wk 15–16", desc: "Live on Amazon and direct-purchase." },
    ],
    faq: [
      { q: "How do you handle compliance in regulated industries?", a: "We include a specialist compliance review pass by a qualified reviewer in your industry. Disclaimers and disclosures are built in from the start." },
      { q: "Can this be used as a client welcome guide?", a: "Yes. Many professional guide clients use it as a onboarding resource — printed copies for new clients alongside the public Amazon listing." },
      { q: "Do I need a legal entity to publish?", a: "No. You can publish as an individual author. We handle the ISBN, ASIN and all registration details." },
    ],
  },

  "research-report": {
    title: "Research Reports",
    tagline: "Original data that earns press",
    color: "#0891b2",
    badge: "High PR Value",
    hero: "Original Research. Permanent Authority.",
    heroSub: "Survey-based or proprietary research turned into a publishable report with PR distribution — the content format that earns backlinks, media mentions and conference invitations.",
    forWho: ["B2B companies and SaaS businesses", "Consultancies that need a thought-leadership anchor", "Industry bodies and professional associations"],
    chapters: [
      { title: "Executive Summary",    desc: "The five most newsworthy findings — written for press pickup." },
      { title: "Methodology",          desc: "Sample size, data sources, research design. Rigour builds credibility." },
      { title: "Key Finding One",      desc: "The headline stat — with full chart, context and implication." },
      { title: "Key Finding Two",      desc: "A supporting finding that deepens the story." },
      { title: "Key Finding Three",    desc: "A surprising or counter-intuitive finding." },
      { title: "Industry Implications",desc: "What these findings mean for your reader's business." },
    ],
    deliverables: [
      "Survey design and field management (up to 500 respondents)",
      "Ghostwritten report (15,000–25,000 words)",
      "Data visualisation — charts and infographics",
      "PDF report (designed for download)",
      "Press release + journalist media list",
      "40+ media distribution (UK/US/Canada)",
      "eBook version on Amazon",
      "LinkedIn data post series",
    ],
    timeline: [
      { phase: "Research Design",  weeks: "Wk 1–2",   desc: "Survey design, sample definition, field launch." },
      { phase: "Data Collection",  weeks: "Wk 3–5",   desc: "Fieldwork and data cleaning." },
      { phase: "Analysis",         weeks: "Wk 6–7",   desc: "Statistical analysis and narrative development." },
      { phase: "Writing",          weeks: "Wk 8–11",  desc: "Report writing with your review." },
      { phase: "Design",           weeks: "Wk 12–13", desc: "Report design + infographics." },
      { phase: "PR Distribution",  weeks: "Wk 14+",   desc: "Media distribution + LinkedIn amplification." },
    ],
    faq: [
      { q: "Do you run the research survey?", a: "Yes. We design the questionnaire, manage the field through a panel provider, clean the data and handle all statistical analysis." },
      { q: "How many press mentions can we expect?", a: "It depends on the sector and findings, but clients with genuinely interesting data typically land 5–20 coverage pieces in the first 30 days of distribution." },
      { q: "Can we gatethe report for lead generation?", a: "Yes. We can design both a gated download version and a public Amazon eBook — capturing leads while building credibility at the same time." },
    ],
  },

  "lead-gen-ebook": {
    title: "Lead-Gen eBooks",
    tagline: "A guide that books consultations",
    color: "#0891b2",
    badge: "Fastest Delivery",
    hero: "A Guide That Does Your Sales Calls for You.",
    heroSub: "A tightly focused eBook that solves one high-stakes problem for your ideal client — and ends with a natural invitation to work with you.",
    forWho: ["Consultants running paid traffic or LinkedIn outreach", "Service businesses that want a top-of-funnel lead magnet", "Anyone who needs a proof-of-expertise asset in 6–8 weeks"],
    chapters: [
      { title: "The Problem You Solve",   desc: "Named clearly and felt viscerally by your ideal reader." },
      { title: "Why It Keeps Happening",  desc: "The root cause — usually systemic or behavioural." },
      { title: "The Framework",           desc: "Your 3–5 step approach. Named. Diagrammed. Memorable." },
      { title: "Step-by-Step Guidance",   desc: "Enough detail to demonstrate expertise without giving everything away." },
      { title: "What to Do Next",         desc: "Your CTA — consultation booking, discovery call, lead capture." },
    ],
    deliverables: [
      "Ghostwritten eBook (8,000–15,000 words)",
      "Professional PDF design (lead magnet format)",
      "Amazon Kindle + landing-page PDF versions",
      "Lead-capture landing page copy",
      "3 LinkedIn posts to promote the eBook",
    ],
    timeline: [
      { phase: "Strategy",  weeks: "Wk 1",   desc: "Topic, framework, CTA. 90-min session." },
      { phase: "Interviews", weeks: "Wk 1–2", desc: "2–3 sessions to extract content." },
      { phase: "Writing",    weeks: "Wk 2–5", desc: "Draft + one revision round." },
      { phase: "Design",     weeks: "Wk 6",   desc: "PDF design + landing page copy." },
      { phase: "Launch",     weeks: "Wk 7–8", desc: "Amazon + your own lead funnel." },
    ],
    faq: [
      { q: "How is this different from a whitepaper?", a: "A lead-gen eBook is longer, more practical and designed to be read cover to cover — not skimmed. It builds more trust because it demands more of the reader." },
      { q: "Can I use it as a free download on my website?", a: "Yes. Most clients use it as a gated lead magnet on their website or in paid campaigns, alongside the public Amazon listing." },
      { q: "What conversion rate can I expect?", a: "That depends on your traffic and offer, but an eBook that genuinely solves a real problem typically converts at 2–5× the rate of a standard consultation offer." },
    ],
  },

  "case-study-book": {
    title: "Case-Study Books",
    tagline: "Social proof your sales team uses",
    color: "#0891b2",
    hero: "The Proof Portfolio That Closes Deals.",
    heroSub: "A curated collection of client transformation stories — the book your sales team sends before proposals, your speakers use at stage, and your prospects read before signing.",
    forWho: ["B2B companies with strong client outcomes", "Consultancies preparing enterprise proposals", "Coaches or practitioners with dramatic client transformations"],
    chapters: [
      { title: "Why Results Speak Louder",  desc: "A short positioning chapter on why you let your clients tell the story." },
      { title: "Case Study 1",              desc: "Problem → Challenge → Solution → Results → Lessons." },
      { title: "Case Study 2",              desc: "Same structure, different sector or use case." },
      { title: "Case Study 3",              desc: "A third transformation — ideally a different buyer persona." },
      { title: "Case Study 4",              desc: "Optional fourth case — adds credibility and coverage." },
      { title: "Common Threads",            desc: "The patterns across all cases — your methodology revealed." },
    ],
    deliverables: [
      "Ghostwritten case-study manuscript (20,000–35,000 words)",
      "Client interview transcription and editing (up to 6 clients)",
      "Case-study structure design with pull quotes",
      "Professional interior formatting",
      "Cover design",
      "Amazon + IngramSpark publishing",
      "Sales one-pager summary PDF",
    ],
    timeline: [
      { phase: "Client Selection + Briefs", weeks: "Wk 1–2",   desc: "Identify clients, send interview briefs." },
      { phase: "Client Interviews",         weeks: "Wk 2–5",   desc: "60-min recorded interviews per client." },
      { phase: "Writing",                   weeks: "Wk 5–9",   desc: "Case study drafts + your review." },
      { phase: "Editing + Design",          weeks: "Wk 10–12", desc: "Final edit + interior + cover." },
      { phase: "Publishing",                weeks: "Wk 13",    desc: "Amazon + print copies for sales team." },
    ],
    faq: [
      { q: "Do my clients need to be involved?", a: "Yes, but lightly. We conduct 60-minute recorded interviews with each client — they don't write anything. We do the rest and send each client the draft for approval before the book goes to print." },
      { q: "Can I use real names and company names?", a: "With the client's permission, yes — and named case studies are dramatically more compelling than anonymised ones. We help you get that sign-off." },
      { q: "How do sales teams use this?", a: "As a leave-behind after pitch meetings, a pre-read before proposal stages, or a gift at conference booths. A physical book creates a very different impression than a PDF." },
    ],
  },
};

type Props = { params: Promise<{ format: string }> };

export async function generateStaticParams() {
  return Object.keys(formatData).map(format => ({ format }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { format } = await params;
  const data = formatData[format];
  if (!data) return {};
  return {
    title: `${data.title} | The Author Success`,
    description: data.heroSub,
  };
}

export default async function FormatPage({ params }: Props) {
  const { format } = await params;
  const data = formatData[format];
  if (!data) notFound();
  const FormatIcon = formatIcons[format] ?? BookOpen;

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white to-slate-50/30 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <Link
              href="/our-books"
              className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={15} /> All Book Formats
            </Link>

            <div
              className="inline-flex items-center gap-2 text-white rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6"
              style={{ background: data.color }}
            >
              <FormatIcon size={13} />
              {data.title}
              {data.badge && <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px]">{data.badge}</span>}
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.2rem] font-black leading-[1.08] text-slate-900 mb-6">
              {data.hero}
            </h1>
            <p className="text-brand-body text-lg leading-relaxed max-w-2xl mb-10">
              {data.heroSub}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/book-a-call"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-cyan-200 transition-all"
              >
                Start This Book <ArrowRight size={17} />
              </Link>
              <Link
                href="/our-books"
                className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-900 text-slate-800 font-bold px-7 py-4 rounded-full transition-all"
              >
                All Formats
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FOR WHO ── */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="shrink-0">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">This book is for</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {data.forWho.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white border border-slate-100 rounded-xl px-4 py-2.5 shadow-sm text-sm font-semibold text-slate-800">
                    <CheckCircle size={15} className="text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CHAPTER MAP ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <SlideLeft>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary block mb-3">Chapter Map</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-slate-900 mb-4">
                The Structure We Build Together
              </h2>
              <p className="text-brand-body mb-8 text-sm leading-relaxed">
                Every chapter has a job to do. This is the proven structure — we adapt it to your story, your framework and your audience in the strategy session.
              </p>

              <div className="space-y-3">
                {data.chapters.map((ch, i) => (
                  <div key={i} className="flex items-start gap-4 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3.5 hover:border-primary/20 hover:bg-white transition-all">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black shrink-0"
                      style={{ background: data.color }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{ch.title}</div>
                      <div className="text-brand-muted text-xs mt-0.5 leading-relaxed">{ch.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </SlideLeft>

            {/* Deliverables + Timeline */}
            <SlideRight>
              <div className="sticky top-28 space-y-8">
                {/* Deliverables */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary block mb-4">What You Get</span>
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-3">
                    {data.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-800">
                        <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary block mb-4">
                    <Clock size={12} className="inline mr-1" />
                    Timeline
                  </span>
                  <div className="space-y-2">
                    {data.timeline.map((phase, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white border border-slate-100 rounded-xl px-4 py-3 shadow-sm">
                        <div className="text-xs font-bold text-primary bg-cyan-50 px-2 py-1 rounded-lg whitespace-nowrap shrink-0">{phase.weeks}</div>
                        <div>
                          <div className="font-semibold text-slate-900 text-sm">{phase.phase}</div>
                          <div className="text-brand-muted text-xs mt-0.5">{phase.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-slate-900">Questions About This Format</h2>
          </FadeUp>
          <div className="space-y-4">
            {data.faq.map((item, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                  <h3 className="font-semibold text-slate-900 mb-2 flex items-start gap-3">
                    <CheckCircle size={17} className="text-primary shrink-0 mt-0.5" />
                    {item.q}
                  </h3>
                  <p className="text-brand-body text-sm leading-relaxed pl-7">{item.a}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <FormatIcon size={28} className="text-white" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">
              Ready to Write Your {data.title}?
            </h2>
            <p className="text-white/70 mb-8">Book a 30-minute strategy call. We&apos;ll map your book concept in the first 10 minutes.</p>
            <Link
              href="/book-a-call"
              className="inline-flex items-center gap-2 bg-white hover:bg-white/90 font-bold px-10 py-4 rounded-full shadow-lg transition-all text-lg"
              style={{ color: "#0891b2" }}
            >
              Start This Book <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
