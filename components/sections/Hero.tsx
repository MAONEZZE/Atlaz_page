"use client";

import { motion } from "framer-motion";
import { Target, ArrowRight } from "lucide-react";

const featureBadges = [
  { icon: Target, label: "Imersão Estratégica" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.3 + i * 0.15,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  return (
    <section id="topo" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-[#0a050f]" />

      {/* Hero image — clean logo as full background */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/logos/img_hero.png')",
          backgroundSize: "cover",
          filter: "brightness(1.1) saturate(1.4)",
          opacity: 0.4,
        }}
      />

      {/* Dark overlay — keeps text readable */}
      <div className="absolute inset-0 bg-[#0a050f]/75 pointer-events-none" />

      {/* Vignette: fade left/right/bottom edges to bg */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a050f]/75 via-transparent to-[#0a050f]/75 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a050f] pointer-events-none" />

      {/* Ambient purple glow to reinforce brand */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#6d2399]/[0.06] rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6 pt-20 pb-16 text-center">
{/*         
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-10"
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-2 border-[#241f2b]/50 bg-[#241f2b]/10 flex flex-col items-center justify-center">
              <span className="font-heading font-bold text-[#241f2b] text-2xl leading-none">28</span>
              <span className="text-[#241f2b]/80 text-[10px] font-semibold uppercase tracking-widest mt-0.5">
                ABR
              </span>
            </div>
            
            <div className="absolute inset-0 rounded-full border border-[#241f2b]/30 animate-ping opacity-40" />
          </div>
        </motion.div> */}

        {/* Brand title */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <h1
            className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight mb-8 text-white"
            style={{
              filter:
                "drop-shadow(0 0 6px rgba(199,154,240,0.35)) drop-shadow(0 0 16px rgba(109,35,153,0.3))",
            }}
          >
            ATL
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, #e9d7ff, #c79af0, #6d2399)",
              }}
            >
              A
            </span>
            Z
          </h1>
        </motion.div>

        {/* H1 */}
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
          <h3 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold leading-[1.15] tracking-tight mb-5 max-w-2xl mx-auto">
            <span className="text-white">Você passou anos acumulando o que poucos têm. Agora é hora de</span>{" "}
            <span className="text-[#d8b673]"> transformar</span>
            <span className="text-white"> isso em</span>
            <span className="text-[#d8b673]"> produto.</span>
          </h3>
        </motion.div>

        {/* Subtitle */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
          <p className="text-base md:text-lg text-white/100 mb-10 leading-snug max-w-xl mx-auto font-medium">
            Uma imersão estratégica para quem quer construir ou escalar um negócio de educação com
            <span className="font-semibold"> posicionamento sólido, produto de alto valor e direção de longo prazo.</span>
          </p>
        </motion.div>

        {/* Feature badges */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {featureBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-white/65 text-sm"
            >
              <Icon className="w-4 h-4 text-[#6d2399]" />
              {label}
            </div>
          ))}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-white/65 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            São Paulo, Brooklin · 13h–19h
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#ingressos"
            className="font-ui inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#7c2fb0] text-white font-semibold text-lg hover:bg-[#6d2399] transition-colors duration-200 cursor-pointer group shadow-[0_0_40px_rgba(124,47,176,0.25)] hover:shadow-[0_0_60px_rgba(124,47,176,0.4)]"
          >
            Garantir minha vaga
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#jornada"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/[0.15] text-white/65 font-medium text-lg hover:border-white/30 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Ver programação
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a050f] to-transparent pointer-events-none" />
    </section>
  );
}
