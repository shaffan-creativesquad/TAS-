import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, BookOpen, Users, Mic, Presentation, Mail, Globe, MessageCircle, Lightbulb, Clock } from "lucide-react";
import { FadeUp, SlideLeft, SlideRight } from "@/components/ui/Animate";

export const metadata: Metadata = {
  title: "How It Works | The Author Success",
  description: "Our book publishing process keeps your time commitment light, while our team handles the writing, design, publishing, and promotion.",
};

const highlights = [
  { big: "Light Lift",  small: "For You",         Icon: Lightbulb },
  { big: "Full Team",   small: "Behind You",       Icon: Users     },
  { big: "Your Voice",  small: "Every Chapter",    Icon: Mic       },
  { big: "3–6 Months",  small: "Idea to Launch",   Icon: Clock     },
];

const steps = [
  { n: "01", role: "Plan",        desc: "We shape your idea, your readers, and your goals into a clear book concept."                          },
  { n: "02", role: "Interviews",  desc: "Relaxed conversations where we capture your stories, ideas, and methods."                             },
  { n: "03", role: "Research",    desc: "Our team gathers the facts, data, and sources that support your book."                                },
  { n: "04", role: "Writing",     desc: "Your book is written in your voice, chapter by chapter, with your feedback along the way."            },
  { n: "05", role: "Editing",     desc: "Careful editing polishes every page until it reads smoothly from start to finish."                    },
  { n: "06", role: "Design",      desc: "Your cover and interior are designed for print and eBook, with options to choose from."               },
  { n: "07", role: "Publishing",  desc: "We take care of your ISBN, setup, and distribution to major retailers."                               },
  { n: "08", role: "Launch",      desc: "Launch support, content, and outreach to help your book find its readers."                            },
];

const afterLaunch = [
  { step: "Your Expertise",        desc: "The knowledge you already have"           },
  { step: "Book Strategy",         desc: "A clear idea and audience"                },
  { step: "Writing",               desc: "Your voice, your name"                    },
  { step: "Editing",               desc: "Every page polished and ready"            },
  { step: "Book Design",           desc: "A cover and layout readers notice"        },
  { step: "Publishing",            desc: "Your book, officially out in the world"   },
  { step: "Distribution",          desc: "Available wherever readers shop"          },
  { step: "Media & PR",            desc: "Interviews and press attention"           },
  { step: "Content & Social Media",desc: "Posts drawn from your chapters"           },
  { step: "Lead Generation",       desc: "Readers who want to work with you"        },
  { step: "Speaking & Podcasts",   desc: "Invitations to share your story"          },
  { step: "New Clients",           desc: "Opportunities that come to you"           },
];

const hub = [
  { label: "LinkedIn Posts",       Icon: MessageCircle },
  { label: "Press & Media",        Icon: Globe         },
  { label: "Podcast Guesting",     Icon: Mic           },
  { label: "Speaking",             Icon: Presentation  },
  { label: "Free Guides",          Icon: BookOpen      },
  { label: "Email Newsletters",    Icon: Mail          },
  { label: "Sales Presentations",  Icon: Presentation  },
  { label: "Webinars",             Icon: Users         },
];

const contentFlow = [
  "Your Book",
  "Chapters",
  "Social Posts",
  "Talks & Interviews",
  "New Conversations",
];

const faqs = [
  { q: "How much of my time will this take?",     a: "Just a few planning and interview sessions. Our team handles the research, writing, editing, design, and publishing, and we'll give you a clear picture of your time commitment upfront." },
  { q: "Will the book sound like me?",            a: "Yes. We capture your voice through our interviews, and you review every chapter, so the final book sounds like you at your best." },
  { q: "Do I own my book?",                       a: "Completely. You're the author and copyright owner; you keep all your royalties, and we sign an NDA before we begin." },
  { q: "How long does the whole process take?",   a: "Most projects take 3 to 6 months from the first consultation to launch, depending on the length of your book and the services you choose." },
  { q: "Can I publish under my own name?",        a: "Absolutely. Your name goes on the cover, and our role stays completely behind the scenes." },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="relative pt-36 pb-24 overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/60 via-white to-slate-50/30 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
              Our Process
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.08] mb-6">
              <span className="text-black">Becoming an Author Is</span>
              <br />
              <span className="text-primary">Easier Than You Think</span>
            </h1>
            <p className="text-brand-body text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Our book publishing process keeps your time commitment light, while our team handles the writing, design, publishing, and promotion.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/book-a-call"
                className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all"
                style={{ background: "#089bb2" }}
              >
                Book a Strategy Call <ArrowRight size={17} />
              </Link>
              <Link
                href="/our-books"
                className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-900 text-slate-800 font-bold px-7 py-4 rounded-full transition-all"
              >
                Explore Book Formats
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-12" style={{ background: "#0891b2" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map(({ big, small, Icon }, i) => (
              <FadeUp key={big} delay={i * 0.08}>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="font-[family-name:var(--font-playfair)] text-xl font-black text-white">{big}</div>
                  <div className="text-white/80 text-sm mt-1">{small}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary block mb-3">The Roadmap</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-black text-slate-900 mb-4">
                Your Path to Becoming an Author
              </h2>
              <p className="text-brand-body max-w-xl mx-auto">Here&apos;s how to publish a book step by step with our team, with specialists guiding you through every stage.</p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <FadeUp key={step.n} delay={i * 0.06}>
                <div className="relative bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-white text-xs font-black">{step.n}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-primary bg-cyan-50 px-2 py-1 rounded-full">Your Role</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-slate-900 mb-2">{step.role}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-primary/30 text-2xl font-light">›</div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary block mb-3">After the Launch</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-black text-slate-900 mb-4">
                The Real Story Starts After Publishing
              </h2>
              <p className="text-brand-body max-w-xl mx-auto">Once your book is out, it becomes the foundation for everything that comes next.</p>
            </div>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <SlideLeft>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
                <div className="space-y-3">
                  {afterLaunch.map((item, i) => (
                    <div key={item.step} className="flex items-center gap-4 pl-12 relative">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-primary/30 rounded-full flex items-center justify-center text-xs font-black text-primary shadow-sm">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="bg-white border border-slate-100 rounded-xl px-4 py-3 flex-1 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                        <div className="font-semibold text-slate-900 text-sm">{item.step}</div>
                        <div className="text-brand-muted text-xs mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SlideLeft>

            <SlideRight>
              <div className="sticky top-28">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary block mb-3">One Book, More Reach</span>
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-black text-slate-900 mb-4">
                  Your Book Is Your Best Marketer
                </h3>
                <p className="text-brand-body mb-8 text-sm leading-relaxed">
                  The ideas in your book can fuel your marketing for years, and we help you put them to work.
                </p>

                <div className="bg-primary rounded-2xl p-5 flex items-center gap-4 mb-5 shadow-lg shadow-cyan-200">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <BookOpen size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-black text-lg font-[family-name:var(--font-playfair)]">Your Book</div>
                    <div className="text-white/70 text-xs">The heart of your brand</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {hub.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl px-4 py-3 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                      <item.Icon size={15} className="text-primary shrink-0" />
                      <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-cyan-50 border border-cyan-100 rounded-2xl p-4">
                  <p className="text-sm text-brand-body">
                    <span className="font-bold text-slate-900">More than a book.</span> A lasting reason for the right people to reach out.
                  </p>
                </div>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-3">
              One Book, Months of Content
            </h2>
            <p className="text-white/70 mb-12">And plenty of reasons for the right people to get in touch.</p>
          </FadeUp>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {contentFlow.map((item, i) => (
              <FadeUp key={item} delay={i * 0.08}>
                <div className="flex items-center gap-3">
                  <div className="bg-white/15 border border-white/25 rounded-2xl px-6 py-4 text-center min-w-[110px]">
                    <div className="text-white font-black text-sm font-[family-name:var(--font-playfair)]">{item}</div>
                  </div>
                  {i < contentFlow.length - 1 && (
                    <div className="text-white/30 text-2xl font-light hidden sm:block">→</div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-slate-900 mb-3">Questions Before You Begin</h2>
              <p className="text-brand-body">Straight answers to what authors ask us most.</p>
            </div>
          </FadeUp>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div className="border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                  <h3 className="font-semibold text-slate-900 mb-2 flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-brand-body text-sm leading-relaxed pl-7">{faq.a}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "#089bb2" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-black text-white mb-4">
              Ready to Take the First Step?
            </h2>
            <p className="text-white/80 mb-8">Book a free strategy call and leave with a clear idea for your book. No obligation.</p>
            <Link
              href="/book-a-call"
              className="inline-flex items-center gap-2 bg-white hover:bg-white/90 font-bold px-10 py-4 rounded-full shadow-lg transition-all text-lg"
              style={{ color: "#089bb2" }}
            >
              Book a Strategy Call <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
