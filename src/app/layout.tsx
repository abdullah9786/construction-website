import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fortune Heights - Luxury Residential Tower",
    template: "%s | Fortune Heights"
  },
  description: "Experience luxury living at Fortune Heights - an exclusive residential tower featuring premium amenities, modern floor plans, and prime location. Under construction, ready soon.",
  keywords: ["luxury apartments", "residential tower", "premium living", "modern apartments", "real estate"],
  authors: [{ name: "Fortune Heights Development" }],
  creator: "Fortune Heights",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fortuneheights.com",
    title: "Fortune Heights - Luxury Residential Tower",
    description: "Experience luxury living at Fortune Heights - an exclusive residential tower featuring premium amenities, modern floor plans, and prime location.",
    siteName: "Fortune Heights",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortune Heights - Luxury Residential Tower",
    description: "Experience luxury living at Fortune Heights - premium apartments coming soon.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} font-inter antialiased bg-white text-gray-900`}
      >
        <StructuredData />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
