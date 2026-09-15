import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_CREDENTIAL, SITE_NAME, SITE_ROLE, SITE_URL } from "@/data/site";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const title = `${SITE_NAME} — ${SITE_ROLE}`;
const description = `${SITE_NAME} is a ${SITE_ROLE.toLowerCase()} and ${SITE_CREDENTIAL.toLowerCase()}, focused on editorial, research, and thematic cartography.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s — ${SITE_NAME}`,
  },
  description,
  keywords: [
    "cartographer",
    "geospatial analyst",
    "GIS",
    "cartography",
    "map design",
    "spatial analysis",
    "Emma Dilic",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    url: SITE_URL,
    title,
    description,
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper text-ink antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
