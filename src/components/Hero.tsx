"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop",
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left — copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <span className="block text-5xl sm:text-6xl lg:text-7xl italic text-[#f97316] leading-tight">Events.</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl italic text-[#f97316] leading-tight">Errands.</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl italic text-[#f97316] leading-tight">Contracting.</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-[#1e3a5f] leading-tight mt-1" style={{ fontStyle: "normal" }}>All in One.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-base sm:text-lg text-gray-500 max-w-md mb-8 font-normal"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
            >
              Scotty E&amp;E delivers event planning, corporate errands &amp;
              contracting services across Nigeria — fast, reliable, professional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center px-7 py-3.5 bg-[#1e3a5f] text-white text-sm font-semibold rounded-full hover:bg-[#162d4a] transition-colors"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
              >
                Get a Free Quote
              </Link>
            </motion.div>
          </div>

          {/* Right — video + avatars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl bg-black aspect-4/5 sm:aspect-16/10 lg:aspect-4/5 relative shadow-2xl">
              <video
                ref={videoRef}
                className="w-full h-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="https://h2ldvyryqnz4w6ws.public.blob.vercel-storage.com/SCOTTY%20E%26E%20VIDEO%204.mp4" type="video/mp4" />
              </video>

              
              {/* WhatsApp badge — top right inside video */}
              <a
                href="https://wa.me/2348069206814"
                target="_blank"
                rel="noreferrer"
                className="absolute top-2 right-2 w-11 h-11 bg-[#1e3a5f] rounded-full flex items-center justify-center shadow-lg hover:bg-[#f97316] transition-colors z-10"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>

            {/* Avatars + happy customers — overlapping bottom of video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="absolute -bottom-6 left-4 flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full pl-1 pr-4 py-1 shadow-lg z-10"
            >
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100 shadow-sm">
                    <Image src={src} alt="Happy customer" width={40} height={40} className="object-cover w-full h-full" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium whitespace-nowrap" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>+200 Happy Customer</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
