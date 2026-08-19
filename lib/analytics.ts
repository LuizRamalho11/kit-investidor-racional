/**
 * Camada de tracking preparada, sem scripts instalados.
 * Enquanto não houver pixel, cada chamada empilha em window.dataLayer
 * (criado sob demanda) e não faz mais nada — zero requisições.
 *
 * Para ligar depois: adicionar o script do Meta/GA em app/layout.tsx.
 * `Purchase` NÃO pertence a esta lista — quem dispara é a Kiwify.
 */

export type AnalyticsEvent =
  | "ViewContent"
  | "Scroll25"
  | "Scroll50"
  | "Scroll75"
  | "ClickCTA"
  | "ViewOffer"
  | "ClickCheckout"
  | "Lead";

export type CtaId = "hero" | "quiz" | "kit" | "offer" | "faq" | "final" | "sticky" | "header";

type Payload = Record<string, string | number | boolean | null>;

declare global {
  interface Window {
    dataLayer?: Payload[];
    fbq?: (command: string, event: string, payload?: Payload) => void;
    gtag?: (command: string, event: string, payload?: Payload) => void;
  }
}

export function track(event: AnalyticsEvent, payload: Payload = {}): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });

  window.fbq?.("track", event, payload);
  window.gtag?.("event", event, payload);
}

/** Clique em CTA: registra a intenção e identifica qual dos CTAs converteu. */
export function trackCtaClick(cta: CtaId, label: string): void {
  track("ClickCTA", { cta, label });
  track("ClickCheckout", { cta, content_name: "Kit Investidor Racional" });
}
