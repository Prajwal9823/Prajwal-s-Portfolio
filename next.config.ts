import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.leetcode.com", "leetcode.com", "images.unsplash.com"],
  },
};

export default nextConfig;

