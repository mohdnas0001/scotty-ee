"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-[#1a3a52] via-[#2d4a6f] to-[#1f3a4f]" />
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#f97316]/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-white/12 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-white/15 bg-white/8 p-4 sm:p-6 lg:p-8 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/12 rounded-full text-white/90 text-sm font-medium border border-white/10">
                  66th NBA Annual General Conference • August 2026 • Port Harcourt
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
              >
                Secure Your
                <span className="text-[#f97316]"> Accommodation</span>
                <br />
                Before Hotel Rates Rise.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-lg sm:text-xl text-white/85 max-w-2xl mb-8"
              >
                Accommodation reservations are now live for conference participants.
                Book early with Scotty E&amp;E Logistics Ltd for the best locations and rates.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild variant="accent" size="lg">
                  <Link href="/book">
                    Book Accommodation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outlineLight" size="lg">
                  <Link href="#contact">
                    View Contact Desk
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="rounded-3xl border border-white/15 bg-black/20 p-3 backdrop-blur-md shadow-xl">
                <div className="overflow-hidden rounded-2xl bg-black aspect-4/5 sm:aspect-16/10 lg:aspect-4/5">
                  <video
                    className="w-full h-full object-cover object-center"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src="https://h2ldvyryqnz4w6ws.public.blob.vercel-storage.com/SCOTTY%20E%26E%20VIDEO%204.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
