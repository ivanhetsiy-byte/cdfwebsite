"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";
import { getPageNavIndex } from "@/lib/constants";
import { prefersReducedMotion } from "@/lib/motion";

const WIPE_DURATION_MS = 500;

type TransitionPhase = "idle" | "covering" | "revealing";
type TransitionDirection = "forward" | "backward";

type PageTransitionContextValue = {
  navigate: (href: string) => void;
  isTransitioning: boolean;
};

const PageTransitionContext = createContext<PageTransitionContextValue | null>(
  null,
);

function resolveHref(href: string) {
  return new URL(href, window.location.origin);
}

function isPageRoute(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { scrollToHash } = useSmoothScroll();
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const [direction, setDirection] =
    useState<TransitionDirection>("forward");
  const pendingHref = useRef<string | null>(null);
  const pendingHash = useRef<string | null>(null);
  const pathnameRef = useRef(pathname);

  useEffect(() => {
    pathnameRef.current = pathname;
  }, [pathname]);

  const navigate = useCallback(
    (href: string) => {
      if (href.startsWith("#")) {
        scrollToHash(href);
        return;
      }

      if (!isPageRoute(href)) {
        window.location.assign(href);
        return;
      }

      const target = resolveHref(href);
      const samePath = target.pathname === pathnameRef.current;

      if (samePath && target.hash) {
        router.push(`${target.pathname}${target.hash}`);
        requestAnimationFrame(() => scrollToHash(target.hash));
        return;
      }

      if (samePath) {
        return;
      }

      if (phase !== "idle") {
        return;
      }

      if (prefersReducedMotion()) {
        const target = resolveHref(href);
        router.push(`${target.pathname}${target.hash}`);
        if (target.hash) {
          requestAnimationFrame(() => scrollToHash(target.hash, false));
        }
        return;
      }

      const fromIndex = getPageNavIndex(pathnameRef.current);
      const toIndex = getPageNavIndex(target.pathname);
      const goingForward =
        fromIndex < 0 || toIndex < 0 ? true : toIndex > fromIndex;

      setDirection(goingForward ? "forward" : "backward");
      pendingHref.current = href;
      setPhase("covering");
    },
    [phase, router, scrollToHash],
  );

  useEffect(() => {
    if (phase !== "covering") {
      return;
    }

    const coverTimer = window.setTimeout(() => {
      const href = pendingHref.current;
      if (href) {
        const target = resolveHref(href);
        pendingHash.current = target.hash || null;
        router.push(`${target.pathname}${target.hash}`);
        pendingHref.current = null;
      }
      setPhase("revealing");
    }, WIPE_DURATION_MS);

    return () => window.clearTimeout(coverTimer);
  }, [phase, router]);

  useEffect(() => {
    if (phase !== "revealing") {
      return;
    }

    const revealTimer = window.setTimeout(() => {
      setPhase("idle");
    }, WIPE_DURATION_MS);

    return () => window.clearTimeout(revealTimer);
  }, [phase]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      requestAnimationFrame(() => scrollToHash(hash, false));
    }
  }, [scrollToHash]);

  useEffect(() => {
    if (phase !== "idle" || !pendingHash.current) {
      return;
    }

    const hash = pendingHash.current;
    pendingHash.current = null;
    requestAnimationFrame(() => scrollToHash(hash));
  }, [phase, pathname, scrollToHash]);

  return (
    <PageTransitionContext.Provider
      value={{ navigate, isTransitioning: phase !== "idle" }}
    >
      {children}
      <div
        aria-hidden
        className={`page-wipe page-wipe--${direction} ${
          phase === "covering" ? "page-wipe--cover" : ""
        } ${phase === "revealing" ? "page-wipe--reveal" : ""}`}
      />
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = useContext(PageTransitionContext);

  if (!context) {
    throw new Error("usePageTransition must be used within PageTransitionProvider");
  }

  return context;
}
