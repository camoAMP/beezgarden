/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
const isStaticExport = process.env.NEXT_OUTPUT === "export";

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        // GitHub Pages (and some static hosts) serve under "/<repo>".
        // Set NEXT_PUBLIC_BASE_PATH accordingly during CI builds.
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  ...(isStaticExport
    ? {
        output: "export",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
