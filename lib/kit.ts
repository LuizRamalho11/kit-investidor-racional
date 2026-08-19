/** Os 4 componentes do Kit. Todo número aqui é conferível nos PDFs. */

export type KitItem = {
  id: string;
  /** numeração real: os itens formam a sequência do Filtro Racional */
  index: string;
  layer: string;
  title: string;
  format: string;
  /** rótulo curto para o manifesto do herói */
  shortTitle: string;
  /** quantidade verificável, exibida ao lado do rótulo curto */
  quantity: string;
  /** o que é */
  what: string;
  /** para que serve */
  purpose: string;
  /** como usar */
  usage: string;
  /** o que muda na prática */
  benefit: string;
  /** conteúdo verificável, exibido como sumário do item */
  contents: string[];
};

export const KIT: readonly KitItem[] = [
  {
    id: "ebook",
    index: "01",
    layer: "Camada 0 · Base",
    title: "O Investidor Racional",
    shortTitle: "E-book",
    quantity: "55 páginas",
    format: "E-book · 55 páginas · 10 capítulos",
    what: "O livro que sustenta todo o resto: da inflação e da Selic até análise fundamentalista, fundos imobiliários, diversificação e construção de carteira.",
    purpose:
      "Entender o terreno antes de opinar sobre ele. Sem essa base, checklist vira formulário que você preenche sem saber o que está marcando.",
    usage:
      "Leia na ordem sugerida — o raciocínio é cumulativo. Cada capítulo funciona sozinho quando você precisar consultar depois.",
    benefit: "Você para de depender da opinião alheia para julgar um ativo.",
    contents: [
      "Fundamentos: inflação, juros, Selic, CDI, risco × retorno e juros compostos",
      "Renda fixa: Tesouro Direto, CDB, LCI, LCA, CRI, CRA, debêntures e o FGC",
      "Ações: as filosofias de Graham, Buffett, Munger, Barsi, Lynch e Fisher",
      "Análise fundamentalista: demonstrações, múltiplos e indicadores",
      "Fundos imobiliários: tipos, indicadores, riscos e armadilhas",
      "Diversificação, gestão de risco e os erros mais comuns",
      "Tributação, construção de carteira e fontes de dados",
      "Apêndices: checklists, fluxograma de decisão, glossário e FAQ",
    ],
  },
  {
    id: "acoes",
    index: "02",
    layer: "Camada 1 · Filtro de ações",
    title: "Checklist de Análise Fundamentalista",
    shortTitle: "Checklist de ações",
    quantity: "24 perguntas",
    format: "24 perguntas · 1 página",
    what: "Vinte e quatro perguntas em cinco blocos, mais um bloco de Sinais de Alerta que interrompe a análise.",
    purpose:
      "Filtrar qualidade antes de comprar qualquer ação. Se algo cai em Sinais de Alerta, você para e investiga em vez de seguir.",
    usage:
      "Rode antes de apertar o botão de compra, não depois. Uma página, cinco minutos, sempre a mesma sequência.",
    benefit: "A decisão deixa de depender do seu humor no dia.",
    contents: [
      "O negócio: modelo de receita, vantagem competitiva e dependências",
      "Valuation: P/L, P/VP, EV/EBITDA e consistência do dividend yield",
      "Rentabilidade: ROE, ROIC acima do custo de capital e margem",
      "Endividamento e caixa: dívida líquida sobre EBITDA, liquidez e geração de caixa",
      "Governança: conselho, alinhamento com minoritários e transparência",
      "Sinais de alerta: dívida acelerando, troca de auditoria, diluição recorrente",
    ],
  },
  {
    id: "fiis",
    index: "03",
    layer: "Camada 2 · Filtro de FIIs",
    title: "Checklist de Fundos Imobiliários",
    shortTitle: "Checklist de FIIs",
    quantity: "25 perguntas",
    format: "25 perguntas · 1 página",
    what: "Vinte e cinco perguntas para cotas de FII, incluindo as condições exatas de isenção de imposto de renda.",
    purpose:
      "Separar renda sustentável de yield insustentável, e conferir se você realmente cumpre os requisitos de isenção.",
    usage:
      "Use por tipo de fundo: os blocos indicam o que vale para tijolo e o que vale para papel.",
    benefit: "Você deixa de escolher fundo pelo número maior da tela.",
    contents: [
      "O fundo: tijolo, papel ou híbrido, gestora, patrimônio e número de cotistas",
      "Condições de isenção de IR: listado em bolsa, 100 cotistas, menos de 10% das cotas",
      "Valuation: P/VP, dividend yield do segmento e liquidez diária",
      "Qualidade dos ativos: localização, garantias dos CRIs, vacância e concentração",
      "Indicadores: estabilidade da distribuição, alavancagem e contratos",
      "Sinais de alerta: vacância crescente, distribuição acima do resultado, ágio sem lastro",
    ],
  },
  {
    id: "tributacao",
    index: "04",
    layer: "Camada 3 · Filtro fiscal",
    title: "Guia Rápido de Tributação",
    shortTitle: "Guia de tributação",
    quantity: "3 páginas",
    format: "3 páginas · edição revisada",
    what: "O mapa do imposto sobre ações, FIIs e renda fixa, com a base normativa citada lei por lei.",
    purpose: "Saber o que você deve, quanto e até quando. Antes da malha fina, não depois.",
    usage:
      "Consulte antes de vender e antes de declarar. As tabelas respondem em segundos o que costuma tomar uma tarde.",
    benefit: "Você para de vender sem saber se aquilo gera imposto.",
    contents: [
      "Ações: swing trade, day trade, dividendos e JCP, com alíquotas e isenções",
      "O limite de vinte mil reais por mês e como ele realmente funciona",
      "FIIs: rendimento mensal isento contra ganho de capital tributado em 20%",
      "Renda fixa: tabela regressiva e os ativos sempre isentos",
      "DARF 6015: quando emitir, prazo e a dispensa de recolhimento",
      "Calendário anual, boas práticas e base normativa completa",
    ],
  },
];

export const KIT_TOTALS = {
  files: KIT.length,
  pages: 55,
  chapters: 10,
  checklistQuestions: 24 + 25,
} as const;
