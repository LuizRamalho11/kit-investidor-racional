import { Section, SectionHeader, Rule } from "@/components/ui/Section";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";
import { DocumentPlate } from "./DocumentPlate";
import { KIT, KIT_TOTALS } from "@/lib/kit";

/**
 * Responde "o que exatamente eu recebo?".
 *
 * Cada item ganha bloco próprio com o que é, para que serve, como usar e o
 * que muda — mais uma reprodução fiel de uma página do material.
 * Layout alternado para criar ritmo; sem grade de cards repetidos.
 */

const PLATES = [
  {
    kicker: "O Investidor Racional · Sumário",
    title: "10 capítulos",
    variant: "index" as const,
    lines: [
      "1 · Fundamentos do mercado financeiro",
      "2 · Renda fixa",
      "3 · Mercado de ações",
      "4 · Fundos imobiliários",
      "5 · Diversificação e gestão de risco",
      "6 · Tributação",
      "7 · Os erros mais comuns",
      "8 · Construindo uma carteira",
    ],
    footer: "Mais: ferramentas e fontes de dados, grandes lições dos maiores investidores, apêndices, glossário e FAQ.",
  },
  {
    kicker: "Material complementar",
    title: "Checklist de Análise Fundamentalista",
    variant: "checklist" as const,
    lines: [
      "Entendo claramente como a empresa gera receita e lucro",
      "A empresa tem vantagem competitiva duradoura (moat)",
      "ROE acima de 15% ou da média do setor",
      "ROIC acima do custo de capital (WACC)",
      "Dívida líquida sobre EBITDA abaixo de 3x",
      "Interesses da gestão alinhados com os minoritários",
    ],
    footer: "6 de 24 perguntas · uso pessoal · não constitui recomendação de investimento",
  },
  {
    kicker: "Material complementar",
    title: "Checklist de Fundos Imobiliários",
    variant: "checklist" as const,
    lines: [
      "Entendo o tipo do fundo: tijolo, papel ou híbrido",
      "Cumpro as condições de isenção de IR sobre os rendimentos",
      "P/VP próximo ou abaixo de 1",
      "Taxa de vacância física e financeira sob controle",
      "Rendimento distribuído é compatível com o resultado gerado",
      "Sem conflitos de interesse com partes ligadas à gestora",
    ],
    footer: "6 de 25 perguntas · uso pessoal · não constitui recomendação de investimento",
  },
  {
    kicker: "Guia Rápido de Tributação",
    title: "Ações, FIIs e renda fixa",
    variant: "index" as const,
    lines: [
      "Venda comum de ações · 15% · isento até o limite mensal",
      "Day trade · 20% · sem isenção",
      "Rendimentos mensais de FIIs · isento para pessoa física",
      "Venda de cotas de FII · 20% · sem piso de isenção",
      "Renda fixa · 22,5% a 15% pela tabela regressiva",
      "LCI, LCA, CRI, CRA e incentivadas · sempre isentos",
    ],
    footer: "Base normativa citada lei por lei · confirme as regras vigentes na Receita Federal",
  },
];

const STEPS = [
  {
    title: "Chega no seu e-mail",
    body: "Quatro PDFs, minutos depois da confirmação do pagamento. Baixe, salve no celular, imprima os checklists se preferir usar no papel.",
  },
  {
    title: "Lê o e-book na sua ordem",
    body: "A ordem sugerida constrói o raciocínio de forma cumulativa, mas cada capítulo funciona sozinho. Precisa entender FII agora? Vá direto ao capítulo 4.",
  },
  {
    title: "Roda o filtro antes de comprar",
    body: "Abre o checklist da classe do ativo e responde as perguntas. Se cair em Sinais de Alerta, você para e investiga em vez de seguir no impulso.",
  },
];

export function KitContents() {
  return (
    <Section id="kit">
      <SectionHeader
        eyebrow="O que você recebe"
        title="Quatro arquivos. Um deles se lê. Três se usam."
        lead={`${KIT_TOTALS.pages} páginas de base, ${KIT_TOTALS.checklistQuestions} perguntas de checklist e o mapa completo do imposto. Baixe, imprima e deixe do lado do computador.`}
        className="mb-20"
      />

      <div className="space-y-0">
        {KIT.map((item, index) => {
          const plate = PLATES[index]!;
          const flipped = index % 2 === 1;

          return (
            <article key={item.id}>
              <Rule />
              <div className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
                <RevealGroup className={flipped ? "lg:order-2 lg:col-span-7" : "lg:col-span-7"}>
                  <div>
                    <div className="flex items-baseline gap-4">
                      <span className="t-data text-gold">{item.index}</span>
                      <span className="t-label text-muted">{item.layer}</span>
                    </div>

                    <h3 className="t-display-l mt-5 text-parchment">{item.title}</h3>
                    <p className="t-data mt-3 text-muted">{item.format}</p>
                    <p className="t-body-l mt-6 max-w-[56ch] text-muted">{item.what}</p>
                  </div>

                  <dl className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                      <div>
                        <dt className="t-label text-gold">Para que serve</dt>
                        <dd className="mt-2.5 text-sm leading-relaxed text-muted">
                          {item.purpose}
                        </dd>
                      </div>
                      <div>
                        <dt className="t-label text-gold">Como usar</dt>
                        <dd className="mt-2.5 text-sm leading-relaxed text-muted">
                          {item.usage}
                        </dd>
                      </div>
                  </dl>

                  <p className="mt-8 border-l-2 border-gold pl-5 text-parchment">
                    {item.benefit}
                  </p>

                  <details className="group mt-8">
                      <summary className="t-label inline-flex cursor-pointer list-none items-center gap-2 text-muted transition-colors duration-200 hover:text-parchment focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-parchment">
                        <span className="border-b border-rule pb-1 group-open:border-gold">
                          Ver o conteúdo completo
                        </span>
                      </summary>
                      <ul className="mt-6 space-y-2.5">
                        {item.contents.map((entry) => (
                          <li key={entry} className="flex items-start gap-3 text-sm text-muted">
                            <span
                              aria-hidden="true"
                              className="mt-2 size-1 shrink-0 rounded-full bg-gold"
                            />
                            {entry}
                          </li>
                        ))}
                    </ul>
                  </details>
                </RevealGroup>

                <div className={flipped ? "lg:order-1 lg:col-span-5" : "lg:col-span-5"}>
                  <Reveal delay={0.1}>
                    <DocumentPlate {...plate} />
                  </Reveal>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <Rule />

      {/* "Recebeu. E agora?" — reduz a complexidade percebida e responde
          a objeção mais comum de infoproduto: vou comprar e não vou usar. */}
      <RevealGroup as="ol" className="grid gap-8 pt-14 sm:grid-cols-3 sm:gap-10">
        {STEPS.map((step, index) => (
          <li key={step.title}>
            <span className="t-data text-gold" aria-hidden="true">
              Passo {index + 1}
            </span>
            <h3 className="t-h3 mt-4 text-parchment">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </RevealGroup>

      <Reveal delay={0.05}>
        <div className="mt-14 flex flex-col items-start gap-5 border-t border-rule pt-14 sm:flex-row sm:items-center">
          <CtaButton cta="kit" label="Quero os 4 materiais" size="lg" className="w-full sm:w-auto" />
          <p className="text-sm text-muted">
            Pagamento único. Sem assinatura, sem mensalidade.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
