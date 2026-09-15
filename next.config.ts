import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the workspace root explicitly. Without this, Next/Turbopack can
  // infer the wrong root if an unrelated lockfile exists in a parent
  // directory (e.g. a different project in the user's home folder).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
