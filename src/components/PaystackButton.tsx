"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Loader2, ShieldCheck } from "lucide-react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    PaystackPop: any;
  }
}

interface PaystackButtonProps {
  email: string;
  amount: number;            // in Naira (component converts to kobo)
  name: string;
  phone: string;
  reference: string;
  metadata?: Record<string, unknown>;
  onSuccess: (reference: string) => void;
  onClose: () => void;
  disabled?: boolean;
  label?: string;
}

export default function PaystackButton({
  email,
  amount,
  name,
  phone,
  reference,
  metadata,
  onSuccess,
  onClose,
  disabled,
  label = "Pay Now",
}: PaystackButtonProps) {
  const [scriptReady, setScriptReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const scriptRef = useRef(false);

  // Inject Paystack inline JS once
  useEffect(() => {
    if (scriptRef.current) return;
    scriptRef.current = true;

    if (document.querySelector('script[src*="paystack"]')) {
      setScriptReady(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.onload = () => setScriptReady(true);
    document.body.appendChild(script);
  }, []);

  const handlePay = () => {
    if (!scriptReady || !window.PaystackPop) return;

    setLoading(true);
    const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? "";

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email,
      amount: amount * 100,          // kobo
      currency: "NGN",
      ref: reference,
      firstname: name.split(" ")[0],
      lastname: name.split(" ").slice(1).join(" "),
      phone,
      metadata: { custom_fields: [], ...(metadata ?? {}) },
      callback(response: { reference: string }) {
        setLoading(false);
        onSuccess(response.reference);
      },
      onClose() {
        setLoading(false);
        onClose();
      },
    });
    handler.openIframe();
  };

  return (
    <div className="space-y-3">
      <motion.button
        type="button"
        onClick={handlePay}
        disabled={disabled || !scriptReady || loading}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        className="w-full py-3.5 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        style={{
          background: "linear-gradient(135deg,#00b09b,#22c55e)",
          boxShadow: "0 8px 24px rgba(34,197,94,0.25)",
        }}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <CreditCard className="w-4 h-4" />
        )}
        {loading ? "Opening payment…" : label}
      </motion.button>

      {/* Security note */}
      <div className="flex items-center justify-center gap-1.5 text-white/30 text-[11px]">
        <ShieldCheck className="w-3 h-3 text-emerald-500/60" />
        Secured by Paystack · SSL encrypted
      </div>
    </div>
  );
}
