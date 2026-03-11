"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables?: string[];
  index: number;
}

export default function ServiceCard({ icon: Icon, title, description, deliverables, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full w-full flex flex-col"
    >
      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#1e3a5f] to-[#f97316] rounded-t-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      {/* Icon */}
      <div className="mb-6">
        <div className="w-16 h-16 bg-linear-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-[#1e3a5f] mb-3 group-hover:text-[#f97316] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>

      {deliverables && deliverables.length > 0 && (
        <div className="mb-6 grow">
          <p className="text-xs font-semibold text-[#1e3a5f] uppercase tracking-wider mb-3">What We Deliver</p>
          <ul className="space-y-2">
            {deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                <span className="mt-1 w-4 h-4 shrink-0 rounded-full bg-[#f97316]/10 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!deliverables && <div className="grow" />}

      {/* Button */}
      <div className="mt-auto">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="group-hover:bg-[#f97316] group-hover:text-white group-hover:border-[#f97316] transition-all duration-300"
        >
          <a href="/services">
            View Service
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
