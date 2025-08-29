import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Point Turbopack at this app as the root to avoid cross-workspace lockfile inference
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
