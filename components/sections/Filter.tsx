import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { KIT } from "@/lib/kit";

/**
 * A virada + o mecanismo.
 *
 * "O Filtro Racional" não foi inventado para vender: os próprios checklists
 * dizem "use como um filtro rápido de qualidade". O mecanismo foi nomeado,
 * não fabricado.
 *
 * Aqui a numeração 00–03 é legítima: as camadas SÃO uma sequência, e a ordem
 * carrega informação que o leitor precisa.
 */
export function Filter() {
  return (
    <Section id="filtro">
      <SectionHeader
        eyebrow="A virada"
        title={
          <>
            Informação não é <span className="text-gold">critério</span>.
          </>
        }
        lead="Critério é uma sequência escrita de perguntas que você responde antes de agir. Sempre a mesma, na mesma ordem, com a cabeça fria. É por isso que o Kit não é um curso."
        className="mb-20"
      />

      <Reveal>
        <p className="t-label mb-8 text-muted">O Filtro Racional · quatro camadas</p>
      </Reveal>

      <RevealGroup as="ol" className="relative border-t border-rule">
        {KIT.map((item, index) => (
          <li
            key={item.id}
            className="grid gap-4 border-b border-rule py-8 sm:grid-cols-[5rem_1fr] sm:gap-8 lg:grid-cols-[7rem_16rem_1fr] lg:py-10"
          >
            <span className="t-data text-gold" aria-hidden="true">
              {String(index).padStart(2, "0")}
            </span>
            <h3 className="t-h3 text-parchment">{item.layer.split(" · ")[1]}</h3>
            <p className="max-w-[56ch] text-muted">{item.purpose}</p>
          </li>
        ))}
      </RevealGroup>

      <Reveal delay={0.1}>
        <p className="t-body-l mt-12 max-w-[60ch] border-l-2 border-gold pl-6 text-parchment">
          A regra: se a resposta honesta em qualquer etapa for{" "}
          <span className="text-gold">não</span>, o caminho é recuar — não forçar.
        </p>
      </Reveal>
    </Section>
  );
}
