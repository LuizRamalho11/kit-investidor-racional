/** Constantes do site. O domínio real entra via NEXT_PUBLIC_SITE_URL. */

export const SITE = {
  name: "Kit Investidor Racional",
  shortName: "Investidor Racional",
  /**
   * Domínio. Ordem: variável explícita > URL de produção da Vercel >
   * placeholder. O fallback da Vercel existe para que canonical, Open
   * Graph e sitemap apontem para um endereço que responde de verdade
   * enquanto o domínio final não entra.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://kitinvestidorracional.com.br"),
  /**
   * Bloqueia indexação enquanto NÃO houver domínio próprio configurado.
   *
   * O padrão é seguro por decisão: um .vercel.app indexado vira conteúdo
   * duplicado do domínio real depois, e é trabalhoso de desfazer. No dia
   * em que NEXT_PUBLIC_SITE_URL apontar para o domínio final, a página
   * passa a ser indexável sozinha — não há como esquecer de destravar.
   */
  noindex:
    process.env.NEXT_PUBLIC_NOINDEX === "1" || !process.env.NEXT_PUBLIC_SITE_URL,
  locale: "pt_BR",
  lang: "pt-BR",
  edition: "2026",
  title: "Kit Investidor Racional — E-book + 3 checklists para investir com critério",
  description:
    "E-book de 55 páginas e 3 filtros práticos: 24 perguntas para ações, 25 para FIIs e o guia completo de tributação. Material educativo, sem dica de ativo.",
  /** [REQUIRES REAL DATA] exigidos pelo Meta Business e pelo Google Ads */
  legal: {
    entity: process.env.NEXT_PUBLIC_LEGAL_ENTITY ?? null,
    cnpj: process.env.NEXT_PUBLIC_LEGAL_CNPJ ?? null,
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? null,
  },
} as const;

export const ogImage = {
  url: "/og/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Kit Investidor Racional — você não tem falta de informação, tem falta de critério.",
} as const;
