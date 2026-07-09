"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { navLinks, waLink, site } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md"
          : "border-b border-transparent bg-slate-950/0"
      }`}
    >
      <nav className="shell flex h-[var(--nav-h)] items-center justify-between gap-4">
        <a href="#top" aria-label="Velmure Tech — home" className="shrink-0">
          <Logo />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-slate-400 transition-all duration-300 ease-in-out hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={waLink(
              "Hello Velmure Tech — I'd like to start a project."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden btn-ghost !py-2.5 sm:inline-flex"
          >
            Start a Project
          </a>

          {/* Mobile toggle — 44px+ hit area */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-md border border-slate-800 text-slate-200 transition-colors hover:border-accent/50 hover:text-accent lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                  open ? "top-2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 top-2 block h-px w-5 bg-current transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                  open ? "top-2 -rotate-45" : "top-[0.9rem]"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile full-height sheet */}
      <div
        className={`fixed inset-x-0 top-[var(--nav-h)] bottom-0 z-40 origin-top border-t border-slate-800 bg-slate-950/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="shell flex h-full flex-col justify-between py-8">
          <ul className="space-y-1">
            {navLinks.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline justify-between border-b border-slate-900 py-4"
                >
                  <span className="font-display text-2xl font-semibold text-slate-100 transition-colors group-hover:text-accent">
                    {l.label}
                  </span>
                  <span className="font-mono text-xs text-slate-600">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-3">
            <a
              href={waLink("Hello Velmure Tech — I'd like to start a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
              onClick={() => setOpen(false)}
            >
              Start a Project
            </a>
            <a
              href={`tel:${site.phoneIntl}`}
              className="block text-center font-mono text-xs uppercase tracking-[0.2em] text-slate-400"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
