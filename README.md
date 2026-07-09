# Velmure Tech — Agency Website

Premium, single-page marketing site for **Velmure Tech**, a web design & interface
engineering studio. Built with Next.js (App Router), TypeScript, and Tailwind CSS.
Editorial-minimalist "engineering blueprint" aesthetic — deep slate (`slate-950`) base
with a single cyan (`cyan-400`) accent.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Development server (http://localhost:3000) |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (`next lint`) |
| `npx tsc --noEmit` | Strict type check |

## Structure

```
app/
  layout.tsx        Fonts, metadata, OpenGraph, ProfessionalService JSON-LD
  page.tsx          Section composition
  globals.css       Design tokens, blueprint utilities, scroll-reveal
  icon.png          Favicon (V mark tile) + apple-icon.png
  robots.ts         robots.txt
  sitemap.ts        sitemap.xml
components/
  brand/Logo.tsx    V mark (transparent) + typeset wordmark
  sections/         Nav, Hero, Services, Sectors, Packages, Guarantee,
                    About, PaymentTerms, Contact, Footer
  ui/               Reveal (progressive-enhancement scroll reveal),
                    SectionHeading, icons, FloatingWhatsApp
lib/site.ts         Contact details, WhatsApp helper, nav links
public/
  brand/            velmure-mark.png (extracted from logo1.png)
  img/              hero.jpg, about.jpg (graded to the slate/cyan palette)
  og.png            Social/WhatsApp share preview
  favicon.ico
```

## Notes

- **Contact form** has no backend by design — submitting composes a pre-filled
  WhatsApp message (`wa.me/233591847958`), matching the WhatsApp-first model.
  To add email delivery later, wire `Contact.tsx`'s `handleSubmit` to an API route.
- **Logos**: the source `logo1.png` (V mark) was extracted onto transparency so it
  reads cleanly on the dark theme; the wordmark is typeset in the site's own fonts.
  The original `logo1.png` / `logo2.png` remain in the repo root as source assets.
- **Copy** contains no fabricated metrics, testimonials, or pricing, per the brief.
- Update contact details, domain, and email in `lib/site.ts`.
