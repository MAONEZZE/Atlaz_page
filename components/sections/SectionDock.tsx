"use client";

import { useState, useEffect } from "react";
import { Home, BarChart2, Map, Play, MessageSquare, Users, Target, Ticket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "#topo",       icon: Home,         label: "Início" },
  { id: "#sobre",     icon: BarChart2,     label: "Números" },
  { id: "#jornada",   icon: Map,           label: "Jornada" },
  { id: "#depo",      icon: MessageSquare, label: "Depoimentos" },
  { id: "#mentores",  icon: Users,         label: "Mentores" },
  { id: "#forwhom",   icon: Target,        label: "Para quem" },
  { id: "#ingressos", icon: Ticket,        label: "Ingressos" },
];

export function SectionDock() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive]   = useState<string>("#topo");

  /* Track active section via IntersectionObserver */
  useEffect(() => {
    const targets = [
      { id: "topo",      slug: "#topo" },
      { id: "sobre",     slug: "#sobre" },
      { id: "jornada",   slug: "#jornada" },
      { id: "depo",      slug: "#depo" },
      { id: "mentores",  slug: "#mentores" },
      { id: "forwhom",   slug: "#forwhom" },
      { id: "ingressos", slug: "#ingressos" },
    ];

    // Trigger when section crosses the 40-60% band of the viewport
    // (i.e. is roughly centred on screen) — works for both short and tall sections
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const match = targets.find((t) => t.id === e.target.id);
            if (match) setActive(match.slug);
          }
        }
      },
      { threshold: 0, rootMargin: "-40% 0px -55% 0px" }
    );

    targets.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    /* Hidden on mobile — dock only shows on md+ screens */
    <div className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
      {sections.map(({ id, icon: Icon, label }) => {
        const isActive = active === id;
        return (
          <div
            key={id}
            className="relative flex items-center justify-end"
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Tooltip */}
            <AnimatePresence>
              {hovered === id && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0,  scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.92 }}
                  transition={{ duration: 0.14, ease: "easeOut" }}
                  className="absolute right-12 bg-[#1D0D45]/95 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-[#7C3AED]/25 whitespace-nowrap shadow-lg pointer-events-none"
                >
                  {label}
                  {/* Arrow */}
                  <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[5px] border-l-[#1D0D45]/95" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Icon button */}
            <motion.a
              href={id}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              aria-label={label}
              className={`w-10 h-10 rounded-full flex items-center justify-center border backdrop-blur-sm transition-colors duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#7C3AED] border-[#7C3AED] text-white shadow-[0_0_16px_rgba(124,58,237,0.55)]"
                  : "bg-[#0D0618]/75 border-white/[0.1] text-white/50 hover:text-white hover:border-[#7C3AED]/40 hover:bg-[#1D0D45]/80"
              }`}
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          </div>
        );
      })}
    </div>
  );
}
