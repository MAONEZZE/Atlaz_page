"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const footerLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Jornada", href: "#jornada" },
  { label: "Mentores", href: "#mentores" },
  { label: "Ingressos", href: "#ingressos" },
];

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <footer className="relative border-t border-white/[0.06]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent" />

        <div className="max-w-6xl mx-auto px-4 md:px-6 py-14">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
            {/* Brand */}
            <div className="text-center md:text-left">
              <p className="font-heading font-bold text-white text-2xl mb-1">
                FLH<span className="text-[#7C3AED]">.</span>
              </p>
              <p className="text-white/40 text-sm">Fator de Longo Horizonte</p>
              <p className="text-white/25 text-xs mt-1">13 de maio · São Paulo</p>
            </div>

            {/* Nav links */}
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3" aria-label="Links do rodapé">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/40 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Social */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://instagram.com/by.atlaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Atlaz (@by.atlaz)"
                  className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white/50 hover:text-white hover:border-[#7C3AED]/40 transition-colors duration-200"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/atlaz-society"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn da Atlaz"
                  className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white/50 hover:text-white hover:border-[#7C3AED]/40 transition-colors duration-200"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
              <p className="text-white/25 text-xs">@by.atlaz</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.05] my-10" />

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
            <p className="text-white/20 text-xs">
              © 2026 Atlaz · Todos os direitos reservados
            </p>
            <p className="text-white/20 text-xs">
              R. Pitu, 72 – 14º andar · Cidade Monções · São Paulo, Brooklin – SP
            </p>
          </div>
        </div>
      </footer>

      {/* Floating scroll-to-top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#7C3AED] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(124,58,237,0.4)] hover:bg-[#6D28D9] hover:shadow-[0_4px_28px_rgba(124,58,237,0.55)] transition-all duration-200 cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
