import { Inter, Outfit } from "next/font/google";

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
