"use client";

import { motion } from "framer-motion";

const overviewCards = [
  {
    image: "/capa_cards/overview/todos_jacob.jpg",
    title: "Imersão Estratégica",
    description:
      "Uma imersão para empresários que querem construir um comercial de alto valor. Cada momento tem o propósito de trazer clareza, processo e direção.",
  },
  {
    image: "/capa_cards/overview/jacob_kaio.jpg",
    title: "Conteúdo",
    bullets: [
      "5 horas de conteúdo",
      "Cases de sucesso",
      "Comercial por trás das cortinas",
    ],
  },
  {
    image: "/capa_cards/overview/todos.jpg",
    title: "Hands On",
    bullets: [
      "Aplicação direta dos conceitos",
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
              className="group overflow-hidden rounded-2xl border border-white/[0.08] hover:border-[#7C3AED]/35 transition-all duration-300 cursor-default flex flex-col"
            >
              {/* Image area — fixed height, object-top shows top of photo */}
              <div className="relative h-52 overflow-hidden flex-shrink-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                {/* Gradient blending image into text area */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0D0618] to-transparent" />
              </div>

              {/* Text area — solid dark background */}
              <div className="bg-[#0D0618] p-6 pt-3 flex flex-col gap-3 flex-1">
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
