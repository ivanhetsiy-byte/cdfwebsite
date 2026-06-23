"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block size-5" aria-hidden>
      <span
        className={`absolute left-0 top-0 block h-0.5 w-full bg-foreground-light transition-transform duration-300 ${
          open ? "top-2 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-2 block h-0.5 w-full bg-foreground-light transition-opacity duration-300 ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-4 block h-0.5 w-full bg-foreground-light transition-transform duration-300 ${
          open ? "top-2 -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="absolute inset-x-0 top-[15px] z-[60] flex w-full items-center justify-between gap-4 px-4 sm:px-9">
        <Link
          href="/"
          className="relative block h-12 w-16 shrink-0 sm:h-[67px] sm:w-[90px]"
        >
          <Image
            src="/images/logo.svg"
            alt="CDF — Children's Dance Factory"
            fill
            sizes="(max-width: 640px) 64px, 90px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden lg:block"
        >
          <ul className="flex items-center gap-[27px]">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-inter text-[15px] leading-normal text-foreground-light whitespace-nowrap transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="flex size-10 items-center justify-center lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-surface-light transition-[visibility,opacity] duration-300 lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="font-inter text-2xl leading-normal tracking-wide text-foreground-light transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
