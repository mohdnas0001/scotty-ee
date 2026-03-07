"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Users, Award, Target, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "Scott Anderson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "With over 15 years of experience in event management, Scott founded Scotty E & E with a vision to create unforgettable experiences.",
  },
  {
    name: "Emily Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    description: "Emily brings creative vision and artistic excellence to every event, ensuring unique and memorable experiences.",
  },
  {
    name: "Michael Roberts",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    description: "Michael&apos;s expertise in logistics ensures flawless execution of events of any scale and complexity.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We pour our hearts into every event, treating each project as if it were our own celebration.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every detail, never settling for anything less than extraordinary.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, turning their vision into reality through partnership.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We constantly push boundaries to create unique and memorable event experiences.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#1e3a5f] to-[#0f172a]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Creating Moments That{" "}
              <span className="text-[#f97316]">Last Forever</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Scotty E & E is a premier event management company dedicated to
              transforming your vision into extraordinary experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mt-3 mb-6">
                A Decade of Excellence in Event Management
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2015, Scotty E & E began with a simple mission: to create
                events that leave lasting impressions. What started as a small team
                with big dreams has grown into one of the most trusted names in the
                event management industry.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our journey has been marked by countless successful events, from
                intimate weddings to grand corporate galas. We&apos;ve built our
                reputation on creativity, attention to detail, and an unwavering
                commitment to exceeding expectations.
              </p>
              <Button asChild variant="accent" size="lg">
                <Link href="/book">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop"
                  alt="Event planning team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#f97316] text-white p-8 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-sm uppercase tracking-wider">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mt-3 mb-5">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mt-3 mb-5">
              Meet the Experts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our talented team brings together decades of experience in event
              planning, design, and execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#f97316] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let&apos;s create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="accent" size="lg">
                <Link href="/book">
                  Book Your Event
                </Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
