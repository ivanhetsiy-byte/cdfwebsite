import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative flex min-h-[54px] w-full flex-col items-center justify-between gap-2 bg-surface-light px-4 py-3 sm:flex-row sm:px-[22px] sm:py-0">
      <p className="font-inter text-[11px] leading-normal text-foreground-light sm:text-[12px]">
        Copyright 2026 CDF
      </p>

      <div className="flex items-center gap-1">
        <p className="font-inter text-[11px] leading-normal text-foreground-light sm:text-[12px]">
          Made With Love by AIR Studios
        </p>
        <span className="relative ml-1 inline-block size-4" aria-hidden>
          <Image
            src="/images/heart.svg"
            alt=""
            fill
            sizes="16px"
            className="object-contain"
          />
        </span>
      </div>
    </footer>
  );
}
