import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aspidus | Global Commodities Supplier & Trader | Energy, Metals, Agriculture",
  description:
    "Aspidus is a leading global supplier and trader of key commodities, established in 2007. Specializing in energy, precious metals, agricultural products, and more. The name for Integrity.",
  keywords: [
    "Aspidus",
    "commodities trading",
    "global supplier",
    "energy trading",
    "metals trading",
    "agriculture commodities",
    "DMCC Dubai",
    "commodity trader",
  ],
  authors: [{ name: "Aspidus" }],
  icons: {
    icon: "/aspidus/favicon.png",
  },
  openGraph: {
    title: "Aspidus | Global Commodities Supplier & Trader",
    description: "A leading global supplier and trader of key commodities since 2007. The name for Integrity.",
    url: "https://www.aspidus.co",
    siteName: "Aspidus",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspidus | Global Commodities Supplier & Trader",
    description: "A leading global supplier and trader of key commodities since 2007.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
