"use client";

import Link from "next/link";
import { ArrowRight, Phone, BookOpen, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative bg-primary rounded-3xl overflow-hidden px-8 sm:px-14 py-14"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.95, ease: "easeOut" }}
        >
          {/* Dots */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }}
          />
          {/* Glow orbs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            >
              {/* Stars */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-white fill-white" />)}
                </div>
                <span className="text-cyan-200 text-sm font-medium">4.9/5 from 1,200+ authors</span>
              </div>

              <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
                Your Book Won&apos;t Write<br />Itself. Let&apos;s Fix That.
              </h2>
              <p className="text-cyan-100 text-lg max-w-lg mb-6">
                Free 30-minute consultation with a publishing expert. No fluff, no pressure — just a clear roadmap to get your book published.
              </p>

              {/* Mini badges */}
              <div className="flex flex-wrap gap-3">
                {["✓ No Commitment", "✓ NDA Signed First", "✓ Results Guaranteed"].map(b => (
                  <span key={b} className="text-sm font-semibold text-white/80 bg-white/15 px-3 py-1 rounded-full">
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: action box */}
            <motion.div
              className="bg-white rounded-2xl p-7 w-full lg:w-[300px] shrink-0"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            >
              <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <BookOpen size={18} className="text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-brand-dark mb-1">
                Ready to Publish?
              </h3>
              <p className="text-slate-500 text-xs mb-5">
                Limited consultation spots available this week.
              </p>

              <div className="flex flex-col gap-2.5">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-xl text-sm shadow-lg shadow-cyan-200 transition-all"
                >
                  Book Free Consultation <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:+18001234567"
                  className="flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-slate-400 text-brand-dark-2 font-semibold py-3 rounded-xl text-sm transition-all"
                >
                  <Phone size={14} /> +1 (800) 123-4567
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
