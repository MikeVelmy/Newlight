import { Reveal } from "@/components/ui/Reveal";

export function Guarantee() {
  return (
    <section id="guarantee" className="relative py-8 sm:py-12">
      <div className="shell">
        <Reveal>
          <div className="tick relative overflow-hidden rounded-2xl border border-accent/30 bg-slate-900/40 px-6 py-12 before:-left-[5px] before:-top-[5px] before:border-l-2 before:border-t-2 after:-bottom-[5px] after:-right-[5px] after:border-b-2 after:border-r-2 sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute inset-0 blueprint opacity-30 [mask-image:radial-gradient(80%_120%_at_0%_50%,black,transparent)]" />
            <div className="pointer-events-none absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />

            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="kicker">The Velmure Tech Ironclad Guarantee</p>
                <p className="mt-5 max-w-2xl font-display text-xl font-medium leading-snug text-slate-100 text-balance sm:text-2xl lg:text-[1.7rem]">
                  If your site isn&apos;t live within{" "}
                  <span className="text-accent">10 business days</span> of
                  receiving your content and photos, you receive an automatic{" "}
                  <span className="text-accent">20% deduction</span> on your
                  final delivery invoice.
                </p>
                <p className="mt-4 font-mono text-[0.8rem] uppercase tracking-[0.16em] text-slate-500">
                  Zero arguments · Zero excuses · The delivery risk is on us,
                  not you.
                </p>
              </div>

              <div className="lg:col-span-4">
                <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <div>
                    <p className="font-display text-4xl font-bold text-white">
                      10
                    </p>
                    <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-slate-500">
                      Business days
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-4xl font-bold text-accent">
                      20%
                    </p>
                    <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-slate-500">
                      Auto deduction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
