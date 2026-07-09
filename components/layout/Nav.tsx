"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/icons";
import mark from "@/public/brand/velmure-mark.png";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Announcement bar — scrolls away, only the header below is sticky */}
      <div className="bg-ink text-xs text-slate-300">
        <div className="shell flex items-center justify-end gap-4 py-2 sm:justify-between">
          <p className="hidden text-slate-400 sm:block">Car dealership &amp; travel agency websites</p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-secondary"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            WhatsApp: {site.phoneDisplay}
          </a>
        </div>
      </div>

      <header
        id="site-header"
        className={`sticky top-0 z-40 border-b border-slate-200 bg-white transition-shadow ${
          scrolled ? "is-scrolled" : ""
        }`}
      >
        <div className="shell">
          <div className="flex h-16 items-center justify-between sm:h-20">
            <Link href="/" className="flex shrink-0 items-center gap-2.5">
              <Image
                src={mark}
                alt="Velmure Tech logo"
                width={40}
                height={40}
                priority
                className="h-9 w-9 sm:h-10 sm:w-10"
              />
              <span className="text-lg font-bold tracking-tight text-ink">
                Velmure <span className="font-semibold text-primary-dark">Tech</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
              {navLinks.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`text-sm font-medium transition-colors hover:text-primary-dark ${
                      active ? "text-primary-dark" : "text-slate-600"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <a
                href={waLink("Hi Velmure Tech, I'd like to talk about a new website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent !px-5 !py-2.5 text-sm"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>

            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 md:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                    open ? "top-2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-current transition-all duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                    open ? "top-2 -rotate-45" : "top-3.5"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`border-t border-slate-200 bg-white md:hidden ${open ? "block" : "hidden"}`}
        >
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`block rounded-md px-3 py-2.5 text-base font-medium ${
                    active ? "bg-slate-50 text-primary-dark" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <a
              href={waLink("Hi Velmure Tech, I'd like to talk about a new website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent mt-2 w-full"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
