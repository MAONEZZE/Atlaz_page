import type { NextConfig } from "next";
import crypto from "crypto";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

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
    // Sem otimização no servidor: Cloudflare Workers não roda o pipeline
    // de otimização de imagens do Next (sharp); as imagens já são servidas
    // pré-convertidas (WEBP/AVIF) direto do CDN da Cloudflare.
    unoptimized: true,
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

initOpenNextCloudflareForDev();
