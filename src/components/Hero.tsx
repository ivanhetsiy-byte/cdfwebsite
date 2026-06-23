import Image from "next/image";
import Link from "next/link";
import HeroWatermark from "@/components/HeroWatermark";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-visible bg-surface-light">
      <HeroWatermark />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center overflow-visible px-4 pt-16 pb-16 sm:px-6 sm:pt-[82px] sm:pb-20">
        <div className="relative aspect-[593/651] w-[clamp(280px,88vw,780px)] sm:w-[min(780px,41.2vw)]">
          <div className="absolute left-0 top-[-11.22%] z-0 h-[132.92%] w-full">
            <div className="relative h-full w-full">
              <Image
                src="/images/hero-dancer.png"
                alt="Dancer in mid-leap"
                fill
                sizes="(max-width: 640px) 88vw, (max-width: 1024px) 70vw, 780px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="absolute left-1/2 top-[37.8%] z-20 w-[min(275px,85vw)] -translate-x-1/2 sm:w-[275px]">
            <Link
              href="#contact"
              className="glass-cta h-14 font-cy text-base font-semibold leading-normal text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-[67px] sm:text-[20px]"
            >
              Get&nbsp;&nbsp;&nbsp;In&nbsp;&nbsp;&nbsp;Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
