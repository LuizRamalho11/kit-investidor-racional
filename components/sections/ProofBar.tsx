import { Container, Rule } from "@/components/ui/Section";
import { KIT_TOTALS } from "@/lib/kit";

/**
 * Prova por demonstração. Não há depoimento, número de alunos nem
 * selo — há o que pode ser conferido abrindo os arquivos.
 * Cada item aqui é verificável nos PDFs.
 */

const ENTRIES = [
  { value: `${KIT_TOTALS.pages} páginas`, label: `${KIT_TOTALS.chapters} capítulos` },
  { value: `${KIT_TOTALS.checklistQuestions} perguntas`, label: "de checklist" },
  { value: "Fontes primárias", label: "CVM · B3 · Bacen · Receita" },
  { value: "Legislação citada", label: "lei por lei, com número" },
];

export function ProofBar() {
  return (
    <section aria-label="O que dá para conferir" className="relative">
      <Container>
        <Rule />
        <dl className="grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4 lg:gap-y-0">
          {ENTRIES.map((entry, index) => (
            <div
              key={entry.value}
              className={
                index % 2 === 1
                  ? "border-l border-rule pl-6 lg:pl-8"
                  : "pr-4 lg:border-l lg:border-rule lg:pr-0 lg:pl-8 " +
                    (index === 0 ? "lg:border-l-0 lg:pl-0" : "")
              }
            >
              <dt className="t-data text-parchment">{entry.value}</dt>
              <dd className="mt-1.5 text-sm text-muted">{entry.label}</dd>
            </div>
          ))}
        </dl>
        <Rule />
      </Container>
    </section>
  );
}
