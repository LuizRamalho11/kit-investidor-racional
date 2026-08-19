"use client";

import { useMemo, useState } from "react";
import { Check } from "@/components/marks/icons";
import { Section, SectionHeader } from "@/components/ui/Section";
import { RevealGroup } from "@/components/ui/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";
import { QUIZ, bandFor } from "@/lib/quiz";
import { KIT } from "@/lib/kit";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

/**
 * ★ ASSINATURA DA PÁGINA — "Rode o filtro".
 *
 * É a única parte que o visitante opera. Cria a consciência da lacuna,
 * demonstra o produto e entrega o CTA de maior intenção, no mesmo bloco.
 *
 * As nove perguntas saem do material; o resultado aponta exatamente qual
 * arquivo do kit fecha cada lacuna — especificidade em vez de promessa.
 * Nenhuma faixa de resultado humilha quem responde.
 *
 * Acessibilidade: checkboxes nativos dentro de fieldset. O input fica
 * visualmente oculto mas continua no fluxo de foco e de leitor de tela.
 */

const TOTAL = QUIZ.length;

export function FilterQuiz() {
  const [known, setKnown] = useState<ReadonlySet<string>>(new Set());
  const [revealed, setRevealed] = useState(false);

  const score = known.size;
  const band = bandFor(score);

  const gaps = useMemo(() => {
    const missing = QUIZ.filter((question) => !known.has(question.id));
    return KIT.map((item) => ({
      item,
      questions: missing.filter((question) => question.covers === item.id),
    })).filter((group) => group.questions.length > 0);
  }, [known]);

  function toggle(id: string) {
    setKnown((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function reveal() {
    setRevealed(true);
    track("Lead", { content_name: "Filtro Racional", score, total: TOTAL });
  }

  return (
    <Section id="diagnostico" bleed>
      <SectionHeader
        eyebrow="Rode o filtro"
        title="Nove perguntas. Responda com honestidade — ninguém está vendo."
        lead="Todas saem do próprio material. Marque apenas as que você conseguiria responder agora, sem pesquisar."
        className="mb-14"
      />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <fieldset className="border-0 p-0">
            <legend className="sr-only">
              Marque as perguntas que você conseguiria responder agora
            </legend>

            <RevealGroup as="ul" className="border-t border-rule">
              {QUIZ.map((question) => {
                const checked = known.has(question.id);
                return (
                  <li key={question.id} className="border-b border-rule">
                      <label
                        className={cn(
                          "group flex min-h-12 cursor-pointer items-start gap-4 py-4",
                          "transition-colors duration-200 ease-[ease]",
                        )}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggle(question.id)}
                          className="peer sr-only"
                        />
                        <span
                          aria-hidden="true"
                          className={cn(
                            "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-[2px] border",
                            "transition-[background-color,border-color,transform] duration-[140ms] ease-out",
                            "peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-parchment",
                            checked
                              ? "scale-100 border-gold bg-gold text-ink"
                              : "border-muted bg-transparent group-hover:border-parchment",
                          )}
                        >
                          {checked ? <Check className="size-4" /> : null}
                        </span>
                        <span
                          className={cn(
                            "leading-snug transition-colors duration-200",
                            checked ? "text-parchment" : "text-muted group-hover:text-parchment",
                          )}
                        >
                          {question.question}
                        </span>
                      </label>
                  </li>
                );
              })}
            </RevealGroup>
          </fieldset>
        </div>

        {/* placar + resultado */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <div className="border border-rule bg-ink p-7 lg:p-8">
              <p className="t-label text-muted">Seu placar</p>

              <p className="mt-4 flex items-baseline gap-2">
                <span className="font-data text-5xl leading-none tabular-nums text-gold">
                  {score}
                </span>
                <span className="font-data text-xl leading-none text-muted">de {TOTAL}</span>
              </p>

              {/* fio do placar: scaleX, roda na GPU */}
              <div className="mt-6 h-0.5 w-full bg-rule">
                <div
                  className="h-full origin-left bg-gold transition-transform duration-[320ms] ease-[cubic-bezier(0.77,0,0.175,1)] motion-reduce:transition-none"
                  style={{ transform: `scaleX(${score / TOTAL})` }}
                />
              </div>

              <p className="mt-5 text-sm text-muted" aria-live="polite">
                {score === 0
                  ? "Marque o que você já sabe responder."
                  : `${band.label}.`}
              </p>

              {!revealed ? (
                <button
                  type="button"
                  onClick={reveal}
                  className={cn(
                    "mt-7 w-full rounded-[3px] border border-gold px-6 py-3.5 text-gold",
                    "transition-colors duration-200 ease-[ease] hover:bg-gold hover:text-ink",
                    "active:scale-[0.98]",
                    "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-parchment",
                  )}
                >
                  Ver meu diagnóstico
                </button>
              ) : null}
            </div>

            {revealed ? (
              <div className="anim-rise mt-6 border border-gold/35 bg-ink p-7 lg:p-8">
                <h3 className="t-h3 text-parchment">{band.headline}</h3>
                <p className="mt-4 text-muted">{band.body}</p>

                {gaps.length > 0 ? (
                  <div className="mt-7 border-t border-rule pt-6">
                    <p className="t-label text-gold">O que fecha cada lacuna</p>
                    <ul className="mt-5 space-y-4">
                      {gaps.map(({ item, questions }) => (
                        <li key={item.id}>
                          <p className="text-sm text-parchment">{item.title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-muted">
                            {questions.map((question) => question.where).join(" · ")}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="mt-7 border-t border-rule pt-6 text-sm text-muted">
                    Você respondeu todas. Os checklists servem justamente para o dia em que a
                    memória falhar.
                  </p>
                )}

                <CtaButton
                  cta="quiz"
                  label={gaps.length > 0 ? "Fechar essas lacunas" : "Quero os checklists"}
                  className="mt-8 w-full"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  );
}
