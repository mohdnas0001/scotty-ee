"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Star, Users, ChevronRight, Sparkles, ArrowUpRight, Calendar, TrendingUp, Award, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* ─── DATA ─────────────────────────────────────────────────────────────────── */

const FILTERS = ["All", "Corporate", "Wedding", "Conference", "Celebration"];

const featuredPackages = [
  {
    id: "grand-ballroom-gala",
    type: "Corporate",
    name: "Grand Ballroom Gala",
    tagline: "White-glove precision for the elite",
    location: "Abuja, FCT",
    rating: 4.9,
    reviews: 32,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop",
    price: "₦850,000",
    isTrending: true,
    isNew: false,
  },
  {
    id: "luxury-wedding",
    type: "Wedding",
    name: "Luxury Wedding Experience",
    tagline: "Your fairytale, flawlessly executed",
    location: "Lagos, Lagos",
    rating: 4.8,
    reviews: 48,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    price: "₦1,200,000",
    isTrending: false,
    isNew: false,
  },
  {
    id: "conference-summit",
    type: "Conference",
    name: "Executive Summit Package",
    tagline: "Where leaders meet and ideas ignite",
    location: "Port Harcourt, Rivers",
    rating: 4.7,
    reviews: 19,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    price: "₦450,000",
    isTrending: true,
    isNew: true,
  },
  {
    id: "birthday-celebration",
    type: "Celebration",
    name: "Premium Birthday Bash",
    tagline: "Every year deserves a masterpiece moment",
    location: "Abuja, FCT",
    rating: 4.6,
    reviews: 27,
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
    price: "₦280,000",
    isTrending: false,
    isNew: true,
  },
];

const destinations = [
  { city: "FCT", count: 24, image: "https://images.unsplash.com/photo-1580867114249-ad8cd9e82ac6?w=900&h=600&fit=crop" },
  { city: "Lagos", count: 18, image: "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?w=600&h=400&fit=crop" },
  { city: "Port Harcourt", count: 11, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop" },
  { city: "Enugu", count: 9, image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop" },
];

const stats = [
  { icon: Award, value: "500+", label: "Events Executed" },
  { icon: Users, value: "12,000+", label: "Happy Guests" },
  { icon: Star, value: "4.9", label: "Avg Rating" },
  { icon: Clock, value: "8 yrs", label: "Of Excellence" },
];

const typeColors: Record<string, string> = {
  Corporate:   "bg-sky-500/20 text-sky-300 border-sky-500/30",
  Wedding:     "bg-rose-500/20 text-rose-300 border-rose-500/30",
  Conference:  "bg-violet-500/20 text-violet-300 border-violet-500/30",
  Celebration: "bg-amber-500/20 text-amber-300 border-amber-500/30",
};

/* ─── PAGE ──────────────────────────────────────────────────────────────────── */

export default function BookPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState({ location: "", date: "", guests: "" });
  const [glow, setGlow] = useState(false);

  const filtered =
    activeFilter === "All"
      ? featuredPackages
      : featuredPackages.filter((p) => p.type === activeFilter);

  return (
    <div className="min-h-screen bg-[#070d14]">

      {/* ──────────────── HERO ──────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">

        {/* Ambient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <div className="absolute -top-40 -left-40 w-175 h-175 rounded-full bg-sky-500/8 blur-[140px]" />
          <div className="absolute top-1/3 -right-40 w-125 h-125 rounded-full bg-indigo-600/8 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-100 h-100 rounded-full bg-violet-700/6 blur-[100px]" />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm text-white/60"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            Trusted by 500+ events across Nigeria
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
          >
            Craft Events That{" "}
            <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #38bdf8, #818cf8, #38bdf8)", backgroundSize: "200%" }}>
              Live Forever
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="text-white/45 text-lg max-w-lg mb-12 leading-relaxed"
          >
            Nigeria&apos;s most exclusive event packages — from grand corporate galas to intimate celebrations, crafted to perfection.
          </motion.p>

          {/* Glassmorphism search */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-3xl rounded-2xl overflow-hidden transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(32px)",
              border: glow ? "1px solid rgba(56,189,248,0.35)" : "1px solid rgba(255,255,255,0.09)",
              boxShadow: glow ? "0 0 60px rgba(56,189,248,0.1)" : "none",
            }}
          >
            <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-white/8">
              {[
                { label: "Where", icon: MapPin, type: "text", key: "location", placeholder: "City or venue" },
                { label: "When", icon: Calendar, type: "date", key: "date", placeholder: "" },
                { label: "Guests", icon: Users, type: "number", key: "guests", placeholder: "How many?" },
              ].map(({ label, icon: Icon, type, key, placeholder }) => (
                <div key={key} className="flex-1 flex items-center gap-3 px-5 py-4">
                  <Icon className="w-4 h-4 text-sky-400 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white/35 text-[10px] font-bold uppercase tracking-[0.18em] mb-0.5">{label}</p>
                    <input
                      type={type}
                      value={search[key as keyof typeof search]}
                      onChange={(e) => setSearch({ ...search, [key]: e.target.value })}
                      onFocus={() => setGlow(true)}
                      onBlur={() => setGlow(false)}
                      placeholder={placeholder}
                      className="w-full bg-transparent text-white text-sm placeholder:text-white/25 outline-none scheme-dark"
                    />
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-center p-3 sm:p-2.5">
                <button className="w-full sm:w-auto px-6 py-3 font-bold text-sm text-white rounded-xl cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
                  style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)", boxShadow: "0 4px 20px rgba(14,165,233,0.3)" }}>
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>
            </div>
          </motion.div>

          {/* Popular tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-6"
          >
            <span className="text-white/25 text-xs">Trending:</span>
            {["Abuja Wedding", "Corporate Gala", "Lagos Launch", "Birthday 200 guests"].map((tag) => (
              <button key={tag} className="px-3 py-1 rounded-full text-xs text-white/40 cursor-pointer transition-colors hover:text-sky-300 hover:border-sky-500/40"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                {tag}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-9 rounded-full flex items-start justify-center pt-1.5"
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <div className="w-1 h-2 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ──────────────── STATS ──────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.015)" }}>
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-1.5"
              >
                <Icon className="w-5 h-5 text-sky-400 mb-1" />
                <span className="text-3xl font-black text-white">{value}</span>
                <span className="text-white/35 text-xs uppercase tracking-widest">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── PACKAGES ──────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-sky-400 text-xs font-bold uppercase tracking-[0.25em] mb-1.5">Curated for You</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Featured Packages</h2>
          </div>
          <Link href="/book" className="flex items-center gap-1 text-white/40 hover:text-sky-400 text-sm transition-colors group">
            View all
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
              style={
                activeFilter === f
                  ? { background: "linear-gradient(135deg,#0ea5e9,#6366f1)", color: "#fff", border: "1px solid transparent", boxShadow: "0 4px 16px rgba(14,165,233,0.3)" }
                  : { background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.09)" }
              }
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards — bento-style: first card is large */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]"
          >
            {filtered.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={i === 0 && filtered.length > 1 ? "sm:col-span-2 sm:row-span-2" : ""}
              >
                <Link
                  href={`/book/${pkg.id}`}
                  className="group relative flex flex-col rounded-2xl overflow-hidden h-full cursor-pointer"
                  style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {/* Full-bleed image */}
                  <div className="absolute inset-0">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover opacity-55 group-hover:opacity-75 group-hover:scale-[1.04] transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                  </div>

                  {/* Top badges */}
                  <div className="relative z-10 flex items-start justify-between p-4">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-md ${typeColors[pkg.type] ?? "bg-white/10 text-white/70 border-white/20"}`}>
                      {pkg.type}
                    </span>
                    <div className="flex gap-1.5">
                      {pkg.isTrending && (
                        <span className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 backdrop-blur-md">
                          <TrendingUp className="w-3 h-3" />Hot
                        </span>
                      )}
                      {pkg.isNew && (
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                          New
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="relative z-10 mt-auto p-5">
                    <p className="text-white/40 text-xs mb-1 italic">{pkg.tagline}</p>
                    <h3 className={`font-black text-white leading-tight mb-3 ${i === 0 && filtered.length > 1 ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"}`}>
                      {pkg.name}
                    </h3>
                    <div className="flex items-end justify-between">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-sky-400" />
                          <span className="text-white/45 text-xs">{pkg.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                          <span className="text-white/60 text-xs font-semibold">{pkg.rating}</span>
                          <span className="text-white/25 text-xs">({pkg.reviews})</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white/30 text-[11px]">from</p>
                        <p className="text-white font-black text-xl">{pkg.price}</p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow button on hover */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1)", boxShadow: "0 4px 14px rgba(14,165,233,0.4)" }}>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ──────────────── DESTINATIONS ──────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-8">
          <p className="text-sky-400 text-xs font-bold uppercase tracking-[0.25em] mb-1.5">Where We Operate</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Popular Destinations</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[200px]">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.city}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              viewport={{ once: true }}
              className={i === 0 ? "row-span-2" : ""}
            >
              <Link
                href={`/book?location=${encodeURIComponent(dest.city)}`}
                className="group relative block rounded-2xl overflow-hidden h-full"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <Image src={dest.image} alt={dest.city} fill className="object-cover opacity-65 group-hover:opacity-85 group-hover:scale-[1.05] transition-all duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/8 transition-colors duration-500" />
                <div className="absolute bottom-4 left-5">
                  <p className="text-white font-black text-xl">{dest.city}</p>
                  <p className="text-white/55 text-sm">{dest.count} packages</p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300"
                  style={{ background: "rgba(14,165,233,0.25)", backdropFilter: "blur(8px)", border: "1px solid rgba(56,189,248,0.3)" }}>
                  <ArrowUpRight className="w-4 h-4 text-sky-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──────────────── CTA BANNER ──────────────── */}
      <section className="mx-4 sm:mx-6 lg:mx-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden py-20 px-8 text-center"
          style={{ background: "linear-gradient(120deg, #0c1d35 0%, #0f1a2e 40%, #0e1628 100%)", border: "1px solid rgba(56,189,248,0.12)" }}>
          {/* Glowing line top */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-sky-400/50 to-transparent" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full bg-sky-500/5 blur-3xl" />
          </div>
          <div className="relative max-w-xl mx-auto">
            <p className="text-sky-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">Get Started</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Have a custom vision in mind?</h2>
            <p className="text-white/40 mb-8 leading-relaxed">
              Our event architects turn your ideas into experiences people talk about for years.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-200 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #0ea5e9, #6366f1)", boxShadow: "0 8px 32px rgba(14,165,233,0.3)" }}
            >
              Talk to Our Team
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
