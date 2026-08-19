import { Check, Cross } from "@/components/marks/icons";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * A coluna da direita é o maior sinal de honestidade da página — e o que
 * mais reduz pedido de reembolso. Desqualificar de verdade converte
 * melhor do que tentar servir a todo mundo.
 */

const FOR = [
  "Quem tem dinheiro parado e trava na hora de fazer a primeira compra",
  "Quem já investe por indicação e quer critério próprio para julgar o que tem",
  "Quem escolhe FII e ação pelo rendimento mais alto da tela",
  "Quem já sabe a teoria, mas não consegue transformar estudo em decisão",
  "Quem quer entender tributação antes de vender, e não depois da malha fina",
];

const NOT_FOR = [
  "Quem quer dica de ativo: não há carteira recomendada aqui, e não haverá",
  "Quem quer day trade: o material trata de longo prazo e mostra por que girar destrói retorno",
  "Quem quer ficar rico rápido: o e-book afirma que não existe retorno elevado e garantido",
  "Quem quer que alguém decida por ele: o kit dá o filtro, quem responde é você",
];

export function Audience() {
  return (
    <Section id="publico" bleed>
      <SectionHeader
        eyebrow="Para quem"
        title="Este material serve para algumas pessoas. Para outras, não."
        className="mb-16"
      />

      <div className="grid gap-px border border-rule bg-rule lg:grid-cols-2">
        <Reveal>
          <div className="h-full bg-ink p-8 lg:p-12">
            <div className="flex items-center gap-3">
              <Check className="size-5 text-ok" />
              <h3 className="t-h3 text-parchment">Para quem é</h3>
            </div>
            <ul className="mt-8 space-y-5">
              {FOR.map((entry) => (
                <li key={entry} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-ok"
                  />
                  <span className="text-muted">{entry}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="h-full bg-ink p-8 lg:p-12">
            <div className="flex items-center gap-3">
              <Cross className="size-5 text-alert" />
              <h3 className="t-h3 text-parchment">Para quem não é</h3>
            </div>
            <ul className="mt-8 space-y-5">
              {NOT_FOR.map((entry) => (
                <li key={entry} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-alert"
                  />
                  <span className="text-muted">{entry}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
