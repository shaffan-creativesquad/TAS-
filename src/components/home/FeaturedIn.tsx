import { FadeUp } from "@/components/ui/Animate";

const logos = [
  "Forbes",
  "Entrepreneur",
  "Fast Company",
  "Inc.",
  "The Globe and Mail",
  "Business Insider",
];

export default function FeaturedIn() {
  return (
    <section className="py-12 border-y border-slate-100 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-400 mb-7">
            Our clients&apos; books have been featured in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {logos.map(logo => (
              <div
                key={logo}
                className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl font-black text-slate-300 hover:text-slate-500 transition-colors tracking-tight select-none cursor-default"
              >
                {logo}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
