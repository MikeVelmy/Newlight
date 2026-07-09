import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Velmure Tech — Premium Web Design & Interface Engineering",
    template: "%s · Velmure Tech",
  },
  description: site.description,
  keywords: [
    "web design agency",
    "web development Ghana",
    "Next.js development",
    "premium website design",
    "interface engineering",
    "Velmure Tech",
    "Core Web Vitals",
    "SEO web development",
  ],
  authors: [{ name: site.founder }],
  creator: site.founder,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "Velmure Tech — Premium Web Design & Interface Engineering",
    description: site.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Velmure Tech — We architect premium digital interfaces.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velmure Tech — Premium Web Design & Interface Engineering",
    description: site.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phoneIntl,
  email: site.email,
  image: `${site.url}/og.png`,
  logo: `${site.url}/brand/velmure-mark.png`,
  priceRange: "$$",
  founder: {
    "@type": "Person",
    name: site.founder,
  },
  areaServed: {
    "@type": "Country",
    name: "Ghana",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "GH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phoneIntl,
    contactType: "sales",
    availableLanguage: ["English"],
  },
  knowsAbout: [
    "UI/UX Design",
    "Next.js Engineering",
    "React Development",
    "Technical SEO",
    "Core Web Vitals Optimization",
    "Conversion-focused web design",
  ],
  serviceType: [
    "Web Design",
    "Web Application Development",
    "Search Engine Optimization",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          // JSON-LD injected into the document per SEO requirements
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
