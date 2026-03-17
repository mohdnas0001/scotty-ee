"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "You can count on us — always. We deliver on time, with precision and professionalism.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Care",
    description:
      "Every client is treated like family. We listen, support, and care deeply about your goals.",
  },
  {
    icon: Sparkles,
    title: "Efficiency & Excellence",
    description:
      "We value your time. That's why we keep things smart, smooth, and solution-oriented.",
  },
];

const processSteps = [
  { label: "Schedule a call", color: "text-[#f97316]" },
  { label: "We'll talk", color: "text-[#1e3a5f]" },
  { label: "You get support", color: "text-[#f97316]" },
  { label: "Life gets easier", color: "text-[#1e3a5f]" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        {/* Decorative diagonal blurs */}
        <div className="absolute top-20 right-20 w-125 h-30 bg-[#1e3a5f]/30 rounded-full blur-2xl rotate-[-55deg] pointer-events-none" />
        <div className="absolute top-60 right-0 w-100 h-25 bg-[#f97316]/25 rounded-full blur-2xl rotate-[-55deg] pointer-events-none" />
        <div className="absolute bottom-20 right-40 w-87.5 h-22.5 bg-[#1e3a5f]/20 rounded-full blur-2xl rotate-[-55deg] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm md:text-base font-medium text-[#1e3a5f]/70 tracking-wide mb-4">
                About Scotty E&amp;E Corporate Service
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.15] font-bold mb-6">
                <span className="text-[#f97316]">Meet Scotty</span>
                <br />
                <span className="text-[#1e3a5f]">
                  — Driven by Service, Defined by Excellence
                </span>
              </h1>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg mb-10">
                With a strong commitment to reliability, care, and results,
                Scotty E&amp;E Corporate Service has supported individuals and
                businesses with personalized solutions that truly make a
                difference. Here, service is more than a task — it&apos;s a
                calling.
              </p>
              <Button
                asChild
                variant="accent"
                size="lg"
                className="rounded-full px-8 py-6 text-base"
              >
                <Link href="/#contact">
                  Get to know me
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            {/* Right: Photo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-80 sm:w-100 md:w-110 aspect-3/4 rounded-2xl overflow-hidden shadow-2xl bg-[#1e3a5f]">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=face"
                  alt="Scotty - Founder"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              These core values guide every step we take at Scotty E&amp;E
              Corporate Service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="bg-white rounded-2xl border border-gray-100 p-10 flex flex-col items-center text-center group hover:shadow-lg hover:border-gray-200 transition-all duration-300"
              >
                <div className="w-24 h-24 mb-8 flex items-center justify-center">
                  <value.icon
                    className="w-16 h-16 text-[#1e3a5f] stroke-[1.2] group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#f97316] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How It Works Section */}
      <section className="py-24 bg-gray-50/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f]">
              How It Works
            </h2>
          </motion.div>

          {/* Horizontal steps with connecting line */}
          <div className="relative">
            {/* Connecting line behind circles — desktop only */}
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-gray-200" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Numbered circle */}
                  <div
                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold mb-5 ${
                      i % 2 === 0 ? "bg-[#f97316]" : "bg-[#1e3a5f]"
                    }`}
                  >
                    {i + 1}
                  </div>
                  {/* Label */}
                  <h3
                    className={`font-serif text-xl sm:text-2xl font-bold italic ${step.color}`}
                  >
                    {step.label}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
              Let&apos;s create something extraordinary together. Your next
              chapter starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="accent"
                size="lg"
                className="rounded-full px-8"
              >
                <Link href="/book">Book Appointment</Link>
              </Button>
              <Button
                asChild
                variant="outlineLight"
                size="lg"
                className="rounded-full px-8"
              >
                <Link href="/#contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
