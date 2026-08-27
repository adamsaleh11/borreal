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
    default: "Boreall Fern Inc. — Canadian Pulses for Chile",
    template: "%s · Boreall Fern Inc.",
  },
  description:
    "A Canadian, family-owned pulse exporter. Lentils contracted direct with Saskatchewan and Alberta growers and shipped by the container to distributors and food processors in Chile.",
  openGraph: {
    title: "Boreall Fern Inc. — Canadian Pulses for Chile",
    description:
      "Lentils from the Canadian Prairies to Chilean buyers, contracted at the farm and delivered by the container. Canada · Chile · South America.",
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
