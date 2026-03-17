"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock3, ShieldCheck, Hotel } from "lucide-react";

const highlights = [
  {
    icon: Clock3,
    title: "Early Booking Advantage",
    description: "Reserve early and protect your budget before conference-season demand peaks.",
  },
  {
    icon: Hotel,
    title: "Curated Hotel Options",
    description: "Access quality accommodation options selected for NBA-AGC participants.",
  },
  {
    icon: ShieldCheck,
    title: "Guided Support",
    description: "Get clear booking support and payment confirmation from our team.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-book" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-[#1e3a5f]/10 bg-[#f8fafc] p-6 sm:p-8"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 text-[#f97316]" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-3">
                2026 NBA-AGC • August in Port Harcourt
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The 66th Nigerian Bar Association Annual General Conference is coming to Port Harcourt this August. 
                With expected market pressure on hotel rates during the conference, early reservation 
                remains the smartest way to secure better value and preferred locations.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-xl border border-gray-200 bg-white p-5"
            >
              <item.icon className="h-5 w-5 text-[#1e3a5f] mb-3" />
              <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div id="how-to-book" className="mt-12">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a5f] mb-5">How to Book</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-sm font-semibold text-[#f97316] mb-2">Step 1</p>
              <p className="text-gray-700">Browse available options and select your preferred accommodation.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-sm font-semibold text-[#f97316] mb-2">Step 2</p>
              <p className="text-gray-700">Complete your booking and make payment securely online.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-sm font-semibold text-[#f97316] mb-2">Step 3</p>
              <p className="text-gray-700">Receive confirmation and prepare for a smooth conference stay.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
