import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[958px] w-full bg-surface-light">
      <p
        aria-hidden="true"
        className="text-hero-watermark-shadow absolute left-[153px] top-[61px] font-cy text-[531px] leading-normal text-hero-watermark whitespace-nowrap"
      >
        CDF
      </p>

      <div className="absolute left-[412px] top-[121px] h-[651px] w-[593px] overflow-hidden">
        <Image
          src="/images/hero-dancer.png"
          alt="Dancer in mid-leap"
          width={593}
          height={865}
          className="absolute left-0 top-[-11.22%] h-[132.92%] w-full max-w-none object-cover"
          priority
        />
      </div>

      <Link
        href="#contact"
        className="absolute left-[582px] top-[367px] flex h-[67px] w-[275px] items-center justify-center border-2 border-white bg-transparent font-cy text-[20px] font-semibold leading-normal text-white transition-colors hover:bg-white/10 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Get&nbsp;&nbsp;&nbsp;In&nbsp;&nbsp;&nbsp;Touch
      </Link>
    </section>
  );
}
