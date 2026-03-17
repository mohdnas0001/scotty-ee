"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question: "What types of events do you manage?",
    answer:
      "We manage a wide range of events including corporate conferences, product launches, weddings, parties, charity galas, and award ceremonies. Our team tailors every event to your specific needs and vision.",
  },
  {
    question: "Can I request both errand and event services at the same time?",
    answer:
      "Absolutely! Many of our clients use both services simultaneously. We can coordinate logistics, errands, and event management under a single project to ensure seamless delivery.",
  },
  {
    question: "How far in advance should I book your services?",
    answer:
      "We recommend booking at least 2–4 weeks in advance for errands and contracting services, and 4–8 weeks for event management. However, we also handle urgent requests depending on availability.",
  },
  {
    question: "What makes Scotty E&E different from other service providers?",
    answer:
      "Our commitment to reliability, attention to detail, and client-first approach sets us apart. With over 4 years of experience and 100% client satisfaction, we treat every task with the same level of professionalism.",
  },
  {
    question: "Is your team available on weekends or outside regular business hours?",
    answer:
      "Yes, our team is available outside regular business hours and on weekends for urgent tasks, events, and time-sensitive errands. We understand that business doesn't always operate on a 9-to-5 schedule.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left — image + WhatsApp badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-4/5 relative bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop"
                alt="Support team member"
                fill
                className="object-cover"
              />
            </div>
            {/* WhatsApp badge */}
            <a
              href="https://wa.me/2348069206814"
              target="_blank"
              rel="noreferrer"
              className="absolute top-4 right-4 w-12 h-12 bg-[#1e3a5f] rounded-full flex items-center justify-center shadow-lg hover:bg-[#f97316] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </motion.div>

          {/* Right — FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-gray-600 text-sm font-medium border border-gray-200 mb-5">
              ⚙️ FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-2">
              Frequently
              <br />
              asked <span className="text-[#f97316] italic">questions</span>
            </h2>

            <div className="mt-8 space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-medium text-[#1e3a5f] leading-snug">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-gray-400 shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-400 shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
