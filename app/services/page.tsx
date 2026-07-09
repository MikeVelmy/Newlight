import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { CheckIcon, ChevronDownIcon } from "@/components/ui/icons";
import { waLink } from "@/lib/site";
import servicesHero from "@/public/images/Services.jpeg";
import dealershipCar from "@/public/images/dealership-car.webp";
import travelDestination from "@/public/images/travel-destination.webp";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Websites built specifically for car dealerships and travel agencies — Starter, Growth, and Premium packages, backed by a 10-business-day no-risk guarantee.",
};

const dealershipFeatures = [
  "Inventory-friendly layout that puts your current stock front and center",
  '"Get Financed" and "Schedule a Test Drive" lead-capture CTAs',
  "Location & service-area pages so nearby buyers find you first",
  'Google Business Profile optimized for "car dealership near me" searches',
  "Click-to-call and WhatsApp buttons for fast buyer inquiries",
  "Trust signals — reviews, certifications, financing partners — front and center",
];

const travelFeatures = [
  "Destination & package pages that showcase your best offers",
  '"Request a Quote" and "Book a Consultation" CTAs built for inquiries',
  'Local visibility for "travel agent near me" and "[city] travel agency" searches',
  "Google Business Profile setup so you show up in local map results",
  "WhatsApp inquiry button for fast, familiar booking conversations",
  "Seasonal promotion sections you can hand us updates for anytime",
];

const includedItems = [
  "Custom mobile-first website",
  "On-page SEO",
  "Google Business Profile setup",
  "WhatsApp / call button",
  "Custom domain connected",
];

const tiers = [
  {
    id: "starter",
    name: "Starter",
    blurb: "A solid, professional foundation to get you online.",
    features: ["3-page site", "Mobile-responsive design", "Basic on-page SEO", "Contact form"],
    cta: "Get Pricing",
    variant: "outline" as const,
    message: "Hi Velmure Tech, I'd like pricing for the Starter package.",
  },
  {
    id: "growth",
    name: "Growth",
    blurb: "Our most-recommended package — built to actually get found.",
    features: [
      "5-page site",
      "Everything in Starter",
      "Google Business Profile setup",
      "WhatsApp booking button",
      "Custom domain connected",
    ],
    cta: "Message Us for Pricing",
    variant: "accent" as const,
    popular: true,
    message: "Hi Velmure Tech, I'd like pricing for the Growth package.",
  },
  {
    id: "premium",
    name: "Premium",
    blurb: "For businesses that want it done fast, with support after launch.",
    features: [
      "Everything in Growth",
      "Priority 5-day delivery",
      "1 month of post-launch support",
      "First round of review requests sent",
    ],
    cta: "Get Pricing",
    variant: "outline" as const,
    message: "Hi Velmure Tech, I'd like pricing for the Premium package.",
  },
];

const faqs = [
  {
    q: "Why don't you show prices on the site?",
    a: "Every dealership and agency is different — inventory size, number of locations, how much content you already have. A flat number on a website can't account for that, so instead of guessing, we quote you accurately after a quick conversation about your actual business.",
  },
  {
    q: "Do I need to have photos and content ready before we start?",
    a: "No — but the sooner we have it, the sooner your 10-business-day countdown starts. Once you reach out, we'll give you a simple checklist of exactly what to send so nothing holds things up.",
  },
  {
    q: "I don't have a domain yet — is that a problem?",
    a: "Not at all. We'll help you pick and connect one as part of the Growth and Premium packages — you don't need to arrive with anything already set up.",
  },
  {
    q: "Can I update the website myself after it's live?",
    a: "If you're comfortable making basic edits, we can walk you through it. If you'd rather not deal with it, that's exactly what the optional Monthly Care add-on is for — we handle updates, review monitoring, and support for you.",
  },
  {
    q: "Do you only work with car dealerships and travel agencies?",
    a: "Yes, on purpose. We'd rather be the best option for these two industries than an average option for everyone — it's why the packages already include what dealerships and agencies specifically need instead of generic filler.",
  },
  {
    q: "What if I'm not happy with the finished site?",
    a: "We keep you in the loop throughout the build rather than disappearing until launch day, so there shouldn't be surprises. And if we miss the 10-business-day window on our end, the No-Risk Guarantee kicks in automatically.",
  },
];

export default function ServicesPage() {
  return (
    <main id="main">
      {/* ===================== PAGE INTRO ===================== */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={servicesHero}
            alt=""
            fill
            sizes="100vw"
            className="scale-105 object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/50 via-primary-dark/35 to-ink/55" />
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        </div>
        <div className="shell relative z-[1] max-w-3xl">
          <div className="glass fade-in-load rounded-3xl p-8 text-center sm:p-12">
            <p className="eyebrow border border-white/20 bg-white/10 text-white">Services</p>
            <h1 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl sm:leading-tight">
              Built for car dealerships. Built for{" "}
              <span className="text-secondary">travel agencies</span>. Built to convert.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-100">
              We specialize in exactly two industries so every site we build already speaks
              the language your customers are searching in.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== NICHE BREAKDOWN ===================== */}
      <section className="section bg-mesh">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal className="card overflow-hidden">
              <div className="card-cover">
                <Image
                  src={dealershipCar}
                  alt="A car for sale on a dealership lot"
                  width={547}
                  height={340}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-dark text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25h-8.5A2.5 2.5 0 003.25 9.5v6a1 1 0 001 1H4.5" />
                  </svg>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-ink">For Car Dealerships</h2>
                <p className="mt-2 text-slate-500">
                  Every feature is aimed at getting nearby buyers to call, message, or walk
                  onto your lot.
                </p>
                <ul className="mt-5 space-y-3.5">
                  {dealershipFeatures.map((f) => (
                    <li key={f} className="flex gap-3">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                      <span className="text-slate-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#pricing"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark transition-colors hover:text-secondary"
                >
                  See dealership packages
                  <ChevronDownIcon className="h-4 w-4 -rotate-90" />
                </a>
              </div>
            </Reveal>

            <Reveal delayClass="reveal-delay-1" className="card overflow-hidden">
              <div className="card-cover">
                <Image
                  src={travelDestination}
                  alt="The Colosseum in Rome lit up at night, a popular travel destination"
                  width={640}
                  height={400}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.804a1.125 1.125 0 00-1.006 0L3.622 6.24C3.24 6.43 3 6.822 3 7.247v11.964c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-ink">For Travel Agencies</h2>
                <p className="mt-2 text-slate-500">
                  Every feature is aimed at turning browsers into booking inquiries.
                </p>
                <ul className="mt-5 space-y-3.5">
                  {travelFeatures.map((f) => (
                    <li key={f} className="flex gap-3">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                      <span className="text-slate-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#pricing"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark transition-colors hover:text-secondary"
                >
                  See travel agency packages
                  <ChevronDownIcon className="h-4 w-4 -rotate-90" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== WHAT'S INCLUDED ===================== */}
      <section className="section bg-primary-dark bg-mesh">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What every Velmure Tech project can include
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              This is the full toolkit we build with. Exact inclusions vary by package — see
              the tiers below for what&apos;s bundled where.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {includedItems.map((item, i) => (
              <Reveal
                key={item}
                delayClass={i < 2 ? "reveal-delay-1" : i < 4 ? "reveal-delay-2" : "reveal-delay-3"}
                className="card card-on-dark p-6 text-center"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-semibold text-white">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== URGENCY BANNER ===================== */}
      <section className="border-y border-accent/20 bg-accent/10">
        <div className="shell flex flex-col items-center justify-center gap-2 py-4 text-center sm:flex-row">
          <svg className="h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m0 3.75h.007v.008H12v-.008zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm font-medium text-ink">
            <span className="font-semibold">We only take on a limited number of new clients each month</span>{" "}
            — it&apos;s how we keep delivery fast and quality high.
          </p>
        </div>
      </section>

      {/* ===================== PRICING TIERS ===================== */}
      <section id="pricing" className="section scroll-mt-24 bg-mesh">
        <div className="shell">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Choose your package
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              No numbers here on purpose — message us and we&apos;ll recommend the right
              package once we know your business.
            </p>
          </Reveal>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal
                key={t.id}
                delayClass={i === 0 ? "reveal-delay-1" : i === 1 ? "reveal-delay-2" : "reveal-delay-3"}
                className={t.popular ? "lg:-translate-y-3" : ""}
              >
                <article
                  className={`card relative p-8 ${
                    t.popular
                      ? "tier-popular"
                      : t.id === "starter"
                        ? "!border-t-4 !border-t-secondary"
                        : "!border-t-4 !border-t-primary-dark"
                  }`}
                >
                  {t.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-ink">{t.name}</h3>
                  <p className="mt-1.5 text-sm text-slate-500">{t.blurb}</p>
                  <ul className="mt-6 space-y-3.5">
                    {t.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <CheckIcon className={`mt-0.5 h-5 w-5 shrink-0 ${t.popular ? "text-accent" : "text-secondary"}`} />
                        <span className="text-sm text-slate-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(t.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn mt-7 w-full ${t.variant === "accent" ? "btn-accent" : "btn-outline"}`}
                  >
                    {t.cta}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-8 max-w-3xl">
            <div className="card flex flex-col items-start gap-5 p-6 sm:flex-row sm:items-center sm:p-7">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-ink">Optional: Ongoing Monthly Care</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  Available alongside any package — content updates, review monitoring, and
                  priority support so your site keeps working after launch.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== NO-RISK GUARANTEE ===================== */}
      <section id="guarantee" className="section scroll-mt-24 border-y border-slate-100 bg-white bg-mesh">
        <Reveal as="div" className="shell max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl bg-primary-dark p-8 text-center sm:p-12">
            <div className="bg-noise-dots absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286z" />
                </svg>
              </div>
              <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Our No-Risk Guarantee
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-300">
                If your site isn&apos;t live within 10 business days of us receiving your
                content and photos, you get a discount — no arguments. The risk is on us,
                not you.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="section bg-mesh">
        <div className="shell max-w-3xl">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Still deciding? Here&apos;s what most dealership and travel agency owners ask
              us first.
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <Reveal
                key={f.q}
                delayClass={i < 2 ? "reveal-delay-1" : i < 4 ? "reveal-delay-2" : "reveal-delay-3"}
              >
                <details className="card group p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                    {f.q}
                    <ChevronDownIcon className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
                </details>
              </Reveal>
            ))}
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
                Not sure which package fits?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
                Send us a quick message with your business name — we&apos;ll recommend a
                package for you.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={waLink("Hi Velmure Tech, I'm not sure which package fits my business.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent text-base"
                >
                  Message Us for Pricing
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
