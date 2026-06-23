import Image from "next/image";

export default function CornerBrackets() {
  return (
    <>
      <div className="absolute left-[17px] top-[10.5px] flex h-[175px] w-[56px] items-center justify-center">
        <div className="-rotate-90">
          <div className="relative h-[56px] w-[175px]">
            <Image
              src="/images/brackets/top-left.svg"
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
          src="/images/brackets/top-right.svg"
          alt=""
          fill
          sizes="175px"
          className="object-contain"
          aria-hidden
        />
      </div>

      <div className="absolute inset-x-[15px] bottom-[82px] flex items-end justify-between">
        <div className="rotate-180">
          <div className="relative h-[105px] w-[175px]">
            <Image
              src="/images/brackets/bottom-left.svg"
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
                src="/images/brackets/bottom-right.svg"
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
