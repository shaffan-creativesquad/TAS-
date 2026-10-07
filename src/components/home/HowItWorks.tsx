"use client";

import Link from "next/link";
import { MessageSquare, FileText, Paintbrush2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Complimentary Consultation",
    desc: "Tell us about your vision, goals, and timeline. We'll put together a team and create a publishing plan that works for you.",
    color: "bg-primary",
    light: "bg-cyan-50",
    iconColor: "text-primary",
  },
  {
    num: "02",
    icon: FileText,
    title: "Writing & Editing",
    desc: "Our ghostwriters can write your manuscript, or our editors can help you polish your draft. We review each chapter with you to make sure your voice and vision stay at the center of your book.",
    color: "bg-[#1E3A5F]",
    light: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    num: "03",
    icon: Paintbrush2,
    title: "Design & Formatting",
    desc: "We design covers that stand out and format your book for print and all major eReaders, so it looks great wherever it's read.",
    color: "bg-[#7C3AED]",
    light: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Publish & Launch",
    desc: "This is when your book is published. Your work appears on Amazon and other top global platforms. We handle the launch, and you keep every royalty.",
    color: "bg-[#059669]",
    light: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#107c99" }}>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/60 mb-3 block">
            Our Process
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-black text-white mb-4">
            Idea to ISBN in Four Steps
          </h2>
          <p className="text-white/70 text-sm max-w-md mx-auto">
            We guide you through a clear, transparent process, so you always know where your book stands. Our end-to-end publishing services keep everything simple and easy to follow.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="relative"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, ease: "easeOut", delay: i * 0.1 }}
            >
              {/* Connector arrow (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-2.5 z-10 text-white/50 text-lg">›</div>
              )}

              <div className="bg-white/15 border border-white/25 rounded-2xl p-6 hover:bg-white/25 hover:border-white/40 transition-all h-full">
                {/* Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <step.icon size={20} className="text-white" />
                  </div>
                  <span className="font-[family-name:var(--font-playfair)] text-3xl font-black text-white/30">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          className="bg-white rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-brand-dark mb-1">
              Primed to Begin Your Publishing Journey?
            </h3>
            <p className="text-brand-muted text-sm">Join authors worldwide who have entrusted their stories to a book publishing company devoted to their success.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-primary text-white font-bold px-8 py-3.5 rounded-full hover:bg-primary-hover transition-colors shadow-lg whitespace-nowrap"
          >
            Publish My Book
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
