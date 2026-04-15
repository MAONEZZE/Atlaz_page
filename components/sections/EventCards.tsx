"use client";

import { motion } from "framer-motion";
import { Eye, Layers, TrendingUp, Compass } from "lucide-react";

const cards = [
  {
    icon: Eye,
    label: "Diagnóstico",
    title: "A Ilusão",
    description: "Por que baixar preço não melhora a performance comercial de um negócio e só revela um comercial frágil.",
  },
  {
    icon: TrendingUp,
    label: "Operação Comercial",
    title: "O Processo",
    description: "Como uma venda de alto valor é construída do início ao fim, da escolha do canal de captação à condução da conversa, do pitch ao fechamento.",
  },
  {
    icon: Layers,
    label: "Posicionamento",
    title: "A Fundação",
    description: "O que o mercado precisa perceber sobre o seu negócio antes da venda, para que preço deixe de ser objeção e valor passe a conduzir a decisão.",
  },
  {
    icon: Compass,
    label: "Visão Estratégica",
    title: "O Horizonte",
    description: "Como decisões estratégicas moldam um comercial mais sólido, mais coerente e mais preparado para crescer no longo prazo.",
  },
];

export function EventCards() {
  return (
    <section className="relative py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass-card p-6 flex flex-col gap-3 cursor-default hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center group-hover:bg-[#7C3AED]/15 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#7C3AED]" />
                </div>
                <p className="text-[#7C3AED] text-[10px] font-bold uppercase tracking-[0.15em]">
                  {card.label}
                </p>
                <h3 className="font-heading font-bold text-white text-lg leading-tight">
                  {card.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
