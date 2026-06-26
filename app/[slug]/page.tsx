import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingBody } from "@/components/sections/LandingBody";
import { PerfilCard } from "@/components/PerfilCard";
import {
  PessoaRepository,
  descricaoPessoa,
  tituloPagina,
  type Pessoa,
} from "@/lib/pessoa";

const PREFIXO = "by.";

/** slug → Pessoa, ou null se não for um slug `by.{id}` válido. */
function resolverPessoa(slug: string): Pessoa | null {
  if (!slug.startsWith(PREFIXO)) return null;
  const id = slug.slice(PREFIXO.length);
  return PessoaRepository.buscarPorId(id);
}

export function generateStaticParams(): { slug: string }[] {
  return PessoaRepository.todosIds().map((id) => ({ slug: `${PREFIXO}${id}` }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pessoa = resolverPessoa(slug);
  if (!pessoa) return {};
  return {
    title: tituloPagina(pessoa),
    description: descricaoPessoa(pessoa),
  };
}

export default async function PaginaPessoa({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pessoa = resolverPessoa(slug);
  if (!pessoa) notFound();

  return <LandingBody hero={<PerfilCard pessoa={pessoa} />} />;
}
