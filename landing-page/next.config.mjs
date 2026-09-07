/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: If you want to use the /api/capture-lead route (server function),
  // keep output as the default (server). For static-only hosting, set:
  // output: "export",
  // distDir: "dist",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
