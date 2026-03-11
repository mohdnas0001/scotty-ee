"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "New Faces New Voices", logo: null },
  { name: "Airstream Nigeria Ltd", logo: "/logo/aasl-logo.svg" },
  { name: "Deiykeman", logo: null },
  { name: "Akwa Ibom State Council of Supreme Traditional Rulers", logo: null },
];

export default function PartnersSection() {
  return (
    <section className="w-full py-24 bg-white" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">
            Partners
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3 mb-5">
            Organisations We Work With
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We are proud to collaborate with organisations and partners who share our commitment
            to excellence. Our partnerships allow us to deliver broader capabilities and stronger
            results for every client we serve.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#f97316]/20 transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-linear-to-br from-[#1e3a5f] to-[#2d4a6f] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden p-2">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-white font-bold text-2xl">
                    {partner.name.charAt(0)}
                  </span>
                )}
              </div>
              <h3 className="text-sm font-semibold text-[#1e3a5f] leading-snug group-hover:text-[#f97316] transition-colors duration-300">
                {partner.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-500 text-base italic"
        >
          Together, we continue to deliver meaningful services and impactful experiences.
        </motion.p>
      </div>
    </section>
  );
}
