"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    content:
      "Scotty E & E transformed our annual conference into an unforgettable experience. Their attention to detail and creative approach exceeded all our expectations. Truly outstanding work!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, Global Corp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    content:
      "Working with the team at Scotty E & E was an absolute pleasure. They handled our product launch with professionalism and creativity that made our event stand out in the industry.",
  },
  {
    id: 3,
    name: "Emily Williams",
    role: "Bride",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    content:
      "Our wedding was everything we dreamed of and more. The team's dedication to making our day perfect was evident in every single detail. Forever grateful for their exceptional service.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Event Coordinator, Nonprofit Foundation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    content:
      "Scotty E & E helped us raise record-breaking funds at our charity gala. Their expertise in event management and guest experience was instrumental to our success.",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3 mb-5">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it — hear from the clients who have
            experienced our exceptional event services.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#f97316]">
                        <Image
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          width={128}
                          height={128}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#1e3a5f] rounded-full flex items-center justify-center">
                        <Quote className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                      &ldquo;{testimonials[currentIndex].content}&rdquo;
                    </p>
                    <div>
                      <h4 className="text-xl font-bold text-[#1e3a5f]">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-500">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-[#1e3a5f] hover:text-white text-[#1e3a5f] transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#f97316] w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-[#1e3a5f] hover:text-white text-[#1e3a5f] transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
