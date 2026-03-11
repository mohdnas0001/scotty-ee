"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import {
  CalendarCheck,
  Briefcase,
  Wrench,
  Plane,
} from "lucide-react";

const services = [
  {
    icon: CalendarCheck,
    title: "Event Management",
    description:
      "We design and manage events that are organised, engaging, and professionally executed. From corporate functions and conferences to weddings and private celebrations, Scotty E&E handles every detail so you can focus on the experience.",
    deliverables: [
      "End-to-End Event Planning — concept development, logistics coordination, vendor management, and execution.",
      "Venue & Vendor Coordination — we secure venues, manage suppliers, and ensure every moving part works together.",
      "On-Site Event Management — our team oversees real-time coordination to guarantee smooth delivery.",
      "Budget & Timeline Management — careful planning ensures your event stays on schedule and within budget.",
      "Product Launch Events — strategic launch experiences designed to generate attention and engagement.",
      "Catering & Guest Experience — curated catering services and hospitality management.",
    ],
  },
  {
    icon: Briefcase,
    title: "Corporate Errands",
    description:
      "Busy teams should focus on strategic work, not logistics. Scotty E&E provides dependable corporate errand services that handle urgent tasks and operational requests quickly and professionally.",
    deliverables: [
      "Business Task Execution — document delivery, item pickups, administrative support, and urgent errands.",
      "Same-Day Service — fast and reliable service across the business day.",
      "Flexible Corporate Support — one-time assignments or recurring operational assistance.",
    ],
  },
  {
    icon: Wrench,
    title: "Contracting Services",
    description:
      "We help organisations maintain and manage projects through dependable contracting, coordination and operational oversight.",
    deliverables: [
      "Facility & Property Maintenance — routine upkeep, inspections, and repairs coordinated with trusted partners.",
      "Project Coordination & Oversight — planning, scheduling, and monitoring work to ensure quality delivery.",
      "Verified Contractor Network — we work with reliable professionals to ensure safe and efficient service.",
    ],
  },
  {
    icon: Plane,
    title: "Travel & Bookings",
    description:
      "Planning business or personal travel should be simple. Scotty E&E helps you manage travel arrangements with convenience and efficiency.",
    deliverables: [
      "Flight & Travel Bookings — competitive travel options tailored to your needs.",
      "Trip Coordination — accommodation, logistics, and scheduling in one place.",
      "Personalised Travel Services — everything needed to make your journey smooth and convenient.",
    ],
  },
];

export default function Services() {
  return (
    <section className="w-full py-24 bg-linear-to-b from-white to-gray-50">
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
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3 mb-5">
            Reliable Support for Your{" "}
            <span className="text-[#f97316]">Business Operations</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide practical services that help businesses plan better, move faster,
            and execute with confidence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              deliverables={service.deliverables}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
