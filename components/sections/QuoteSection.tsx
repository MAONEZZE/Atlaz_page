"use client";

import { motion } from "framer-motion";

export function QuoteSection() {
  return (
    <section className="relative py-12 px-4 overflow-hidden">
      {/* Distinct background: deep purple stripe */}
      <div className="absolute inset-0 bg-[#6740A9]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#3B0067] via-[#6740A9]/80 to-[#3B0067]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#7C3AED]/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/40 to-transparent" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
            Só existem 2 setores em uma empresa: o <span className="text-[#B775E0]">comercial</span>, e todos os outros que <span className="text-[#B775E0]">ajudam o comercial a vender</span>.            
          </p>
          <div className="mt-8 flex items-center justify-center ">
            <div className="h-px w-12 bg-[#7C3AED]/50" />
            <p className="text-[#C77DFF] font-semibold text-sm">Jacob Lima</p>
            <div className="h-px w-12 bg-[#7C3AED]/50" />
          </div>
          {/* <p className="text-white/35 text-sm mt-1">Co-fundador da Atlaz</p> */}
        </motion.div>
      </div>
    </section>
  );
}
