"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, DollarSign } from "lucide-react";

const timeline = [
  { time: "13h00", description: "Recepção e abertura" },
  { time: "13h30 – 19h00", description: "Imersão principal" },
  { time: "19h00 – 21h00", description: "Coquetel e networking" },
];

export function Schedule() {
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
            Como será a experiência no dia
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <Clock className="w-5 h-5 text-indigo-400" />
              <h3 className="text-white font-semibold text-lg">Programação</h3>
            </div>
            <div className="space-y-6 relative">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-white/[0.1] ml-[3px]" />
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4 relative">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0 mt-1.5 relative z-10" />
                  <div>
                    <p className="text-[#CA8A04] font-semibold text-sm">{item.time}</p>
                    <p className="text-white/70 text-sm mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Location + Investment */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-rose-400" />
                <h3 className="text-white font-semibold">Local</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Auditório da Investidores.VC
              </p>
              <p className="text-white/50 text-sm leading-relaxed mt-1">
                R. Pitu, 72 – 14º andar – Cidade Monções<br />
                São Paulo, Brooklin – SP, 04567-060
              </p>
              <a
                href="https://maps.google.com/?q=R.+Pitu,+72+Cidade+Mon%C3%A7%C3%B5es+S%C3%A3o+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-indigo-400 text-sm hover:text-indigo-300 transition-colors"
              >
                Ver no mapa →
              </a>
            </div>

            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-5 h-5 text-[#CA8A04]" />
                <h3 className="text-white font-semibold">Investimento</h3>
              </div>
              <p className="text-4xl font-heading font-bold text-[#CA8A04]">R$ 7.500</p>
              <p className="text-white/40 text-sm mt-1">Parcelamento disponível</p>
              <a
                href="#aplicar"
                className="inline-flex items-center justify-center w-full mt-5 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                Quero aplicar
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
