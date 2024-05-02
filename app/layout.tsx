import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";

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
      <body className={rajdhani.className}>{children}</body>
    </html>
  );
}
