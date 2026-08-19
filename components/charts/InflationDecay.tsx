"use client";

import type { CSSProperties } from "react";
import { useId } from "react";
import { useInView } from "@/hooks/useInView";

/**
 * Corrosão do poder de compra — o mesmo gráfico do Capítulo 1 do e-book.
 * R$ 1.000 a uma inflação de 5% ao ano.
 *
 * SVG desenhado à mão em vez de biblioteca de charts: ~2 KB contra 40 KB+,
 * e controle total sobre a estética do razão. O traço é revelado com
 * stroke-dashoffset em CSS, normalizado por pathLength="1" — assim não é
 * preciso medir o caminho em JavaScript.
 */

const YEARS = 20;
const RATE = 0.05;
const W = 640;
const H = 280;
const PAD = { top: 24, right: 56, bottom: 40, left: 16 };

const value = (year: number) => 1000 / Math.pow(1 + RATE, year);
const x = (year: number) => PAD.left + (year / YEARS) * (W - PAD.left - PAD.right);
const y = (amount: number) => H - PAD.bottom - (amount / 1000) * (H - PAD.top - PAD.bottom);

const points = Array.from({ length: YEARS + 1 }, (_, year) => ({ year, amount: value(year) }));
const line = points.map((p, i) => `${i === 0 ? "M" : "L"}${x(p.year)},${y(p.amount)}`).join(" ");
const area = `${line} L${x(YEARS)},${H - PAD.bottom} L${x(0)},${H - PAD.bottom} Z`;

const brl = (amount: number) => `R$ ${Math.round(amount).toLocaleString("pt-BR")}`;
const MARKERS = [0, 10, 20];

export function InflationDecay() {
  const gradientId = useId();
  const { ref, inView } = useInView<HTMLElement>(0.4);

  return (
    <figure ref={ref} className="w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        className="h-auto w-full"
        role="img"
        aria-label={`Gráfico: mantidos parados, R$ 1.000 compram o equivalente a ${brl(
          value(10),
        )} em 10 anos e ${brl(value(20))} em 20 anos, a uma inflação de 5% ao ano.`}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d4a438" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#d4a438" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0, 0.25, 0.5, 0.75, 1].map((fraction) => (
          <line
            key={fraction}
            x1={PAD.left}
            x2={W - PAD.right}
            y1={y(fraction * 1000)}
            y2={y(fraction * 1000)}
            stroke="#1c2534"
            strokeWidth="1"
          />
        ))}

        <path d={area} fill={`url(#${gradientId})`} />

        <path
          d={line}
          pathLength={1}
          data-visible={inView}
          className="draw-line"
          style={{ "--draw-length": 1 } as CSSProperties}
          fill="none"
          stroke="#d4a438"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {MARKERS.map((year) => (
          <g key={year}>
            <circle cx={x(year)} cy={y(value(year))} r="3.5" fill="#d4a438" />
            <text
              x={x(year) + (year === YEARS ? 10 : 8)}
              y={y(value(year)) - 10}
              fill="#e8e4da"
              fontSize="15"
              fontFamily="var(--font-data), monospace"
              textAnchor={year === YEARS ? "end" : "start"}
            >
              {brl(value(year))}
            </text>
            <text
              x={x(year)}
              y={H - PAD.bottom + 22}
              fill="#8a93a3"
              fontSize="12"
              fontFamily="var(--font-data), monospace"
              textAnchor={year === 0 ? "start" : year === YEARS ? "end" : "middle"}
            >
              {year === 0 ? "hoje" : `${year} anos`}
            </text>
          </g>
        ))}
      </svg>

      <figcaption className="mt-5 border-l-2 border-rule pl-4 text-sm leading-relaxed text-muted">
        <span className="text-parchment">Como ler:</span> mantido parado, o dinheiro perde valor.
        A uma inflação de 5% ao ano, os R$ 1.000 de hoje compram o equivalente a cerca de{" "}
        {brl(value(20))} em 20 anos. Taxa ilustrativa; a inflação real varia ano a ano.
      </figcaption>
    </figure>
  );
}
