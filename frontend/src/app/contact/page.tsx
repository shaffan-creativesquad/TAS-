"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, X } from "lucide-react";
import Link from "next/link";
import { FadeUp, SlideLeft, SlideRight } from "@/components/ui/Animate";
import BookCoversStrip from "@/components/ui/BookCoversStrip";

const reasons = [
  "Free 30-minute call",
  "Quick, personal reply",
  "No pressure to commit",
  "NDA signed before project details",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", service: "", genre: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", phone: "", service: "", genre: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Success Popup */}
      {status === "success" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setStatus("idle")}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <X size={16} className="text-slate-500" />
            </button>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle size={32} className="text-green-500" />
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-brand-dark mb-3">
              Message Sent!
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              Thank you for reaching out. Our team will review your inquiry and get back to you within <strong className="text-brand-dark">24 hours</strong>.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <section className="relative pt-36 pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white to-slate-50/30 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp delay={0}><span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4 block">Contact Us</span></FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl font-black text-brand-dark leading-[1.1] mb-5">
              <span className="text-black">Let&apos;s Bring Your</span><br />
              <span className="text-primary">Book</span> <span className="text-black">to Life</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="text-brand-body text-lg max-w-xl mx-auto mb-10">
              Whether you have a finished manuscript or just an idea, our author consultation services help you find the right next step. Reach out, and we&apos;ll be in touch soon.
            </p>
          </FadeUp>
          <FadeUp delay={0.28}>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted mb-5">Stories We&apos;ve Brought to Life</p>
              <BookCoversStrip count={6} width={68} />
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-10 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[380px_1fr] gap-8 items-start">

            <SlideLeft>
              <div className="flex flex-col gap-5 lg:sticky lg:top-28">
                <div className="bg-brand-dark rounded-3xl p-7">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-2">
                    Book Your Free Strategy Call
                  </h3>
                  <p className="text-white/75 text-sm mb-5">
                    Get honest advice and a clear plan for your book from people who know publishing, at no cost.
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {reasons.map(r => (
                      <div key={r} className="flex items-center gap-2.5">
                        <CheckCircle size={14} className="text-white shrink-0" />
                        <span className="text-white/90 text-sm">{r}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-6 pt-6 border-t border-white/20">
                    <div className="flex">
                      {[1,2,3,4,5].map(i => <Star key={i} size={13} className="text-amber-300 fill-amber-300" />)}
                    </div>
                    <span className="text-white/75 text-xs">Trusted by authors, founders, and experts</span>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col gap-4">
                  {[
                    { icon: Phone, label: "Phone", value: "+1 (307) 316-6909", sub: "Mon–Fri, 9 AM–6 PM EST" },
                    { icon: Mail, label: "Email", value: "support@theauthorsuccess.com", sub: "We reply as soon as possible." },
                    { icon: MapPin, label: "Office", value: "123 Publishing Lane", sub: "New York, NY 10001" },
                    { icon: Clock, label: "Hours", value: "Mon–Fri: 9 AM – 5 PM", sub: "Eastern Standard Time" },
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

              </div>
            </SlideLeft>

            <SlideRight delay={0.1}>
              <div className="bg-white border border-slate-100 rounded-3xl shadow-xl shadow-slate-100 p-8 sm:p-10">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-brand-dark mb-1">
                  Share Your Book Idea
                </h2>
                <p className="text-brand-muted text-sm mb-7">
                  A few quick details help us prepare a free publishing plan that fits your goals.
                </p>

                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark-2 uppercase tracking-wider mb-2">First Name *</label>
                      <input
                        type="text" name="firstName" placeholder="Jane" required
                        value={form.firstName} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-primary focus:bg-white transition-colors placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark-2 uppercase tracking-wider mb-2">Last Name</label>
                      <input
                        type="text" name="lastName" placeholder="Smith"
                        value={form.lastName} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-primary focus:bg-white transition-colors placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark-2 uppercase tracking-wider mb-2">Email Address *</label>
                      <input
                        type="email" name="email" placeholder="jane@email.com" required
                        value={form.email} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-primary focus:bg-white transition-colors placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark-2 uppercase tracking-wider mb-2">Phone Number</label>
                      <input
                        type="tel" name="phone" placeholder="Your phone number"
                        value={form.phone} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-primary focus:bg-white transition-colors placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-dark-2 uppercase tracking-wider mb-2">Service Needed *</label>
                      <select
                        name="service" required
                        value={form.service} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      >
                        <option value="">Choose a service</option>
                        {["Ghostwriting", "Book Editing", "Cover Design", "Publishing & Distribution", "Book Marketing", "Audiobooks", "Children's Books", "Other Services", "Not Sure Yet"].map(s => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-dark-2 uppercase tracking-wider mb-2">Book Genre</label>
                      <select
                        name="genre"
                        value={form.genre} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      >
                        <option value="">Choose a genre</option>
                        {["Thriller", "Romance", "Fantasy", "Science Fiction", "Self-Help", "Business", "Memoir", "Biography", "Children's", "Young Adult", "Historical Fiction", "Literary Fiction", "Other"].map(g => (
                          <option key={g}>{g}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-dark-2 uppercase tracking-wider mb-2">What&apos;s Your Book About?</label>
                    <textarea
                      name="message"
                      placeholder="Tell us what your book is about, who it's for, and where you are in the process."
                      rows={5}
                      value={form.message} onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:border-primary focus:bg-white transition-colors placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-medium">
                      Something went wrong. Please try again or email us directly at support@theauthorsuccess.com
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-primary hover:bg-primary-hover text-white font-black py-4 rounded-xl shadow-lg shadow-cyan-100 transition-all text-[1rem] tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : "Get My Free Publishing Plan"}
                  </button>

                </form>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4">
          <FadeUp>
            <div className="bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-sm">
              <div className="flex justify-center mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-amber-400 fill-amber-400" />)}
              </div>
              <blockquote className="font-[family-name:var(--font-playfair)] text-xl italic text-brand-dark mb-5 leading-relaxed">
                &quot;The team made publishing feel a lot less overwhelming. They helped me get my ideas in order and guided me through each step of bringing my book to life.&quot;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-sm">
                  EC
                </div>
                <div className="text-left">
                  <div className="font-semibold text-brand-dark text-sm">Emily Carter</div>
                  <div className="text-brand-muted text-xs">Author</div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeUp>
            <p className="text-brand-muted text-sm">
              Still have questions?{" "}
              <Link href="/#faq" className="text-primary font-bold hover:underline">Browse our FAQ</Link>
              {" "}or call us at{" "}
              <a href="tel:+13073166909" className="text-primary font-bold hover:underline">+1 (307) 316-6909</a>
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
