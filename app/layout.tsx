import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import { getPublicSiteUrl } from "@/lib/site-config";
import { displayName, headline, summary } from "@/lib/site-content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const siteUrl = getPublicSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${displayName} — Founding engineer · AI platforms`,
    template: `%s — ${displayName}`,
  },
  description: summary,
  applicationName: displayName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: displayName,
    title: `${displayName} — ${headline}`,
    description: summary,
  },
  twitter: {
    card: "summary",
    title: `${displayName} — ${headline}`,
    description: summary,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh font-sans text-[var(--foreground)] antialiased">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.hero-reveal-stagger>*{animation:none!important;opacity:1!important;transform:none!important}.reveal-stagger-grid>*{animation:none!important;opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <div className="site-backdrop" aria-hidden />
        <div className="site-shell overflow-x-clip">{children}</div>
      </body>
    </html>
  );
}
