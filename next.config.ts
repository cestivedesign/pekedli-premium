import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pekedli.hu",
        pathname: "/wp-content/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
