import type { ReactNode } from "react";

export type GroupEntry = {
  title: string;
  imagePosition: "left" | "right";
  gap: string;
  contentKey: string;
};

export const GROUP_ENTRIES: GroupEntry[] = [
  {
    title: "TinyTots",
    imagePosition: "left",
    gap: "gap-[74px]",
    contentKey: "tinyTots",
  },
  {
    title: "Rising Stars",
    imagePosition: "right",
    gap: "gap-[116px]",
    contentKey: "risingStars",
  },
  {
    title: "Dance And Beats",
    imagePosition: "left",
    gap: "gap-[101px]",
    contentKey: "danceAndBeats",
  },
  {
    title: "Level Up",
    imagePosition: "right",
    gap: "gap-[116px]",
    contentKey: "levelUp",
  },
  {
    title: "NexStar",
    imagePosition: "left",
    gap: "gap-[101px]",
    contentKey: "nexStar",
  },
  {
    title: "Starpower",
    imagePosition: "right",
    gap: "gap-[116px]",
    contentKey: "starpower",
  },
];

const groupsContent: Record<string, ReactNode> = {
  tinyTots: (
    <>
      The quick brown fox jumps over the lazy dog. Carefully curated content{" "}
      <strong className="font-semibold">enhances</strong> the overall user
      interface design. Dynamic layouts require adaptable paragraph lengths for
      ideal rendering. Testing typography options ensures clean alignment across
      all digital screens. <strong className="font-semibold">Modern</strong> web
      elements demand seamless spacing and clear visual hierarchy.
    </>
  ),
  risingStars: (
    <>
      The quick brown fox jumps over the lazy dog. Carefully curated content
      enhances the overall user interface design. Dynamic{" "}
      <strong className="font-semibold">layouts</strong> require adaptable
      paragraph lengths for ideal rendering. Testing typography options ensures
      clean alignment across all{" "}
      <strong className="font-semibold">digital</strong> screens. Modern web
      elements demand seamless spacing and clear visual hierarchy.
    </>
  ),
  danceAndBeats: (
    <>
      The quick brown fox <strong className="font-semibold">jumps</strong> over
      the lazy dog. Carefully curated content enhances the overall user
      interface design. Dynamic layouts require adaptable paragraph lengths for
      ideal rendering. Testing{" "}
      <strong className="font-semibold">typography</strong> options ensures
      clean alignment across all digital screens. Modern web elements{" "}
      <strong className="font-semibold">demand</strong> seamless spacing and
      clear visual hierarchy.
    </>
  ),
  levelUp: (
    <>
      The quick brown fox <strong className="font-semibold">jumps</strong> over
      the lazy dog. Carefully curated content enhances the overall user
      interface design. Dynamic layouts require adaptable paragraph lengths for
      ideal rendering. Testing{" "}
      <strong className="font-semibold">typography</strong> options ensures
      clean alignment across all digital screens. Modern web elements{" "}
      <strong className="font-semibold">demand</strong> seamless spacing and
      clear visual hierarchy.
    </>
  ),
  nexStar: (
    <>
      The quick brown fox <strong className="font-semibold">jumps</strong> over
      the lazy dog. Carefully curated content enhances the overall user
      interface design. Dynamic layouts require adaptable paragraph lengths for
      ideal rendering. Testing{" "}
      <strong className="font-semibold">typography</strong> options ensures
      clean alignment across all digital screens. Modern web elements{" "}
      <strong className="font-semibold">demand</strong> seamless spacing and
      clear visual hierarchy.
    </>
  ),
  starpower: (
    <>
      The quick brown fox <strong className="font-semibold">jumps</strong> over
      the lazy dog. Carefully curated content enhances the overall user
      interface design. Dynamic layouts require adaptable paragraph lengths for
      ideal rendering. Testing{" "}
      <strong className="font-semibold">typography</strong> options ensures
      clean alignment across all digital screens. Modern web elements{" "}
      <strong className="font-semibold">demand</strong> seamless spacing and
      clear visual hierarchy.
    </>
  ),
};

export function getGroupContent(key: string): ReactNode {
  return groupsContent[key];
}
