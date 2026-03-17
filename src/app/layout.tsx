import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Scotty E & E | 2026 NBA-AGC Accommodation",
  description:
    "Book conference accommodation early for 2026 NBA-AGC in Port Harcourt. Secure better rates, preferred locations, and guided support.",
  keywords:
    "NBA-AGC 2026 accommodation, Port Harcourt hotel booking, conference accommodation, Scotty E&E logistics",
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
