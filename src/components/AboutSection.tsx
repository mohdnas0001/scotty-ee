"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    title: "Reliability",
    description: "We deliver on promises and timelines.",
  },
  {
    title: "Attention to Detail",
    description: "Every task, event, or project is handled with precision.",
  },
  {
    title: "Client-Focused Approach",
    description: "Your goals guide our strategy and execution.",
  },
  {
    title: "Professional Coordination",
    description:
      "Our team ensures smooth communication and organisation at every stage.",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full py-24 bg-linear-to-b from-gray-50 to-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">
              About
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3 mb-6">
              Built on Reliability,{" "}
              <span className="text-[#f97316]">Driven by Excellence</span>
            </h2>

            <p className="text-gray-700 text-lg mb-4 leading-relaxed font-medium">
              Scotty E&amp;E was founded with one clear mission:
            </p>
            <p className="text-gray-600 text-base mb-4 leading-relaxed">
              To provide dependable operational support that allows businesses and individuals
              to focus on what matters most.
            </p>
            <p className="text-gray-600 text-base mb-4 leading-relaxed">
              From small assignments to large-scale event coordination, our team approaches
              every project with professionalism, efficiency, and attention to detail.
            </p>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              We believe the difference between an average service and an exceptional one lies
              in commitment, communication, and consistency. That philosophy has helped Scotty
              E&amp;E become a trusted partner for organisations that require reliable support
              services.
            </p>
          </motion.div>

          {/* Right — What Sets Us Apart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-8">What Sets Us Apart</h3>
            <div className="space-y-5">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#1e3a5f] to-[#2d4a6f] flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e3a5f] mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
