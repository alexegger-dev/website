import type { NextConfig } from "next";

const rawBase = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
const basePath = rawBase === "" || rawBase === "/" ? undefined : rawBase;

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
