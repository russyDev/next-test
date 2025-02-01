import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true, // Disable Image Optimization for static export
    },
    basePath: '/nextJS',
};

export default nextConfig;
