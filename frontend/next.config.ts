import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    config.ignoreWarnings = [
      {
        message: /Warning/,
      },
    ];
    return config;
  },
};

export default nextConfig;
