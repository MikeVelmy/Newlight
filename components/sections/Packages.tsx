import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck, IconArrow } from "@/components/ui/icons";
import { waLink } from "@/lib/site";

type Tier = {
  id: string;
  name: string;
  summary: string;
  features: string[];
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    summary: "Essential digital foundation.",
    features: [
      "3-page high-performance site architecture",
      "Fully mobile-responsive design",
      "Native on-page SEO integration",
      "Custom secure contact forms",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    summary: "Local visibility & lead acceleration.",
    featured: true,
    features: [
      "5-page expanded architecture",
      "Everything in Starter",
      "Full Google Business Profile optimization",
      "Zero-friction WhatsApp booking integration",
      "Custom domain connection",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    summary: "Complete market domination & rapid deployment.",
    features: [
      "Full-scale multi-page architecture",
      "Everything in Growth",
      "Priority 5-day accelerated delivery",
      "1 month dedicated post-launch support",
      "Initial review acquisition setup",
    ],
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative py-24 sm:py-28 lg:py-32">
      <div className="shell">
        <SectionHeading
          index="03"
          kicker="Engagement Tiers"
          title="Growth packages built around deliverables, not price tags."
          intro="Each tier is a defined engineering scope. Choose the outcome you need and we scope the exact build in a direct consultation."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:items-start">
          {tiers.map((t, i) => (
            <Reveal
              key={t.id}
              delay={i * 90}
              className={t.featured ? "lg:-mt-4" : ""}
            >
              <article
                className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 sm:p-8 ${
                  t.featured
                    ? "border-accent/40 bg-slate-900/50 shadow-[0_0_60px_-24px_rgb(34_211_238_/0.55)]"
                    : "border-slate-800 bg-slate-950/40 hover:border-slate-700"
                }`}
              >
                {t.featured && (
                  <>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                    />
                    <span className="absolute -top-3 left-7 rounded-full border border-accent/40 bg-slate-950 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-accent">
                      Most Popular
                    </span>
                  </>
                )}

                <header className="mb-6">
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-slate-500">
                    Tier 0{i + 1}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                    {t.name}
                  </h3>
                  <p className="mt-2 text-[1rem] leading-relaxed text-slate-400">
                    {t.summary}
                  </p>
                </header>

                <ul className="flex-1 space-y-3.5 border-t border-slate-800 pt-6">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <IconCheck
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          t.featured ? "text-accent" : "text-accent/80"
                        }`}
                        strokeWidth={2}
                      />
                      <span className="text-[1rem] leading-snug text-slate-300">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(
                    `Hello Velmure Tech — I'm interested in the ${t.name} package.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 ${
                    t.featured ? "btn-primary" : "btn-ghost"
                  } w-full`}
                >
                  Request this build
                  <IconArrow className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-[0.72rem] uppercase tracking-[0.18em] text-slate-600">
          Pricing scoped per project · No obligation consultation
        </p>
      </div>
    </section>
  );
}
