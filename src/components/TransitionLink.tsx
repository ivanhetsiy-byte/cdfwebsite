"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { usePageTransition } from "@/components/PageTransitionProvider";

type TransitionLinkProps = ComponentProps<typeof Link>;

function getHrefString(href: TransitionLinkProps["href"]) {
  if (typeof href === "string") {
    return href;
  }

  const pathname = href.pathname ?? "/";
  const hash = href.hash ?? "";
  return `${pathname}${hash}`;
}

export default function TransitionLink({
  href,
  onClick,
  ...props
}: TransitionLinkProps) {
  const { navigate } = usePageTransition();
  const hrefString = getHrefString(href);

  return (
    <Link
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) {
          return;
        }

        if (
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          event.button !== 0
        ) {
          return;
        }

        const isInternalPage =
          hrefString.startsWith("/") && !hrefString.startsWith("//");

        if (isInternalPage || hrefString.startsWith("#")) {
          event.preventDefault();
          navigate(hrefString);
        }
      }}
      {...props}
    />
  );
}
