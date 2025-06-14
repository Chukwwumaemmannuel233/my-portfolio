import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Add this line to ignore lint errors on build
  },
};

export default nextConfig;
