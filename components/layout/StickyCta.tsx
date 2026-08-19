"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { formatPrice, OFFER } from "@/lib/offer";
import { CtaButton } from "@/components/ui/CtaButton";

/**
 * CTA fixo do mobile.
 *
 * Aparece quando o CTA do herói sai da tela e some quando a seção de oferta
 * entra — dois CTAs disputando a mesma decisão atrapalham em vez de ajudar.
 * Respeita a safe area do iOS.
 *
 * Transição em CSS (transform + opacity). Fica com aria-hidden e
 * pointer-events desligados quando invisível, para não virar armadilha
 * de foco para quem navega por teclado.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);
  const price = formatPrice();

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    const offer = document.getElementById("oferta");
    if (!heroCta) return;

    let heroGone = false;
    let offerVisible = false;
    const sync = () => setVisible(heroGone && !offerVisible);

    const heroObserver = new IntersectionObserver(
      (entries) => {
        heroGone = !entries.some((entry) => entry.isIntersecting);
        sync();
      },
      { threshold: 0 },
    );
    heroObserver.observe(heroCta);

    let offerObserver: IntersectionObserver | undefined;
    if (offer) {
      offerObserver = new IntersectionObserver(
        (entries) => {
          offerVisible = entries.some((entry) => entry.isIntersecting);
          sync();
        },
        { threshold: 0 },
      );
      offerObserver.observe(offer);
    }

    return () => {
      heroObserver.disconnect();
      offerObserver?.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      inert={!visible || undefined}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-rule bg-ink/92 backdrop-blur-md sm:hidden",
        "transition-[transform,opacity] duration-[260ms] ease-[cubic-bezier(0.165,0.84,0.44,1)]",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          {price ? (
            <p className="t-data leading-tight text-parchment">{price}</p>
          ) : (
            <p className="t-label leading-tight text-gold">Kit completo</p>
          )}
          <p className="truncate text-xs leading-tight text-muted">{OFFER.deliveryNote}</p>
        </div>
        <CtaButton
          cta="sticky"
          label="Quero o Kit"
          showPrice={false}
          className="shrink-0 px-5 py-3 text-sm"
        />
      </div>
    </div>
  );
}
