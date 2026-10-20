"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COLOR = "#0891b2";

export default function FAQAccordion({ faqs }: { faqs: { q: string; a: ReactNode }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
          className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-sm pr-4 text-brand-dark">
              {faq.q}
            </span>
            <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-slate-100 text-slate-500">
              {open === i ? <Minus size={14} /> : <Plus size={14} />}
            </div>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{ overflow: "hidden" }}
              >
                <div
                  className="px-6 pb-5 pt-4 text-sm text-brand-body leading-relaxed border-t border-slate-100 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-3 [&_ul]:mt-1 [&_ul]:pl-4 [&_li]:list-disc [&_strong]:text-slate-700 [&_p]:leading-relaxed"
                  style={{ color: COLOR === COLOR ? undefined : COLOR }}
                >
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
