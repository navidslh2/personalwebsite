import type { NextConfig } from "next";

const nextConfig: NextConfig = {
      images: {
    domains: ['localhost'],
  },
  productionBrowserSourceMaps: true
};

export default nextConfig;
