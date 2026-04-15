"use client";

import { motion } from "framer-motion";
import { Eye, Layers, TrendingUp, Compass } from "lucide-react";

const jornada = [
  {
    act: "Inicio da Jornada",
    title: "A Ilusão",
    subtitle: "Diagnóstico",
    icon: Eye,
    items: [
      "Por que vender mais barato não resolve",
      "O que impede o salto para alto valor",
      "Onde a maioria dos negócios trava",
    ],
    dark: true,
  },
  {
    act: "",
    title: "O Processo",
    subtitle: "Operação Comercial",
    icon: TrendingUp,
    items: [
      "Estrutura para vender com consistência",
      "Qualificação e condução comercial",
      "Fechamento de contratos de alto valor",
    ],
    dark: false,
  },
  {
    act: "Aprofundamento",
    title: "A Fundação",
    subtitle: "Posicionamento",
    icon: Layers,
    items: [
      "Construindo percepção de valor real",
      "Narrativa, autoridade e oferta de alto valor",
      "Como cobrar mais sem perder clientes",
    ],
    dark: true,
  },
  {
    act: "Reflexão",
    title: "O Horizonte",
    subtitle: "Visão Estratégica",
    icon: Compass,
    items: [
      "Crescimento sustentável de longo prazo",
      "Decisões com critério e direção",
      "O negócio que você quer construir",
    ],
    dark: false,
  },
];

export function WhatIs() {
  return (
    <section id="jornada" className="relative py-24 px-4 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1D0D45]/15 via-transparent to-[#1D0D45]/10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#7C3AED] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Jornada da Imersão
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Uma tarde que muda sua visão
          </h2>
          <p className="text-white/90 max-w-xl mx-auto text-lg">
            Quatro momentos construídos para destravar o que separa você de vendas de alto valor com consistência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {jornada.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`group relative p-7 rounded-2xl border cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.5)] ${
                  item.dark
                    ? "bg-[#1D0D45]/35 border-[#1D0D45]/50 hover:bg-[#1D0D45]/55 hover:border-[#7C3AED]/20"
                    : "bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.15]"
                }`}
              >
                {/* Act label */}
                <p className="text-[#7C3AED] text-xs font-bold uppercase tracking-[0.15em] mb-4">
                  {item.act}
                </p>

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center mb-5 group-hover:bg-[#7C3AED]/15 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#7C3AED]" />
                </div>

                {/* Title + subtitle */}
                <h3 className="font-heading text-2xl font-bold text-white mb-1 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm font-medium mb-5 uppercase tracking-wider">
                  {item.subtitle}
                </p>

                {/* Bullet items */}
                <ul className="space-y-2.5">
                  {item.items.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2 text-white/55 text-sm leading-relaxed">
                      <span className="text-[#7C3AED] flex-shrink-0 mt-px font-bold">›</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
