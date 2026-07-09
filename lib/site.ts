// Central source of truth for site-wide constants. No fabricated metrics — only
// verifiable contact + service data per the engineering guidelines.

export const site = {
  name: "Velmure Tech",
  legalName: "Velmure Tech",
  founder: "Michael Velmure-Mensah",
  tagline: "We architect premium digital interfaces.",
  description:
    "Velmure Tech builds blazing-fast, strategy-driven web applications that convert attention into business assets.",
  url: "https://velmuretech.com",
  // Local number as displayed, plus international + WhatsApp forms.
  phoneDisplay: "059 184 7958",
  phoneLocal: "0591847958",
  phoneIntl: "+233591847958",
  whatsapp: "233591847958",
  email: "hello@velmuretech.com",
  locale: "en_GH",
} as const;

export const waLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#sectors" },
  { label: "Packages", href: "#packages" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
