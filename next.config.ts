import type { NextConfig } from "next";

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
};

export default nextConfig;
