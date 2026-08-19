import type { ReactNode } from "react";
import Link from "next/link";
import { Wordmark } from "@/components/marks/BrandMark";
import { Rule } from "@/components/ui/Section";

/**
 * Casca das páginas legais. Elas são exigidas para a verificação de
 * domínio no Meta Business e para a qualidade da landing page no Google
 * Ads — e, neste nicho, ler bem também aumenta a confiança.
 */
export function LegalDocument({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-[68ch]">
      <Link
        href="/"
        className="inline-block rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-parchment"
      >
        <Wordmark />
      </Link>

      <h1 className="t-display-l mt-12">{title}</h1>
      <p className="t-label mt-5 text-muted">Última atualização · {updated}</p>

      <Rule className="my-12" />

      <div
        className={[
          "space-y-6 text-muted",
          "[&_h2]:t-h3 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-parchment",
          "[&_p]:leading-relaxed",
          "[&_ul]:space-y-2.5 [&_ul]:pl-5 [&_li]:list-disc",
          "[&_strong]:font-medium [&_strong]:text-parchment",
          "[&_a]:text-gold [&_a]:underline [&_a]:underline-offset-4",
        ].join(" ")}
      >
        {children}
      </div>

      <Rule className="my-12" />

      <Link
        href="/"
        className="t-label text-gold transition-colors duration-200 hover:text-gold-lift"
      >
        ← Voltar para a página
      </Link>
    </article>
  );
}
