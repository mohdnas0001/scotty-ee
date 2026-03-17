"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";

const businessHours = [
  { day: "Monday:", hours: "9:00 AM – 8:00 PM" },
  { day: "Tuesday:", hours: "9:00 AM – 8:00 PM" },
  { day: "Wednesday:", hours: "9:00 AM – 8:00 PM" },
  { day: "Thursday:", hours: "9:00 AM – 8:00 PM" },
  { day: "Friday:", hours: "9:00 AM – 8:00 PM" },
  { day: "Saturday:", hours: "10:00 AM – 6:00 PM" },
  { day: "Sunday:", hours: "10:00 AM – 6:00 PM" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const text = `Hi, I'm ${formData.firstName} ${formData.lastName}.%0A%0AEmail: ${formData.email}%0APhone: ${formData.telephone}%0A%0A${formData.message}`;
    window.open(`https://wa.me/2348069206814?text=${text}`, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        {/* Decorative diagonal blurs */}
        <div className="absolute top-16 right-10 w-125 h-28 bg-[#1e3a5f]/30 rounded-full blur-2xl rotate-[-55deg] pointer-events-none" />
        <div className="absolute top-52 right-0 w-100 h-24 bg-[#f97316]/25 rounded-full blur-2xl rotate-[-55deg] pointer-events-none" />
        <div className="absolute bottom-10 right-32 w-80 h-20 bg-[#1e3a5f]/20 rounded-full blur-2xl rotate-[-55deg] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-105">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm md:text-base font-medium text-[#1e3a5f]/70 tracking-wide mb-4">
                Get in Touch
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.15] font-bold mb-6">
                <span className="text-[#f97316]">Contact</span>{" "}
                <span className="text-[#1e3a5f]">
                  Scotty E&amp;E — Reliable Business Support
                </span>
              </h1>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg mb-10">
                Have a question, request, or looking for the right service?
                We&apos;re here to support you — with personal care, clear
                communication, and reliable service. Reach out today and
                let&apos;s see how we can assist you.
              </p>
              <Button
                asChild
                variant="accent"
                size="lg"
                className="rounded-full px-8 py-6 text-base"
              >
                <a href="#contact-form">
                  Send us a message
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>

            {/* Right: empty — decorative blurs fill this space */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section
        id="contact-form"
        className="py-20 bg-gray-50/60 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8">
                Contact Us
              </h2>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">
                  E-Mail
                </h3>
                <a
                  href="mailto:info@scottyee.com"
                  className="text-gray-500 hover:text-[#f97316] transition-colors"
                >
                  info@scottyee.com
                </a>
              </div>

              <div className="mb-10">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">
                  Whatsapp
                </h3>
                <a
                  href="https://wa.me/2348069206814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#f97316] transition-colors"
                >
                  +234 806 920 6814
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-3">
                  Social Media
                </h3>
                <div className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#f97316] transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#f97316] transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8">
                Write Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-500 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-gray-300 bg-transparent py-2.5 text-[#1e3a5f] placeholder:text-gray-300 focus:border-[#f97316] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full border-b border-gray-300 bg-transparent py-2.5 text-[#1e3a5f] placeholder:text-gray-300 focus:border-[#f97316] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-500 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-gray-300 bg-transparent py-2.5 text-[#1e3a5f] placeholder:text-gray-300 focus:border-[#f97316] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-500 mb-1.5">
                    Telephone
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 bg-transparent py-2.5 text-[#1e3a5f] placeholder:text-gray-300 focus:border-[#f97316] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-500 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full border-b border-gray-300 bg-transparent py-2.5 text-[#1e3a5f] placeholder:text-gray-400 focus:border-[#f97316] focus:outline-none transition-colors resize-y"
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="rounded-full bg-[#1e3a5f] hover:bg-[#162d4a] text-white px-8"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map + Location Card Section */}
      <section className="relative">
        {/* Full-width Map */}
        <div className="w-full h-125">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1!2d7.49!3d9.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDMnMDAuMCJOIDfCsDI5JzI0LjAiRQ!5e0!3m2!1sen!2sng!4v1710000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Scotty E&E Location"
          />
        </div>

        {/* Overlapping Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute top-8 left-4 sm:left-8 lg:left-16 bg-white rounded-2xl shadow-xl p-8 sm:p-10 max-w-md z-10"
        >
          <h3 className="text-xl font-bold text-[#1e3a5f] mb-1">Location</h3>
          <p className="text-gray-500 mb-6">We operate throughout Nigeria</p>

          <div className="mb-8">
            <h4 className="text-sm font-semibold text-[#1e3a5f] mb-3">
              Available :
            </h4>
            <div className="space-y-1.5">
              {businessHours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="font-medium text-[#1e3a5f]">
                    {item.day}
                  </span>
                  <span className="text-gray-500">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <Button
            asChild
            variant="default"
            size="lg"
            className="rounded-full bg-[#1e3a5f] hover:bg-[#162d4a] text-white px-8 w-full sm:w-auto"
          >
            <Link href="#contact-form">Get in Touch</Link>
          </Button>
        </motion.div>
      </section>
    </>
  );
}
