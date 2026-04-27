import type { NextConfig } from "next";

const ONE_YEAR_IMMUTABLE = "public, max-age=31536000, immutable";

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const STATIC_ASSET_HEADERS = [{ key: "Cache-Control", value: ONE_YEAR_IMMUTABLE }];

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "standalone",
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["swiper"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
      {
        source: "/_next/static/:path*",
        headers: STATIC_ASSET_HEADERS,
      },
      {
        source: "/icons/:path*",
        headers: STATIC_ASSET_HEADERS,
      },
      {
        source: "/pictures/:path*",
        headers: STATIC_ASSET_HEADERS,
      },
      {
        source: "/video/:path*",
        headers: STATIC_ASSET_HEADERS,
      },
      {
        source: "/fonts/:path*",
        headers: STATIC_ASSET_HEADERS,
      },
    ];
  },
};

export default nextConfig;
