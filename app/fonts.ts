import { Fraunces, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

/**
 * Três papéis tipográficos, conforme §14 da estratégia:
 * display (serifa com caráter) · corpo (grotesca) · dados (mono).
 * Nenhuma delas é Inter, Roboto, Arial ou system-ui.
 */

export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const switzer = localFont({
  variable: "--font-switzer",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
  src: [
    { path: "../assets/fonts/Switzer-400.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/Switzer-500.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/Switzer-600.woff2", weight: "600", style: "normal" },
  ],
});
