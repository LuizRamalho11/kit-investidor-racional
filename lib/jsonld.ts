import { SITE, ogImage } from "./site";
import { OFFER } from "./offer";
import { KIT_TOTALS } from "./kit";
import { FAQ } from "./faq";

/**
 * Dados estruturados.
 *
 * DELIBERADAMENTE AUSENTES: AggregateRating e Review. Sem avaliações
 * reais, marcá-las é structured data enganoso — viola as diretrizes do
 * Google, pode render penalização manual e contradiz a página inteira.
 * Entram no dia em que houver avaliações verdadeiras.
 *
 * A oferta só é declarada quando existe preço real; schema com preço
 * inventado seria pior que schema incompleto.
 */

type JsonLdNode = Record<string, unknown>;

function productNode(): JsonLdNode {
  const node: JsonLdNode = {
    "@type": "Product",
    name: SITE.name,
    description: SITE.description,
    image: `${SITE.url}${ogImage.url}`,
    brand: { "@type": "Brand", name: SITE.shortName },
    category: "Educação financeira",
    inLanguage: SITE.lang,
  };

  if (OFFER.price !== null && OFFER.checkoutUrl) {
    node.offers = {
      "@type": "Offer",
      price: OFFER.price,
      priceCurrency: OFFER.currency,
      availability: "https://schema.org/InStock",
      url: OFFER.checkoutUrl,
      seller: SITE.legal.entity
        ? { "@type": "Organization", name: SITE.legal.entity }
        : undefined,
    };
  }

  return node;
}

function bookNode(): JsonLdNode {
  return {
    "@type": "Book",
    name: "O Investidor Racional",
    bookFormat: "https://schema.org/EBook",
    numberOfPages: KIT_TOTALS.pages,
    inLanguage: SITE.lang,
    about: "Educação financeira, renda fixa, ações, fundos imobiliários e tributação",
    abstract:
      "Guia para construir base de conhecimento e desenvolver mentalidade de investidor de longo prazo no mercado brasileiro.",
  };
}

function faqNode(): JsonLdNode {
  return {
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function buildJsonLd(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [productNode(), bookNode(), faqNode()],
  });
}
