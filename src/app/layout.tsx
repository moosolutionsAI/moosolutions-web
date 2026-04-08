import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cabinet = localFont({
  src: "../fonts/CabinetGrotesk-Variable.woff2",
  variable: "--font-cabinet",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moosolutions.ai"),
  title: "MooSolutions.ai — Less Interface. More You.",
  description:
    "We build AI-powered tools that disappear into your workflow. From voice-to-text keyboards to interactive learning platforms.",
  openGraph: {
    title: "MooSolutions.ai",
    description:
      "AI-powered tools that get out of the way. Less interface. More you.",
    url: "https://moosolutions.ai",
    siteName: "MooSolutions.ai",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MooSolutions.ai",
    description: "AI-powered tools that get out of the way. Less interface. More you.",
    images: ["/og-image.png"],
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
      className={`${dmSans.variable} ${geistMono.variable} ${cabinet.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
