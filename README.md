# Kit Investidor Racional — Landing page

Landing page de conversão para tráfego pago (Meta Ads + Google Ads), com checkout
externo na Kiwify.

Estratégia completa: [`docs/estrategia-landing-page.md`](docs/estrategia-landing-page.md)

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

---

## O que falta preencher antes de publicar

Tudo o que depende de dado real está isolado em **um lugar**. Copie `.env.example`
para `.env.local` e preencha:

| Variável | O que é | Sem ela |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Domínio final | Canonical, OG e sitemap apontam para um domínio de exemplo |
| `NEXT_PUBLIC_PRICE` | Preço em reais (só números) | A página omite o valor e a oferta mostra "a definir" |
| `NEXT_PUBLIC_CHECKOUT_URL` | Link Kiwify (`Produtos → ⋯ → Ver Links`) | **Todos os CTAs ficam desabilitados** |
| `NEXT_PUBLIC_LEGAL_ENTITY` · `_CNPJ` · `_CONTACT_EMAIL` | Identificação legal | Rodapé e páginas legais ficam incompletos — o Meta exige isso para verificar o domínio |

Além disso, fora do código:

- **Depoimentos reais.** É o maior ganho de conversão disponível hoje. O componente
  [`components/sections/Testimonials.tsx`](components/sections/Testimonials.tsx) já
  existe e não renderiza nada enquanto o array estiver vazio — basta preencher.
- **Capa do mockup.** `imagem_e-book.png` diz "Edição 2025"; o miolo do PDF diz
  "Edição 2026". Corrigir antes de publicar: numa página cujo argumento é rigor,
  a inconsistência custa caro.
- **Prazo de garantia.** Está em 7 dias (mínimo legal, CDC art. 49), em
  [`lib/offer.ts`](lib/offer.ts). Confirmar se será esse.

---

## Arquitetura

```
app/            rotas, metadata, tokens de design (globals.css), fontes
components/
  layout/       cabeçalho, rodapé, trilha do razão, CTA fixo, tracking
  sections/     uma seção da narrativa por arquivo
  ui/           CTA, revelação no scroll, casca de seção
  charts/       SVG desenhado à mão
  marks/        marca e ícones inline
hooks/          useInView
lib/            dados e configuração — a fonte da verdade
```

**Server Components por padrão.** São client apenas: `Header`, `LedgerRail`,
`StickyCta`, `Reveal`, `FilterQuiz`, `InflationDecay`, `CtaButton`, `ScrollTracker`.
Todo o resto é HTML estático.

### Onde mexer no conteúdo

| Arquivo | O que controla |
|---|---|
| `lib/offer.ts` | Preço, checkout, garantia, formas de pagamento |
| `lib/kit.ts` | Os 4 componentes do kit e os totais (55 páginas, 49 perguntas) |
| `lib/quiz.ts` | As 9 perguntas do filtro e as faixas de resultado |
| `lib/faq.ts` | FAQ — alimenta o acordeão **e** o JSON-LD, sem chance de divergirem |
| `lib/site.ts` | Metadados do site |
| `lib/analytics.ts` | Eventos de tracking |

A copy de cada seção fica no próprio componente, porque é usada uma vez só e lá
ela é mais fácil de ler e editar do que num arquivo central gigante.

---

## Tracking

A instrumentação está pronta e **nenhum script é carregado** enquanto não houver
credencial. Os eventos empilham em `window.dataLayer`.

Para ligar, adicione o script do Meta/GA em `app/layout.tsx`. Os eventos já
disparam sozinhos:

`ViewContent` · `Scroll25/50/75` · `ClickCTA` · `ViewOffer` · `ClickCheckout` ·
`Lead` (quiz concluído — melhor sinal de qualidade para otimizar campanha)

> **Atenção:** a Kiwify dispara `Purchase` no checkout dela. **Não** dispare
> `Purchase` também aqui, ou a conversão conta em dobro e o algoritmo do Meta passa
> a otimizar em cima de número inflado.

Antes de subir campanha: verificar o domínio no Meta Business e publicar
`/termos` e `/privacidade` (ambas já existem).

---

## Decisões que valem conhecer antes de mexer

**Cinco dependências de runtime**, e só. `next`, `react`, `react-dom`, `clsx`,
`tailwind-merge`. Foram medidas e removidas: `motion` (−37 KB gzip),
`@radix-ui/react-accordion` (−20 KB) e `lucide-react` (−8 KB) — todas substituídas
por CSS nativo, `<details name>` e cinco SVGs inline, sem perder acessibilidade
nem acabamento.

**Animação é CSS, não JavaScript.** A entrada do herói são keyframes com delay; o
parallax e a barra da trilha usam `animation-timeline` (scroll-driven), que roda no
compositor; a revelação no scroll é uma transição CSS acionada por um
`IntersectionObserver` de 30 linhas. Só `transform` e `opacity`.

**O `<h1>` anima apenas `transform`, nunca `opacity`.** Elemento com `opacity: 0`
não conta como pintado para o LCP — animar a opacidade do maior texto da página
atrasaria a métrica de propósito.

**Sem `AggregateRating` no JSON-LD.** Sem avaliações reais, marcá-las é dado
estruturado enganoso: viola as diretrizes do Google e contradiz o argumento da
página. Entra quando houver avaliação de verdade.

**Sem urgência falsa.** Nada de contador regressivo ou "últimas vagas": produto
digital não tem estoque, e escassez inventada é detectável.

---

## O que a auditoria final mudou

- **Herói mostrava um livro, a oferta são quatro materiais.** O manifesto de
  quatro linhas na prancha resolve isso na primeira tela.
- **Faltavam o desejo e o "como funciona".** A narrativa ia de dor direto para
  mecanismo. Entraram [`Outcomes.tsx`](components/sections/Outcomes.tsx) e os três
  passos no fim de [`KitContents.tsx`](components/sections/KitContents.tsx).
- **Ancoragem tinha claim não verificável** ("um livro custa entre R$ 60 e R$ 120").
  Removida. A ancoragem agora é por escopo e tempo, que se confere abrindo os arquivos.
- **Quatro pares de cor abaixo de WCAG AA** — todos eram opacidade aplicada sobre
  `muted`, que já é o piso da paleta. Removidas.
- **`DocumentPlate` estava `aria-hidden`**, escondendo de leitor de tela e de
  indexador justamente a prova principal da página.
- **~65 IntersectionObservers viraram ~37**, com `RevealGroup` (um observer por
  lista, escalonamento em CSS).
- **Bug de reduced motion**: a duração era zerada mas o delay não, então quem pede
  menos movimento via a página piscar.

## Verificado

- `npm run build`, `npm run lint` e `npm run typecheck` limpos
- Console do navegador sem erros ou avisos de hidratação
- Um `<h1>`, 14 `<h2>`, hierarquia sem saltos
- JSON-LD válido: `Product` + `Book` + `FAQPage`
- Renderizado e conferido em 320, 375, 500, 768, 1024 e 1440 px
- `prefers-reduced-motion`: nada se move e o quiz continua funcional
- Sem JavaScript: `<noscript>` reverte os estados de revelação, nada fica invisível
- First Load JS: **153,8 KB gzip** (o piso de Next 16 + React 19; o código da
  página é uma fração disso)
- Contraste conferido par a par: todos ≥ 4.5:1 para texto
