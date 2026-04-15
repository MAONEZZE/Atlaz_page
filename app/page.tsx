import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { VideoFrame } from "@/components/sections/VideoFrame";
import { Cases } from "@/components/sections/Cases";
import { EventCards } from "@/components/sections/EventCards";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { WhatIs } from "@/components/sections/WhatIs";
import { Testimonials } from "@/components/sections/Testimonials";
import { ImpactPhrase } from "@/components/sections/ImpactPhrase";
import { Mentors } from "@/components/sections/Mentors";
import { ForWhom } from "@/components/sections/ForWhom";
import { ApplicationForm } from "@/components/sections/ApplicationForm";
import { Footer } from "@/components/sections/Footer";
import { SectionDock } from "@/components/sections/SectionDock";

export default function Home() {
  return (
    <>
      <Nav />
      <SectionDock />
      <main>
        {/* 1. Hero */}
        <Hero />

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
          text="Você está a uma decisão de mudar a trajetória"
          highlight="do seu negócio."
          subtext="Empresários que crescem são os que param de improvisar e constroem com processo."
        />

        {/* 9. Mentores */}
        <Mentors />

        {/* 10. Frase impactante */}
        <ImpactPhrase
          text="Crescimento real começa quando você decide"
          highlight="parar de reagir e começar a construir."
        />

        {/* 11. Para quem é essa imersão */}
        <div id="forwhom">
          <ForWhom />
        </div>

        {/* 12. Escolha sua vaga */}
        <ApplicationForm />
      </main>
      <Footer />
    </>
  );
}
