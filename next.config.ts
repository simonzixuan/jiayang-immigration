import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/structure/:path*",
        destination: "/studio/structure/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
