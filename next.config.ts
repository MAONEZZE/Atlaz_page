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
    EVT_DATA: process.env.EVT_DATA ?? "",
    DATA_CRON: process.env.DATA_CRON ?? "",
    LINK_CONVIDADO: process.env.LINK_CONVIDADO ?? "",
    PROXIMOS_EVENTOS: process.env.PROXIMOS_EVENTOS ?? "",
    ANO_CALENDARIO: process.env.ANO_CALENDARIO ?? "",
    EVT_LOCAL: process.env.EVT_LOCAL ?? "",
    EVT_RUA: process.env.EVT_RUA ?? "",
    EVT_COMPLEMENTO: process.env.EVT_COMPLEMENTO ?? "",
    EVT_BAIRRO: process.env.EVT_BAIRRO ?? "",
  },
  images: {
    // AVIF primeiro (melhor qualidade por byte), WebP como fallback
    formats: ["image/avif", "image/webp"],
    // Next 16 exige declarar as qualidades usadas via prop `quality`
    qualities: [75, 90],
    minimumCacheTTL: 60 * 60 * 24 * 365,
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
