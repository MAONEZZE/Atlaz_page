import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0D0618] px-4">
      {/* Glow roxo ambiente */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/[0.1] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-md">
        <p className="text-[#7C3AED] text-xs font-bold uppercase tracking-[0.2em] mb-4">
          Erro 404
        </p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Página não encontrada
        </h1>
        <p className="text-white/60 text-lg mb-10 leading-relaxed">
          Esse perfil não existe ou o link está incorreto.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#7C3AED] text-white font-semibold text-base hover:bg-[#6D28D9] transition-colors duration-200 cursor-pointer shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:shadow-[0_0_50px_rgba(124,58,237,0.35)]"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
