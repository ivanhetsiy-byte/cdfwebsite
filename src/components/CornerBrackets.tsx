import Image from "next/image";

export default function CornerBrackets() {
  return (
    <>
      <div className="absolute left-[17px] top-[10.5px] flex h-[175px] w-[56px] items-center justify-center">
        <div className="-rotate-90">
          <div className="relative h-[56px] w-[175px]">
            <Image
              src="/images/brackets/top-left.png"
              alt=""
              fill
              className="object-contain"
              aria-hidden
            />
          </div>
        </div>
      </div>

      <div className="absolute right-[17px] top-[10.5px] h-[105px] w-[175px]">
        <Image
          src="/images/brackets/top-right.png"
          alt=""
          fill
          className="object-contain"
          aria-hidden
        />
      </div>

      <div className="absolute bottom-[82px] left-[15px] flex w-[1400px] items-end justify-between">
        <div className="rotate-180">
          <div className="relative h-[105px] w-[175px]">
            <Image
              src="/images/brackets/bottom-left.png"
              alt=""
              fill
              className="object-contain"
              aria-hidden
            />
          </div>
        </div>

        <div className="flex h-[175px] w-[56px] items-center justify-center">
          <div className="rotate-90">
            <div className="relative h-[56px] w-[175px]">
              <Image
                src="/images/brackets/bottom-right.png"
                alt=""
                fill
                className="object-contain"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
