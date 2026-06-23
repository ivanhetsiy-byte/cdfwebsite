import Image from "next/image";

const WATERMARK_WIDTH = 3390;
const WATERMARK_HEIGHT = 1488;

export default function HeroWatermark() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center select-none"
    >
      <Image
        src="/images/cdf-watermark@3x.png"
        alt=""
        width={WATERMARK_WIDTH}
        height={WATERMARK_HEIGHT}
        unoptimized
        sizes="100vw"
        className="h-auto w-[clamp(320px,110vw,1800px)] max-w-none"
        priority
      />
    </div>
  );
}
