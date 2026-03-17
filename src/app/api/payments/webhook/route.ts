/**
 * POST /api/payments/webhook
 * Receives Paystack webhook events (charge.success, etc.)
 * Add your webhook secret to .env.local as PAYSTACK_WEBHOOK_SECRET
 */
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getOrderByReference, updateOrder } from "@/lib/store";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("x-paystack-signature") ?? "";
  const webhookSecret = process.env.PAYSTACK_WEBHOOK_SECRET ?? "";

  // Validate webhook signature
  if (webhookSecret) {
    const expected = crypto
      .createHmac("sha512", webhookSecret)
      .update(body)
      .digest("hex");
    if (expected !== signature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }
  }

  const event = JSON.parse(body);

  if (event?.event === "charge.success") {
    const reference = event?.data?.reference;
    if (reference) {
      const order = getOrderByReference(reference);
      if (order) {
        updateOrder(order.id, {
          paymentStatus: "success",
          orderStatus: "confirmed",
          paystackData: event.data,
        });
      }
    }
  }

  if (event?.event === "refund.processed") {
    const reference = event?.data?.transaction_reference;
    if (reference) {
      const order = getOrderByReference(reference);
      if (order) {
        updateOrder(order.id, { paymentStatus: "refunded" });
      }
    }
  }

  return NextResponse.json({ ok: true });
}
