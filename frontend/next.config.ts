import type { NextConfig } from "next";

const BACKEND = process.env.BACKEND_URL || "http://localhost:5000";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/publishing",
        destination: "/services/book-publishing",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      { source: "/blogs",               destination: `${BACKEND}/blogs` },
      { source: "/blogs/:id(\\d+)",     destination: `${BACKEND}/blogs/:id` },
      { source: "/single-blog/:path*",  destination: `${BACKEND}/single-blog/:path*` },
      { source: "/api/users/:path*",    destination: `${BACKEND}/api/users/:path*` },
      { source: "/api/categories/:path*", destination: `${BACKEND}/api/categories/:path*` },
      { source: "/api/upload/:path*",   destination: `${BACKEND}/api/upload/:path*` },
      { source: "/api/upload",          destination: `${BACKEND}/api/upload` },
      { source: "/uploads/:path*",      destination: `${BACKEND}/uploads/:path*` },
    ];
  },
};

export default nextConfig;
