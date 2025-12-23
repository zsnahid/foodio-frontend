import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/navbar";
import Banner from "@/components/header/banner";
import Footer from "@/components/footer/footer";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foodio.",
  description: "Food Ordering Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${manrope.variable} antialiased max-w-[90vw] mx-auto min-h-screen`}
      >
        <header>
          <Navbar />
          <Banner />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
