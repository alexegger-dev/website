import type { NextConfig } from "next";

/** GitHub project Pages needs a leading slash; empty means site served at domain root. */
const rawBase = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
const collapsed = rawBase.replace(/\/{2,}/g, "/");
const withLeading = collapsed.startsWith("/") ? collapsed : `/${collapsed}`;
const trimmed = withLeading.replace(/\/+$/, "");
const basePath = !trimmed || trimmed === "/" ? undefined : trimmed;

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
