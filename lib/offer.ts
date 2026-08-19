/**
 * Fonte única da oferta. Preço e checkout aparecem em ~8 lugares na
 * página e em nenhum deles estão escritos à mão.
 *
 * Plataforma de checkout: Kiwify (confirmado em 18/08/2026).
 * A Kiwify dispara `Purchase` no checkout dela — a landing page dispara
 * apenas até `InitiateCheckout`, para a conversão não contar em dobro.
 */

export const OFFER = {
  /** [REQUIRES REAL DATA] preço final em BRL. null → a UI omite o valor. */
  price: (process.env.NEXT_PUBLIC_PRICE ? Number(process.env.NEXT_PUBLIC_PRICE) : null) as
    | number
    | null,
  currency: "BRL",
  /** [REQUIRES REAL DATA] https://pay.kiwify.com.br/<id> */
  checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL ?? null,
  /** Mínimo legal de 7 dias — CDC art. 49. [CONFIRMAR PRAZO ESCOLHIDO] */
  guaranteeDays: 7,
  paymentMethods: ["Pix", "cartão", "boleto"] as const,
  deliveryNote: "Acesso imediato por e-mail",
} as const;

export const isCheckoutReady = Boolean(OFFER.checkoutUrl);

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

/** Preço formatado, ou null quando ainda não definido. */
export function formatPrice(): string | null {
  return OFFER.price === null ? null : brl.format(OFFER.price);
}

/** "Quero o Kit" → "Quero o Kit — R$ 47" quando houver preço. */
export function withPrice(label: string): string {
  const price = formatPrice();
  return price ? `${label} — ${price}` : label;
}

/** Repassa os UTMs da landing page para o checkout, para a atribuição fechar. */
export function checkoutHref(search?: string): string | null {
  if (!OFFER.checkoutUrl) return null;
  if (!search || search.length <= 1) return OFFER.checkoutUrl;
  const params = new URLSearchParams(search);
  const utms = new URLSearchParams();
  for (const [key, value] of params) {
    if (key.startsWith("utm_") || key === "gclid" || key === "fbclid") utms.set(key, value);
  }
  if (![...utms].length) return OFFER.checkoutUrl;
  const joiner = OFFER.checkoutUrl.includes("?") ? "&" : "?";
  return `${OFFER.checkoutUrl}${joiner}${utms.toString()}`;
}
