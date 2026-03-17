"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "Years experience" },
  { value: "100+", label: "Successful events & errands completed" },
  { value: "100%", label: "Client satisfaction rate" },
  { value: "12+", label: "Ongoing corporate clients supported monthly" },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-book"
      className="w-full py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e8eef4 100%)",
      }}
    >
      {/* decorative watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute -left-20 top-0 h-full w-1/2 bg-[#1e3a5f]" style={{ clipPath: "ellipse(60% 80% at 0% 50%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full text-[#1e3a5f] text-sm font-medium border border-gray-200 mb-6">
              <span className="w-4 h-4 text-xs">🏠</span> About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6 leading-tight">
              Scotty E&amp;E<br />Corporate Service
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              For over 4 years, we&apos;ve been dedicated to delivering reliable support for events,
              errands, and everyday logistics. With Scotty, it&apos;s not just about getting the job
              done — it&apos;s about trust, care, and consistency.
            </p>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <p className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500 leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
