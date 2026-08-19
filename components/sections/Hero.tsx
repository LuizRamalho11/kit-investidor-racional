import { Container, Eyebrow } from "@/components/ui/Section";
import { CtaButton, GhostLink } from "@/components/ui/CtaButton";
import { BookPlate } from "./BookPlate";
import { OFFER } from "@/lib/offer";
import { KIT_TOTALS } from "@/lib/kit";

/**
 * Responde "por que devo prestar atenção?" em oito segundos.
 *
 * Composição assimétrica 7/5. No mobile o CTA vem ANTES do mockup: quem
 * chegou pelo anúncio de oferta não deve precisar rolar para comprar.
 *
 * Server component — a entrada é CSS, não JS.
 */
export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 lg:pt-32 lg:pb-24">
      {/* luz dourada rasante, muito baixa — dá profundidade sem virar gradiente decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 size-[38rem] rounded-full opacity-[0.07] blur-[90px]"
        style={{ background: "radial-gradient(circle, #d4a438 0%, transparent 68%)" }}
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow className="anim-rise">
              Material educativo · Edição 2026 · Entrega imediata
            </Eyebrow>

            {/* anima só transform: mantém o LCP intacto */}
            {/* Duas frases, dois blocos: a quebra cai onde o sentido cai,
                em vez de deixar "Tem" órfão no fim de uma linha. */}
            <h1
              className="anim-rise-opaque t-display-xl mt-6 max-w-[22ch]"
              style={{ animationDelay: "80ms" }}
            >
              <span className="block">Você não tem falta de informação.</span>
              <span className="block">
                Tem falta de <span className="text-gold">critério</span>.
              </span>
            </h1>

            <p
              className="anim-rise t-body-l mt-7 max-w-[54ch] text-muted"
              style={{ animationDelay: "240ms" }}
            >
              O Kit Investidor Racional reúne o e-book de {KIT_TOTALS.pages} páginas e os três
              filtros que você roda antes de cada compra: 24 perguntas para ações, 25 para FIIs e
              o guia completo do imposto.{" "}
              <span className="text-parchment">Sem dica de ativo. Sem promessa de retorno.</span>
            </p>

            <div
              id="hero-cta"
              className="anim-rise mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
              style={{ animationDelay: "380ms" }}
            >
              <CtaButton cta="hero" label="Quero o Kit completo" size="lg" className="w-full sm:w-auto" />
              <GhostLink href="#kit">Ver o que tem dentro</GhostLink>
            </div>

            <p
              className="anim-rise mt-6 text-sm text-muted"
              style={{ animationDelay: "460ms" }}
            >
              {OFFER.deliveryNote} · {OFFER.paymentMethods.join(", ")} ·{" "}
              {OFFER.guaranteeDays} dias de garantia
            </p>
          </div>

          <div className="lg:col-span-5">
            <BookPlate />
          </div>
        </div>
      </Container>
    </section>
  );
}
