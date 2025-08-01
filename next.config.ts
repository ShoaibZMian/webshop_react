import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "pldbjxhkrlailuixuvhz.supabase.co",
      },
    ],
  },
};

export default nextConfig;
