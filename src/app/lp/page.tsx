'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  PenLine, SpellCheck, Palette, BookOpen, Headphones, TrendingUp,
  Clock, Trophy, Users, Mic, Globe, BarChart2, CheckCircle,
  X, ArrowRight, Star, Shield, Zap,
} from 'lucide-react'

/* ─── Data ─────────────────────────────────────────────────── */

const services = [
  { icon: PenLine,    title: 'Book Writing & Ghostwriting',    desc: 'We write your book entirely in your voice, capturing your ideas and story with precision.' },
  { icon: SpellCheck, title: 'Editing & Proofreading',         desc: 'Professional editing that sharpens your manuscript without losing your unique voice.' },
  { icon: Palette,    title: 'Cover & Interior Design',        desc: 'Award-worthy covers and interiors that make readers stop and reach for your book.' },
  { icon: BookOpen,   title: 'Book Publishing',                desc: 'We handle every step of publishing your book on Amazon, KDP, and global platforms.' },
  { icon: Headphones, title: 'Audiobook Production',           desc: 'Studio-quality audiobook production that brings your words to life for listeners everywhere.' },
  { icon: TrendingUp, title: 'Book Marketing',                 desc: 'Targeted campaigns that put your book in front of the right readers at the right time.' },
]

const genres = [
  { num: '01', title: 'Business Books',      desc: 'Position yourself as the authority in your industry with a book that opens doors and builds lasting credibility.' },
  { num: '02', title: 'Memoir & Biography',  desc: 'Your story, professionally told. We capture your voice, journey, and lessons in a narrative readers remember.' },
  { num: '03', title: 'Self-Help',           desc: 'Turn your framework into an actionable book that transforms readers and grows your brand.' },
  { num: '04', title: 'Entrepreneurship',    desc: 'Document your journey and inspire others. We help founders craft books that teach and motivate.' },
  { num: '05', title: 'Thought Leadership',  desc: 'Put your ideas in front of the people who matter. A well-crafted book makes you the go-to expert.' },
  { num: '06', title: 'Expert Guides',       desc: 'Turn your expertise into a definitive guide. We work with doctors, lawyers, and consultants.' },
]

const whyItems = [
  { icon: Clock,   title: 'Save Time & Focus',       desc: 'Writing a book takes hundreds of hours. We handle every word so you can focus on what you do best.' },
  { icon: Trophy,  title: 'Professional Quality',    desc: 'Our writers, editors, and designers are industry veterans — your book will look and read like a bestseller.' },
  { icon: Users,   title: 'One Team, Full Service',  desc: 'From writing to publishing to marketing — everything handled under one roof. No gaps, no surprises.' },
  { icon: Mic,     title: 'Your Voice, Your Book',   desc: 'We study how you speak and think. The finished book sounds exactly like you — just professionally written.' },
]

const exceptionalServices = [
  { icon: PenLine,    title: 'Ghostwriting',          desc: 'We write your book in your voice — capturing your story, expertise, and personality on every page.' },
  { icon: Globe,      title: 'Publishing',            desc: 'From formatting to distribution, we get your book onto Amazon, Barnes & Noble, and bookstores worldwide.' },
  { icon: Headphones, title: 'Audiobook Production',  desc: 'Reach listeners everywhere. We produce professional-quality audiobooks that bring your words to life.' },
  { icon: BarChart2,  title: 'Book Marketing',        desc: 'We build your author brand and get your book in front of the right readers through targeted strategies.' },
]

const testimonials = [
  { initial: 'M', name: 'Marcus Reid',   role: 'Founder & CEO, ApexPrep',              quote: 'A book is one of the most powerful lead generators for businesses out there. The amount we spent on The Author Success project has generated a 10x plus return — if not 20x.' },
  { initial: 'J', name: 'James Caldwell', role: 'Founder & CEO, Global Immersion Co.', quote: "I wasn't a 'writer.' The Author Success turned years of workshops into a clear book — and the book turned into credibility, revenue, and relationships I couldn't have reached any other way." },
  { initial: 'V', name: 'Victor Harlen', role: 'Former Federal Agent',                 quote: "I am crazily thinking about writing a second book. There's no way, if the process wasn't anything but great, that I would say I want to do this again." },
  { initial: 'E', name: 'Elijah Moore',  role: 'Business Strategist & Speaker',        quote: "The launch strategy The Author Success built for me was exceptional. New business started coming in immediately after launch — and it kept coming." },
]

const bookCovers = [
  '/midnight-verdict.jpeg',
  '/Silicon Dreams.jpeg',
  '/Beyond the Horizon.jpeg',
  '/Whispers of Eden.jpeg',
]

/* ─── Popup Form ────────────────────────────────────────────── */

function Popup({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ cn: '', em: '', pn: '', msg: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/landing-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col md:flex-row">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
        >
          <X size={15} className="text-slate-500" />
        </button>

        {/* Left panel */}
        <div className="bg-brand-dark md:w-[42%] p-8 flex flex-col justify-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-1 block">The Author Success</span>
          <div className="w-8 h-0.5 bg-primary mb-5" />
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white leading-snug mb-3">
            Let&apos;s Turn Your Idea Into a Published Book.
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Tell us about your book and a publishing specialist will reach out within one business day — no pressure, just clarity.
          </p>
          <ul className="flex flex-col gap-2.5">
            {['Expert ghostwriting & publishing', 'End-to-end — writing to marketing', '3,000+ authors published', 'You keep 100% of your rights'].map(perk => (
              <li key={perk} className="flex items-center gap-2.5 text-sm text-white/80">
                <CheckCircle size={13} className="text-primary shrink-0" />
                {perk}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 mt-6 pt-5 border-t border-white/10">
            <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-amber-400 fill-amber-400" />)}</div>
            <span className="text-white/50 text-xs">Trusted by 3,000+ authors</span>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex-1 p-8">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center h-full py-10 text-center gap-4">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle size={28} className="text-green-500" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-brand-dark">Message Sent!</h3>
              <p className="text-brand-muted text-sm">We&apos;ll be in touch within 24 hours.</p>
              <button onClick={onClose} className="mt-2 bg-primary hover:bg-primary-hover text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors">
                Close
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-brand-dark mb-1">Get Expert Guidance</h3>
              <p className="text-brand-muted text-xs mb-5">No spam. No commitment. Just a conversation.</p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text" required placeholder="Full Name *" value={form.cn}
                  onChange={e => setForm(f => ({ ...f, cn: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-primary transition-colors placeholder:text-slate-400"
                />
                <input
                  type="email" required placeholder="Email Address *" value={form.em}
                  onChange={e => setForm(f => ({ ...f, em: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-primary transition-colors placeholder:text-slate-400"
                />
                <input
                  type="tel" required placeholder="Phone Number *" value={form.pn}
                  onChange={e => setForm(f => ({ ...f, pn: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-primary transition-colors placeholder:text-slate-400"
                />
                <textarea
                  placeholder="Tell us about your book idea..." rows={3} value={form.msg}
                  onChange={e => setForm(f => ({ ...f, msg: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-primary transition-colors placeholder:text-slate-400 resize-none"
                />
                {status === 'error' && (
                  <p className="text-red-600 text-xs font-medium">Something went wrong. Please try again.</p>
                )}
                <button
                  type="submit" disabled={status === 'loading'}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 rounded-xl shadow-lg shadow-cyan-100 transition-colors disabled:opacity-60 text-sm"
                >
                  {status === 'loading' ? 'Sending…' : 'Get Expert Guidance →'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function LandingPage() {
  const [popup, setPopup] = useState(false)

  return (
    <>
      {popup && <Popup onClose={() => setPopup(false)} />}

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col bg-[#07080f] overflow-hidden">

        {/* Background image */}
        <Image src="/landing%20page%20Images/landing-page-banner.jpg" alt="" fill
          className="object-cover object-center opacity-55" priority />

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/85 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none" />

        {/* Cyan glow in centre */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[700px] h-[260px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />

        {/* ── Book covers LEFT (xl only) ── */}
        <div className="absolute left-6 top-1/2 -translate-y-[55%] hidden xl:flex flex-col gap-5 z-10">
          <div style={{ transform: 'rotate(-9deg) translateX(-8px)' }}>
            <Image src="/midnight-verdict.jpeg" alt="Book" width={140} height={210}
              className="rounded-lg shadow-2xl shadow-black/70 hover:scale-105 transition-transform duration-300"
              style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ transform: 'rotate(6deg) translateX(24px)' }}>
            <Image src="/Roots-of-gold.jpeg" alt="Book" width={140} height={210}
              className="rounded-lg shadow-2xl shadow-black/70 hover:scale-105 transition-transform duration-300"
              style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ transform: 'rotate(-4deg) translateX(4px)' }}>
            <Image src="/The Last Oracle.jpeg" alt="Book" width={130} height={195}
              className="rounded-lg shadow-2xl shadow-black/70 hover:scale-105 transition-transform duration-300"
              style={{ objectFit: 'cover' }} />
          </div>
        </div>

        {/* ── Book covers RIGHT (xl only) ── */}
        <div className="absolute right-6 top-1/2 -translate-y-[55%] hidden xl:flex flex-col gap-5 z-10">
          <div style={{ transform: 'rotate(8deg) translateX(8px)' }}>
            <Image src="/Silicon Dreams.jpeg" alt="Book" width={140} height={210}
              className="rounded-lg shadow-2xl shadow-black/70 hover:scale-105 transition-transform duration-300"
              style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ transform: 'rotate(-6deg) translateX(-20px)' }}>
            <Image src="/Beyond the Horizon.jpeg" alt="Book" width={140} height={210}
              className="rounded-lg shadow-2xl shadow-black/70 hover:scale-105 transition-transform duration-300"
              style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ transform: 'rotate(4deg) translateX(-4px)' }}>
            <Image src="/Whispers of Eden.jpeg" alt="Book" width={130} height={195}
              className="rounded-lg shadow-2xl shadow-black/70 hover:scale-105 transition-transform duration-300"
              style={{ objectFit: 'cover' }} />
          </div>
        </div>

        {/* ── Centre content ── */}
        <div className="relative flex-1 flex items-center justify-center pt-[68px] px-4">
          <div className="text-center max-w-2xl mx-auto py-20">

            {/* Trust badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-7">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} size={11} className="text-amber-400 fill-amber-400" />)}
              </div>
              <span className="text-white/90 text-xs font-semibold">Trusted by <strong className="text-white">3,000+</strong> Authors Worldwide</span>
            </div>

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.75rem] font-black text-white leading-[1.08] mb-6">
              Write the Book That Becomes<br />
              <span className="text-primary">Your Greatest</span>{' '}
              <span className="text-white">Business Asset</span>
            </h1>

            {/* Subtext */}
            <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              The Author Success guides entrepreneurs, executives, and experts from first idea to published book — in your voice, under your name.
            </p>

            {/* Quick bullets */}
            <div className="flex flex-wrap justify-center gap-x-7 gap-y-2 mb-9">
              {['You Keep 100% of Royalties', 'NDA Signed Before We Begin', 'No Commitment Required'].map(b => (
                <div key={b} className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle size={14} className="text-primary shrink-0" />
                  {b}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setPopup(true)}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-9 py-4 rounded-full shadow-2xl shadow-cyan-900/60 transition-colors text-[0.95rem]"
              >
                Book a Free Consultation <ArrowRight size={16} />
              </button>
              <button
                onClick={() => setPopup(true)}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-bold px-7 py-4 rounded-full transition-colors text-[0.95rem]"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="relative border-t border-white/10 bg-black/40 backdrop-blur-md">
          <div className="max-w-3xl mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { v: '3,000+', l: 'Books Published' },
              { v: '98%',    l: 'Satisfaction Rate' },
              { v: '40+',    l: 'Global Platforms' },
              { v: '10+',    l: 'Years Experience' },
            ].map((s, i) => (
              <div key={s.l} className={i < 3 ? 'sm:border-r border-white/10' : ''}>
                <div className="font-[family-name:var(--font-playfair)] text-2xl font-black text-primary">{s.v}</div>
                <div className="text-white/50 text-xs mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[420px_1fr] gap-14 items-center">

            {/* Typewriter visual */}
            <div className="relative flex items-center justify-center">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-slate-50 rounded-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
              <Image
                src="/landing%20page%20Images/typewritter.png"
                alt="Vintage typewriter"
                width={420} height={420}
                className="relative drop-shadow-2xl hover:scale-[1.03] transition-transform duration-500"
                style={{ objectFit: 'contain' }}
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-brand-dark text-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3 whitespace-nowrap">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold">3,000+ Books Written &amp; Published</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">What We Do</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark mb-3">
                <span className="text-black">Everything You Need to</span><br />
                <span className="text-primary">Write, Publish &amp; Market</span>
              </h2>
              <p className="text-brand-muted text-sm mb-8 leading-relaxed">
                From your first idea to a professionally published book — we handle every step so you can focus on your story.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {services.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:shadow-md hover:border-slate-200 hover:-translate-y-0.5 transition-all group">
                    <div className="w-9 h-9 bg-cyan-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                      <Icon size={17} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-brand-dark mb-1 text-sm">{title}</h3>
                    <p className="text-brand-muted text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setPopup(true)}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-cyan-200 transition-colors"
              >
                Book a Free Consultation <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── GENRES ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[380px_1fr] gap-12 items-start">
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Every Genre</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark mb-4">
                <span className="text-black">We Write Every Type</span><br />
                <span className="text-primary">of Book</span><span className="text-black"> — In Your Voice</span>
              </h2>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">
                Whether you&apos;re a CEO, coach, doctor, or first-time author — we have specialized writers who understand your industry and know how to make your book stand out.
              </p>
              <button
                onClick={() => setPopup(true)}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm"
              >
                Get Started <ArrowRight size={15} />
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {genres.map(({ num, title, desc }) => (
                <div key={num} className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-[family-name:var(--font-playfair)] font-bold text-brand-dark text-base">{title}</h3>
                    <span className="font-[family-name:var(--font-playfair)] text-2xl font-black text-primary/20 shrink-0 ml-2">{num}</span>
                  </div>
                  <p className="text-brand-muted text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST / ENSURE ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Why Trust Us</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark mb-4">
                <span className="text-black">A Publishing Partner You Can Trust</span><br />
                <span className="text-primary">From Start to Shelf</span>
              </h2>
              <p className="font-semibold text-brand-dark text-sm mb-4">Writing, publishing, and marketing — all under one roof</p>
              <div className="flex flex-col gap-3 mb-7 text-brand-body text-sm leading-relaxed">
                <p>At The Author Success, we&apos;ve built a proven system that takes you from raw idea to published book — without the guesswork, the delays, or the stress. Every author receives a dedicated team that stays in close communication from day one.</p>
                <p>Our writers, editors, designers, and publishing specialists work together on your project — so nothing falls through the cracks. We shape your message and create a book that reflects your expertise and voice with precision.</p>
                <p>With over 3,000 authors published and a decade of experience, The Author Success has become the trusted choice for entrepreneurs, executives, and thought leaders who want a book done right.</p>
              </div>
              <div className="flex flex-col gap-2 mb-8">
                {['Dedicated project manager from day one', 'NDA signed before any project details shared', 'You keep 100% of your royalties', 'Unlimited revision rounds included'].map(item => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-brand-dark-2">
                    <CheckCircle size={14} className="text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => setPopup(true)} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm shadow-lg shadow-cyan-200">
                  Book Free Consultation <ArrowRight size={15} />
                </button>
                <button onClick={() => setPopup(true)} className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-primary text-brand-dark font-bold px-6 py-3.5 rounded-full transition-colors text-sm">
                  View Pricing
                </button>
              </div>
            </div>
            <div className="relative">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/landing%20page%20Images/ensure-thumbnail-2.jpeg"
                  alt="Publishing specialist"
                  width={600} height={750}
                  className="w-full h-auto object-cover"
                />
                {/* Bottom fade + floating badges */}
                <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-slate-900/85 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg">
                    <div className="font-[family-name:var(--font-playfair)] text-xl font-black text-primary leading-none">3,000+</div>
                    <div className="text-[11px] text-brand-muted font-medium mt-0.5">Authors Published</div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg">
                    <div className="font-[family-name:var(--font-playfair)] text-xl font-black text-primary leading-none">98%</div>
                    <div className="text-[11px] text-brand-muted font-medium mt-0.5">Satisfaction Rate</div>
                  </div>
                  <div className="bg-primary rounded-xl px-4 py-2.5 shadow-lg">
                    <div className="font-[family-name:var(--font-playfair)] text-xl font-black text-white leading-none">10+</div>
                    <div className="text-[11px] text-white/80 font-medium mt-0.5">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-black text-white mb-4">
            Your Book Won&apos;t Write Itself.<br />But We Can Help You Write It.
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Book a free consultation and let&apos;s talk about your idea today.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => setPopup(true)} className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-primary font-bold px-8 py-4 rounded-full shadow-lg transition-colors">
              Book a Free Consultation <ArrowRight size={16} />
            </button>
            <button onClick={() => setPopup(true)} className="inline-flex items-center gap-2 bg-transparent border-2 border-white/60 hover:border-white text-white font-bold px-7 py-4 rounded-full transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* ── EXCEPTIONAL SERVICES ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Book covers grid */}
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative grid grid-cols-2 gap-4 max-w-sm mx-auto">
                {bookCovers.map((src, i) => (
                  <Image key={src} src={src} alt="Book" width={180} height={270}
                    className="rounded-xl shadow-2xl w-full h-auto"
                    style={{ transform: ['rotate(-3deg)', 'rotate(3deg) translateY(18px)', 'rotate(2deg) translateY(-10px)', 'rotate(-2deg)'][i] }}
                  />
                ))}
              </div>
            </div>

            {/* Services list */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Our Core Services</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark mb-10">
                <span className="text-black">Everything We Do,</span><br />
                <span className="text-primary">Done Exceptionally Well.</span>
              </h2>
              <div className="flex flex-col gap-6">
                {exceptionalServices.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-dark mb-1">{title}</h3>
                      <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Why Authors Choose Us</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-black text-brand-dark mb-4">
              <span className="text-black">Why Authors Choose</span><br />
              <span className="text-primary">The Author Success</span>
            </h2>
            <p className="text-brand-muted text-sm max-w-md mx-auto">
              Over 3,000 entrepreneurs, executives, and experts have trusted us to write and publish their books.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {whyItems.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-all text-center">
                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-brand-dark mb-2">{title}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button onClick={() => setPopup(true)} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-cyan-200 transition-colors">
              Start My Book <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── LOGOS ── */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-brand-muted mb-6">Published &amp; Distributed On</p>
          <Image
            src="/landing%20page%20Images/logos.jpg"
            alt="Publishing platforms and partners"
            width={900} height={120}
            className="w-full h-auto mx-auto"
          />
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Author Stories</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-black text-brand-dark mb-4">
              <span className="text-black">What Our</span> <span className="text-primary">Authors Say</span>
            </h2>
            <p className="text-brand-muted text-sm max-w-md mx-auto">
              Real stories from real authors who partnered with The Author Success to bring their books to life.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map(({ initial, name, role, quote }) => (
              <div key={name} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} size={13} className="text-amber-400 fill-amber-400" />)}
                </div>
                <p className="font-[family-name:var(--font-playfair)] text-sm italic text-brand-body leading-relaxed flex-1 mb-5">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xs shrink-0">
                    {initial}
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">{name}</div>
                    <div className="text-brand-muted text-xs">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHANNELS ── */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-brand-muted mb-6">Available On All Major Platforms</p>
          <Image
            src="/landing%20page%20Images/channels.png"
            alt="Book distribution channels"
            width={900} height={200}
            className="w-full h-auto mx-auto"
          />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#0891B2 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-5">
            {[Shield, Zap, Trophy].map((Icon, i) => (
              <div key={i} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center -ml-2 first:ml-0">
                <Icon size={16} className="text-white/70" />
              </div>
            ))}
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-black text-white mb-4">
            We Write, Publish &amp; Market Your Book<br />
            <span className="text-primary">And Make It a Global Success</span>
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Join 3,000+ authors who turned their expertise into a published book with The Author Success.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => setPopup(true)} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-cyan-900/40 transition-colors">
              Book a Free Consultation <ArrowRight size={16} />
            </button>
            <button onClick={() => setPopup(true)} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-4 rounded-full transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
