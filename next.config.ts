import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    // appDir: true, // Wajib aktif kalau pakai folder /app
  },
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "./app/portfolio": path.resolve(__dirname), // Alias "@" menunjuk ke root folder project
    };
    return config;
  },
};

export default nextConfig;
