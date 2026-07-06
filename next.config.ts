import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Fully static site — no server runtime. `next build` emits `out/`, which is
  // served by Cloudflare (Pages / Workers static assets) with no Worker size limit.
  output: "export",
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["abdulrehman-macbook.local"],
  turbopack: {
    root: path.join(__dirname, "."),
  },
  devIndicators: false,
  images: {
    // Static export requires the built-in Next image optimizer to be disabled.
    // Originals are served as-is (fine for a portfolio).
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.chanhdai.com",
        port: "",
      },
    ],
    qualities: [75, 100],
  },
  // NOTE: `rewrites()` is not supported with `output: "export"` (there is no server
  // to run them). The raw-MDX pages are still generated statically at /blog.mdx/<slug>.
};

export default nextConfig;
