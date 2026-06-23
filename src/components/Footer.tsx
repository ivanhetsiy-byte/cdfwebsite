import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative flex h-[54px] w-full items-center justify-between bg-surface-light px-[22px]">
      <p className="font-inter text-[12px] leading-normal text-foreground-light whitespace-nowrap">
        Copyright 2026 CDF
      </p>

      <div className="flex items-center gap-1">
        <p className="font-inter text-[12px] leading-normal text-foreground-light whitespace-nowrap">
          Made With Love by AIR Studios
        </p>
        <span className="relative ml-1 inline-block size-4" aria-hidden>
          <Image
            src="/images/heart.png"
            alt=""
            fill
            className="object-contain"
          />
        </span>
      </div>
    </footer>
  );
}
