import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { fraunces, jetbrains, switzer } from "./fonts";
import { SITE, ogImage } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LedgerRail, LedgerGrid } from "@/components/layout/LedgerRail";
import { StickyCta } from "@/components/layout/StickyCta";
import { ScrollTracker, OfferTracker } from "@/components/layout/ScrollTracker";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "kit investidor racional",
    "e-book investimentos",
    "checklist análise fundamentalista",
    "checklist fundos imobiliários",
    "tributação de investimentos",
    "como analisar ações",
    "investir com método",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [{ ...ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [ogImage.url],
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#080b12",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang={SITE.lang}
      className={`${fraunces.variable} ${switzer.variable} ${jetbrains.variable}`}
    >
      <head>
        {/* Sem JavaScript nada pode ficar invisível: as revelações
            dependem de IntersectionObserver, então revertemos os
            estados iniciais quando não há script. */}
        <noscript>
          <style>{".reveal,.reveal-group>*,.draw-line{opacity:1;transform:none;stroke-dashoffset:0}"}</style>
        </noscript>
      </head>
      <body className="grain antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-[3px] focus:bg-gold focus:px-5 focus:py-3 focus:text-ink"
        >
          Pular para o conteúdo
        </a>

        <LedgerGrid />
        <LedgerRail />
        <Header />
        <main id="conteudo" className="relative z-10">
          {children}
        </main>
        <Footer />
        <StickyCta />
        <ScrollTracker />
        <OfferTracker />
      </body>
    </html>
  );
}
