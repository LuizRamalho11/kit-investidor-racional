import { Section, SectionHeader } from "@/components/ui/Section";
import { RevealGroup } from "@/components/ui/Reveal";
import { KIT } from "@/lib/kit";

/**
 * O batimento de DESEJO da página, que faltava.
 *
 * A narrativa ia de dor (o custo) direto para mecanismo (o filtro), sem
 * mostrar como é do outro lado. Numa página de resposta direta isso é um
 * buraco: o leitor entende o problema e a solução, mas não deseja nada.
 *
 * As quatro frases não foram escritas aqui — são os `benefit` de cada item
 * do kit, lidos de lib/kit.ts. Fonte única, zero duplicação, e cada uma é
 * uma mudança de comportamento concreta, não um adjetivo.
 */
export function Outcomes() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="O que muda"
            title="Como é do outro lado."
            lead="Não é que você passa a acertar sempre. É que você para de decidir no escuro — e passa a saber dizer por que comprou o que comprou."
          />
        </div>

        <RevealGroup as="ul" className="lg:col-span-7">
          {KIT.map((item, index) => (
            <li
              key={item.id}
              className="flex items-baseline gap-6 border-b border-rule py-7 first:border-t"
            >
              <span className="t-data shrink-0 text-gold" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="t-body-l text-parchment">{item.benefit}</p>
            </li>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
