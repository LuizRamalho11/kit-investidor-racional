import { cn } from "@/lib/cn";

/**
 * Marca: quatro barras ascendentes em ouro — o mesmo glifo que aparece
 * na lombada do livro no mockup. Amarra a página ao produto físico.
 */
export function BrandMark({ className }: { className?: string }) {
  const bars = [0.34, 0.56, 0.78, 1];
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-6 text-gold", className)}
      fill="currentColor"
    >
      {bars.map((height, index) => (
        <rect
          key={index}
          x={2 + index * 5.6}
          y={22 - height * 18}
          width={3.4}
          height={height * 18}
          rx={0.8}
        />
      ))}
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <BrandMark />
      <span className="font-display text-[0.95rem] leading-none font-semibold tracking-tight text-parchment">
        Investidor Racional
      </span>
    </span>
  );
}
