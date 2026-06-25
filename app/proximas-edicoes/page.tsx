import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { EditionsCalendar } from "@/components/sections/EditionsCalendar";

export const metadata: Metadata = {
  title: "Próximas edições · Fator de Longo Horizonte",
  description: "Calendário das próximas edições da imersão Fator de Longo Horizonte.",
};

export default function ProximasEdicoesPage() {
  return (
    <>
      <Nav />
      <main className="relative pt-28 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
              Próximas edições
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Confira no calendário as datas das próximas edições da imersão. Os dias
              destacados em roxo são as edições confirmadas.
            </p>
          </header>

          <EditionsCalendar />
        </div>
      </main>
    </>
  );
}
