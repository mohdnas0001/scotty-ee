"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Star,
  Users,
  Maximize2,
  Music,
  Utensils,
  Camera,
  Wifi,
  Car,
  Shield,
  Mic,
  Flower,
  CheckCircle,
  ArrowLeft,
  CalendarCheck,
  MessageSquare,
  TrendingUp,
  Projector,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  Loader2,
} from "lucide-react";
import PaystackButton from "@/components/PaystackButton";

/* ─── DATA ──────────────────────────────────────────────────────────────────── */

type Amenity  = { icon: React.ReactNode; label: string };
type Feature  = { icon: React.ReactNode; label: string };
type Tier = {
  id: string;
  name: string;
  price: number;
  capacity: string;
  space: string;
  setup: string;
  slots: number;
  description: string;
  image: string;
  features: Feature[];
};
type Package = {
  name: string;
  city: string;
  state: string;
  address: string;
  rating: number;
  reviews: number;
  type: string;
  typeColor: string;
  description: string;
  images: string[];
  amenities: Amenity[];
  tiers: Tier[];
};

const packages: Record<string, Package> = {
  "grand-ballroom-gala": {
    name: "Grand Ballroom Gala",
    city: "Abuja",
    state: "FCT",
    address: "Plot 234, Central Business District, Abuja, FCT, Nigeria",
    rating: 4.9,
    reviews: 32,
    type: "Corporate",
    typeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    description:
      "Scotty Events & Entertainment's flagship corporate package. The Grand Ballroom Gala is a meticulously curated experience set in one of Abuja's most prestigious venues. From floral arrangements to live entertainment, every detail is handled with white-glove precision for up to 500 guests.",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&h=700&fit=crop",
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
    ],
    amenities: [
      { icon: <Music className="w-4 h-4" />, label: "Live Band" },
      { icon: <Utensils className="w-4 h-4" />, label: "Full Catering" },
      { icon: <Camera className="w-4 h-4" />, label: "Photo & Video" },
      { icon: <Wifi className="w-4 h-4" />, label: "High-Speed Wi-Fi" },
      { icon: <Car className="w-4 h-4" />, label: "Valet Parking" },
      { icon: <Shield className="w-4 h-4" />, label: "Event Security" },
      { icon: <Mic className="w-4 h-4" />, label: "PA System" },
      { icon: <Projector className="w-4 h-4" />, label: "AV & Projectors" },
      { icon: <Flower className="w-4 h-4" />, label: "Floral Décor" },
    ],
    tiers: [
      {
        id: "silver",
        name: "Silver Package",
        price: 850000,
        capacity: "200 guests",
        space: "800 sq m",
        setup: "Banquet Style",
        slots: 6,
        description: "Full hall setup, basic catering, 2-hour DJ, event photography. Ideal for product launches or corporate dinners.",
        image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=700&h=460&fit=crop",
        features: [
          { icon: <Users className="w-3.5 h-3.5" />, label: "200 guests" },
          { icon: <Maximize2 className="w-3.5 h-3.5" />, label: "800 sq m" },
          { icon: <Music className="w-3.5 h-3.5" />, label: "DJ included" },
          { icon: <TrendingUp className="w-3.5 h-3.5" />, label: "6 slots left" },
        ],
      },
      {
        id: "gold",
        name: "Gold Package",
        price: 1400000,
        capacity: "350 guests",
        space: "1,200 sq m",
        setup: "Banquet + Cocktail",
        slots: 3,
        description: "Premium catering, live band, full photography + videography, custom florals, and complete AV setup for keynote presentations.",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&h=460&fit=crop",
        features: [
          { icon: <Users className="w-3.5 h-3.5" />, label: "350 guests" },
          { icon: <Maximize2 className="w-3.5 h-3.5" />, label: "1,200 sq m" },
          { icon: <Music className="w-3.5 h-3.5" />, label: "Live band" },
          { icon: <TrendingUp className="w-3.5 h-3.5" />, label: "3 slots left" },
        ],
      },
    ],
  },

  "luxury-wedding": {
    name: "Luxury Wedding Experience",
    city: "Lagos",
    state: "Lagos",
    address: "Victoria Island, Lagos, Nigeria",
    rating: 4.8,
    reviews: 48,
    type: "Wedding",
    typeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    description:
      "A complete luxury wedding package from pre-event planning through to the last dance. We handle venue dressing, floral décor, multi-course catering, entertainment and coordination so you can focus entirely on your special day.",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=700&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=500&fit=crop",
    ],
    amenities: [
      { icon: <Flower className="w-4 h-4" />, label: "Bridal Décor" },
      { icon: <Utensils className="w-4 h-4" />, label: "Gourmet Catering" },
      { icon: <Camera className="w-4 h-4" />, label: "Photographer" },
      { icon: <Music className="w-4 h-4" />, label: "Live Band" },
      { icon: <Car className="w-4 h-4" />, label: "Bridal Car" },
      { icon: <Mic className="w-4 h-4" />, label: "MC & PA" },
      { icon: <Shield className="w-4 h-4" />, label: "Security" },
      { icon: <Wifi className="w-4 h-4" />, label: "Wi-Fi" },
      { icon: <Projector className="w-4 h-4" />, label: "Slideshow Setup" },
    ],
    tiers: [
      {
        id: "classic",
        name: "Classic Wedding",
        price: 1200000,
        capacity: "250 guests",
        space: "600 sq m",
        setup: "Round-table banquet",
        slots: 4,
        description: "Classic wedding with full floral setup, 5-course catering, live music, photography, and a dedicated day coordinator.",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&h=460&fit=crop",
        features: [
          { icon: <Users className="w-3.5 h-3.5" />, label: "250 guests" },
          { icon: <Maximize2 className="w-3.5 h-3.5" />, label: "600 sq m" },
          { icon: <Flower className="w-3.5 h-3.5" />, label: "Full florals" },
          { icon: <TrendingUp className="w-3.5 h-3.5" />, label: "4 slots left" },
        ],
      },
      {
        id: "royal",
        name: "Royal Wedding",
        price: 2500000,
        capacity: "500 guests",
        space: "1,500 sq m",
        setup: "Royal banquet + lounge",
        slots: 2,
        description: "The ultimate wedding. Premium venue, celebrity-standard décor, gourmet dining, live orchestra, drone videography, and full management.",
        image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=700&h=460&fit=crop",
        features: [
          { icon: <Users className="w-3.5 h-3.5" />, label: "500 guests" },
          { icon: <Maximize2 className="w-3.5 h-3.5" />, label: "1,500 sq m" },
          { icon: <Music className="w-3.5 h-3.5" />, label: "Live orchestra" },
          { icon: <TrendingUp className="w-3.5 h-3.5" />, label: "2 slots left" },
        ],
      },
    ],
  },

  "conference-summit": {
    name: "Executive Summit Package",
    city: "Port Harcourt",
    state: "Rivers",
    address: "GRA Phase 2, Port Harcourt, Rivers, Nigeria",
    rating: 4.7,
    reviews: 19,
    type: "Conference",
    typeColor: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    description:
      "A professional conference and summit package designed for corporate leaders. Includes state-of-the-art AV, structured networking sessions, high-speed internet, and full-day catering.",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=700&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571726547523-b7b2c102efcc?w=800&h=500&fit=crop",
    ],
    amenities: [
      { icon: <Projector className="w-4 h-4" />, label: "Projectors" },
      { icon: <Mic className="w-4 h-4" />, label: "Wireless Mics" },
      { icon: <Wifi className="w-4 h-4" />, label: "Dedicated Fibre" },
      { icon: <Utensils className="w-4 h-4" />, label: "All-Day Catering" },
      { icon: <Car className="w-4 h-4" />, label: "Parking" },
      { icon: <Camera className="w-4 h-4" />, label: "Event Coverage" },
      { icon: <Shield className="w-4 h-4" />, label: "Security" },
      { icon: <Music className="w-4 h-4" />, label: "PA System" },
      { icon: <Flower className="w-4 h-4" />, label: "Stage Décor" },
    ],
    tiers: [
      {
        id: "half-day",
        name: "Half-Day Summit",
        price: 450000,
        capacity: "100 guests",
        space: "350 sq m",
        setup: "Theatre / Classroom",
        slots: 8,
        description: "4-hour conference with full AV, refreshments, note pads & stationery, and dedicated technical crew.",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=700&h=460&fit=crop",
        features: [
          { icon: <Users className="w-3.5 h-3.5" />, label: "100 guests" },
          { icon: <Maximize2 className="w-3.5 h-3.5" />, label: "350 sq m" },
          { icon: <Projector className="w-3.5 h-3.5" />, label: "Full AV" },
          { icon: <TrendingUp className="w-3.5 h-3.5" />, label: "8 slots left" },
        ],
      },
      {
        id: "full-day",
        name: "Full-Day Summit",
        price: 750000,
        capacity: "200 guests",
        space: "600 sq m",
        setup: "Theatre / Banquet",
        slots: 5,
        description: "All-day conference with breakfast, lunch, and tea breaks. Coordinator, live streaming, and post-event digital report included.",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=700&h=460&fit=crop",
        features: [
          { icon: <Users className="w-3.5 h-3.5" />, label: "200 guests" },
          { icon: <Maximize2 className="w-3.5 h-3.5" />, label: "600 sq m" },
          { icon: <Wifi className="w-3.5 h-3.5" />, label: "Live-stream ready" },
          { icon: <TrendingUp className="w-3.5 h-3.5" />, label: "5 slots left" },
        ],
      },
    ],
  },

  "birthday-celebration": {
    name: "Premium Birthday Bash",
    city: "Abuja",
    state: "FCT",
    address: "Maitama District, Abuja, FCT, Nigeria",
    rating: 4.6,
    reviews: 27,
    type: "Celebration",
    typeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    description:
      "Make your birthday unforgettable with our all-inclusive celebration package. From themed décor and custom cakes to live entertainment and a photo booth, every moment will be picture-perfect.",
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&h=700&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1470753937643-efeb931202a9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&h=500&fit=crop",
    ],
    amenities: [
      { icon: <Flower className="w-4 h-4" />, label: "Themed Décor" },
      { icon: <Utensils className="w-4 h-4" />, label: "Catering & Drinks" },
      { icon: <Camera className="w-4 h-4" />, label: "Photo Booth" },
      { icon: <Music className="w-4 h-4" />, label: "DJ" },
      { icon: <Shield className="w-4 h-4" />, label: "Security" },
      { icon: <Car className="w-4 h-4" />, label: "Parking" },
      { icon: <Mic className="w-4 h-4" />, label: "MC" },
      { icon: <Wifi className="w-4 h-4" />, label: "Wi-Fi" },
      { icon: <Projector className="w-4 h-4" />, label: "Slideshow Setup" },
    ],
    tiers: [
      {
        id: "intimate",
        name: "Intimate Celebration",
        price: 280000,
        capacity: "80 guests",
        space: "250 sq m",
        setup: "Lounge & Cocktail",
        slots: 10,
        description: "Custom theme décor, 3-tier cake, DJ, and dinner buffet for up to 80 guests.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=460&fit=crop",
        features: [
          { icon: <Users className="w-3.5 h-3.5" />, label: "80 guests" },
          { icon: <Maximize2 className="w-3.5 h-3.5" />, label: "250 sq m" },
          { icon: <Music className="w-3.5 h-3.5" />, label: "DJ" },
          { icon: <TrendingUp className="w-3.5 h-3.5" />, label: "10 slots left" },
        ],
      },
      {
        id: "grand",
        name: "Grand Bash",
        price: 550000,
        capacity: "200 guests",
        space: "500 sq m",
        setup: "Banquet + Dance floor",
        slots: 5,
        description: "Custom theme, live band, MC, professional photography, 5-tier cake, and surprise entertainment.",
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=700&h=460&fit=crop",
        features: [
          { icon: <Users className="w-3.5 h-3.5" />, label: "200 guests" },
          { icon: <Maximize2 className="w-3.5 h-3.5" />, label: "500 sq m" },
          { icon: <Music className="w-3.5 h-3.5" />, label: "Live band" },
          { icon: <TrendingUp className="w-3.5 h-3.5" />, label: "5 slots left" },
        ],
      },
    ],
  },
};

/* ─── BOOKING SIDEBAR ───────────────────────────────────────────────────────── */

function BookingSidebar({ pkg }: { pkg: Package }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    checkin: "", checkout: "",
    adults: "1", children: "0",
    tierId: pkg.tiers[0]?.id ?? "",
    sessions: "1",
    special: "",
  });
  const [step, setStep] = useState<"form" | "pay" | "verifying" | "success" | "error">("form");
  const [orderRef, setOrderRef] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const tier = pkg.tiers.find((t) => t.id === form.tierId);
  const total = (tier?.price ?? 0) * Number(form.sessions);

  // Unique deterministic reference per form submission
  const payRef = orderRef || `scotty_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `scotty_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    setOrderRef(ref);
    // Pre-create the order in pending state
    await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reference: ref,
        name: form.name,
        email: form.email,
        phone: form.phone,
        packageId: pkg.name.toLowerCase().replace(/\s+/g, "-"),
        packageName: pkg.name,
        tierId: form.tierId,
        tierName: tier?.name ?? form.tierId,
        eventDate: form.checkin,
        endDate: form.checkout,
        adults: form.adults,
        children: form.children,
        sessions: form.sessions,
        specialRequests: form.special,
        amount: total,
      }),
    });
    setStep("pay");
  };

  const handlePaymentSuccess = useCallback(async (reference: string) => {
    setStep("verifying");
    try {
      const res = await fetch("/api/payments/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference }),
      });
      const data = await res.json();
      if (data.verified) {
        setStep("success");
      } else {
        setErrorMsg(data.message ?? "Payment could not be verified.");
        setStep("error");
      }
    } catch {
      setErrorMsg("Network error while verifying payment. Please contact support.");
      setStep("error");
    }
  }, []);

  const handlePaymentClose = useCallback(() => {
    if (step === "pay") setStep("form");
  }, [step]);

  const field = (label: string, key: keyof typeof form, type = "text", placeholder = "") => (
    <div>
      <label className="block text-[10px] font-bold text-white/35 uppercase tracking-[0.18em] mb-1.5">{label}</label>
      <input
        type={type}
        required={["name","email","phone","checkin"].includes(key)}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 rounded-xl text-white text-sm placeholder:text-white/25 outline-none transition-all focus:ring-1 focus:ring-sky-400/50 scheme-dark"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
      />
    </div>
  );

  const select = (label: string, key: keyof typeof form, opts: { v: string; l: string }[]) => (
    <div>
      <label className="block text-[10px] font-bold text-white/35 uppercase tracking-[0.18em] mb-1.5">{label}</label>
      <select
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        className="w-full px-3 py-2.5 rounded-xl text-white text-sm outline-none transition-all focus:ring-1 focus:ring-sky-400/50 appearance-none scheme-dark"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        {opts.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
      </select>
    </div>
  );

  // ── SUCCESS ──
  if (step === "success") return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-2xl p-8 text-center"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
        style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)" }}>
        <CheckCircle className="w-7 h-7 text-emerald-400" />
      </div>
      <h3 className="text-white font-black text-lg mb-2">Booking Confirmed!</h3>
      <p className="text-white/40 text-sm mb-2">Payment of <span className="text-emerald-400 font-bold">₦{total.toLocaleString()}</span> was successful.</p>
      <p className="text-white/30 text-xs mb-5">Ref: {orderRef}</p>
      <p className="text-white/40 text-sm mb-5">We&apos;ll send a confirmation to <span className="text-sky-400">{form.email}</span> shortly.</p>
      <button
        onClick={() => { setStep("form"); setOrderRef(""); setForm({ name: "", email: "", phone: "", checkin: "", checkout: "", adults: "1", children: "0", tierId: pkg.tiers[0]?.id ?? "", sessions: "1", special: "" }); }}
        className="text-sky-400 text-sm hover:text-sky-300 transition-colors cursor-pointer">
        Make another booking
      </button>
    </motion.div>
  );

  // ── ERROR ──
  if (step === "error") return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-2xl p-8 text-center"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
        style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)" }}>
        <AlertCircle className="w-7 h-7 text-red-400" />
      </div>
      <h3 className="text-white font-black text-lg mb-2">Payment Issue</h3>
      <p className="text-white/40 text-sm mb-5">{errorMsg}</p>
      <button onClick={() => setStep("pay")} className="text-sky-400 text-sm hover:text-sky-300 transition-colors cursor-pointer mr-4">Try Again</button>
      <button onClick={() => setStep("form")} className="text-white/30 text-sm hover:text-white/60 transition-colors cursor-pointer">Edit Details</button>
    </motion.div>
  );

  // ── VERIFYING ──
  if (step === "verifying") return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-2xl p-8 text-center"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <Loader2 className="w-10 h-10 text-sky-400 animate-spin mx-auto mb-4" />
      <h3 className="text-white font-black text-lg mb-2">Verifying Payment…</h3>
      <p className="text-white/40 text-sm">Please wait while we confirm your transaction.</p>
    </motion.div>
  );

  // ── PAY STEP ──
  if (step === "pay") return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl p-5 space-y-5"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <h3 className="text-white font-black text-base">Complete Payment</h3>

      {/* Order summary */}
      <div className="rounded-xl p-4 space-y-2" style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(56,189,248,0.12)" }}>
        <div className="flex justify-between text-sm text-white/50">
          <span>{pkg.name}</span>
          <span>{tier?.name}</span>
        </div>
        <div className="flex justify-between text-sm text-white/50">
          <span>Guests</span>
          <span>{form.adults} adults, {form.children} children</span>
        </div>
        <div className="flex justify-between text-sm text-white/50">
          <span>Event Date</span>
          <span>{form.checkin}</span>
        </div>
        <div className="flex justify-between font-black text-white pt-2 border-t border-white/10 text-base">
          <span>Total</span>
          <span>₦{total.toLocaleString()}</span>
        </div>
      </div>

      <PaystackButton
        email={form.email}
        amount={total}
        name={form.name}
        phone={form.phone}
        reference={orderRef || payRef}
        metadata={{ packageName: pkg.name, tierId: form.tierId, eventDate: form.checkin }}
        onSuccess={handlePaymentSuccess}
        onClose={handlePaymentClose}
        label={`Pay ₦${total.toLocaleString()}`}
      />

      <button
        type="button"
        onClick={() => setStep("form")}
        className="w-full text-center text-white/30 text-xs hover:text-white/60 transition-colors cursor-pointer py-1"
      >
        ← Edit booking details
      </button>
    </motion.div>
  );

  // ── FORM STEP ──
  return (
    <form
      onSubmit={handleFormSubmit}
      className="rounded-2xl p-5 space-y-4"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <h3 className="text-white font-black text-base mb-1">Book This Package</h3>

      {/* Contact */}
      {field("Full Name",  "name",  "text",  "Your full name")}
      <div className="grid grid-cols-2 gap-3">
        {field("Email", "email", "email", "you@email.com")}
        {field("Phone", "phone", "tel",   "+234 800 000 0000")}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-3">
        {field("Event Date", "checkin",  "date")}
        {field("End Date",   "checkout", "date")}
      </div>

      {/* Adults / Children */}
      <div className="grid grid-cols-2 gap-3">
        {select("Adults",   "adults",   [1,2,3,4,5,6,7,8,9,10].map((n) => ({ v: String(n), l: String(n) })))}
        {select("Children", "children", [0,1,2,3,4,5].map((n) => ({ v: String(n), l: String(n) })))}
      </div>

      {/* Tier */}
      {select("Package Tier", "tierId", pkg.tiers.map((t) => ({ v: t.id, l: `${t.name} — ₦${t.price.toLocaleString()}` })))}

      {/* Sessions */}
      {select("Sessions", "sessions", [1,2,3].map((n) => ({ v: String(n), l: String(n) })))}

      {/* Special */}
      <div>
        <label className="block text-[10px] font-bold text-white/35 uppercase tracking-[0.18em] mb-1.5">Special Requests</label>
        <textarea
          rows={3} value={form.special}
          onChange={(e) => setForm({ ...form, special: e.target.value })}
          placeholder="Theme, dietary requirements, budget…"
          className="w-full px-3 py-2.5 rounded-xl text-white text-sm placeholder:text-white/25 outline-none resize-none transition-all focus:ring-1 focus:ring-sky-400/50"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
        />
      </div>

      {/* Price summary */}
      {tier && (
        <div className="rounded-xl p-4 space-y-2" style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(56,189,248,0.12)" }}>
          <div className="flex justify-between text-sm text-white/50">
            <span>{tier.name}</span>
            <span>₦{tier.price.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm text-white/50">
            <span>× {form.sessions} session{Number(form.sessions) > 1 ? "s" : ""}</span>
            <span>₦{total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-black text-white pt-2 border-t border-white/10 text-base">
            <span>Total</span>
            <span>₦{total.toLocaleString()}</span>
          </div>
        </div>
      )}

      <button
        type="submit"
        className="w-full py-3.5 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
        style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1)", boxShadow: "0 8px 24px rgba(14,165,233,0.25)" }}
      >
        <CalendarCheck className="w-4 h-4" />
        Continue to Payment
      </button>
    </form>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────────────── */

export default function PackageDetailPage() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const pkg = packages[id] ?? packages["grand-ballroom-gala"];

  const [activeImg, setActiveImg] = useState(0);
  const [reviewOpen, setReviewOpen] = useState(false);

  const prevImg = () => setActiveImg((i) => (i === 0 ? pkg.images.length - 1 : i - 1));
  const nextImg = () => setActiveImg((i) => (i === pkg.images.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen bg-[#070d14]">

      {/* ── CINEMATIC HERO GALLERY ── */}
      <section className="relative h-[70vh] min-h-120 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImg}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image src={pkg.images[activeImg]} alt={pkg.name} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-linear-to-t from-[#070d14] via-[#070d14]/30 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-[#070d14]/60 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Back button */}
        <div className="absolute top-28 left-6 z-20">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white/70 hover:text-white text-sm transition-colors"
            style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>

        {/* Nav arrows */}
        <button
          onClick={prevImg}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)" }}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={nextImg}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)" }}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {pkg.images.map((_, i) => (
            <button key={i} onClick={() => setActiveImg(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${activeImg === i ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/30 hover:bg-white/50"}`}
            />
          ))}
        </div>

        {/* Thumbnails strip */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {pkg.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`relative shrink-0 w-14 h-9 rounded-lg overflow-hidden transition-all duration-200 cursor-pointer ${activeImg === i ? "ring-2 ring-sky-400 scale-110" : "opacity-50 hover:opacity-80"}`}
            >
              <Image src={img} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>

        {/* Title overlay (bottom-left) */}
        <div className="absolute bottom-16 left-6 sm:left-10 z-20 max-w-2xl">
          <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border mb-3 ${pkg.typeColor}`}>
            {pkg.type}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight drop-shadow-2xl">
            {pkg.name}
          </h1>
        </div>
      </section>

      {/* ── BODY ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-5 mb-10 pb-8"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <MapPin className="w-4 h-4 text-sky-400" />
            {pkg.city}, {pkg.state}
          </div>
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <MapPin className="w-4 h-4 text-sky-400 opacity-0" />
            <span className="text-white/30 text-xs">{pkg.address}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-white font-bold">{pkg.rating}</span>
            <span className="text-white/35">({pkg.reviews} reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ── LEFT ── */}
          <div className="lg:col-span-2 space-y-8">

            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }} viewport={{ once: true }}
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <h2 className="text-white font-black text-lg mb-3">About this Package</h2>
              <p className="text-white/50 text-sm leading-relaxed">{pkg.description}</p>
            </motion.div>

            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }} viewport={{ once: true }}
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <h2 className="text-white font-black text-lg mb-5">What&apos;s Included</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {pkg.amenities.map((a) => (
                  <div
                    key={a.label}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-white/60 transition-colors hover:text-white/80"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <span className="text-sky-400 shrink-0">{a.icon}</span>
                    {a.label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Package Tiers */}
            <div>
              <h2 className="text-white font-black text-lg mb-6">Available Tiers</h2>
              <div className="space-y-5">
                {pkg.tiers.map((tier, i) => (
                  <motion.div
                    key={tier.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden group"
                    style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image src={tier.image} alt={tier.name} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                      <div className="absolute inset-0 bg-linear-to-t from-[#0c1420] via-[#0c1420]/40 to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                        <h3 className="text-white font-black text-xl">{tier.name}</h3>
                        <div className="text-right">
                          <p className="text-white/40 text-xs">from</p>
                          <p className="text-white font-black text-2xl">₦{tier.price.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5" style={{ background: "rgba(255,255,255,0.025)" }}>
                      <p className="text-white/45 text-sm leading-relaxed mb-4">{tier.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {tier.features.map((f) => (
                          <div
                            key={f.label}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-sky-300"
                            style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(56,189,248,0.2)" }}
                          >
                            <span className="shrink-0">{f.icon}</span>
                            {f.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }} viewport={{ once: true }}
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-white font-black text-lg">Guest Reviews</h2>
                <button
                  onClick={() => setReviewOpen(!reviewOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white cursor-pointer transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg,#0ea5e9,#6366f1)", boxShadow: "0 4px 14px rgba(14,165,233,0.25)" }}
                >
                  <Star className="w-3.5 h-3.5" />
                  Leave a Review
                </button>
              </div>

              <AnimatePresence>
                {reviewOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 overflow-hidden"
                  >
                    <textarea
                      rows={3}
                      placeholder="Share your experience…"
                      className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder:text-white/25 outline-none resize-none focus:ring-1 focus:ring-sky-400/50"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                    />
                    <button
                      onClick={() => setReviewOpen(false)}
                      className="mt-2 px-5 py-2 rounded-xl text-sm font-semibold text-white cursor-pointer"
                      style={{ background: "rgba(14,165,233,0.2)", border: "1px solid rgba(56,189,248,0.25)" }}
                    >
                      Submit
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col items-center py-10 text-center">
                <MessageSquare className="w-10 h-10 text-white/10 mb-3" />
                <p className="text-white/25 text-sm">No reviews yet. Be the first to review!</p>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT (sticky sidebar) ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <BookingSidebar pkg={pkg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
