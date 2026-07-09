import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Numbered editorial section header — "01 / CAPABILITIES" plus a display title.
 * The running index gives the page a documented, engineered rhythm.
 */
export function SectionHeading({
  index,
  kicker,
  title,
  intro,
  align = "left",
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`flex flex-col ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[0.7rem] font-medium tracking-[0.28em] text-accent">
          {index}
        </span>
        <span className="h-px w-8 bg-accent/40" />
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-slate-500">
          {kicker}
        </span>
      </div>
      <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-[1.08] tracking-tight text-white text-balance sm:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-slate-400 text-pretty ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
