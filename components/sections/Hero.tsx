import Image from "next/image";
import heroImg from "@/public/img/hero.jpg";
import { waLink } from "@/lib/site";
import { IconArrow } from "@/components/ui/icons";

const capabilities = ["Next.js", "TypeScript", "Core Web Vitals", "JSON-LD"];

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative overflow-hidden pt-[calc(var(--nav-h)+3rem)] pb-20 sm:pb-28 lg:pt-[calc(var(--nav-h)+5rem)] lg:pb-32"
    >
      {/* Blueprint backdrop + cyan light source */}
      <div className="pointer-events-none absolute inset-0 blueprint opacity-[0.6] [mask-image:radial-gradient(120%_80%_at_70%_0%,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-accent/10 blur-[130px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="shell relative grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Editorial column */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-800 bg-slate-900/40 px-3.5 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent" />
            </span>
            <span className="kicker text-slate-300">
              Digital Interface Engineering
            </span>
          </div>

          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tightest text-white text-balance sm:text-6xl lg:text-[4.6rem]">
            We architect premium
            <br className="hidden sm:block" /> digital{" "}
            <span className="relative whitespace-nowrap text-accent">
              interfaces
              <span className="text-white">.</span>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-slate-400 text-pretty sm:text-lg">
            Velmure Tech builds blazing-fast, strategy-driven web applications
            that convert attention into business assets — engineered on modern
            frameworks, shipped with obsessive attention to performance.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={waLink("Hello Velmure Tech — I'd like to initiate a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Initiate Project
              <IconArrow className="h-4 w-4" />
            </a>
            <a
              href="#packages"
              className="group inline-flex items-center gap-2 px-2 py-3 font-mono text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-slate-300 transition-colors hover:text-accent"
            >
              Explore Packages
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Capability manifest strip */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-800/80 pt-6">
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-slate-600">
              Built on
            </span>
            {capabilities.map((c) => (
              <span
                key={c}
                className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-slate-400"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Framed technical panel — the signature moment */}
        <div className="lg:col-span-5">
          <figure className="tick relative rounded-xl border border-slate-800 bg-slate-900/40 p-2 shadow-2xl shadow-slate-950/60 before:-left-[5px] before:-top-[5px] before:border-l-2 before:border-t-2 after:-bottom-[5px] after:-right-[5px] after:border-b-2 after:border-r-2">
            {/* Panel chrome */}
            <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-slate-700" />
                <span className="h-2 w-2 rounded-full bg-slate-700" />
                <span className="h-2 w-2 rounded-full bg-accent/70" />
              </div>
              <span className="font-mono text-[0.65rem] tracking-widest text-slate-500">
                live-build.tsx
              </span>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src={heroImg}
                alt="A developer workstation compiling a Velmure Tech interface at night"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
              {/* Slate/cyan grade to fully lock palette on the photo */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-slate-950/20 to-accent/10 mix-blend-multiply" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              {/* Animated scanline */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 animate-scan bg-gradient-to-b from-accent/25 to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2.5">
                <span className="font-mono text-[0.65rem] tracking-wide text-slate-300">
                  <span className="text-accent">›</span> compiling premium
                  interface
                </span>
                <span className="font-mono text-[0.65rem] text-accent/90">
                  100%
                </span>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
