"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "A imersão é para qualquer tipo de negócio?",
    answer: "Criada para empresários que querem acelerar vendas de alto valor. Faz mais sentido para negócios que vendem soluções, serviços, mentorias, consultorias, expertise ou ofertas com valor elevado.",
  },
  {
    question: "É um evento mais teórico ou mais prático?",
    answer: "Estratégica e aplicada. Aprofunda visão, critério e direção para aplicação real no negócio.",
  },
  {
    question: "Posso levar alguém do meu time?",
    answer: "Se fizer sentido, isso pode ser avaliado. O ideal é que seja alguém com poder de decisão ou influência direta sobre a área comercial.",
  },
  {
    question: "Existe processo seletivo?",
    answer: "Sim. Após a inscrição, faremos uma ligação de triagem para garantir que o perfil é o adequado para a experiência.",
  },
  {
    question: "O valor pode ser parcelado?",
    answer: "Sim, o parcelamento está disponível. Isso será detalhado na ligação de triagem.",
  },
  {
    question: "O evento será transmitido ao vivo?",
    answer: "Não. A imersão é presencial e exclusiva. A proposta é profundidade, critério e qualidade de sala — não volume.",
  },
  {
    question: "Onde será realizado o evento?",
    answer: "Auditório da Investidores.VC — R. Pitu, 72 – 14º andar – Cidade Monções, São Paulo, Brooklin – SP, 04567-060.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="text-[#7C3AED] text-xs font-bold uppercase tracking-[0.2em] mb-4">FAQ</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card p-6 md:p-8"
        >
          <Accordion className="space-y-2">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={i}
                className="border-white/[0.08] border-b last:border-0"
              >
                <AccordionTrigger className="text-white/80 hover:text-[#7C3AED] text-left text-sm md:text-base font-medium py-4 hover:no-underline transition-colors duration-200">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 text-sm leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
