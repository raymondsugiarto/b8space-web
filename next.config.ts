import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
