import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Scotty E & E | Premium Event Management",
  description: "Creating unforgettable event experiences. Corporate events, weddings, conferences, and more. Your vision, our expertise.",
  keywords: "event management, event planning, corporate events, weddings, conferences, entertainment booking",
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
