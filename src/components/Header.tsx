import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="absolute left-[36px] top-[15px] z-20 flex w-[1385px] items-center justify-between">
      <Link href="/" className="relative block h-[67px] w-[90px] shrink-0">
        <Image
          src="/images/logo.png"
          alt="CDF — Children's Dance Factory"
          fill
          className="object-contain"
          priority
        />
      </Link>

      <nav aria-label="Main navigation">
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
    </header>
  );
}
