import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { InflationDecay } from "@/components/charts/InflationDecay";

/**
 * Agitação honesta. O custo não é o retorno que a pessoa deixa de ter —
 * isso seria promessa disfarçada. É o dano que ela já está tomando.
 *
 * Os seis erros saem do Capítulo 7 do e-book, sem exagero de linguagem.
 */

const ERRORS = [
  "Investir antes de ter reserva de emergência, e ser forçado a vender no pior momento",
  "Perseguir o que mais rende sem perguntar qual risco vem junto",
  "Tentar acertar o fundo para comprar e o topo para vender",
  "Vender no pânico e comprar na euforia",
  "Comprar o que não consegue explicar em duas frases",
  "Confundir preço baixo com barato",
];

export function Cost() {
  return (
    <Section id="custo">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="O custo"
            title="O que custa continuar assim."
            lead={
              <>
                Não é o retorno que você deixa de ter. É o dano que você{" "}
                <span className="text-parchment">já está tomando</span> sem perceber.
              </>
            }
          />

          <Reveal delay={0.1} className="mt-12">
            <InflationDecay />
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-6">
          <Reveal>
            <p className="t-body-l max-w-[52ch] text-muted">
              E os erros que mais destroem patrimônio de iniciante não são sofisticados. São
              sempre os mesmos seis.
            </p>
          </Reveal>

          <RevealGroup as="ul" className="mt-10 border-t border-rule">
            {ERRORS.map((error) => (
              <li key={error} className="flex items-baseline gap-5 border-b border-rule py-5">
                <span className="t-data shrink-0 text-alert" aria-hidden="true">
                  —
                </span>
                <span className="text-parchment">{error}</span>
              </li>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <p className="mt-10 max-w-[52ch] border-l-2 border-gold pl-5 text-muted">
              Todos têm a mesma origem:{" "}
              <span className="text-parchment">emoção no lugar de processo</span>. E a mesma
              vacina.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
