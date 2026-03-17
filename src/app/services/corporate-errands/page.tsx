"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  ShoppingBag,
  Truck,
  Timer,
  ShieldCheck,
  Plane,
  CheckCircle2,
  Star,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Secure Document Delivery & Pickup",
    description:
      "Confidential, tracked delivery of important documents — with proof of delivery and real-time updates.",
  },
  {
    icon: ShoppingBag,
    title: "VIP Personal Shopping",
    description:
      "From executive gifts to office décor — we source, purchase, and deliver exactly what you need.",
  },
  {
    icon: Truck,
    title: "Office Supply Runs & Courier Support",
    description:
      "Never run out of essentials. We handle routine and urgent supply runs across cities.",
  },
  {
    icon: Timer,
    title: "Time-Sensitive Task Management",
    description:
      "Deadlines don't scare us. We specialize in high-pressure, clock-critical tasks.",
  },
  {
    icon: ShieldCheck,
    title: "Discreet, Professional Handling",
    description:
      "Every errand is handled with care, discretion, and full accountability. Your trust is our priority.",
  },
  {
    icon: Plane,
    title: "Hotel Bookings & Flight Coordination",
    description:
      "Corporate travel made seamless — we book, confirm, and manage the logistics for you.",
  },
];

const useCases = [
  {
    title: "For Executives",
    description:
      "Free up your calendar. We handle the operational tasks so you can focus on decisions that matter.",
    items: [
      "Personal shopping & gift procurement",
      "Travel & accommodation booking",
      "Document filing & government errands",
    ],
  },
  {
    title: "For Businesses",
    description:
      "Keep your office running smoothly with reliable, on-demand errand support for your team.",
    items: [
      "Office supply procurement",
      "Inter-office courier services",
      "Vendor payments & bank runs",
    ],
  },
  {
    title: "For Events",
    description:
      "Behind every great event is a team running hundreds of errands flawlessly.",
    items: [
      "Last-minute supply pickups",
      "Vendor coordination runs",
      "Guest transport logistics",
    ],
  },
];

export default function CorporateErrandsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute top-16 right-10 w-125 h-28 bg-[#1e3a5f]/25 rounded-full blur-2xl rotate-[-55deg] pointer-events-none" />
        <div className="absolute top-52 right-0 w-100 h-24 bg-[#f97316]/20 rounded-full blur-2xl rotate-[-55deg] pointer-events-none" />

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
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#1e3a5f] bg-[#1e3a5f]/10 rounded-full px-3 py-1.5 mb-4">
                <BriefcaseBusiness className="w-3.5 h-3.5" />
                Corporate Errands
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.25rem] leading-[1.15] font-bold mb-6">
                <span className="text-[#1e3a5f]">Your Time is Valuable.</span>
                <br />
                <span className="text-[#f97316]">We Handle the Rest.</span>
              </h1>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg mb-10">
                Professional errand services for executives and businesses —
                discreet, dependable, done right. From document delivery to
                personal shopping, we&apos;re your operational backbone.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  variant="default"
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
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                  alt="Corporate Errands"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1e3a5f] flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1e3a5f]">100%</div>
                  <div className="text-xs text-gray-400">Reliability Rate</div>
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
              What We Do For You
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Reliable, professional errand services — so you never have to
              worry about the small stuff again.
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
                <div className="w-12 h-12 rounded-xl bg-[#1e3a5f]/10 flex items-center justify-center mb-5 group-hover:bg-[#1e3a5f]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#1e3a5f]" />
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

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Who We Serve
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Tailored errand solutions for every type of client.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, i) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl font-bold text-[#1e3a5f]/5 absolute top-4 right-6">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                  {useCase.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <ul className="space-y-2.5">
                  {useCase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-[#1e3a5f]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#f97316] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
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
              Let Us Handle It
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
              Focus on growing your business — we&apos;ll take care of the rest.
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
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
