import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Sector = {
  id: string;
  name: string;
  focus: string;
  tag: string;
  span: string;
};

const sectors: Sector[] = [
  {
    id: "01",
    name: "Corporate & Enterprise",
    focus:
      "Institutional credibility, secure data handling, and premium multi-page brand positioning for firms whose website is a trust instrument.",
    tag: "Credibility · Structure",
    span: "lg:col-span-7",
  },
  {
    id: "02",
    name: "Real Estate & Property",
    focus:
      "Blazing-fast media rendering, interactive layouts, and high-conversion lead capture engineered to book property viewings.",
    tag: "Media · Lead Capture",
    span: "lg:col-span-5",
  },
  {
    id: "03",
    name: "Automotive Showrooms",
    focus:
      "High-visibility inventory displays and direct local search optimization built to drive physical showroom foot traffic.",
    tag: "Inventory · Local Search",
    span: "lg:col-span-5",
  },
  {
    id: "04",
    name: "Travel & Destination Brands",
    focus:
      "Seamless booking pipelines, rich experiential UI, and deep local search visibility that captures active, ready-to-move tourists.",
    tag: "Booking · Discovery",
    span: "lg:col-span-7",
  },
];

export function Sectors() {
  return (
    <section
      id="sectors"
      className="relative border-t border-slate-900 bg-slate-900/20 py-24 sm:py-28 lg:py-32"
    >
      <div className="shell">
        <SectionHeading
          index="02"
          kicker="Sectors"
          title="Dedicated architecture systems for high-impact industries."
          intro="We don't ship a single template across verticals. Each sector gets an architecture tuned to how its customers actually decide and convert."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {sectors.map((s, i) => (
            <Reveal
              key={s.id}
              delay={i * 70}
              className={s.span}
            >
              <article className="group relative flex h-full min-h-[16rem] flex-col justify-between overflow-hidden rounded-xl border border-slate-800 bg-slate-950/40 p-7 transition-all duration-300 hover:border-accent/40 hover:bg-slate-950/70 sm:p-8">
                {/* ghost index */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-5 select-none font-display text-[7rem] font-bold leading-none text-slate-800/40 transition-colors duration-300 group-hover:text-slate-800/70"
                >
                  {s.id}
                </span>

                <div className="relative">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-accent">
                    Sector {s.id}
                  </p>
                  <h3 className="mt-3 max-w-md font-display text-2xl font-semibold text-white text-balance">
                    {s.name}
                  </h3>
                </div>

                <div className="relative mt-6">
                  <p className="max-w-lg text-[1rem] leading-relaxed text-slate-400 text-pretty">
                    {s.focus}
                  </p>
                  <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">
                    {s.tag}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
