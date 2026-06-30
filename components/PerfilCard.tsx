"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  type Pessoa,
  cargoCompleto,
  fotoPerfil,
  inicial,
  instagramUrl,
  linkedinUrl,
} from "@/lib/pessoa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.3 + i * 0.15,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export function PerfilCard({ pessoa }: { pessoa: Pessoa }) {
  const [imgErro, setImgErro] = useState(false);

  const insta = instagramUrl(pessoa);
  const linkedin = linkedinUrl(pessoa);
  const foto = fotoPerfil(pessoa);

  return (
    <section
      id="topo"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background base */}
      <div className="absolute inset-0 bg-[#0a050f]" />

      {/* Hero image — mais escuro/opaco que o Hero da landing */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/logos/img_hero.png')",
          backgroundSize: "cover",
          filter: "brightness(1.0) saturate(1.5)",
          opacity: 0.35,
        }}
      />

      {/* Dark overlay — mais opaco */}
      <div className="absolute inset-0 bg-[#0a050f]/75 pointer-events-none" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a050f]/85 via-transparent to-[#0a050f]/85 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a050f] pointer-events-none" />

      {/* Ambient purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#6d2399]/[0.06] rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Conteúdo — 2 colunas */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6 pt-28 pb-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Esquerda — seções */}
          <div className="order-2 md:order-1">
            {pessoa.secoes.map((secao, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mb-8 last:mb-0"
              >
                {secao.emb ? (
                  <div className="text-center mb-12 md:mb-20">
                    <p className="font-ui text-[#a89bb4] text-sm md:text-base font-semibold uppercase tracking-[0.3em] mb-4">
                      {secao.emb}
                    </p>
                    <h1
                      className="font-heading font-bold uppercase leading-[0.85] tracking-[0.08em] bg-clip-text text-transparent"
                      style={{
                        fontSize: "clamp(36px, 6vw, 80px)",
                        backgroundImage:
                          "linear-gradient(to bottom, #e9d7ff, #c79af0, #6d2399)",
                        filter:
                          "drop-shadow(0 0 6px rgba(199,154,240,0.35)) drop-shadow(0 0 16px rgba(109,35,153,0.3))",
                      }}
                    >
                      {secao.nome}
                    </h1>
                    <div
                      className="mx-auto mt-10 h-0.5 w-20 bg-[#d8b673]"
                      style={{ boxShadow: "0 0 16px rgba(216,182,115,0.6)" }}
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <h2 className="font-ui text-[#d8b673] text-xs md:text-sm font-semibold uppercase tracking-[0.4em] mb-5">
                      {secao.titulo}
                    </h2>
                    <p className="text-[#dcd3e3] text-lg leading-[1.65] max-w-[600px] mx-auto">
                      {secao.descricao}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Direita — card estilo mentor */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="order-1 md:order-2 mx-auto w-full max-w-[31rem]"
          >
            <div className="relative rounded-3xl bg-[#F7F5F2] border border-gray-200/60 shadow-[0_8px_40px_rgba(0,0,0,0.18)] overflow-hidden">
              {/* Foto */}
              <div className="relative h-[520px] sm:h-[750px]">
                {!imgErro ? (
                  <Image
                    src={foto}
                    alt={pessoa.nome}
                    fill
                    className="object-contain"
                    style={pessoa.imgStyle ?? { objectPosition: "center top" }}
                    sizes="(max-width: 768px) 100vw, 500px"
                    onError={() => setImgErro(true)}
                    priority
                  />
                ) : (
                  // Fallback gracioso — inicial em círculo gradiente
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#6d2399] to-[#241f2b] flex items-center justify-center shadow-xl">
                      <span className="font-heading font-bold text-white text-6xl">
                        {inicial(pessoa)}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Info-box + ícones sociais — flutuam sobre a imagem */}
              <div className="absolute bottom-4 inset-x-3 z-10 flex flex-col items-center gap-2">
                <div className="bg-white rounded-xl px-4 py-3 text-center w-full shadow-lg">
                  <p className="font-heading font-bold text-gray-900 text-lg leading-tight">
                    {pessoa.nome}
                  </p>
                  <p className="text-gray-500 text-sm font-medium leading-snug mt-1">
                    {cargoCompleto(pessoa)}
                  </p>
                </div>

                {(insta || linkedin) && (
                  <div className="flex items-center gap-2">
                    {insta && (
                      <a
                        href={insta}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Instagram de ${pessoa.nome}`}
                        className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:bg-white hover:text-[#6d2399] shadow-md transition-all duration-200 cursor-pointer"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </a>
                    )}
                    {linkedin && (
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn de ${pessoa.nome}`}
                        className="w-8 h-8 rounded-full bg-[#6d2399] flex items-center justify-center shadow-[0_0_12px_rgba(109,35,153,0.5)] hover:bg-[#1f1133] hover:shadow-[0_0_18px_rgba(109,35,153,0.7)] transition-all duration-200 cursor-pointer"
                      >
                        <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a050f] to-transparent pointer-events-none" />
    </section>
  );
}
