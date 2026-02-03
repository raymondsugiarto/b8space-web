import path from "path";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [],
  },
  async rewrites() {
    return [
      {
        source: "/coffee-rider-app",
        destination: "/coffee-rider-app",
      },
    ];
  },
  // Add empty turbopack config to silence webpack warning
  turbopack: {},
  // Support for absolute imports
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(process.cwd(), "./src"),
    };
    return config;
  },
};

export default nextConfig;
