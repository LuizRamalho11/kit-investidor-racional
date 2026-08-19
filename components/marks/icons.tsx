import type { SVGProps } from "react";
import { cn } from "@/lib/cn";

/**
 * Os cinco ícones que a página realmente usa, inline.
 *
 * Substituem a dependência de biblioteca de ícones: são ~0,4 KB no total
 * contra ~7,8 KB gzip só pelo runtime dela. Traçado 1.5–1.75 para
 * combinar com o peso da tipografia, em vez do padrão genérico.
 */

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

function Icon({ className, children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-5", className)}
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </Icon>
  );
}

export function Check(props: IconProps) {
  return (
    <Icon strokeWidth={2.25} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </Icon>
  );
}

export function Cross(props: IconProps) {
  return (
    <Icon strokeWidth={2} {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </Icon>
  );
}

export function Plus(props: IconProps) {
  return (
    <Icon strokeWidth={1.5} {...props}>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </Icon>
  );
}

export function ShieldCheck(props: IconProps) {
  return (
    <Icon strokeWidth={1.25} {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  );
}
