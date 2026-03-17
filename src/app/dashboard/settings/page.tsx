"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Save,
  Loader2,
  Globe,
  CreditCard,
  Building2,
  Share2,
  ToggleLeft,
  ToggleRight,
  CheckCircle,
} from "lucide-react";
import { SiteSettings } from "@/lib/types";

function SectionCard({ title, icon: Icon, children }: {
  title: string; icon: React.ElementType; children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl p-6"
      style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="flex items-center gap-2 mb-5">
        <Icon className="w-4 h-4 text-[#f97316]" />
        <h2 className="text-white font-black text-sm">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}

function Field({ label, value, onChange, type = "text", placeholder = "" }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] font-bold text-white/35 uppercase tracking-[0.18em] mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 rounded-xl text-white text-sm placeholder:text-white/20 outline-none focus:ring-1 focus:ring-[#f97316]/40 transition-all"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
      />
    </div>
  );
}

function Toggle({ label, desc, value, onChange }: {
  label: string; desc: string; value: boolean; onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-white text-sm font-semibold">{label}</p>
        <p className="text-white/35 text-xs">{desc}</p>
      </div>
      <button
        type="button"
        onClick={() => onChange(!value)}
        className={`flex-shrink-0 transition-colors cursor-pointer ${value ? "text-emerald-400" : "text-white/20"}`}
      >
        {value ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
      </button>
    </div>
  );
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then((d) => { setSettings(d.settings); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const update = (patch: Partial<SiteSettings>) =>
    setSettings((prev) => (prev ? { ...prev, ...patch } : prev));

  const updateSocial = (key: keyof SiteSettings["socialLinks"], val: string) =>
    setSettings((prev) =>
      prev ? { ...prev, socialLinks: { ...prev.socialLinks, [key]: val } } : prev
    );

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!settings) return;
    setSaving(true);
    setSaved(false);
    await fetch("/api/settings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (loading || !settings) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="w-8 h-8 text-[#f97316] animate-spin" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSave} className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-white font-black text-2xl mb-1">Settings</h1>
          <p className="text-white/35 text-sm">Manage site configuration and payment keys</p>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90 disabled:opacity-50 cursor-pointer"
          style={{ background: "linear-gradient(135deg,#f97316,#6366f1)" }}
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : saved ? (
            <CheckCircle className="w-4 h-4 text-emerald-300" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          {saving ? "Saving…" : saved ? "Saved!" : "Save Changes"}
        </button>
      </div>

      {/* General */}
      <SectionCard title="General Information" icon={Globe}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Site Name" value={settings.siteName} onChange={(v) => update({ siteName: v })} />
          <Field label="Contact Email" value={settings.contactEmail} onChange={(v) => update({ contactEmail: v })} type="email" />
          <Field label="Contact Phone" value={settings.contactPhone} onChange={(v) => update({ contactPhone: v })} type="tel" />
          <Field label="Address" value={settings.address} onChange={(v) => update({ address: v })} />
        </div>
      </SectionCard>

      {/* Availability */}
      <SectionCard title="Site Availability" icon={ToggleRight}>
        <div className="space-y-4">
          <Toggle
            label="Booking Enabled"
            desc="Allow customers to submit booking requests"
            value={settings.bookingEnabled}
            onChange={(v) => update({ bookingEnabled: v })}
          />
          <div className="border-t border-white/5" />
          <Toggle
            label="Maintenance Mode"
            desc="Show a maintenance page to all visitors"
            value={settings.maintenanceMode}
            onChange={(v) => update({ maintenanceMode: v })}
          />
        </div>
      </SectionCard>

      {/* Payment */}
      <SectionCard title="Paystack Configuration" icon={CreditCard}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <Field
              label="Paystack Public Key"
              value={settings.paystackPublicKey}
              onChange={(v) => update({ paystackPublicKey: v })}
              placeholder="pk_live_… or pk_test_…"
            />
            <p className="text-white/25 text-[11px] mt-1">
              The secret key is stored in your .env.local as PAYSTACK_SECRET_KEY and is never exposed here.
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Bank */}
      <SectionCard title="Bank Account Details" icon={Building2}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Field label="Bank Name" value={settings.bankName} onChange={(v) => update({ bankName: v })} />
          <div className="sm:col-span-2">
            <Field label="Account Name" value={settings.accountName} onChange={(v) => update({ accountName: v })} />
          </div>
          <Field label="Account Number" value={settings.accountNumber} onChange={(v) => update({ accountNumber: v })} />
        </div>
      </SectionCard>

      {/* Social */}
      <SectionCard title="Social Links" icon={Share2}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(["instagram", "facebook", "twitter", "whatsapp"] as const).map((key) => (
            <Field
              key={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={settings.socialLinks[key]}
              onChange={(v) => updateSocial(key, v)}
              type="url"
              placeholder={`https://${key}.com/…`}
            />
          ))}
        </div>
      </SectionCard>
    </form>
  );
}
