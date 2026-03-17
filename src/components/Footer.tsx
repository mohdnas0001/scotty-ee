"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
  { label: "Book", href: "/book" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Gradient divider line */}
      <div className="h-px bg-linear-to-r from-transparent via-gray-300 to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Logo + Nav Links */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between py-10 gap-8"
        >
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/icon/logo-full-colored.svg"
              alt="Scotty E&E Corporate Service"
              width={180}
              height={50}
              className="h-20 w-auto"
            />
          </Link>

          {/* Nav Links */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-[#1e3a5f]/70 hover:text-[#1e3a5f] transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#f97316] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#1e3a5f]/50 hover:border-[#f97316] hover:text-[#f97316] hover:scale-110 transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4"
        >
          <p className="text-xs text-gray-400 tracking-wide">
            © {new Date().getFullYear()} Scotty E&E Corporate Service. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <a
              href="#"
              className="text-gray-400 hover:text-[#f97316] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-gray-200">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-[#f97316] transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
