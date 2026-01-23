import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // No basePath needed with custom domain
  images: {
    unoptimized: true
  },
  trailingSlash: true,
};

export default nextConfig;
