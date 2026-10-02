import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: "#0891b2" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/20 text-center md:text-left">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <div className="bg-white rounded-xl px-3 py-2 inline-block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="The Author Success"
                  style={{ height: "40px", width: "auto", display: "block" }}
                />
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Your trusted partner for end-to-end book publishing. From first draft to global distribution.
            </p>
            <div className="flex gap-2.5 justify-center md:justify-start">
              {[
                { label: "f", title: "Facebook" },
                { label: "in", title: "LinkedIn" },
                { label: "𝕏", title: "X" },
                { label: "▶", title: "YouTube" },
              ].map(s => (
                <a
                  key={s.title}
                  href="#"
                  title={s.title}
                  className="w-9 h-9 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-xs font-bold transition-colors border border-white/20"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/60 mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Ghostwriting", href: "/services/ghostwriting" },
                { name: "Book Editing", href: "/services/editing" },
                { name: "Cover Design", href: "/services/cover-design" },
                { name: "Publishing", href: "/services/publishing" },
                { name: "Book Marketing", href: "/services/marketing" },
                { name: "Audiobooks", href: "/services/audiobooks" },
              ].map(s => (
                <li key={s.name}>
                  <Link href={s.href} className="text-white/80 hover:text-white text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/60 mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "About Us",       href: "/about"          },
                { name: "Our Books",      href: "/our-books"      },
                { name: "How It Works",   href: "/how-it-works"   },
                { name: "Portfolio",      href: "/portfolio"      },
                // { name: "Testimonials",   href: "/#testimonials"  },
                { name: "Who We Help",    href: "/who-we-help"    },
                { name: "Insights",       href: "/insights"       },
                { name: "Book a Call",    href: "/book-a-call"    },
                { name: "Contact Us",     href: "/contact"        },
              ].map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/80 hover:text-white text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/60 mb-5">Get in Touch</h4>
            <ul className="flex flex-col gap-4">
              {[
                { icon: Phone, value: "+1 (800) 123-4567" },
                { icon: Mail, value: "info@theauthorsuccess.com" },
                { icon: MapPin, value: "New York, NY 10001" },
              ].map(({ icon: Icon, value }) => (
                <li key={value} className="flex items-start gap-3 justify-center md:justify-start">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-white" />
                  </div>
                  <span className="text-white/80 text-sm pt-1">{value}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-6 block bg-white hover:bg-white/90 text-[#0891b2] text-sm font-semibold px-5 py-2.5 rounded-full text-center transition-colors shadow-lg shadow-cyan-900/30"
            >
              Free Consultation
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/70">
          <p>© 2024 The Author Success. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
