import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconInterface,
  IconEngineering,
  IconSearch,
} from "@/components/ui/icons";
import type { ComponentType, SVGProps } from "react";

type Service = {
  id: string;
  title: string;
  lead: string;
  body: string;
  tags: string[];
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const services: Service[] = [
  {
    id: "01",
    title: "Interface Design",
    lead: "UI / UX",
    body: "Deep user-journey wireframes, high-fidelity responsive prototypes, and interactive user flows that resolve intent before a single line of production code is written.",
    tags: ["Wireframing", "Prototyping", "Design Systems", "Motion"],
    Icon: IconInterface,
  },
  {
    id: "02",
    title: "Premium Engineering",
    lead: "Build",
    body: "Fast Next.js and React development, clean TypeScript safety, and ultra-flat structural DOM compilation — codebases built to stay maintainable long after launch.",
    tags: ["Next.js", "React", "TypeScript", "Performance"],
    Icon: IconEngineering,
  },
  {
    id: "03",
    title: "Search Engine Architecture",
    lead: "Visibility",
    body: "Comprehensive on-page semantic structures, technical Core Web Vitals optimization, and fully integrated JSON-LD data so search engines read your business precisely.",
    tags: ["Semantic HTML", "Core Web Vitals", "JSON-LD", "Indexing"],
    Icon: IconSearch,
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28 lg:py-32">
      <div className="shell">
        <SectionHeading
          index="01"
          kicker="Capabilities"
          title={
            <>
              Three disciplines, engineered as one delivery pipeline.
            </>
          }
          intro="Every Velmure Tech build runs the same integrated pipeline — design intent, engineered execution, and search architecture treated as a single continuous system rather than separate handoffs."
        />

        <div className="mt-14 border-t border-slate-800">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 80}>
              <article className="group relative grid grid-cols-1 gap-y-5 border-b border-slate-800 py-9 transition-colors duration-300 hover:bg-slate-900/30 md:grid-cols-12 md:gap-x-8 md:py-10">
                {/* accent rail on hover */}
                <span className="absolute left-0 top-0 h-full w-px bg-accent/0 transition-all duration-300 group-hover:bg-accent/70" />

                <div className="flex items-center gap-4 md:col-span-3 md:items-start md:pl-6">
                  <span className="font-mono text-sm text-slate-600 transition-colors group-hover:text-accent">
                    {s.id}
                  </span>
                  <s.Icon className="h-7 w-7 text-accent" strokeWidth={1.25} />
                </div>

                <div className="md:col-span-4 md:pl-0">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">
                    {s.lead}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                    {s.title}
                  </h3>
                </div>

                <div className="md:col-span-5">
                  <p className="text-[1rem] leading-relaxed text-slate-400 text-pretty">
                    {s.body}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded border border-slate-800 bg-slate-950/40 px-2.5 py-1 font-mono text-[0.68rem] tracking-wide text-slate-400"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
