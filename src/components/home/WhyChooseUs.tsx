"use client";

import Link from "next/link";
import { Shield, Lock, Users, Clock, Zap, Trophy, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const left = [
  { icon: Shield, title: "Complete Royalty Ownership", desc: "You keep full ownership of your book and all the money it earns. Every sale goes directly to you, with zero hidden fees." },
  { icon: Lock, title: "Absolute Confidentiality", desc: "Before we review your work, we sign a confidentiality agreement. Your story, ideas, and identity always belong to you." },
  { icon: Users, title: "A Devoted Team of Experts", desc: "Your team will include a writer, editor, designer, and marketer, all working together to make your book stand out." },
];
const right = [
  { icon: Clock, title: "Attentive Author Support", desc: "You can reach real, experienced people by chat, phone, or email whenever you have questions." },
  { icon: Zap, title: "Punctual, Polished Delivery", desc: "We fulfill assigned deadlines and deliver your book on time, without ever sacrificing quality." },
  { icon: Trophy, title: "A Distinguished Track Record", desc: "Whatever your genre or goals, our results speak for themselves. That’s why authors say we’re the self-publishing company that truly delivers." },
];

const bigStats = [
  { value: "All Genres", label: "We welcome every story.", sub: "" },
  { value: "Draft to Shelf", label: "We handle your entire publishing journey.", sub: "" },
  { value: "Your Royalties", label: "You always keep what you earn.", sub: "" },
  { value: "Global Reach", label: "Your book can reach readers everywhere.", sub: "" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
            Why Authors Trust Us
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-black text-brand-dark mb-4">
            <span className="text-black">We Don&apos;t Ghost.</span><br /><span className="text-primary">We Ghostwrite.</span>
          </h2>
          <p className="text-brand-muted max-w-lg mx-auto text-sm leading-relaxed">
            Authors from around the world have trusted our book publishing company with their most important ideas. Here&apos;s what makes us different.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-3 gap-5 mb-8">
          {/* Left features */}
          <div className="flex flex-col gap-4">
            {left.map((f, i) => (
              <motion.div
                key={f.title}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover-lift"
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, ease: "easeOut", delay: i * 0.1 }}
              >
                <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center mb-3">
                  <f.icon size={18} className="text-primary" />
                </div>
                <h4 className="font-semibold text-brand-dark mb-1 text-sm">{f.title}</h4>
                <p className="text-brand-muted text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Center: big dark card */}
          <motion.div
            className="bg-brand-dark rounded-3xl p-8 flex flex-col justify-between"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.95, ease: "easeOut", delay: 0.1 }}
          >
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Trophy size={22} className="text-white" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-3">
                The Complete Author Experience
              </h3>
              <p className="text-[#CFFAFE] text-sm leading-relaxed mb-6">
                Avoid the hassle of managing different freelancers. Our end-to-end publishing services bring everything together and guide you from your first draft to your book&apos;s worldwide release.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                "A dedicated project steward, start to finish",
                "We keep you informed at every important step",
                "You'll have opportunities to review and improve your book along the way",
                "We continue to support you even after your book is published",
              ].map(item => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-[#CFFAFE]">
                  <CheckCircle size={14} className="text-white shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-7 block bg-white hover:bg-slate-50 text-primary font-bold py-3 rounded-xl text-center text-sm transition-colors shadow-lg"
            >
              Publish My Book
            </Link>
          </motion.div>

          {/* Right features */}
          <div className="flex flex-col gap-4">
            {right.map((f, i) => (
              <motion.div
                key={f.title}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover-lift"
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, ease: "easeOut", delay: i * 0.1 }}
              >
                <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center mb-3">
                  <f.icon size={18} className="text-primary" />
                </div>
                <h4 className="font-semibold text-brand-dark mb-1 text-sm">{f.title}</h4>
                <p className="text-brand-muted text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden">
          {bigStats.map((s, i) => (
            <motion.div
              key={s.label}
              className="bg-white px-8 py-7 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: i * 0.08 }}
            >
              <div className="font-[family-name:var(--font-playfair)] text-3xl font-black text-primary mb-1">{s.value}</div>
              <div className="font-semibold text-black text-sm">{s.label}</div>
              <div className="text-xs text-brand-muted mt-0.5">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
