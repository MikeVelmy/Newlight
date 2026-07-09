import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    id: "01",
    pct: "50%",
    title: "Mobilization",
    body: "A 50% engagement deposit locks your slot and mobilizes the build — design architecture and launch engineering begin immediately.",
  },
  {
    id: "02",
    pct: "50%",
    title: "Production delivery",
    body: "The remaining 50% is settled on final production delivery — once your site is built, reviewed, and ready to go live.",
  },
];

export function PaymentTerms() {
  return (
    <section id="payment-terms" className="relative py-24 sm:py-28 lg:py-32">
      <div className="shell">
        <SectionHeading
          index="05"
          kicker="Engagement Workflow"
          title="A simple 50 / 50 structure, and a hard cap on intake."
          intro="No labyrinth of milestones. A clean split keeps the engagement moving fast while protecting both sides."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.id} delay={i * 90}>
              <article className="relative flex h-full flex-col justify-between rounded-xl border border-slate-800 bg-slate-950/40 p-8">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">
                    Step {s.id}
                  </span>
                  <span className="font-display text-3xl font-bold text-accent">
                    {s.pct}
                  </span>
                </div>
                <div className="mt-10">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[1rem] leading-relaxed text-slate-400 text-pretty">
                    {s.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Urgency / capacity note */}
          <Reveal delay={180}>
            <aside className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-accent/30 bg-slate-900/40 p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-accent">
                  Limited monthly intake
                </span>
              </div>
              <p className="relative mt-8 text-[1rem] leading-relaxed text-slate-300 text-pretty">
                Velmure Tech caps client onboarding each month to protect
                ultra-fast, premium delivery standards. Once the month&apos;s
                slots are filled, new applications roll into the next intake
                window.
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
