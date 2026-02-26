import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? '/pl' : '',
  trailingSlash: false,
  async redirects() {
    return isProd
      ? [{ source: '/', destination: '/pl', permanent: false, basePath: false }]
      : [];
  },
};

export default nextConfig;
