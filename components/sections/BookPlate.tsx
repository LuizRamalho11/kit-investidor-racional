import Image from "next/image";
import { KIT } from "@/lib/kit";

/**
 * A "placa fotográfica": o mockup tratado como prancha catalogada de um
 * livro, com rótulos em mono nas bordas — não como card flutuante.
 *
 * O manifesto de quatro linhas embaixo existe por um motivo de conversão,
 * não de estética: sem ele o visitante frio vê UM livro, quando a oferta
 * são QUATRO materiais. Era a maior lacuna do herói.
 *
 * Server component. O parallax (36 px no total) é animação CSS dirigida
 * por scroll: roda no compositor, sem JavaScript, e some sozinha em
 * navegadores sem suporte ou com reduced motion.
 */
export function BookPlate() {
  return (
    // No tablet (640–1023) o herói ainda é de uma coluna: sem limite de
    // largura a prancha domina a tela e empurra o CTA para longe.
    <div
      className="anim-rise relative mx-auto max-w-md lg:mx-0 lg:max-w-none"
      style={{ animationDelay: "300ms" }}
    >
      <div className="parallax-plate relative border border-rule bg-ledger p-3 sm:p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="t-label text-gold">Fig. 01</span>
          <span className="t-label text-muted">Capa dura</span>
        </div>

        <div className="relative overflow-hidden">
          <Image
            src="/mockups/ebook.webp"
            alt="Capa do e-book O Investidor Racional: capa dura preta com o título em dourado, sobre uma mesa de madeira."
            width={1086}
            height={1448}
            priority
            sizes="(min-width: 1024px) 42vw, (min-width: 640px) 28rem, 82vw"
            className="h-auto w-full"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ledger to-transparent" />
        </div>

        {/* manifesto: o que vem na caixa, em números conferíveis */}
        <ul className="mt-4 border-t border-rule pt-1">
          {KIT.map((item) => (
            <li
              key={item.id}
              className="flex items-baseline gap-3 border-b border-rule/60 py-2.5 last:border-b-0"
            >
              <span className="t-label w-5 shrink-0 text-gold">{item.index}</span>
              <span className="flex-1 text-[0.8125rem] leading-tight text-parchment">
                {item.shortTitle}
              </span>
              <span className="t-label shrink-0 text-muted">{item.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
