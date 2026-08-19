# Kit Investidor Racional — Estratégia da Landing Page (Fase 1)

## Context

O projeto está **vazio**: não há código, `package.json`, git, nem contexto de marketing. Só existem 4 PDFs do produto e 1 mockup PNG. Não há nada a preservar — é greenfield puro. Isso é bom: nenhuma decisão ruim herdada.

O objetivo é uma landing page de conversão para tráfego pago (Meta + Google) vendendo o **Kit Investidor Racional** (R$ 37–57), com checkout externo. O maior ativo é a **qualidade real do material**; o maior risco é a **ausência total de prova social**.

Este documento é a entrega da Fase 1 (estratégia). **Nada será implementado até aprovação.**

---

## 1. Diagnóstico do projeto atual

### O que existe

| Arquivo | O que é | Estado |
|---|---|---|
| `O_Investidor_Racional.pdf` | E-book, **55 páginas**, 10 capítulos + apêndices + glossário + FAQ + referências | Pronto, alta qualidade |
| `Checklist_Analise_Fundamentalista.pdf` | 1 página, **24 perguntas** em 5 blocos + Sinais de Alerta | Pronto |
| `Checklist_FIIs.pdf` | 1 página, **25 perguntas** em 5 blocos + Sinais de Alerta | Pronto |
| `Guia Rápido de Tributação.pdf` | **3 páginas**: ações, FIIs, renda fixa, DARF 6015, calendário | Pronto |
| `imagem_e-book.png` | Mockup hardcover preto/dourado sobre madeira, 1.9 MB | Usável, precisa correção (ver Riscos) |
| `.claude/skills/` | 5 skills lidas integralmente | Aplicadas neste doc |

### O que NÃO existe
Sem `package.json`, sem Next.js, sem git, sem `product-marketing.md`, sem logo vetorial, sem OG image, sem domínio, sem link de checkout, sem depoimentos, sem página legal.

Node **v24.18.0** e npm **11.16.0** disponíveis → Next 15 + React 19 + Tailwind v4 são viáveis.

### Diagnóstico crítico
O material é **melhor do que a média do mercado de infoproduto brasileiro** e isso precisa ser o argumento central:

- Cita **legislação nominalmente** (Lei 11.033/2004, 14.754/2023, 15.270/2025, 12.431/2011, Res. CMN 5.215/2025)
- Cita **fontes primárias oficiais** (CVM, B3, Banco Central, Tesouro Nacional, Receita Federal)
- **Distingue explicitamente** fato / consenso de mercado / opinião de autor
- **Data os números** (Selic 14,00% a.a. — Copom 05/08/2026; IPCA 4,44% — IBGE jul/2026; conferido em 16/08/2026)
- **Declara as próprias lacunas** ("Esta edição não desenvolve essa classe... Preferimos declarar a lacuna a resumi-la mal")
- Nunca promete retorno

Isso é **honestidade intelectual verificável** — e é exatamente o oposto do que o comprador espera de um e-book de investimentos vendido por anúncio. É a arma de conversão.

### Desvio consciente da skill `landing-page-guide-v2`
A skill exige **11 elementos obrigatórios**, incluindo o **Elemento 8: Depoimentos (4-6 reviews com fotos)**. Não há depoimentos reais e não vou inventá-los.

**Decisão:** o slot estrutural do Elemento 8 será ocupado por **Prova por Demonstração** — amostra real do produto, fontes verificáveis e o quiz interativo. O componente `<Testimonials />` será construído e deixado pronto, alimentado por `lib/content.ts` com array vazio e renderização condicional (`if (testimonials.length === 0) return null`). No dia em que houver depoimentos reais, é preencher um array. Isso está marcado como **[REQUIRES REAL DATA]**.

---

## 2. Personas

Quatro personas, com dores, linguagem e gatilhos distintos. **Não são intercambiáveis.**

### P1 — "A Paralisada" · Dinheiro parado, medo de errar
- **Perfil:** 26–40, CLT, R$ 5–40 mil na poupança/conta corrente ou CDB do banco. Nunca comprou ação.
- **Dor:** sabe que está perdendo para a inflação e sente vergonha disso. Abriu conta na corretora e nunca usou.
- **Desejo:** dar o primeiro passo **sem fazer besteira**.
- **Medo:** perder dinheiro logo na primeira tentativa e confirmar que "isso não é pra mim".
- **Objeção:** "É muito complexo pra mim." / "Vou entender isso?"
- **Linguagem:** *"tenho um dinheirinho parado"*, *"tenho medo de perder"*, *"não sei nem por onde começar"*, *"fico travada"*.
- **Consciência:** Problem aware.
- **Gatilho:** ordem, sequência clara, permissão para começar pequeno. O fluxograma "antes de investir" fala diretamente com ela.
- **Não compra se:** a página parecer difícil ou soar como sala de trader.

### P2 — "O Colecionador de Dicas" · Já investe, sem método
- **Perfil:** 25–45, tem 8–25 ativos comprados por indicação de YouTube/amigo/grupo. Carteira sem lógica.
- **Dor:** não sabe explicar por que tem o que tem. Não sabe se está bem ou mal.
- **Desejo:** critério próprio, parar de depender de terceiros.
- **Medo:** descobrir que errou feio e que perdeu tempo.
- **Objeção:** "Já sei o básico, isso vai ser raso."
- **Linguagem:** *"minha carteira é uma bagunça"*, *"comprei porque falaram"*, *"não sei se tô fazendo certo"*.
- **Consciência:** Solution aware.
- **Gatilho:** os **49 checklists**. É a promessa de auditar a própria carteira.
- **Não compra se:** o conteúdo parecer "para iniciante absoluto". **Por isso o sumário real dos 10 capítulos precisa estar visível na página.**

### P3 — "O Caçador de Yield" · Renda passiva a qualquer custo
- **Perfil:** 30–55, foco em FIIs e dividendos. Escolhe por DY mais alto da tela.
- **Dor:** rendimento caindo, cota desvalorizando, não entende por quê. Está numa *dividend trap* e não sabe.
- **Desejo:** renda mensal previsível e sustentável.
- **Medo:** que a renda seque.
- **Objeção:** "Já sei escolher FII, é só olhar o DY."
- **Linguagem:** *"quero viver de renda"*, *"qual FII paga mais?"*, *"magic number"*.
- **Consciência:** Solution aware, mas **com crença errada** — precisa ser confrontado, não confirmado.
- **Gatilho:** *"Yield alto e insustentável é sinal de alerta, não de oportunidade"* — frase literal do produto. Somada às regras de isenção de IR que ele provavelmente não conhece.
- **Não compra se:** a página só concordar com ele.

### P4 — "O Estudioso Travado" · Sabe muito, não executa
- **Perfil:** 22–38, consome newsletter, YouTube, podcast. Sabe o que é ROE, P/VP, margem de segurança.
- **Dor:** **conhecimento não virou decisão.** Toda compra vira pesquisa infinita e nenhuma conclusão.
- **Desejo:** um sistema que encerre a análise e permita agir.
- **Medo:** agir e descobrir que faltou considerar algo.
- **Objeção:** "Isso eu já vi no YouTube de graça."
- **Linguagem:** *"eu sei a teoria mas travo na hora"*, *"paralisia por análise"*, *"fico pesquisando e não compro nada"*.
- **Consciência:** Most aware do problema, unaware da solução.
- **Gatilho:** **o produto não é conteúdo, é um procedimento.** Checklist + fluxograma = ponto final na análise.
- **Não compra se:** for vendido como "aprenda a investir". Para ele é *"pare de estudar, comece a decidir"*.

---

## 3. Customer Awareness — como a página fala com cada estágio

A página é **linear e sequencial**, atendendo do menos ao mais consciente conforme rola. Ninguém precisa rolar mais do que o seu estágio exige.

| Estágio | Quem chega assim | Onde a página o pega | O que precisa ver |
|---|---|---|---|
| **Unaware** | Tráfego frio amplo de Meta | Seção 4 (Problema) e 6 (Custo) | Que existe um custo em não decidir. O gráfico R$ 1.000 → R$ 377 em 20 anos |
| **Problem aware** | P1 · maioria do Meta Ads | Seção 5 (Espelho) | Alguém descreveu a situação dele melhor do que ele mesmo |
| **Solution aware** | P2, P3 · Google "como analisar ação" | Seção 7 (Virada) + 9 (Quiz) | Que "mais conteúdo" não é a solução — critério é |
| **Product aware** | Retargeting, visitou antes | Seção 8 + 10 (o que é, o que tem dentro) | Escopo exato, sumário real, amostra |
| **Most aware** | Clicou no anúncio de oferta | **Hero: preço visível + CTA** | Preço, o que recebe, garantia. Em 8 segundos |

**Implicação de CRO:** o preço aparece **acima da dobra**. Em low-ticket, esconder preço aumenta cliques desqualificados e queima verba de anúncio. Quem está most aware compra na primeira tela; quem não está, rola.

**Match anúncio → headline:** cada criativo terá uma headline correspondente. Estrutura preparada para variantes via query param (`?v=b`) sem duplicar página — decisão registrada na Arquitetura Técnica.

---

## 4. Dores (Voice of Customer)

Linguagem real de mercado, sem eufemismo corporativo. **Estas frases vão para a página quase literalmente.**

**Começar:**
- "Tenho um dinheiro parado e não sei o que fazer com ele"
- "Abri conta na corretora e nunca usei"
- "Tenho medo de comprar a coisa errada"
- "Todo mundo fala de investimento e eu me sinto burro"

**Excesso de informação:**
- "Cada vídeo fala uma coisa diferente"
- "Quanto mais eu estudo, menos eu decido"
- "Salvo tudo e não leio nada"

**Falta de método:**
- "Comprei porque um cara falou que era boa"
- "Minha carteira é uma bagunça"
- "Não sei por que tenho o que tenho"
- "Nunca sei a hora de comprar nem de vender"

**Medo:**
- "E se eu perder tudo?"
- "Vi minha ação cair 30% e vendi no desespero"
- "Tenho medo de cair em golpe"

**Imposto:**
- "Nunca sei se preciso pagar imposto"
- "Tenho medo de cair na malha fina"
- "Não sei o que é DARF"

**Procrastinação:**
- "Ano que vem eu começo"
- "Quando eu tiver mais dinheiro eu invisto"
- "Falta tempo pra estudar isso"

### Banido do texto
`potencialize sua jornada financeira` · `otimize seus investimentos` · `solução inovadora` · `ecossistema financeiro` · `transforme sua vida financeira` · `descomplicando` · `destrave` · `mindset` · `game changer` · qualquer ponto de exclamação.

---

## 5. Desejos

1. **Segurança de não estar fazendo besteira** (mais forte que o desejo de ganhar)
2. **Autonomia** — decidir sem depender do "cara do YouTube"
3. **Ordem** — saber onde está, o que tem e por quê
4. **Pertencimento** — ser "alguém que entende disso"
5. **Renda futura previsível** — aposentadoria, viver de renda
6. **Fim da culpa** — parar de sentir que está perdendo tempo

> **A hierarquia importa:** em tráfego frio para low-ticket, vender *segurança e ordem* converte mais que vender *enriquecimento* — e é a única promessa honesta que o produto sustenta. Também é a única que sobrevive à política de anúncios financeiros do Meta.

---

## 6. Objeções (e onde cada uma morre)

| # | Objeção | Resposta | Onde |
|---|---|---|---|
| 1 | "É só mais um e-book genérico de IA" | Sumário real dos 10 capítulos, amostra de páginas reais, legislação citada com número de lei, fontes oficiais nomeadas | Seção 10 (Dentro do e-book) |
| 2 | "Isso eu acho de graça no YouTube" | Você acha *informação* de graça. Não acha *o filtro reunido, ordenado e conferido*. E leva 40 h para montar | Seção 7 (Virada) + FAQ |
| 3 | "É muito complexo pra mim" | Escrito para levar iniciante a intermediário. Capítulos independentes, glossário, fluxograma. Começa na inflação, não em valuation | Seção 12 (Para quem é) |
| 4 | "Já sei o básico, vai ser raso" | Vai até análise fundamentalista, valuation, ROIC × WACC, tipos de FII, marcação a mercado. **Mostre o sumário** | Seção 10 |
| 5 | "Vou comprar e não vou ler" | 3 dos 4 materiais são de **uso**, não de leitura: 1 página cada, para usar antes de cada compra | Seção 8 + FAQ |
| 6 | "Isso promete ficar rico?" | Não. Está escrito no produto que não. Isso é o argumento, não a desculpa | Hero + Seção 13 (Para quem NÃO é) |
| 7 | "Tributação muda toda hora, vai ficar velho" | Edição conferida em 16/08/2026 com base normativa listada. **[REQUIRES REAL DATA: há atualizações inclusas?]** | FAQ |
| 8 | "E se não for o que eu espero?" | Garantia de 7 dias (CDC art. 49) — **[CONFIRMAR PRAZO]** | Seção 15 |
| 9 | "É seguro comprar aqui?" | Checkout externo em plataforma conhecida, selos de pagamento, entrega imediata por e-mail | Microcopy do CTA + FAQ |
| 10 | "Preciso de muito dinheiro?" | Não. O material trata reserva de emergência e aporte a partir de valores baixos | FAQ |

---

## 7. Proposta de valor

> **O Kit Investidor Racional entrega o critério que falta entre o que você já sabe e a decisão que você não consegue tomar.**
>
> Uma base de 55 páginas para entender o terreno, e três filtros de 1 página que você roda antes de cada compra: 24 perguntas para ações, 25 para FIIs, e o mapa completo do imposto. Sem dica, sem carteira recomendada, sem promessa de retorno.

**Transformação:** de *"comprei porque falaram"* para *"comprei porque passou no filtro — e sei escrever por quê"*.

---

## 8. Big Idea

# Você não tem falta de informação. Tem falta de critério.

**Por que funciona:**
- **Verdadeira.** É o diagnóstico real das 4 personas, sobretudo P2 e P4.
- **Reposiciona o concorrente.** YouTube, newsletter e curso viram parte do *problema* (excesso), não alternativas ao produto.
- **Coerente com o produto.** O produto literalmente é um conjunto de filtros. Não é uma promessa forçada em cima de um PDF.
- **Passa na política do Meta.** Não promete retorno, não menciona ganho, não usa prova de riqueza.
- **Reforça o nome.** *Racional* deixa de ser adjetivo e vira método.

---

## 9. Mecanismo único — **O Filtro Racional**

Nome extraído do próprio produto: os checklists dizem *"use como um filtro rápido de qualidade"*. **O mecanismo não foi inventado — foi nomeado.**

Quatro camadas, e cada material do kit é uma delas:

```
CAMADA 0 · BASE          E-book, 55 p.        Entender o terreno antes de opinar
                          ↓
CAMADA 1 · FILTRO A      Checklist Ações      24 perguntas antes de comprar uma ação
                          ↓
CAMADA 2 · FILTRO B      Checklist FIIs       25 perguntas antes de comprar uma cota
                          ↓
CAMADA 3 · FILTRO FISCAL Guia de Tributação   O que você deve ao governo, e quando
```

**A regra do mecanismo (frase de venda):**
> Se a resposta honesta em qualquer etapa for "não", o caminho é recuar — não forçar.

(paráfrase fiel do fluxograma do e-book)

**Por que é defensável:** ninguém pode copiar "24 perguntas em 5 blocos com Sinais de Alerta" sem escrever o material. E o mecanismo é **demonstrável na própria página** via o quiz — o visitante *experimenta* o filtro antes de comprar.

---

## 10. Estratégia de copy

**Tom:** professor sênior, calmo, direto, um pouco severo. Nunca vendedor de curso. Nunca "amigão".
**Registro:** você, sentence case, frases curtas. Sem exclamação. Sem emoji no corpo.
**Assinatura:** marca sem rosto — **a autoridade vem do material, não de uma pessoa.** Toda afirmação de autoridade precisa ser verificável na própria página.

**Regras duras:**
1. Todo número na página é real e conferível nos PDFs (55, 24, 25, 49, 10, 3).
2. Nenhuma promessa de retorno, percentual de resultado, ou "X alunos".
3. Nenhuma urgência falsa. Sem contador regressivo, sem "últimas vagas" (produto digital não tem estoque — mentira detectável destrói a confiança que é o eixo da página).
4. Onde faltar dado real → `[REQUIRES REAL DATA]`, nunca preenchimento criativo.
5. A honestidade do produto é o argumento de venda, não uma limitação a contornar.

---

## 11. Headlines

### Principal (recomendada)
> **Você não tem falta de informação. Tem falta de critério.**

**Subheadline:**
> O Kit Investidor Racional reúne o e-book de 55 páginas e os 3 filtros que você roda antes de cada compra — 24 perguntas para ações, 25 para FIIs e o guia completo do imposto. Sem dica de ativo. Sem promessa de retorno.

**Eyebrow:** `MATERIAL EDUCATIVO · EDIÇÃO 2026 · ENTREGA IMEDIATA`

### 5 alternativas

| # | Headline | Para quem / onde |
|---|---|---|
| A | **49 perguntas entre você e a próxima decisão errada.** | Melhor para Meta frio. Número real (24+25), concreto, provoca curiosidade |
| B | **Antes de comprar qualquer ação, responda estas 24 perguntas.** | Melhor match com anúncio de checklist. Alto CTR, promessa literal |
| C | **Você sabe explicar, em uma frase, por que comprou o que comprou?** | Mira P2 e P4. Pergunta retórica que expõe a lacuna |
| D | **Pare de investir por dica. Comece a investir por critério.** | Mais direta e comercial. Boa para Google Ads (intenção "como escolher ação") |
| E | **O mercado transfere dinheiro dos impacientes para os pacientes.** | Citação literal do e-book. Mais editorial, menos comercial. Boa para retargeting |

> **Recomendação de teste:** subir com a Principal, testar contra **A** em Meta e **D** em Google. Não testar as 6 de uma vez — em low-ticket o volume não sustenta.

### CTAs

**Primário (hero e oferta):** `Quero o Kit — R$ __` · com microcopy abaixo: `Acesso imediato por e-mail · Pix, cartão ou boleto · 7 dias de garantia`
**Primário (final):** `Começar com critério — R$ __`
**Secundário (hero):** `Ver o que tem dentro ↓` — âncora suave para quem não está pronto. Não compete visualmente.
**Pós-quiz:** `Fechar essas lacunas — R$ __` — conecta o resultado do quiz à compra. **É o CTA de maior intenção da página.**

---

## 12. Estrutura completa da landing page

18 seções. Cada uma com **uma** função comercial.

| # | Seção | Função comercial | Awareness |
|---|---|---|---|
| 0 | **Header** | Identidade + CTA persistente (desktop, após scroll) | Todos |
| 1 | **Hero** | Big idea, preço, CTA, mockup | Most aware compra aqui |
| 2 | **Barra de verificáveis** | Trust imediato com números reais (55 p · 49 perguntas · fontes oficiais · edição 2026) | Todos |
| 3 | **O problema** | "O problema não é o que falta. É o que sobra." Reposiciona o excesso de conteúdo | Unaware → Problem |
| 4 | **O espelho** | 4 situações em 1ª pessoa (as 4 personas). Identificação | Problem aware |
| 5 | **O custo** | Agitação honesta: os erros mais caros do cap. 7 + gráfico da inflação (R$1.000→R$377) | Problem aware |
| 6 | **A virada** | Nova perspectiva: informação ≠ critério. Apresenta **O Filtro Racional** | Solution aware |
| 7 | **O Kit** | Os 4 componentes, cada um como camada do filtro. O que exatamente recebe | Solution → Product |
| 8 | **★ Rode o filtro** | **SIGNATURE.** Quiz interativo com 9 perguntas reais. Cria consciência de lacuna e demonstra o produto | **Conversão emocional** |
| 9 | **Dentro do e-book** | Sumário real dos 10 capítulos + amostras de páginas. Mata objeção "raso"/"genérico" | Product aware |
| 10 | **O que muda** | Benefícios como mudança de comportamento, não features | Product aware |
| 11 | **Como usar** | 3 passos. Reduz complexidade percebida e o medo de "não vou ler" | Product aware |
| 12 | **Para quem é** | Qualificação positiva pelas 4 personas | Product aware |
| 13 | **Para quem NÃO é** | Desqualificação honesta (trader, quem quer dica pronta, quem quer ficar rico rápido). **Aumenta confiança e reduz reembolso** | Todos |
| 14 | **Objeções** | 5 objeções tratadas em formato de afirmação → resposta | Product aware |
| 15 | **A oferta** | Ancoragem honesta + composição + preço + CTA | Most aware |
| 16 | **Garantia** | Reversão de risco | Most aware |
| 17 | **FAQ** | 9 perguntas. Últimas fricções + FAQPage schema | Most aware |
| 18 | **CTA final** | Momento-herói. Recapitula, repete o preço, fecha | Most aware |
| 19 | **Footer** | Legal, disclaimers CVM, contato, termos, privacidade | — |

Persistente: **Sticky CTA mobile** (aparece após o hero sair) + **rail de razão** (desktop).

---

## 13. Copy preliminar por seção

> Preço aparece como `R$ __` até definição. Fonte única: `lib/offer.ts`.

### 1 · Hero
```
MATERIAL EDUCATIVO · EDIÇÃO 2026 · ENTREGA IMEDIATA

Você não tem falta de informação.
Tem falta de critério.

O Kit Investidor Racional reúne o e-book de 55 páginas e os 3 filtros
que você roda antes de cada compra — 24 perguntas para ações, 25 para
FIIs e o guia completo do imposto. Sem dica de ativo. Sem promessa de
retorno.

[ Quero o Kit — R$ __ ]        Ver o que tem dentro ↓
Acesso imediato por e-mail · Pix, cartão ou boleto · 7 dias de garantia
```

### 2 · Barra de verificáveis
```
55 páginas · 10 capítulos     49 perguntas de checklist     Fontes: CVM · B3 · Banco Central · Receita Federal     Edição 2026
```

### 3 · O problema
```
O problema não é o que falta. É o que sobra.

Você não parou de investir por falta de conteúdo. Nunca houve tanto:
vídeo, newsletter, thread, live, planilha de graça.

E ainda assim a decisão não sai.

Porque conteúdo responde "o que é". Ele não responde a única pergunta
que trava você na frente da tela: "eu compro isso ou não?"
```

### 4 · O espelho
```
Provavelmente você está em uma destas quatro situações.

01  O dinheiro está parado e você sabe disso.
    Tem saldo na conta, abriu a corretora, nunca executou a primeira
    compra. Não é preguiça. É medo de fazer besteira logo de cara.

02  Você já investe, mas não sabe explicar por quê.
    Tem oito, quinze, vinte ativos. Cada um entrou por um motivo
    diferente — quase sempre o motivo de outra pessoa.

03  Você escolhe pelo número maior da tela.
    O FII que paga mais. A ação com dividend yield mais alto.
    Ninguém te contou que o yield mais alto costuma ser o aviso,
    não a oportunidade.

04  Você sabe a teoria e mesmo assim trava.
    Já sabe o que é ROE, P/VP, margem de segurança. Mas cada compra
    vira uma pesquisa que não termina — e você não compra nada.
```

### 5 · O custo
```
O que custa continuar assim.

Não é o retorno que você deixa de ter. É o dano que você
já está tomando sem perceber.

R$ 1.000 parados hoje compram cerca de R$ 377 em 20 anos.
[gráfico — inflação de 5% a.a., taxa ilustrativa; a inflação real varia ano a ano]

E os erros que mais destroem patrimônio de iniciante não são
sofisticados. São sempre os mesmos seis:

— Investir antes de ter reserva de emergência, e ser forçado a
  vender no pior momento
— Perseguir o que "mais rende" sem perguntar qual risco vem junto
— Tentar acertar o fundo e o topo
— Vender no pânico, comprar na euforia
— Comprar o que não consegue explicar em duas frases
— Confundir preço baixo com barato

Todos têm a mesma origem: emoção no lugar de processo.
```

### 6 · A virada
```
Informação não é critério.

Critério é uma sequência escrita de perguntas que você responde
antes de agir — sempre a mesma, na mesma ordem, com a cabeça fria.

É por isso que o Kit não é um curso.

O FILTRO RACIONAL

CAMADA 0 · BASE            Entender o terreno antes de opinar sobre ele
CAMADA 1 · FILTRO A        24 perguntas antes de comprar uma ação
CAMADA 2 · FILTRO B        25 perguntas antes de comprar uma cota de FII
CAMADA 3 · FILTRO FISCAL   O que você deve, quanto e até quando

A regra: se a resposta honesta em qualquer etapa for "não",
o caminho é recuar — não forçar.
```

### 7 · O Kit
```
O que você recebe.

01 · O INVESTIDOR RACIONAL — E-book, 55 páginas, 10 capítulos
     Da inflação e da Selic à análise fundamentalista, FIIs,
     diversificação, tributação, os erros mais comuns e a
     construção da carteira. Com glossário, FAQ e fluxograma
     de decisão. As lições de Graham, Buffett, Barsi, Lynch,
     Bogle, Marks e Munger reunidas e aplicadas ao mercado
     brasileiro.

02 · CHECKLIST DE ANÁLISE FUNDAMENTALISTA — 24 perguntas, 1 página
     Negócio, valuation, rentabilidade, endividamento, governança
     e um bloco de Sinais de Alerta. Para responder antes de
     apertar o botão de compra.

03 · CHECKLIST DE FUNDOS IMOBILIÁRIOS — 25 perguntas, 1 página
     Tipo do fundo, valuation, qualidade dos ativos, indicadores,
     gestão e Sinais de Alerta. Inclui as condições exatas de
     isenção de IR que a maioria dos cotistas nunca conferiu.

04 · GUIA RÁPIDO DE TRIBUTAÇÃO — 3 páginas
     Ações, FIIs e renda fixa. Alíquotas, isenções, tabela
     regressiva, DARF 6015, prazos e calendário anual. Com a
     base normativa citada lei por lei.

Quatro arquivos em PDF. Baixe, imprima, use.
```

### 8 · ★ Rode o filtro (SIGNATURE)
```
Rode o filtro agora.

Nove perguntas retiradas do próprio material. Responda com
honestidade — ninguém está vendo.

[ ] Sei calcular meu retorno real, descontada a inflação?
[ ] Sei dizer se a Selic subindo ajuda ou atrapalha minha carteira?
[ ] Consigo explicar em uma frase como a empresa que comprei ganha dinheiro?
[ ] Sei a diferença entre um ROE alto por qualidade e um por alavancagem?
[ ] Sei identificar uma dividend trap antes de comprar?
[ ] Sei se o FII que tenho me dá isenção de IR — e por quê?
[ ] Sei quando preciso emitir DARF e qual o código?
[ ] Sei quanto posso vender em ações por mês sem pagar imposto?
[ ] Tenho minha tese escrita — e sei o que me faria mudar de ideia?

── 3 de 9 ──

[Resultado dinâmico:]
0–3  Você está decidindo no escuro. Não é falta de inteligência —
     é falta de um filtro. É exatamente para isso que o Kit existe.
4–6  Você sabe mais que a média. O que falta é organizar isso em
     uma sequência que você usa toda vez, e não só quando lembra.
7–9  Você já pensa como investidor. Use os checklists para não
     depender da memória na hora que o preço está caindo.

     [ Fechar essas lacunas — R$ __ ]
```

### 13 · Para quem NÃO é
```
Para quem este material não é.

— Para quem quer dica de ativo. Não há nenhuma carteira
  recomendada aqui, e não haverá.
— Para quem quer day trade. O material trata de longo prazo,
  e diz abertamente que giro excessivo destrói retorno.
— Para quem quer ficar rico rápido. A frase mais importante
  do e-book é que não existe retorno elevado e garantido.
— Para quem quer que alguém decida por ele. O kit te dá o
  filtro. Quem responde é você.
```

### 15 · A oferta
```
O que isso vale.

Um único livro de análise fundamentalista custa entre R$ 60 e
R$ 120 em livraria. Um curso introdutório de investimentos,
entre R$ 300 e R$ 1.500. [REQUIRES REAL DATA: validar faixas]

Montar sozinho o que está aqui — ler os clássicos, cruzar com
a legislação vigente, conferir na CVM, na B3, no Banco Central
e na Receita, e transformar tudo em uma sequência utilizável —
é trabalho de meses.

Kit Investidor Racional
E-book, 55 páginas ................................ incluso
Checklist de Análise Fundamentalista, 24 perguntas . incluso
Checklist de FIIs, 25 perguntas .................... incluso
Guia Rápido de Tributação, 3 páginas ............... incluso

                                          Total  R$ __
                          Pagamento único. Sem assinatura.

[ Quero o Kit — R$ __ ]
```

> **Nota sobre ancoragem:** **não usar preço riscado falso.** Se nunca foi vendido por R$ 297, escrever "de R$ 297 por R$ 47" é mentira e contradiz o eixo da página. A ancoragem acima compara com alternativas reais e verificáveis. Se existir preço anterior real, usar esse.

### 18 · CTA final
```
O mercado transfere dinheiro dos impacientes para os pacientes.

Você não precisa de mais um vídeo. Precisa de uma sequência
de perguntas que funcione às três da tarde de uma segunda-feira
de queda, quando a decisão é difícil e a emoção está no comando.

São quatro arquivos. R$ __. Chegam no seu e-mail em minutos.

[ Começar com critério — R$ __ ]
7 dias de garantia · Pix, cartão ou boleto
```

### FAQ (9 perguntas)
1. Sou iniciante total. Vou conseguir acompanhar?
2. Já invisto há um tempo. Vai ser raso demais para mim?
3. Isso é um curso, uma assinatura ou uma consultoria?
4. Vou receber indicação de quais ações comprar?
5. Como recebo os arquivos?
6. As regras de imposto mudam. O material fica desatualizado? `[REQUIRES REAL DATA]`
7. Preciso de muito dinheiro para aplicar o que está aqui?
8. Posso pedir reembolso? `[CONFIRMAR PRAZO]`
9. Isso é recomendação de investimento?

---

## 14. Estratégia visual — **"Livro-Razão"**

### O conceito
A página é construída como a **página de um livro-razão contábil**: colunas delimitadas por fios finíssimos, margem esquerda com numeração, linhas que encerram cada bloco, números em fonte monoespaçada como em um registro. Não é decoração — **é a forma visual do que o produto faz: registrar, ordenar, conferir.**

Escuro, quase-preto azulado, dourado usado com avareza. Herda a identidade que os PDFs já têm, então o comprador reconhece o produto quando abre o arquivo. **Zero relação visual com dashboard SaaS.**

### Autocrítica (exigida pela skill `frontend-design`)
A skill alerta que "layout broadsheet com fios finos e raio zero" é um dos três defaults de design gerado por IA. Reconhecido. Diferenciações deliberadas:

1. **Não é broadsheet claro** — é escuro, quente, com profundidade. O oposto do jornal.
2. **Os fios são funcionais**, não ornamento: marcam colunas do razão e encerram registros. A numeração `01–04` só aparece onde há **sequência real** (as 4 camadas do filtro, os 4 componentes do kit) — nunca em uma lista de benefícios que não tem ordem.
3. **A ousadia não está na tipografia, está na interação** — o quiz é o elemento memorável, e todo o resto fica quieto ao redor dele. É a regra da Chanel: uma peça de destaque, o resto disciplinado.
4. **Raio 3 px, não 0** — deliberadamente não é a estética "raio zero" pura, e o CTA carrega o único elemento macio da página (um brilho dourado difuso, sub-20 px de blur).

### Signature visual
**Duas camadas, uma memorável e uma condutora:**

**A · O Quiz "Rode o filtro"** *(elemento memorável)*
O visitante responde 9 perguntas reais e vê um placar subir. É a única parte da página que ele *opera*. Cria a lacuna, demonstra o produto e entrega o CTA de maior intenção — tudo no mesmo componente. Ninguém esquece uma landing page em que descobriu o que não sabia.

**B · A Margem de Razão** *(fio condutor)*
Rail vertical fixo à esquerda (≥1280 px) com o número da seção atual em mono e um fio dourado que preenche conforme o scroll. Como a margem numerada de um livro contábil. Em mobile vira um fio de 2 px no topo. Custo: ~1 KB, `transform` apenas.

### Paleta — 6 valores nomeados
```
--ink        #080B12   fundo base — quase-preto azulado, mais fundo que os PDFs
--ledger     #0E1420   superfície elevada, cards, blocos de registro
--rule       #1C2534   fios da grade de razão, bordas, divisores
--gold       #D4A438   acento único — CTA, marcadores, números-chave
--parchment  #E8E4DA   texto principal — off-white quente, nunca #FFF
--muted      #8A93A3   texto secundário, legendas, notas de rodapé
```
Semânticos, herdados dos PDFs (uso restrito ao quiz e aos blocos de alerta):
```
--alert      #E06B5C   sinais de alerta
--ok         #4FA88B   isento / conferido
```

**Distribuição:** `ink` 60% · `parchment`+`muted` 30% · `gold` 10%. Dourado nunca em bloco chapado grande — só em fios, números, ícones e no CTA.
**Contraste:** `parchment` sobre `ink` ≈ 15:1. `gold` sobre `ink` ≈ 8:1. `muted` sobre `ink` ≈ 6:1. Todos acima de WCAG AA. Texto sobre o CTA dourado será `ink`, não branco.

### Tipografia — 3 papéis
| Papel | Fonte | Justificativa |
|---|---|---|
| **Display** | **Fraunces** (variável, eixos `wght` + `SOFT` + `WONK`) | É um livro. Serifa com personalidade real, não Playfair genérica. Uso com `WONK` levemente ativo em tamanhos grandes |
| **Corpo** | **Switzer** (Fontshare, self-hosted) | Grotesca limpa com mais caráter que Inter. *Fallback:* Manrope via `next/font/google` se o self-host complicar |
| **Dados** | **JetBrains Mono** | Números, rótulos, contadores, preço, `01/02/03`. **É o que faz o razão parecer um razão** |

**Proibidas:** Inter, Roboto, Arial, Helvetica, system-ui, Playfair Display.

**Escala** (fluida, `clamp`):
```
display-xl  clamp(2.75rem, 7vw, 5.5rem)    lh 1.02  tracking -0.02em   Fraunces
display-l   clamp(2rem, 4.5vw, 3.25rem)    lh 1.08  tracking -0.015em  Fraunces
h3          1.375rem                        lh 1.25                     Fraunces
body-l      1.125rem                        lh 1.7                      Switzer
body        1.0625rem                       lh 1.7                      Switzer
label       0.75rem  uppercase  tracking 0.18em                         JetBrains Mono
data        0.875rem  tabular-nums                                      JetBrains Mono
```

### Grid, espaço e forma
- **Grid:** 12 col · max 1240 px · gutter 24 px. Fios verticais em 4 posições fixas a `--rule` 40% opacidade.
- **Espaçamento:** escala de 4 px. Seções: 96 px mobile / 160 px desktop. Composição **assimétrica** — texto em col 2–7, visual em col 8–12, alternando lado a cada seção para criar ritmo.
- **Raio:** 3 px em tudo. Sem pílulas, sem cards arredondados.
- **Sombras:** praticamente nenhuma. Profundidade vem de valor de cor (`ledger` sobre `ink`) e de fios. Exceção única: brilho dourado difuso sob o CTA primário (`0 0 32px -8px var(--gold)`).
- **Textura:** grain de ruído SVG a 3% de opacidade sobre `ink`, fixo, `pointer-events: none`. Dá o peso de papel e mata banding em gradientes escuros. ~1.5 KB inline.

### Tratamento de imagens e mockups
- **Hero:** o hardcover existente, recortado do fundo de madeira, sobre `ink`, com sombra projetada própria e uma luz dourada rasante à esquerda. Parallax de no máximo 24 px.
- **Amostras:** 3 páginas reais do e-book (abertura de capítulo, um quadro de conceito, um gráfico) exportadas em WebP, apresentadas **como páginas**, não como cards — empilhadas com leve rotação (−2°, 0°, +2°) e fios de margem visíveis.
- **Checklists:** mostrados em tamanho real de leitura, porque a densidade deles *é* o argumento de venda.
- **Nunca:** foto de banco de imagens, gente apontando para notebook, gráfico genérico de bolsa, seta verde subindo.

### Ícones
- **Lucide** apenas para utilitários (`Check`, `ChevronDown`, `ArrowRight`, `AlertTriangle`), stroke 1.25, cor `gold` ou `muted`.
- **Custom (SVG inline)** para as 4 marcas dos componentes do kit — glifos geométricos de 24 px derivados do símbolo de barras dourado que já está na lombada do livro no mockup. Isso amarra a marca.

### Gráficos
Dois, ambos **SVG inline desenhado à mão** (sem biblioteca de charts):
1. **Corrosão da inflação** — R$ 1.000 → R$ 614 → R$ 377 ao longo de 20 anos. Linha em `gold`, área a 8%, eixos em `rule`, rótulos em mono. Anima `stroke-dashoffset` na entrada.
2. **Risco × retorno esquemático** — poupança → Tesouro Selic → CDB → debêntures → FIIs → ações. Pontos em `gold`, linha de referência tracejada.

Ambos carregam a legenda "Como ler:" do próprio e-book e a nota de que a taxa é ilustrativa. Isso é honestidade *e* é a estética.

### Estilo de CTA
Retângulo de raio 3 px, fundo `gold`, texto `ink` em Switzer 600. Sem gradiente, sem pílula.
- **Hover** (`@media (hover: hover)`): um fio de 2 px em `gold-lift` cresce da esquerda sob o botão, 200 ms `ease`. Sem escala — escala em hover é o gesto mais genérico que existe.
- **Active:** `scale(0.98)`, 100 ms.
- **Foco:** contorno de 2 px em `parchment`, offset 3 px. Sempre visível.

---

## 15. Design tokens

Tailwind v4, **CSS-first** via `@theme` em `app/globals.css` — sem `tailwind.config.ts`.

```css
@import "tailwindcss";

@theme {
  --color-ink:        #080B12;
  --color-ledger:     #0E1420;
  --color-rule:       #1C2534;
  --color-gold:       #D4A438;
  --color-gold-lift:  #F0C45E;
  --color-parchment:  #E8E4DA;
  --color-muted:      #8A93A3;
  --color-alert:      #E06B5C;
  --color-ok:         #4FA88B;

  --font-display: "Fraunces", Georgia, serif;
  --font-body:    "Switzer", system-ui, sans-serif;
  --font-data:    "JetBrains Mono", ui-monospace, monospace;

  --radius-sm: 2px;
  --radius:    3px;

  /* motion */
  --ease-out-quart:    cubic-bezier(0.165, 0.84, 0.44, 1);
  --ease-out-cubic:    cubic-bezier(0.215, 0.61, 0.355, 1);
  --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  --dur-micro:  120ms;
  --dur-ui:     200ms;
  --dur-reveal: 480ms;
  --dur-hero:   560ms;
}
```
Espaçamento e breakpoints usam a escala padrão do Tailwind (base 4 px), estendida com `--spacing-section-sm: 6rem` e `--spacing-section: 10rem`.

---

## 16. Estratégia de animação

Baseada na skill `web-animation-design` (curso do Emil Kowalski). Contexto **marketing** → durações mais generosas são aceitáveis, mas a disciplina de easing e performance é a mesma.

### Regras aplicadas
| Situação | Easing | Duração |
|---|---|---|
| Entrada/saída de elemento | `ease-out-quart` | 480–560 ms |
| Movimento de elemento já na tela (fio do quiz, acordeão) | `ease-in-out-quart` | 320 ms |
| Hover e transição de cor | `ease` | 200 ms |
| Micro-feedback (`:active`) | `ease-out` | 120 ms |
| Preenchimento de progresso do rail | `linear` | vinculado ao scroll |

### Inventário
1. **Entrada do hero** — **uma** sequência orquestrada, e só. Eyebrow (0 ms) → headline em 2 linhas com stagger de 60 ms (80 ms) → subheadline (240 ms) → CTA (380 ms) → mockup com fade + `translateY(20px)` e um rastro de luz dourada (300 ms). Total < 900 ms. `translateY(16px)` + `opacity`, nunca `scale(0)`.
2. **Revelações no scroll** — **um único padrão** para toda a página: `opacity 0→1` + `translateY(20px→0)`, 480 ms, `ease-out-cubic`, IntersectionObserver a 20%, **`once: true`**. Listas com stagger de 70 ms. Repetir revelação a cada scroll é o tique mais óbvio de página gerada por IA.
3. **Quiz (signature)** — checkbox: `scale(0.95→1)` + preenchimento, 140 ms `ease-out`. Placar: dígitos mono trocam com `translateY` de 8 px, 180 ms. Fio dourado do placar cresce por `transform: scaleX()`, 320 ms `ease-in-out-quart`. Bloco de resultado entra com fade + 12 px, 400 ms, só quando as 9 são respondidas.
4. **Gráficos** — `stroke-dashoffset` de 100% a 0 em 900 ms `ease-out-cubic`, uma vez, ao entrar em viewport. Números contam apenas nos dois rótulos finais (R$ 614, R$ 377), 700 ms.
5. **Rail de razão** — `transform: scaleY()` vinculado ao progresso do scroll via `useScroll` do Framer Motion. Sem re-render do React (usa `MotionValue`).
6. **Parallax** — apenas o mockup do hero, deslocamento máximo de 24 px. `transform` puro.
7. **CTA** — descrito na seção 14. O sticky mobile entra com `translateY(100%→0)`, 260 ms `ease-out-quart`.
8. **FAQ** — rotação do chevron em 180 ms; altura animada via `grid-template-rows: 0fr → 1fr` (evita animar `height`).
9. **Header** — sem animação de entrada. Muda de transparente para `ledger` com `backdrop-blur(8px)` em 200 ms após 80 px de scroll.

### Não animar
Nada de: texto entrando letra por letra, marquee de logos, contadores em toda estatística, cards flutuando em loop, gradiente pulsante, cursor customizado. **Animação que existe só porque "fica bonita" sai.**

### Reduced motion
Cada elemento animado recebe sua própria `@media (prefers-reduced-motion: reduce)`. Framer Motion usa `useReducedMotion()`; quando `true`, `initial` vira `false` e as revelações entram já visíveis. **O quiz continua funcionando integralmente** — só perde a transição. Sem `!important`.

### Performance
- Só `transform` e `opacity`. Nunca `height`, `width`, `top`, `left`, `margin`.
- `will-change: transform` apenas nos wrappers animados, removido após conclusão.
- Blur sempre < 20 px (Safari).
- Framer Motion importado do pacote `motion` com `LazyMotion` + `domAnimation` → ~4.6 KB de features em vez do bundle completo.
- Hover isolado em `@media (hover: hover) and (pointer: fine)` — evita hover fantasma no toque.

---

## 17. Estratégia mobile

**Mobile-first de verdade.** Estimativa: 80–90% do tráfego de Meta Ads no Brasil é mobile Android. A composição mobile é projetada primeiro; o desktop é a expansão.

| Largura | Composição específica |
|---|---|
| **320 px** (piso) | Padding lateral 16 px. Headline `2.75rem` em 3 linhas. Mockup a 62% da largura. CTA full-width, 52 px de altura. Barra de verificáveis em 2×2 em vez de linha. Fios de razão **desligados** (viram ruído). Sem rail |
| **375 px** | Padding 20 px. Headline em 3 linhas. Mockup 68%. Base do design mobile |
| **390 px** | Idem 375. Ganho de respiro vai para espaçamento vertical, não para tipo |
| **430 px** | Padding 24 px. Headline `3.25rem`. Mockup 72%. Barra de verificáveis volta a 1 linha com scroll horizontal e mask de gradiente |
| **Tablet 768** | 2 colunas nas seções de comparação. Quiz em 2 colunas de perguntas. Mockup ao lado da headline, não abaixo. Padding 40 px |
| **Desktop 1024+** | Grid de 12 col ativo. Fios verticais visíveis. Composição assimétrica alternando lados |
| **1280+** | **Rail de razão** aparece. Max-width 1240 px |
| **Ultrawide 1600+** | Conteúdo **não** passa de 1240 px. O excedente vira margem escura com os fios verticais estendidos até a borda — o razão continua, o texto não estica. Nunca esticar linha de texto além de ~72 caracteres |

### Decisões específicas
- **Ordem no mobile:** headline → subheadline → **CTA** → mockup → barra de verificáveis. O CTA vem **antes** do mockup: quem está most aware não deve precisar rolar.
- **Sticky CTA:** barra inferior de 64 px, `ink` a 92% + `backdrop-blur`, com preço à esquerda e botão à direita. Aparece quando o CTA do hero sai da viewport; some quando o CTA da oferta entra (evita dois CTAs competindo). `env(safe-area-inset-bottom)` respeitado.
- **Navegação:** sem menu hambúrguer. O header mobile tem só a marca e o preço. Uma landing page de conversão não precisa de navegação — cada link é uma rota de fuga.
- **Quiz no mobile:** perguntas em lista de uma coluna, alvo de toque de 48 px de altura. Placar fica **sticky** no topo do bloco enquanto ele responde — é o que sustenta o engajamento.
- **Toque:** mínimo 44×44 px em tudo. Nada depende de hover.
- **Gráficos:** SVG com `viewBox` e `preserveAspectRatio`; no mobile, versão simplificada com 3 rótulos em vez de 6.
- **Tipografia mobile:** corpo nunca abaixo de 16 px. Comprimento de linha entre 38 e 46 caracteres.

---

## 18. Estratégia SEO

Página de tráfego pago — SEO é secundário à velocidade, mas feito corretamente (Google Ads pontua *landing page experience*, e isso reduz CPC).

**Metadata** (`app/layout.tsx`, API `Metadata` do Next):
```
title:       Kit Investidor Racional — E-book + 3 checklists para investir com critério
description: E-book de 55 páginas e 3 filtros práticos: 24 perguntas para ações, 25 para
             FIIs e o guia completo de tributação. Material educativo, sem dica de ativo.
canonical:   https://[DOMÍNIO]/                              [REQUIRES REAL DATA]
robots:      index, follow, max-image-preview:large
lang:        pt-BR
```
- **Open Graph:** `og:type=product`, imagem 1200×630 gerada via `app/opengraph-image.tsx` (o hardcover sobre `ink`, com a headline em Fraunces). **Precisa ser criada — não existe.**
- **Twitter/X:** `summary_large_image`.
- **`app/robots.ts`** e **`app/sitemap.ts`** nativos do App Router.

**JSON-LD** (`<script type="application/ld+json">`, injetado no server component):
- `Product` + `Offer` — `name`, `description`, `image`, `brand`, `price`, `priceCurrency: "BRL"`, `availability: InStock`, `url` do checkout.
- `Book` — para o e-book: `numberOfPages: 55`, `bookFormat: EBook`, `inLanguage: pt-BR`.
- `FAQPage` — as 9 perguntas, geradas do **mesmo** objeto que renderiza o acordeão (fonte única, nunca divergem).

**Excluído deliberadamente:** `AggregateRating` e `Review`. Sem avaliações reais, marcá-las é *structured data* enganoso, viola as diretrizes do Google e pode gerar penalização manual. **Não será usado até haver reviews reais.**

**HTML semântico:** `<header>` `<main>` `<section>` `<article>` `<footer>`. Exatamente **um `<h1>`** (a headline do hero). Cada seção com `<h2>`, subitens em `<h3>`. Sem pular níveis.

**Alt text real:** ex. `"Capa do e-book O Investidor Racional, capa dura preta com título em dourado"`, `"Página do Checklist de Análise Fundamentalista mostrando o bloco Sinais de Alerta"`. Nunca "imagem", nunca keyword stuffing.

**Linking interno:** `/termos`, `/privacidade` (obrigatórias para verificação de domínio no Meta e para o Google Ads), e âncoras internas para as seções principais.

**Core Web Vitals — metas:**
| Métrica | Meta | Como |
|---|---|---|
| LCP | < 2.0 s | LCP é **texto** (headline), não imagem. Fontes com `next/font` (self-hosted, sem FOUT). Mockup com `priority` |
| CLS | < 0.05 | `width`/`height` em toda imagem, altura reservada para o sticky, `size-adjust` no fallback de fonte |
| INP | < 200 ms | Quase tudo server component. JS de cliente só em Header, Quiz, StickyCta, Reveal, FAQ |
| TBT | < 150 ms | `LazyMotion`, sem biblioteca de charts, sem smooth-scroll lib |

**Orçamento de JS:** ≤ 90 KB gzip no first load. Auditar com `@next/bundle-analyzer` antes de publicar.

---

## 19. Estratégia CRO

### CTAs — 6 pontos, cada um com função distinta

| # | Onde | Copy | Função |
|---|---|---|---|
| 1 | Hero | `Quero o Kit — R$ __` | Captura o most aware imediatamente |
| 2 | **Pós-quiz** | `Fechar essas lacunas — R$ __` | **Maior intenção da página.** Conecta lacuna recém-descoberta à solução |
| 3 | Após "O Kit" | `Quero os 4 materiais — R$ __` | Converte quem decidiu pelo escopo |
| 4 | Oferta | `Quero o Kit — R$ __` | O CTA principal da seção comercial |
| 5 | Após FAQ | `Ainda dá tempo de começar certo` | Pega quem tinha uma dúvida específica e ela foi resolvida |
| 6 | CTA final | `Começar com critério — R$ __` | Último fechamento |
| — | **Sticky mobile** | `R$ __ · Quero o Kit` | Sempre disponível sem obrigar scroll de volta |
| — | Header desktop | `Quero o Kit` | Aparece após 80 px de scroll |

**Todos apontam para a mesma URL de checkout.** Nenhum botão decorativo. Nenhum CTA "saiba mais" que não leva a lugar nenhum.

### Redução de fricção
- **Sem formulário, sem captura de e-mail antes da compra.** Em low-ticket, gate de e-mail derruba conversão mais do que o valor da lista compensa.
- **Preço visível acima da dobra.**
- **Formas de pagamento explícitas** no microcopy: Pix, cartão, boleto.
- **Prazo de entrega explícito:** "chega no seu e-mail em minutos".
- **Zero links de saída** acima do footer. Sem redes sociais no header. Sem blog.
- **UTMs preservados** do anúncio até o checkout (atribuição correta = otimização correta de campanha).

### Ancoragem
Comparação honesta com alternativas reais (livro de livraria, curso introdutório, tempo de montagem própria). **Sem preço riscado inventado.** Ver nota na seção 13.

### Risco percebido
Garantia · disclaimers visíveis (contraintuitivamente **aumentam** confiança neste nicho) · "material educativo, não é recomendação" dito na primeira tela · sem urgência falsa · **seção "Para quem NÃO é"**, que é o maior sinal de honestidade da página inteira e reduz reembolso.

### Instrumentação
Meta Pixel + Google Ads tag via `next/script` com `strategy="afterInteractive"`.
Eventos: `PageView` · `ViewContent` (hero visível) · `Lead` (quiz concluído — **este é o melhor sinal de qualidade para otimização de campanha**) · `InitiateCheckout` (clique em qualquer CTA, com `content_name` identificando qual dos 6). Scroll depth em 25/50/75/100%.

### Roteiro de testes (após ter volume)
1. Headline Principal × Alternativa A
2. Preço acima da dobra × abaixo
3. Quiz na posição 8 × logo após o hero
4. Copy do CTA #1: "Quero o Kit" × "Baixar agora"

Um teste por vez. Em low-ticket com volume baixo, testes simultâneos não atingem significância.

---

## 20. Referências Dribbble

**Nota de honestidade:** o Dribbble bloqueia leitura automatizada — retornou shell vazio. **Não analisei os shots individualmente.** O que segue são princípios extraídos do gênero (fintech/investment landing pages) via pesquisa de tendências 2026, cruzados com os títulos dos shots que você enviou. Se quiser análise shot a shot, cole as capturas de tela no próximo prompt.

**Shots enviados** (a inspecionar manualmente): [Portfolio Investment Dashboard](https://dribbble.com/shots/25487473-Fintech-Landing-Page-Design-Portfolio-Investment-Dashboard) · [Fundome](https://dribbble.com/shots/27102331-Fundome-Real-Estate-Investment-Website-Animation) · [Investment App Promo](https://dribbble.com/shots/19338833-Investment-App-Promo-Landing-Page-Design-Concept) · [Fintech Animated Hero](https://dribbble.com/shots/15959262-Fintech-App-Animated-Landing-Page-Hero-Section) · [Fincore](https://dribbble.com/shots/23927511-Fincore-Animation-Fintech-Landing-Page)

### Princípios extraídos — o que adotar
| Princípio | Como aplicamos |
|---|---|
| Dark mode como padrão premium em fintech | Adotado, mas **quente e editorial**, não frio e neon |
| Confiança demonstrada, não declarada — compliance como elemento de design | Os disclaimers e a base normativa ficam **visíveis e bem tipografados**, não escondidos no rodapé |
| Mostre o produto, não ilustrações | Páginas reais do e-book e dos checklists, em tamanho legível |
| Dados como narrativa, não como decoração | Os 2 gráficos vêm do e-book e contam a história do custo de não decidir |
| Hierarquia por escala tipográfica, não por caixas | Composição assimétrica com fios; poucos cards |

### O que rejeitamos deliberadamente
Mockup de dashboard flutuando em 3D (não temos app) · gradientes malha roxo/azul · números de "vanity metrics" sem lastro · logos de "as seen in" que não temos · cards de vidro empilhados · glow neon.

**A diferença central:** todas essas referências vendem *software*. Estamos vendendo *um livro e um método*. Puxar a estética de fintech app seria mentir sobre o que a pessoa recebe — e gerar frustração no pós-compra. Puxamos de **relatório de gestora e livro-razão**, não de app.

---

## 21. Bibliotecas recomendadas — e o que foi cortado

### Entram
| Lib | Versão | Justificativa técnica |
|---|---|---|
| `next` | 15.x, App Router | Exigida. Server Components mantêm o JS baixo; `next/font`, `next/image`, metadata API e `opengraph-image` resolvem SEO e CWV nativamente |
| `react` / `react-dom` | 19 | Par do Next 15 |
| `typescript` | 5.x | Exigida |
| `tailwindcss` | v4 | Exigida. `@theme` CSS-first é exatamente o sistema de tokens que a direção precisa, sem arquivo de config |
| `motion` (Framer Motion) | 11+ | Justificada por 3 usos que CSS puro não cobre bem: entrada orquestrada do hero, `useScroll` para o rail sem re-render, e `useReducedMotion()`. Importada com `LazyMotion` + `domAnimation` |
| `@radix-ui/react-accordion` | — | Acessibilidade do FAQ (ARIA, teclado, foco). Reescrever isso à mão dá bug de a11y. Via shadcn, **fortemente restilizado** |
| `lucide-react` | — | Ícones utilitários, tree-shaken. Ícones de marca são SVG custom |
| `clsx` + `tailwind-merge` | — | Utilitário `cn()`. Padrão do shadcn |

### Ficam de fora — com motivo
| Lib | Por que não |
|---|---|
| **GSAP** | Framer Motion cobre 100% do que a página precisa. Somar 2 engines de animação é peso e complexidade sem ganho |
| **Lenis** | Smooth scroll sequestra o scroll nativo. Em Android médio — que é a maior parte do tráfego de Meta no Brasil — introduz travamento e atrapalha o sticky CTA. **Custo de conversão real, ganho estético marginal.** Rejeitada |
| **Zod** | Não há formulário. O checkout é externo. Adicionar validação sem nada a validar |
| **shadcn Button / Card** | Componentes locais de ~20 linhas ficam mais limpos que sobrescrever CVA para uma estética tão específica. Instalamos só o Accordion |
| **Biblioteca de charts** (Recharts, Chart.js) | 2 gráficos estáticos. SVG inline pesa ~2 KB contra 40 KB+ e dá controle total sobre a estética do razão |
| **next-themes** | Página commited ao escuro. Sem toggle |

---

## 22. Arquitetura técnica

```
kit-investidor-racional/
├─ app/
│  ├─ layout.tsx              fontes, metadata, JSON-LD, scripts de pixel
│  ├─ page.tsx                composição das 19 seções (server component)
│  ├─ globals.css             @theme + base + grain + utilities
│  ├─ opengraph-image.tsx     OG 1200×630 gerada
│  ├─ robots.ts · sitemap.ts
│  └─ (legal)/termos/page.tsx · (legal)/privacidade/page.tsx
├─ components/
│  ├─ layout/    Header · LedgerRail · StickyCta · Footer
│  ├─ sections/  Hero · ProofBar · Problem · Mirror · Cost · Turn · KitContents
│  │             FilterQuiz★ · InsideBook · Outcomes · HowToUse · ForWhom
│  │             NotForWhom · Objections · Offer · Guarantee · Faq · FinalCta
│  │             Testimonials  (renderiza null enquanto vazio)
│  ├─ ui/        Button · Reveal · Rule · Eyebrow · SectionHeader · Accordion
│  ├─ charts/    InflationDecay.tsx · RiskReturn.tsx   (SVG inline)
│  └─ marks/     4 SVGs dos componentes do kit
├─ lib/
│  ├─ cn.ts
│  ├─ content.ts   ← TODA a copy, tipada. Fonte única de verdade
│  ├─ offer.ts     ← preço, URL de checkout, garantia, formas de pagamento
│  ├─ quiz.ts      ← as 9 perguntas + faixas de resultado
│  ├─ faq.ts       ← alimenta o acordeão E o FAQPage schema
│  └─ analytics.ts ← wrapper tipado dos eventos de pixel
└─ public/
   ├─ mockups/ · samples/ · fonts/ (Switzer .woff2) · og/
```

### Decisões
- **Server Components por padrão.** `"use client"` só em: `Header`, `LedgerRail`, `StickyCta`, `Reveal`, `FilterQuiz`, `Accordion`. Todo o resto é HTML estático.
- **Copy centralizada em `lib/content.ts`.** Trocar headline não exige tocar em JSX. Habilita variantes A/B via `?v=b` lendo `searchParams` no server, sem duplicar página nem prejudicar CWV.
- **`lib/offer.ts` isola os `[REQUIRES REAL DATA]`.** Preço, link de checkout e prazo de garantia vivem em **um arquivo**. Quando os dados chegarem, é uma edição só.
- **Render:** estático (SSG). Sem banco, sem API, sem estado de servidor.
- **Deploy:** Vercel. Domínio próprio necessário (verificação de domínio do Meta e qualidade do Google Ads).
- **`lib/faq.ts` alimenta acordeão e schema** a partir do mesmo objeto — impossível divergirem.

### Checkout — Kiwify (confirmado em 18/08/2026)
- **URL:** formato `https://pay.kiwify.com.br/<id>`. Fica em `offer.checkoutUrl`, usada pelos 6 CTAs.
- **UTMs:** repassados como query string da LP para o checkout, para a atribuição fechar com o anúncio.
- **Pixel:** a Kiwify tem integração nativa de Meta Pixel e Google Ads no painel do produto. **Divisão de responsabilidade:** a LP dispara `PageView`, `ViewContent`, `Lead` (quiz) e `InitiateCheckout`; a Kiwify dispara `Purchase`. Não duplicar `Purchase` na LP.
- **Verificação de domínio:** obrigatória no Meta Business para o domínio próprio da LP, senão o iOS 14+ derruba a mensuração.
- **Entrega:** e-mail + área de membros da Kiwify. O microcopy "chega no seu e-mail em minutos" está correto.
- **Garantia:** a Kiwify permite configurar o prazo. Mínimo legal de 7 dias (CDC art. 49). **[CONFIRMAR PRAZO ESCOLHIDO]**

---

## 23. Riscos

| # | Risco | Severidade | Mitigação |
|---|---|---|---|
| 1 | ~~"Qwify" vs "Kiwify"~~ — **RESOLVIDO (18/08/2026): é Kiwify.** Risco remanescente é operacional: pixel duplicado (Kiwify dispara o dele no checkout) e domínio não verificado no Meta | Média | Disparar `InitiateCheckout` na LP e deixar `Purchase` por conta da Kiwify — nunca os dois no mesmo evento, senão a conversão conta em dobro e a otimização de campanha degrada |
| 2 | **Sem prova social.** É o maior gap de conversão da página | **Alta** | Prova por demonstração + quiz + garantia. Coletar depoimentos reais dos primeiros compradores como prioridade 1 pós-lançamento. Slot já construído |
| 3 | **Política de anúncios financeiros do Meta.** Contas são bloqueadas por promessa de retorno | **Alta** | A copy é conservadora por design — nenhuma menção a ganho, retorno ou renda garantida. Verificação de domínio + páginas legais publicadas antes de subir campanha |
| 4 | **Conformidade regulatória (CVM).** Material educativo não pode ser confundido com recomendação | Média | Disclaimer visível na primeira tela e no rodapé. Seção "Para quem NÃO é" declara que não há carteira recomendada. O produto já é rigoroso nisso |
| 5 | **Capa diz "Edição 2025", miolo diz "Edição 2026"** | Média | Corrigir a arte da capa antes de usar no hero. É a primeira coisa que o comprador vê — inconsistência de data numa página cujo eixo é rigor destrói o argumento |
| 6 | **Selic e IPCA na página envelhecem.** Selic 14,00% é de 05/08/2026 | Média | Se usados, sempre com data ao lado (como o e-book faz). Preferência: usar na copy apenas dados que não expiram (o gráfico da inflação é ilustrativo, não datado) |
| 7 | **Sem garantia definida.** CDC art. 49 dá 7 dias de arrependimento em compra online — é lei, não cortesia | Média | Confirmar prazo. Recomendação: oferecer 7 dias e comunicar como garantia (o que já é obrigação legal vira benefício comunicado) |
| 8 | **Performance em Android médio + 4G** | Média | Orçamento de 90 KB de JS, sem lib de charts, sem smooth-scroll, `LazyMotion`. Testar em throttling 4G real, não só no Lighthouse desktop |
| 9 | **A skill exige depoimentos; não temos** | Baixa | Desvio documentado na seção 1. Componente construído e inativo |
| 10 | **Preço visível pode reduzir cliques totais** | Baixa | É intencional: filtra tráfego, melhora taxa de conversão do checkout e reduz custo por venda. Item 2 do roteiro de testes |

---

## 24. Informações que precisam ser reais / preenchidas

**Bloqueiam a publicação:**
| # | Item | Onde impacta |
|---|---|---|
| 1 | **Preço final** | `lib/offer.ts` · aparece 8× na página |
| 2 | **URL de checkout Kiwify** (`https://pay.kiwify.com.br/…`) — Produtos → ⋯ → Ver Links | `lib/offer.ts` · todos os 6 CTAs |
| 3 | **Prazo de garantia** | Seção 16, FAQ 8, microcopy dos CTAs |
| 4 | **Domínio** | Canonical, OG, sitemap, robots, verificação Meta |
| 5 | **Razão social / CNPJ / e-mail de contato** | Footer, Termos, Privacidade — exigidos pelo Meta e pelo Google Ads |
| 6 | **Meta Pixel ID + Google Ads Conversion ID** | `lib/analytics.ts` |

**Melhoram a conversão, não bloqueiam:**
| # | Item |
|---|---|
| 7 | Depoimentos reais de compradores (**maior ganho isolado disponível**) |
| 8 | Logo vetorial (SVG). Hoje só existe o símbolo de barras dentro do PNG do mockup |
| 9 | Capa corrigida para "Edição 2026" |
| 10 | 3 páginas internas do e-book exportadas em alta para a seção de amostra |
| 11 | Confirmação: há atualizações futuras inclusas? (mata a objeção 7) |
| 12 | Validação das faixas de preço usadas na ancoragem (livro de livraria, curso) |
| 13 | Formas de pagamento efetivamente habilitadas no checkout |

---

## 25. Checklist de implementação (Fase 2)

### Etapa A — Fundação
- [ ] `create-next-app` — Next 15, TS, Tailwind v4, App Router, sem `src/`
- [ ] Instalar apenas: `motion`, `lucide-react`, `clsx`, `tailwind-merge`, `@radix-ui/react-accordion`
- [ ] `globals.css` com o bloco `@theme` da seção 15 + grain SVG + reset
- [ ] Fontes: Fraunces e JetBrains Mono via `next/font/google`; Switzer via `next/font/local` (fallback Manrope)
- [ ] `lib/cn.ts`, `lib/offer.ts`, `lib/content.ts`, `lib/quiz.ts`, `lib/faq.ts`, `lib/analytics.ts`
- [ ] `git init` + primeiro commit

### Etapa B — Sistema visual
- [ ] `ui/Button`, `ui/Rule`, `ui/Eyebrow`, `ui/SectionHeader`, `ui/Reveal`
- [ ] `layout/Header` (transparente → sólido), `layout/Footer` com disclaimers
- [ ] `layout/LedgerRail` (≥1280 px) e fios verticais do grid
- [ ] Preparar assets: recortar mockup, exportar amostras em WebP

### Etapa C — Seções (na ordem da narrativa)
- [ ] Hero com entrada orquestrada · ProofBar · Problem · Mirror
- [ ] Cost + `charts/InflationDecay` · Turn (O Filtro Racional) · KitContents com as 4 marcas
- [ ] **FilterQuiz** ★ — construir com cuidado extra: é a signature e o CTA de maior intenção
- [ ] InsideBook (sumário real + amostras) · Outcomes · HowToUse
- [ ] ForWhom · NotForWhom · Objections
- [ ] Offer · Guarantee · Faq · FinalCta
- [ ] `Testimonials` construído e inativo

### Etapa D — Conversão e mensuração
- [ ] `StickyCta` mobile com lógica de aparecer/sumir
- [ ] Todos os 6 CTAs ligados a `offer.checkoutUrl` com UTM preservado
- [ ] Eventos de pixel, incluindo `Lead` na conclusão do quiz
- [ ] `/termos` e `/privacidade`

### Etapa E — SEO e performance
- [ ] Metadata completa, `opengraph-image.tsx`, `robots.ts`, `sitemap.ts`
- [ ] JSON-LD: Product + Offer + Book + FAQPage. **Sem AggregateRating**
- [ ] Auditar hierarquia de headings (um `<h1>`) e alt text
- [ ] `@next/bundle-analyzer` — confirmar ≤ 90 KB gzip

### Etapa F — Verificação
- [ ] `npm run build` limpo, sem erro de TS
- [ ] Lighthouse mobile com throttling 4G: **Performance ≥ 90, Acessibilidade 100, SEO 100**
- [ ] Testar em 320 / 375 / 390 / 430 / 768 / 1024 / 1440 / 1920 px
- [ ] Navegação por teclado completa; foco sempre visível
- [ ] `prefers-reduced-motion` ativo: nada se move, **o quiz continua funcional**
- [ ] Contraste verificado em todos os pares de cor
- [ ] Zero Lorem Ipsum; todo `[REQUIRES REAL DATA]` resolvido ou explicitamente aceito
- [ ] Teste do "parece gerado por IA?" — comparar contra os 3 defaults citados na seção 14

---

## Verificação

Ao fim da Fase 2, a validação é:

1. **`npm run dev`** e percorrer a página inteira nas 8 larguras listadas.
2. **`npm run build`** — build limpo, sem erro de tipo, first load JS ≤ 90 KB.
3. **Lighthouse mobile** com CPU 4× e rede 4G: Performance ≥ 90, A11y 100, SEO 100, Best Practices ≥ 95.
4. **Teste manual do quiz** — responder 0, 5 e 9 perguntas e confirmar as 3 faixas de resultado e o disparo do evento `Lead`.
5. **Reduced motion** ligado no SO — página legível e quiz funcional, sem movimento.
6. **Validador de rich results do Google** no JSON-LD.
7. **Teclado apenas** — chegar a todos os 6 CTAs e abrir todo o FAQ sem mouse.

---

## Nota final sobre as 3 fases

Este documento cobre integralmente o **Prompt 1** (estratégia). Ao aprovar, a Fase 2 constrói o projeto e todas as seções. Deixo `lib/offer.ts`, `lib/content.ts` e o componente `Testimonials` isolados **exatamente** para que o Prompt 3 (ajustes, dados reais, refino) seja uma edição cirúrgica e não uma reescrita.
