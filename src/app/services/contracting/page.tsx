"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Wrench,
  Package,
  HardHat,
  Sparkles,
  AlertTriangle,
  Settings,
  CheckCircle2,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Procurement of Materials & Equipment",
    description:
      "We source and deliver quality materials and equipment — at competitive prices with verified suppliers.",
  },
  {
    icon: HardHat,
    title: "Repair Coordination & Site Logistics",
    description:
      "From plumbing to electrical work, we coordinate skilled technicians and manage site logistics.",
  },
  {
    icon: Sparkles,
    title: "Cleaning & Technical Servicing",
    description:
      "Professional deep cleaning, fumigation, and routine technical maintenance for offices and facilities.",
  },
  {
    icon: Settings,
    title: "Ongoing Operational Support",
    description:
      "Retained support for businesses that need a reliable partner for day-to-day operations management.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Response & Troubleshooting",
    description:
      "When things break, we move fast. Our emergency team is on standby for urgent repairs and fixes.",
  },
  {
    icon: Wrench,
    title: "Facility Management",
    description:
      "Comprehensive facility upkeep — we handle maintenance schedules, vendor oversight, and quality control.",
  },
];

const workProcess = [
  {
    step: "01",
    title: "Assessment",
    description:
      "We evaluate your needs, inspect the site (if applicable), and outline the scope of work.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "We create a detailed plan with timelines, cost estimates, and resource allocation.",
  },
  {
    step: "03",
    title: "Execution",
    description:
      "Our vetted team gets to work — with regular updates and quality checkpoints throughout.",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "We deliver the completed work, conduct a final review, and ensure your full satisfaction.",
  },
];

const industries = [
  "Corporate Offices",
  "Hotels & Hospitality",
  "Retail & Showrooms",
  "Residential Properties",
  "Government Buildings",
  "Event Venues",
  "Warehouses & Logistics",
  "Healthcare Facilities",
];

export default function ContractingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute top-16 right-10 w-125 h-28 bg-[#f97316]/20 rounded-full blur-2xl rotate-[-55deg] pointer-events-none" />
        <div className="absolute top-52 right-0 w-100 h-24 bg-[#1e3a5f]/25 rounded-full blur-2xl rotate-[-55deg] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#f97316] transition-colors mb-6"
              >
                ← Back to Services
              </Link>
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#f97316] bg-[#f97316]/10 rounded-full px-3 py-1.5 mb-4">
                <Wrench className="w-3.5 h-3.5" />
                Contracting
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.25rem] leading-[1.15] font-bold mb-6">
                <span className="text-[#f97316]">End-to-End</span>
                <br />
                <span className="text-[#1e3a5f]">Operational Support</span>
              </h1>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg mb-10">
                Procurement, repairs, logistics, and facility management — we
                provide the operational backbone that keeps your business running
                smoothly, so you can focus on growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="rounded-full px-8"
                >
                  <Link href="/book">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                >
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop"
                  alt="Contracting Services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f97316] flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1e3a5f]">24/7</div>
                  <div className="text-xs text-gray-400">Emergency Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Our Contracting Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Comprehensive solutions to keep your operations running at peak
              performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 flex items-center justify-center mb-5 group-hover:bg-[#f97316]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#f97316]" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Our Process
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A structured, transparent approach from start to finish.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line — desktop */}
            <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-0.5 bg-gray-200" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
              {workProcess.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold mb-6 ${
                      i % 2 === 0 ? "bg-[#f97316]" : "bg-[#1e3a5f]"
                    }`}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Industries We Serve
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {industries.map((industry, i) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-[#1e3a5f] hover:border-[#f97316] hover:text-[#f97316] transition-colors duration-300 cursor-default"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f97316]" />
                {industry}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Need Reliable Contracting?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
              From procurement to facility management — we&apos;ve got you
              covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="accent"
                size="lg"
                className="rounded-full px-8"
              >
                <Link href="/book">Book Now</Link>
              </Button>
              <Button
                asChild
                variant="outlineLight"
                size="lg"
                className="rounded-full px-8"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
