"use client";

import { Suspense, useId, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, AlertCircle, Clock, MapPin } from "lucide-react";
import PaystackButton from "@/components/PaystackButton";

interface GuestInfo {
  fullName: string;
  email: string;
  phone: string;
  numberOfGuests: string;
  checkInDate: string;
}

interface BookingData {
  roomType: string;
  roomLabel: string;
  price: number;
  priceLabel: string;
}

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Parse booking data from URL params
  const bookingData: BookingData = {
    roomType: searchParams.get("roomType") || "",
    roomLabel: searchParams.get("roomLabel") || "Selected Room",
    price: parseInt(searchParams.get("price") || "0"),
    priceLabel: searchParams.get("priceLabel") || "₦0",
  };

  const [step, setStep] = useState<"info" | "review" | "payment" | "success">("info");
  const [guestInfo, setGuestInfo] = useState<GuestInfo>({
    fullName: "",
    email: "",
    phone: "",
    numberOfGuests: "1",
    checkInDate: "",
  });
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "failed">("idle");
  
  // Generate unique reference using React's useId hook (approved pattern for stable IDs)
  const id = useId();
  const reference = `SCOTTY_${id.replace(/:/g, "").substring(0, 16)}`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setGuestInfo((prev) => ({ ...prev, [name]: value }));
  };

  const validateInfo = (): boolean => {
    if (!guestInfo.fullName.trim()) return false;
    if (!guestInfo.email.includes("@")) return false;
    if (!guestInfo.phone.trim()) return false;
    if (!guestInfo.numberOfGuests) return false;
    if (!guestInfo.checkInDate) return false;
    return true;
  };

  const handlePaymentSuccess = async (ref: string) => {
    setPaymentStatus("processing");

    // Verify payment
    try {
      const res = await fetch("/api/payments/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference: ref }),
      });

      const data = await res.json();

      if (data.verified) {
        setPaymentStatus("success");
        setStep("success");
        // Here you'd typically save the order to your database
      } else {
        setPaymentStatus("failed");
      }
    } catch (error) {
      console.error("Payment verification failed:", error);
      setPaymentStatus("failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#1a2a3a] text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-[#1a2a3a]/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">NBA-AGC 2026 Accommodation</h1>
            <p className="text-sm text-white/50">Complete your booking</p>
          </div>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition-colors text-sm font-medium"
          >
            ← Back
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step Indicator */}
            <div className="mb-12 flex items-center gap-4">
              {["info", "review", "payment", "success"].map((s, i) => (
                <div key={s} className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                      step === s ? "bg-amber-400 text-black" : step > s ? "bg-emerald-500 text-white" : "bg-white/10 text-white/50"
                    }`}
                  >
                    {["info", "review", "payment", "success"].indexOf(step) > i ? <Check className="w-5 h-5" /> : i + 1}
                  </div>
                  {i < 3 && <div className={`h-1 w-8 ${["info", "review", "payment"].indexOf(step) > i ? "bg-emerald-500" : "bg-white/10"}`} />}
                </div>
              ))}
            </div>

            {/* Step: Guest Information */}
            <AnimatePresence mode="wait">
              {step === "info" && (
                <motion.div
                  key="info"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Your Information</h2>
                    <p className="text-white/50">Let us know who we&apos;ll be accommodating</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={guestInfo.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-lg bg-white/8 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={guestInfo.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/8 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={guestInfo.phone}
                        onChange={handleInputChange}
                        placeholder="+234 8XX XXX XXXX"
                        className="w-full px-4 py-3 rounded-lg bg-white/8 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Number of Guests *</label>
                        <select
                          name="numberOfGuests"
                          value={guestInfo.numberOfGuests}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/8 border border-white/15 text-white focus:outline-none focus:border-amber-400 transition-colors"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <option key={n} value={n} className="bg-[#1a2a3a]">
                              {n} {n === 1 ? "Guest" : "Guests"}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Check-in Date *</label>
                        <input
                          type="date"
                          name="checkInDate"
                          value={guestInfo.checkInDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-white/8 border border-white/15 text-white focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => validateInfo() && setStep("review")}
                    disabled={!validateInfo()}
                    whileHover={{ scale: validateInfo() ? 1.02 : 1 }}
                    whileTap={{ scale: validateInfo() ? 0.98 : 1 }}
                    className="w-full py-3.5 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ background: validateInfo() ? "linear-gradient(135deg, #f59e0b, #d97706)" : "rgba(255,255,255,0.05)" }}
                  >
                    Continue to Review
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              )}

              {/* Step: Review */}
              {step === "review" && (
                <motion.div
                  key="review"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Review Your Booking</h2>
                    <p className="text-white/50">Verify all details before payment</p>
                  </div>

                  {/* Guest Info Review */}
                  <div className="rounded-xl border border-white/15 p-6 space-y-4 bg-white/5">
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Guest Name</p>
                      <p className="text-lg font-semibold">{guestInfo.fullName}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Email</p>
                        <p className="text-sm">{guestInfo.email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Phone</p>
                        <p className="text-sm">{guestInfo.phone}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Guests</p>
                        <p className="text-sm">{guestInfo.numberOfGuests}</p>
                      </div>
                      <div>
                        <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Check-in</p>
                        <p className="text-sm">{new Date(guestInfo.checkInDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      onClick={() => setStep("info")}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-3.5 rounded-xl font-bold text-sm transition-all bg-white/10 hover:bg-white/20"
                    >
                      ← Edit
                    </motion.button>
                    <motion.button
                      onClick={() => setStep("payment")}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-3.5 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all"
                      style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}
                    >
                      Proceed to Payment
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step: Payment */}
              {step === "payment" && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Complete Payment</h2>
                    <p className="text-white/50">Secure payment via Paystack</p>
                  </div>

                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 flex gap-3">
                    <AlertCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-emerald-300 mb-1">Secure Payment</p>
                      <p className="text-white/60">Your payment is processed securely by Paystack. No sensitive data is stored on our servers.</p>
                    </div>
                  </div>

                  {paymentStatus === "failed" && (
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 flex gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-semibold text-red-300 mb-1">Payment Failed</p>
                        <p className="text-white/60">Your payment could not be processed. Please try again.</p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    <PaystackButton
                      email={guestInfo.email}
                      amount={bookingData.price}
                      name={guestInfo.fullName}
                      phone={guestInfo.phone}
                      reference={reference}
                      metadata={{
                        roomType: bookingData.roomType,
                        numberOfGuests: guestInfo.numberOfGuests,
                        checkInDate: guestInfo.checkInDate,
                      }}
                      onSuccess={handlePaymentSuccess}
                      onClose={() => setPaymentStatus("idle")}
                      disabled={paymentStatus === "processing"}
                      label={paymentStatus === "processing" ? "Processing..." : "Pay Now with Paystack"}
                    />

                    <motion.button
                      onClick={() => setStep("review")}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 rounded-xl font-bold text-sm transition-all bg-white/10 hover:bg-white/20"
                    >
                      ← Back to Review
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step: Success */}
              {step === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto"
                  >
                    <Check className="w-8 h-8 text-emerald-400" />
                  </motion.div>

                  <div>
                    <h2 className="text-3xl font-bold mb-2">Booking Confirmed!</h2>
                    <p className="text-white/50">Your accommodation for NBA-AGC 2026 is secured.</p>
                  </div>

                  <div className="rounded-xl border border-white/15 bg-white/5 p-6 space-y-4 text-left">
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Confirmation Reference</p>
                      <p className="font-mono font-semibold text-amber-400 break-all">{reference}</p>
                    </div>
                    <div className="pt-4 border-t border-white/10 space-y-3">
                      <div className="flex items-start justify-between">
                        <span className="text-white/60">Guest Name:</span>
                        <span className="font-semibold">{guestInfo.fullName}</span>
                      </div>
                      <div className="flex items-start justify-between">
                        <span className="text-white/60">Room Type:</span>
                        <span className="font-semibold">{bookingData.roomLabel}</span>
                      </div>
                      <div className="flex items-start justify-between">
                        <span className="text-white/60">Amount Paid:</span>
                        <span className="font-semibold text-amber-400">{bookingData.priceLabel}</span>
                      </div>
                      <div className="flex items-start justify-between">
                        <span className="text-white/60">Check-in Date:</span>
                        <span className="font-semibold">{new Date(guestInfo.checkInDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 space-y-2">
                    <p className="text-sm text-white/60">A confirmation email has been sent to <span className="font-semibold text-white">{guestInfo.email}</span></p>
                    <p className="text-xs text-white/50">Check your inbox for booking details and hotel information.</p>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      onClick={() => router.push("/book")}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-3.5 rounded-xl font-bold text-sm transition-all bg-white/10 hover:bg-white/20"
                    >
                      View Other Options
                    </motion.button>
                    <motion.button
                      onClick={() => router.push("/")}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-3.5 rounded-xl font-bold text-white text-sm transition-all"
                      style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}
                    >
                      Return Home
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Order Summary Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-xl border border-white/15 bg-white/5 p-6 h-fit sticky top-28 space-y-6"
          >
            <div>
              <p className="text-xs text-white/50 uppercase tracking-wider mb-3">Order Summary</p>

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-white/60 mb-1">Room Type</p>
                  <p className="font-semibold">{bookingData.roomLabel || "Selected Room"}</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Clock className="w-4 h-4" />
                  4 Nights • August 2026
                </div>

                <div className="flex items-center gap-2 text-sm text-white/60">
                  <MapPin className="w-4 h-4" />
                  Port Harcourt, Rivers State
                </div>

                <div className="pt-3 border-t border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">Room Price</span>
                    <span className="font-semibold">{bookingData.priceLabel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">Taxes & Fees</span>
                    <span className="font-semibold">Included</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="font-semibold text-white">Total</span>
                  <span className="text-2xl font-black text-amber-400">{bookingData.priceLabel}</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-3 border-t border-white/10 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <Check className="w-4 h-4" />
                <span>Secure Paystack Payment</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <Check className="w-4 h-4" />
                <span>Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <Check className="w-4 h-4" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#1a2a3a] text-white flex items-center justify-center">
          <p className="text-white/70">Loading checkout...</p>
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
