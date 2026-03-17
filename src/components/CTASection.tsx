"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full py-20 bg-[#0f172a]" id="contact">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 text-center"
        >
          <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">Booking Desk</span>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 mt-3 leading-tight">
            Ready to reserve your stay?
          </h2>
          
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Contact our team to request available options and complete your reservation for the 2026 NBA-AGC.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-start gap-3 text-white/90">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-5 h-5 text-[#f97316]" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/60 mb-1 uppercase tracking-wider">Call / WhatsApp</p>
                <p className="text-sm">Tony: 08069206814</p>
                <p className="text-sm">John/Cynthia: 07031477237</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-white/20" />

            <div className="flex items-start gap-3 text-white/90">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-5 h-5 text-[#f97316]" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/60 mb-1 uppercase tracking-wider">Email</p>
                <a href="mailto:nacobooking@gmail.com" className="text-sm hover:text-[#f97316] transition-colors">
                  nacobooking@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="accent" size="xl">
              <Link href="/book">
                Book Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href="https://www.nacobooking.com/special-offers/" target="_blank" rel="noreferrer">
                Special Offers
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
