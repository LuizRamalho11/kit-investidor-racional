import { Container, Rule } from "@/components/ui/Section";
import { Wordmark } from "@/components/marks/BrandMark";
import { SITE, docLabel, formatDoc } from "@/lib/site";

/**
 * O disclaimer não está escondido aqui por obrigação — ele é parte do
 * argumento. Um material que declara os próprios limites é a prova de
 * que não está vendendo promessa de retorno.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-rule bg-ledger">
      {/* respiro extra no mobile: o CTA fixo tem 64px e cobriria o fim do rodapé */}
      <Container className="pt-16 pb-32 sm:pb-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-[42ch] text-sm leading-relaxed text-muted">
              Material educativo sobre investimentos, escrito com fontes primárias e
              legislação citada. Sem carteira recomendada e sem promessa de retorno.
            </p>
          </div>

          <nav aria-labelledby="footer-produto">
            <h2 id="footer-produto" className="t-label mb-5 text-parchment">
              Produto
            </h2>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a className="transition-colors duration-200 hover:text-parchment" href="#kit">
                  O que está incluído
                </a>
              </li>
              <li>
                <a className="transition-colors duration-200 hover:text-parchment" href="#dentro">
                  Por dentro do e-book
                </a>
              </li>
              <li>
                <a className="transition-colors duration-200 hover:text-parchment" href="#oferta">
                  Oferta e garantia
                </a>
              </li>
              <li>
                <a className="transition-colors duration-200 hover:text-parchment" href="#faq">
                  Perguntas frequentes
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-legal">
            <h2 id="footer-legal" className="t-label mb-5 text-parchment">
              Legal
            </h2>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a className="transition-colors duration-200 hover:text-parchment" href="/termos">
                  Termos de uso
                </a>
              </li>
              <li>
                <a
                  className="transition-colors duration-200 hover:text-parchment"
                  href="/privacidade"
                >
                  Política de privacidade
                </a>
              </li>
              {SITE.legal.email ? (
                <li>
                  <a
                    className="transition-colors duration-200 hover:text-parchment"
                    href={`mailto:${SITE.legal.email}`}
                  >
                    {SITE.legal.email}
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>
        </div>

        <Rule className="my-10" />

        <div className="space-y-4 text-xs leading-relaxed text-muted">
          <p className="max-w-[95ch]">
            <strong className="font-medium text-muted">Aviso.</strong> Este material tem
            finalidade exclusivamente educacional. Nada aqui constitui recomendação, oferta ou
            solicitação de compra ou venda de qualquer ativo, nem aconselhamento personalizado de
            investimento, contábil ou jurídico. Decisões de investimento dependem do perfil, dos
            objetivos e da situação de cada pessoa, e devem contar com o apoio de um profissional
            habilitado. Rentabilidade passada não garante rentabilidade futura, e todo investimento
            envolve risco de perda.
          </p>
          <p className="max-w-[95ch]">
            Regras tributárias e regulatórias mudam por lei. Confirme sempre as vigentes junto à
            Receita Federal, à CVM e ao Banco Central antes de agir.
          </p>
          {/* Identificação do fornecedor — exigida pelo Decreto 7.962/2013
              para sites que ofertam ao consumidor. */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-2">
            <span>
              © {year} {SITE.legal.entity ?? SITE.name}
            </span>
            {SITE.legal.doc ? (
              <span>
                · {docLabel(SITE.legal.doc)} {formatDoc(SITE.legal.doc)}
              </span>
            ) : null}
            <span>· Edição {SITE.edition}</span>
          </div>
          {SITE.legal.address ? <p>{SITE.legal.address}</p> : null}
        </div>
      </Container>
    </footer>
  );
}
