import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Responde "esta página entende o meu problema?".
 * Reposiciona o excesso de conteúdo — YouTube, newsletter, curso — como
 * parte do problema, e não como concorrente do produto.
 */
export function Problem() {
  return (
    <Section id="problema">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="O problema"
            title={
              <>
                O problema não é o que falta. É o que{" "}
                <span className="text-gold">sobra</span>.
              </>
            }
          />
        </div>

        <div className="space-y-6 lg:col-span-5 lg:pt-20">
          <Reveal delay={0.05}>
            <p className="t-body-l text-muted">
              Você não parou de investir por falta de conteúdo. Nunca houve tanto: vídeo,
              newsletter, thread, live, planilha de graça.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="t-body-l text-parchment">E ainda assim a decisão não sai.</p>
          </Reveal>
          <Reveal delay={0.19}>
            <p className="t-body-l text-muted">
              Porque conteúdo responde <span className="text-parchment">o que é</span>. Ele não
              responde a única pergunta que trava você na frente da tela:{" "}
              <span className="text-parchment">eu compro isso ou não?</span>
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
