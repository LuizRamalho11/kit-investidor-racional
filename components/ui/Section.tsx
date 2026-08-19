import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

/**
 * Estrutura de seção do "livro-razão".
 *
 * A numeração só aparece onde existe sequência real (as camadas do filtro,
 * os itens do kit). Nas demais seções ela é omitida — marcador numerado em
 * conteúdo que não é sequência decora em vez de informar.
 */

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn("t-label text-gold", className)}>{children}</p>;
}

export function Rule({ className }: { className?: string }) {
  return <hr className={cn("border-0 border-t border-rule", className)} />;
}

export function Section({
  id,
  children,
  className,
  bleed,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  /** fundo levemente elevado, para separar blocos sem usar card */
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-20 sm:py-24 lg:py-32",
        bleed && "bg-ledger",
        className,
      )}
    >
      {bleed && <Rule className="absolute inset-x-0 top-0" />}
      <Container>{children}</Container>
      {bleed && <Rule className="absolute inset-x-0 bottom-0" />}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn(align === "center" && "text-center", className)}>
      {eyebrow ? <Eyebrow className="mb-5">{eyebrow}</Eyebrow> : null}
      <h2 className={cn("t-display-l max-w-[20ch]", align === "center" && "mx-auto")}>{title}</h2>
      {lead ? (
        <div
          className={cn(
            "t-body-l mt-6 max-w-[58ch] text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </div>
      ) : null}
    </Reveal>
  );
}
