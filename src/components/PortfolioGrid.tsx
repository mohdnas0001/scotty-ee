"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "Annual Corporate Gala",
    category: "Corporate Event",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Summer Wedding Celebration",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Tech Innovation Summit",
    category: "Conference",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Charity Fundraiser Night",
    category: "Fundraiser",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Product Launch Event",
    category: "Corporate Event",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Elegant Garden Wedding",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop",
  },
];

export default function PortfolioGrid() {
  return (
    <section className="w-full py-24 bg-[#1e3a5f]">
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
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            Featured Events
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Explore our portfolio of successful events that showcase our creativity,
            attention to detail, and commitment to excellence.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <span className="text-[#f97316] text-sm font-medium uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-[#f97316] transition-colors duration-300">
                    {item.title}
                  </h3>
                </motion.div>

                {/* View Button - appears on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <span className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-[#f97316]">
                    View Details
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
