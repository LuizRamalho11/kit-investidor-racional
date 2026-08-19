import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Mata a objeção "é raso" e a objeção "é genérico de IA".
 *
 * A prova aqui é a especificidade: sumário real com as páginas reais.
 * Número de página é difícil de falsificar e fácil de conferir depois da
 * compra — por isso convence.
 */

const CHAPTERS = [
  { n: "1", title: "Fundamentos do mercado financeiro", page: 4 },
  { n: "2", title: "Renda fixa", page: 12 },
  { n: "3", title: "Mercado de ações", page: 17 },
  { n: "4", title: "Fundos imobiliários (FIIs)", page: 25 },
  { n: "5", title: "Diversificação e gestão de risco", page: 29 },
  { n: "6", title: "Tributação", page: 33 },
  { n: "7", title: "Os erros mais comuns", page: 37 },
  { n: "8", title: "Construindo uma carteira", page: 40 },
  { n: "9", title: "Ferramentas e fontes de dados", page: 43 },
  { n: "10", title: "Grandes lições dos maiores investidores", page: 45 },
];

const APPENDICES = [
  { title: "Apêndices: checklists e fluxograma", page: 48 },
  { title: "Glossário de termos técnicos", page: 50 },
  { title: "Perguntas frequentes", page: 52 },
  { title: "Recomendações e referências", page: 54 },
];

const MASTERS = [
  "Benjamin Graham",
  "Warren Buffett",
  "Charlie Munger",
  "Luiz Barsi",
  "Peter Lynch",
  "Philip Fisher",
  "John Bogle",
  "Howard Marks",
];

const SOURCES = ["CVM", "B3", "Banco Central", "Tesouro Nacional", "Receita Federal", "IBGE"];

export function InsideBook() {
  return (
    <Section id="dentro">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Por dentro"
            title="O sumário completo, com as páginas."
            lead="Se você já investe e desconfia que vai ser raso, confira antes de decidir. O material vai de inflação e Selic até ROIC contra custo de capital, marcação a mercado e as condições exatas de isenção em FIIs."
          />

          <Reveal delay={0.1}>
            <div className="mt-12 border-t border-rule pt-8">
              <p className="t-label text-gold">As filosofias reunidas</p>
              <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2">
                {MASTERS.map((master) => (
                  <li
                    key={master}
                    className="border border-rule px-3 py-1.5 text-xs text-muted"
                  >
                    {master}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-10 border-t border-rule pt-8">
              <p className="t-label text-gold">Conferido nas fontes primárias</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {SOURCES.join(" · ")}. Os dados de mercado aparecem sempre com a data de
                referência, e o texto distingue o que é fato, o que é consenso de mercado e o que
                é opinião de autor.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <ol className="border-t border-rule">
              {CHAPTERS.map((chapter) => (
                <li
                  key={chapter.n}
                  className="flex items-baseline gap-5 border-b border-rule py-4"
                >
                  <span className="t-data w-6 shrink-0 text-gold">{chapter.n}</span>
                  <span className="flex-1 text-parchment">{chapter.title}</span>
                  <span
                    aria-hidden="true"
                    className="hidden h-px flex-1 self-center bg-rule sm:block"
                  />
                  <span className="t-data shrink-0 text-muted">{chapter.page}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="mt-8">
              {APPENDICES.map((appendix) => (
                <li
                  key={appendix.title}
                  className="flex items-baseline gap-5 border-b border-rule/60 py-3.5"
                >
                  <span className="flex-1 text-sm text-muted">{appendix.title}</span>
                  <span className="t-data shrink-0 text-muted">{appendix.page}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
