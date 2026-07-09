"use client";

import { useState, type FormEvent } from "react";
import { site, waLink } from "@/lib/site";
import { IconArrow, IconWhatsApp, IconPhone, IconMail } from "@/components/ui/icons";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const mandate = String(data.get("mandate") || "").trim();

    const message = [
      "New project inquiry — Velmure Tech",
      "",
      `Name: ${name}`,
      `Business email: ${email}`,
      "",
      "Project mandate:",
      mandate,
    ].join("\n");

    setSent(true);
    // Open a pre-filled WhatsApp conversation — the primary, WhatsApp-first path.
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="contact"
      className="relative border-t border-slate-900 py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 blueprint opacity-[0.35] [mask-image:radial-gradient(100%_60%_at_50%_100%,black,transparent)]" />
      <div className="shell relative grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Direct channels */}
        <div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[0.7rem] font-medium tracking-[0.28em] text-accent">
              06
            </span>
            <span className="h-px w-8 bg-accent/40" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-slate-500">
              Contact & Discovery
            </span>
          </div>

          <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white text-balance sm:text-4xl lg:text-[2.9rem]">
            Let&apos;s architect your next build.
          </h2>
          <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-slate-400 text-pretty">
            Message us directly on WhatsApp for the fastest response, or send
            your mandate through the form and we&apos;ll open the conversation.
          </p>

          <div className="mt-9 space-y-3">
            <a
              href={waLink("Hello Velmure Tech — I'd like to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/40 p-4 transition-all duration-300 hover:border-accent/50 hover:bg-slate-900/50"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-accent/30 text-accent transition-colors group-hover:bg-accent/10">
                <IconWhatsApp className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-mono text-[0.66rem] uppercase tracking-[0.18em] text-slate-500">
                  WhatsApp
                </span>
                <span className="block text-[1.05rem] font-medium text-slate-100">
                  {site.phoneDisplay}
                </span>
              </span>
              <IconArrow className="ml-auto h-4 w-4 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
            </a>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={`tel:${site.phoneIntl}`}
                className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/40 p-4 transition-all duration-300 hover:border-accent/50"
              >
                <IconPhone className="h-5 w-5 text-accent" />
                <span>
                  <span className="block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-slate-500">
                    Call
                  </span>
                  <span className="text-sm text-slate-200">
                    {site.phoneIntl}
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/40 p-4 transition-all duration-300 hover:border-accent/50"
              >
                <IconMail className="h-5 w-5 text-accent" />
                <span>
                  <span className="block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-slate-500">
                    Email
                  </span>
                  <span className="text-sm text-slate-200">{site.email}</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Inquiry form */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-mono text-[0.68rem] uppercase tracking-[0.18em] text-slate-400"
              >
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Ama Mensah"
                className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 text-base text-slate-100 placeholder:text-slate-600 transition-all duration-300 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-mono text-[0.68rem] uppercase tracking-[0.18em] text-slate-400"
              >
                Business email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                placeholder="you@company.com"
                className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 text-base text-slate-100 placeholder:text-slate-600 transition-all duration-300 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
            </div>

            <div>
              <label
                htmlFor="mandate"
                className="mb-2 block font-mono text-[0.68rem] uppercase tracking-[0.18em] text-slate-400"
              >
                Project mandate
              </label>
              <textarea
                id="mandate"
                name="mandate"
                required
                rows={4}
                placeholder="What are you building, and what does success look like?"
                className="w-full resize-y rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 text-base text-slate-100 placeholder:text-slate-600 transition-all duration-300 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              {sent ? "Opening WhatsApp…" : "Send project mandate"}
              <IconArrow className="h-4 w-4" />
            </button>

            <p className="text-center font-mono text-[0.66rem] leading-relaxed tracking-wide text-slate-600">
              Submitting opens a pre-filled WhatsApp message to our team.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
