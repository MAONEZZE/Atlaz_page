"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      aria-label="Voltar para a página anterior"
      className="inline-flex items-center gap-2 rounded-full border border-current/50 bg-white/5 px-4 py-2 text-sm text-current/70 transition-colors hover:bg-white/10 hover:text-offwhite"
    >
      <ArrowLeft className="h-4 w-4" />
      Voltar
    </button>
  );
}
