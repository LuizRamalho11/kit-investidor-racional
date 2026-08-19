import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";
import { KIT, KIT_TOTALS } from "@/lib/kit";
import { OFFER, formatPrice } from "@/lib/offer";

/**
 * Responde "vale o preço?".
 *
 * Ancoragem por ESCOPO e TEMPO, não por comparação de preço.
 * As faixas de "quanto custa um livro / um curso" foram removidas na
 * auditoria: eu não conseguia verificá-las, e claim não verificável é
 * exatamente o que esta página não pode ter. Escopo e trabalho são
 * conferíveis abrindo os arquivos.
 *
 * NÃO usar preço riscado inventado. Se existir um preço anterior real,
 * ele entra aqui.
 * */
export function Offer() {
  const price = formatPrice();

  return (
    <Section id="oferta">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="A oferta"
            title="O que isso vale."
            lead={
              <>
                Some o que está aqui: {KIT_TOTALS.pages} páginas conferidas nas fontes oficiais,{" "}
                {KIT_TOTALS.checklistQuestions} perguntas de checklist e o mapa do imposto com a
                base normativa citada lei por lei.
              </>
            }
          />

          <Reveal delay={0.08}>
            <p className="t-body-l mt-8 max-w-[52ch] text-muted">
              Montar isso sozinho — ler os clássicos, cruzar com a legislação vigente, conferir
              na CVM, na B3, no Banco Central e na Receita, e transformar tudo numa sequência que
              você consiga usar numa terça à noite —{" "}
              <span className="text-parchment">é trabalho de meses</span>.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-8 border-l-2 border-gold pl-5 text-parchment">
              Você não está comprando 55 páginas. Está comprando o tempo de quem já fez esse
              trabalho.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.06}>
            <div className="border border-rule bg-ledger p-8 lg:p-10">
              <p className="t-label text-gold">Kit Investidor Racional</p>

              <ul className="mt-8 space-y-0">
                {KIT.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-baseline gap-4 border-b border-rule py-4"
                  >
                    <span className="flex-1 text-sm text-parchment">
                      {item.title}
                      <span className="block text-xs text-muted">{item.format}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="hidden h-px flex-1 self-center bg-rule sm:block"
                    />
                    <span className="t-label shrink-0 text-muted">incluso</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-end justify-between gap-4">
                <div>
                  <p className="t-label text-muted">Total</p>
                  {price ? (
                    <p className="font-data mt-2 text-4xl leading-none tabular-nums text-parchment">
                      {price}
                    </p>
                  ) : (
                    <p className="font-data mt-2 text-2xl leading-none text-muted">a definir</p>
                  )}
                </div>
                <p className="t-label pb-1 text-right text-muted">
                  Pagamento
                  <br />
                  único
                </p>
              </div>

              <CtaButton
                cta="offer"
                label="Quero o Kit Investidor Racional"
                size="lg"
                className="mt-8 w-full"
              />

              <p className="mt-5 text-center text-sm text-muted">
                {OFFER.deliveryNote} · {OFFER.paymentMethods.join(", ")}
              </p>
              <p className="mt-1.5 text-center text-xs text-muted">
                Sem assinatura. Sem mensalidade. Sem cobrança recorrente.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
