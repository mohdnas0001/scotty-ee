"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Michael O.",
    role: "HR Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
    content:
      "Scotty E&E took care of our product launch from start to finish. The event was flawless, and their team handled every detail with professionalism.",
  },
  {
    id: 2,
    name: "Marc D.",
    role: "Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop",
    content:
      "We needed reliable document delivery on short notice, and Scotty E&E delivered — literally. Fast, secure, and professional.",
  },
  {
    id: 3,
    name: "Christina A.",
    role: "Executive Assistant",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
    content:
      "From planning to execution, their event team was outstanding. It felt like they were part of our company!",
  },
  {
    id: 4,
    name: "Chris J.",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
    content:
      "They supported us with facility maintenance and procurement during our office renovation — seamless and stress-free.",
  },
  {
    id: 5,
    name: "Daniel T.",
    role: "HR Manager",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop",
    content:
      "We've worked with many contractors before, but none as responsive and structured as Scotty E&E. Highly recommended.",
  },
  {
    id: 6,
    name: "Ethan W.",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
    content:
      "Scotty E&E's errand services save us hours every week. It's like having a trusted extra set of hands in the background.",
  },
];

export default function TestimonialCarousel() {
  return (
    <section
      className="w-full py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e8eef4 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full text-gray-600 text-sm font-medium border border-gray-200 mb-5">
            ⭐ Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-2">
            Results That
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-[#f97316] italic">Make a Difference</span>
          </h2>
        </motion.div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 shrink-0">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1e3a5f]">— {t.name}, {t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

