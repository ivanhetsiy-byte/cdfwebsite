import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { cy, inter, sourceSerif } from "@/lib/fonts";
import { InitialLoadProvider } from "@/components/InitialLoadProvider";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";
import "lenis/dist/lenis.css";
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
      className={`${inter.variable} ${cy.variable} ${sourceSerif.variable} h-full antialiased`}
      style={
        {
          "--font-inter-fallback": inter.style.fontFamily,
          "--font-cy-fallback": cy.style.fontFamily,
          "--font-source-serif-fallback": sourceSerif.style.fontFamily,
        } as CSSProperties
      }
    >
      <body className="min-h-full">
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("is-initial-loading");`,
          }}
        />
        <SmoothScrollProvider>
          <InitialLoadProvider>
            <PageTransitionProvider>{children}</PageTransitionProvider>
          </InitialLoadProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}


