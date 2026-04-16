"use client";

import { motion } from "framer-motion";

const overviewCards = [
  {
    image: "/capa_cards/overview/todos_jacob.jpg",
    title: "Imersão Estratégica",
    description:
      "Uma tarde completa desenhada para empresários que querem construir um comercial de alto valor. Da abertura ao coquetel, cada momento tem propósito: clareza, processo e direção.",
  },
  {
    image: "/capa_cards/overview/jacob_kaio.jpg",
    title: "Conteúdo",
    bullets: [
      "Diagnóstico: por que vender barato não resolve",
      "Processo comercial de alto valor do início ao fim",
      "Posicionamento que aumenta valor percebido",
      "Visão estratégica para crescimento de longo prazo",
    ],
  },
  {
    image: "/capa_cards/overview/todos.jpg",
    title: "Hands On",
    bullets: [
      "Aplicação direta dos conceitos ao seu negócio",
      "Construção da sua narrativa e oferta de alto valor",
      "Mapeamento do processo comercial atual",
      "Networking com empresários de alto nível",
    ],
  },
];

export function EventCards() {
  return (
    <section className="relative py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {overviewCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] hover:border-[#7C3AED]/35 transition-all duration-300 cursor-default min-h-[380px] flex flex-col"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ backgroundImage: `url('${card.image}')` }}
              />
              {/* Gradient overlay — strong at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0618] via-[#0D0618]/70 to-[#0D0618]/20" />

              {/* Content anchored to bottom */}
              <div className="relative z-10 mt-auto p-6 flex flex-col gap-3">
                <h3 className="font-heading font-bold text-white text-xl leading-tight">
                  {card.title}
                </h3>
                {"description" in card && (
                  <p className="text-white/65 text-sm leading-relaxed">{card.description}</p>
                )}
                {"bullets" in card && (
                  <ul className="space-y-1.5">
                    {card.bullets!.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-white/65 text-sm leading-relaxed"
                      >
                        <span className="text-[#7C3AED] flex-shrink-0 font-bold mt-px">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
