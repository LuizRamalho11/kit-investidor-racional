import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Slot de depoimentos — construído e inativo por decisão explícita.
 *
 * Não existem depoimentos reais deste produto, e depoimento inventado é
 * exatamente o tipo de coisa que destrói a confiança que sustenta esta
 * página (além de gerar risco jurídico). Enquanto o array estiver vazio,
 * o componente não renderiza nada.
 *
 * [REQUIRES REAL DATA] Ao coletar depoimentos verdadeiros dos primeiros
 * compradores, basta preencher TESTIMONIALS. É o maior ganho de conversão
 * disponível hoje. Peça autorização de uso de nome e imagem.
 */

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export const TESTIMONIALS: readonly Testimonial[] = [];

export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <Section bleed>
      <SectionHeader eyebrow="Quem já usou" title="O que dizem os leitores." className="mb-16" />
      <div className="grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.06}>
            <figure className="h-full bg-ink p-8">
              <blockquote className="text-parchment">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-rule pt-4">
                <span className="block text-sm text-parchment">{testimonial.name}</span>
                <span className="t-label mt-1 block text-muted">{testimonial.context}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
