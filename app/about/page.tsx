import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/icons";
import { waLink } from "@/lib/site";
import aboutHero from "@/public/images/about-hero.webp";
import founderPhoto from "@/public/images/founder-michael.webp";

export const metadata: Metadata = {
  title: "About",
  description:
    "Michael Velmure-Mensah founded Velmure Tech to close the visibility gap for car dealerships and travel agencies — built for local search from day one.",
};

const whyNiches = [
  {
    title: "Local search decides the sale",
    body: "People rarely buy a car or book travel from the first business they think of. They search, compare, and choose whoever looks most credible.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />,
  },
  {
    title: "These are high-stakes decisions",
    body: "Buying a car or booking a trip is a big decision. A site that looks outdated or untrustworthy loses the customer before a conversation even starts.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 9v3.75m0 3.75h.007v.008H12v-.008zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: "They're chronically underserved",
    body: "Most web agencies build for everyone, which means they specialize in no one. I'd rather be the best option for two industries than an average option for all of them.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218" />,
  },
];

const howIWork = [
  { n: "01", title: "Local SEO first", body: 'Every design decision is made with "will this help you get found?" in mind.' },
  { n: "02", title: "Mobile-first design", body: "Most local searches happen on a phone, so that's where every site is designed and tested first." },
  { n: "03", title: "Fast turnaround", body: "I limit how many new clients I take on each month so every project moves quickly." },
  { n: "04", title: "No fluff", body: "Straightforward packages, clear communication, and a site built to do a job, not just look nice." },
];

const whyChoose = [
  {
    title: "Two industries, not twenty",
    body: "I only build for car dealerships and travel agencies. That means every site already speaks your customers' language instead of starting from a blank template.",
  },
  {
    title: "You work with me directly",
    body: "There's no account manager passing your project down a chain. You message me, and I'm the one building your site.",
  },
  {
    title: "Backed by a real guarantee",
    body: "If your site isn't live within 10 business days of receiving your content, you get a discount. No arguments.",
  },
  {
    title: "Straightforward and honest",
    body: "No inflated portfolio, no fake reviews, no hidden fees. What you see on this site is what you get.",
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={aboutHero}
            alt=""
            fill
            sizes="100vw"
            className="scale-105 object-cover object-[center_30%] blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-primary-dark/75 to-ink/85" />
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-secondary/25 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        </div>
        <div className="shell relative z-[1] max-w-3xl">
          <div className="glass fade-in-load rounded-3xl p-8 text-center sm:p-12">
            <p className="eyebrow border border-white/20 bg-white/10 text-white">About</p>
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              The best work happens when no one&apos;s watching.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-100">
              I build websites that get found, not just admired.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FOUNDER STORY ===================== */}
      <section className="border-b border-slate-100 bg-white py-14 sm:py-16">
        <div className="shell">
          <div className="grid items-center gap-10 lg:grid-cols-5">
            <div className="fade-in-load lg:col-span-2">
              <div className="relative mx-auto max-w-xs">
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/10" />
                <Image
                  src={founderPhoto}
                  alt="Portrait of Michael Velmure-Mensah, founder of Velmure Tech"
                  width={480}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-2xl border border-slate-200 object-cover shadow-lg"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="eyebrow bg-primary-dark/5 text-primary-dark">My Story</p>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Michael Velmure-Mensah (Mike)
              </h2>
              <div className="mt-5 space-y-4 leading-relaxed text-slate-600">
                <p>
                  I started Velmure Tech because I noticed something. Most small businesses
                  don&apos;t have a website problem. They have a <em>visibility</em> problem.
                  Plenty of car dealerships and travel agencies already have a website. Far
                  fewer of them actually show up when a nearby customer searches for what
                  they sell.
                </p>
                <p>
                  Most people call me Mike. I built this agency to close that gap. Instead of
                  building generic templates for whoever walks in the door, I chose to focus
                  on two industries only. Specializing means I actually understand what makes
                  a dealership site or a travel agency site convert, instead of guessing.
                </p>
                <p>
                  Every project I take on starts from the same question. If someone searched
                  for this business right now, would they find it, and would what they found
                  make them want to reach out?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MISSION ===================== */}
      <section className="section bg-mesh">
        <Reveal as="div" className="shell max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">My mission</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            I want to make sure that when a local customer searches for a car dealership or a
            travel agency, the businesses I work with are the ones they find, trust, and
            contact first, not their competitors.
          </p>
        </Reveal>
      </section>

      {/* ===================== WHY THESE TWO NICHES ===================== */}
      <section className="section bg-primary-dark bg-mesh">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why car dealerships and travel agencies?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Both industries share the same pattern. High-intent local searches, big-decision
              purchases, and websites that are usually the weakest link.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyNiches.map((n, i) => (
              <Reveal
                key={n.title}
                delayClass={i === 0 ? "reveal-delay-1" : i === 1 ? "reveal-delay-2" : "reveal-delay-3"}
                className="card card-on-dark p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    {n.icon}
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-white">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{n.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HOW I WORK ===================== */}
      <section className="section border-t border-slate-100 bg-white bg-mesh">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">How I work</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howIWork.map((s, i) => (
              <Reveal
                key={s.n}
                delayClass={
                  i === 0 ? "reveal-delay-1" : i === 1 ? "reveal-delay-2" : i === 2 ? "reveal-delay-3" : "reveal-delay-4"
                }
              >
                <p className="text-3xl font-extrabold text-accent">{s.n}</p>
                <h3 className="mt-3 font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="section bg-mesh">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Why work with me</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              A few honest reasons to consider Velmure Tech over a bigger, more generic agency.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w, i) => (
              <Reveal
                key={w.title}
                delayClass={
                  i === 0 ? "reveal-delay-1" : i === 1 ? "reveal-delay-2" : i === 2 ? "reveal-delay-3" : "reveal-delay-4"
                }
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-dark text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <circle cx="12" cy="12" r="8.25" strokeWidth={1.75} />
                    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-ink">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{w.body}</p>
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
                Let&apos;s talk about your business
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
                Whether you run a dealership or a travel agency, I&apos;d like to hear
                what&apos;s not working with your current site.
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
