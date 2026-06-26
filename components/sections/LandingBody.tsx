import type { ReactNode } from "react";
import { Nav } from "@/components/sections/Nav";
import { VideoFrame } from "@/components/sections/VideoFrame";
import { Cases } from "@/components/sections/Cases";
import { EventCards } from "@/components/sections/EventCards";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { WhatIs } from "@/components/sections/WhatIs";
import { Testimonials } from "@/components/sections/Testimonials";
import { ImpactPhrase } from "@/components/sections/ImpactPhrase";
import { Mentors } from "@/components/sections/Mentors";
import { ForWhom } from "@/components/sections/ForWhom";
import { SponsorCarousel } from "@/components/sections/SponsorCarousel";
import { ApplicationForm } from "@/components/sections/ApplicationForm";
import { Footer } from "@/components/sections/Footer";
import { SectionDock } from "@/components/sections/SectionDock";

/**
 * Corpo reusável da landing. Recebe o topo (`hero`) via slot — a home passa
 * <Hero />, a página de pessoa passa <PerfilCard />. Tudo abaixo é idêntico,
 * evitando duplicação/drift entre as duas rotas.
 */
export function LandingBody({ hero }: { hero: ReactNode }) {
  return (
    <>
      <Nav />
      <SectionDock />
      <main>
        {/* 1. Topo (Hero da home ou cartão da pessoa) */}
        {hero}

        {/* 2. Vídeo do evento com overlay e texto sobre o FLH */}
        <VideoFrame />

        {/* 3. Números que falam — sem título */}
        <Cases />

        {/* 4. Cards superficiais do dia do evento */}
        <EventCards />

        {/* 5. Frase impactante isolada */}
        <QuoteSection />

        {/* 6. Uma tarde que muda sua visão — detalhado */}
        <WhatIs />

        {/* 7. Depoimentos */}
        <div id="depo">
          <Testimonials />
        </div>

        {/* 8. Frase impactante */}
        <ImpactPhrase
          text="Você está a uma decisão de mudar o patamar comercial"
          highlight="do seu negócio."
        />

        {/* 9. Mentores */}
        <Mentors />

        {/* 10. Frase impactante */}
        <ImpactPhrase
          text="Crescimento real começa quando você deixa de buscar soluções isoladas e passa a construir"
          highlight="processo, posicionamento e direção comercial."
        />

        {/* 11. Para quem é essa imersão */}
        <div id="forwhom">
          <ForWhom />
        </div>

        {/* 11.5. Faixa de marcas/patrocinadores — carrossel infinito */}
        <SponsorCarousel />

        {/* 12. Escolha sua vaga */}
        <ApplicationForm />
      </main>
      <Footer />
    </>
  );
}
