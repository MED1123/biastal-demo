import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? '/pl' : '',
  trailingSlash: false,
  output: 'standalone',
  // unoptimized: obrazy ze static import trafiają do _next/static/media/
  // z basePathem URL = /pl/_next/static/media/HASH.jpg — identycznie jak pliki JS
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return isProd
      ? [{ source: '/', destination: '/pl', permanent: false, basePath: false }]
      : [];
  },
};

export default nextConfig;
