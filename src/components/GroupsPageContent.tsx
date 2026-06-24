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
            className="glass-cta h-[100px] w-full max-w-[507px] font-cy text-xl font-semibold leading-normal text-[#1e1e1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:h-[149px] sm:text-[29px]"
          >
            Check The Schedule Next
          </TransitionLink>
        </div>
      </RevealOnScroll>
    </div>
  );
}
