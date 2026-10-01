"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Will my name be on the book if you ghostwrite it?",
    a: "Yes, absolutely. You are the author — your name goes on the cover, copyright page, and all publishing platforms. Our ghostwriters work completely behind the scenes, protected by a signed NDA.",
  },
  {
    q: "How long does the full publishing process take?",
    a: "Ghostwriting a full-length book takes 6–12 weeks. Editing takes 2–4 weeks, cover design 1–2 weeks, and publishing/distribution 1–2 weeks. Rush timelines are available for most services.",
  },
  {
    q: "Do I keep 100% of my book royalties?",
    a: "Yes. Once your book is live, all royalties are paid directly to your author account. We take nothing. You own your book completely — rights, royalties, and all.",
  },
  {
    q: "Which platforms will my book be on?",
    a: "We distribute to 40+ platforms — Amazon KDP, Barnes & Noble Press, Apple Books, Kobo, Google Play, Audible (ACX), Scribd, IngramSpark, and more.",
  },
  {
    q: "Can I see writing samples before committing?",
    a: "Absolutely. We provide portfolio samples, a sample chapter written in your genre, and a strategy call before any agreement. We want you 100% confident before we begin.",
  },
  {
    q: "What genres do you work with?",
    a: "All of them — thrillers, romance, fantasy, sci-fi, literary fiction, self-help, business, memoirs, biographies, children's books, academic, and more.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[380px_1fr] gap-14 items-start">
          {/* Left sticky header */}
          <motion.div
            className="lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3 block">
              FAQ
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-brand-dark mb-5 leading-tight">
              Questions?<br />We Have<br />Answers.
            </h2>
            <p className="text-brand-muted leading-relaxed text-sm mb-8">
              Everything you need to know before taking your first step toward publishing.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full text-sm shadow-lg shadow-cyan-200 hover:bg-primary-hover transition-colors"
            >
              Still have questions? Ask us
            </a>
          </motion.div>

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.75, ease: "easeOut", delay: i * 0.06 }}
                className={`rounded-2xl border overflow-hidden transition-colors ${
                  open === i ? "border-cyan-200 bg-white shadow-md shadow-cyan-50" : "border-slate-200 bg-white"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className={`font-semibold pr-4 text-[0.95rem] ${open === i ? "text-primary" : "text-brand-dark"}`}>
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    open === i ? "bg-primary text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-5 pb-5">
                        <p className="text-brand-muted text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
