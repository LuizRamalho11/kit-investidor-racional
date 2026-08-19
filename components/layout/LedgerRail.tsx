"use client";

import { useEffect, useState } from "react";

/**
 * A "margem de razão": fio condutor da página.
 * Rail fixo à esquerda com o registro atual e um fio dourado que preenche
 * conforme o scroll — como a margem numerada de um livro contábil.
 *
 * O preenchimento é animação CSS dirigida por scroll (classe .rail-fill):
 * roda no compositor, sem listener e sem render do React. O JavaScript
 * aqui existe só para saber em qual registro o leitor está.
 *
 * Só aparece a partir de 1280 px, onde há margem sobrando de verdade.
 */

const REGISTERS = [
  { id: "problema", label: "O problema" },
  { id: "custo", label: "O custo" },
  { id: "filtro", label: "O filtro" },
  { id: "kit", label: "O kit" },
  { id: "diagnostico", label: "Diagnóstico" },
  { id: "dentro", label: "Por dentro" },
  { id: "publico", label: "Para quem" },
  { id: "oferta", label: "A oferta" },
  { id: "faq", label: "Dúvidas" },
] as const;

export function LedgerRail() {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const sections = REGISTERS.map((register) => document.getElementById(register.id)).filter(
      (element): element is HTMLElement => element !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (!visible) return;
        setActiveIndex(sections.indexOf(visible.target as HTMLElement));
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const active = activeIndex >= 0 ? REGISTERS[activeIndex] : undefined;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-8 z-40 hidden h-screen w-px xl:block"
    >
      <div className="absolute inset-0 bg-rule" />
      <div className="rail-fill absolute inset-0 origin-top bg-gold/55" />
      {active ? (
        <div className="absolute top-1/2 left-4 -translate-y-1/2 whitespace-nowrap">
          <span className="t-label block text-gold">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span className="t-label mt-2 block text-muted" style={{ writingMode: "vertical-rl" }}>
            {active.label}
          </span>
        </div>
      ) : null}
    </div>
  );
}

/** Fios verticais do razão. Puramente estrutural, some no mobile. */
export function LedgerGrid() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 hidden lg:block">
      <div className="mx-auto h-full w-full max-w-[1240px] px-12">
        <div className="grid h-full grid-cols-4">
          {[0, 1, 2, 3].map((column) => (
            <div key={column} className="border-l border-rule/45" />
          ))}
        </div>
      </div>
    </div>
  );
}
