"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  {
    id: "events",
    label: "Event Management",
    icon: "🎯",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=500&fit=crop",
    title: "Event Management",
    items: [
      "Full event planning & on-site coordination",
      "Venue selection & vendor management",
      "Guest list handling & RSVP support",
      "Decoration, lighting & sound setup",
      "Day-of execution with live team communication",
      "Budget planning & event timeline management",
    ],
  },
  {
    id: "errands",
    label: "Corporate Errands",
    icon: "🛒",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=500&fit=crop",
    title: "Corporate Errands",
    items: [
      "Secure document delivery & pickup",
      "Personal shopping for executives (VIP service)",
      "Office supply runs & courier support",
      "Time-sensitive task management",
      "Discreet, professional handling of errands",
      "Hotel bookings & flight ticket coordination",
    ],
  },
  {
    id: "contracting",
    label: "Contracting",
    icon: "✉️",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=500&fit=crop",
    title: "Contracting",
    items: [
      "Hotel bookings & flight ticket coordination",
      "Procurement of materials & equipment",
      "Repair coordination & site logistics",
      "Cleaning & technical servicing",
      "Ongoing operational support for businesses",
      "Emergency response & troubleshooting support",
    ],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section id="services" className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-gray-600 text-sm font-medium border border-gray-200 mb-5">
            ⚙️ Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-2 mb-4">
            <span className="text-[#f97316] italic">Custom Solutions</span>
            <br />
            for Every Need
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From event management to corporate errands and contracting — we offer reliable,
            end-to-end solutions designed to make your operations smoother.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                activeTab === i
                  ? "bg-white border-gray-300 shadow-md text-[#1e3a5f]"
                  : "bg-transparent border-gray-200 text-gray-500 hover:border-gray-300 hover:text-[#1e3a5f]"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Image */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 aspect-6/5 relative">
              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-6">{current.title}</h3>
              <ul className="space-y-4 mb-8">
                {current.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <Star className="w-4 h-4 text-[#f97316] mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1e3a5f] text-white text-sm font-medium rounded-lg hover:bg-[#162d4a] transition-colors w-fit"
              >
                <ArrowRight className="w-4 h-4" />
                Contact us
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
