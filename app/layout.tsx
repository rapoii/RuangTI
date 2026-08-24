import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope, IBM_Plex_Mono } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-content",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ruangti.varevastudio.tech"),
  title: {
    default: "RuangTI — AI Assistant & Workspace Spesialis Teknik Industri",
    template: "%s | RuangTI AI",
  },
  description:
    "RuangTI adalah Platform Web AI Workspace & Chat Assistant Spesialis Teknik Industri (Industrial Engineering & Systems Engineering) pertama di Indonesia. Dilengkapi 742 modul kurikulum komprehensif, riset operasi, optimasi rantai pasok (SCM), Lean Six Sigma, KaTeX formula rendering, dan integrasi RAG berstandar internasional.",
  keywords: [
    "RuangTI",
    "Teknik Industri",
    "Industrial Engineering AI",
    "AI Teknik Industri",
    "Kalkulator Teknik Industri",
    "Riset Operasi AI",
    "Optimasi Supply Chain",
    "Lean Six Sigma Indonesia",
    "Simulasi Manufaktur",
    "Ergonomi dan Perancangan Sistem Kerja",
    "Untirta Teknik Industri",
    "Industrial AI Assistant",
    "Ruang TI Vareva",
    "Vareva Studio",
  ],
  authors: [{ name: "Rafi Permana", url: "https://varevastudio.tech" }],
  creator: "Rafi Permana (Vareva Studio)",
  publisher: "RuangTI Industrial Intelligence",
  applicationName: "RuangTI",
  generator: "Next.js",
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "https://ruangti.varevastudio.tech",
      "en-US": "https://ruangti.varevastudio.tech/docs",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ruangti.varevastudio.tech",
    siteName: "RuangTI — Industrial AI Intelligence",
    title: "RuangTI — AI Assistant & Workspace Spesialis Teknik Industri",
    description:
      "Platform AI Workspace & Chat Assistant Spesialis Teknik Industri (Industrial Engineering BoK) terlengkap di Indonesia dengan 742 Modul Riset, Formulasi KaTeX, dan Deep Reasoning.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RuangTI — AI Assistant & Workspace Teknik Industri",
    description:
      "AI Co-Pilot & Workspace Teknik Industri terlengkap di Indonesia. 742 Modul Riset Operasi, Lean Six Sigma, SCM, & Manufaktur.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Technology / Industrial Engineering Education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://ruangti.varevastudio.tech/#webapp",
        "name": "RuangTI",
        "url": "https://ruangti.varevastudio.tech",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "All",
        "description":
          "Platform Web AI Workspace & Chat Assistant Spesialis Teknik Industri & Rekayasa Sistem di Indonesia. Didukung 742 modul kurikulum standar IISE & ABET.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "IDR",
        },
        "author": {
          "@type": "Person",
          "name": "Rafi Permana",
          "affiliation": {
            "@type": "EducationalOrganization",
            "name": "Universitas Sultan Ageng Tirtayasa (UNTIRTA)",
          },
        },
      },
      {
        "@type": "Organization",
        "@id": "https://ruangti.varevastudio.tech/#organization",
        "name": "RuangTI / Vareva Studio",
        "url": "https://ruangti.varevastudio.tech",
        "logo": "https://ruangti.varevastudio.tech/favicon.ico",
        "founder": {
          "@type": "Person",
          "name": "Rafi Permana",
        },
      },
    ],
  };

  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${ibmPlexMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="h-full bg-canvas text-text-primary antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
