import { Section, SectionHeader } from "@/components/ui/Section";
import { RevealGroup } from "@/components/ui/Reveal";

/**
 * O espelho: as quatro personas escritas em primeira pessoa.
 *
 * Sem numeração — estas quatro situações não formam sequência, e marcador
 * numerado em conteúdo que não é sequência decora em vez de informar.
 * O que identifica cada bloco é o rótulo, que carrega o conteúdo.
 */

const SITUATIONS = [
  {
    label: "O dinheiro parado",
    title: "Você sabe que ele está perdendo valor.",
    body: "Tem saldo na conta, abriu a corretora e nunca executou a primeira compra. Não é preguiça — é medo de fazer besteira logo de cara e confirmar que isso não é para você.",
  },
  {
    label: "A carteira herdada",
    title: "Você já investe, mas não sabe explicar por quê.",
    body: "São oito, quinze, vinte ativos. Cada um entrou por um motivo diferente, e quase sempre o motivo era de outra pessoa. Hoje você não saberia defender metade deles.",
  },
  {
    label: "O número maior da tela",
    title: "Você escolhe pelo rendimento mais alto.",
    body: "O FII que paga mais. A ação com o dividend yield mais gordo. Ninguém te contou que, na maioria das vezes, o yield mais alto é o aviso — não a oportunidade.",
  },
  {
    label: "A pesquisa que não termina",
    title: "Você sabe a teoria e mesmo assim trava.",
    body: "Já entende ROE, P/VP, margem de segurança. Mas cada compra vira uma pesquisa sem fim, você abre mais uma aba, e no fim do mês não comprou nada.",
  },
];

export function Mirror() {
  return (
    <Section bleed>
      <SectionHeader
        eyebrow="O espelho"
        title="Provavelmente você está em uma destas quatro situações."
        className="mb-16"
      />

      <RevealGroup className="grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2">
        {SITUATIONS.map((situation) => (
          <article key={situation.label} className="h-full bg-ink p-7 lg:p-10">
            <p className="t-label text-gold">{situation.label}</p>
            <h3 className="t-h3 mt-5 text-parchment">{situation.title}</h3>
            <p className="mt-4 text-muted">{situation.body}</p>
          </article>
        ))}
      </RevealGroup>
    </Section>
  );
}
