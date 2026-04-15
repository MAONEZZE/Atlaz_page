"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 70,
    prefix: "+",
    label: "Marcas aceleradas",
    sublabel: "em diferentes segmentos",
  },
  {
    value: 50,
    prefix: "+R$",
    suffix: "M",
    label: "Gerados",
    sublabel: "em vendas de alto valor",
  },
  {
    value: 80,
    prefix: "+",
    label: "Empresários Transformados",
    sublabel: "com método e direção",
  }
];

function CountUp({
  target,
  prefix = "",
  suffix = "",
  inView,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const totalFrames = 60;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.round(eased * target));
      if (frame >= totalFrames) clearInterval(timer);
    }, 1500 / totalFrames);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function Cases() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" className="relative py-16 px-4">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent" />

      <div className="relative max-w-5xl mx-auto" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="cursor-default"
            >
              <p className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-none bg-gradient-to-br from-white via-[#C77DFF] to-[#7C3AED] bg-clip-text text-transparent">
                <CountUp
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </p>
              <p className="text-white/70 text-sm font-semibold mt-3 leading-snug">{stat.label}</p>
              <p className="text-white/30 text-xs mt-1">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
