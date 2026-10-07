"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Will my name appear on the book if you ghostwrite it?",
    a: "Unequivocally, yes. You are the author in every sense. Your name graces the cover, the copyright page and every retail listing. Our ghostwriters work discreetly behind the scenes, bound by a signed NDA, so the credit remains entirely yours.",
  },
  {
    q: "How long does it take to publish a book?",
    a: "The answer to how long does it take to publish a book depends on where your manuscript begins. Refining a completed draft moves more swiftly than composing a book from inception, but most projects span three to six months from consultation to launch. Your project steward will share a precise timeline at the outset, so you're never left wondering.",
  },
  {
    q: "Do I retain the royalties from my book?",
    a: "Entirely. As a self publishing company, we never claim a share of your sales. Your book, your rights and your earnings remain yours, now and always.",
  },
  {
    q: "On which platforms will my book appear?",
    a: "Wherever discerning readers browse: Amazon, Barnes & Noble, Apple Books, Audible, Kobo, Google Play and other leading retailers, so your work reaches an audience across the globe.",
  },
  {
    q: "May I review writing samples before committing?",
    a: "Of course. Choosing the right writer is a deeply personal decision. During your complimentary consultation, we'll share samples that reflect your genre and style, so you can proceed with complete confidence.",
  },
  {
    q: "Which genres do you specialize in?",
    a: "Virtually every genre: thriller, romance, fantasy, science fiction, memoir, self-help, business, children's literature, historical fiction, true crime and literary fiction. If your story is waiting to be told, our book publishing agency has the expertise to tell it beautifully.",
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
              Answers Before<br /><span className="text-primary">You Sign</span><br />Anything.
            </h2>
            <p className="text-brand-muted leading-relaxed text-sm mb-8">
              Everything you should know before you publish my book: clear, candid answers for the journey ahead.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full text-sm shadow-lg shadow-cyan-200 hover:bg-primary-hover transition-colors"
            >
              Still Curious? Ask Us
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
