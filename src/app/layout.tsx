import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Scotty E&E Corporate Service | Events. Errands. Contracting.",
  description:
    "Scotty E&E delivers event planning, corporate errands & contracting services across Nigeria — fast, reliable, professional.",
  keywords:
    "event management Nigeria, corporate errands, contracting services, Scotty E&E, event planning, logistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen w-full flex items-center justify-center flex-col">
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
