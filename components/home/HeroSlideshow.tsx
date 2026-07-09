"use client";

import { useEffect, useState } from "react";
import s1_640 from "@/public/images/hero/slide-1-640.webp";
import s1_1024 from "@/public/images/hero/slide-1-1024.webp";
import s1_1920 from "@/public/images/hero/slide-1-1920.webp";
import s2_640 from "@/public/images/hero/slide-2-640.webp";
import s2_1024 from "@/public/images/hero/slide-2-1024.webp";
import s2_1920 from "@/public/images/hero/slide-2-1920.webp";
import s3_640 from "@/public/images/hero/slide-3-640.webp";
import s3_1024 from "@/public/images/hero/slide-3-1024.webp";
import s3_1920 from "@/public/images/hero/slide-3-1920.webp";
import s4_640 from "@/public/images/hero/slide-4-640.webp";
import s4_1024 from "@/public/images/hero/slide-4-1024.webp";
import s4_1920 from "@/public/images/hero/slide-4-1920.webp";
import s5_640 from "@/public/images/hero/slide-5-640.webp";
import s5_1024 from "@/public/images/hero/slide-5-1024.webp";
import s5_1920 from "@/public/images/hero/slide-5-1920.webp";
import s6_640 from "@/public/images/hero/slide-6-640.webp";
import s6_1024 from "@/public/images/hero/slide-6-1024.webp";
import s6_1920 from "@/public/images/hero/slide-6-1920.webp";

// Static imports (rather than raw "/images/..." strings) so Next's build
// pipeline correctly prefixes every URL with the configured basePath — plain
// string paths are NOT rewritten for unoptimized/plain <img> usage, which
// would silently 404 once deployed under a subpath like /Newlight.
const variants = [
  [s1_640, s1_1024, s1_1920],
  [s2_640, s2_1024, s2_1920],
  [s3_640, s3_1024, s3_1920],
  [s4_640, s4_1024, s4_1920],
  [s5_640, s5_1024, s5_1920],
  [s6_640, s6_1024, s6_1920],
];

const slides = variants.map(([w640, w1024, w1920]) => ({
  src: w1024.src,
  srcSet: `${w640.src} 640w, ${w1024.src} 1024w, ${w1920.src} 1920w`,
  alt: "",
}));

export function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((s, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={s.src}
            src={s.src}
            srcSet={s.srcSet}
            sizes="100vw"
            alt={s.alt}
            fetchPriority={i === 0 ? "high" : "auto"}
            loading={i === 0 ? "eager" : "lazy"}
            className={`hero-slide ${i === active ? "is-active" : ""}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
      </div>

      <div
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 gap-2"
        role="tablist"
        aria-label="Hero image slideshow"
      >
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-label={`Show slide ${i + 1}`}
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`hero-dot ${i === active ? "is-active" : ""}`}
          />
        ))}
      </div>
    </>
  );
}
