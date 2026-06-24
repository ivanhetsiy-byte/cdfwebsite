import { FACULTY_ROWS } from "@/lib/constants";
import { getFacultyContent } from "@/lib/faculty-content";
import CornerBrackets from "@/components/CornerBrackets";
import FacultyRow from "@/components/FacultyRow";
import RevealOnScroll from "@/components/RevealOnScroll";

const ROW_TOPS = ["top-[84px]", "top-[518px]", "top-[990px]"] as const;

export default function FacultySection() {
  return (
    <section
      id="about"
      className="relative w-full scroll-mt-0 bg-surface-dark py-16 lg:h-[1571px] lg:py-0"
    >
      <div className="hidden lg:block">
        <CornerBrackets />
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col gap-16 lg:relative lg:h-full lg:gap-0">
        {FACULTY_ROWS.map((row, index) => (
          <RevealOnScroll key={row.image} delay={index * 120}>
            <FacultyRow
              image={row.image}
              imageAlt={row.imageAlt}
              imagePosition={row.imagePosition}
              gap={row.gap}
              paddingLeft={row.paddingLeft}
              bordered={row.bordered}
              top={ROW_TOPS[index]}
            >
              {getFacultyContent(row.contentKey)}
            </FacultyRow>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
