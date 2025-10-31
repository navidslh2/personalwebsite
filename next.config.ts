import type { NextConfig } from "next";

const nextConfig: NextConfig = {
      images: {
    domains: ['localhost','https://navidsalehi.vercel.app/'],
  },
  productionBrowserSourceMaps: true
};

export default nextConfig;
