import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";
import GroupRow from "@/components/GroupRow";
import RevealOnScroll from "@/components/RevealOnScroll";
import { GROUP_ENTRIES, getGroupContent } from "@/lib/groups-content";

export default function GroupsPageContent() {
  return (
    <div className="mx-auto flex w-full max-w-[1045px] flex-col items-center px-4 pb-24 pt-28 sm:pt-[160px]">
      <RevealOnScroll>
        <div className="mb-16 flex w-full items-end justify-between sm:mb-24 lg:mb-[136px]">
          <div className="flex h-[105px] w-[56px] shrink-0 items-center justify-center sm:h-[175px]">
            <div className="-rotate-90">
              <div className="relative h-[56px] w-[105px] sm:h-[105px] sm:w-[175px]">
                <Image
                  src="/images/brackets/top-left.svg"
                  alt=""
                  fill
                  sizes="175px"
                  className="object-contain"
                  aria-hidden
                />
              </div>
            </div>
          </div>

          <h1 className="font-cy text-[40px] font-semibold leading-normal text-foreground-light sm:text-[60px]">
            Groups ///
          </h1>
        </div>
      </RevealOnScroll>

      <div className="flex w-full flex-col gap-16 sm:gap-24 lg:gap-[136px]">
        {GROUP_ENTRIES.map((group, index) => (
          <RevealOnScroll key={group.title} delay={index * 100}>
            <GroupRow
              title={group.title}
              imagePosition={group.imagePosition}
              gap={group.gap}
            >
              {getGroupContent(group.contentKey)}
            </GroupRow>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={200}>
        <div className="mt-16 flex w-full justify-end sm:mt-24 lg:mt-[136px]">
          <TransitionLink
            href="/schedule"
            className="interactive-button interactive-button--light neumorphic-button relative flex h-[120px] w-full max-w-[640px] items-center justify-center rounded-[9px] bg-surface-light px-6 font-cy text-[22px] font-semibold leading-normal text-[#1e1e1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:h-[170px] sm:max-w-[700px] sm:px-12 sm:text-[29px]"
          >
            <span
              aria-hidden
              className="neumorphic-inset pointer-events-none absolute inset-0 rounded-[9px]"
            />
            <span className="relative text-center">Check The Schedule Next</span>
          </TransitionLink>
        </div>
      </RevealOnScroll>
    </div>
  );
}
