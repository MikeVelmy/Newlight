import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { WhatsAppIcon } from "@/components/ui/icons";
import { waLink } from "@/lib/site";
import globeConnection from "@/public/images/globe-connection.webp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Message Velmure Tech on WhatsApp or send a project inquiry — include your business name and package of interest for a faster response.",
};

export default function ContactPage() {
  return (
    <main id="main">
      {/* ===================== PAGE INTRO ===================== */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={globeConnection}
            alt=""
            fill
            sizes="100vw"
            className="scale-105 object-cover object-[center_25%] blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/80 via-primary-dark/70 to-ink/85" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
        </div>
        <div className="shell relative z-[1] max-w-3xl">
          <div className="glass fade-in-load rounded-3xl p-8 text-center sm:p-12">
            <p className="eyebrow border border-white/20 bg-white/10 text-white">Contact</p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Let&apos;s get you <span className="text-secondary">found</span>.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-100">
              Message us on WhatsApp or fill out the form below. Either way, include your
              business name and which package you&apos;re interested in so we can get back
              to you faster.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT GRID ===================== */}
      <section className="section bg-mesh">
        <div className="shell max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* WhatsApp panel */}
            <Reveal className="lg:col-span-2">
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-primary-dark via-ink to-slate-900 p-8 text-white shadow-2xl shadow-black/30">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-secondary/25 blur-3xl" aria-hidden="true" />
                <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" aria-hidden="true" />

                <div className="relative flex h-full flex-col">
                  <div className="wa-glow flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white">
                    <WhatsAppIcon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-white">Chat with us on WhatsApp</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    The fastest way to reach us. Send your business name and which package
                    you&apos;re interested in — Starter, Growth, or Premium — and we&apos;ll
                    take it from there.
                  </p>
                  <div className="mt-5">
                    <a
                      href={waLink("Hi Velmure Tech, I'd like to talk about a new website.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-accent w-full"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Open WhatsApp
                    </a>
                  </div>
                  <div className="mt-6 space-y-4 border-t border-white/10 pt-6 text-sm">
                    <div className="flex gap-3">
                      <svg className="h-5 w-5 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                      <span className="text-slate-300">We typically reply within one business day.</span>
                    </div>
                    <div className="flex gap-3">
                      <svg className="h-5 w-5 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715" />
                      </svg>
                      <span className="text-slate-300">We only take on a limited number of new clients each month.</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Contact form */}
            <Reveal delayClass="reveal-delay-1" className="lg:col-span-3">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
