"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ShoppingBag,
  CreditCard,
  Clock,
  CheckCircle,
  XCircle,
  BarChart3,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DashboardStats } from "@/lib/types";
import Link from "next/link";

interface StatsResponse {
  stats: DashboardStats;
  revenueChart: { month: string; revenue: number }[];
}

function StatCard({
  label,
  value,
  icon: Icon,
  color,
  sub,
}: {
  label: string;
  value: string | number;
  icon: React.ElementType;
  color: string;
  sub?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl p-5"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: color + "1a", border: `1px solid ${color}33` }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
      </div>
      <p className="text-white/40 text-xs mb-1">{label}</p>
      <p className="text-white font-black text-2xl">{value}</p>
      {sub && <p className="text-white/30 text-xs mt-1">{sub}</p>}
    </motion.div>
  );
}

export default function DashboardOverviewPage() {
  const [data, setData] = useState<StatsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard/stats")
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="w-8 h-8 border-2 border-[#f97316] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const { stats, revenueChart } = data ?? { stats: null, revenueChart: [] };

  return (
    <div className="space-y-8 max-w-6xl">
      {/* Header */}
      <div>
        <h1 className="text-white font-black text-2xl mb-1">Overview</h1>
        <p className="text-white/35 text-sm">Welcome back, Admin. Here&apos;s what&apos;s happening.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Revenue"
          value={stats ? `₦${(stats.totalRevenue / 1000000).toFixed(1)}M` : "—"}
          icon={TrendingUp}
          color="#22c55e"
          sub="From successful payments"
        />
        <StatCard
          label="Total Orders"
          value={stats?.totalOrders ?? "—"}
          icon={ShoppingBag}
          color="#f97316"
          sub={`${stats?.pendingOrders ?? 0} pending`}
        />
        <StatCard
          label="Successful Payments"
          value={stats?.successfulPayments ?? "—"}
          icon={CreditCard}
          color="#6366f1"
          sub={`${stats?.failedPayments ?? 0} failed`}
        />
        <StatCard
          label="Confirmed"
          value={stats?.confirmedOrders ?? "—"}
          icon={CheckCircle}
          color="#0ea5e9"
          sub={`${stats?.completedOrders ?? 0} completed`}
        />
      </div>

      {/* Revenue Chart */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-2xl p-6"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-white font-black text-base">Revenue Trend</h2>
            <p className="text-white/35 text-xs mt-0.5">Last 6 months</p>
          </div>
          <BarChart3 className="w-5 h-5 text-white/20" />
        </div>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueChart} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis
                tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `₦${(v / 1000000).toFixed(1)}M`}
              />
              <Tooltip
                contentStyle={{ background: "#0c1420", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, color: "#fff", fontSize: 12 }}
                formatter={(value) => {
                  const amount = Array.isArray(value) ? Number(value[0] ?? 0) : Number(value ?? 0);
                  return [`₦${amount.toLocaleString()}`, "Revenue"];
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#f97316"
                strokeWidth={2}
                fill="url(#revGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Quick links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { href: "/dashboard/orders", label: "Manage Orders", icon: ShoppingBag, desc: "View, confirm or cancel bookings", color: "#f97316" },
          { href: "/dashboard/payments", label: "Payment Records", icon: CreditCard, desc: "Track all transaction history", color: "#6366f1" },
          { href: "/dashboard/settings", label: "Site Settings", icon: Clock, desc: "Configure site and payment keys", color: "#0ea5e9" },
        ].map((item) => (
          <Link key={item.href} href={item.href}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl p-5 cursor-pointer transition-colors"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <item.icon className="w-5 h-5 mb-3" style={{ color: item.color }} />
              <p className="text-white font-bold text-sm">{item.label}</p>
              <p className="text-white/35 text-xs mt-0.5">{item.desc}</p>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Order status breakdown */}
      {stats && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl p-6"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <h2 className="text-white font-black text-base mb-5">Order Status Breakdown</h2>
          <div className="space-y-3">
            {[
              { label: "Confirmed", count: stats.confirmedOrders, color: "#0ea5e9", icon: CheckCircle },
              { label: "Pending", count: stats.pendingOrders, color: "#f97316", icon: Clock },
              { label: "Completed", count: stats.completedOrders, color: "#22c55e", icon: CheckCircle },
              { label: "Cancelled", count: stats.cancelledOrders, color: "#ef4444", icon: XCircle },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-3">
                <row.icon className="w-4 h-4 shrink-0" style={{ color: row.color }} />
                <span className="text-white/50 text-sm w-24">{row.label}</span>
                <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: stats.totalOrders ? `${(row.count / stats.totalOrders) * 100}%` : "0%", background: row.color }}
                  />
                </div>
                <span className="text-white/50 text-sm w-8 text-right">{row.count}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
