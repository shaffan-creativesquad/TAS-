import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award, Globe, Target, Heart, Zap, CheckCircle } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "@/components/ui/Animate";
import BookCoversStrip from "@/components/ui/BookCoversStrip";

export const metadata: Metadata = {
  title: "About Us | The Author Success",
  description: "Learn how we've helped 1,800+ authors publish their books worldwide since 2015.",
};


const values = [
  { icon: Target, title: "Authors Come First", desc: "We listen to what you want, understand your goals, and make decisions with your book in mind." },
  { icon: Heart, title: "We Care About Good Books", desc: "Every book has something worth saying. We take the time to understand each story and help bring it together in the best possible way." },
  { icon: Globe, title: "Books Without Borders", desc: "Our authors come from different places and write for different audiences. We help make their books available to readers around the world." },
  { icon: Zap, title: "We Take the Work Seriously", desc: "From editing and design to publishing and promotion, we pay attention to the details because your name is on the book." },
];

const milestones = [
  { year: "01", event: "Where We Started", detail: "We started with a simple goal: help authors turn their ideas into books. A small team of writers and publishing professionals came together to give authors the support they needed." },
  { year: "02", event: "More Than Writing", detail: "As we worked with more authors, we saw that writing was only one part of the process. We added editing, cover design, and formatting so authors could get more of what they needed in one place." },
  { year: "03", event: "Adding Audiobooks", detail: "Books aren't only read anymore. We added audiobook production to help authors share their work with people who prefer to listen." },
  { year: "04", event: "Helping Books Get Noticed", detail: "Getting a book published is a big step, but it's not the end. We added marketing and promotion services to help authors reach more readers and build awareness around their books." },
  { year: "05", event: "Supporting Authors Beyond the Book", detail: "Over time, our work expanded beyond publishing. We now help authors with websites, content, and ongoing campaigns that support their work long after a book is released." },
  { year: "06", event: "Still Growing", detail: "We're still growing, and so is the work we do. Every author we work with brings something different to the table, and their feedback continues to shape where The Author Success goes next." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white to-slate-50/30 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp delay={0}><span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 block">Our Story</span></FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl font-black text-brand-dark leading-[1.1] mb-6">
              <span className="text-black">We Exist So</span><br />
              <span className="text-gradient">Authors Succeed</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="text-brand-body text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              At The Author Success, we believe good books start with good stories—and behind every story is an author who deserves to be heard. We work closely with authors to turn their ideas, experiences, and expertise into books they can be proud to share.
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-cyan-200 transition-all">
                Work With Us <ArrowRight size={17} />
              </Link>
              <Link href="/testimonials" className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-slate-900 text-brand-dark-2 font-bold px-8 py-4 rounded-full transition-all">
                Read TAS Reviews 

              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.36}>
            <div className="mt-12">
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted mb-5">From Our Published Collection</p>
              <BookCoversStrip count={7} width={68} />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">How We Work</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark">
                <span className="text-black">From Your Idea to a</span><br /><span className="text-primary">Published Book</span>
              </h2>
              <p className="text-brand-body text-sm leading-relaxed max-w-xl mx-auto mt-3">
                Every author comes to us with a different story, goal, and vision. Our process is built around understanding yours first, then bringing the right people and expertise together to take your book from idea to publication.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                phase: "Phase 1",
                title: "Extract",
                color: "#0891B2",
                bg: "bg-cyan-50",
                border: "border-cyan-200",
                steps: ["Strategy Sessions", "Author Interviews", "Market Research"],
                bold: "We start with your story.",
                desc: "Before the writing begins, we take the time to understand what you want to say, who you want to reach, and what you want your book to achieve.",
              },
              {
                phase: "Phase 2",
                title: "Craft",
                color: "#0891B2",
                bg: "bg-cyan-50",
                border: "border-cyan-200",
                steps: ["Ghostwriting & Writing", "Editing & Proofreading", "Cover & Interior Design"],
                bold: "Then, we bring it to life.",
                desc: "Our writers, editors, and designers work with your ideas to create a book that feels authentic to your voice and is ready for the real world.",
              },
              {
                phase: "Phase 3",
                title: "Amplify",
                color: "#0891B2",
                bg: "bg-cyan-50",
                border: "border-cyan-200",
                steps: ["Global Publishing", "Book Launch Marketing", "PR & Media Outreach"],
                bold: "Finally, we help your book get noticed.",
                desc: "Once your book is ready, we handle the publishing side and help put it in front of the readers, media, and audiences that matter to you.",
              },
            ].map((p, i) => (
              <FadeUp key={p.phase} delay={i * 0.1}>
                <div className={`relative bg-white border ${p.border} rounded-3xl p-7 hover:shadow-xl transition-all duration-300 h-full`}>
                  {/* Phase number */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 ${p.bg} rounded-xl flex items-center justify-center`}>
                      <span className="font-[family-name:var(--font-playfair)] font-black text-sm" style={{ color: p.color }}>{i + 1}</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: p.color }}>{p.phase}</div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-black text-brand-dark">{p.title}</h3>
                    </div>
                  </div>

                  <p className="text-brand-body text-sm leading-relaxed mb-5">
                    <span className="font-bold text-brand-dark">{p.bold}</span><br />
                    {p.desc}
                  </p>

                  <div className="flex flex-col gap-2">
                    {p.steps.map(s => (
                      <div key={s} className="flex items-center gap-2.5">
                        <CheckCircle size={14} style={{ color: p.color }} className="shrink-0" />
                        <span className="text-sm text-brand-dark-2 font-medium">{s}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-6 h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${p.color}60, ${p.color}10)` }} />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "#0891b2" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              { icon: BookOpen, value: "2,500+", label: "Books Published" },
              { icon: Users, value: "1,800+", label: "Authors Helped" },
              { icon: Globe, value: "40+", label: "Global Platforms" },
              { icon: Award, value: "98%", label: "Satisfaction Rate" },
            ].map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.1}>
                <div className="px-8 py-10 text-center" style={{ background: "#0891b2" }}>
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <s.icon size={18} className="text-white" />
                  </div>
                  <div className="font-[family-name:var(--font-playfair)] text-3xl font-black text-white mb-1">{s.value}</div>
                  <div className="text-xs text-[#CFFAFE] uppercase tracking-wider">{s.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideLeft>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Our Mission</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark mb-5 leading-tight">
                  <span className="text-black">Publishing Should Be</span><br /><span className="text-primary">Open to Every Author</span>
                </h2>
                <p className="text-brand-body leading-relaxed mb-5">
                  Getting a book published can feel harder than writing one. We believe authors shouldn&apos;t have to know the right people or fit into a certain mold to get their work out into the world. At The Author Success, we work with authors from different backgrounds, genres, and stages of their writing journey.
                </p>
                <p className="text-brand-body leading-relaxed mb-8">
                  We keep things straightforward. You should know what you&apos;re paying for, understand what&apos;s happening with your book, and remain in control of the work you&apos;ve created. Our job is to help you turn your manuscript into a finished book and get it where readers can find it.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    "Open to authors, genres, and stories of all kinds",
                    "Your book and intellectual property remain yours",
                    "Distribution through Amazon and other major platforms",
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-primary shrink-0" />
                      <span className="text-sm text-brand-dark-2 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SlideLeft>

            <SlideRight>
              <div className="grid grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <FadeUp key={v.title} delay={i * 0.08}>
                    <div className="bg-white border border-slate-100 rounded-2xl p-5 hover-lift">
                      <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center mb-3">
                        <v.icon size={18} className="text-primary" />
                      </div>
                      <h4 className="font-semibold text-brand-dark mb-1.5 text-sm">{v.title}</h4>
                      <p className="text-brand-muted text-xs leading-relaxed">{v.desc}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Our Growth</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark">
                <span className="text-black">Growing With</span><br /><span className="text-primary">Our Authors</span>
              </h2>
              <p className="text-brand-body text-sm leading-relaxed max-w-xl mx-auto mt-3">
                The Author Success has grown by listening to what authors actually need. What started with writing and publishing has grown into a wider range of services, allowing us to support authors through every stage of bringing a book to life.
              </p>
            </div>
          </FadeUp>

          <div className="relative">
            <div className="absolute left-[39px] sm:left-1/2 top-0 bottom-0 w-px bg-slate-200" />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <FadeUp key={m.year} delay={i * 0.07}>
                  <div className={`relative flex gap-6 items-start ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                    <div className="relative z-10 shrink-0">
                      <div className={`w-20 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg ${
                        i === milestones.length - 1 ? "bg-primary text-white shadow-cyan-200" : "bg-brand-dark text-white shadow-slate-200"
                      }`}>
                        {m.year}
                      </div>
                    </div>
                    <div className={`flex-1 bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-2 ${i % 2 === 0 ? "" : "sm:text-right"}`}>
                      <h4 className="font-semibold text-brand-dark text-sm mb-1">{m.event}</h4>
                      <p className="text-brand-muted text-xs leading-relaxed">{m.detail}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">
              Ready to Write Your<br />Success Story?
            </h2>
            <p className="text-white/70 mb-8 text-sm">
              Schedule a free consultation. Let&apos;s talk about your book and build your publishing roadmap.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-primary font-bold px-10 py-4 rounded-full shadow-xl transition-all">
              Get Free Consultation <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
