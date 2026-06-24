"use client";

import Image from "next/image";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";
import { prefersReducedMotion } from "@/lib/motion";

const MIN_DISPLAY_MS = 1100;
const REVEAL_DURATION_MS = 700;

type LoadPhase = "loading" | "revealing" | "done";

type InitialLoadContextValue = {
  isInitialLoadComplete: boolean;
};

const InitialLoadContext = createContext<InitialLoadContextValue | null>(null);

function waitForReadiness() {
  const fontsReady =
    typeof document !== "undefined" && document.fonts
      ? document.fonts.ready
      : Promise.resolve();

  const pageReady =
    typeof document !== "undefined" && document.readyState === "complete"
      ? Promise.resolve()
      : new Promise<void>((resolve) => {
          window.addEventListener("load", () => resolve(), { once: true });
        });

  return Promise.all([fontsReady, pageReady]);
}

export function InitialLoadProvider({ children }: { children: ReactNode }) {
  const { stop, start } = useSmoothScroll();
  const [phase, setPhase] = useState<LoadPhase>("loading");

  useEffect(() => {
    document.documentElement.classList.add("is-initial-loading");

    if (prefersReducedMotion()) {
      setPhase("done");
      document.documentElement.classList.remove("is-initial-loading");
      return;
    }

    stop();

    let revealTimer = 0;
    let completeTimer = 0;
    let cancelled = false;
    const startedAt = Date.now();

    waitForReadiness().then(() => {
      if (cancelled) {
        return;
      }

      const remaining = Math.max(0, MIN_DISPLAY_MS - (Date.now() - startedAt));

      revealTimer = window.setTimeout(() => {
        setPhase("revealing");

        completeTimer = window.setTimeout(() => {
          setPhase("done");
          document.documentElement.classList.remove("is-initial-loading");
          start();
        }, REVEAL_DURATION_MS);
      }, remaining);
    });

    return () => {
      cancelled = true;
      window.clearTimeout(revealTimer);
      window.clearTimeout(completeTimer);
      document.documentElement.classList.remove("is-initial-loading");
      start();
    };
  }, [start, stop]);

  return (
    <InitialLoadContext.Provider
      value={{ isInitialLoadComplete: phase === "done" }}
    >
      {children}
      {phase !== "done" && (
        <div
          aria-hidden
          className={`initial-load ${
            phase === "revealing" ? "initial-load--revealing" : ""
          }`}
        >
          <div className="initial-load__logo">
            <Image
              src="/images/logo.svg"
              alt=""
              width={120}
              height={89}
              priority
              className="initial-load__logo-image"
            />
          </div>
        </div>
      )}
    </InitialLoadContext.Provider>
  );
}

export function useInitialLoad() {
  const context = useContext(InitialLoadContext);

  if (!context) {
    throw new Error("useInitialLoad must be used within InitialLoadProvider");
  }

  return context;
}
