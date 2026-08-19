"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { formatPrice } from "@/lib/offer";
import { CtaButton } from "@/components/ui/CtaButton";
import { Wordmark } from "@/components/marks/BrandMark";
import { Container } from "@/components/ui/Section";

/**
 * Sem menu de navegação: numa página de conversão, cada link é uma rota
 * de fuga. Só marca, preço e — depois de 80 px de scroll — o CTA.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const price = formatPrice();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200 ease-[ease]",
        scrolled ? "border-b border-rule bg-ink/85 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#topo"
          className="rounded-[2px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-parchment"
        >
          <span className="sr-only">Kit Investidor Racional — início</span>
          <Wordmark />
        </a>

        <div className="flex items-center gap-5">
          {price ? (
            <span className="t-data hidden text-muted sm:inline">{price}</span>
          ) : null}
          <div
            className={cn(
              "hidden transition-opacity duration-200 ease-[ease] sm:block",
              scrolled ? "opacity-100" : "pointer-events-none opacity-0",
            )}
            aria-hidden={!scrolled}
          >
            <CtaButton
              cta="header"
              label="Quero o Kit"
              showPrice={false}
              className="px-5 py-2.5 text-sm"
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
