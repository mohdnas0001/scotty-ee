"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  ShoppingBag,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/orders", label: "Orders", icon: ShoppingBag },
  { href: "/dashboard/payments", label: "Payments", icon: CreditCard },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

function SidebarLink({ href, label, icon: Icon, onClick }: {
  href: string; label: string; icon: React.ElementType; onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
        active
          ? "bg-[#f97316]/15 text-[#f97316]"
          : "text-white/50 hover:text-white hover:bg-white/5"
      )}
    >
      <Icon className={cn("w-4 h-4 shrink-0", active ? "text-[#f97316]" : "text-white/40 group-hover:text-white/80")} />
      <span>{label}</span>
      {active && <ChevronRight className="w-3 h-3 ml-auto text-[#f97316]/60" />}
    </Link>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [checking, setChecking] = useState(true);
  const router = useRouter();

  // Gate: verify auth on mount
  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => {
        if (!r.ok) router.replace("/dashboard/login");
        else setChecking(false);
      })
      .catch(() => router.replace("/dashboard/login"));
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/dashboard/login");
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-[#070d14] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#f97316] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const sidebar = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 py-6 border-b border-white/5">
        <Link href="/" className="block">
          <Image src="/icon/logo-line-white.svg" alt="Scotty E&E" width={160} height={32} className="h-8 w-auto" />
        </Link>
        <p className="text-white/25 text-[10px] mt-1 tracking-widest uppercase">Admin Dashboard</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-5 space-y-1">
        {navItems.map((item) => (
          <SidebarLink key={item.href} {...item} onClick={() => setSidebarOpen(false)} />
        ))}
      </nav>

      {/* Footer */}
      <div className="px-3 pb-6 border-t border-white/5 pt-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 cursor-pointer group"
        >
          <LogOut className="w-4 h-4 group-hover:text-red-400" />
          Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#070d14] flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 shrink-0 bg-[#0c1420] border-r border-white/5 sticky top-0 h-screen">
        {sidebar}
      </aside>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-72 bg-[#0c1420] border-r border-white/5 z-50 lg:hidden"
            >
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white p-2"
              >
                <X size={20} />
              </button>
              {sidebar}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-[#070d14]/80 backdrop-blur-md border-b border-white/5 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-white/50 hover:text-white p-1.5"
          >
            <Menu size={22} />
          </button>

          <div className="hidden lg:block">
            <p className="text-white/30 text-xs">Scotty Events & Entertainment</p>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button className="relative text-white/40 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#f97316] rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f97316] to-[#6366f1] flex items-center justify-center text-white text-xs font-bold">
              A
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
