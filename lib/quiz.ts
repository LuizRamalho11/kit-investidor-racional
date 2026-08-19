/**
 * "Rode o filtro" — a assinatura da página.
 * As nove perguntas saem do próprio material; cada uma aponta o item do
 * kit que fecha aquela lacuna. Nada aqui foi inventado para vender.
 */

import type { KitItem } from "./kit";

export type QuizQuestion = {
  id: string;
  question: string;
  /** id do item do kit que cobre este ponto */
  covers: KitItem["id"];
  /** onde exatamente, para o resultado poder ser específico */
  where: string;
};

export const QUIZ: readonly QuizQuestion[] = [
  {
    id: "retorno-real",
    question: "Sei calcular meu retorno real, descontada a inflação?",
    covers: "ebook",
    where: "Capítulo 1 — retorno nominal contra retorno real",
  },
  {
    id: "juros",
    question: "Sei dizer se a Selic subindo ajuda ou atrapalha minha carteira?",
    covers: "ebook",
    where: "Capítulo 1 — por que juros altos pressionam ações e FIIs",
  },
  {
    id: "negocio",
    question: "Consigo explicar em uma frase como a empresa que comprei ganha dinheiro?",
    covers: "acoes",
    where: "Checklist de ações — bloco 1, O negócio",
  },
  {
    id: "roe",
    question: "Sei diferenciar um ROE alto por qualidade de um ROE alto por alavancagem?",
    covers: "acoes",
    where: "Checklist de ações — bloco 3, Rentabilidade",
  },
  {
    id: "dividend-trap",
    question: "Sei identificar uma dividend trap antes de comprar?",
    covers: "ebook",
    where: "Capítulo 7 — perseguir o maior dividend yield",
  },
  {
    id: "isencao-fii",
    question: "Sei se o FII que tenho me dá isenção de imposto, e por quê?",
    covers: "fiis",
    where: "Checklist de FIIs — condições de isenção",
  },
  {
    id: "darf",
    question: "Sei quando preciso emitir DARF e qual é o código?",
    covers: "tributacao",
    where: "Guia de tributação — DARF 6015",
  },
  {
    id: "limite-isencao",
    question: "Sei quanto posso vender em ações por mês sem pagar imposto?",
    covers: "tributacao",
    where: "Guia de tributação — o limite mensal de isenção",
  },
  {
    id: "tese",
    question: "Tenho minha tese escrita, e sei o que me faria mudar de ideia?",
    covers: "ebook",
    where: "Apêndices — fluxograma de decisão",
  },
];

export type QuizBand = {
  max: number;
  label: string;
  headline: string;
  body: string;
};

/** Faixas de resultado. Nenhuma humilha o visitante; todas nomeiam a lacuna. */
export const QUIZ_BANDS: readonly QuizBand[] = [
  {
    max: 3,
    label: "Decidindo no escuro",
    headline: "Você está decidindo no escuro.",
    body: "Isso não é falta de inteligência. É falta de um filtro. Quem responde a essas perguntas não é mais esperto que você, só tem a sequência escrita na frente.",
  },
  {
    max: 6,
    label: "Sabe mais que a média",
    headline: "Você sabe mais que a média.",
    body: "O que falta não é conteúdo novo. É organizar o que você já sabe numa sequência que você usa toda vez, e não só quando lembra.",
  },
  {
    max: 9,
    label: "Já pensa como investidor",
    headline: "Você já pensa como investidor.",
    body: "Use os checklists para não depender da memória exatamente na hora em que ela falha: quando o preço está caindo e a decisão é difícil.",
  },
];

export function bandFor(score: number): QuizBand {
  return QUIZ_BANDS.find((band) => score <= band.max) ?? QUIZ_BANDS[QUIZ_BANDS.length - 1]!;
}
