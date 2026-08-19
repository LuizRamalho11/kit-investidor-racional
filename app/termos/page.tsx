import type { Metadata } from "next";
import { Container } from "@/components/ui/Section";
import { SITE } from "@/lib/site";
import { OFFER } from "@/lib/offer";
import { LegalDocument } from "@/components/layout/LegalDocument";

export const metadata: Metadata = {
  title: `Termos de uso — ${SITE.name}`,
  description: "Termos de uso, condições de compra, garantia e licença de uso do material.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/termos" },
};

export default function TermosPage() {
  return (
    <Container className="py-32 lg:py-40">
      <LegalDocument title="Termos de uso" updated="Agosto de 2026">
        <h2>1. Objeto</h2>
        <p>
          Estes termos regem a compra e o uso do Kit Investidor Racional, composto por quatro
          arquivos em formato PDF: o e-book “O Investidor Racional”, o Checklist de Análise
          Fundamentalista, o Checklist de Fundos Imobiliários e o Guia Rápido de Tributação.
        </p>

        <h2>2. Natureza do material</h2>
        <p>
          O conteúdo tem finalidade exclusivamente educacional. Nada nele constitui recomendação,
          oferta ou solicitação de compra ou venda de qualquer ativo, nem aconselhamento
          personalizado de investimento, contábil, tributário ou jurídico. Não há carteira
          recomendada, indicação de ativos ou gestão de recursos de terceiros.
        </p>
        <p>
          Decisões de investimento dependem do perfil, dos objetivos, do prazo e da situação
          financeira de cada pessoa, e devem contar com o apoio de um profissional habilitado.
          Rentabilidade passada não garante rentabilidade futura. Todo investimento envolve risco,
          inclusive de perda do capital aplicado.
        </p>

        <h2>3. Entrega</h2>
        <p>
          Os arquivos são enviados por e-mail após a confirmação do pagamento, processado por
          plataforma de checkout externa. É responsabilidade do comprador informar um endereço de
          e-mail válido e verificar as pastas de spam e promoções.
        </p>

        <h2>4. Direito de arrependimento e reembolso</h2>
        <p>
          O comprador pode solicitar o cancelamento da compra e o reembolso integral em até{" "}
          {OFFER.guaranteeDays} dias corridos contados do recebimento, sem necessidade de
          justificativa, conforme o artigo 49 do Código de Defesa do Consumidor. A solicitação
          deve ser feita pelos canais de atendimento da plataforma de pagamento ou pelo e-mail de
          contato informado no rodapé.
        </p>

        <h2>5. Licença de uso</h2>
        <p>
          A compra concede licença pessoal, individual e intransferível de uso. É vedada a
          revenda, a redistribuição, o compartilhamento público, a reprodução total ou parcial
          para terceiros e a utilização comercial do conteúdo sem autorização expressa e por
          escrito do titular dos direitos autorais.
        </p>

        <h2>6. Atualização de regras tributárias e regulatórias</h2>
        <p>
          As regras tributárias e regulatórias citadas refletem a legislação vigente na data de
          edição do material, com a base normativa indicada no próprio texto. Alíquotas, limites
          de isenção e obrigações acessórias podem ser alterados por lei a qualquer momento.
          Confirme sempre as regras atuais junto à Receita Federal, à CVM e ao Banco Central antes
          de declarar, pagar tributos ou tomar qualquer decisão.
        </p>

        <h2>7. Limitação de responsabilidade</h2>
        <p>
          O titular não se responsabiliza por perdas, prejuízos ou resultados decorrentes de
          decisões tomadas pelo leitor a partir do material. O uso do conteúdo é de inteira
          responsabilidade de quem o utiliza.
        </p>

        <h2>8. Contato</h2>
        <p>
          {SITE.legal.email
            ? `Dúvidas sobre estes termos podem ser enviadas para ${SITE.legal.email}.`
            : "O canal de atendimento será informado nesta página e no rodapé do site."}
        </p>
      </LegalDocument>
    </Container>
  );
}
