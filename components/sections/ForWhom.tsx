"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const targets = [
  {
    number: "01",
    title: "Empresários e Fundadores",
    description:
      "Que já possuem experiência de mercado, sabem que têm algo valioso para vender e querem aumentar ticket, margem e sofisticação comercial. Cansados de depender de indicação aleatória ou esforço pessoal sem estrutura.",
    bold: ["ticket", "margem", "sofisticação comercial"],
    checks: [
      "Aumentar ticket e margem nas vendas",
      "Vender com mais consistência e menos esforço",
      "Construir um processo comercial de alto nível",
    ],
  },
  {
    number: "02",
    title: "Experts, Consultores e Mentores",
    description:
      "Que oferecem soluções, mentorias, serviços ou produtos de alto valor e querem crescer sem depender de volume. Entendem que o próximo salto exige pensamento estratégico, processo comercial e decisão clara.",
    bold: ["alto valor", "pensamento estratégico", "processo comercial"],
    checks: [
      "Estruturar oferta de alto valor com clareza",
      "Vender expertise sem depender de volume",
      "Crescer com critério e longo horizonte",
    ],
  },
];

export function ForWhom() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1D0D45]/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#7C3AED] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Público-Alvo
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Para quem é essa imersão
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            A Fator de Longo Horizonte foi desenhada para quem já chegou longe e quer ir mais longe ainda.
          </p>
        </motion.div>

        <div className="space-y-8">
          {targets.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glass-card p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-12"
            >
              {/* Big number */}
              <div className="flex-shrink-0">
                <span className="font-heading text-5xl md:text-8xl font-bold text-[#7C3AED]/20 leading-none select-none">
                  {item.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/55 text-base md:text-lg leading-relaxed mb-6">
                  {item.description.split(new RegExp(`(${item.bold.join("|")})`)).map((part, j) =>
                    item.bold.includes(part) ? (
                      <strong key={j} className="text-white/80 font-semibold">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>

                {/* Check list */}
                <ul className="space-y-2.5">
                  {item.checks.map((check, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                      <span className="text-white/65 text-sm leading-relaxed">{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
