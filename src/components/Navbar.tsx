"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed w-full top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-white/80 backdrop-blur-sm border-b border-gray-100 py-4"
        )}
      >
        <div className="w-full flex items-center justify-between  px-4 sm:px-6 lg:px-8">
          <div className="w-full flex items-center justify-between gap-20">
            {/* Logo */}
            <Link href="/" className="flex items-center justify-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                {/* Desktop: Line logo */}
                <Image
                  src="/icon/logo-line-colored-alt.svg"
                  alt="Scotty E&E"
                  width={200}
                  height={40}
                  className="hidden sm:block h-10 w-auto transition-all duration-300"
                  priority
                />
                {/* Mobile: Smaller line logo */}
                <Image
                  src="/icon/logo-line-colored.svg"
                  alt="Scotty E&E"
                  width={160}
                  height={32}
                  className="sm:hidden h-8 w-auto transition-all duration-300"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium transition-colors duration-300 hover:text-[#f97316] text-[#1e3a5f]"
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
              
            </div>
            <div className="hidden lg:flex items-center gap-8">
            <Button
              asChild
              variant="accent"
              size="sm"
              className="ml-4 px-5 py-4 rounded-full"
            >
              <Link href="/book">
                  Book Appointment
              </Link>
            </Button>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors text-[#1e3a5f] hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-[#1e3a5f] z-50 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex justify-between items-center mb-12">
                <Image
                  src="/icon/logo-line-white.svg"
                  alt="Scotty E&E"
                  width={180}
                  height={36}
                  className="h-9 w-auto"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white p-2 hover:bg-white/10 rounded-lg"
                >
                  <X size={28} />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xl text-white font-medium hover:text-[#f97316] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-auto"
              >
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="w-full rounded-full"
                >
                  <Link href="/book">
                    Book Appointment
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
