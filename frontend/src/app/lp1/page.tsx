'use client'

import { useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import {
  PenLine, SpellCheck, Palette, BookOpen, Headphones, TrendingUp,
  Clock, Trophy, Users, Mic, Globe, BarChart2, CheckCircle,
  X, ArrowRight, Star, Shield, Zap,
  Newspaper, Rss, Video, Briefcase, BookMarked, Layers,
  Code, Monitor, Printer, AlignLeft, Share2, FileCheck,
} from 'lucide-react'

/* ─── Data ─────────────────────────────────────────────────── */

const services = [
  { icon: PenLine,     title: 'Ghostwriting',                    desc: 'Your ideas and stories, written in your voice from the first page to the last.' },
  { icon: SpellCheck,  title: 'Book Editing',                    desc: 'Careful edits that tighten your writing without losing what makes it yours.' },
  { icon: Palette,     title: 'Cover Design',                    desc: 'Covers that look great in a thumbnail and even better on a shelf.' },
  { icon: TrendingUp,  title: 'Book Marketing',                  desc: 'Campaigns that help the right readers discover your book.' },
  { icon: Headphones,  title: 'Audiobooks',                      desc: 'Professional narration that lets people listen to your book anywhere.' },
  { icon: BookOpen,    title: 'Book Publishing',                  desc: 'Formatting, ISBN, and setup on Amazon KDP and other major platforms.' },
  { icon: BarChart2,   title: 'Digital Marketing',               desc: 'Online ads and campaigns that grow your book\'s visibility.' },
  { icon: Users,       title: 'Author Marketing',                desc: 'A personal brand that keeps readers coming back for your next book.' },
  { icon: Newspaper,   title: 'Article Writing & Publishing',    desc: 'Well-researched articles that show you know your field.' },
  { icon: Rss,         title: 'Blog Writing',                    desc: 'Fresh posts that bring steady traffic to your website.' },
  { icon: Video,       title: 'Book Trailer',                    desc: 'Short videos that give readers a taste of your story.' },
  { icon: Briefcase,   title: 'Business Proposal Writing',       desc: 'Clear, convincing proposals that help you win the deal.' },
  { icon: BookMarked,  title: 'Children Book Publication',       desc: 'Complete publishing for picture books and young readers.' },
  { icon: Layers,      title: "Children's Book Illustrations",   desc: "Original artwork that brings young readers' favourite characters to life." },
  { icon: Code,        title: 'Web Content Writing',             desc: 'Website copy that turns visitors into readers and clients.' },
  { icon: Monitor,     title: 'Author Website Design',           desc: 'A professional home online for your books and your brand.' },
  { icon: FileCheck,   title: "Children's Book Editing",         desc: 'Edits that keep language, pacing, and tone right for young readers.' },
  { icon: Printer,     title: 'Book Printing',                   desc: 'Print-on-demand and bulk copies in professional quality.' },
  { icon: AlignLeft,   title: 'Formatting Services',             desc: "Clean print and eBook interiors that meet every platform's standards." },
  { icon: Share2,      title: 'Book Promotion',                  desc: 'Targeted pushes that build reviews, rankings, and lasting sales.' },
]

const genres = [
  { num: '01', title: 'Business Books',      desc: 'Share what you know and become the name people trust in your industry.' },
  { num: '02', title: 'Memoir & Biography',  desc: 'Your life story, told with care and in words that sound like you.' },
  { num: '03', title: 'Self-Help',           desc: 'Turn your method into practical guidance that helps readers make real changes.' },
  { num: '04', title: 'Entrepreneurship',    desc: 'The highs, lows, and lessons of building something from nothing.' },
  { num: '05', title: 'Thought Leadership',  desc: 'Fresh ideas that get you noticed by the people who matter.' },
  { num: '06', title: 'Expert Guides',       desc: 'Clear, trusted guides for doctors, lawyers, consultants, and specialists.' },
]

const whyItems = [
  { icon: Clock,   title: 'Save Your Time',           desc: 'Writing a book takes time and effort. We help with the writing process so you can focus on your work and other priorities.' },
  { icon: Trophy,  title: 'Quality You Can See',      desc: 'Experienced writers, editors, and designers make sure your book reads and looks like it belongs on any bookstore shelf.' },
  { icon: Users,   title: 'Everything in One Place',  desc: 'Writing, publishing, and marketing all happen under one roof, with no gaps and no surprises.' },
  { icon: Mic,     title: 'Sounds Like You',          desc: 'We learn how you speak and think, so the finished book feels unmistakably yours.' },
]

const exceptionalServices = [
  { icon: PenLine,    title: 'Ghostwriting',          desc: 'We write your book in your voice, chapter by chapter, while you stay in control of every page.' },
  { icon: Globe,      title: 'Publishing',            desc: 'Formatting, ISBN, and distribution handled for you, so your book reaches Amazon, Barnes & Noble, and stores around the world.' },
  { icon: Headphones, title: 'Audiobook Production',  desc: 'Professional narration and studio-quality sound that let people enjoy your book on the go.' },
  { icon: BarChart2,  title: 'Book Marketing',        desc: 'Our book marketing services build your author brand and put your book in front of readers who are already looking for it.' },
]

const testimonials = [
  { initial: 'O', name: 'Olivia Bennett', role: 'Fiction Author',    quote: 'The assistance has enabled me to shape up my manuscript in a well-defined manner through the ideas that had been lingering within me for years.' },
  { initial: 'D', name: 'Daniel Brooks',  role: 'Business Author',   quote: "It's been nice to have the publishing process explained in a manner that is comprehensible and gives me an understanding of the decisions being made so that I can feel ready to continue with my book." },
  { initial: 'S', name: 'Sophia Mitchell', role: 'Memoir Author',   quote: 'Having support throughout the project helped me stay focused on the story I wanted to tell. Communication and clear next steps made a complicated process feel less overwhelming.' },
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

function openCalendly() {
  if (typeof window !== 'undefined' && (window as any).Calendly) {
    (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/theauthorsuccess-support/30min' })
  }
}

export default function LandingPage() {
  const [popup, setPopup] = useState(false)

  return (
    <>
      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />

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
              <span className="text-white/90 text-xs font-semibold">Trusted by <strong className="text-white">Authors, Founders, and Experts</strong></span>
            </div>

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.75rem] font-black text-white leading-[1.08] mb-6">
              The Book That<br />
              <span className="text-primary">Builds Your</span>{' '}
              <span className="text-white">Business</span>
            </h1>

            {/* Subtext */}
            <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Our professional book writing services take you from a rough idea to a finished, published book, written in your voice and released under your name.
            </p>

            {/* Quick bullets */}
            <div className="flex flex-wrap justify-center gap-x-7 gap-y-2 mb-9">
              {['100% of Royalties Stay Yours', 'NDA Before We Start', 'Free, No-Pressure Consultation'].map(b => (
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
                Get My Free Consultation <ArrowRight size={16} />
              </button>
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-bold px-7 py-4 rounded-full transition-colors text-[0.95rem]"
              >
                Talk to Our Team
              </button>
            </div>
          </div>
        </div>

        {/* ── Highlights bar ── */}
        <div className="relative border-t border-white/10 bg-black/40 backdrop-blur-md">
          <div className="max-w-4xl mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { v: 'Every Genre',   l: 'Fiction to Business' },
              { v: 'Your Voice',    l: 'On Every Page' },
              { v: 'Global Reach',  l: 'Major Retailers' },
              { v: '100% Yours',    l: 'Rights & Royalties' },
            ].map((s, i) => (
              <div key={s.l} className={i < 3 ? 'sm:border-r border-white/10' : ''}>
                <div className="font-[family-name:var(--font-playfair)] text-lg font-black text-primary">{s.v}</div>
                <div className="text-white/50 text-xs mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-14 text-center lg:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Our Services</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-black leading-tight">
                <span className="text-black">Everything Your Book</span><br />
                <span className="text-primary">and Brand Need</span>
              </h2>
            </div>
            <div className="lg:text-right">
              <p className="text-brand-muted text-sm leading-relaxed max-w-sm lg:ml-auto mb-4 mx-auto lg:mx-0">
                Writing, editing, design, book publishing services, and promotion, all handled by one team so that you can stay focused on the story.
              </p>
              <button
                onClick={() => setPopup(true)}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-cyan-200 transition-colors text-sm"
              >
                Start My Book <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Services grid
              Layout (4-col):
              [0 ][1 ][2 ][3 ]   row 1
              [4 ][5 ][6 ][7 ]   row 2
              [8 ][IMG   ][9 ]   row 3  ← image is col-span-2 row-span-2
              [10][IMG   ][11]   row 4
              [12][13][14][15]   row 5
              [16][17][18][19]   row 6
          */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.slice(0, 8).map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-1 transition-all group cursor-default flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary group-hover:border-primary transition-all">
                  <Icon size={18} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-brand-dark mb-1.5 text-sm leading-snug">{title}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{desc}</p>
              </div>
            ))}

            {/* card[8] — row 3, col 1 */}
            {[services[8]].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="self-start bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-1 transition-all group cursor-default flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary group-hover:border-primary transition-all">
                  <Icon size={18} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-brand-dark mb-1.5 text-sm leading-snug">{title}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{desc}</p>
              </div>
            ))}

            {/* center image — col-span-2 row-span-2: rows 3-4, cols 2-3 */}
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden h-[420px] bg-slate-50 flex items-center justify-center">
              <Image
                src="/landing page Images/typewritter.png"
                alt="Professional book writing services"
                width={600}
                height={310}
                className="w-full h-full object-contain"
              />
            </div>

            {/* card[9] — row 3, col 4 */}
            {[services[9]].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="self-start bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-1 transition-all group cursor-default flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary group-hover:border-primary transition-all">
                  <Icon size={18} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-brand-dark mb-1.5 text-sm leading-snug">{title}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{desc}</p>
              </div>
            ))}

            {/* card[10] — row 4, col 1 */}
            {[services[10]].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="self-start bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-1 transition-all group cursor-default flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary group-hover:border-primary transition-all">
                  <Icon size={18} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-brand-dark mb-1.5 text-sm leading-snug">{title}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{desc}</p>
              </div>
            ))}

            {/* card[11] — row 4, col 4 */}
            {[services[11]].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="self-start bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-1 transition-all group cursor-default flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary group-hover:border-primary transition-all">
                  <Icon size={18} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-brand-dark mb-1.5 text-sm leading-snug">{title}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{desc}</p>
              </div>
            ))}

            {/* cards 12-19 — rows 5-6 */}
            {services.slice(12).map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-1 transition-all group cursor-default flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary group-hover:border-primary transition-all">
                  <Icon size={18} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-brand-dark mb-1.5 text-sm leading-snug">{title}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── GENRES ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[380px_1fr] gap-12 items-start">
            <div className="lg:sticky lg:top-28 flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Our Specialties</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark mb-4">
                <span className="text-black">Every Book Type,</span><br />
                <span className="text-primary">Every Industry</span><span className="text-black"> Covered</span>
              </h2>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">
                Whether you&apos;re a CEO, coach, doctor, or writing your first book, we&apos;ll pair you with a writer who understands your work and the people you want to reach. That way, your book feels like you and speaks to the right readers.
              </p>
              <button
                onClick={() => setPopup(true)}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm"
              >
                Find My Writer <ArrowRight size={15} />
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
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Why Choose Us</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark mb-4">
                <span className="text-black">Experts in Books,</span><br />
                <span className="text-primary">Partners in Growth</span>
              </h2>
              <p className="font-semibold text-brand-dark text-sm mb-4">Everything your book needs, handled by one dedicated team</p>
              <div className="flex flex-col gap-3 mb-7 text-brand-body text-sm leading-relaxed">
                <p>Writing a book in itself is quite an ordeal. You should not be bothered with having to manage various freelancers along with that. With The Author Success, the entire process from the first conversation to the launch of the book is taken care of by our team.</p>
                <p>Our writers, editors, designers, and publishing team work together throughout the process. We want the final book to sound like you, share your ideas clearly, and do justice to the knowledge you bring to it.</p>
                <p>From ghostwriting services to cover design and global distribution, every part of your book gets the same care and attention, because your name is on the cover.</p>
              </div>
              <div className="flex flex-col gap-2 mb-8 w-full">
                {['A dedicated project manager from day one', 'NDA signed before you share any details', '100% of your royalties stay with you', 'Revision rounds at every stage'].map(item => (
                  <div key={item} className="flex items-center justify-center lg:justify-start gap-2.5 text-sm text-brand-dark-2">
                    <CheckCircle size={14} className="text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <button onClick={() => setPopup(true)} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm shadow-lg shadow-cyan-200">
                  Book Free Consultation <ArrowRight size={15} />
                </button>
                <button onClick={openCalendly} className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-primary text-brand-dark font-bold px-6 py-3.5 rounded-full transition-colors text-sm">
                  Schedule a Call
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
                    <div className="font-[family-name:var(--font-playfair)] text-sm font-black text-primary leading-none">Your Voice</div>
                    <div className="text-[11px] text-brand-muted font-medium mt-0.5">On Every Page</div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg">
                    <div className="font-[family-name:var(--font-playfair)] text-sm font-black text-primary leading-none">Full Team</div>
                    <div className="text-[11px] text-brand-muted font-medium mt-0.5">Under One Roof</div>
                  </div>
                  <div className="bg-primary rounded-xl px-4 py-2.5 shadow-lg">
                    <div className="font-[family-name:var(--font-playfair)] text-sm font-black text-white leading-none">100% Yours</div>
                    <div className="text-[11px] text-white/80 font-medium mt-0.5">Rights &amp; Royalties</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20" style={{ backgroundColor: '#089bb2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-black text-white mb-4">
            Have a Story Worth Sharing?<br />We&apos;ll Help You Publish It.
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Book a free consultation, and we&apos;ll help you shape your idea into a clear plan.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => setPopup(true)} className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 font-bold px-8 py-4 rounded-full shadow-lg transition-colors" style={{ color: '#089bb2' }}>
              Get Free Consultation <ArrowRight size={16} />
            </button>
            <button onClick={openCalendly} className="inline-flex items-center gap-2 bg-transparent border-2 border-white/60 hover:border-white text-white font-bold px-7 py-4 rounded-full transition-colors">
              Schedule a Call
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
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Our Specialties</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-brand-dark mb-10">
                <span className="text-black">The Services Behind</span><br />
                <span className="text-primary">Every Successful Author.</span>
              </h2>
              <div className="flex flex-col gap-6 w-full">
                {exceptionalServices.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4">
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
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Why Work With Us</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-black text-brand-dark mb-4">
              <span className="text-black">What Makes Authors</span><br />
              <span className="text-primary">Choose Us First</span>
            </h2>
            <p className="text-brand-muted text-sm max-w-md mx-auto">
              Entrepreneurs, executives, and experts come to us for one simple reason: they want their book done right.
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
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-brand-muted mb-6">Available Worldwide On</p>
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
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">Client Reviews</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-black text-brand-dark mb-4">
              <span className="text-black">What Our</span> <span className="text-primary">Authors Are Saying</span>
            </h2>
            <p className="text-brand-muted text-sm max-w-md mx-auto">
              Honest words from authors who trusted us with their stories.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
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

      {/* ── TRUSTED BY AUTHORS IN ── */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted mb-6">Trusted By Authors In</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Business & Finance', 'Health & Wellness', 'Law & Consulting', 'Coaching & Leadership', 'Technology', 'Real Estate'].map(chip => (
              <span key={chip} className="bg-white border border-slate-200 text-brand-dark text-xs font-semibold px-5 py-2.5 rounded-full shadow-sm">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
