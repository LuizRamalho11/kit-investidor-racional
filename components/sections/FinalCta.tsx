import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";
import { OFFER, formatPrice } from "@/lib/offer";
import { KIT_TOTALS } from "@/lib/kit";

/**
 * Responde "por que comprar agora?" — sem urgência falsa.
 *
 * Nada de contador regressivo ou "últimas vagas": produto digital não tem
 * estoque, e escassez inventada é detectável. A urgência real aqui é o
 * custo do tempo, que é o argumento que o próprio e-book sustenta.
 */
export function FinalCta() {
  const price = formatPrice();

  return (
    <section className="relative overflow-hidden border-t border-rule bg-ledger py-28 lg:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-1/2 size-[46rem] -translate-x-1/2 rounded-full opacity-[0.09] blur-[110px]"
        style={{ background: "radial-gradient(circle, #d4a438 0%, transparent 70%)" }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-[46rem] text-center">
          <Reveal>
            <p className="t-display-l text-parchment">
              O mercado transfere dinheiro dos impacientes para os{" "}
              <span className="text-gold">pacientes</span>.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="t-body-l mx-auto mt-8 max-w-[54ch] text-muted">
              Você não precisa de mais um vídeo. Precisa de uma sequência de perguntas que
              funcione às três da tarde de uma segunda-feira de queda, quando a decisão é difícil
              e a emoção está no comando.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="t-data mt-10 text-muted">
              {KIT_TOTALS.files} arquivos {price ? `· ${price} ` : ""}· chegam no seu e-mail em
              minutos
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex justify-center">
              <CtaButton
                cta="final"
                label="Começar com critério"
                size="lg"
                className="w-full sm:w-auto"
              />
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mt-6 text-sm text-muted">
              {OFFER.guaranteeDays} dias de garantia · {OFFER.paymentMethods.join(", ")}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
