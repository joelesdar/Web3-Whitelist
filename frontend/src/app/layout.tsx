import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: "--font-Montserrat",
  display:'swap',
  fallback: ['Arial', 'sans-serif']
});

export const metadata: Metadata = {
  title: "Kii Whitelist",
  description: "Whitelist for KiiChain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased min-h-screen`}
      >
        <Header />
        <main className="flex-grow justify-center py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
