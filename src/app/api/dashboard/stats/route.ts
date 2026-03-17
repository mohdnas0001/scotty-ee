import { NextResponse } from "next/server";
import { getAdminFromCookies } from "@/lib/auth";
import { getAllOrders } from "@/lib/store";
import { DashboardStats } from "@/lib/types";

export async function GET() {
  const isAdmin = await getAdminFromCookies();
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const orders = getAllOrders();

  const stats: DashboardStats = {
    totalRevenue: orders
      .filter((o) => o.paymentStatus === "success")
      .reduce((sum, o) => sum + o.amount, 0),
    totalOrders: orders.length,
    pendingOrders: orders.filter((o) => o.orderStatus === "pending").length,
    confirmedOrders: orders.filter((o) => o.orderStatus === "confirmed").length,
    completedOrders: orders.filter((o) => o.orderStatus === "completed").length,
    cancelledOrders: orders.filter((o) => o.orderStatus === "cancelled").length,
    successfulPayments: orders.filter((o) => o.paymentStatus === "success").length,
    failedPayments: orders.filter((o) => o.paymentStatus === "failed").length,
  };

  // Revenue by month (last 6 months)
  const now = new Date();
  const revenueChart = Array.from({ length: 6 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1);
    const label = d.toLocaleString("default", { month: "short", year: "2-digit" });
    const rev = orders
      .filter((o) => {
        const od = new Date(o.createdAt);
        return (
          o.paymentStatus === "success" &&
          od.getMonth() === d.getMonth() &&
          od.getFullYear() === d.getFullYear()
        );
      })
      .reduce((sum, o) => sum + o.amount, 0);
    return { month: label, revenue: rev };
  });

  return NextResponse.json({ stats, revenueChart });
}
