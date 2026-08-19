import { OFFER } from "./offer";

/**
 * Fonte única do FAQ: alimenta o acordeão e o JSON-LD (FAQPage).
 * Como os dois leem o mesmo objeto, é impossível divergirem.
 * As respostas são texto puro — o schema.org não aceita JSX.
 */

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ: readonly FaqItem[] = [
  {
    id: "iniciante",
    question: "Sou iniciante total. Vou conseguir acompanhar?",
    answer:
      "Sim. O e-book começa na inflação e nos juros, não em valuation. Ele foi escrito para levar alguém do zero até um nível intermediário, com glossário de termos técnicos, quadros de conceito e um fluxograma de decisão. Cada capítulo também funciona sozinho, então você pode voltar a um ponto específico quando precisar.",
  },
  {
    id: "avancado",
    question: "Já invisto há um tempo. Vai ser raso demais para mim?",
    answer:
      "O material vai até análise fundamentalista com ROE, ROIC contra custo de capital, múltiplos comparados ao setor, tipos de FII, marcação a mercado e regras de isenção que a maior parte dos cotistas nunca conferiu. O sumário completo dos dez capítulos está nesta página — vale conferir antes de decidir.",
  },
  {
    id: "formato",
    question: "Isso é um curso, uma assinatura ou uma consultoria?",
    answer:
      "Nenhum dos três. São quatro arquivos em PDF, com pagamento único e sem mensalidade. Não há aulas em vídeo, não há área de curso para acompanhar e não há cobrança recorrente.",
  },
  {
    id: "recomendacao",
    question: "Vou receber indicação de quais ações comprar?",
    answer:
      "Não, e isso é proposital. Não há carteira recomendada, lista de ativos nem sugestão de compra em nenhum dos materiais. O que você recebe é o critério para avaliar qualquer ativo por conta própria. Trata-se de material educativo e não constitui recomendação de investimento.",
  },
  {
    id: "entrega",
    question: "Como recebo os arquivos?",
    answer: `Por e-mail, logo após a confirmação do pagamento. São quatro PDFs que você pode baixar, imprimir e usar offline. Pagamento por ${OFFER.paymentMethods.join(", ")}.`,
  },
  {
    id: "atualizacao",
    question: "As regras de imposto mudam. O material fica desatualizado?",
    answer:
      "A edição atual foi conferida nas fontes oficiais em agosto de 2026 e traz a base normativa citada lei por lei, justamente para você poder verificar o que mudou. O próprio guia orienta a confirmar as alíquotas vigentes na Receita Federal antes de declarar.",
  },
  {
    id: "capital",
    question: "Preciso de muito dinheiro para aplicar o que está aqui?",
    answer:
      "Não. O material trata primeiro da reserva de emergência e do aporte regular, e mostra que a constância ao longo do tempo pesa mais que o valor inicial. Os exemplos usam aportes mensais baixos.",
  },
  {
    id: "garantia",
    question: "Posso pedir reembolso?",
    answer: `Pode. São ${OFFER.guaranteeDays} dias para pedir o dinheiro de volta, sem precisar justificar. É o prazo de arrependimento garantido pelo artigo 49 do Código de Defesa do Consumidor para compras feitas pela internet.`,
  },
  {
    id: "risco",
    question: "Isso promete que vou ganhar dinheiro?",
    answer:
      "Não. Nenhum material do kit promete retorno, e o e-book afirma explicitamente que não existe retorno elevado e garantido. O que ele oferece é método para decidir melhor. Rentabilidade passada não garante rentabilidade futura, e toda decisão de investimento envolve risco.",
  },
];
