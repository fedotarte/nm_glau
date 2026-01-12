import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  basePath: process.env.NODE_ENV === "production" ? "/glau" : "/",
  output: "standalone",
};

export default nextConfig;
