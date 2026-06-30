"use client";

import { motion } from "framer-motion";
import { Eye, Layers, TrendingUp, Compass } from "lucide-react";

const jornada = [
  {
    image: "/capa_cards/jornada/ilusao.png",
    imageAlign: "right" as const,
    act: "Momento I",
    title: "A Ilusão",
    subtitle: "OPORTUNIDADE DE MERCADO",
    icon: Eye,
    items: [
      "Qual o timing do mercado de educação (mentoria, conselhos, consultoria…) hoje.",
      "O que separa quem tem sucesso de quem não tem",
      "Todas as fases para estruturar uma marca educacional",
    ],
  },
  {
    image: "/capa_cards/jornada/desenvolvimento.png",
    imageAlign: "left" as const,
    act: "Momento II",
    title: "O Processo",
    subtitle: "OPERAÇÃO COMERCIAL",
    icon: TrendingUp,
    items: [
      "Como vender produto de alto valor",
      "Como chegar nos clientes certos e ter demanda",
      "Processo comercial para guiar uma venda",
    ],
  },
  {
    image: "/capa_cards/jornada/fundacao.png",
    imageAlign: "right" as const,
    act: "Momento III",
    title: "A Resolução",
    subtitle: "CONSTRUINDO NA PRÁTICA",
    icon: Layers,
    items: [
      "Solucionando casos reais dos participantes",
      "Como se tornar uma referência",
      "Plano de ação",
    ],
  },
  {
    image: "/capa_cards/jornada/horizonte.png",
    imageAlign: "left" as const,
    act: "Momento IV",
    title: "O Horizonte",
    subtitle: "VISÃO ESTRATÉGICA",
    icon: Compass,
    items: [
      "Servir, honrar e prosperar",
      "Decisões, critérios e direção de longo prazo",
      "O negócio educacional que você quer e pode construir",
    ],
  },
];

export function WhatIs() {
  return (
    <section id="jornada" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1f1133]/15 via-transparent to-[#1f1133]/10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-ui text-[#d8b673] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Jornada da Imersão
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Uma tarde que muda sua visão
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-base md:text-lg">
            Quatro momentos construídos para destravar o que separa você de vendas de alto valor com consistência.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
          {jornada.map((item, i) => {
            const Icon = item.icon;
            const isRight = item.imageAlign === "right";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-2xl border border-white/[0.08] hover:border-[#6d2399]/25 transition-colors duration-300 min-h-[200px] md:min-h-[220px]"
              >
                {/* Background image — concentrated on its designated side */}
                <div
                  className="absolute inset-0 bg-cover"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                    backgroundPosition: isRight ? "right center" : "left center",
                  }}
                />

                {/* Smooth gradient: solid page-bg on text side → transparent on image side */}
                <div
                  className={`absolute inset-0 ${
                    isRight
                      ? "bg-gradient-to-r from-[#0a050f] from-[58%] md:from-[38%] via-[#0a050f]/80 md:via-[#0a050f]/70 via-[82%] md:via-[62%] to-transparent"
                      : "bg-gradient-to-l from-[#0a050f] from-[58%] md:from-[38%] via-[#0a050f]/80 md:via-[#0a050f]/70 via-[82%] md:via-[62%] to-transparent"
                  }`}
                />

                {/* Text content */}
                <div
                  className={`absolute inset-0 flex items-center py-6 md:py-10 ${
                    isRight
                      ? "justify-start pl-6 md:pl-10 pr-6 md:pr-10"
                      : "justify-end pr-6 md:pr-10 pl-6 md:pl-10"
                  }`}
                >
                  <div className={`w-full md:w-[48%] ${isRight ? "" : "text-right"}`}>
                    <div className={`flex items-center gap-2 mb-1.5 ${isRight ? "" : "justify-end"}`}>
                      {item.act && (
                        <p className="font-ui text-[#d8b673] text-[10px] font-bold uppercase tracking-[0.15em]">
                          {item.act}
                        </p>
                      )}
                      <div className="w-6 h-6 rounded-md bg-[#6d2399]/15 border border-[#6d2399]/25 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3 h-3 text-[#6d2399]" />
                      </div>
                    </div>

                    <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-0.5 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-[10px] font-semibold uppercase tracking-wider mb-3">
                      {item.subtitle}
                    </p>

                    <ul
                      className={`space-y-1 ${isRight ? "" : "w-fit ml-auto -mr-3 md:-mr-6"}`}
                    >
                      {item.items.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-1.5 text-white/65 text-xs leading-snug text-left"
                        >
                          <span className="text-[#d8b673] flex-shrink-0 font-bold">›</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
