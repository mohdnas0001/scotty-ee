"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Star,
  Check,
  Phone,
  Mail,
  ArrowRight,
  Bed,
  Wifi,
  Car,
  ChefHat,
  Shield,
  Coffee,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";

/* ─── TYPES ──────────────────────────────────────────────────────────────── */
interface RoomOption {
  id: string;
  tier: "luxury" | "basic";
  label: string;
  price: number;
  priceLabel: string;
  perGuest: string;
  guests: string;
  description: string;
  features: string[];
  image: string;
  available: boolean;
}

interface ApartmentCategory {
  id: string;
  name: string;
  guests: string;
  options: RoomOption[];
}

/* ─── DATA ────────────────────────────────────────────────────────────────── */
const apartmentCategories: ApartmentCategory[] = [
  {
    id: "4-bedroom",
    name: "4-Bedroom",
    guests: "4 – 8 Guests",
    options: [
      {
        id: "4br-luxury",
        tier: "luxury",
        label: "Luxury 4-Bedroom",
        price: 500000,
        priceLabel: "₦500,000",
        perGuest: "₦62.5K – ₦125K est. per guest",
        guests: "4 – 8 Guests",
        description: "Premium furnished apartment with high-end finishes, private pool & concierge access.",
        features: [
          "4 en-suite bedrooms with king beds",
          "Designer-furnished living & dining",
          "Fully equipped luxury kitchen",
          "Private pool & outdoor terrace",
          "Dedicated gigabit Wi-Fi",
          "Smart home automation & AC",
          "Daily housekeeping & laundry",
          "Private parking (2 spaces)",
        ],
        image: "/rooms-images/room-3.jpeg",
        available: true,
      },
      {
        id: "4br-basic",
        tier: "basic",
        label: "Basic 4-Bedroom",
        price: 280000,
        priceLabel: "₦280,000",
        perGuest: "₦35K – ₦70K est. per guest",
        guests: "4 – 8 Guests",
        description: "Comfortable and functional apartment ideal for groups on a shared budget.",
        features: [
          "4 furnished bedrooms",
          "Standard living & dining area",
          "Equipped kitchen",
          "2 shared bathrooms",
          "High-speed Wi-Fi",
          "Air conditioning",
          "Weekly housekeeping",
          "Shared compound parking",
        ],
        image: "/rooms-images/room-1.jpeg",
        available: true,
      },
    ],
  },
  {
    id: "3-bedroom",
    name: "3-Bedroom",
    guests: "3 – 6 Guests",
    options: [
      {
        id: "3br-luxury",
        tier: "luxury",
        label: "Luxury 3-Bedroom",
        price: 380000,
        priceLabel: "₦380,000",
        perGuest: "₦63K – ₦127K est. per guest",
        guests: "3 – 6 Guests",
        description: "Stylishly appointed apartment with premium amenities and open-plan living.",
        features: [
          "3 en-suite bedrooms",
          "Premium open-plan living",
          "Fully equipped luxury kitchen",
          "Balcony or private garden",
          "Dedicated gigabit Wi-Fi",
          "Smart AC & home automation",
          "Daily housekeeping",
          "Private parking (1–2 spaces)",
        ],
        image: "/rooms-images/room-4.jpeg",
        available: true,
      },
      {
        id: "3br-basic",
        tier: "basic",
        label: "Basic 3-Bedroom",
        price: 180000,
        priceLabel: "₦180,000",
        perGuest: "₦30K – ₦60K est. per guest",
        guests: "3 – 6 Guests",
        description: "Practical and well-maintained apartment, great value for small conference groups.",
        features: [
          "3 furnished bedrooms",
          "Comfortable living room",
          "Standard kitchen",
          "2 bathrooms",
          "High-speed Wi-Fi",
          "Air conditioning",
          "Weekly housekeeping",
          "Shared parking",
        ],
        image: "/rooms-images/room-2.jpeg",
        available: true,
      },
    ],
  },
  {
    id: "2-bedroom",
    name: "2-Bedroom",
    guests: "2 – 4 Guests",
    options: [
      {
        id: "2br-luxury",
        tier: "luxury",
        label: "Luxury 2-Bedroom",
        price: 240000,
        priceLabel: "₦240,000",
        perGuest: "₦60K – ₦120K est. per guest",
        guests: "2 – 4 Guests",
        description: "Elegant and intimate apartment with superior finishes for small groups or pairs.",
        features: [
          "2 en-suite bedrooms",
          "Stylish lounge & dining area",
          "Premium kitchen appliances",
          "Bathtub & rain shower",
          "Dedicated gigabit Wi-Fi",
          "Smart AC & blackout blinds",
          "Daily housekeeping",
          "Private parking",
        ],
        image: "/rooms-images/room-5.jpeg",
        available: true,
      },
      {
        id: "2br-basic",
        tier: "basic",
        label: "Basic 2-Bedroom",
        price: 120000,
        priceLabel: "₦120,000",
        perGuest: "₦30K – ₦60K est. per guest",
        guests: "2 – 4 Guests",
        description: "Clean, comfortable and affordable option for delegates sharing accommodation.",
        features: [
          "2 furnished bedrooms",
          "Cosy sitting area",
          "Standard kitchen",
          "1–2 bathrooms",
          "High-speed Wi-Fi",
          "Air conditioning",
          "Bi-weekly housekeeping",
          "Shared compound",
        ],
        image: "/rooms-images/room-7.jpeg",
        available: true,
      },
    ],
  },
  {
    id: "studio",
    name: "Studio",
    guests: "1 – 2 Guests",
    options: [
      {
        id: "studio-luxury",
        tier: "luxury",
        label: "Luxury Studio",
        price: 120000,
        priceLabel: "₦120,000",
        perGuest: "₦60K – ₦120K est. per guest",
        guests: "1 – 2 Guests",
        description: "A beautifully designed studio with premium furnishings and a premium address.",
        features: [
          "King-size bed with luxury linens",
          "Designer furnishings & décor",
          "Premium kitchenette",
          "Rainfall shower & soaking tub",
          "Dedicated gigabit Wi-Fi",
          "Smart AC & mood lighting",
          "Daily housekeeping",
          "Work desk & ergonomic chair",
        ],
        image: "/rooms-images/room-6.jpeg",
        available: true,
      },
      {
        id: "studio-basic",
        tier: "basic",
        label: "Basic Studio",
        price: 60000,
        priceLabel: "₦60,000",
        perGuest: "₦30K – ₦60K est. per guest",
        guests: "1 – 2 Guests",
        description: "Simple, tidy and well-connected studio for solo attendees or travel pairs.",
        features: [
          "Double or queen bed",
          "Compact kitchenette",
          "Functional workspace",
          "Private bathroom & shower",
          "High-speed Wi-Fi",
          "Air conditioning",
          "Weekly housekeeping",
          "Access to shared lounge",
        ],
        image: "/rooms-images/room-8.jpeg",
        available: true,
      },
    ],
  },
];

const amenityIcons = [
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Car, label: "Parking" },
  { icon: ChefHat, label: "Kitchen" },
  { icon: Shield, label: "Security" },
  { icon: Coffee, label: "Breakfast" },
  { icon: Bed, label: "Quality Beds" },
];

/* ─── SUB-COMPONENTS ─────────────────────────────────────────────────────── */

function TierBadge({ tier }: { tier: "luxury" | "basic" }) {
  return tier === "luxury" ? (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-400/15 text-amber-300 border border-amber-400/25">
      <Star className="w-3 h-3 fill-amber-300" />
      LUXURY
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-sky-400/15 text-sky-300 border border-sky-400/25">
      BASIC
    </span>
  );
}

function RoomCard({ room, index }: { room: RoomOption; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: room.tier === "luxury"
          ? "1px solid rgba(251,191,36,0.2)"
          : "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={room.image}
          alt={room.label}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#070d14] via-[#070d14]/30 to-transparent" />
        <div className="absolute top-3 left-3">
          <TierBadge tier={room.tier} />
        </div>
        {!room.available && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white/70 font-bold text-sm uppercase tracking-widest">Sold Out</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 className="text-white font-bold text-lg leading-snug mb-1">{room.label}</h3>
          <div className="flex items-center gap-1.5 text-white/40 text-xs mb-3">
            <Users className="w-3.5 h-3.5" />
            {room.guests}
          </div>
          <p className="text-white/55 text-sm leading-relaxed">{room.description}</p>
        </div>

        {/* Pricing */}
        <div
          className="rounded-xl px-4 py-3 mt-1"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-end justify-between">
            <div>
              <p className="text-white/30 text-[10px] uppercase tracking-widest mb-0.5">Total · 4 Nights</p>
              <p className={`text-2xl font-black ${room.tier === "luxury" ? "text-amber-300" : "text-sky-300"}`}>
                {room.priceLabel}
              </p>
            </div>
            <div className="text-right">
              <p className="text-white/30 text-[10px] mb-0.5">Per apartment</p>
              <p className="text-white/50 text-xs">{room.perGuest}</p>
            </div>
          </div>
        </div>

        {/* Features toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-between w-full text-white/40 hover:text-white/70 transition-colors text-xs font-semibold uppercase tracking-wider pt-1"
        >
          <span>Included Features</span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden space-y-1.5"
            >
              {room.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-white/60 text-sm">
                  <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* CTA */}
        <a
          href="https://wa.me/2348135420713"
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] ${!room.available ? "opacity-40 pointer-events-none" : ""}`}
          style={
            room.tier === "luxury"
              ? { background: "linear-gradient(135deg, #f59e0b, #d97706)", boxShadow: "0 4px 18px rgba(245,158,11,0.25)", color: "#fff" }
              : { background: "linear-gradient(135deg, #0ea5e9, #6366f1)", boxShadow: "0 4px 18px rgba(14,165,233,0.25)", color: "#fff" }
          }
        >
          Book Now
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

/* ─── PAGE ────────────────────────────────────────────────────────────────── */
export default function BookPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const displayedCategories =
    activeCategory === "all"
      ? apartmentCategories
      : apartmentCategories.filter((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-[#070d14]">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-175 h-100 rounded-full bg-amber-500/6 blur-[120px]" />
          <div className="absolute top-1/2 left-0 w-75 h-75 rounded-full bg-sky-500/6 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "36px 36px" }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white/60 mb-6"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            NBA Annual General Conference 2026 · Accommodation by Scotty E&amp;E
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-5"
          >
            Conference 2026
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #f59e0b, #f97316, #f59e0b)", backgroundSize: "200%" }}
            >
              Group Accommodation Booking
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22 }}
            className="text-white/45 text-lg max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            4-Day Stay · All-Inclusive Pricing · Apartments for 1–8 guests · Luxury &amp; Basic tiers available
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-amber-400/80 text-sm font-semibold"
          >
            Options from ₦60,000 · 4 Nights · 11 Accommodation Options Available
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-8"
          >
            {[
              { label: "8 Apartments", sub: "Luxury & Basic" },
              { label: "3 Hotel Rooms", sub: "Single & Group" },
              { label: "4 Nights", sub: "All-Inclusive" },
              { label: "₦60K+", sub: "Starting Price" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center px-5 py-3 rounded-xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="text-white font-black text-base">{s.label}</span>
                <span className="text-white/35 text-xs">{s.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── AMENITIES STRIP ───────────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.015)" }}>
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {amenityIcons.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/40">
                <Icon className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PACKAGES HIGHLIGHT ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em] mb-2">
            NBA AGC 2026 · Official Packages
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Two Packages. One Goal.
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Scotty E&amp;E has curated two package types to suit every legal professional
            attending the NBA Annual General Conference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Odugwu */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden p-8 flex flex-col gap-5"
            style={{ background: "linear-gradient(135deg, #0c1a2e 0%, #0a1628 100%)", border: "1px solid rgba(251,191,36,0.2)" }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
            <div>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em]">The Odugwu Package</span>
              <h3 className="text-2xl font-black text-white mt-2 mb-1">Privacy. Prestige. Peace of Mind.</h3>
              <p className="text-white/45 text-sm leading-relaxed">
                Executive single occupancy for legal professionals who thrive in personal space.
                One person. One room. Unlimited comfort.
              </p>
            </div>
            <ul className="space-y-2.5">
              {[
                "Private en-suite accommodation",
                "Individual room with premium amenities",
                "High-speed WiFi connectivity",
                "Netflix entertainment access",
                "24/7 security",
                "Complimentary breakfast",
                "Airport transfer options available",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-white/65 text-sm">
                  <Check className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/2348135420713"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white hover:scale-[1.02] transition-transform"
              style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)", boxShadow: "0 4px 20px rgba(245,158,11,0.3)" }}
            >
              Book Odugwu Package
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Friendship */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden p-8 flex flex-col gap-5"
            style={{ background: "linear-gradient(135deg, #0c1a2e 0%, #0a1628 100%)", border: "1px solid rgba(56,189,248,0.2)" }}
          >
            <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />
            <div>
              <span className="text-sky-400 text-xs font-bold uppercase tracking-[0.2em]">The Friendship Package</span>
              <h3 className="text-2xl font-black text-white mt-2 mb-1">Because Great Memories Are Made Together</h3>
              <p className="text-white/45 text-sm leading-relaxed">
                Share the space. Split the cost. Elevate the experience.{" "}
                <span className="text-sky-400 font-semibold">Starting at ₦23,500 per person.</span>
              </p>
            </div>
            <ul className="space-y-2.5">
              {[
                "Flexible arrangements for groups of 2, 4, or 6",
                "Spacious shared lounge area",
                "Private bedrooms with quality furnishing",
                "High-speed WiFi connectivity",
                "Netflix entertainment access",
                "24/7 security",
                "Complimentary breakfast",
                "Ideal for law firms and associate groups",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-white/65 text-sm">
                  <Check className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div
              className="rounded-xl p-4 text-sm"
              style={{ background: "rgba(56,189,248,0.06)", border: "1px solid rgba(56,189,248,0.12)" }}
            >
              <p className="text-white/60 font-semibold mb-2 text-xs uppercase tracking-wider">Choose Your Configuration</p>
              <div className="space-y-1.5">
                {[
                  "Group of 6 → 3-Bedroom Apartment",
                  "Group of 4 → 2-Bedroom Apartment",
                  "Group of 2 → 1-Bedroom / Single Room",
                ].map((c) => (
                  <div key={c} className="flex items-center gap-2 text-white/60 text-xs">
                    <Users className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
            <a
              href="https://wa.me/2348135420713"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white hover:scale-[1.02] transition-transform"
              style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)", boxShadow: "0 4px 20px rgba(14,165,233,0.3)" }}
            >
              Book Friendship Package
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── ACCOMMODATION LISTINGS ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em] mb-2">
            Find the Right Stay for Your Group
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">Accommodation Packages</h2>
          <p className="text-white/40 text-sm">
            All prices cover the full 4-day conference stay · Luxury &amp; Basic tiers available
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { id: "all", label: "All Options" },
            ...apartmentCategories.map((c) => ({ id: c.id, label: c.name })),
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveCategory(f.id)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
              style={
                activeCategory === f.id
                  ? { background: "linear-gradient(135deg, #f59e0b, #d97706)", color: "#fff", border: "1px solid transparent", boxShadow: "0 4px 16px rgba(245,158,11,0.3)" }
                  : { background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.09)" }
              }
            >
              {f.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {displayedCategories.map((cat) => (
              <div key={cat.id} className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <div>
                    <h3 className="text-white font-black text-xl">{cat.name}</h3>
                    <div className="flex items-center gap-1.5 text-white/35 text-xs mt-0.5">
                      <Users className="w-3 h-3" />
                      {cat.guests}
                    </div>
                  </div>
                  <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {cat.options.map((room, i) => (
                    <RoomCard key={room.id} room={room} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-4 rounded-2xl py-6 px-8"
          style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.12)" }}
        >
          <p className="text-white/50 text-sm leading-relaxed max-w-2xl mx-auto">
            All prices cover the full 4-day conference duration and are inclusive of stated amenities.{" "}
            <span className="text-amber-400 font-semibold">
              Limited availability — early booking is strongly advised.
            </span>
          </p>
        </motion.div>
      </section>

      {/* ── ABOUT SCOTTY E&E ─────────────────────────────────────────────────── */}
      <section
        className="py-16"
        style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">About Scotty E&amp;E Corporate Services</p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl mx-auto mb-6">
              Scotty E&amp;E Corporate Services is a trusted provider of premium corporate solutions,
              specializing in accommodation coordination, event management, and executive logistics
              for Nigeria&apos;s corporate professionals.
            </p>
            <p className="text-white/40 text-sm italic">
              &ldquo;Your Priorities, Our Mission. Making your NBA Conference experience seamless,
              comfortable, and memorable.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT / BOOKING ─────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em] mb-2">Secure Your Reservation Today</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Ready to Book?</h2>
          <p className="text-white/40 max-w-lg mx-auto">
            Reach out to our accommodation team directly to confirm your booking and receive payment details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-7 flex flex-col gap-5"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h3 className="text-white font-bold text-lg">Contact Information</h3>
            <div className="space-y-4">
              {[
                { href: "tel:08135420713", label: "08135420713", color: "amber" },
                { href: "tel:08165208228", label: "08165208228", color: "amber" },
              ].map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.2)" }}
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-sm font-semibold">{p.label}</p>
                  </div>
                </a>
              ))}
              <a
                href="mailto:info@scottyeande.com"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.2)" }}
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-sm font-semibold">info@scottyeande.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* WhatsApp CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl p-7 flex flex-col justify-between overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0c1a2e 0%, #0a1628 100%)", border: "1px solid rgba(245,158,11,0.2)" }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-amber-500/8 blur-3xl pointer-events-none" />
            <div className="relative">
              <h3 className="text-white font-black text-xl mb-3">Book via WhatsApp</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-6">
                Send us a message on WhatsApp for the fastest response. Our accommodation team
                will confirm your booking and send payment details within minutes.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/2348135420713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white hover:scale-[1.02] transition-transform w-full"
                  style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)", boxShadow: "0 4px 20px rgba(245,158,11,0.3)" }}
                >
                  WhatsApp: 08135420713
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/2348165208228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white hover:scale-[1.02] transition-transform w-full"
                  style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)" }}
                >
                  WhatsApp: 08165208228
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-white/25 text-xs mt-8 leading-relaxed"
        >
          Scotty E&amp;E Corporate Services LTD · Your Priorities, Our Mission ·{" "}
          2nd Floor, Ogun State House, Central Business District, Abuja, Nigeria
        </motion.p>
      </section>
    </div>
  );
}

