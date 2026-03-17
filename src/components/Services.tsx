"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Building2,
  ShieldCheck,
  CreditCard,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Hotel Reservation Support",
    description:
      "We help conference delegates secure the right accommodation quickly and confidently.",
    deliverables: [
      "Access approved accommodation options for NBA-AGC participants.",
      "Compare options by location, comfort level, and budget.",
      "Get fast support for room availability and booking decisions.",
    ],
  },
  {
    icon: CreditCard,
    title: "Payment & Confirmation",
    description:
      "Make secure payments and receive timely booking confirmation.",
    deliverables: [
      "Online checkout experience for easier reservation flow.",
      "Payment verification and clear booking status updates.",
      "Dedicated assistance for payment-related questions.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Conference Logistics Guidance",
    description:
      "Receive practical guidance for a smooth conference stay.",
    deliverables: [
      "Recommendations based on proximity and convenience.",
      "Support for group bookings and shared accommodation plans.",
      "Reliable communication from inquiry to check-in readiness.",
    ],
  },
  {
    icon: Settings,
    title: "Post-Booking Support",
    description:
      "Manage updates and preferences after booking.",
    deliverables: [
      "Assistance for booking changes where applicable.",
      "Quick access to reservation details and communication channels.",
      "Continued support before conference arrival.",
    ],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="services" className="w-full py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mt-3 mb-4">
            What We Offer for
            <span className="text-[#f97316]"> NBA-AGC 2026</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Click each service to view details.
          </p>
        </motion.div>

        <div className="space-y-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="rounded-xl border border-gray-200 bg-white"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <div className="flex items-center gap-3">
                  <service.icon className="h-5 w-5 text-[#1e3a5f]" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#1e3a5f]">{service.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                  </div>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#1e3a5f] shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#1e3a5f] shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5">
                  <ul className="space-y-2 pt-1 border-t border-gray-100">
                    {service.deliverables.map((item) => (
                      <li key={item} className="text-sm text-gray-700 leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
