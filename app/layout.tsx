import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { business, siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const title = "Dubinsko pranje Kragujevac | Nemanja Detailing";
const description =
  "Dubinsko pranje u Kragujevcu: nameštaj, enterijer automobila i pranje vozila. Nemanja Detailing radi i poliranje farova i sređivanje kočnica. Pozovite 062 829 6958.";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: title,
    template: "%s | Nemanja Detailing",
  },
  description,
  applicationName: business.name,
  authors: [{ name: business.name }],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: business.name,
    title,
    description,
    images: [
      {
        url: "/images/dubinsko-pranje-kragujevac-hero.jpg",
        width: 1200,
        height: 675,
        alt: "Nemanja Detailing — dubinsko pranje u Kragujevcu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/dubinsko-pranje-kragujevac-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink font-sans text-white">
        <a
          href="#sadrzaj"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2"
        >
          Preskoči na sadržaj
        </a>
        {children}
      </body>
    </html>
  );
}
