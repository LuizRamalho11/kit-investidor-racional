"use client";

import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useInView } from "@/hooks/useInView";

/**
 * O ÚNICO padrão de revelação da página: opacity + translateY, uma vez só.
 * Repetir a revelação a cada scroll é o tique mais reconhecível de página
 * gerada automaticamente — por isso o "uma vez" não é configurável.
 *
 * A transição em si é CSS (ver globals.css). Este componente só decide
 * QUANDO ela dispara. Sem biblioteca de animação, sem trabalho por frame.
 */

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** atraso em segundos, para escalonar itens de uma lista */
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-visible={inView}
      className={cn("reveal", className)}
      style={delay ? ({ "--reveal-delay": `${Math.round(delay * 1000)}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}

/**
 * Revelação escalonada de uma lista inteira com UM observer.
 *
 * Antes cada item da lista era um <Reveal>, ou seja, um componente de
 * cliente e um IntersectionObserver por item — dezenas deles na página.
 * Aqui o observer é do grupo e o escalonamento é delay de CSS por
 * posição do filho.
 */
export function RevealGroup({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol" | "dl";
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-visible={inView}
      className={cn("reveal-group", className)}
    >
      {children}
    </Tag>
  );
}
