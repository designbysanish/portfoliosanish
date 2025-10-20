import type { NextConfig } from "next";
import path from "node:path";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Allows loading images from any remote URL
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    unoptimized: true, // Needed for static export to GitHub Pages
  },

  // Helps Next.js resolve files outside of src
  outputFileTracingRoot: path.resolve(__dirname, "../../"),

  // GitHub Pages deployment settings
  output: "export", // Export fully static HTML
  basePath: isProd ? "/portfoliosanish" : "", // Prepends repo name in production
  assetPrefix: isProd ? "/portfoliosanish/" : "", // Fixes paths for static assets

  // Optional: reactStrictMode
  reactStrictMode: true,
};

export default nextConfig;
