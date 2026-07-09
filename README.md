# Velmure Tech — Website

Multi-page marketing site for **Velmure Tech**, styled and structured to match the
live production site at velmuretech.com — light theme (slate blue + cyan on
near-white), Inter typeface, pill buttons, card system. Built with Next.js (App
Router), TypeScript, and Tailwind CSS, exported as a static site.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Development server (http://localhost:3000) |
| `npm run build` | Static export to `out/` (see `next.config.mjs`) |
| `npm run lint` | ESLint (`next lint`) |
| `npx tsc --noEmit` | Strict type check |

`next.config.mjs` sets `output: 'export'`, `basePath: '/Newlight'`, `trailingSlash:
true`, and `images.unoptimized: true` — the site deploys as static files under a
`/Newlight` subpath. Because static export disables Next's on-demand image
optimization, **every image reference uses a static ES import** (`import x from
"@/public/images/...")`, not a raw string path — string paths silently drop the
`basePath` prefix and 404 once deployed. See `components/home/HeroSlideshow.tsx`
for the pattern used with hand-built `srcSet` variants.

## Structure

```
app/
  page.tsx           Home — hero slideshow, problem/solution, pillars, how it
                      works, niche teasers, final CTA
  services/page.tsx   Niche breakdown, what's included, pricing tiers, FAQ
  portfolio/page.tsx  Honest "no fake case studies yet" page
  about/page.tsx       Founder story (Michael Velmure-Mensah), mission, why-us
  contact/page.tsx     WhatsApp panel + working contact form
  privacy/, terms/      Minimal legal boilerplate (linked from the footer)
  layout.tsx            Fonts, metadata, LocalBusiness JSON-LD
  globals.css            Design tokens ported from the live site's style.css
components/
  layout/             Nav (sticky + announcement bar), Footer, WhatsAppFloat
  home/HeroSlideshow.tsx   Crossfading hero carousel (client component)
  contact/ContactForm.tsx  Real form, posts to FormSubmit
  ui/                 Reveal (progressive-enhancement scroll animation), icons
lib/site.ts           Contact details, WhatsApp helper, nav links
public/images/         Real photos pulled from the live site (hero slides,
                       dealership/travel photos, founder portrait)
public/brand/          Extracted transparent V mark (from the live logo)
```

## Notes

- **Contact form** posts to FormSubmit (`https://formsubmit.co/ajax/<email>`) —
  the same backend already configured on the live site. A "Send via WhatsApp
  Instead" button composes a pre-filled WhatsApp message from the same fields.
- **Section spacing is moderated** (tighter) versus the live site's own
  `py-20/24/28/32` scale — see `.section` / `.section-lg` in `globals.css`.
- **Scroll-reveal CSS lives outside `@layer`** in `globals.css` — Tailwind v3
  tree-shakes compound selectors like `.reveal.is-visible` out of `@layer
  utilities` in production, which silently hid every below-fold section in an
  earlier version of this build. Don't move it back into a `@layer` block.
- Update contact details in `lib/site.ts`.
