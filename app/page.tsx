import Image from "next/image";
import Link from "next/link";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/ui/icons";
import { waLink } from "@/lib/site";
import dealershipLot from "@/public/images/dealership-lot.webp";
import planeTakeoff from "@/public/images/plane-takeoff.webp";

export default function HomePage() {
  return (
    <main id="main">
      {/* ===================== HERO ===================== */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden sm:min-h-[620px]">
        <HeroSlideshow />

        <div className="shell relative z-[1] w-full py-14 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="fade-in-load">
              <p className="eyebrow border border-white/20 bg-white/10 text-white">
                Websites for car dealerships &amp; travel agencies
              </p>
              <h1 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-white text-balance sm:text-5xl sm:leading-[1.1] lg:text-[3.25rem]">
                Are you ready to own an <span className="text-secondary">online storefront</span>?
                Are you ready to get <span className="text-secondary">more leads</span> in your
                niche?
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200">
                Hit us up, and we can do just that for you.
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <a
                  href={waLink("Hi Velmure Tech, I'd like to talk about a new website.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent text-base"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Get Found on Google
                </a>
                <Link href="/portfolio" className="btn btn-outline-light text-base">
                  See Our Work
                </Link>
              </div>
              <p className="mt-5 text-sm text-slate-300">
                No pressure, no jargon — just a quick conversation about your business.
              </p>
            </div>

            {/* Decorative "search result" mockup — illustrative UI chrome, not a claim */}
            <Reveal>
              <div className="relative mx-auto max-w-md">
                <div
                  className="absolute -inset-10 -z-10 rounded-[2.5rem] bg-gradient-to-br from-secondary/40 via-accent/25 to-transparent blur-3xl"
                  aria-hidden="true"
                />
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-black/40">
                  <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    <span className="ml-3 min-w-0 truncate text-xs text-slate-400">
                      google.com/search?q=car+dealership+near+me
                    </span>
                  </div>
                  <div className="space-y-4 p-5">
                    <div className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5">
                      <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                      </svg>
                      <span className="text-sm text-slate-500">car dealership near me</span>
                    </div>

                    <div className="rounded-xl border-2 border-secondary/40 bg-secondary/5 p-3.5">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-dark text-xs font-bold text-white">
                          V
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-[13px] text-emerald-700">yourdealership.com</p>
                          <p className="truncate text-sm font-semibold text-secondary">
                            Your Dealership — Built by Velmure Tech
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-slate-500">
                            ★★★★★ &nbsp;Trusted local dealer · Mobile-friendly · Click to WhatsApp
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 opacity-40">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-slate-200" />
                        <div className="w-full min-w-0">
                          <p className="text-[13px] text-slate-400">competitor-site.example</p>
                          <div className="mt-1.5 h-3 w-2/3 rounded bg-slate-200" />
                          <div className="mt-2 h-2.5 w-full rounded bg-slate-100" />
                        </div>
                      </div>
                    </div>
                    <div className="p-3.5 opacity-25">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-slate-200" />
                        <div className="w-full min-w-0">
                          <div className="h-3 w-1/2 rounded bg-slate-200" />
                          <div className="mt-2 h-2.5 w-full rounded bg-slate-100" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== PROBLEM / AGITATION ===================== */}
      <section className="section bg-mesh border-y border-slate-100 bg-white">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              While you&apos;re reading this, someone is searching.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Every day your business is hard to find on Google, that search ends with a
              competitor — not you.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Reveal as="div" delayClass="reveal-delay-1" className="card p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                Someone searches
              </p>
              <p className="mt-2 font-semibold text-ink">&ldquo;used cars near me&rdquo;</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                They pick from whoever shows up — with a site that loads fast, looks
                trustworthy, and makes it easy to reach out.
              </p>
            </Reveal>
            <Reveal as="div" delayClass="reveal-delay-2" className="card p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                Someone searches
              </p>
              <p className="mt-2 font-semibold text-ink">&ldquo;travel agency near me&rdquo;</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                If your Google Business Profile isn&apos;t set up and optimized, you&apos;re
                invisible on the map they&apos;re looking at.
              </p>
            </Reveal>
            <Reveal as="div" delayClass="reveal-delay-3" className="card p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                Someone searches
              </p>
              <p className="mt-2 font-semibold text-ink">&ldquo;best [your city] car dealer&rdquo;</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                No mobile-friendly site, no clear way to call or message you? They bounce to
                the next result in seconds.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== SOLUTION / PILLARS ===================== */}
      <section className="section bg-mesh">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              We don&apos;t just build pretty websites.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              We build websites made to be found, trusted, and acted on — every one built
              around getting the phone to ring or the WhatsApp message to come in.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Found",
                body: "On-page SEO and a properly set up Google Business Profile so local searches actually lead to you.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                ),
              },
              {
                title: "Trusted",
                body: "Clean, mobile-first design that reads as credible the moment it loads — because first impressions decide whether they stay.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12.75l6-6m-6 0l6 6M4.5 19.5h15a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 003 6v12a1.5 1.5 0 001.5 1.5z" />
                ),
              },
              {
                title: "Acted On",
                body: "A click-to-call and WhatsApp button on every page, so interest turns into a conversation instead of a closed tab.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 10.5h8m-8 3h5M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-3.53-.653L3 21l1.507-3.822A8.196 8.196 0 013 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                ),
              },
            ].map((p, i) => (
              <Reveal key={p.title} delayClass={i === 0 ? "reveal-delay-1" : i === 1 ? "reveal-delay-2" : "reveal-delay-3"}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-dark text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    {p.icon}
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="section bg-mesh border-y border-slate-100 bg-white">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              No long onboarding process — just a short conversation and a clear timeline
              from there.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: 1,
                title: "Message us",
                body: "Tell us about your dealership or agency on WhatsApp — your business name and the package you're leaning toward.",
              },
              {
                n: 2,
                title: "Send content & photos",
                body: "Share what you have — inventory, packages, photos, logo. Don't have everything ready? We'll tell you exactly what's needed.",
              },
              {
                n: 3,
                title: "We build & optimize",
                body: "Your site gets built mobile-first, with on-page SEO and your Google Business Profile set up alongside it.",
              },
              {
                n: 4,
                title: "You go live",
                body: null,
              },
            ].map((s, i) => (
              <Reveal
                key={s.n}
                delayClass={
                  i === 0 ? "reveal-delay-1" : i === 1 ? "reveal-delay-2" : i === 2 ? "reveal-delay-3" : "reveal-delay-4"
                }
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl font-bold text-white ${
                    s.n === 4 ? "bg-accent" : "bg-primary-dark"
                  }`}
                >
                  {s.n}
                </div>
                <h3 className="mt-4 font-semibold text-ink">{s.title}</h3>
                {s.n === 4 ? (
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Live within 10 business days of receiving your content —{" "}
                    <Link href="/services#guarantee" className="font-medium text-secondary hover:underline">
                      or it&apos;s discounted, no arguments
                    </Link>
                    .
                  </p>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.body}</p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== NICHE TEASERS ===================== */}
      <section className="section bg-primary-dark bg-mesh">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built specifically for two industries.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Not a generic template — we specialize, so every site ships with what these
              businesses actually need.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal delayClass="reveal-delay-1">
              <Link
                href="/services"
                className="card card-on-dark group block overflow-hidden"
              >
                <div className="card-cover">
                  <Image
                    src={dealershipLot}
                    alt="Rows of cars for sale on a dealership lot"
                    width={736}
                    height={460}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                    For dealers
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white">Car Dealerships</h3>
                  <p className="mt-3 leading-relaxed text-slate-300">
                    Inventory-friendly layouts, &ldquo;Get Financed&rdquo; CTAs, and local
                    visibility for buyers searching nearby.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-secondary">
                    See what&apos;s included
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
            <Reveal delayClass="reveal-delay-2">
              <Link
                href="/services"
                className="card card-on-dark group block overflow-hidden"
              >
                <div className="card-cover">
                  <Image
                    src={planeTakeoff}
                    alt="Airplane taking off at sunset"
                    width={722}
                    height={460}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                    For agencies
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white">Travel Agencies</h3>
                  <p className="mt-3 leading-relaxed text-slate-300">
                    Destination pages, quote-request CTAs, and Google visibility for
                    &ldquo;travel agency near me&rdquo; searches.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-secondary">
                    See what&apos;s included
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="section-lg bg-mesh">
        <Reveal as="div" className="shell max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl bg-primary-dark p-8 text-center sm:p-12">
            <div className="bg-noise-dots absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="absolute -left-16 -top-24 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to stop losing customers to Google?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
                Tell us about your business on WhatsApp and we&apos;ll tell you exactly what
                it takes to get you found.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={waLink("Hi Velmure Tech, I'd like to talk about a new website.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent text-base"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Message Us on WhatsApp
                </a>
                <Link href="/contact" className="btn btn-outline-light text-base">
                  Use the Contact Form
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
