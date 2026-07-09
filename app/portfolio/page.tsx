import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/icons";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Velmure Tech is a brand-new agency — this page is honest about that, and open to becoming your first success story.",
};

export default function PortfolioPage() {
  return (
    <main id="main">
      {/* ===================== PAGE INTRO ===================== */}
      <section className="border-b border-slate-100 bg-white bg-mesh py-14 sm:py-16">
        <div className="shell max-w-4xl fade-in-load text-center">
          <p className="eyebrow bg-primary-dark/5 text-primary-dark">Portfolio</p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            A portfolio that&apos;s just getting started
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            We&apos;re a brand-new agency, so we&apos;d rather this page be honest than
            dressed up with stock templates pretending to be case studies. It&apos;s empty
            right now — for a good reason.
          </p>
        </div>
      </section>

      {/* ===================== FIRST-CLIENT INVITATION ===================== */}
      <section className="section-lg bg-mesh">
        <div className="shell relative max-w-3xl">
          <div
            className="absolute -inset-y-4 inset-x-10 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/20 via-secondary/15 to-transparent blur-3xl"
            aria-hidden="true"
          />
          <Reveal className="card tier-popular p-10 text-center sm:p-14">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
              </svg>
            </div>
            <h2 className="mt-5 text-2xl font-bold text-ink sm:text-3xl">
              You could be our first success story.
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Velmure Tech is new — and we&apos;re not going to pretend otherwise with
              borrowed screenshots and made-up clients. What we can promise instead is
              founder-level attention on your project, because right now you wouldn&apos;t
              just be a client. You&apos;d be the reason this page starts to fill up.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Once your site is live, send us the link — we&apos;ll feature it right here,
              front and center, as project #1.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={waLink("Hi Velmure Tech, I'd like to talk about being one of your first projects.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent text-base"
              >
                Be Our First Client
              </a>
              <Link href="/services" className="btn btn-outline text-base">
                View Packages
              </Link>
            </div>
          </Reveal>
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
                Ready to start the conversation?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
                Tell us about your dealership or travel agency — we&apos;d love to build the
                very first project featured here.
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
