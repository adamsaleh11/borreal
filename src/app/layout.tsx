import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

/**
 * Display — Fraunces. Variable serif with SOFT/WONK axes; we hold WONK near 0
 * so it reads as a refined Scotch-Roman rather than a craft-goods serif.
 */
const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
  display: "swap",
});

/** Text — Instrument Sans. Modern grotesque, deliberately not Inter/Geist. */
const sans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

/** Data — IBM Plex Mono. Carries the ledger/customs-document register. */
const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boreallfern.com"),
  title: {
    default: "Boreall Fern Inc. — Industrial & Strategic Trade Enablement",
    template: "%s · Boreall Fern Inc.",
  },
  description:
    "A Canadian family-owned trade enablement platform connecting Canadian industrial capability with South American demand — beginning with Chile.",
  openGraph: {
    title: "Boreall Fern Inc. — Industrial & Strategic Trade Enablement",
    description:
      "Connecting Canadian industrial capability with South American demand. Canada · Chile · South America · China.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
