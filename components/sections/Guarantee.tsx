import { ShieldCheck } from "@/components/marks/icons";
import { Container, Rule } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { OFFER } from "@/lib/offer";

/**
 * Reversão de risco.
 *
 * O prazo de 7 dias é obrigação legal (CDC art. 49) para compra pela
 * internet — comunicá-lo com clareza transforma uma obrigação que quase
 * ninguém menciona em um argumento. Dizer que é lei, em vez de fingir
 * cortesia, é mais honesto e soa mais seguro.
 */
export function Guarantee() {
  return (
    <section aria-labelledby="garantia-titulo" className="relative">
      <Container>
        <Rule />
        <Reveal>
          <div className="flex flex-col gap-7 py-14 sm:flex-row sm:items-start sm:gap-10 lg:py-16">
            <ShieldCheck className="size-9 shrink-0 text-gold" />
            <div>
              <h2 id="garantia-titulo" className="t-h3 text-parchment">
                {OFFER.guaranteeDays} dias para pedir o dinheiro de volta.
              </h2>
              <p className="mt-4 max-w-[64ch] text-muted">
                Sem precisar justificar e sem formulário de retenção. É o prazo de arrependimento
                garantido pelo artigo 49 do Código de Defesa do Consumidor para qualquer compra
                feita pela internet. Baixe os quatro arquivos, leia, rode um checklist. Se não for
                o que você esperava, peça o reembolso.
              </p>
            </div>
          </div>
        </Reveal>
        <Rule />
      </Container>
    </section>
  );
}
