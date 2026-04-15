"use client";

import { motion } from "framer-motion";
import { Lightbulb, Building2, Star, TrendingUp, Compass } from "lucide-react";

const unlocks = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Clareza sobre vendas de alto valor",
    description: "Por que alguns negócios conseguem cobrar mais, fechar melhor e crescer com mais margem, enquanto outros vivem presos em desconto e instabilidade.",
  },
  {
    number: "02",
    icon: Building2,
    title: "Visão para uma operação comercial madura",
    description: "Onde seu comercial trava hoje, o que está faltando na estrutura e quais movimentos destravam crescimento sem gerar desordem.",
  },
  {
    number: "03",
    icon: Star,
    title: "Posicionamento que aumenta percepção de valor",
    description: "Como autoridade, narrativa e processo comercial se conectam para aumentar o valor percebido da sua oferta.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Direção para vender com mais constância",
    description: "Nova leitura sobre geração de demanda, qualificação, condução comercial e fechamento de ofertas de alto valor.",
  },
  {
    number: "05",
    icon: Compass,
    title: "Critério para crescer com longo horizonte",
    description: "Construir uma base que permita vender melhor nos próximos meses e anos — não apenas agora.",
  },
];

export function Unlocks() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
            O que você vai destravar nessa tarde
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Cinco destravações estratégicas que você leva para o seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {unlocks.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-[#CA8A04] font-heading">{item.number}</span>
                  <Icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="font-semibold text-white text-base leading-snug">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
