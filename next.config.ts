import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/crawl',
        destination: 'http://localhost:8000/crawl',
      },
      {
        source: '/chat',
        destination: 'http://localhost:8000/chat',
      },
    ];
  },
};

export default nextConfig;
