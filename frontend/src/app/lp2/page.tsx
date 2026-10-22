'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  CheckCircle, ChevronLeft, ChevronRight, ArrowRight, Star,
  Megaphone, BookOpen, Palette, PenLine, Pencil,
  Clock, Trophy, Users, Mic,
  SpellCheck, TrendingUp, Headphones, BarChart2,
  Newspaper, Rss, Video, Briefcase, BookMarked, Layers,
  Code, Monitor, Printer, AlignLeft, Share2, FileCheck,
} from 'lucide-react'

/* ─── Data ───────────────────────────────────────────────────── */

const books = [
  '/midnight-verdict.jpeg',
  '/Beyond the Horizon.jpeg',
  '/Silicon Dreams.jpeg',
  '/The Last Oracle.jpeg',
  '/Whispers of Eden.jpeg',
  '/Roots-of-gold.jpeg',
  '/Rise and Conquer.jpg.jpeg',
  '/The Iron Crown.jpg.jpeg',
  '/Mind Unlocked.jpg.jpeg',
  "/Children's School Favourite Little Wonders.jpg.jpeg",
  '/The Dark Algorithm.jpeg',
  '/sacred ground.jpeg',
]

const bestItems = [
  { num: '01', title: 'Reach More Readers',      desc: 'A well-written, well-edited book gets recommended, shared, and found by the people looking for it.' },
  { num: '02', title: 'Build Lasting Sales',      desc: 'Good books keep selling long after launch, turning your story into an asset that keeps working.' },
  { num: '03', title: 'Earn Instant Authority',   desc: 'Being a published author tells clients and event organisers you know your field before you say a word.' },
  { num: '04', title: 'Open New Doors',           desc: 'Speaking invites, interviews, and partnerships often start with a book on someone\'s desk.' },
  { num: '05', title: 'Build on Every Book',      desc: 'Your first book grows an audience that follows you to everything you create next.' },
]

const services = [
  { Icon: PenLine,    title: 'Ghostwriting',                   desc: 'Your ideas and stories, written in your voice from the first page to the last.',                  bullets: ['Experienced writers', 'In-depth interviews', 'Original content', 'Full confidentiality'] },
  { Icon: SpellCheck, title: 'Book Editing',                   desc: 'Our manuscript editing services improve structure, clarity, and flow without changing who you are as a writer.', bullets: ['Developmental editing', 'Line and copy editing', 'Final proofreading', 'Tracked changes'] },
  { Icon: Palette,    title: 'Cover Design',                   desc: 'Covers that stand out in a crowded search page and on a bookstore shelf.',                        bullets: ['Original concepts', 'Revision rounds', 'Full ownership', 'Print and eBook ready'] },
  { Icon: Megaphone,  title: 'Book Marketing',                 desc: 'Plans built around your goals, from launch campaigns to long-term brand building.',               bullets: ['Experienced marketers', 'Launch strategy', 'Personalized plan', 'Clear reporting'] },
  { Icon: Headphones, title: 'Audiobooks',                     desc: 'Professional narration that lets readers enjoy your book on the go.',                             bullets: ['Professional narrators', 'Audible-ready files', 'Studio-quality sound', 'Full ownership'] },
  { Icon: BookOpen,   title: 'Book Publishing',                desc: 'Publishing on Amazon, Apple Books, Barnes & Noble, and more, all under your name.',               bullets: ['Major platforms', 'ISBN registration', 'Full ownership', 'Launch support'] },
  { Icon: BarChart2,  title: 'Digital Marketing',              desc: "Online campaigns that grow your book's visibility and your author brand.",                        bullets: ['SEO and social media', 'Ad campaigns', 'Performance reports', 'Brand growth'] },
  { Icon: Users,      title: 'Author Marketing',               desc: 'A personal brand that keeps readers following you from one book to the next.',                    bullets: ['Brand strategy', 'Media outreach', 'Speaking opportunities', 'Audience building'] },
  { Icon: Newspaper,  title: 'Article Writing & Publishing',   desc: 'Thoughtful articles that show readers and clients you know your field.',                          bullets: ['Expert writers', 'SEO friendly', 'Publishing support', 'Written in your voice'] },
  { Icon: Rss,        title: 'Blog Writing',                   desc: 'Regular blog content that brings readers to your website and keeps them coming back.',            bullets: ['Consistent posts', 'SEO friendly', 'Your tone and voice', 'Research included'] },
  { Icon: Video,      title: 'Book Trailer',                   desc: 'Short videos that give readers a taste of your story and build excitement.',                      bullets: ['Professional production', 'Script writing', 'Social-ready formats', 'Amazon-ready version'] },
  { Icon: Briefcase,  title: 'Business Proposal Writing',      desc: 'Clear, persuasive proposals that help you win the deal.',                                         bullets: ['Expert writers', 'Tailored structure', 'Revision rounds', 'Polished presentation'] },
  { Icon: BookMarked, title: 'Children Book Publication',      desc: 'Complete publishing for picture books and young readers, from artwork to distribution.',          bullets: ['Full publishing', 'Age-appropriate content', 'Major platforms', 'Complete ownership'] },
  { Icon: Layers,     title: "Children's Book Illustrations",  desc: "Original artwork that brings young readers' favourite characters to life.",                       bullets: ['Custom artwork', 'Multiple styles', 'Sketch approval', 'Print and digital files'] },
  { Icon: Code,       title: 'Web Content Writing',            desc: 'Website copy that turns visitors into readers, clients, and fans.',                               bullets: ['SEO friendly', 'Clear calls to action', 'Brand voice', 'Upload support'] },
  { Icon: Monitor,    title: 'Author Website Design',          desc: 'A professional home online for your books and your brand.',                                        bullets: ['Custom design', 'Mobile friendly', 'SEO ready', 'Easy to update'] },
  { Icon: FileCheck,  title: "Children's Book Editing",        desc: 'Editing that keeps language, rhythm, and story just right for young readers.',                    bullets: ['Age-appropriate language', 'Read-aloud rhythm', 'Experienced editors', 'Gentle, clear feedback'] },
  { Icon: Printer,    title: 'Book Printing',                  desc: 'Professional print-on-demand and bulk copies of your finished book.',                             bullets: ['Premium quality', 'Print on demand', 'Bulk orders', 'Paperback and hardcover'] },
  { Icon: AlignLeft,  title: 'Formatting Services',            desc: "Clean interiors for print and eBook that meet every platform's standards.",                       bullets: ['Print and eBook', 'Platform-ready files', 'Clean layouts', 'Upload guidance'] },
  { Icon: Share2,     title: 'Book Promotion',                 desc: 'Targeted campaigns that build reviews, rankings, and steady sales.',                              bullets: ['Review campaigns', 'Ranking strategy', 'Social promotion', 'Long-term momentum'] },
]

const steps = [
  { num: '01', title: 'Free Consultation',   desc: "Tell us about your idea, your goals, and your timeline. We'll suggest the right path, with zero pressure." },
  { num: '02', title: 'Writing & Editing',   desc: 'Your writer captures your voice through relaxed interviews, and our professional book editors refine every chapter for clarity and flow.' },
  { num: '03', title: 'Design & Formatting', desc: 'Our designers create a standout cover and a clean interior for print and eBook.' },
  { num: '04', title: 'Publishing & Launch', desc: 'We publish under your name on major platforms and launch with a plan built around your goals.' },
]

const genres = [
  'Business & Economics', 'Memoir', 'Self-Help', 'Biography', 'Entrepreneurship',
  'Thought Leadership', 'Health & Fitness', 'Novel', 'Historical Fiction', 'Romance',
  'Action & Adventure', 'Fantasy', 'Drama', 'Cookbook', 'Poetry',
  "Children's", 'Political Thriller', 'Autobiography', 'Picture Book', 'Expert Guides',
]

const testimonials = [
  { name: 'James R.',   quote: "I had all the ideas, but I couldn't put them into a proper book form. This group has helped me put my ideas together in a way that I'm happy to share." },
  { name: 'Sarah M.',   quote: 'Indeed, the process of editing did make a huge impact on my work. My writing became more refined yet still very much me.' },
  { name: 'Michael T.', quote: 'I thought of sharing my professional experience through a book, but I was not sure how to begin. The assistance provided enabled me to go from concept to plan.' },
  { name: 'Laura B.',   quote: 'Communication has been crystal clear throughout the whole process. I loved the constructive criticism and effort to preserve my unique style of expression.' },
  { name: 'David P.',   quote: "Having support with the book's preparation made the whole process feel more manageable. I had a clearer direction and felt more confident about the next steps." },
]

const whyItems = [
  { Icon: Clock,   title: 'Your Time Back',                 desc: 'Writing a book takes time, so we help with the writing while you focus on your work and daily life.' },
  { Icon: Trophy,  title: 'Polished to Professional Standards', desc: 'Our writers, editors, and designers make sure your book reads and looks its very best.' },
  { Icon: Users,   title: 'One Team, Start to Finish',      desc: 'We handle writing, editing, publishing, and marketing in one place, keeping things simple from start to finish.' },
  { Icon: Mic,     title: 'Your Voice, Your Book',          desc: 'We get to know how you think and speak so your book sounds like you.' },
]

const LP2_SERVICES = [
  'Ghostwriting',
  'Book Editing',
  'Cover Design',
  'Publishing',
  'Book Marketing',
  'Audiobooks',
  "Children's Books",
  'Other Services',
  'Not Sure Yet',
]

/* ─── Contact Form ───────────────────────────────────────────── */

function ContactForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({ cn: '', em: '', pn: '', service: '', msg: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/lp2-form', {
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

  const inputCls = 'w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors placeholder:text-slate-400 text-slate-800'

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-8 gap-3 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle size={24} className="text-green-500" />
        </div>
        <p className="font-semibold text-brand-dark text-sm">Message sent! We&apos;ll be in touch within 1 business day.</p>
        <button
          onClick={() => { setStatus('idle'); setForm({ cn: '', em: '', pn: '', service: '', msg: '' }) }}
          className="text-xs text-primary underline"
        >
          Submit another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input type="text" required placeholder="Full Name *" value={form.cn} onChange={e => setForm({ ...form, cn: e.target.value })} className={inputCls} />
      <input type="email" required placeholder="Email Address *" value={form.em} onChange={e => setForm({ ...form, em: e.target.value })} className={inputCls} />
      <input type="tel" required placeholder="Phone Number *" value={form.pn} onChange={e => setForm({ ...form, pn: e.target.value })} className={inputCls} />
      <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className={inputCls}>
        <option value="">Select a service...</option>
        {LP2_SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
      {!compact && (
        <textarea required placeholder="Tell us about your book idea..." value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} rows={4} className={`${inputCls} resize-y`} />
      )}
      {status === 'error' && <p className="text-xs text-red-600 font-medium">Something went wrong. Please try again.</p>}
      <button
        type="submit" disabled={status === 'loading'}
        className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 rounded-xl shadow-lg shadow-cyan-100 transition-all disabled:opacity-60 text-sm"
      >
        {status === 'loading' ? 'Sending...' : 'Get My Free Call →'}
      </button>
    </form>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function LP2() {
  const [testIdx, setTestIdx] = useState(0)
  const marqueeBooks = [...books, ...books]

  useEffect(() => {
    const t = setInterval(() => setTestIdx(i => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes lp2-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .lp2-track { display:flex; gap:1rem; animation: lp2-marquee 24s linear infinite; width:max-content; }
        .lp2-track:hover { animation-play-state: paused; }
      ` }} />

      {/* ── Quote Bar ── */}
      <div className="bg-slate-50 border-b border-slate-100 py-2.5 text-center">
        <p className="text-xs text-brand-muted">
          Write your own book instead of reading someone else&apos;s book about success.{' '}
          <span className="text-primary font-semibold">— Herb Brooks</span>
        </p>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-white overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white to-slate-50/30 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#0891B2 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* Left */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white border border-cyan-200 shadow-sm rounded-full px-4 py-1.5 mb-6">
                <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} size={11} className="text-amber-400 fill-amber-400" />)}</div>
                <span className="text-xs font-semibold text-slate-700">Trusted by <strong className="text-primary">Authors, Founders, and Experts</strong></span>
              </div>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-black text-black leading-[1.1] mb-5">
                Turn Your Expertise Into{' '}
                <span className="text-primary">a Published Book</span>
              </h1>
              <p className="text-brand-body text-lg leading-relaxed mb-8 max-w-xl">
                From ghostwriting and book editing services to publishing and marketing, The Author Success takes care of every step, so your story reaches readers in your voice and under your name.
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5 mb-8 w-full">
                {['100% of Royalties Stay Yours', 'Available on Major Platforms', 'Every Page Carefully Edited', 'NDA Signed Before We Start', 'One Dedicated Project Manager', 'Real People, Real Support'].map(item => (
                  <div key={item} className="flex items-center justify-center lg:justify-start gap-2 text-sm font-medium text-brand-dark-2">
                    <CheckCircle size={15} className="text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-xs text-brand-muted">
                Free 15-minute call &middot; For authors, entrepreneurs &amp; experts &middot; No obligation
              </p>
            </div>

            {/* Right — Form */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/60 p-7">
              <div className="flex items-center justify-between mb-1">
                <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-brand-dark">
                  Book Your Free 15-Min Strategy Call
                </h2>
                <span className="text-xs bg-green-100 text-green-700 font-semibold px-2.5 py-1 rounded-full">&#9679; Live</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4 mt-2">
                {['Free · No Commitment', 'Fiction & Non-Fiction', '15 Minutes'].map(tag => (
                  <span key={tag} className="text-[11px] text-brand-muted bg-slate-100 rounded-full px-2.5 py-0.5">{tag}</span>
                ))}
              </div>
              <p className="text-brand-muted text-xs mb-4 leading-relaxed">
                Share a few details, and a publishing specialist will reach out to schedule your call.
              </p>
              <ContactForm compact />
              <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-slate-100">
                <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-amber-400 fill-amber-400" />)}</div>
                <span className="text-xs text-slate-400">Trusted by authors, founders, and experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Books Marquee ── */}
      <section className="bg-slate-50 py-16 overflow-hidden border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-1">Our Work</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-brand-dark">Proud Published Work</h2>
        </div>
        <div className="overflow-hidden px-4">
          <div className="lp2-track">
            {marqueeBooks.map((src, i) => (
              <div key={i} className="shrink-0 w-40">
                <Image src={src} alt="Book cover" width={160} height={240}
                  className="w-40 h-60 object-cover rounded-xl shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why It Matters + How It Works ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Perks */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-2">What You Gain</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-black text-black leading-tight mb-8">
                How One Book Grows Your{' '}
                <span className="text-primary">Name and Business</span>
              </h2>
              <div className="flex flex-col gap-3">
                {bestItems.map(({ num, title, desc }) => (
                  <div key={num} className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex gap-4 items-start hover:border-cyan-200 hover:shadow-sm transition-all">
                    <span className="text-xs font-bold text-primary tracking-widest mt-0.5 shrink-0">{num}</span>
                    <div>
                      <div className="font-semibold text-brand-dark mb-1 text-sm">{title}</div>
                      <div className="text-brand-muted text-sm leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-2">Our Approach</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-black text-black leading-tight mb-8">
                Idea to Author,{' '}
                <span className="text-primary">Made Easy</span>
              </h2>
              <div className="flex flex-col gap-4">
                {steps.map(({ num, title, desc }, i) => (
                  <div key={num} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0">{num}</div>
                      {i < steps.length - 1 && <div className="w-px flex-1 bg-cyan-100 mt-2 min-h-[2rem]" />}
                    </div>
                    <div className="pb-4">
                      <div className="font-semibold text-brand-dark mb-1">{title}</div>
                      <div className="text-brand-muted text-sm leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-cyan-200 transition-all text-sm mt-6"
              >
                Get Started <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-2">How We Help</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-black text-black mb-3">
              Every Service Your Book{' '}
              <span className="text-primary">Will Ever Need</span>
            </h2>
            <p className="text-brand-muted max-w-xl mx-auto">From first draft to launch day and beyond, every service your book needs lives under one roof.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
            {services.map(({ Icon, title, desc, bullets }) => (
              <div key={title} className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-1 transition-all group flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Icon size={18} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-brand-dark mb-2">{title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">{desc}</p>
                <ul className="flex flex-col gap-1.5 w-full">
                  {bullets.map(b => (
                    <li key={b} className="text-xs text-brand-muted flex items-center justify-center sm:justify-start gap-2">
                      <CheckCircle size={13} className="text-primary shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-cyan-200 transition-all">
              Book a Free Call <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-primary text-brand-dark font-bold px-7 py-4 rounded-full transition-all">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-black text-white mb-4">
            Ready for a Book That Grows Your Business?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Authors, entrepreneurs, and experts come to The Author Success for help turning their ideas into books they&apos;re proud to call their own.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#contact" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 font-bold px-8 py-4 rounded-full shadow-lg transition-colors text-primary">
              Let&apos;s Work Together <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-transparent border-2 border-white/60 hover:border-white text-white font-bold px-7 py-4 rounded-full transition-colors">
              Book a Free Call
            </a>
          </div>
          <p className="mt-4 text-white/50 text-xs">
            Free 15-minute strategy call &middot; No obligation
          </p>
        </div>
      </section>

      {/* ── Genres ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-2">Every Genre</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-black text-black mb-4">
                Every Genre,{' '}
                <span className="text-primary">One Trusted Team</span>
              </h2>
              <p className="text-brand-muted leading-relaxed mb-8">
                From business books and memoirs to novels and picture books, we work across every genre. Fiction writers get novel proofreading services that catch every last slip, while experts get writing and editing that make their ideas shine.
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {genres.map(g => (
                  <span key={g} className="px-3.5 py-1.5 border border-slate-200 hover:border-primary hover:text-primary hover:bg-cyan-50 rounded-full text-sm text-brand-muted transition-all cursor-default">
                    {g}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {books.slice(0, 4).map((src, i) => (
                <Image key={i} src={src} alt="Book cover" width={200} height={300}
                  className="w-full h-auto rounded-xl shadow-lg"
                  style={{ transform: i % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)' }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-black text-black">
              Why Authors and Experts{' '}
              <span className="text-primary">Choose Us</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyItems.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md hover:border-cyan-200 transition-all">
                <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-brand-dark mb-2 text-sm">{title}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-2">Author Reviews</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-black text-black">Authors Who <span className="text-primary">Trusted Us</span></h2>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10">
            <div className="flex mb-4">{[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-amber-400 fill-amber-400" />)}</div>
            <p className="text-brand-dark text-lg leading-relaxed mb-6 font-medium italic">
              &ldquo;{testimonials[testIdx].quote}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-sm shrink-0">
                {testimonials[testIdx].name[0]}
              </div>
              <span className="font-semibold text-brand-dark">{testimonials[testIdx].name}</span>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setTestIdx(i)}
                className={`w-2.5 h-2.5 rounded-full border-none transition-colors ${i === testIdx ? 'bg-primary' : 'bg-slate-300'}`}
              />
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={() => setTestIdx(i => (i - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-primary hover:text-primary text-brand-muted flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setTestIdx(i => (i + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-slate-200 hover:border-primary hover:text-primary text-brand-muted flex items-center justify-center transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#089bb2' }}>
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70 mb-2">Let&apos;s Talk</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
                Ready to Become a Published Author?
              </h2>
              <p className="text-white/80 leading-relaxed mb-2">
                For authors, entrepreneurs, and experts with a book idea at any stage. Share a few details, and a publishing specialist will reach out to plan a free 15-minute call.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                On the call, we&apos;ll learn about your book, recommend the right services, and answer your questions. No preparation needed, no commitment required.
              </p>
              <ul className="flex flex-col gap-3 w-full">
                {['Ghostwriting, editing, and publishing', 'Writing to marketing, under one roof', 'Book editing services for every stage', 'You keep 100% of your rights'].map(point => (
                  <li key={point} className="flex items-center justify-center lg:justify-start gap-3 text-white text-sm">
                    <CheckCircle size={16} className="text-white shrink-0" /> {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-brand-dark mb-1">Tell Us About Your Book</h3>
              <p className="text-brand-muted text-xs mb-5">A publishing specialist will be in touch soon.</p>
              <ContactForm />
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mt-4 pt-4 border-t border-slate-100 text-xs text-brand-muted">
                <span>Call <a href="tel:+13073166909" className="text-primary font-semibold hover:underline">+1 (307) 316-6909</a></span>
                <span>Email <a href="mailto:Support@theauthorsuccess.com" className="text-primary font-semibold hover:underline">Support@theauthorsuccess.com</a></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
