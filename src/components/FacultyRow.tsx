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
  const imageElement = (
    <div
      className={`relative h-[346px] w-[287px] shrink-0 ${bordered ? "border border-black" : ""}`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
      />
    </div>
  );

  const textElement = (
    <p className="w-[560px] shrink-0 font-cy text-[20px] font-extralight leading-normal text-foreground-dark">
      {children}
    </p>
  );

  return (
    <div
      className={`absolute flex items-center ${gap} ${paddingLeft} ${top}`}
    >
      {imagePosition === "left" ? (
        <>
          {imageElement}
          {textElement}
        </>
      ) : (
        <>
          {textElement}
          {imageElement}
        </>
      )}
    </div>
  );
}
