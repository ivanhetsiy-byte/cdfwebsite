import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-[15px] z-20 flex w-full items-center justify-between gap-4 px-4 sm:px-9">
      <Link href="/" className="relative block h-12 w-16 shrink-0 sm:h-[67px] sm:w-[90px]">
        <Image
          src="/images/logo.svg"
          alt="CDF — Children's Dance Factory"
          fill
          sizes="(max-width: 640px) 64px, 90px"
          className="object-contain object-left"
          priority
        />
      </Link>

      <nav aria-label="Main navigation" className="max-w-[calc(100%-5rem)] overflow-x-auto sm:max-w-none">
        <ul className="flex items-center gap-3 sm:gap-5 lg:gap-[27px]">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="shrink-0">
              <Link
                href={link.href}
                className="font-inter text-[11px] leading-normal text-foreground-light whitespace-nowrap transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:text-[13px] lg:text-[15px]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
