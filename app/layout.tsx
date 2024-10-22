import type { Metadata } from "next";
import "./globals.css"; // Ensure this imports your custom font styles
import Navbar from "./components/Navbar";
import { cn } from './lib/utils';
import Footer from "./components/Footer";

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
      <body className={cn('min-h-screen grainy antialiased')}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
