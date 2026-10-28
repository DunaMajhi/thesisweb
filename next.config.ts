import type { NextConfig } from "next";

// Node 25+ compatibility: disable experimental incomplete global localStorage on server
if (typeof globalThis !== "undefined" && "localStorage" in globalThis) {
  try {
    delete (globalThis as unknown as { localStorage?: unknown }).localStorage;
  } catch {
    // Ignore if non-configurable
  }
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
