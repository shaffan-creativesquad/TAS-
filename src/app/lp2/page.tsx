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
]

const bestItems = [
  { num: '01', title: 'Attract More Readers', desc: 'When your name is on the bestseller list, readers searching for the best in your genre will find you first — every time.' },
  { num: '02', title: 'Generate More Sales', desc: 'Bestseller status compounds. The credibility it creates drives sales long after launch, turning your book into a perpetual business asset.' },
  { num: '03', title: 'Established Authority', desc: "A published book communicates depth of knowledge and genuine commitment to your field. Readers, clients, and event organizers take it seriously before you've said a word." },
  { num: '04', title: 'A Foundation That Compounds', desc: "Your first book builds relationships and an audience that carry forward into everything you create next. You're not starting from zero again." },
  { num: '05', title: 'Enjoy the Spotlight', desc: 'Bestseller status opens stages, media, and speaking opportunities that let you quote your own price for your expertise.' },
]

const services = [
  { Icon: PenLine,    title: 'Ghostwriting',                   desc: 'We capture your voice and write every word — so the book sounds exactly like you.',              bullets: ['Qualified writers', 'In-depth interviews', '100% unique content', 'Full confidentiality'] },
  { Icon: SpellCheck, title: 'Book Editing',                   desc: 'Our editors improve structure, clarity, and flow to professional publishing standards.',          bullets: ['Structural editing', 'Copyediting & proofread', 'Fast turnaround', '100% error-free'] },
  { Icon: Palette,    title: 'Cover Design',                   desc: 'World-class cover design that makes your book impossible to ignore on any shelf.',                bullets: ['3-5 original proofs', 'Up to 5 revisions', 'Full ownership', 'Print & digital ready'] },
  { Icon: Megaphone,  title: 'Book Marketing',                 desc: "Targeted strategies tailored to each author's goals — from launch campaigns to brand building.",   bullets: ['Experienced marketers', '24/7 support', 'Result-driven', 'Personalized plan'] },
  { Icon: Headphones, title: 'Audiobooks',                     desc: 'Studio-quality audiobook production that brings your words to life for listeners everywhere.',    bullets: ['Professional narration', 'ACX & Audible ready', 'Fast turnaround', 'Full ownership'] },
  { Icon: BookOpen,   title: 'Book Publishing',                desc: 'End-to-end publishing on Amazon, Audible, Apple Books, Barnes & Noble, and more.',               bullets: ['All major platforms', 'ISBNs registered', 'Complete ownership', 'Fast launch'] },
  { Icon: BarChart2,  title: 'Digital Marketing',              desc: 'Data-driven digital campaigns that grow your author brand and book visibility online.',           bullets: ['SEO & social media', 'Ad campaigns', 'Analytics reporting', 'Brand growth'] },
  { Icon: Users,      title: 'Author Marketing',               desc: 'Build your personal brand as an author with strategies tailored to your audience and goals.',     bullets: ['Brand strategy', 'Media outreach', 'Speaking opps', 'Audience building'] },
  { Icon: Newspaper,  title: 'Article Writing & Publishing',   desc: 'Professional articles that position you as a thought leader in your industry.',                   bullets: ['Expert writers', 'SEO optimized', 'Publishing support', 'Quick turnaround'] },
  { Icon: Rss,        title: 'Blog Writing',                   desc: 'Engaging blog content that builds your audience and drives traffic to your platform.',            bullets: ['Consistent content', 'SEO friendly', 'Your tone & voice', 'Research included'] },
  { Icon: Video,      title: 'Book Trailer',                   desc: 'Compelling video trailers that capture attention and drive pre-orders for your book.',            bullets: ['Professional production', 'Script writing', 'Social media ready', 'Fast delivery'] },
  { Icon: Briefcase,  title: 'Business Proposal Writing',      desc: 'Polished, persuasive proposals that win clients and communicate your value clearly.',             bullets: ['Expert writers', 'Custom templates', 'Revision rounds', 'Fast turnaround'] },
  { Icon: BookMarked, title: 'Children Book Publication',      desc: "End-to-end publishing for children's books — from illustrations to global distribution.",        bullets: ['Full publishing', 'Age-appropriate', 'All platforms', 'Complete ownership'] },
  { Icon: Layers,     title: "Children's Book Illustrations",  desc: "Vibrant, professionally crafted illustrations that bring your children's book to life.",         bullets: ['Custom artwork', 'Multiple styles', 'Revision rounds', 'Print & digital'] },
  { Icon: Code,       title: 'Web Content Writing',            desc: 'Compelling website copy that converts visitors into readers, clients, and fans.',                 bullets: ['SEO optimized', 'Conversion focused', 'Brand voice', 'Fast delivery'] },
  { Icon: Monitor,    title: 'Author Website Design',          desc: 'Beautiful, professional author websites that showcase your books and build your brand.',          bullets: ['Custom design', 'Mobile responsive', 'SEO ready', 'Easy to manage'] },
  { Icon: FileCheck,  title: "Children's Book Editing",        desc: "Specialized editing ensuring age-appropriate language and an engaging narrative for young readers.", bullets: ['Age-appropriate', 'Flow & pacing', 'Expert editors', 'Fast turnaround'] },
  { Icon: Printer,    title: 'Book Printing',                  desc: 'High-quality print-on-demand and bulk printing options for your published book.',                bullets: ['Premium quality', 'POD & bulk', 'Fast shipping', 'Global reach'] },
  { Icon: AlignLeft,  title: 'Formatting Services',            desc: 'Professional interior formatting for print and digital editions that meet platform standards.',   bullets: ['Print & eBook', 'Platform compliant', 'Clean layouts', 'Fast turnaround'] },
  { Icon: Share2,     title: 'Book Promotion',                 desc: 'Strategic promotional campaigns that drive reviews, rankings, and long-term book sales.',        bullets: ['Review campaigns', 'Ranking strategies', 'Social promotion', 'Long-term results'] },
]

const steps = [
  { num: '01', title: 'Free Consultation',     desc: 'Tell us your idea, your goals, and your timeline. We map the right path forward — no pressure, no commitment.' },
  { num: '02', title: 'Writing & Development', desc: 'Your dedicated writer captures your voice through structured interviews. You review and shape every chapter.' },
  { num: '03', title: 'Editing & Design',      desc: 'Our editors refine structure, clarity, and flow. Our designers craft a cover and layout built to professional standards.' },
  { num: '04', title: 'Publishing & Launch',   desc: 'We distribute to all major platforms under your name and execute a launch strategy built around your specific goals.' },
]

const genres = [
  'Business & Economics', 'Memoir', 'Self Help', 'Biography', 'Entrepreneurship',
  'Thought Leadership', 'Health & Fitness', 'Novel', 'Historical Fiction', 'Romance',
  'Action & Adventure', 'Fantasy', 'Drama', 'Cookbook', 'Poetry',
  "Children's", 'Political Thriller', 'Autobiography', 'Picture Book', 'Expert Guides',
]

const testimonials = [
  { name: 'Sarma M.',   quote: "I can say with 100% honesty that it was great every step of the way. If you said 'just tell me what we could have done better,' I'd say: I don't know. I can't think of anything." },
  { name: 'Adam S.',    quote: "As soon as I made the commitment to publish this book with The Author Success and just see it through, as soon as that contract was signed, everything else opened up." },
  { name: 'Rich K.',    quote: "I wasn't a 'writer.' The Author Success turned years of workshops into a clear book — and the book turned into credibility, revenue, and relationships I couldn't have reached any other way." },
  { name: 'Elijah M.', quote: "The launch strategy The Author Success built for me was exceptional. New business started coming in immediately after launch — and it kept coming." },
  { name: 'Victor H.', quote: "Something I can tell you now — I am crazily thinking about writing a second book. There's no way, if the process wasn't anything but great, that I would say I want to do this again." },
]

const whyItems = [
  { Icon: Clock,   title: 'Save Time & Focus',      desc: 'Writing a book takes hundreds of hours. We handle every word so you can focus on what you do best.' },
  { Icon: Trophy,  title: 'Professional Quality',   desc: 'Our writers, editors, and designers are industry veterans — your book will look and read like a bestseller.' },
  { Icon: Users,   title: 'One Team, Full Service', desc: 'From writing to publishing to marketing — everything handled under one roof. No gaps, no surprises.' },
  { Icon: Mic,     title: 'Your Voice, Your Book',  desc: 'We study how you speak and think. The finished book sounds exactly like you — just professionally written.' },
]

const LP2_SERVICES = [
  'Book Publishing',
  'Ghostwriting / Book Writing',
  'Book Coaching (Guided Author)',
  'Book Marketing',
  'Audiobook Production',
  'Other',
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
        {status === 'loading' ? 'Sending...' : 'Submit Now →'}
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
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-cyan-200 shadow-sm rounded-full px-4 py-1.5 mb-6">
                <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} size={11} className="text-amber-400 fill-amber-400" />)}</div>
                <span className="text-xs font-semibold text-slate-700">Trusted by <strong className="text-primary">3,000+</strong> Authors Worldwide</span>
              </div>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-black text-black leading-[1.1] mb-5">
                We Make Your Book Publishing Experience{' '}
                <span className="text-primary">Seamless &amp; Professional</span>
              </h1>
              <p className="text-brand-body text-lg leading-relaxed mb-8 max-w-xl">
                From ghostwriting to global distribution — The Author Success handles every step so your story reaches the world, in your voice, under your name.
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
                {['You Keep All Your Royalties', 'Featured on Leading Global Platforms', 'Careful Editing for Every Sentence', 'Your Ideas Stay Confidential', 'A Dedicated Project Manager', 'Unwavering, Human Support'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium text-brand-dark-2">
                    <CheckCircle size={15} className="text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-xs text-brand-muted">
                Free 15-minute call &middot; For entrepreneurs, executives &amp; experts &middot; Response within 1 business day
              </p>
            </div>

            {/* Right — Form */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/60 p-7">
              <div className="flex items-center justify-between mb-1">
                <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-brand-dark">
                  Book a Free 15-Min Strategy Call
                </h2>
                <span className="text-xs bg-green-100 text-green-700 font-semibold px-2.5 py-1 rounded-full">&#9679; Live</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4 mt-2">
                {['Free · No commitment', 'For executives & experts', '15 minutes'].map(tag => (
                  <span key={tag} className="text-[11px] text-brand-muted bg-slate-100 rounded-full px-2.5 py-0.5">{tag}</span>
                ))}
              </div>
              <p className="text-brand-muted text-xs mb-4 leading-relaxed">
                Fill out the form and a publishing strategist will reach out within <strong className="text-brand-dark">1 business day</strong> to schedule your call.
              </p>
              <ContactForm compact />
              <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-slate-100">
                <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-amber-400 fill-amber-400" />)}</div>
                <span className="text-xs text-slate-400">4.9 / 5 from 1,200+ author reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Books Marquee ── */}
      <section className="bg-slate-50 py-16 overflow-hidden border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-1">Our Work</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-brand-dark">Books We&apos;ve Published</h2>
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
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-2">Why It Matters</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-black text-black leading-tight mb-8">
                What a Published Book{' '}
                <span className="text-primary">Opens Up for You</span>
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
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-2">How It Works</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-black text-black leading-tight mb-8">
                From Idea to{' '}
                <span className="text-primary">Published Book</span>
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
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-2">What We Do</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-black text-black mb-3">
              Everything You Need,{' '}
              <span className="text-primary">Under One Roof</span>
            </h2>
            <p className="text-brand-muted max-w-xl mx-auto">From your first draft to your bestseller launch — we handle every step.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
            {services.map(({ Icon, title, desc, bullets }) => (
              <div key={title} className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-1 transition-all group">
                <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Icon size={18} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-brand-dark mb-2">{title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">{desc}</p>
                <ul className="flex flex-col gap-1.5">
                  {bullets.map(b => (
                    <li key={b} className="text-xs text-brand-muted flex items-center gap-2">
                      <CheckCircle size={13} className="text-primary shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-cyan-200 transition-all">
              Book a Free Consult <ArrowRight size={16} />
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
            Ready to Publish a Book That Works as Hard as You Do?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Join 3,000+ entrepreneurs, executives, and experts who trusted The Author Success to bring their book to life.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#contact" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 font-bold px-8 py-4 rounded-full shadow-lg transition-colors text-primary">
              Let&apos;s Work Together <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-transparent border-2 border-white/60 hover:border-white text-white font-bold px-7 py-4 rounded-full transition-colors">
              Book a Free Consult
            </a>
          </div>
          <p className="mt-4 text-white/50 text-xs">
            Free 15-minute strategy call &middot; Response within 1 business day
          </p>
        </div>
      </section>

      {/* ── Genres ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-2">Every Genre</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-black text-black mb-4">
                The Genres Available{' '}
                <span className="text-primary">at Your Service</span>
              </h2>
              <p className="text-brand-muted leading-relaxed mb-8">
                The Author Success is known for publishing a wide variety of genres — from business books and memoirs to novels and expert guides.
              </p>
              <div className="flex flex-wrap gap-2">
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
              Why Authors Choose{' '}
              <span className="text-primary">The Author Success</span>
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
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-2">What Our Authors Say</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-black text-black">In Their <span className="text-primary">Words</span></h2>
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
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70 mb-2">Get in Touch</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
                Ready to Take the Next Step?
              </h2>
              <p className="text-white/80 leading-relaxed mb-2">
                For entrepreneurs, executives, and experts with a book idea — at any stage. Fill out the form and a publishing specialist will reach out within{' '}
                <strong className="text-white">1 business day</strong> to schedule a free 15-minute strategy call.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                On the call: we&apos;ll learn about your book, recommend the right service tier, and answer any questions — no preparation needed, no commitment required.
              </p>
              <ul className="flex flex-col gap-3">
                {['Expert ghostwriting & publishing', 'End-to-end — writing to marketing', '3,000+ authors published', 'You keep 100% of your rights'].map(point => (
                  <li key={point} className="flex items-center gap-3 text-white text-sm">
                    <CheckCircle size={16} className="text-white shrink-0" /> {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-brand-dark mb-1">Let&apos;s Talk About Your Book</h3>
              <p className="text-brand-muted text-xs mb-5">A publishing strategist will reach out within 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
