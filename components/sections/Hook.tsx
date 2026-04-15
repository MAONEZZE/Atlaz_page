"use client";

import { motion } from "framer-motion";

export function Hook() {
  return (
    <section className="relative py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
        >
          <h2 className="font-heading text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Você não precisa vender mais barato.
          </h2>
          <p className="font-heading text-xl md:text-3xl text-white/60 mb-10 md:mb-12 leading-snug">
            Você precisa vender com mais estrutura, mais direção e mais valor percebido.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
          className="glass-card p-6 md:p-12 text-left max-w-3xl mx-auto"
        >
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            Existe um ponto em que crescer deixa de depender de esforço e passa a depender de construção.
          </p>
          <div className="space-y-3 mb-8">
            {["Construção de posicionamento.", "Construção de processo.", "Construção de uma operação comercial que sustenta vendas maiores, com mais consistência."].map((item, i) => (
              <p key={i} className="text-white/60 text-base pl-4 border-l-2 border-indigo-400/50">
                {item}
              </p>
            ))}
          </div>
          <p className="text-white/80 text-lg font-medium">
            A <span className="text-white font-semibold">Imersão Fator de Longo Horizonte</span> foi criada para empresários que entendem que vender mais é sobre fazer o básico bem feito com processo — e construir o caminho certo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
