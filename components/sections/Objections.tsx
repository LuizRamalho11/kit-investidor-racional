import { Section, SectionHeader } from "@/components/ui/Section";
import { RevealGroup } from "@/components/ui/Reveal";

/**
 * Responde "por que eu deveria confiar?".
 *
 * Formato de objeção literal seguida de resposta direta. A objeção é
 * escrita com as palavras que a pessoa realmente usa — se ela se
 * reconhecer na frase, aceita a resposta.
 */

const OBJECTIONS = [
  {
    claim: "Isso eu acho de graça no YouTube.",
    answer:
      "Você acha informação de graça. O que não acha é o filtro reunido, ordenado e conferido nas fontes oficiais. A diferença entre assistir a quarenta vídeos e ter uma sequência de perguntas na mão é a diferença entre saber e decidir.",
  },
  {
    claim: "É só mais um e-book genérico.",
    answer:
      "O sumário completo está nesta página, com as páginas reais. O material cita a legislação pelo número da lei, indica a data de referência de cada dado de mercado e chega a declarar as próprias lacunas em vez de resumi-las mal.",
  },
  {
    claim: "Vou comprar e não vou ler.",
    answer:
      "Três dos quatro arquivos não são de leitura, são de uso: uma página cada, para rodar antes de uma compra. Se você nunca abrir o e-book de 55 páginas, os checklists ainda funcionam sozinhos.",
  },
  {
    claim: "É complexo demais para o meu nível.",
    answer:
      "O e-book começa na inflação e nos juros, não em valuation. Tem glossário, quadros de conceito e um fluxograma que diz o que fazer quando a resposta é não. E cada capítulo pode ser lido de forma independente.",
  },
  {
    claim: "Como sei que isso não promete milagre?",
    answer:
      "Porque o próprio material diz o contrário. A frase mais repetida no e-book é que não existe retorno elevado e garantido, e não há uma única indicação de ativo em nenhum dos quatro arquivos.",
  },
];

export function Objections() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Objeções"
        title="O que você provavelmente está pensando agora."
        className="mb-16"
      />

      <RevealGroup className="border-t border-rule">
        {OBJECTIONS.map((objection) => (
          <div
            key={objection.claim}
            className="grid gap-4 border-b border-rule py-8 lg:grid-cols-12 lg:gap-12 lg:py-10"
          >
              <p className="t-h3 text-parchment lg:col-span-5">
                <span aria-hidden="true" className="text-gold">
                  “
                </span>
                {objection.claim}
                <span aria-hidden="true" className="text-gold">
                  ”
                </span>
              </p>
            <p className="max-w-[62ch] text-muted lg:col-span-7">{objection.answer}</p>
          </div>
        ))}
      </RevealGroup>
    </Section>
  );
}
