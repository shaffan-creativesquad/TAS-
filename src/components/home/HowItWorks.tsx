"use client";

import Link from "next/link";
import { MessageSquare, FileText, Paintbrush2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Free Consultation",
    desc: "Tell us your book idea and goals. We assign your dedicated team and build a custom publishing roadmap tailored to your vision.",
    color: "bg-primary",
    light: "bg-red-50",
    iconColor: "text-primary",
  },
  {
    num: "02",
    icon: FileText,
    title: "Writing & Editing",
    desc: "Our ghostwriters craft or your editors refine the manuscript. Regular chapter-by-chapter reviews keep you in control throughout.",
    color: "bg-[#1E3A5F]",
    light: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    num: "03",
    icon: Paintbrush2,
    title: "Design & Formatting",
    desc: "Stunning cover design and professional interior formatting — print-ready and eBook optimized. Multiple concepts provided.",
    color: "bg-[#7C3AED]",
    light: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Publish & Launch",
    desc: "Your book goes live on Amazon and 40+ global platforms. We handle the launch strategy — you collect 100% of royalties.",
    color: "bg-[#059669]",
    light: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Subtle radial */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #DC2626 0%, transparent 50%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
            Our Process
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-black text-white mb-4">
            Idea to Bestseller in<br />4 Simple Steps
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            A transparent, guided process so you always know what&apos;s happening with your book.
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
                <div className="hidden lg:block absolute top-8 -right-2.5 z-10 text-slate-600 text-lg">›</div>
              )}

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-white/20 transition-all h-full">
                {/* Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <step.icon size={20} className="text-white" />
                  </div>
                  <span className="font-[family-name:var(--font-playfair)] text-3xl font-black text-white/10">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-1">
              Ready to Start Your Publishing Journey?
            </h3>
            <p className="text-red-200 text-sm">Join 1,800+ authors who trusted us with their story.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-white text-primary font-bold px-8 py-3.5 rounded-full hover:bg-red-50 transition-colors shadow-lg whitespace-nowrap"
          >
            Book Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
