import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

interface ContentBlock {
  heading: string;
  paragraph: string;
}

interface Blog {
  blog_id: number;
  title: string;
  slug_url: string;
  brief_paragraph: string;
  blog_image: string;
  published_date: string;
  category: number;
  blogs_content: ContentBlock[];
  metaTitle?: string;
  metaDescription?: string;
}

const BACKEND = process.env.BACKEND_URL || "http://localhost:5000";

async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const allRes = await fetch(`${BACKEND}/blogs`, { cache: "no-store" });
    const allJson = await allRes.json();
    if (allJson.status !== "success") return null;

    const found = allJson.data.find((b: Blog) => b.slug_url === slug);
    if (!found) return null;

    const res = await fetch(`${BACKEND}/single-blog/${found.blog_id}`, { cache: "no-store" });
    const json = await res.json();
    return json.status === "success" ? json.data : null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: "Blog Not Found" };
  return {
    title: blog.metaTitle || `${blog.title} | The Author Success`,
    description: blog.metaDescription || blog.brief_paragraph,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/60 via-white to-slate-50/40 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-widest mb-6 hover:gap-2.5 transition-all"
          >
            <ArrowLeft size={13} /> Back to Blogs
          </Link>
          <p className="text-brand-muted text-sm font-medium mb-3">{blog.published_date}</p>
          <h1
            className="text-4xl sm:text-5xl font-black text-black leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {blog.title}
          </h1>
          <p className="text-brand-body text-lg leading-relaxed max-w-2xl mx-auto">
            {blog.brief_paragraph}
          </p>
        </div>
      </section>

      {/* ── BANNER IMAGE ── */}
      {blog.blog_image && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={blog.blog_image}
            alt={blog.title}
            className="w-full h-64 sm:h-96 object-cover rounded-3xl shadow-xl"
          />
        </div>
      )}

      {/* ── CONTENT ── */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <div className="flex flex-col gap-12">
          {blog.blogs_content?.filter(s => s.heading || s.paragraph).map((section, idx) => (
            <div key={idx}>
              {section.heading && (
                <h2
                  className="text-2xl sm:text-3xl font-black text-black mb-4 leading-snug"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {section.heading}
                </h2>
              )}
              {section.paragraph && (
                <p className="text-brand-body leading-8 whitespace-pre-line text-base">
                  {section.paragraph}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* ── FOOTER CTA ── */}
        <div className="mt-16 pt-10 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-brand-dark-2 font-semibold text-sm hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} /> All Articles
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-7 py-3 rounded-full shadow-lg shadow-cyan-100 transition-all text-sm"
          >
            Work With Us <ArrowRight size={16} />
          </Link>
        </div>
      </article>
    </div>
  );
}
