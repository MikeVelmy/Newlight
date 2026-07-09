import Image from "next/image";
import mark from "@/public/brand/velmure-mark.png";

/**
 * Brand lockup: the extracted V mark (on transparency) paired with the wordmark
 * typeset in the site's own display font — crisp on dark and fully controllable,
 * rather than dropping a light-background logo raster onto slate.
 */
export function Logo({
  className = "",
  markSize = 30,
}: {
  className?: string;
  markSize?: number;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={mark}
        alt="Velmure Tech"
        width={markSize}
        height={markSize}
        priority
        className="h-auto w-auto"
        style={{ width: markSize, height: "auto" }}
      />
      <span className="font-display text-[0.98rem] font-bold leading-none tracking-tight text-white">
        VELMURE<span className="ml-1 font-medium text-accent">TECH</span>
      </span>
    </span>
  );
}
