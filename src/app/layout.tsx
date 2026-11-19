import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/launch/SiteChrome";
import launchStyles from "@/components/launch/launch.module.css";
import { SITE } from "@/data/site";

/* ── Google Fonts ─────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

/* ── Metadata ─────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: SITE.metaTitle,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.metaDescription,
  keywords: [
    "online communication classes India",
    "spoken English classes online",
    "interview communication training",
    "public speaking classes",
    "communication skills for students",
    "English speaking classes for beginners",
    "career communication course",
    "online English speaking course India",
    "confidence building communication",
  ],
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.metaTitle,
    description: SITE.metaDescription,
    images: [
      {
        url: SITE.ogImage,
        width: 612,
        height: 644,
        alt: "Sajid Ahmed speaking at an event",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.metaTitle,
    description: SITE.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ── Structured Data (Organisation) ─────────────────────── */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE.name,
  description: SITE.metaDescription,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
  },
};

/* ── Root Layout ──────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      style={
        {
          "--font-sans": "var(--font-inter), system-ui, sans-serif",
          "--font-display": "var(--font-poppins), system-ui, sans-serif",
        } as React.CSSProperties
      }
    >
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* ── Analytics Placeholders ────────────────────────────
            Uncomment and add your IDs when ready.

        Google Analytics 4:
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        </script>

        Meta Pixel:
        [META_PIXEL_CODE_HERE]
        ───────────────────────────────────────────────────── */}
      </head>
      <body style={{ fontFamily: "var(--font-sans)" }}>
        <div className={launchStyles.site}>
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
