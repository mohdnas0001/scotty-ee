"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import {
  CalendarCheck,
  Building2,
  Heart,
  Users,
  Truck,
  Music,
} from "lucide-react";

const services = [
  {
    icon: CalendarCheck,
    title: "Event Planning",
    description:
      "Comprehensive event planning from concept to execution, ensuring every detail is perfectly orchestrated for your memorable occasion.",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Professional corporate event management including conferences, product launches, team buildings, and networking events.",
  },
  {
    icon: Heart,
    title: "Wedding Management",
    description:
      "Creating dream weddings with personalized touches, elegant designs, and seamless coordination for your special day.",
  },
  {
    icon: Users,
    title: "Conference Management",
    description:
      "Full-service conference planning with venue selection, speaker coordination, and attendee management for impactful events.",
  },
  {
    icon: Truck,
    title: "Event Logistics",
    description:
      "Expert logistics coordination handling transportation, setup, equipment, and all operational aspects of your event.",
  },
  {
    icon: Music,
    title: "Entertainment Booking",
    description:
      "Access to premium entertainers, DJs, bands, and performers to create unforgettable experiences for your guests.",
  },
];

export default function Services() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3 mb-5">
            Our Premium Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide end-to-end event management solutions tailored to your unique needs,
            delivering exceptional experiences every time.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
