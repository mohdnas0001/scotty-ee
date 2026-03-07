"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f] via-[#2d4a6f] to-[#1e3a5f] animate-gradient" />
      
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
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-[#f97316]" />
            Ready to Create Something Amazing?
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Bring Your{" "}
            <span className="text-[#f97316]">Vision</span> to Life
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Whether it&apos;s a corporate event, wedding, or private celebration,
            our team is ready to create an unforgettable experience for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="accent" size="xl">
              <Link href="/book">
                Book Your Event
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
