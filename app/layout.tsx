import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import ConditionalFooter from "@/components/footer/conditional-footer";
import { Toaster } from "sonner";

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
        className={`${cormorantGaramond.variable} ${manrope.variable} antialiased min-h-screen`}
      >
        {children}
        <ConditionalFooter />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
