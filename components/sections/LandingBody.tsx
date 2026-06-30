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
/** Divisória dourada entre transições de seção. */
function Divider() {
  return (
    <div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-[#d8b673]/40 to-transparent" />
  );
}

export function LandingBody({ hero }: { hero: ReactNode }) {
  return (
    <>
      <Nav />
      <SectionDock />
      <main>
        {/* 1. Topo (Hero da home ou cartão da pessoa) */}
        {hero}

        <Divider />
        {/* 2. Vídeo do evento com overlay e texto sobre o FLH */}
        <VideoFrame />

        <Divider />
        {/* 3. Números que falam — sem título */}
        <Cases />

        <Divider />
        {/* 4. Cards superficiais do dia do evento */}
        <EventCards />

        <Divider />
        {/* 5. Frase impactante isolada */}
        <QuoteSection />

        <Divider />
        {/* 6. Uma tarde que muda sua visão — detalhado */}
        <WhatIs />

        <Divider />
        {/* 7. Depoimentos */}
        <div id="depo">
          <Testimonials />
        </div>

        <Divider />
        {/* 8. Frase impactante */}
        <ImpactPhrase
          text="Você está a uma decisão de mudar o patamar comercial"
          highlight="do seu negócio."
        />

        <Divider />
        {/* 9. Mentores */}
        <Mentors />

        <Divider />
        {/* 10. Frase impactante */}
        <ImpactPhrase
          text="Crescimento real começa quando você deixa de buscar soluções isoladas e passa a construir"
          highlight="processo, posicionamento e direção comercial."
        />

        <Divider />
        {/* 11. Para quem é essa imersão */}
        <div id="forwhom">
          <ForWhom />
        </div>

        <Divider />
        {/* 11.5. Faixa de marcas/patrocinadores — carrossel infinito */}
        <SponsorCarousel />

        <Divider />
        {/* 12. Escolha sua vaga */}
        <ApplicationForm />
      </main>
      <Footer />
    </>
  );
}
