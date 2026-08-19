"use client";

import type { MouseEvent, ReactNode } from "react";
import { ArrowRight } from "@/components/marks/icons";
import { cn } from "@/lib/cn";
import { trackCtaClick, type CtaId } from "@/lib/analytics";
import { OFFER, checkoutHref, withPrice } from "@/lib/offer";

/**
 * Único caminho para o checkout em toda a aplicação. A URL vive em
 * lib/offer.ts e não é escrita à mão em lugar nenhum.
 *
 * Microinteração: um fio cresce da esquerda sob o botão. Sem escala no
 * hover — é o gesto mais genérico que existe. A escala fica reservada ao
 * :active, onde comunica pressão real.
 */

type CtaButtonProps = {
  /** identifica qual dos CTAs converteu, para leitura de funil */
  cta: CtaId;
  label: string;
  /** anexa o preço ao rótulo quando ele estiver definido */
  showPrice?: boolean;
  size?: "md" | "lg";
  className?: string;
};

export function CtaButton({
  cta,
  label,
  showPrice = true,
  size = "md",
  className,
}: CtaButtonProps) {
  const text = showPrice ? withPrice(label) : label;
  const ready = Boolean(OFFER.checkoutUrl);

  /**
   * Os UTMs são anexados no clique, não em estado: o href renderizado no
   * servidor já é o destino certo, e clique com modificador (nova aba,
   * nova janela) segue o caminho nativo do navegador.
   */
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackCtaClick(cta, label);

    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;

    const augmented = checkoutHref(window.location.search);
    if (augmented && augmented !== OFFER.checkoutUrl) {
      event.preventDefault();
      window.location.href = augmented;
    }
  }

  const shared = cn(
    "group relative isolate inline-flex items-center justify-center gap-2.5 overflow-hidden",
    "rounded-[3px] bg-gold font-medium text-ink",
    "shadow-[0_0_32px_-8px_rgba(212,164,56,0.55)]",
    "transition-[background-color,transform] duration-[120ms] ease-out",
    "hover:bg-gold-lift active:scale-[0.98]",
    "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-parchment",
    size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3.5 text-base",
    !ready && "cursor-not-allowed",
    className,
  );

  const inner = (
    <>
      <span className="relative z-10">{text}</span>
      <ArrowRight className="relative z-10 size-[1.1em] transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
      {/* fio que cresce da esquerda — transform puro, roda na GPU */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-ink/35 transition-transform duration-200 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-x-100"
      />
    </>
  );

  if (!ready) {
    return (
      <button
        type="button"
        disabled
        title="Checkout em configuração"
        aria-describedby={`cta-pending-${cta}`}
        className={shared}
      >
        {inner}
        <span id={`cta-pending-${cta}`} className="sr-only">
          O link de checkout ainda não foi configurado.
        </span>
      </button>
    );
  }

  return (
    <a href={OFFER.checkoutUrl ?? undefined} onClick={handleClick} className={shared} rel="noopener">
      {inner}
    </a>
  );
}

/** CTA secundário: âncora interna, sem competir visualmente com o primário. */
export function GhostLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-muted",
        "transition-colors duration-200 ease-[ease] hover:text-parchment",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-parchment",
        className,
      )}
    >
      <span className="border-b border-rule pb-0.5 transition-colors duration-200 group-hover:border-gold">
        {children}
      </span>
    </a>
  );
}
