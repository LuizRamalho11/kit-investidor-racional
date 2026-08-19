import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";
import { Plus } from "@/components/marks/icons";
import { FAQ } from "@/lib/faq";

/**
 * Acordeão nativo com <details name="faq">.
 *
 * Trocou o Radix por HTML nativo depois de medir: eram ~20 KB gzip para
 * reimplementar semântica que o navegador já entrega. <details>/<summary>
 * é acessível por padrão (papel de botão, estado expandido, navegação por
 * teclado, busca na página encontra texto fechado), e o atributo `name`
 * dá o comportamento de "um aberto por vez" sem uma linha de JavaScript.
 *
 * Resultado: server component, zero JS, melhor acessibilidade.
 */
export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeader eyebrow="Dúvidas" title="Perguntas frequentes." />
          <Reveal delay={0.1}>
            <div className="mt-10 hidden lg:block">
              <CtaButton cta="faq" label="Quero o Kit completo" />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal>
            <div className="border-t border-rule">
              {FAQ.map((item) => (
                <details key={item.id} name="faq" className="faq-item border-b border-rule">
                  <summary className="group flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left transition-colors duration-200 ease-[ease] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-parchment">
                    <span className="t-h3 text-parchment transition-colors duration-200 group-hover:text-gold">
                      {item.question}
                    </span>
                    <Plus className="mt-1 size-5 shrink-0 text-gold transition-transform duration-[180ms] ease-[cubic-bezier(0.165,0.84,0.44,1)]" />
                  </summary>
                  <div className="faq-panel">
                    <p className="max-w-[68ch] pb-7 text-muted">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 lg:hidden">
              <CtaButton cta="faq" label="Quero o Kit completo" className="w-full" />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
