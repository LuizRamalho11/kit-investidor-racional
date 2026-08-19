"use client";

import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics";

/**
 * Instrumentação de profundidade de scroll. Não carrega script nenhum:
 * enquanto não houver pixel configurado, os eventos só empilham em
 * window.dataLayer. Cada marco dispara uma única vez.
 */
export function ScrollTracker() {
  const fired = useRef(new Set<number>());

  useEffect(() => {
    track("ViewContent", { content_name: "Kit Investidor Racional" });

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        const scrollable = document.body.scrollHeight - window.innerHeight;
        if (scrollable <= 0) return;
        const percent = (window.scrollY / scrollable) * 100;
        for (const milestone of [25, 50, 75] as const) {
          if (percent >= milestone && !fired.current.has(milestone)) {
            fired.current.add(milestone);
            track(`Scroll${milestone}`);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}

/** Dispara ViewOffer quando a seção de oferta entra na tela. */
export function OfferTracker() {
  useEffect(() => {
    const offer = document.getElementById("oferta");
    if (!offer) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          track("ViewOffer");
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(offer);
    return () => observer.disconnect();
  }, []);

  return null;
}
