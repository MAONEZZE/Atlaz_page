"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const overviewCards = [
  {
    image: "/capa_cards/overview/mari_palestra.webp",
    title: "Imersão Estratégica",
    description:
      "Uma tarde imersiva para executivos e empresários que querem transformar conhecimento em marca educacional e ganhar dinheiro com isso.",
  },
  {
    image: "/capa_cards/overview/dominar_situacao.webp",
    title: "Conteúdo",
    bullets: [
      "5 horas de conteúdo",
      "Cases de sucesso",
      "Empresa por trás das cortinas",
    ],
  },
  {
    image: "/capa_cards/overview/todos.webp",
    title: "Hands On",
    bullets: [
      "Resolução prática de cases",
      "Mapeamento do processo comercial",
      "Networking com grandes empresários",
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
              className="group overflow-hidden rounded-2xl border border-current/50 hover:border-accent/35 transition-all duration-300 cursor-default flex flex-col"
            >
              {/* Image area — fixed height, object-top shows top of photo */}
              <div className="relative h-52 overflow-hidden flex-shrink-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                  quality={90}
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* Gradient blending image into text area */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-dark to-transparent" />
              </div>

              {/* Text area — solid dark background */}
              <div className="bg-bg-dark p-6 pt-3 flex flex-col gap-3 flex-1">
                <h3 className="font-heading font-bold text-offwhite text-xl leading-tight">
                  {card.title}
                </h3>
                {"description" in card && (
                  <p className="text-current/70 text-sm leading-relaxed">{card.description}</p>
                )}
                {"bullets" in card && (
                  <ul className="space-y-1.5 pl-4">
                    {card.bullets!.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-current/70 text-sm leading-relaxed"
                      >
                        <span className="text-accent flex-shrink-0 font-bold mt-px">›</span>
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
