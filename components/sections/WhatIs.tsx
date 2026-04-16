"use client";

import { motion } from "framer-motion";
import { Eye, Layers, TrendingUp, Compass } from "lucide-react";

const jornada = [
  {
    image: "/capa_cards/jornada/ilusao.png",
    imageAlign: "right" as const,
    act: "Inicio da Jornada",
    title: "A Ilusão",
    subtitle: "Diagnóstico",
    icon: Eye,
    items: [
      "Por que vender mais barato não resolve",
      "O que impede o salto para alto valor",
      "Onde o comercial realmente se fragiliza",
    ],
  },
  {
    image: "/capa_cards/jornada/desenvolvimento.png",
    imageAlign: "left" as const,
    act: "Desenvolvimento",
    title: "O Processo",
    subtitle: "Operação Comercial",
    icon: TrendingUp,
    items: [
      "Estrutura para vender com consistência",
      "Qualificação e condução comercial",
      "Fechamento de contratos de alto valor",
    ],
  },
  {
    image: "/capa_cards/jornada/fundacao.png",
    imageAlign: "right" as const,
    act: "Aprofundamento",
    title: "A Fundação",
    subtitle: "Posicionamento",
    icon: Layers,
    items: [
      "Como construir valor percebido antes da proposta",
      "Narrativa, autoridade e oferta trabalhando juntas",
      "Como sustentar preços mais altos na decisão do cliente",
    ],
  },
  {
    image: "/capa_cards/jornada/horizonte.png",
    imageAlign: "left" as const,
    act: "Reflexão",
    title: "O Horizonte",
    subtitle: "Visão Estratégica",
    icon: Compass,
    items: [
      "Crescimento sustentável de longo prazo",
      "Decisões, critérios e direção",
      "O negócio que você quer construir",
    ],
  },
];

export function WhatIs() {
  return (
    <section id="jornada" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1D0D45]/15 via-transparent to-[#1D0D45]/10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#7C3AED] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
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
                className="relative overflow-hidden rounded-2xl border border-white/[0.08] hover:border-[#7C3AED]/25 transition-colors duration-300 min-h-[200px] md:min-h-[220px]"
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
                      ? "bg-gradient-to-r from-[#0D0618] from-[38%] via-[#0D0618]/70 via-[62%] to-transparent"
                      : "bg-gradient-to-l from-[#0D0618] from-[38%] via-[#0D0618]/70 via-[62%] to-transparent"
                  }`}
                />

                {/* Text content */}
                <div
                  className={`absolute inset-0 flex items-center ${
                    isRight ? "justify-start" : "justify-end"
                  } p-6 md:p-10`}
                >
                  <div className={`w-full md:w-[48%] ${isRight ? "" : "text-right"}`}>
                    <div className={`flex items-center gap-2 mb-1.5 ${isRight ? "" : "justify-end"}`}>
                      {item.act && (
                        <p className="text-[#7C3AED] text-[10px] font-bold uppercase tracking-[0.15em]">
                          {item.act}
                        </p>
                      )}
                      <div className="w-6 h-6 rounded-md bg-[#7C3AED]/15 border border-[#7C3AED]/25 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3 h-3 text-[#7C3AED]" />
                      </div>
                    </div>

                    <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-0.5 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-[10px] font-semibold uppercase tracking-wider mb-3">
                      {item.subtitle}
                    </p>

                    <ul className={`space-y-1 ${isRight ? "" : "items-end"}`}>
                      {item.items.map((bullet, j) => (
                        <li
                          key={j}
                          className={`flex items-start gap-1.5 text-white/65 text-xs leading-snug ${
                            isRight ? "" : "flex-row-reverse"
                          }`}
                        >
                          <span className="text-[#7C3AED] flex-shrink-0 font-bold">›</span>
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
