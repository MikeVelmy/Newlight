// Central source of truth for site-wide constants, mirroring the real
// contact details already live on velmuretech.com.

export const site = {
  name: "Velmure Tech",
  founder: "Michael Velmure-Mensah",
  description:
    "Velmure Tech builds websites for car dealerships and travel agencies that get found on Google, trusted by visitors, and turned into calls and messages.",
  url: "https://velmuretech.com",
  phoneDisplay: "059 184 7958",
  phoneIntl: "+233591847958",
  whatsapp: "233591847958",
  email: "velmuretechcorps@gmail.com",
  formEndpoint: "https://formsubmit.co/velmuretechcorps@gmail.com",
  locale: "en_GH",
} as const;

export const waLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
