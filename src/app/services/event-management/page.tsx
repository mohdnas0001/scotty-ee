"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Users,
  MapPin,
  Lightbulb,
  Music,
  Clock,
  CheckCircle2,
  Star,
} from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Full Event Planning & Coordination",
    description:
      "From concept to cleanup, we manage every phase of your event with military-grade precision and creative flair.",
  },
  {
    icon: MapPin,
    title: "Venue Selection & Vendor Management",
    description:
      "We scout, negotiate, and secure the best venues and vendors — saving you time and money.",
  },
  {
    icon: Users,
    title: "Guest List & RSVP Management",
    description:
      "Seamless guest tracking, personalized invitations, and real-time RSVP management for any scale.",
  },
  {
    icon: Lightbulb,
    title: "Decoration, Lighting & Sound",
    description:
      "We transform spaces with stunning decor, professional lighting, and crystal-clear audio setups.",
  },
  {
    icon: Clock,
    title: "Day-of Execution & Live Coordination",
    description:
      "Our on-site team ensures everything runs on time with live communication and backup plans.",
  },
  {
    icon: Music,
    title: "Budget Planning & Timeline Management",
    description:
      "Transparent budget breakdowns and detailed timelines keep you informed and in control.",
  },
];

const eventTypes = [
  {
    title: "Corporate Events",
    items: ["Conferences & Seminars", "Product Launches", "Award Ceremonies", "Team Building Events"],
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&h=400&fit=crop",
  },
  {
    title: "Social Events",
    items: ["Weddings & Engagements", "Birthday Celebrations", "Anniversary Parties", "Holiday Galas"],
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=400&fit=crop",
  },
  {
    title: "Specialized Events",
    items: ["Exhibition Booths", "Cultural Festivals", "VIP Private Events", "Charity Fundraisers"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=400&fit=crop",
  },
];

export default function EventManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute top-16 right-10 w-125 h-28 bg-[#f97316]/20 rounded-full blur-2xl rotate-[-55deg] pointer-events-none" />
        <div className="absolute top-52 right-0 w-100 h-24 bg-[#1e3a5f]/20 rounded-full blur-2xl rotate-[-55deg] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#f97316] transition-colors mb-6"
              >
                ← Back to Services
              </Link>
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#f97316] bg-[#f97316]/10 rounded-full px-3 py-1.5 mb-4">
                <CalendarCheck className="w-3.5 h-3.5" />
                Event Management
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.25rem] leading-[1.15] font-bold mb-6">
                <span className="text-[#f97316]">Flawless Events,</span>
                <br />
                <span className="text-[#1e3a5f]">Unforgettable Moments</span>
              </h1>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg mb-10">
                Whether it&apos;s a corporate conference for 500 or an intimate
                wedding for 50, Scotty E&amp;E handles every detail — from
                concept to cleanup — so you can be fully present in the moment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="rounded-full px-8"
                >
                  <Link href="/book">
                    Plan My Event
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                >
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
                  alt="Event Management"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f97316] flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1e3a5f]">200+</div>
                  <div className="text-xs text-gray-400">Events Delivered</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              What We Handle
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              End-to-end event management — we don&apos;t just plan events, we
              engineer experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 flex items-center justify-center mb-5 group-hover:bg-[#f97316]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#f97316]" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Events We Specialize In
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Whatever the occasion, we bring the vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1e3a5f]/70 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white">
                    {type.title}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2.5">
                    {type.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#f97316] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Plan Your Next Event
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
              From idea to execution — we make it effortless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="accent"
                size="lg"
                className="rounded-full px-8"
              >
                <Link href="/book">Book Now</Link>
              </Button>
              <Button
                asChild
                variant="outlineLight"
                size="lg"
                className="rounded-full px-8"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
