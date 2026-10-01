"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Ghostwriting",                   href: "/services/ghostwriting" },
  { name: "Book Writing",                   href: "/services/ghostwriting" },
  { name: "Book Editing",                   href: "/services/editing" },
  { name: "Proofreading Services",          href: "/services/editing" },
  { name: "Cover Design",                   href: "/services/cover-design" },
  { name: "Publishing & Distribution",      href: "/services/publishing" },
  { name: "Book Marketing",                 href: "/services/marketing" },
  { name: "Audiobooks",                     href: "/services/audiobooks" },
  { name: "Book Publishing",                href: "/services/publishing" },
  { name: "Book Promotion",                 href: "/services/marketing" },
  { name: "eBook Writing",                  href: "/services/ghostwriting" },
  { name: "Formatting Services",            href: "/services/publishing" },
  { name: "Digital Marketing",              href: "/services/marketing" },
  { name: "Author Marketing",               href: "/services/marketing" },
  { name: "Audio Book Recording",           href: "/services/audiobooks" },
  { name: "Article Writing & Publishing",   href: "/services/article-writing" },
  { name: "Blog Writing",                   href: "/services/blog-writing" },
  { name: "Book Trailer",                   href: "/services/book-trailer" },
  { name: "Business Proposal Writing",      href: "/services/business-proposal" },
  { name: "Children Book Publication",      href: "/services/childrens-book-publication" },
  { name: "Children's Book Illustrations",  href: "/services/book-illustrations" },
  { name: "Web Content Writing",            href: "/services/web-content" },
  { name: "Author Website Design",          href: "/services/author-website" },
  { name: "Children Book Writing",          href: "/services/children-book-writing" },
  { name: "Book Printing",                  href: "/services/book-printing" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 py-0"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/light-theme-logo.png"
              alt="The Author Success"
              style={{ height: "46px", width: "auto", display: "block" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Portfolio", href: "/portfolio" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-sm font-semibold transition-colors ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-brand-dark-2 hover:text-primary"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}

            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center gap-0.5">
                <Link
                  href="/services"
                  className={`relative text-sm font-semibold transition-colors ${
                    isActive("/services") ? "text-primary" : "text-brand-dark-2 hover:text-primary"
                  }`}
                >
                  Services
                  {isActive("/services") && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`p-1 transition-colors ${isActive("/services") ? "text-primary" : "text-brand-dark-2 hover:text-primary"}`}
                  aria-label="Toggle services menu"
                >
                  <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              {servicesOpen && (
                <div className="absolute top-full -left-40 mt-3 w-[620px] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-slate-100 p-4 z-50">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45" />
                  <div className="grid grid-cols-3 gap-0.5">
                    {services.map((s) => (
                      <Link
                        key={s.name}
                        href={s.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-2 px-2.5 py-2 text-xs font-semibold text-brand-dark-2 hover:bg-cyan-50 hover:text-primary rounded-lg transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact link — last */}
            <Link
              href="/contact"
              className={`relative text-sm font-semibold transition-colors ${
                isActive("/contact") ? "text-primary" : "text-brand-dark-2 hover:text-primary"
              }`}
            >
              Contact
              {isActive("/contact") && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="tel:+18001234567"
              className="text-sm font-medium text-brand-dark-2 hover:text-primary transition-colors"
            >
              +1 (800) 123-4567
            </Link>
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-cyan-200 hover:shadow-cyan-300 transition-all"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 text-brand-dark" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-5 flex flex-col gap-4 shadow-xl">
          {["Home", "About", "Portfolio"].map((item) => {
            const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`font-semibold py-0.5 border-l-2 pl-3 transition-colors ${
                  isActive(href)
                    ? "text-primary border-primary"
                    : "text-brand-dark-2 border-transparent"
                }`}
              >
                {item}
              </Link>
            );
          })}
          <div className={`flex items-center justify-between border-l-2 pl-3 ${isActive("/services") ? "border-primary" : "border-transparent"}`}>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className={`font-semibold py-0.5 transition-colors ${isActive("/services") ? "text-primary" : "text-brand-dark-2"}`}
            >
              Services
            </Link>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`p-1 transition-colors ${isActive("/services") ? "text-primary" : "text-brand-dark-2"}`}
            >
              <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
          </div>
          {servicesOpen && (
            <div className="pl-4 flex flex-col gap-2">
              {services.map((s) => (
                <Link key={s.name} href={s.href} className="text-sm text-brand-muted hover:text-primary" onClick={() => setIsOpen(false)}>
                  {s.name}
                </Link>
              ))}
            </div>
          )}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`font-semibold py-0.5 border-l-2 pl-3 transition-colors ${
              isActive("/contact") ? "text-primary border-primary" : "text-brand-dark-2 border-transparent"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="bg-primary text-white font-semibold px-5 py-3 rounded-full text-center mt-1"
            onClick={() => setIsOpen(false)}
          >
            Free Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
