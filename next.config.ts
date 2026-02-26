import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? '/pl' : '',
  trailingSlash: false,
};

export default nextConfig;
