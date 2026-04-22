import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
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
    default: `${displayName} — Founding engineer (AI platforms)`,
    template: `%s — ${displayName}`,
  },
  description: summary,
  applicationName: `${displayName} hiring profile`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${displayName} — hiring`,
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
    >
      <body className="flex min-h-dvh flex-col bg-[var(--background)] font-sans text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
