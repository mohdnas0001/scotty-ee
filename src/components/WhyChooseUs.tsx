"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Award, Users, Calendar, Trophy } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 4,
    suffix: "+ Years",
    label: "Delivering professional support services across Nigeria.",
  },
  {
    icon: Trophy,
    value: 100,
    suffix: "+ Projects",
    label: "Events, errands, and operational support delivered successfully.",
  },
  {
    icon: Award,
    value: 100,
    suffix: "% Satisfaction",
    label: "Built on reliability, responsiveness, and professionalism.",
  },
  {
    icon: Users,
    value: 12,
    suffix: "+ Clients",
    label: "Supported every month with ongoing business services.",
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
              Scotty E&amp;E Corporate Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3 mb-6">
              Built on{" "}
              <span className="text-[#f97316]">Trust</span>{" "}
              and Attention to Detail
            </h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              For over four years, Scotty E&amp;E has supported businesses and individuals with
              dependable event planning, corporate errands, and contracting services.
            </p>
            <p className="text-gray-600 text-base mb-4 leading-relaxed">
              But what truly defines our work is not just execution; it is trust, responsiveness,
              and attention to detail.
            </p>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              Whether it&apos;s coordinating a major event, managing urgent business errands, or
              overseeing project tasks, our team ensures everything runs smoothly from start to finish.
            </p>

            <div className="bg-linear-to-br from-[#1e3a5f]/5 to-[#f97316]/5 rounded-2xl p-6 border border-[#1e3a5f]/10">
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-3">Custom Solutions for Every Need</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every organisation operates differently. That&apos;s why our services are designed to be
                flexible, responsive, and tailored to your operational needs. From event management to
                contracting and corporate errands, Scotty E&amp;E provides end-to-end support that keeps
                your business running smoothly.
              </p>
            </div>
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
                className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#1e3a5f] mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-500 text-sm leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
