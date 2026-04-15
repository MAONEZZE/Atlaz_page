"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, MapPin, Clock, Calendar, CheckCircle, Tag, Loader2, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Hash computed at build-time from COUPON_CODE in .env (see next.config.ts).
// Only the SHA-256 digest is exposed — the raw code stays server-side.
const COUPON_HASH = process.env.COUPON_HASH ?? "";
const WA_LINK = "https://wa.me/5511934581064?text=Ol%C3%A1%2C%20vim%20pela%20pagina%20da%20FLH%20e%20gostaria%20de%20saber%20mais%20sobre%20como%20funciona%20para%20garantir%20a%20vaga%3F";

const features = [
  "Acesso à imersão presencial (13h–19h)",
  "Coquetel e networking até 21h",
  "Materiais de apoio",
  "Ambiente de alto nível",
  "Ligação de triagem incluída",
];

async function hashInput(input: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(input.trim().toUpperCase());
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function ApplicationForm() {
  const [open, setOpen] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [couponStatus, setCouponStatus] = useState<"idle" | "loading" | "valid" | "invalid">("idle");
  const [discounted, setDiscounted] = useState(false);

  async function applyCoupon() {
    if (!coupon.trim()) return;
    setCouponStatus("loading");
    const hash = await hashInput(coupon);
    if (hash === COUPON_HASH) {
      setCouponStatus("valid");
      setDiscounted(true);
    } else {
      setCouponStatus("invalid");
    }
  }

  function resetAndOpen() {
    setCoupon("");
    setCouponStatus("idle");
    setDiscounted(false);
    setOpen(true);
  }

  return (
    <section id="ingressos" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1D0D45]/15 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/25 to-transparent" />

      <div className="relative max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="text-[#7C3AED] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Ingressos
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Escolha sua vaga
          </h2>
        </motion.div>

        {/* Event info chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            { icon: Calendar, label: "28 de abril" },
            { icon: Clock, label: "13h–19h · Coquetel até 21h" },
            { icon: MapPin, label: "Auditório Investidores.VC — SP" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-white/55 text-sm"
            >
              <Icon className="w-4 h-4 text-[#7C3AED]" />
              {label}
            </div>
          ))}
        </motion.div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-2xl border border-[#7C3AED]/40 bg-[#7C3AED]/10 p-8 md:p-10 max-w-lg mx-auto mb-6 hover:border-[#7C3AED]/60 transition-colors duration-300"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#7C3AED] text-white">
              VAGAS LIMITADAS
            </span>
          </div>

          <p className="text-white/50 text-sm font-medium mb-4">Ingresso Individual</p>
          <p className="font-heading text-5xl font-bold text-[#7C3AED] mb-1">R$ 7.500</p>
          <p className="text-white/35 text-xs mb-6">
            Uma tarde completa de imersão, coquetel e networking seleto.
          </p>

          <ul className="space-y-2.5 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#7C3AED]" />
                <span className="text-white/60 text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://www.asaas.com/c/5fr1cys74fce3hjx"
            className="inline-flex items-center justify-center gap-2 w-full py-4 px-5 rounded-xl bg-[#7C3AED] text-white font-semibold text-base hover:bg-[#6D28D9] transition-colors duration-200 cursor-pointer group shadow-[0_0_30px_rgba(124,58,237,0.25)] hover:shadow-[0_0_50px_rgba(124,58,237,0.4)]"
          >
            Garantir vaga
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

        <p className="text-center text-white/30 text-sm mb-16">
          Parcelamento disponível · Vagas limitadas · Processo seletivo por ligação de triagem
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-16" />

        {/* Wide CTA card with event background image */}
        <div id="aplicar">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative w-full overflow-hidden rounded-2xl border border-[#7C3AED]/20 shadow-[0_24px_80px_rgba(0,0,0,0.6)] min-h-[280px] md:min-h-[340px] flex items-center justify-center group"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ backgroundImage: "url('/capa_chekout/capa_evento.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#7C3AED]/20 via-transparent to-transparent" />

            <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-12 text-center">
              <p className="text-[#C1A6DF] text-xs font-bold uppercase tracking-[0.2em]">28 de abril · São Paulo</p>
              <h4 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight max-w-xl">
                Fator de Longo Horizonte
              </h4>
              {/* Button opens coupon popup */}
              <button
                onClick={resetAndOpen}
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-[#7C3AED] text-white font-semibold text-lg hover:bg-[#6D28D9] transition-all duration-200 shadow-[0_0_40px_rgba(124,58,237,0.4)] hover:shadow-[0_0_60px_rgba(124,58,237,0.6)] hover:scale-[1.03] cursor-pointer"
              >
                Convidados
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== COUPON POPUP ===== */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md w-full bg-[#0D0618] border border-[#7C3AED]/25 p-0 overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-8 pb-6 border-b border-white/[0.07]">
            <div className="flex items-start justify-between mb-1">
              <p className="text-[#7C3AED] text-xs font-bold uppercase tracking-[0.2em]">Finalizar inscrição</p>
            </div>
            <h3 className="font-heading text-2xl font-bold text-white">Fator de Longo Horizonte</h3>
            <p className="text-white/45 text-sm mt-1">28 de abril · São Paulo · 13h–19h</p>
          </div>

          {/* Price display */}
          <div className="px-8 py-6 border-b border-white/[0.07]">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-white/40 text-xs font-medium mb-0.5">Valor do ingresso</p>
                {discounted ? (
                  <div className="flex items-center gap-3">
                    <p className="font-heading text-3xl font-bold text-white/30 line-through">R$ 7.500</p>
                    <p className="font-heading text-3xl font-bold text-green-400">R$ 0</p>
                  </div>
                ) : (
                  <p className="font-heading text-3xl font-bold text-[#7C3AED]">R$ 7.500</p>
                )}
              </div>
              {discounted && (
                <span className="ml-auto px-3 py-1.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wide">
                  100% de desconto!
                </span>
              )}
            </div>
            {discounted && (
              <p className="text-green-400/70 text-xs mt-2">
                Código aplicado com sucesso — inscrição gratuita!
              </p>
            )}
          </div>

          {/* Coupon field */}
          <div className="px-8 py-6 border-b border-white/[0.07]">
            <p className="text-white/60 text-sm font-medium mb-3 flex items-center gap-2">
              <Tag className="w-4 h-4 text-[#7C3AED]" />
              Código de convidado
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value={coupon}
                onChange={(e) => {
                  setCoupon(e.target.value);
                  if (couponStatus !== "idle") setCouponStatus("idle");
                }}
                onKeyDown={(e) => e.key === "Enter" && applyCoupon()}
                placeholder="Insira seu código aqui"
                disabled={discounted}
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder-white/25 focus:outline-none focus:border-[#7C3AED]/50 transition-all text-sm disabled:opacity-50"
              />
              <button
                onClick={applyCoupon}
                disabled={couponStatus === "loading" || discounted || !coupon.trim()}
                className="px-4 py-2.5 rounded-xl bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-[#C77DFF] text-sm font-semibold hover:bg-[#7C3AED]/30 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer min-w-[90px] flex items-center justify-center"
              >
                {couponStatus === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Aplicar"
                )}
              </button>
            </div>

            {couponStatus === "invalid" && (
              <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                <X className="w-3 h-3" />
                Código inválido. Tente novamente.
              </p>
            )}
            {couponStatus === "valid" && (
              <p className="text-green-400 text-xs mt-2 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                Código aplicado com sucesso!
              </p>
            )}
          </div>

          {/* CTA — only enabled when coupon is valid */}
          <div className="px-8 py-6">
            {discounted ? (
              <a
                href="https://sed.learningbrands.cloud/e/imersao-fator-de-longo-horizonte-39a397"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#7C3AED] text-white font-semibold text-base hover:bg-[#6D28D9] transition-all duration-200 cursor-pointer shadow-[0_0_30px_rgba(124,58,237,0.25)] hover:shadow-[0_0_50px_rgba(124,58,237,0.4)]"
              >
                Garantir vaga gratuita
                <ArrowRight className="w-4 h-4" />
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white/35 font-semibold text-base cursor-not-allowed"
                aria-label="Insira um código de convite válido para continuar"
              >
                Insira o código de convite
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            <p className="text-white/25 text-xs text-center mt-3">
              {discounted
                ? "Você será redirecionado ao WhatsApp para finalizar"
                : "Digite e aplique o código de convite para liberar a inscrição"}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
