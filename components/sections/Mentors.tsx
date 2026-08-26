"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const mentors = [
  {
    name: "Jacob Lima",
    lines: [
      "Fundador da akeel",
      "+R$30M em vendas x1",
      "Startup com +500 clientes ativos",
      "R$2M no 1º ano com 4 pessoas",
    ],
    photo: "/mentores/jacob_foto_mentor_sem_fundo.webp",
    instagram: "https://instagram.com/jacobliima",
    linkedin: "https://www.linkedin.com/in/jacob-lima-41b784224/",
    imgStyle: { objectPosition: "center top", transform: "scale(1.65) translateY(7%) translateX(1%)" },
  },
  {
    name: "Mariana Chinarelli",
    lines: [
      "Co-fundadora da akeel",
      "+R$50M em lançamentos digitais",
      "Projetos com Flávio Augusto, Caio Carneiro e Joel Jota",
    ],
    photo: "/mentores/mari_foto_mentor_sem_fundo.webp",
    instagram: "https://instagram.com/mari.chinarelli",
    linkedin: "https://www.linkedin.com/in/mariana-chinarelli-491757206/",
    imgStyle: { objectPosition: "center top", transform: "scale(1.75) translateY(8%) translateX(2%)" },
  },
];

export function Mentors() {
  return (
    <section id="mentores" className="relative py-16 md:py-24 px-4 bg-offwhite text-ink">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-ink/50 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="font-ui text-accent-ink text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Nossos Mentores
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-ink mb-4 leading-tight">
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
          <blockquote className="font-heading italic text-current/70 text-lg max-w-lg mx-auto leading-relaxed">
            Duas perspectivas complementares, combinadas em uma tarde de imersão.
          </blockquote>
        </motion.div>

        {/* Mentor cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {mentors.map((mentor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative rounded-3xl bg-white border border-accent-ink/50 shadow-lg overflow-hidden cursor-default"
            >
              {/* Photo fills the entire card — zoomed in */}
              <div className="relative h-[400px] sm:h-[500px]">
                <Image
                  src={mentor.photo}
                  alt={mentor.name}
                  fill
                  className="object-contain"
                  style={mentor.imgStyle}
                  sizes="(max-width: 768px) 100vw, 500px"
                  quality={90}
                />
              </div>

              {/* Overlay group: info card + social icons — float over image */}
              <div className="absolute bottom-4 inset-x-3 z-10 flex flex-col items-center gap-2">
                {/* White info card */}
                <div className="bg-white rounded-xl px-4 py-3 text-center w-full shadow-lg">
                  <h3 className="font-heading font-bold text-gray-900 text-base leading-tight">
                    {mentor.name}
                  </h3>
                  <div className="mt-1 space-y-px">
                    {mentor.lines.map((line, j) => (
                      <p key={j} className="text-gray-500 text-xs font-medium leading-snug">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Social icons — below info card, on top of image */}
                <div className="flex items-center gap-2">
                  {mentor.instagram && (
                    <a
                      href={mentor.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram de ${mentor.name}`}
                      className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:bg-white hover:text-accent-ink shadow-md transition-all duration-200 cursor-pointer"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                  )}
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${mentor.name}`}
                    className="w-8 h-8 rounded-full bg-accent-ink flex items-center justify-center shadow-[0_0_12px_rgba(47,107,15,0.5)] hover:bg-accent-ink/80 hover:shadow-[0_0_18px_rgba(47,107,15,0.7)] transition-all duration-200 cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
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
            className="font-ui inline-flex items-center justify-center px-8 py-4 rounded-xl bg-accent-ink text-offwhite font-semibold text-base hover:bg-accent-ink/80 transition-colors duration-200 cursor-pointer shadow-[0_0_30px_rgba(47,107,15,0.2)] hover:shadow-[0_0_50px_rgba(47,107,15,0.35)]"
          >
            Quero estar na imersão
          </a>
        </motion.div>
      </div>
    </section>
  );
}
