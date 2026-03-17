"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Eye,
  Trash2,
  CheckCircle,
  Clock,
  XCircle,
  ChevronDown,
  X,
  Loader2,
  Calendar,
  Users,
  Mail,
  Phone,
} from "lucide-react";
import { BookingOrder, OrderStatus, PaymentStatus } from "@/lib/types";

const ORDER_STATUS_COLORS: Record<OrderStatus, string> = {
  pending: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  confirmed: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  completed: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  cancelled: "text-red-400 bg-red-400/10 border-red-400/20",
};

const PAYMENT_STATUS_COLORS: Record<PaymentStatus, string> = {
  pending: "text-amber-400",
  success: "text-emerald-400",
  failed: "text-red-400",
  refunded: "text-purple-400",
};

function StatusBadge({ status }: { status: OrderStatus }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-semibold border ${ORDER_STATUS_COLORS[status]}`}>
      {status === "completed" && <CheckCircle className="w-3 h-3" />}
      {status === "confirmed" && <CheckCircle className="w-3 h-3" />}
      {status === "pending" && <Clock className="w-3 h-3" />}
      {status === "cancelled" && <XCircle className="w-3 h-3" />}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

function OrderDetailModal({ order, onClose, onUpdate }: {
  order: BookingOrder; onClose: () => void; onUpdate: (o: BookingOrder) => void;
}) {
  const [saving, setSaving] = useState(false);
  const [orderStatus, setOrderStatus] = useState<OrderStatus>(order.orderStatus);

  const handleSave = async () => {
    setSaving(true);
    const res = await fetch(`/api/orders/${order.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderStatus }),
    });
    const data = await res.json();
    setSaving(false);
    if (data.order) { onUpdate(data.order); onClose(); }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg rounded-2xl p-6 space-y-5 max-h-[90vh] overflow-y-auto"
        style={{ background: "#0c1420", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-white font-black text-lg">Order Details</h2>
          <button onClick={onClose} className="text-white/40 hover:text-white cursor-pointer"><X size={20} /></button>
        </div>

        {/* Reference */}
        <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.03)" }}>
          <p className="text-white/35 text-[10px] uppercase tracking-widest">Reference</p>
          <p className="text-white font-mono text-sm mt-0.5">{order.reference || order.id}</p>
        </div>

        {/* Customer */}
        <div className="space-y-2">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Customer</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2 text-white/60"><Users size={13} />{order.name}</div>
            <div className="flex items-center gap-2 text-white/60"><Mail size={13} />{order.email}</div>
            <div className="flex items-center gap-2 text-white/60"><Phone size={13} />{order.phone}</div>
            <div className="flex items-center gap-2 text-white/60"><Calendar size={13} />{order.eventDate}</div>
          </div>
        </div>

        {/* Package */}
        <div className="space-y-2">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Package</p>
          <div className="grid grid-cols-2 gap-2 text-sm text-white/60">
            <div><span className="text-white/30">Package: </span>{order.packageName}</div>
            <div><span className="text-white/30">Tier: </span>{order.tierName}</div>
            <div><span className="text-white/30">Adults: </span>{order.adults}</div>
            <div><span className="text-white/30">Sessions: </span>{order.sessions}</div>
          </div>
        </div>

        {/* Financial */}
        <div className="rounded-xl p-4" style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(56,189,248,0.12)" }}>
          <div className="flex justify-between text-sm text-white/50 mb-1">
            <span>Amount</span>
            <span className="text-white font-black text-base">₦{order.amount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-white/40">Payment</span>
            <span className={`font-semibold text-sm ${PAYMENT_STATUS_COLORS[order.paymentStatus]}`}>
              {order.paymentStatus.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Special requests */}
        {order.specialRequests && (
          <div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Special Requests</p>
            <p className="text-white/50 text-sm">{order.specialRequests}</p>
          </div>
        )}

        {/* Status update */}
        <div>
          <label className="block text-[10px] font-bold text-white/35 uppercase tracking-widest mb-1.5">Update Status</label>
          <select
            value={orderStatus}
            onChange={(e) => setOrderStatus(e.target.value as OrderStatus)}
            className="w-full px-3 py-2.5 rounded-xl text-white text-sm outline-none appearance-none scheme-dark"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {(["pending", "confirmed", "completed", "cancelled"] as OrderStatus[]).map((s) => (
              <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full py-3 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 cursor-pointer transition-all hover:opacity-90 disabled:opacity-50"
          style={{ background: "linear-gradient(135deg,#f97316,#6366f1)" }}
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle className="w-4 h-4" />}
          Save Changes
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<BookingOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<OrderStatus | "all">("all");
  const [selected, setSelected] = useState<BookingOrder | null>(null);

  useEffect(() => {
    fetch("/api/orders")
      .then((r) => r.json())
      .then((d) => { setOrders(d.orders ?? []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this order? This cannot be undone.")) return;
    await fetch(`/api/orders/${id}`, { method: "DELETE" });
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  const filtered = orders.filter((o) => {
    const matchSearch =
      o.name.toLowerCase().includes(search.toLowerCase()) ||
      o.email.toLowerCase().includes(search.toLowerCase()) ||
      o.packageName.toLowerCase().includes(search.toLowerCase()) ||
      o.reference.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || o.orderStatus === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-white font-black text-2xl mb-1">Orders</h1>
          <p className="text-white/35 text-sm">{orders.length} total booking{orders.length !== 1 ? "s" : ""}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email, package…"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-white text-sm placeholder:text-white/25 outline-none focus:ring-1 focus:ring-white/20"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as OrderStatus | "all")}
            className="pl-9 pr-8 py-2.5 rounded-xl text-white text-sm outline-none appearance-none scheme-dark cursor-pointer"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/25 pointer-events-none" />
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex items-center justify-center py-24">
          <Loader2 className="w-8 h-8 text-[#f97316] animate-spin" />
        </div>
      ) : (
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {filtered.length === 0 ? (
            <div className="py-20 text-center text-white/25">No orders found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.025)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    {["Customer", "Package", "Event Date", "Amount", "Payment", "Status", ""].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-[10px] font-bold text-white/30 uppercase tracking-widest">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((order, i) => (
                    <motion.tr
                      key={order.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="border-b border-white/[0.04] hover:bg-white/[0.025] transition-colors"
                    >
                      <td className="px-4 py-3">
                        <p className="text-white font-medium">{order.name}</p>
                        <p className="text-white/35 text-xs">{order.email}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-white/70">{order.packageName}</p>
                        <p className="text-white/30 text-xs">{order.tierName}</p>
                      </td>
                      <td className="px-4 py-3 text-white/50">{order.eventDate}</td>
                      <td className="px-4 py-3 text-white font-bold">₦{order.amount.toLocaleString()}</td>
                      <td className={`px-4 py-3 font-semibold text-xs ${PAYMENT_STATUS_COLORS[order.paymentStatus]}`}>
                        {order.paymentStatus.toUpperCase()}
                      </td>
                      <td className="px-4 py-3"><StatusBadge status={order.orderStatus} /></td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelected(order)}
                            className="p-1.5 rounded-lg text-white/30 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                          >
                            <Eye size={14} />
                          </button>
                          <button
                            onClick={() => handleDelete(order.id)}
                            className="p-1.5 rounded-lg text-white/30 hover:text-red-400 hover:bg-red-500/10 transition-all cursor-pointer"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <OrderDetailModal
            order={selected}
            onClose={() => setSelected(null)}
            onUpdate={(updated) => {
              setOrders((prev) => prev.map((o) => (o.id === updated.id ? updated : o)));
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
