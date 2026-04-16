"use client";

import { motion } from "framer-motion";

interface ImpactPhraseProps {
  text: string;
  highlight?: string;
  subtext?: string;
}

export function ImpactPhrase({ text, highlight, subtext }: ImpactPhraseProps) {
  return (
    <section className="relative min-h-[260px] px-4 overflow-hidden flex items-center">
      {/* Distinct background: deep purple stripe */}
      <div className="absolute inset-0 bg-[#6740A9]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#3B0067] via-[#6740A9]/80 to-[#3B0067]" />
      {/* Purple glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#7C3AED]/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/40 to-transparent" />

      <div className="relative max-w-5xl mx-auto text-center w-full py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-cormorant text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight italic">
            {text}{" "}
            {highlight && <span className="text-[#C77DFF]">{highlight}</span>}
          </p>
          {subtext && (
            <p className="mt-5 text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {subtext}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
