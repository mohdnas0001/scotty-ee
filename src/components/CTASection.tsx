"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative w-full py-24 overflow-hidden" id="contact">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-r from-[#1e3a5f] via-[#2d4a6f] to-[#1e3a5f] animate-gradient" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#f97316]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f97316]/20 rounded-full blur-3xl" />
      
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">Contact</span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 mt-3 leading-tight">
            Let&apos;s{" "}
            <span className="text-[#f97316]">Work Together</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Whether you are planning an event, need reliable corporate support, or require project
            coordination, Scotty E&amp;E is ready to help. Our team is available to discuss your needs
            and provide tailored solutions.
          </p>

          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-start gap-3 text-white/90">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-[#f97316]" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/60 mb-1 uppercase tracking-wider">Office Address</p>
                <p className="text-sm leading-snug">
                  2nd Floor, Ogun State House,<br />
                  Central Business District, Abuja, Nigeria
                </p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-white/20" />

            <div className="flex items-start gap-3 text-white/90">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-5 h-5 text-[#f97316]" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/60 mb-1 uppercase tracking-wider">Phone</p>
                <p className="text-sm">08135420713</p>
                <p className="text-sm">08165208228</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-white/20" />

            <div className="flex items-start gap-3 text-white/90">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-5 h-5 text-[#f97316]" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/60 mb-1 uppercase tracking-wider">Email</p>
                <a href="mailto:info@scottyeande.com" className="text-sm hover:text-[#f97316] transition-colors">
                  info@scottyeande.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="accent" size="xl">
              <Link href="/book">
                Start a Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
