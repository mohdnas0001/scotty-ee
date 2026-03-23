"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  BriefcaseBusiness,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    slug: "event-management",
    icon: CalendarCheck,
    title: "Event Management",
    tagline: "Flawless events, unforgettable moments.",
    description:
      "From corporate conferences to private celebrations, we handle every detail — so you can focus on what matters most.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    highlights: [
      "Full event planning & coordination",
      "Venue selection & vendor management",
      "Day-of execution with live teams",
    ],
    color: "from-[#f97316] to-[#ea580c]",
  },
  {
    slug: "corporate-errands",
    icon: BriefcaseBusiness,
    title: "Corporate Errands",
    tagline: "Your time is valuable. We handle the rest.",
    description:
      "Professional errand services for executives and businesses — discreet, dependable, done right.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    highlights: [
      "Secure document delivery & pickup",
      "VIP personal shopping for executives",
      "Time-sensitive task management",
    ],
    color: "from-[#1e3a5f] to-[#162d4a]",
  },
  {
    slug: "contracting",
    icon: Wrench,
    title: "Contracting",
    tagline: "End-to-end operational support.",
    description:
      "Procurement, repairs, logistics, and ongoing business support — we keep your operations running smoothly.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    highlights: [
      "Procurement of materials & equipment",
      "Repair coordination & site logistics",
      "Emergency response & troubleshooting",
    ],
    color: "from-[#f97316] to-[#ea580c]",
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "4+", label: "Years of Experience" },
  { value: "80%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-white overflow-hidden">
        <div className="absolute top-16 right-10 w-125 h-28 bg-[#1e3a5f]/30 rounded-full blur-2xl rotate-[-55deg] pointer-events-none" />
        <div className="absolute top-52 right-0 w-100 h-24 bg-[#f97316]/25 rounded-full blur-2xl rotate-[-55deg] pointer-events-none" />
        <div className="absolute bottom-10 right-32 w-80 h-20 bg-[#1e3a5f]/20 rounded-full blur-2xl rotate-[-55deg] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-sm md:text-base font-medium text-[#1e3a5f]/70 tracking-wide mb-4">
              Our Services
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.15] font-bold mb-6">
              <span className="text-[#f97316]">Everything</span>{" "}
              <span className="text-[#1e3a5f]">
                Your Business Needs — Under One Roof
              </span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
              Scotty E&amp;E Corporate Service delivers event management,
              corporate errands, and contracting — tailored
              solutions that keep your operations running smoothly and your time
              free for what truly matters.
            </p>
            <Button
              asChild
              variant="accent"
              size="lg"
              className="rounded-full px-8 py-6 text-base"
            >
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1e3a5f] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#f97316] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards — alternating layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative ${isReversed ? "lg:order-2" : ""}`}
                >
                  <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-linear-to-t ${service.color} opacity-20`}
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-5 -right-3 sm:right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#1e3a5f]">
                        {service.title}
                      </div>
                      <div className="text-xs text-gray-400">
                        Learn more →
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={isReversed ? "lg:order-1" : ""}>
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-[#f97316] bg-[#f97316]/10 rounded-full px-3 py-1.5 mb-4">
                    <service.icon className="w-3.5 h-3.5" />
                    {service.title}
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-3">
                    {service.tagline}
                  </h2>
                  <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-8">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-[#1e3a5f]"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#f97316] shrink-0" />
                        <span className="text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant="accent"
                    size="lg"
                    className="rounded-full px-8"
                  >
                    <Link href={`/services/${service.slug}`}>
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-28 overflow-hidden bg-white">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231e3a5f\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        {/* Decorative blurs */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#1e3a5f]/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#f97316] mb-4">
              Our Promise
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-5">
              Why Scotty E&amp;E?
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              We combine reliability, personal care, and efficiency to deliver
              services that go beyond expectations.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                ),
                title: "Fast Turnaround",
                desc: "Same-day and next-day service for urgent requests. We move when you need us to.",
                accent: "#f97316",
                accentBg: "bg-orange-50",
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "Dedicated Support",
                desc: "A personal point of contact for every project. You&apos;re never just a ticket number.",
                accent: "#1e3a5f",
                accentBg: "bg-blue-50",
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                ),
                title: "Trusted & Discreet",
                desc: "Confidential handling of all client matters. Your trust is our foundation.",
                accent: "#f97316",
                accentBg: "bg-orange-50",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative bg-white rounded-3xl border border-gray-100 p-10 text-center hover:shadow-2xl hover:shadow-gray-200/60 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: item.accent }}
                />

                {/* Icon circle */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${item.accentBg} mb-6`}
                  style={{ color: item.accent }}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[0.95rem]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mt-16"
          >
            {[
              "100% Client Satisfaction",
              "NDA-Protected Engagements",
              "Abuja & Nationwide Coverage",
            ].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-50 border border-gray-100 text-sm text-gray-600 font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-[#f97316]" />
                {badge}
              </span>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
              Tell us what you need and we&apos;ll craft the perfect solution.
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
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
