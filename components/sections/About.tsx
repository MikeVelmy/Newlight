import Image from "next/image";
import aboutImg from "@/public/img/about.jpg";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  { k: "Engineering-led", v: "Software rigor, not page builders" },
  { k: "Design-obsessed", v: "High-fidelity interface craft" },
  { k: "Ghana-based", v: "Built to a global standard" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-slate-900 bg-slate-900/20 py-24 sm:py-28 lg:py-32"
    >
      <div className="shell grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Editorial text — first in DOM so it reads first on mobile */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[0.7rem] font-medium tracking-[0.28em] text-accent">
              04
            </span>
            <span className="h-px w-8 bg-accent/40" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-slate-500">
              Origin
            </span>
          </div>

          <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white text-balance sm:text-4xl">
            Founded on digital-native mastery.
          </h2>

          <div className="mt-6 space-y-5 text-[1.02rem] leading-relaxed text-slate-400 text-pretty">
            <p>
              Velmure Tech was founded by{" "}
              <span className="text-slate-200">Michael Velmure-Mensah</span> to
              close a gap he kept seeing — businesses paying for websites that
              looked acceptable but were engineered like an afterthought:
              slow, brittle, and invisible to search.
            </p>
            <p>
              The studio is built as pure digital-native practice — cutting-edge
              framework execution that bridges genuine software engineering with
              high-fidelity interface design. No page-builder shortcuts, no
              bloated templates. Every project is architected from the DOM up.
            </p>
          </div>

          <dl className="mt-9 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 sm:grid-cols-3">
            {principles.map((p) => (
              <div key={p.k} className="bg-slate-950/60 p-5">
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent">
                  {p.k}
                </dt>
                <dd className="mt-2 text-[1rem] leading-snug text-slate-400">
                  {p.v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Anchor image */}
        <Reveal delay={120}>
          <figure className="tick relative rounded-xl border border-slate-800 bg-slate-900/40 p-2 before:-left-[5px] before:-top-[5px] before:border-l-2 before:border-t-2 after:-bottom-[5px] after:-right-[5px] after:border-b-2 after:border-r-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md sm:aspect-[3/4] lg:aspect-[4/5]">
              <Image
                src={aboutImg}
                alt="Abstract slate and cyan architectural geometry"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                loading="lazy"
                placeholder="blur"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent mix-blend-overlay" />
              <figcaption className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3">
                <span className="font-mono text-[0.68rem] tracking-wide text-slate-300">
                  <span className="text-accent">founder</span> ·
                  Michael&nbsp;Velmure-Mensah
                </span>
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
              </figcaption>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
