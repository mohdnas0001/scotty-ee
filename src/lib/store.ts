/**
 * Simple in-memory orders store.
 * In production, replace this with a real database (e.g. Prisma + Postgres).
 * The module-level Map persists for the life of the Next.js server process.
 */
import { BookingOrder, SiteSettings } from "./types";

// ── Orders ────────────────────────────────────────────────────────────────
const ordersMap = new Map<string, BookingOrder>();

// Seed with sample data so the dashboard is not empty on first load
const seedOrders: BookingOrder[] = [
  {
    id: "ord_001",
    reference: "paystack_ref_001",
    createdAt: new Date(Date.now() - 7 * 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 7 * 86400000).toISOString(),
    name: "Adaeze Okafor",
    email: "adaeze@example.com",
    phone: "+234 803 111 2222",
    packageId: "grand-ballroom-gala",
    packageName: "Grand Ballroom Gala",
    tierId: "gold",
    tierName: "Gold Package",
    eventDate: "2026-04-10",
    endDate: "2026-04-11",
    adults: 6,
    children: 2,
    sessions: 2,
    specialRequests: "Yoruba theme, no nuts",
    amount: 2400000,
    currency: "NGN",
    orderStatus: "confirmed",
    paymentStatus: "success",
  },
  {
    id: "ord_002",
    reference: "paystack_ref_002",
    createdAt: new Date(Date.now() - 3 * 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 3 * 86400000).toISOString(),
    name: "Emeka Nwosu",
    email: "emeka@example.com",
    phone: "+234 808 333 4444",
    packageId: "intimate-elegance",
    packageName: "Intimate Elegance",
    tierId: "silver",
    tierName: "Silver Package",
    eventDate: "2026-05-15",
    endDate: "2026-05-15",
    adults: 4,
    children: 0,
    sessions: 1,
    specialRequests: "",
    amount: 850000,
    currency: "NGN",
    orderStatus: "pending",
    paymentStatus: "success",
  },
  {
    id: "ord_003",
    reference: "paystack_ref_003",
    createdAt: new Date(Date.now() - 1 * 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 86400000).toISOString(),
    name: "Fatima Bello",
    email: "fatima@example.com",
    phone: "+234 811 555 6666",
    packageId: "grand-ballroom-gala",
    packageName: "Grand Ballroom Gala",
    tierId: "platinum",
    tierName: "Platinum Package",
    eventDate: "2026-06-20",
    endDate: "2026-06-21",
    adults: 10,
    children: 4,
    sessions: 3,
    specialRequests: "Live band for 2 hours",
    amount: 4500000,
    currency: "NGN",
    orderStatus: "confirmed",
    paymentStatus: "success",
  },
];

seedOrders.forEach((o) => ordersMap.set(o.id, o));

export function getAllOrders(): BookingOrder[] {
  return Array.from(ordersMap.values()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getOrderById(id: string): BookingOrder | undefined {
  return ordersMap.get(id);
}

export function getOrderByReference(reference: string): BookingOrder | undefined {
  return Array.from(ordersMap.values()).find((o) => o.reference === reference);
}

export function createOrder(order: BookingOrder): BookingOrder {
  ordersMap.set(order.id, order);
  return order;
}

export function updateOrder(id: string, patch: Partial<BookingOrder>): BookingOrder | null {
  const existing = ordersMap.get(id);
  if (!existing) return null;
  const updated = { ...existing, ...patch, updatedAt: new Date().toISOString() };
  ordersMap.set(id, updated);
  return updated;
}

export function deleteOrder(id: string): boolean {
  return ordersMap.delete(id);
}

// ── Settings ──────────────────────────────────────────────────────────────
let siteSettings: SiteSettings = {
  siteName: "Scotty Events & Entertainment",
  contactEmail: "hello@scottyevents.ng",
  contactPhone: "+234 800 SCOTTY",
  address: "Plot 234, Central Business District, Abuja, FCT, Nigeria",
  bookingEnabled: true,
  maintenanceMode: false,
  paystackPublicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? "",
  bankName: "GTBank",
  accountName: "Scotty Events & Entertainment Ltd",
  accountNumber: "0123456789",
  socialLinks: {
    instagram: "https://instagram.com/scottyevents_ng",
    facebook: "https://facebook.com/scottyeventsng",
    twitter: "https://twitter.com/scottyevents_ng",
    whatsapp: "https://wa.me/2348001234567",
  },
};

export function getSettings(): SiteSettings {
  return siteSettings;
}

export function updateSettings(patch: Partial<SiteSettings>): SiteSettings {
  siteSettings = { ...siteSettings, ...patch };
  return siteSettings;
}
