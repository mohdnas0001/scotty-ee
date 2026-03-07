"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Award, Users, Calendar, Trophy } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 200,
    suffix: "+",
    label: "Events Managed",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Corporate Clients",
  },
  {
    icon: Award,
    value: 10,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Trophy,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function WhyChooseUs() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3 mb-6">
              Creating Moments That{" "}
              <span className="text-[#f97316]">Matter</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At Scotty E & E, we believe every event tells a story. Our passionate team
              combines creativity with precision to deliver extraordinary experiences
              that exceed expectations and leave lasting impressions.
            </p>

            <ul className="space-y-4">
              {[
                "Dedicated event specialists with industry expertise",
                "Personalized approach tailored to your vision",
                "Seamless execution from planning to completion",
                "Strong vendor relationships for best resources",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="w-6 h-6 rounded-full bg-[#f97316]/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[#f97316]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Stats Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#1e3a5f] mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
