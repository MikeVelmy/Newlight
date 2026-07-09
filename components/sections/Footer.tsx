import { Logo } from "@/components/brand/Logo";
import { navLinks, site, waLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-slate-900 bg-slate-950">
      <div className="shell py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo markSize={34} />
            <p className="mt-5 max-w-xs text-[1rem] leading-relaxed text-slate-400 text-pretty">
              {site.tagline} Blazing-fast, strategy-driven web applications
              engineered for business.
            </p>
            <a
              href={waLink("Hello Velmure Tech — I'd like to start a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-7 !py-2.5"
            >
              Start a Project
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-slate-600">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[1rem] text-slate-400 transition-colors duration-300 hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-slate-600">
              Direct
            </p>
            <ul className="mt-4 space-y-3 break-words text-[1rem] text-slate-400">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-accent"
                >
                  WhatsApp · {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneIntl}`}
                  className="transition-colors duration-300 hover:text-accent"
                >
                  {site.phoneIntl}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors duration-300 hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-slate-900 pt-7 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.72rem] tracking-wide text-slate-600">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-[0.72rem] tracking-wide text-slate-600">
            Engineered by {site.name} · Founder {site.founder}
          </p>
        </div>
      </div>
    </footer>
  );
}
