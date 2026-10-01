"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$999",
    desc: "Perfect for first-time authors with a manuscript ready.",
    highlight: false,
    features: [
      "Copy Editing (up to 60k words)",
      "Cover Design (3 concepts)",
      "eBook Formatting",
      "Amazon KDP Publishing",
      "Author Central Setup",
      "2 Revision Rounds",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$2,999",
    desc: "The complete package for serious authors ready to launch big.",
    highlight: true,
    features: [
      "Ghostwriting OR Full Editing",
      "Premium Cover Design",
      "Print & eBook Formatting",
      "40+ Platform Distribution",
      "Amazon Launch Marketing",
      "Press Release",
      "Unlimited Revisions",
      "Dedicated Project Manager",
    ],
    cta: "Most Popular — Start Now",
  },
  {
    name: "Premium",
    price: "$6,999",
    desc: "Full end-to-end service for authors who want the absolute best.",
    highlight: false,
    features: [
      "Complete Ghostwriting",
      "Premium Cover + Interior Design",
      "Print, eBook & Audiobook",
      "Global Distribution (40+ platforms)",
      "6-Month Marketing Campaign",
      "Social Media Strategy",
      "BookTok & Bookstagram",
      "Monthly Royalty Reporting",
    ],
    cta: "Get Premium",
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
            Simple, Transparent<br />Publishing Packages
          </h2>
          <p className="text-brand-muted text-sm max-w-md mx-auto">
            No hidden fees. No royalty splits. Custom quotes available for larger projects.
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
                <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.highlight ? "text-red-400" : "text-primary"}`}>
                  {plan.name}
                </div>
                <div className={`font-[family-name:var(--font-playfair)] text-4xl font-black mb-1 ${plan.highlight ? "text-white" : "text-brand-dark"}`}>
                  {plan.price}
                </div>
                <p className={`text-sm mb-6 leading-relaxed ${plan.highlight ? "text-slate-400" : "text-brand-muted"}`}>
                  {plan.desc}
                </p>

                <div className="flex flex-col gap-3 mb-7">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-primary shrink-0 mt-0.5" />
                      <span className={`text-sm ${plan.highlight ? "text-slate-300" : "text-brand-dark-2"}`}>{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl text-sm transition-all ${
                    plan.highlight
                      ? "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-red-900/40"
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
          Need something custom?{" "}
          <Link href="/contact" className="text-primary font-semibold hover:underline">
            Contact us for a custom quote →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
