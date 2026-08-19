import type { Metadata } from "next";
import { Container } from "@/components/ui/Section";
import { SITE, docLabel } from "@/lib/site";
import { LegalDocument } from "@/components/layout/LegalDocument";

export const metadata: Metadata = {
  title: `Política de privacidade — ${SITE.name}`,
  description:
    "Como tratamos dados pessoais, cookies e ferramentas de medição, conforme a LGPD.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return (
    <Container className="py-32 lg:py-40">
      <LegalDocument title="Política de privacidade" updated="Agosto de 2026">
        <h2>1. Quem trata os dados</h2>
        <p>
          {SITE.legal.entity
            ? `${SITE.legal.entity}${SITE.legal.doc ? `, ${docLabel(SITE.legal.doc)} ${SITE.legal.doc}` : ""}, é a controladora dos dados tratados neste site.`
            : "A identificação completa do controlador dos dados consta no rodapé deste site."}{" "}
          Esta política descreve quais dados são coletados, com que finalidade e por quanto tempo,
          conforme a Lei nº 13.709/2018 (LGPD).
        </p>

        <h2>2. Dados coletados nesta página</h2>
        <p>
          Esta landing page <strong>não possui formulário</strong> e não solicita nome, e-mail,
          telefone ou qualquer dado de identificação direta. Não há cadastro, não há captura de
          lista e não há login.
        </p>
        <p>
          São coletados apenas dados de navegação de natureza técnica e estatística, como páginas
          visitadas, profundidade de rolagem, cliques nos botões de compra, tipo de dispositivo,
          navegador e origem do acesso (incluindo parâmetros de campanha como utm_source, gclid e
          fbclid).
        </p>

        <h2>3. Finalidade</h2>
        <ul>
          <li>Medir o desempenho do site e das campanhas de divulgação</li>
          <li>Entender quais seções são efetivamente lidas, para melhorar o conteúdo</li>
          <li>Atribuir corretamente as vendas às campanhas que as originaram</li>
        </ul>
        <p>
          A base legal é o legítimo interesse para as finalidades estatísticas, e o consentimento
          para cookies não essenciais de publicidade, quando aplicável.
        </p>

        <h2>4. Cookies e ferramentas de medição</h2>
        <p>
          O site está preparado para utilizar ferramentas de medição de audiência e de publicidade
          (como Meta Pixel, Google Analytics e Google Ads). Quando ativas, essas ferramentas
          gravam cookies no seu navegador e podem compartilhar dados de navegação com os
          respectivos provedores, que atuam como controladores independentes.
        </p>
        <p>
          Você pode bloquear ou apagar cookies nas configurações do seu navegador. Isso não impede
          o uso do site.
        </p>

        <h2>5. Pagamento</h2>
        <p>
          A compra é processada por plataforma de checkout externa, em ambiente próprio dela.{" "}
          <strong>Dados de pagamento não trafegam nem são armazenados neste site.</strong> O
          tratamento desses dados segue a política de privacidade da plataforma de pagamento.
        </p>

        <h2>6. Compartilhamento</h2>
        <p>
          Não vendemos, alugamos nem cedemos dados pessoais. O compartilhamento ocorre apenas com
          os provedores de infraestrutura, medição e pagamento estritamente necessários para
          operar o site e concluir a venda.
        </p>

        <h2>7. Seus direitos</h2>
        <p>
          A LGPD garante a você os direitos de confirmação de tratamento, acesso, correção,
          anonimização, portabilidade, informação sobre compartilhamento, revogação de
          consentimento e eliminação dos dados tratados com base no consentimento.
        </p>
        <p>
          {SITE.legal.email
            ? `Para exercer qualquer um desses direitos, escreva para ${SITE.legal.email}.`
            : "O canal para exercício desses direitos será informado nesta página e no rodapé do site."}
        </p>

        <h2>8. Retenção</h2>
        <p>
          Dados de navegação são mantidos pelo período definido por cada ferramenta de medição.
          Dados relativos à compra são mantidos pelo prazo exigido pela legislação fiscal e
          consumerista.
        </p>
      </LegalDocument>
    </Container>
  );
}
