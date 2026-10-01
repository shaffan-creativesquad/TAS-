import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import { FadeUp, SlideLeft, SlideRight } from "@/components/ui/Animate";
import BookCoversStrip from "@/components/ui/BookCoversStrip";

export const metadata: Metadata = {
  title: "Contact Us | The Author Success",
  description: "Get in touch for a free consultation with our publishing experts.",
};

const reasons = [
  "Free 30-minute consultation",
  "Response within 24 hours",
  "No commitment required",
  "NDA signed before we discuss your project",
];

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white to-slate-50/30 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp delay={0}><span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 block">Let&apos;s Talk</span></FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl font-black text-brand-dark leading-[1.1] mb-5">
              Get Your Free<br />
              <span className="text-gradient">Publishing Consultation</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="text-brand-body text-lg max-w-xl mx-auto mb-10">
              Fill out the form or reach out directly. Our publishing experts will respond within 24 hours.
            </p>
          </FadeUp>
          <FadeUp delay={0.28}>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted mb-5">Join 1,800+ Authors We&apos;ve Published</p>
              <BookCoversStrip count={6} width={68} />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-10 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[380px_1fr] gap-8 items-start">

            {/* ── LEFT: Info ── */}
            <SlideLeft>
              <div className="flex flex-col gap-5 lg:sticky lg:top-28">
                <div className="bg-brand-dark rounded-3xl p-7">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                    Book Your Free Strategy Call
                  </h3>
                  <p className="text-slate-400 text-sm mb-5">
                    Talk directly with a publishing expert who will give you an honest, personalised roadmap — at no cost.
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {reasons.map(r => (
                      <div key={r} className="flex items-center gap-2.5">
                        <CheckCircle size={14} className="text-primary shrink-0" />
                        <span className="text-slate-300 text-sm">{r}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-6 pt-6 border-t border-white/10">
                    <div className="flex">
                      {[1,2,3,4,5].map(i => <Star key={i} size={13} className="text-amber-400 fill-amber-400" />)}
                    </div>
                    <span className="text-slate-400 text-xs">4.9/5 · 1,200+ author reviews</span>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col gap-4">
                  {[
                    { icon: Phone, label: "Phone", value: "+1 (800) 123-4567", sub: "Mon–Fri, 9 AM–6 PM EST" },
                    { icon: Mail, label: "Email", value: "info@theauthorsuccess.com", sub: "Reply within 24 hours" },
                    { icon: MapPin, label: "Office", value: "123 Publishing Lane", sub: "New York, NY 10001" },
                    { icon: Clock, label: "Hours", value: "Mon–Fri: 9 AM – 6 PM", sub: "Eastern Standard Time" },
                  ].map(({ icon: Icon, label, value, sub }) => (
                    <div key={label} className="flex items-start gap-3.5">
                      <div className="w-9 h-9 bg-cyan-50 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={15} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-brand-dark text-xs uppercase tracking-wider">{label}</div>
                        <div className="text-brand-dark-2 text-sm font-medium">{value}</div>
                        <div className="text-brand-muted text-xs">{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle size={16} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-green-800 text-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse" />
                      Live Chat Available Now
                    </div>
                    <div className="text-green-600 text-xs">Chat with a publishing expert instantly</div>
                  </div>
                </div>
              </div>
            </SlideLeft>

            {/* ── RIGHT: Form ── */}
            <SlideRight delay={0.1}>
              <div className="bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-100 p-8 sm:p-10">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-brand-dark mb-1">
                  Send Us a Message
                </h2>
                <p className="text-brand-muted text-sm mb-7">
                  Tell us about your book and we&apos;ll put together a free custom publishing plan for you.
                </p>

                <form className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark-2 uppercase tracking-wider mb-2">First Name *</label>
                      <input
                        type="text" placeholder="John"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-primary focus:bg-white transition-colors placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark-2 uppercase tracking-wider mb-2">Last Name *</label>
                      <input
                        type="text" placeholder="Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-primary focus:bg-white transition-colors placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark-2 uppercase tracking-wider mb-2">Email Address *</label>
                      <input
                        type="email" placeholder="john@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark-2 uppercase tracking-wider mb-2">Phone Number</label>
                      <input
                        type="tel" placeholder="+1 (000) 000-0000"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark-2 uppercase tracking-wider mb-2">Service Needed *</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-500 focus:outline-none focus:border-primary focus:bg-white transition-colors">
                        <option value="">Select a service...</option>
                        {["Ghostwriting","Book Editing","Cover Design","Publishing","Book Marketing","Audiobooks","Full Package"].map(s => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark-2 uppercase tracking-wider mb-2">Budget Range</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-500 focus:outline-none focus:border-primary focus:bg-white transition-colors">
                        <option value="">Select range...</option>
                        {["Under $1,000","$1,000 – $3,000","$3,000 – $5,000","$5,000 – $10,000","$10,000+"].map(b => (
                          <option key={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark-2 uppercase tracking-wider mb-2">Book Genre</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-500 focus:outline-none focus:border-primary focus:bg-white transition-colors">
                      <option value="">Select genre...</option>
                      {["Thriller","Romance","Fantasy","Sci-Fi","Self-Help","Business","Memoir","Biography","Children's","Young Adult","Historical Fiction","Literary Fiction","Other"].map(g => (
                        <option key={g}>{g}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark-2 uppercase tracking-wider mb-2">Tell Us About Your Book</label>
                    <textarea
                      placeholder="Share your book concept, target audience, current progress, and any specific requirements..."
                      rows={5}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-primary focus:bg-white transition-colors placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white font-black py-4 rounded-xl shadow-lg shadow-cyan-100 transition-all text-[1rem] tracking-wide"
                  >
                    Send Message & Get Free Quote →
                  </button>

                  <p className="text-center text-xs text-brand-muted">
                    🔒 Your information is 100% secure and confidential. No spam, ever.
                  </p>
                </form>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL QUOTE ── */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4">
          <FadeUp>
            <div className="bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-sm">
              <div className="flex justify-center mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-amber-400 fill-amber-400" />)}
              </div>
              <blockquote className="font-[family-name:var(--font-playfair)] text-xl italic text-brand-dark mb-5 leading-relaxed">
                &quot;From the first call to launch day, The Author Success held my hand through the entire process. My book hit Amazon&apos;s Top 100 in week one — I couldn&apos;t have done it without their team.&quot;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-sm">
                  MR
                </div>
                <div className="text-left">
                  <div className="font-semibold text-brand-dark text-sm">Marcus Reid</div>
                  <div className="text-brand-muted text-xs">Author of &quot;The Ascent&quot; · Amazon Top 100</div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FAQ STRIP ── */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeUp>
            <p className="text-brand-muted text-sm">
              Have questions before reaching out?{" "}
              <Link href="/#faq" className="text-primary font-bold hover:underline">Check our FAQ</Link>
              {" "}or call us directly at{" "}
              <a href="tel:+18001234567" className="text-primary font-bold hover:underline">+1 (800) 123-4567</a>
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
