"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Observa a entrada do elemento na viewport, uma única vez.
 *
 * Substitui a dependência de biblioteca de animação para o padrão de
 * revelação da página. Desconecta o observer assim que dispara — nenhum
 * trabalho residual durante o scroll.
 */
export function useInView<T extends HTMLElement>(amount = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Navegador com JS mas sem IntersectionObserver (pré-2019): escreve o
    // atributo direto no DOM. Atualizar um sistema externo é justamente o
    // que um efeito deve fazer — e evita um render em cascata.
    if (typeof IntersectionObserver === "undefined") {
      element.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: amount, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [amount]);

  return { ref, inView };
}
