import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: [],
  },
};

export default nextConfig;
