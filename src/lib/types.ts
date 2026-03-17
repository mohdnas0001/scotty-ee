/* ─── Shared types for Scotty E&E ────────────────────────────────────────── */

export type OrderStatus = "pending" | "confirmed" | "cancelled" | "completed";
export type PaymentStatus = "pending" | "success" | "failed" | "refunded";

export interface BookingOrder {
  id: string;
  reference: string;           // Paystack reference
  createdAt: string;           // ISO date
  updatedAt: string;

  // Customer
  name: string;
  email: string;
  phone: string;

  // Booking details
  packageId: string;
  packageName: string;
  tierId: string;
  tierName: string;
  eventDate: string;
  endDate: string;
  adults: number;
  children: number;
  sessions: number;
  specialRequests: string;

  // Financials
  amount: number;              // in NGN (kobo / 100)
  currency: string;

  // Status
  orderStatus: OrderStatus;
  paymentStatus: PaymentStatus;
  paystackData?: Record<string, unknown>; // raw paystack webhook/verify response
}

export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  pendingOrders: number;
  confirmedOrders: number;
  completedOrders: number;
  cancelledOrders: number;
  successfulPayments: number;
  failedPayments: number;
}

export interface SiteSettings {
  siteName: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  bookingEnabled: boolean;
  maintenanceMode: boolean;
  paystackPublicKey: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    twitter: string;
    whatsapp: string;
  };
}
