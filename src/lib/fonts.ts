import { Inter, Outfit, Source_Serif_4 } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
});

export const cy = Outfit({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
  variable: "--font-cy",
  display: "swap",
});

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-source-serif",
  display: "swap",
});
