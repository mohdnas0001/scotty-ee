import { NextRequest, NextResponse } from "next/server";
import { getAdminFromCookies } from "@/lib/auth";
import { getAllOrders, createOrder, getOrderById } from "@/lib/store";
import { BookingOrder } from "@/lib/types";

// GET /api/orders  — list all orders (admin only)
export async function GET() {
  const isAdmin = await getAdminFromCookies();
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  return NextResponse.json({ orders: getAllOrders() });
}

// POST /api/orders  — create a new order (public, from booking form)
export async function POST(req: NextRequest) {
  const body = await req.json();

  const order: BookingOrder = {
    id: `ord_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    reference: body.reference ?? "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    name: body.name,
    email: body.email,
    phone: body.phone,
    packageId: body.packageId,
    packageName: body.packageName,
    tierId: body.tierId,
    tierName: body.tierName,
    eventDate: body.eventDate,
    endDate: body.endDate,
    adults: Number(body.adults),
    children: Number(body.children),
    sessions: Number(body.sessions),
    specialRequests: body.specialRequests ?? "",
    amount: Number(body.amount),
    currency: "NGN",
    orderStatus: "pending",
    paymentStatus: "pending",
  };

  // Check if an order with this reference already exists (idempotency)
  if (body.reference) {
    const existing = getAllOrders().find((o) => o.reference === body.reference);
    if (existing) return NextResponse.json({ order: existing });
  }

  const saved = createOrder(order);
  return NextResponse.json({ order: saved }, { status: 201 });
}
