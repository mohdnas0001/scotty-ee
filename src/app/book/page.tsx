"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  MapPin,
  Users,
  Clock,
  Mail,
  Phone,
  User,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const eventTypes = [
  "Corporate Event",
  "Wedding",
  "Conference",
  "Birthday Party",
  "Product Launch",
  "Charity Gala",
  "Other",
];

export default function BookEvent() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    venue: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
            Booking Request Sent!
          </h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Thank you, {formData.name}. We&apos;ve received your event booking
            request and will get back to you within 24 hours.
          </p>
          <Button asChild variant="accent" size="lg">
            <Link href="/">Back to Home</Link>
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">
            Get Started
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mt-3 mb-4">
            Book Your Event
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Fill in the details below and our team will reach out to bring your
            vision to life.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-10"
        >
          {/* Personal Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316]/50 focus:border-[#f97316] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316]/50 focus:border-[#f97316] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 800 000 0000"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316]/50 focus:border-[#f97316] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
                Event Type
              </label>
              <div className="relative">
                <CalendarCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f97316]/50 focus:border-[#f97316] transition-all appearance-none bg-white"
                >
                  <option value="" disabled>
                    Select event type
                  </option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
                Event Date
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f97316]/50 focus:border-[#f97316] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
                Expected Guests
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  name="guestCount"
                  required
                  min="1"
                  value={formData.guestCount}
                  onChange={handleChange}
                  placeholder="e.g. 150"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316]/50 focus:border-[#f97316] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
                Preferred Venue
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  placeholder="City or venue name"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316]/50 focus:border-[#f97316] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
              Additional Details
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your event — theme, special requirements, budget range, etc."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316]/50 focus:border-[#f97316] transition-all resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <Button type="submit" variant="accent" size="lg">
              Submit Booking Request
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
