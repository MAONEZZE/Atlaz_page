"use client";

import { motion } from "framer-motion";

export function QuoteSection() {
  return (
    <section className="relative min-h-[260px] px-4 overflow-hidden flex items-center">
      {/* Distinct background: graphite stripe (accent tint) */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(12,27,31,0.82),rgba(7,20,23,0.82))]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[radial-gradient(circle_at_82%_120%,rgba(142,221,101,0.45),transparent_55%)] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative max-w-5xl mx-auto text-center w-full py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-cormorant text-2xl md:text-3xl lg:text-4xl font-bold text-offwhite leading-snug italic">
            "Só existem 2 setores em uma empresa: o <span className="text-accent">comercial</span>, e todos os outros que <span className="text-accent">ajudam o comercial a vender"</span>.
          </p>
          <div className="mt-8 flex items-center justify-center ">
            <div className="h-px w-12 bg-accent/50" />
            <p className="text-accent font-semibold text-sm">Jacob Lima</p>
            <div className="h-px w-12 bg-accent/50" />
          </div>
          {/* <p className="text-current/70 text-sm mt-1">Co-fundador da akeel</p> */}
        </motion.div>
      </div>
    </section>
  );
}
