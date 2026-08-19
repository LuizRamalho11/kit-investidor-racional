import { Hero } from "@/components/sections/Hero";
import { ProofBar } from "@/components/sections/ProofBar";
import { Problem } from "@/components/sections/Problem";
import { Mirror } from "@/components/sections/Mirror";
import { Cost } from "@/components/sections/Cost";
import { Filter } from "@/components/sections/Filter";
import { Outcomes } from "@/components/sections/Outcomes";
import { KitContents } from "@/components/sections/KitContents";
import { FilterQuiz } from "@/components/sections/FilterQuiz";
import { InsideBook } from "@/components/sections/InsideBook";
import { Audience } from "@/components/sections/Audience";
import { Objections } from "@/components/sections/Objections";
import { Testimonials } from "@/components/sections/Testimonials";
import { Offer } from "@/components/sections/Offer";
import { Guarantee } from "@/components/sections/Guarantee";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { buildJsonLd } from "@/lib/jsonld";

/**
 * A narrativa da página, na ordem em que ela argumenta:
 *
 *  atenção → identificação → custo → virada → desejo → produto →
 *  experiência → profundidade → qualificação → objeção → oferta → risco
 *  → fechamento
 *
 * Cada seção responde uma pergunta do visitante e passa a bola para a
 * seguinte. Ordem definida em docs/estrategia-landing-page.md §12.
 */
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // conteúdo gerado no servidor a partir dos mesmos objetos que
        // renderizam a página — não há como divergir do que está visível
        dangerouslySetInnerHTML={{ __html: buildJsonLd() }}
      />

      <Hero />
      <ProofBar />

      {/* o problema e o espelho */}
      <Problem />
      <Mirror />
      <Cost />

      {/* a virada, o desejo e o produto */}
      <Filter />
      <Outcomes />
      <KitContents />

      {/* ★ a assinatura: o visitante opera o produto antes de comprar */}
      <FilterQuiz />

      {/* profundidade e qualificação */}
      <InsideBook />
      <Audience />
      <Objections />
      <Testimonials />

      {/* fechamento comercial */}
      <Offer />
      <Guarantee />
      <Faq />
      <FinalCta />
    </>
  );
}
