"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Jornada", href: "#jornada" },
  { label: "Mentores", href: "#mentores" },
  { label: "Ingressos", href: "#ingressos" },
];

// April 28 2026 at 13:00 BRT (UTC-3) = 16:00 UTC
const EVENT_UTC = new Date("2026-04-28T16:00:00.000Z").getTime();

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function Countdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0, expired: false });

  useEffect(() => {
    function tick() {
      const diff = EVENT_UTC - Date.now();
      if (diff <= 0) {
        setT({ d: 0, h: 0, m: 0, s: 0, expired: true });
        return;
      }
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
        expired: false,
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (t.expired) {
    return (
      <span className="text-[#7C3AED] text-xs font-semibold uppercase tracking-wider">
        Evento em andamento!
      </span>
    );
  }

  return (
    <div className="flex items-center gap-1.5 md:gap-3" aria-live="off">
      {[
        { value: t.d,  unit: "dias" },
        { value: t.h,  unit: "h" },
        { value: t.m,  unit: "m" },
        { value: t.s,  unit: "s" },
      ].map(({ value, unit }, i) => (
        <div key={unit} className="flex items-center gap-1 md:gap-1.5">
          {i > 0 && <span className="text-white/25 text-xs md:text-sm">·</span>}
          <div className="flex items-baseline gap-0.5 md:gap-1">
            <span className="font-mono font-bold text-white text-sm md:text-2xl tabular-nums leading-none">
              {unit === "dias" ? value : pad(value)}
            </span>
            <span className="text-[#C77DFF]/80 text-[9px] md:text-[11px] font-semibold">{unit}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0618]/90 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-heading font-bold text-xl text-white tracking-wide flex-shrink-0">
          FLH<span className="text-[#7C3AED]">.</span>
        </a>

        {/* Countdown — center */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center">
          <p className="text-white/30 text-[9px] font-semibold uppercase tracking-[0.15em] mb-0.5">
            28 abril · São Paulo
          </p>
          <Countdown />
        </div>

        {/* Right: CTA */}
        <div className="hidden md:flex items-center flex-shrink-0">
          <a
            href="#ingressos"
            className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-[#7C3AED] text-white text-sm font-semibold hover:bg-[#6D28D9] transition-colors duration-200 cursor-pointer"
          >
            Inscreva-se
          </a>
        </div>

        {/* Mobile: countdown + menu button */}
        <div className="md:hidden flex items-center gap-3">
          <Countdown />
          <button
            className="text-white/60 hover:text-white cursor-pointer p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0D0618]/95 backdrop-blur-md border-t border-white/[0.06] overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Menu móvel">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white text-sm py-2.5 border-b border-white/[0.05] last:border-0 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#ingressos"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#7C3AED] text-white text-sm font-semibold hover:bg-[#6D28D9] transition-colors mt-3 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Inscreva-se
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
