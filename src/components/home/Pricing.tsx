"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "Custom Quote",
    desc: "Ideal for new authors with a completed manuscript, ready to step gracefully into print.",
    highlight: false,
    features: [
      "Meticulous Copy Editing",
      "Bespoke Cover Design",
      "eBook Formatting",
      "Amazon KDP Publishing",
      "Author Central Setup",
      "Refinement Rounds Included",
    ],
    cta: "Begin My Journey",
  },
  {
    name: "Professional",
    price: "Custom Quote",
    desc: "Professional book publishing for devoted authors set to launch with distinction.",
    highlight: true,
    features: [
      "Ghostwriting or Comprehensive Editing",
      "Premium Cover Design",
      "Print & eBook Formatting",
      "Multi-Platform Distribution",
      "Amazon Launch Marketing",
      "Press Release",
      "Flexible Revisions",
      "Dedicated Project Steward",
    ],
    cta: "Publish My Book",
  },
  {
    name: "Premium",
    price: "Custom Quote",
    desc: "Our complete end-to-end publishing services for authors who accept nothing less than excellence.",
    highlight: false,
    features: [
      "Complete Ghostwriting",
      "Premium Cover & Interior Design",
      "Print, eBook & Audiobook Editions",
      "Global Distribution",
      "Sustained Marketing Campaign",
      "Social Media Strategy",
      "BookTok & Bookstagram Promotion",
      "Royalty Reporting",
    ],
    cta: "Choose Premium",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
            Pricing
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-black text-brand-dark mb-4">
            <span className="text-black">Deliberately Curated</span><br /><span className="text-primary">Publishing</span><span className="text-black"> Packages</span>
          </h2>
          <p className="text-brand-muted text-sm max-w-md mx-auto">
            No hidden fees. No royalty splits. Our book publishing services are offered with complete transparency, with bespoke quotes for more ambitious projects.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, ease: "easeOut", delay: i * 0.1 }}
              className={`relative rounded-3xl border overflow-hidden hover-lift ${
                plan.highlight
                  ? "bg-brand-dark border-brand-dark shadow-2xl shadow-slate-900/30 scale-[1.02]"
                  : "bg-white border-slate-200"
              }`}
            >
              {plan.highlight && (
                <div className="bg-primary text-white text-[10px] font-black uppercase tracking-widest text-center py-1.5">
                  ★ Most Popular Choice
                </div>
              )}

              <div className="p-7">
                <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.highlight ? "text-white/70" : "text-primary"}`}>
                  {plan.name}
                </div>
                <div className={`font-[family-name:var(--font-playfair)] text-4xl font-black mb-1 ${plan.highlight ? "text-white" : "text-brand-dark"}`}>
                  {plan.price}
                </div>
                <p className={`text-sm mb-6 leading-relaxed ${plan.highlight ? "text-white/75" : "text-brand-muted"}`}>
                  {plan.desc}
                </p>

                <div className="flex flex-col gap-3 mb-7">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-start gap-2.5">
                      <CheckCircle size={15} className={`shrink-0 mt-0.5 ${plan.highlight ? "text-white" : "text-primary"}`} />
                      <span className={`text-sm ${plan.highlight ? "text-slate-300" : "text-brand-dark-2"}`}>{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl text-sm transition-all ${
                    plan.highlight
                      ? "bg-white hover:bg-slate-50 text-primary shadow-lg"
                      : "bg-slate-50 hover:bg-slate-100 text-brand-dark border border-slate-200"
                  }`}
                >
                  {plan.cta} <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-xs text-brand-muted mt-7"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.3 }}
        >
          Envisioning something more distinctive?{" "}
          <Link href="/contact" className="text-primary font-semibold hover:underline">
            Request a bespoke quote →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
