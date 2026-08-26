"use client";

import { useState, useEffect } from "react";
import { Home, BarChart2, Map, MessageSquare, Users, Target, Ticket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "#topo",      icon: Home,          label: "Início" },
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

  /* Track active section via IntersectionObserver — the topmost section
     crossing a thin band ~40% down the viewport wins. */
  useEffect(() => {
    const ids = ["topo", "sobre", "jornada", "depo", "mentores", "forwhom", "ingressos"];
    const visible = new Set<string>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        }
        /* First intersecting section in DOM order. Keep previous when none. */
        for (const id of ids) {
          if (visible.has(id)) {
            setActive("#" + id);
            break;
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
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
                  className="absolute right-12 bg-bg-dark-2/95 backdrop-blur-sm text-offwhite text-xs font-medium px-3 py-1.5 rounded-lg border border-accent/25 whitespace-nowrap shadow-lg pointer-events-none"
                >
                  {label}
                  {/* Arrow */}
                  <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[5px] border-l-bg-dark-2/95" />
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
              className={`w-10 h-10 rounded-full flex items-center justify-center border backdrop-blur-sm transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-accent border-accent text-bg-dark scale-110 shadow-[0_0_18px_rgba(142,221,101,0.6)]"
                  : "bg-bg-dark/75 border-current/50 text-current/50 hover:text-offwhite hover:border-accent/40 hover:bg-bg-dark-2/80"
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
