"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    title: "E-Mail us",
    description: "Write us a E-mail",
    action: "Send a Mail",
    href: "mailto:info@scottyee.com",
  },
  {
    icon: MessageCircle,
    title: "Contact us",
    description: "Speak to us over Whatsapp",
    action: "Message",
    href: "https://wa.me/2348069206814",
  },
  {
    icon: Phone,
    title: "Call us",
    description: "Monday to Friday 8am - 5pm",
    action: "Free Call",
    href: "tel:+2348069206814",
  },
];

export default function CTASection() {
  return (
    <section className="w-full py-24 bg-white" id="contact">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left — heading + map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-gray-600 text-sm font-medium border border-gray-200 mb-5">
              💬 Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-3 leading-tight">
              How to <span className="text-[#f97316] italic">get in<br />touch</span> with us
            </h2>
            <p className="text-gray-500 mb-8">
              Have a question? We&apos;re always here to help.
            </p>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 aspect-4/3">
              <iframe
                title="Scotty E&E location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d7.4898!3d9.0579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba541aaaaab%3A0xa1b2c3d4e5f6a7b8!2sCentral%20Business%20District%2C%20Abuja!5e0!3m2!1sen!2sng!4v1697000000000!5m2!1sen!2sng"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right — contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {contactCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
              >
                <div className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5 text-[#1e3a5f]" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-1">{card.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{card.description}</p>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e3a5f] text-white text-sm font-medium rounded-lg hover:bg-[#162d4a] transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                  {card.action}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
