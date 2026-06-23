import Image from "next/image";
import type { ReactNode } from "react";

type FacultyRowProps = {
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  gap: string;
  paddingLeft: string;
  bordered: boolean;
  top: string;
  children: ReactNode;
};

function FacultyImage({
  image,
  imageAlt,
  bordered,
}: {
  image: string;
  imageAlt: string;
  bordered: boolean;
}) {
  return (
    <div
      className={`relative mx-auto h-[280px] w-[min(287px,80vw)] shrink-0 sm:h-[346px] sm:w-[287px] ${bordered ? "border border-black" : ""}`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 640px) 80vw, 287px"
        className="object-cover"
      />
    </div>
  );
}

function FacultyText({ children }: { children: ReactNode }) {
  return (
    <p className="w-full max-w-[560px] font-cy text-base font-extralight leading-normal text-foreground-dark sm:text-[20px]">
      {children}
    </p>
  );
}

export default function FacultyRow({
  image,
  imageAlt,
  imagePosition,
  gap,
  paddingLeft,
  bordered,
  top,
  children,
}: FacultyRowProps) {
  const imageBlock = (
    <FacultyImage image={image} imageAlt={imageAlt} bordered={bordered} />
  );
  const textBlock = <FacultyText>{children}</FacultyText>;

  return (
    <>
      <div
        className={`flex flex-col items-center gap-8 px-4 sm:gap-10 lg:hidden ${
          imagePosition === "right" ? "flex-col-reverse" : ""
        }`}
      >
        {imageBlock}
        {textBlock}
      </div>

      <div
        className={`absolute hidden items-center ${gap} ${paddingLeft} ${top} lg:flex`}
      >
        {imagePosition === "left" ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </>
  );
}
