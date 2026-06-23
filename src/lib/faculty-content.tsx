import type { ReactNode } from "react";

const facultyContent: Record<string, ReactNode> = {
  row1: (
    <>
      The quick brown fox jumps over the lazy dog. Carefully curated content{" "}
      <strong className="font-semibold">enhances</strong> the overall user
      interface design. Dynamic layouts require adaptable paragraph lengths for
      ideal rendering. Testing typography options ensures clean alignment across
      all digital screens. <strong className="font-semibold">Modern</strong> web
      elements demand seamless spacing and clear visual hierarchy.
    </>
  ),
  row2: (
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
  row3: (
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

export function getFacultyContent(key: string): ReactNode {
  return facultyContent[key];
}
