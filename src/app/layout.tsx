import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { cy, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "CDF — Children's Dance Factory",
  description: "Children's Dance Factory website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cy.variable} h-full antialiased`}
      style={
        {
          "--font-inter-fallback": inter.style.fontFamily,
          "--font-cy-fallback": cy.style.fontFamily,
        } as CSSProperties
      }
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
