import pessoasJson from "@/data/pessoas.json";

// ---------------------------------------------------------------------------
// Domínio: Pessoa é um objeto plano serializável (NÃO classe com métodos),
// pois cruza a fronteira server→client (page RSC → PerfilCard client).
// Comportamento derivado vive em funções puras abaixo.
// ---------------------------------------------------------------------------

export interface Secao {
  titulo: string;
  descricao: string;
}

export interface Contatos {
  instagram?: string;
  linkedin?: string;
}

export interface ImgStyle {
  objectPosition?: string;
  transform?: string;
}

/** Espelha exatamente o formato de cada bloco em data/pessoas.json. */
export interface PessoaRaw {
  nome: string;
  cargo: string;
  empresa: string;
  fotoPath?: string;
  imgStyle?: ImgStyle;
  contatos?: Contatos;
  secoes: Secao[];
}

export interface Pessoa extends PessoaRaw {
  id: string;
}

/** Factory: junta o id (chave da URL) ao bloco cru. */
export function criarPessoa(id: string, raw: PessoaRaw): Pessoa {
  return { id, ...raw };
}

// ---------------------------------------------------------------------------
// Helpers puros — comportamento derivado da Pessoa
// ---------------------------------------------------------------------------

export function nomeCompleto(p: Pessoa): string {
  return p.nome;
}

/** "Cargo · Empresa" (ou só um dos dois se o outro faltar). */
export function cargoCompleto(p: Pessoa): string {
  return [p.cargo, p.empresa].filter(Boolean).join(" · ");
}

export function urlPagina(p: Pessoa): string {
  return `/by.${p.id}`;
}

export function tituloPagina(p: Pessoa): string {
  return `${p.nome} — ${cargoCompleto(p)}`;
}

export function descricaoPessoa(p: Pessoa): string {
  const primeira = p.secoes[0]?.descricao;
  return primeira ?? `${p.nome} · ${cargoCompleto(p)}`;
}

/**
 * Caminho público da foto.
 * - Usa `fotoPath` quando informado, normalizando: tira barras iniciais +
 *   prefixo `public/`, recoloca uma barra na frente.
 * - Senão, convenção `/emb/{id}.webp`.
 */
export function fotoPerfil(p: Pessoa): string {
  if (p.fotoPath && p.fotoPath.trim()) {
    const limpo = p.fotoPath
      .trim()
      .replace(/^\/+/, "")
      .replace(/^public\//, "");
    return `/${limpo}`;
  }
  return `/emb/${p.id}.webp`;
}

export function inicial(p: Pessoa): string {
  return (p.nome.trim()[0] ?? "?").toUpperCase();
}

/** Normaliza handle (ou URL) do Instagram → URL completa; null se vazio. */
export function instagramUrl(p: Pessoa): string | null {
  const v = p.contatos?.instagram?.trim();
  if (!v) return null;
  if (/^https?:\/\//i.test(v)) return v;
  return `https://instagram.com/${v.replace(/^@/, "")}`;
}

/** Normaliza handle (ou URL) do LinkedIn → URL completa; null se vazio. */
export function linkedinUrl(p: Pessoa): string | null {
  const v = p.contatos?.linkedin?.trim();
  if (!v) return null;
  if (/^https?:\/\//i.test(v)) return v;
  return `https://www.linkedin.com/in/${v.replace(/^@/, "")}`;
}

// ---------------------------------------------------------------------------
// Repositório — único ponto que conhece a fonte de dados.
// Trocar JSON → Supabase fica isolado aqui.
// ---------------------------------------------------------------------------

const raw = pessoasJson as Record<string, PessoaRaw>;

export const PessoaRepository = {
  todos(): Pessoa[] {
    return Object.entries(raw).map(([id, r]) => criarPessoa(id, r));
  },

  todosIds(): string[] {
    return Object.keys(raw);
  },

  buscarPorId(id: string): Pessoa | null {
    const r = raw[id];
    return r ? criarPessoa(id, r) : null;
  },
};
