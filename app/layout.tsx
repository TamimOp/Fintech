import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cabin = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fintech",
  description: "A modern fintech website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cabin.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
