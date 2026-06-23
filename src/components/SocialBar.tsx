import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function SocialBar() {
  return (
    <div className="absolute left-[1250px] top-[919px] z-10 flex items-center gap-[11px]">
      {SOCIAL_LINKS.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block size-[34px] transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <Image
            src={social.icon}
            alt=""
            fill
            className="object-contain"
          />
        </Link>
      ))}
    </div>
  );
}
