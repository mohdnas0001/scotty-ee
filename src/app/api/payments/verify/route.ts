/**
 * POST /api/payments/verify
 * Verifies a Paystack payment using the transaction reference.
 * Called after Paystack redirects back / inline callback fires.
 */
import { NextRequest, NextResponse } from "next/server";
import { getOrderByReference, updateOrder } from "@/lib/store";

export async function POST(req: NextRequest) {
  const { reference } = await req.json();

  if (!reference) {
    return NextResponse.json({ error: "Missing reference" }, { status: 400 });
  }

  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ error: "Payment gateway not configured" }, { status: 500 });
  }

  // Verify with Paystack
  const psRes = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
    headers: { Authorization: `Bearer ${secretKey}` },
  });

  if (!psRes.ok) {
    return NextResponse.json({ error: "Unable to reach payment processor" }, { status: 502 });
  }

  const psData = await psRes.json();
  const { status, data } = psData;

  if (!status || data?.status !== "success") {
    // Update order as failed if found
    const order = getOrderByReference(reference);
    if (order) updateOrder(order.id, { paymentStatus: "failed", paystackData: data });
    return NextResponse.json({ verified: false, message: data?.gateway_response ?? "Payment failed" });
  }

  // Success — update order
  const order = getOrderByReference(reference);
  if (order) {
    updateOrder(order.id, {
      paymentStatus: "success",
      orderStatus: "confirmed",
      paystackData: data,
    });
  }

  return NextResponse.json({ verified: true, data });
}
