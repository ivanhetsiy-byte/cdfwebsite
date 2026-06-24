import type { ReactNode } from "react";

type GroupRowProps = {
  title: string;
  imagePosition: "left" | "right";
  gap: string;
  children: ReactNode;
};

function GroupImage() {
  return (
    <div
      className="mx-auto h-[280px] w-[min(369px,85vw)] shrink-0 bg-red-600 sm:h-[380px] lg:h-[446px] lg:w-[369px]"
      aria-hidden
    />
  );
}

function GroupText({ children }: { children: ReactNode }) {
  return (
    <p className="w-full max-w-[560px] font-cy text-base font-extralight leading-normal text-foreground-light sm:text-[20px]">
      {children}
    </p>
  );
}

function GroupTitle({ title }: { title: string }) {
  return (
    <h2 className="mb-6 font-cy text-[28px] font-semibold leading-normal text-foreground-light sm:mb-8 sm:text-[38px]">
      {title}
    </h2>
  );
}

export default function GroupRow({
  title,
  imagePosition,
  gap,
  children,
}: GroupRowProps) {
  const imageColumn = (
    <div className="shrink-0">
      <GroupTitle title={title} />
      <GroupImage />
    </div>
  );

  const textColumn = <GroupText>{children}</GroupText>;

  return (
    <>
      <div className="flex flex-col items-center gap-8 px-4 sm:gap-10 lg:hidden">
        {imageColumn}
        {textColumn}
      </div>

      <div
        className={`hidden items-center lg:flex ${gap}`}
      >
        {imagePosition === "left" ? (
          <>
            {imageColumn}
            {textColumn}
          </>
        ) : (
          <>
            {textColumn}
            {imageColumn}
          </>
        )}
      </div>
    </>
  );
}
