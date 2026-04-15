"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const includesItems = [
  "Uma cadeira na imersão",
  "Conteúdo aplicado sobre aceleração de vendas de alto valor",
  "Ambiente seleto com empresários e tomadores de decisão",
  "Coquetel e networking até 21h",
  "Materiais de apoio, quando necessários",
  "Experiência presencial desenhada para aprofundamento real",
];

export function Includes() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-10">
            O que está incluso
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {includesItems.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <p className="text-white/70 text-sm md:text-base leading-relaxed">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
