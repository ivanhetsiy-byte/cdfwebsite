import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function SocialBar() {
  return (
    <div className="absolute bottom-6 right-4 z-10 flex items-center gap-2 sm:bottom-10 sm:right-9 sm:gap-[11px]">
      {SOCIAL_LINKS.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link relative block size-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:size-[34px]"
        >
          <Image
            src={social.icon}
            alt=""
            fill
            sizes="34px"
            className="object-contain"
          />
        </Link>
      ))}
    </div>
  );
}
