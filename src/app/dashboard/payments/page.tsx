"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  Clock,
  RefreshCw,
  Search,
  Loader2,
  TrendingUp,
  CreditCard,
} from "lucide-react";
import { BookingOrder, PaymentStatus } from "@/lib/types";

const PAYMENT_COLORS: Record<PaymentStatus, { text: string; bg: string; border: string; icon: React.ElementType }> = {
  success: { text: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", icon: CheckCircle },
  failed: { text: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/20", icon: XCircle },
  pending: { text: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20", icon: Clock },
  refunded: { text: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20", icon: RefreshCw },
};

export default function PaymentsPage() {
  const [orders, setOrders] = useState<BookingOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<PaymentStatus | "all">("all");

  useEffect(() => {
    fetch("/api/orders")
      .then((r) => r.json())
      .then((d) => { setOrders(d.orders ?? []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = orders.filter((o) => {
    const matchSearch =
      o.name.toLowerCase().includes(search.toLowerCase()) ||
      o.email.toLowerCase().includes(search.toLowerCase()) ||
      (o.reference ?? "").toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || o.paymentStatus === filter;
    return matchSearch && matchFilter;
  });

  const totalRevenue = orders
    .filter((o) => o.paymentStatus === "success")
    .reduce((s, o) => s + o.amount, 0);

  const successCount = orders.filter((o) => o.paymentStatus === "success").length;
  const failedCount = orders.filter((o) => o.paymentStatus === "failed").length;
  const pendingCount = orders.filter((o) => o.paymentStatus === "pending").length;

  return (
    <div className="space-y-6 max-w-6xl">
      <div>
        <h1 className="text-white font-black text-2xl mb-1">Payments</h1>
        <p className="text-white/35 text-sm">Full transaction history and payment status</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Revenue", value: `₦${(totalRevenue / 1000000).toFixed(2)}M`, icon: TrendingUp, color: "#22c55e" },
          { label: "Successful", value: successCount, icon: CheckCircle, color: "#22c55e" },
          { label: "Failed", value: failedCount, icon: XCircle, color: "#ef4444" },
          { label: "Pending", value: pendingCount, icon: Clock, color: "#f59e0b" },
        ].map((item) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-4"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <item.icon className="w-5 h-5 mb-2" style={{ color: item.color }} />
            <p className="text-white/35 text-xs">{item.label}</p>
            <p className="text-white font-black text-xl">{item.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email or reference…"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-white text-sm placeholder:text-white/25 outline-none focus:ring-1 focus:ring-white/20"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {(["all", "success", "pending", "failed", "refunded"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer capitalize ${
                filter === s
                  ? "bg-[#f97316]/20 text-[#f97316] border border-[#f97316]/30"
                  : "text-white/35 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex items-center justify-center py-24">
          <Loader2 className="w-8 h-8 text-[#f97316] animate-spin" />
        </div>
      ) : (
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
          {filtered.length === 0 ? (
            <div className="py-20 text-center text-white/25 flex flex-col items-center gap-3">
              <CreditCard className="w-10 h-10 text-white/10" />
              No payment records found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.025)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    {["Date", "Customer", "Package", "Amount", "Reference", "Status"].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-[10px] font-bold text-white/30 uppercase tracking-widest">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((order, i) => {
                    const cfg = PAYMENT_COLORS[order.paymentStatus];
                    return (
                      <motion.tr
                        key={order.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03 }}
                        className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
                      >
                        <td className="px-4 py-3 text-white/40 text-xs">
                          {new Date(order.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-white font-medium">{order.name}</p>
                          <p className="text-white/35 text-xs">{order.email}</p>
                        </td>
                        <td className="px-4 py-3 text-white/60">{order.packageName}</td>
                        <td className="px-4 py-3 text-white font-bold">₦{order.amount.toLocaleString()}</td>
                        <td className="px-4 py-3">
                          <span className="text-white/30 font-mono text-[11px]">{order.reference || "—"}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-semibold border ${cfg.text} ${cfg.bg} ${cfg.border}`}>
                            <cfg.icon className="w-3 h-3" />
                            {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                          </span>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
