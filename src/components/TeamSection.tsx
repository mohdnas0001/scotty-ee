"use client";

import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <section className="w-full py-24 bg-[#1e3a5f]" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              The People Behind{" "}
              <span className="text-[#f97316]">the Work</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              At Scotty E&amp;E, our strength lies in the passion and professionalism of our team.
              We are individuals who genuinely love what we do — planning events, solving logistical
              challenges, and supporting businesses with efficiency and care.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-6 italic">
              &ldquo;Because when you truly enjoy your work, it shows in the results.&rdquo;
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              Through collaboration, creativity, and dedication, we transform ideas into carefully
              executed experiences and operational solutions. Our team works closely with every
              client to ensure each project is tailored, thoughtful, and impactful.
            </p>
          </motion.div>

          {/* Right — Values grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {[
              {
                icon: "🤝",
                title: "Collaboration",
                desc: "We work closely with clients and each other to deliver the best results.",
              },
              {
                icon: "💡",
                title: "Creativity",
                desc: "We bring fresh thinking to every project, event, and challenge.",
              },
              {
                icon: "🏆",
                title: "Dedication",
                desc: "We go the extra mile to ensure every project exceeds expectations.",
              },
              {
                icon: "📋",
                title: "Precision",
                desc: "Every detail is planned and executed with care and professionalism.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors duration-300"
              >
                <span className="text-2xl mb-3 block">{value.icon}</span>
                <h4 className="font-bold text-white mb-2">{value.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
