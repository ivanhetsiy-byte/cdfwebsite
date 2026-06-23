export const NAV_LINKS = [
  { label: "FACULTY", href: "#faculty" },
  { label: "SCHEDULE", href: "#schedule" },
  { label: "GROUPS", href: "#groups" },
  { label: "ABOUT", href: "#about" },
  { label: "GET IN TOUCH", href: "#contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "TikTok", href: "https://tiktok.com", icon: "/images/social/tiktok.png" },
  { label: "YouTube", href: "https://youtube.com", icon: "/images/social/youtube.png" },
  { label: "Facebook", href: "https://facebook.com", icon: "/images/social/facebook.png" },
  { label: "Instagram", href: "https://instagram.com", icon: "/images/social/instagram.png" },
] as const;

export const FACULTY_ROWS = [
  {
    image: "/images/faculty-1.jpg",
    imageAlt: "Faculty member portrait",
    imagePosition: "left" as const,
    gap: "gap-[122px]",
    paddingLeft: "pl-[125px]",
    bordered: false,
    contentKey: "row1" as const,
  },
  {
    image: "/images/faculty-2.jpg",
    imageAlt: "Faculty member portrait",
    imagePosition: "right" as const,
    gap: "gap-[203px]",
    paddingLeft: "pl-[251px]",
    bordered: true,
    contentKey: "row2" as const,
  },
  {
    image: "/images/faculty-3.jpg",
    imageAlt: "Faculty member portrait",
    imagePosition: "left" as const,
    gap: "gap-[113px]",
    paddingLeft: "pl-[269px]",
    bordered: true,
    contentKey: "row3" as const,
  },
] as const;
