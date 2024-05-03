import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import {cn} from './lib/utils'
import Footer from "./components/Footer";

const rajdhani = Rajdhani({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
});

// bold, med, regular
export const metadata: Metadata = {
  title: "UofT UTES",
  description: "Website for UTES",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen grainy antialiased', rajdhani.className)}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
