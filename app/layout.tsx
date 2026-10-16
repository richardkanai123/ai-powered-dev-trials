import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/content";
import "./globals.css";

const generalSans = localFont({
  src: [
    { path: "./fonts/general-sans-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/general-sans-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/general-sans-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Trucks and vans for cargo hauling in Kenya`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "logistics Kenya",
    "cargo hauling",
    "truck hire Nairobi",
    "van delivery Kenya",
    "freight Mombasa",
    "container haulage",
  ],
  openGraph: {
    title: `${site.name} — Trucks for Kenyan cargo`,
    description: site.description,
    locale: "en_KE",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f7f3",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={generalSans.variable} lang="en">
      <body>
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
