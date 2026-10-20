import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Blog {
  blog_id: number;
  title: string;
  brief_paragraph: string;
  blog_image: string;
  published_date: string;
  category: number;
  slug_url: string;
}

async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(`${process.env.BACKEND_URL || "http://localhost:5000"}/blogs`, {
      cache: "no-store",
    });
    const json = await res.json();
    return json.status === "success" ? [...json.data].reverse() : [];
  } catch {
    return [];
  }
}

export const metadata = {
  title: "Blogs | The Author Success",
  description: "Expert insights on ghostwriting, book publishing, marketing, and everything authors need to succeed.",
};

export default async function BlogsPage() {
  const blogs = await getBlogs();
  const [featured, ...rest] = blogs;

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/60 via-white to-slate-50/40 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#0891B2 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3 block">
            Our Blog
          </span>
          <h1
            className="text-5xl sm:text-6xl font-black text-black leading-[1.1] mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Insights for <span className="text-primary">Every Author</span>
          </h1>
          <p className="text-brand-body text-lg leading-relaxed max-w-2xl mx-auto">
            Expert tips on ghostwriting, publishing, marketing, and building your author brand — straight from our team.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

        {blogs.length === 0 ? (
          <div className="text-center py-20 text-brand-muted text-lg">
            No blogs published yet. Check back soon!
          </div>
        ) : (
          <>
            {/* ── FEATURED (first blog) ── */}
            {featured && (
              <Link
                href={`/blog/${featured.slug_url}`}
                className="group block mb-14"
              >
                <div className="grid lg:grid-cols-2 gap-8 bg-white border border-brand-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="overflow-hidden h-64 lg:h-auto bg-cyan-50">
                    {featured.blog_image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={featured.blog_image}
                        alt={featured.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-primary/20 text-7xl font-black" style={{ fontFamily: "var(--font-playfair)" }}>TAS</span>
                      </div>
                    )}
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="inline-block bg-cyan-50 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit">
                      Featured
                    </span>
                    <h2
                      className="text-3xl lg:text-4xl font-black text-black leading-tight mb-4 group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {featured.title}
                    </h2>
                    <p className="text-brand-body leading-relaxed mb-6 line-clamp-3">
                      {featured.brief_paragraph}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-brand-muted font-medium">{featured.published_date}</span>
                      <span className="flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all">
                        Read Article <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* ── REST ── */}
            {rest.length > 0 && (
              <>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-muted">
                    All Articles
                  </h2>
                  <div className="flex-1 h-px bg-brand-border" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((blog) => (
                    <Link
                      key={blog.blog_id}
                      href={`/blog/${blog.slug_url}`}
                      className="group bg-white rounded-2xl border border-brand-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
                    >
                      <div className="overflow-hidden h-48 bg-cyan-50">
                        {blog.blog_image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={blog.blog_image}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-primary/20 text-5xl font-black" style={{ fontFamily: "var(--font-playfair)" }}>TAS</span>
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <p className="text-xs text-brand-muted font-medium mb-2">{blog.published_date}</p>
                        <h3
                          className="text-lg font-bold text-black mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-snug"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {blog.title}
                        </h3>
                        <p className="text-sm text-brand-body line-clamp-3 flex-1 leading-relaxed">
                          {blog.brief_paragraph}
                        </p>
                        <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold">
                          Read More
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
