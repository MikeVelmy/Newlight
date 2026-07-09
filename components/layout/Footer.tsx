import Link from "next/link";
import Image from "next/image";
import { navLinks, site, waLink } from "@/lib/site";
import mark from "@/public/brand/velmure-mark.png";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-slate-300">
      <div className="shell py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src={mark} alt="Velmure Tech logo" width={36} height={36} className="h-9 w-9" />
              <span className="text-lg font-bold text-white">Velmure Tech</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              We build websites for car dealerships and travel agencies that are found on
              Google, trusted by visitors, and built to turn clicks into calls and messages.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Site</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-secondary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Get in touch</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="break-words text-slate-400">Car dealership &amp; travel agency websites</li>
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-secondary"
                >
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-words transition-colors hover:text-secondary"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {year} Velmure Tech. Founded by {site.founder}. All rights reserved.
          </p>
          <p className="flex gap-4">
            <Link href="/privacy" className="transition-colors hover:text-secondary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-secondary">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
