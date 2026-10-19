"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How do I set up an account?",
    a: "The main things you'll need are a valid email address, signed agreements allowing us to print and distribute your book for you, and payment information so you can pay us to print and we can pay you for your book sales.",
  },
  {
    q: "What formats do my books need to be in?",
    a: "For print books, you need a PDF of the cover and a separate PDF of the interior content. Ebooks require an EPUB file of the interior content and a JPEG of the cover.",
  },
  {
    q: "What do I need to publish a book with The Author Success?",
    a: "You'll need a fully setup account (meaning you've completed all steps of the account setup process) and your book's cover and interior files. You'll also need an ISBN for each format of your book if you'd like to make your book available for distribution. We can get your ISBN as you set up a title with us.",
  },
  {
    q: "Do you offer any guarantees?",
    a: "Please review our Terms and Conditions for details. Our crystal clear process ensures client's security, therefore before proceeding with any order, we make sure we have sent a legal binding contract and a non-disclosure agreement stating the services you are entitled to and the terms and conditions.",
  },
  {
    q: "What if I don't need every service in your comprehensive packages?",
    a: "Feel free to pick and choose which services you want from us. We can often reduce the pricing if you want to drop any of the service options. We're happy to customize our services to meet your needs. You can get in touch with any of our online consultants who will guide you on the suitable service you need and the customized quotation.",
  },
  {
    q: "What if I just want a feedback or consultation on my book?",
    a: "Our editing and coaching services are perfectly suited for writers who are looking to improve their work. We can give input at whatever level of detail you'd like—feedback on the structure and concept of the book, critical review on the flow and transitions, or copyediting changes to the text itself. We can also address specific issues, as per your request, in our review of your work. If you recommend our editors will make the changes and improve the work for you.",
  },
  {
    q: "How involved would I need to be in the process?",
    a: "Your level of involvement is entirely up to you. You can opt to work closely with your ghostwriter, or simply provide them with basic information and let them do the rest of the work. This is your book, which means that you have final say on the content and it's your decision how and when you give your input and approval. We'll work with you to customize the process so that it fits your schedule and preferred working style. Although in an autobiography/memoir it is highly recommended to work side by side with your ghostwriter.",
  },
  {
    q: "Can I meet and discuss my book with the ghostwriter face to face?",
    a: "We do not entertain walk-in customers, we are an online business and the process is convenient with telephonic interviews and chat sessions. Meeting with the clients would affect the productivity of the team and delay the time. However under uncertain situation we meet clients if the order amount exceeds $30,000, to meet the special needs of the customer. Although, you can always come and visit our office and have a cup of coffee with us.",
  },
  {
    q: "How long does The Author Success process normally take?",
    a: "The duration of The Author Success process is partly up to you—the author! Depending on your schedule and desired level of involvement, your ghostwriter will develop material for you to review and approve on a weekly or biweekly basis.",
  },
  {
    q: "How are writers screened to make sure they qualify for this network?",
    a: "All applicants are screened and tested. Their credentials are checked. Writers and developmental editors need a track record of published books that they've written and edited. Based on that we will assign the writer to the task at hand.",
  },
  {
    q: "Are your services 100% confidential?",
    a: "Yes, of course! Our services are 100% confidential. We will never use any of the information you provide us for any other purpose, nor will we use the writing developed for your book ever again. We have a very comprehensive privacy policy posted on our website, and we are also happy to send you a non-disclosure agreement. If you are happy and with your consent, you can leave a testimonial and we will use it on the website.",
  },
  {
    q: "Do I have to give the ghostwriter any credit or co-authorship?",
    a: "No! No one will know you had help with the writing process unless you choose to tell them. Our services are 100% confidential. The story we help you to tell will always be your story. You are 100% the author of your book. We do not retain any rights or ownership of your book whatsoever. Even if your book earns a million dollars, you will never owe us any credit or extra compensation unless you choose to do so. While credit is appreciated, it is never required.",
  },
  {
    q: "I had a great/bad experience with the writer I selected. Should I tell the network coordinator?",
    a: "Absolutely (in either case). Any writer who has several legitimate negative feedback reports will be removed from the network. Note: An editor refusing to work without prepayment or to do free additional work (above and beyond the scope outlined in the agreement) are not legitimate complaints; an editor missing a contractual deadline or becoming unavailable is. Because of the ethical guidelines of this network and the collection of feedback from network clients, legitimate complaints have rarely occurred since the company was formed in 2014. Please let the network coordinator know about your experience with your editor(s).",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[380px_1fr] gap-14 items-start">
          {/* Left sticky header */}
          <motion.div
            className="lg:sticky lg:top-28 text-center lg:text-left"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-brand-dark mb-5 leading-tight">
              Answers Before<br /><span className="text-primary">You Sign</span><br />Anything.
            </h2>
            <p className="text-brand-muted leading-relaxed text-sm mb-8">
              Everything you should know before you publish my book: clear, candid answers for the journey ahead.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full text-sm shadow-lg shadow-cyan-200 hover:bg-primary-hover transition-colors"
            >
              Still Curious? Ask Us
            </a>
          </motion.div>

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.75, ease: "easeOut", delay: i * 0.06 }}
                className={`rounded-2xl border overflow-hidden transition-colors ${
                  open === i ? "border-cyan-200 bg-white shadow-md shadow-cyan-50" : "border-slate-200 bg-white"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className={`font-semibold pr-4 text-[0.95rem] ${open === i ? "text-primary" : "text-brand-dark"}`}>
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    open === i ? "bg-primary text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-5 pb-5">
                        <p className="text-brand-muted text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
