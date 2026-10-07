import { PenLine, Briefcase, Mic2, UserCheck, Building2 } from "lucide-react";
import { FadeUp } from "@/components/ui/Animate";

const audiences = [
  {
    icon: PenLine,
    title: "Authors",
    desc: "New writers and experienced storytellers choose us because we give every manuscript the attention it merits.",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurs",
    desc: "Leaders with vision use a published book to build authority, attract clients, and grow their business.",
  },
  {
    icon: Mic2,
    title: "Coaches & Speakers",
    desc: "Thought leaders publish books to strengthen their credibility and share their message outside the stage or a single session.",
  },
  {
    icon: UserCheck,
    title: "Professionals",
    desc: "Professionals such as doctors, lawyers, and specialists who want to share their knowledge with more people. Our publishing services help you share your knowledge in a way that’s clear, easy to understand, and built to last.",
  },
  {
    icon: Building2,
    title: "Businesses",
    desc: "Companies and brands use books as valuable assets. As a trusted author services company, we help turn your story into permanent influence and new opportunities.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeUp>
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
              Our Authors
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-black text-brand-dark mb-4">
              <span className="text-black">Who We </span>
              <span className="text-primary">Help</span>
            </h2>
            <p className="text-brand-body text-base leading-relaxed max-w-xl mx-auto">
              No matter if you&apos;re new to writing or have years of experience, our authors all want the same thing: a book that makes an impact. We help you turn that dream into a book you&apos;re proud of.
            </p>
          </div>
        </FadeUp>

        {/* Chips / Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {audiences.map((a, i) => (
            <FadeUp key={a.title} delay={i * 0.08}>
              <div className="group bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:border-cyan-100 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full">
                <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <a.icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-brand-dark mb-2">
                  {a.title}
                </h3>
                <p className="text-brand-muted text-xs leading-relaxed">{a.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
