import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import { images } from "@/content/photos";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://mammaluisa.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mamma Luisa – Italian Dining in Newport",
    template: "%s · Mamma Luisa",
  },
  description:
    "Northern Italian cuisine in Newport, Rhode Island. Dinner from 5pm, closed Tuesday and Wednesday. Reservations by phone or Resy.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: site.name,
    title: "Mamma Luisa – Italian Dining in Newport",
    description:
      "Warm, welcoming Italian dining at 673 Thames Street, Newport. Reservations and takeout by phone.",
    images: [
      {
        url: images.og,
        width: 1200,
        height: 800,
        alt: "Dining room at Mamma Luisa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mamma Luisa – Italian Dining in Newport",
    description:
      "Northern Italian cuisine in the heart of Newport. Reserve a table or call for takeout.",
    images: [images.og],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/brand/favicon.jpg",
    apple: "/images/brand/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col overflow-x-clip bg-ink text-cream antialiased">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
