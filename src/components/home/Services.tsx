"use client";

import Link from "next/link";
import { PenLine, BookOpen, Palette, Globe, Megaphone, Headphones, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: PenLine,
    title: "Ghostwriting",
    desc: "Our writers can craft your entire book in your distinctive voice, whether it's fiction, memoir, nonfiction, or business. We protect your work with a signed NDA, and only your name appears on the cover.",
    tag: "Most Popular",
    span: "lg:col-span-2",
    dark: true,
    href: "/services/ghostwriting",
  },
  {
    icon: BookOpen,
    title: "Book Editing",
    desc: "From the first edit to the last proofread, we make sure every sentence is clear and your manuscript is ready to publish.",
    tag: null,
    span: "",
    dark: false,
    href: "/services/editing",
  },
  {
    icon: Palette,
    title: "Cover Design",
    desc: "We design covers that stand out, fit your genre, and attract readers both online and in stores.",
    tag: null,
    span: "",
    dark: false,
    href: "/services/cover-design",
  },
  {
    icon: Globe,
    title: "Publishing & Distribution",
    desc: "We take care of your ISBN, formatting, and global distribution on leading platforms. You keep all your royalties.",
    tag: "Global Reach",
    span: "",
    dark: false,
    href: "/services/publishing",
  },
  {
    icon: Megaphone,
    title: "Book Marketing",
    desc: "We help your book. We help your book find the right readers with Amazon optimization, social media, press outreach, and BookTok promotion.",
    tag: null,
    span: "",
    dark: false,
    href: "/services/book-marketing",
  },
  {
    icon: Headphones,
    title: "Audiobooks",
    desc: "We provide professional narration and production, so your story comes alive for listeners on Audible, Spotify, and Apple Books.",
    tag: null,
    span: "lg:col-span-2",
    dark: true,
    href: "/services/audiobooks",
  },
];


export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
              Our Services
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-black text-brand-dark leading-tight">
              <span className="text-black">Everything Your Book Needs.</span><br /><span className="text-black">Nothing You Have to </span><span className="text-primary">Chase.</span>
            </h2>
          </div>
          <div>
            <p className="text-brand-muted max-w-sm mb-4 text-sm leading-relaxed">
              We offer six main services and a dedicated team to guide your book from first draft to finished product. You&apos;ll know what to expect at every step.
            </p>
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-3 transition-all">
              Explore All Services <ArrowUpRight size={15} />
            </Link>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.85, ease: "easeOut", delay: i * 0.07 }}
              className={s.span}
            >
              <Link
                href={s.href}
                className={`group rounded-2xl p-6 border hover-lift cursor-pointer transition-all block h-full ${
                  s.dark
                    ? "bg-brand-dark border-brand-dark text-white"
                    : "bg-white border-slate-200 hover:border-cyan-100 hover:shadow-lg"
                }`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  s.dark ? "bg-white/10" : "bg-cyan-50"
                }`}>
                  <s.icon size={22} className={s.dark ? "text-white" : "text-primary"} />
                </div>

                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className={`font-[family-name:var(--font-playfair)] text-xl font-bold ${
                    s.dark ? "text-white" : "text-brand-dark"
                  }`}>{s.title}</h3>
                  {s.tag && (
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 mt-1 ${
                      s.dark ? "bg-primary text-white" : "bg-cyan-50 text-primary border border-cyan-200"
                    }`}>{s.tag}</span>
                  )}
                </div>

                <p className={`text-sm leading-relaxed mb-5 ${
                  s.dark ? "text-[#CFFAFE]" : "text-brand-muted"
                }`}>{s.desc}</p>

                <div className={`flex items-center gap-1.5 text-sm font-bold group-hover:gap-3 transition-all ${
                  s.dark ? "text-[#CFFAFE]" : "text-primary"
                }`}>
                  Learn more <ArrowUpRight size={15} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
