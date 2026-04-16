"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const testimonials = [
  {
    name: "Walmir Bandeira",
    role: "Criador da TCM | Fundador da BT Inova | NR-1 — Riscos psicossociais",
    fileId: "1_Hcdt8ropUrCCgqtQSsx7S9xrzmLFmox",
    thumbnail: "/capa_depoimento/walmir.jpeg",
  },
  {
    name: "Marcio Flores",
    role: "Consultor, Palestrante e Mentor | Conselheiro — Alvarez & Marsal · Senna Brands",
    fileId: "12UqIPE1ep-hFMkfNQ_I6-YSPxWNpvDDV",
    thumbnail: "/capa_depoimento/marcio.jpeg",
  },
  {
    name: "Fabrini Galo",
    role: "Conselheiro Consultivo, Governança Corporativa | Advisor M&A · Mentor de CEOs",
    fileId: "1wSiKPtC-yBSIyM-chJp-zuRKUW4ACI5_",
    thumbnail: "/capa_depoimento/fabrini.jpeg",
  },
  {
    name: "Camilly Silva",
    role: "Especialista em Social Selling | Fundadora da S4 Growth",
    fileId: "1mS4dVeZBNO8GpYoGNUb3_W5wSPiBeKs0",
    thumbnail: "/capa_depoimento/camilly.jpeg",
  },
  {
    name: "Eduardo Camargo",
    role: "Fundador da Mauna",
    fileId: "1WXgJ56pxUHTkSHDw6f8m_8U7-p8goTGW",
    thumbnail: "/capa_depoimento/eduardo.jpeg",
  },
  {
    name: "Eduarda Fhamilly",
    role: "Especialista em Comunicação Estratégica | Treinadora Corporativa | Palestrante | Mentora",
    fileId: "1_dCEorhhuRQuRDjAEOBXrQgig2QXPDRd",
    thumbnail: "/capa_depoimento/eduarda.jpeg",
  },
  {
    name: "Samuel Vogel",
    role: "Conselheiro de Governança",
    fileId: "17MYG2S3s1yXACj_FbIZICdFCWhGpfWlr",
    thumbnail: "/capa_depoimento/samuel.jpeg",
  },
  {
    name: "Ludimila Gois",
    role: "Conselheira Consultiva — Savoir Assessor",
    fileId: "14fqJ2UFKRYWYUk6XNKDueSAGfoInYZ3n",
    thumbnail: "/capa_depoimento/ludimila.jpeg",
  },
];

const GAP = 16;

export function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateMeasurements = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const w = el.offsetWidth;
    const cpv = w >= 1024 ? 3 : w >= 640 ? 2 : 1;
    setCardsPerView(cpv);
    setCardWidth((w - GAP * (cpv - 1)) / cpv);
  }, []);

  useEffect(() => {
    updateMeasurements();
    const ro = new ResizeObserver(updateMeasurements);
    const el = containerRef.current;
    if (el) ro.observe(el);
    return () => ro.disconnect();
  }, [updateMeasurements]);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const prev = () => setCurrent((i) => Math.max(0, i - 1));
  const next = () => setCurrent((i) => Math.min(maxIndex, i + 1));

  const trackOffset = current * (cardWidth + GAP);

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#7C3AED] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Depoimentos
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
            O que empresários dizem sobre a experiência
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Depoimento anterior"
            className="absolute left-1 md:-left-6 top-[40%] -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#1D0D45]/80 border border-[#7C3AED]/30 flex items-center justify-center text-white/70 hover:text-white hover:border-[#7C3AED]/60 hover:bg-[#1D0D45] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Track container — clips overflow */}
          <div ref={containerRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ gap: GAP, transform: `translateX(-${trackOffset}px)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={
                    cardWidth > 0
                      ? { width: cardWidth, minWidth: cardWidth, flexShrink: 0 }
                      : { flexShrink: 0, width: "100%" }
                  }
                  className="glass-card overflow-hidden cursor-pointer group"
                  onClick={() => setActiveVideo(t.fileId)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Assistir depoimento de ${t.name}`}
                  onKeyDown={(e) => e.key === "Enter" && setActiveVideo(t.fileId)}
                >
                  {/* Thumbnail / placeholder */}
                  <div className="relative aspect-video overflow-hidden bg-[#0E0520]">
                    {t.thumbnail ? (
                      <img
                        src={t.thumbnail}
                        alt={t.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1D0D45] via-[#0E0520] to-[#0D0618]">
                        {/* Subtle purple glow */}
                        <div className="absolute inset-0 bg-[#7C3AED]/10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#7C3AED]/15 rounded-full blur-xl" />
                      </div>
                    )}

                    {/* Dark overlay + play button */}
                    <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#7C3AED]/25 border-2 border-[#7C3AED]/60 flex items-center justify-center group-hover:bg-[#7C3AED]/40 group-hover:border-[#7C3AED] group-hover:scale-110 transition-all duration-200">
                        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Name & role */}
                  <div className="p-5">
                    <p className="font-semibold text-white text-sm leading-snug">{t.name}</p>
                    <p className="text-white/45 text-xs mt-1 leading-snug line-clamp-2">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            disabled={current === maxIndex}
            aria-label="Próximo depoimento"
            className="absolute right-1 md:-right-6 top-[40%] -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#1D0D45]/80 border border-[#7C3AED]/30 flex items-center justify-center text-white/70 hover:text-white hover:border-[#7C3AED]/60 hover:bg-[#1D0D45] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        {maxIndex > 0 && (
          <div className="flex justify-center gap-2 mt-8" role="group" aria-label="Navegação do carrossel">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para posição ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
                className={`rounded-full transition-all duration-200 cursor-pointer ${
                  i === current
                    ? "w-6 h-2 bg-[#7C3AED]"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Video dialog */}
      <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
        <DialogContent
          className="w-full bg-[#0D0618] border border-white/[0.1] p-0 overflow-hidden"
          style={{ maxWidth: "min(94vw, 1400px)" }}
        >
          {activeVideo && (
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://drive.google.com/file/d/${activeVideo}/preview`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay"
                allowFullScreen
                title="Depoimento — vídeo completo"
                style={{ border: 0 }}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
