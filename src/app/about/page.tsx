import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award, Globe, Target, Heart, Zap, CheckCircle } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight, ScaleIn } from "@/components/ui/Animate";
import BookCoversStrip from "@/components/ui/BookCoversStrip";

export const metadata: Metadata = {
  title: "About Us | The Author Success",
  description: "Learn how we've helped 1,800+ authors publish their books worldwide since 2015.",
};

const team = [
  { name: "Jonathan Pierce", role: "Founder & CEO", initials: "JP", color: "#DC2626", bio: "20+ years in traditional publishing. Former senior editor at Penguin Random House. Now helps independent authors compete at the highest level." },
  { name: "Lisa Chen", role: "Head of Ghostwriting", initials: "LC", color: "#7C3AED", bio: "Award-winning author and ghostwriter. 300+ books to her name across fiction, memoir, and business. She disappears into every author's voice perfectly." },
  { name: "Marcus Williams", role: "Creative Director", initials: "MW", color: "#D97706", bio: "Former art director with 15 years designing book covers for top publishers. Every cover he creates is engineered to sell." },
  { name: "Sofia Ramirez", role: "Head of Marketing", initials: "SR", color: "#059669", bio: "Bestseller strategist behind 50+ Amazon #1 launches. She turns unknown authors into recognized names through smart, data-driven campaigns." },
  { name: "Daniel Park", role: "Publishing Director", initials: "DP", color: "#0891B2", bio: "Distribution expert who has placed books on 40+ platforms worldwide. He ensures every author reaches every possible reader." },
  { name: "Rachel Moore", role: "Head of Editing", initials: "RM", color: "#BE185D", bio: "PhD in English Literature. 12 years of editorial experience. She transforms rough manuscripts into publication-ready masterpieces." },
];

const values = [
  { icon: Target, title: "Author-First Philosophy", desc: "Every decision we make is filtered through one question: what's best for the author?" },
  { icon: Heart, title: "Passion for Storytelling", desc: "We believe every story deserves to be heard. We bring the same passion to every single project." },
  { icon: Globe, title: "Global Mindset", desc: "Our books reach readers in over 40 countries across every major platform." },
  { icon: Zap, title: "Relentless Excellence", desc: "We never settle. Every manuscript, cover, and campaign meets the highest professional standard." },
];

const milestones = [
  { year: "2015", event: "Founded in New York with a team of 4 publishing veterans." },
  { year: "2017", event: "Reached our first 500 published books. Expanded to audiobook production." },
  { year: "2019", event: "Launched our full marketing division. First Amazon #1 bestseller campaign." },
  { year: "2021", event: "Crossed 1,000 published authors. Opened distribution to 40+ global platforms." },
  { year: "2023", event: "2,500+ books published. Recognized as a top independent publishing service." },
  { year: "2024", event: "Launched premium ghostwriting packages. 1,800+ happy authors and counting." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-white to-slate-50/30 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#DC2626 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp delay={0}><span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 block">Our Story</span></FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl font-black text-brand-dark leading-[1.1] mb-6">
              We Exist to Help<br />
              <span className="text-gradient">Authors Succeed</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="text-brand-body text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Founded in 2015, The Author Success was built on one belief: every great story deserves to be published, and every author deserves world-class support to get there.
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-red-200 transition-all">
                Work With Us <ArrowRight size={17} />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-slate-900 text-brand-dark-2 font-bold px-8 py-4 rounded-full transition-all">
                See Our Work
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

      {/* ── STATS ── */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              { icon: BookOpen, value: "2,500+", label: "Books Published" },
              { icon: Users, value: "1,800+", label: "Authors Helped" },
              { icon: Globe, value: "40+", label: "Global Platforms" },
              { icon: Award, value: "98%", label: "Satisfaction Rate" },
            ].map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.1}>
                <div className="bg-brand-dark px-8 py-10 text-center">
                  <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <s.icon size={18} className="text-primary" />
                  </div>
                  <div className="font-[family-name:var(--font-playfair)] text-3xl font-black text-white mb-1">{s.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{s.label}</div>
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
                  Democratizing Publishing<br />for Every Author
                </h2>
                <p className="text-brand-body leading-relaxed mb-5">
                  Traditional publishing gatekeepers kept countless great stories from ever reaching readers. We changed that. The Author Success gives every writer — regardless of experience, connections, or background — access to the same professional resources that major publishers use.
                </p>
                <p className="text-brand-body leading-relaxed mb-8">
                  We believe the publishing industry should work for authors, not against them. That means transparent pricing, 100% royalty ownership, and a team that is genuinely invested in your success.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    "No gatekeeping — we publish every genre and every story",
                    "Authors keep 100% of their intellectual property",
                    "Distribution to Amazon and 40+ global platforms",
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
                      <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-3">
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
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Our Journey</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark">
                From 4 People to<br />1,800+ Happy Authors
              </h2>
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
                        i === milestones.length - 1 ? "bg-primary text-white shadow-red-200" : "bg-brand-dark text-white shadow-slate-200"
                      }`}>
                        {m.year}
                      </div>
                    </div>
                    <div className={`flex-1 bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-2 ${i % 2 === 0 ? "" : "sm:text-right"}`}>
                      <p className="text-brand-dark-2 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">The Team</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark">
                The Experts Behind<br />Your Success
              </h2>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <FadeUp key={member.name} delay={i * 0.08}>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 hover-lift h-full">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg mb-4 shadow-lg" style={{ background: member.color }}>
                    {member.initials}
                  </div>
                  <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-brand-dark mb-0.5">{member.name}</h4>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mb-3">{member.role}</p>
                  <p className="text-brand-muted text-sm leading-relaxed">{member.bio}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">
              Ready to Write Your<br />Success Story?
            </h2>
            <p className="text-slate-400 mb-8 text-sm">
              Schedule a free consultation. Let&apos;s talk about your book and build your publishing roadmap.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-10 py-4 rounded-full shadow-xl shadow-red-900/30 transition-all">
              Get Free Consultation <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
