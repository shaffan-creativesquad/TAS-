"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const spokes = [
  { label: "LinkedIn",         icon: "💼", top: "2%",  left: "38%"  },
  { label: "PR & Media",       icon: "📰", top: "16%", left: "68%"  },
  { label: "Podcast Invites",  icon: "🎙️", top: "42%", left: "78%"  },
  { label: "Speaking",         icon: "🎤", top: "68%", left: "68%"  },
  { label: "Lead Magnet",      icon: "🧲", top: "80%", left: "38%"  },
  { label: "Email Sequences",  icon: "✉️", top: "68%", left: "6%"   },
  { label: "Sales Decks",      icon: "📊", top: "42%", left: "-4%"  },
  { label: "Webinars",         icon: "💻", top: "16%", left: "6%"   },
];

const verticals = [
  { label: "Founders & CEOs",       href: "/who-we-help/founders-ceos"   },
  { label: "Consultants",           href: "/who-we-help/consultants"      },
  { label: "Coaches & Speakers",    href: "/who-we-help/coaches-speakers" },
  { label: "Professional Services", href: "/who-we-help/professionals"    },
  { label: "B2B & SaaS",            href: "/who-we-help/businesses"       },
];

export default function AuthorityHub() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Hub diagram ── */}
          <motion.div
            className="relative flex items-center justify-center order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px]">
              {/* Dashed orbit ring */}
              <div className="absolute inset-[18%] rounded-full border-2 border-dashed border-slate-200 pointer-events-none" />

              {/* Center book hub */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-xl shadow-cyan-200">
                  <div className="text-center text-white">
                    <BookOpen size={24} className="mx-auto mb-1" />
                    <div className="text-[10px] font-black uppercase leading-tight">Your<br />Book</div>
                  </div>
                </div>
              </div>

              {/* Spoke nodes — positioned with CSS */}
              {spokes.map((spoke) => (
                <div
                  key={spoke.label}
                  className="absolute bg-white border border-slate-100 rounded-xl px-2.5 py-2 text-center shadow-sm hover:shadow-md hover:border-primary/20 transition-all w-[84px]"
                  style={{ top: spoke.top, left: spoke.left }}
                >
                  <div className="text-base mb-0.5">{spoke.icon}</div>
                  <div className="text-[10px] font-semibold text-slate-700 leading-tight">{spoke.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Copy ── */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary block mb-3">
              One Book. Boundless Reach.
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-black text-slate-900 mb-5 leading-tight">
              Your Book Is the Product.<br />Authority Is the Bonus.
            </h2>
            <p className="text-brand-body mb-4 leading-relaxed">
              Your book can generate LinkedIn posts, press coverage, podcast invites, speaking opportunities, and a steady flow of qualified leads. With the right publishing partner, your influence can last for years after your book comes out.
            </p>
            <p className="text-sm font-bold text-primary mb-8">
              One book can lead to new opportunities, a year of engaging content, and many valuable conversations.
            </p>

            <p className="text-sm font-semibold text-slate-700 mb-3">We partner with leaders who want to share something meaningful:</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {verticals.map(v => (
                <Link
                  key={v.href}
                  href={v.href}
                  className="inline-flex items-center gap-1.5 bg-white border border-slate-200 hover:border-primary hover:bg-cyan-50 text-slate-800 hover:text-primary text-xs font-semibold px-3 py-2 rounded-full transition-all"
                >
                  {v.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-cyan-200 transition-all"
              >
                Discover Our Approach <ArrowRight size={16} />
              </Link>
              <Link
                href="/our-books"
                className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-900 text-slate-800 font-bold px-6 py-3.5 rounded-full transition-all"
              >
                Explore Book Formats
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
