import { cn } from "@/lib/cn";

/**
 * Reprodução fiel de uma página do material, em HTML.
 *
 * NÃO é decorativa: são as perguntas reais dos checklists, e são a prova
 * principal da página. Por isso deixou de ser aria-hidden na auditoria —
 * escondê-la tirava a prova de quem usa leitor de tela e do indexador.
 *
 * Preferida a uma captura de tela por três motivos: fica nítida em qualquer
 * densidade de pixel, pesa zero quilobyte de imagem, e o texto continua
 * sendo texto — legível por leitor de tela e indexável. O conteúdo exibido
 * é o real, retirado dos PDFs.
 */

type DocumentPlateProps = {
  kicker: string;
  title: string;
  lines: string[];
  footer: string;
  className?: string;
  /** checkbox para os checklists, marcador neutro para os demais */
  variant?: "checklist" | "index";
};

export function DocumentPlate({
  kicker,
  title,
  lines,
  footer,
  className,
  variant = "checklist",
}: DocumentPlateProps) {
  return (
    <figure
      className={cn(
        "relative border border-rule bg-ledger p-6 sm:p-8",
        className,
      )}
    >
      <p className="t-label text-[0.6rem] text-gold">{kicker}</p>
      <p className="font-display mt-3 text-xl leading-tight font-semibold text-gold">{title}</p>
      <div className="mt-5 h-px bg-gradient-to-r from-gold/70 to-transparent" />

      <ul className="mt-6 space-y-3.5">
        {lines.map((line) => (
          <li key={line} className="flex items-start gap-3">
            {variant === "checklist" ? (
              <span aria-hidden="true" className="mt-[0.2rem] size-3.5 shrink-0 border border-muted" />
            ) : (
              <span aria-hidden="true" className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-gold" />
            )}
            <span className="text-[0.8125rem] leading-snug text-parchment/85">{line}</span>
          </li>
        ))}
      </ul>

      <figcaption className="mt-7 border-t border-rule pt-4 text-[0.7rem] leading-relaxed text-muted">
        {footer}
      </figcaption>
    </figure>
  );
}
