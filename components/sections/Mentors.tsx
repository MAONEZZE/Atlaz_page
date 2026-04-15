"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const mentors = [
  {
    name: "Jacob Lima",
    role: "Fundador da Atlaz",
    photo: "/mentores/jacob.jpg",
    badges: ["R$2M no 1º Ano", "500+ Clientes Ativos"],
    highlights: [
      "+30M gerados com vendas no x1 para times comerciais",
      "Startup com 500+ clientes ativos",
      "Projetos com Flávio Augusto, Caio Carneiro e Joel Jota",
      "Fundou a Atlaz — R$ 2M no 1º ano com 4 pessoas",
    ],
  },
  {
    name: "Mariana Chinarelli",
    role: "Co-fundadora da Atlaz",
    photo: "/mentores/mari.jpg",
    badges: ["ESPM", "R$50M+ Gerados"],
    highlights: [
      "R$ 50M+ gerados em lançamentos digitais",
      "Formada pela ESPM",
      "Projetos com Flávio Augusto, Caio Carneiro e Joel Jota",
    ],
  },
  {
    name: "Kaio César",
    role: "Cofundador da BCC",
    photo: "/mentores/kaio_cesar.jpeg",
    badges: ["Estrategista de Marcas", "Alto Valor"],
    highlights: [
      "Estrategista de marcas de alto valor",
      "Soldiers Nutrition, Odd Sheep, Next10",
      "Marca de suplementação de Neymar Jr.",
    ],
  },
];

export function Mentors() {
  return (
    <section id="mentores" className="relative py-16 md:py-24 px-4">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/25 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="text-[#7C3AED] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Nossos Mentores
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Quem vai conduzir sua tarde
          </h2>
        </motion.div>

        {/* Blockquote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-14"
        >
          <blockquote className="font-heading italic text-white/45 text-lg max-w-lg mx-auto leading-relaxed">
            Três perspectivas complementares, combinadas em uma tarde de imersão.
          </blockquote>
        </motion.div>

        {/* Mentor cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mentors.map((mentor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-6 md:p-8 flex flex-col items-center text-center group cursor-default"
            >
              {/* Circular photo — 150px with hover zoom */}
              <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden mb-5 border-2 border-[#7C3AED]/30 group-hover:border-[#7C3AED]/60 transition-colors duration-300 flex-shrink-0">
                <Image
                  src={mentor.photo}
                  alt={mentor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="150px"
                />
              </div>

              {/* Name + role */}
              <h3 className="font-heading font-bold text-white text-xl mb-1">{mentor.name}</h3>
              <p className="text-[#7C3AED] text-sm font-semibold mb-4">{mentor.role}</p>

              {/* Cert / credential badges */}
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {mentor.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="border-t border-white/[0.08] pt-5 w-full space-y-2.5">
                {mentor.highlights.map((h, j) => (
                  <p key={j} className="text-white/50 text-sm leading-relaxed">
                    {h}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA below mentors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#ingressos"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#7C3AED] text-white font-semibold text-base hover:bg-[#6D28D9] transition-colors duration-200 cursor-pointer shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:shadow-[0_0_50px_rgba(124,58,237,0.35)]"
          >
            Quero estar na imersão
          </a>
        </motion.div>
      </div>
    </section>
  );
}
