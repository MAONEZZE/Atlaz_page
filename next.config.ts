import type { NextConfig } from "next";
import crypto from "crypto";

// Compute the coupon hash at build time from the env variable.
// Only the hash (never the raw code) is exposed to the client bundle.
const rawCode = (process.env.COUPON_CODE ?? "").trim().toUpperCase();
const couponHash = rawCode
  ? crypto.createHash("sha256").update(rawCode).digest("hex")
  : "";

const nextConfig: NextConfig = {
  env: {
    // Injected into both server and client; SHA-256 is one-way so it is safe
    COUPON_HASH: couponHash,
    DATA_EVENTO: process.env.DATA_EVENTO ?? "",
    LINK_CONVIDADO: process.env.LINK_CONVIDADO ?? "",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;
