"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="inline-flex items-center gap-2 border border-line text-graphite hover:text-ink hover:border-ink px-3 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.14em] transition-colors"
    >
      <LogOut size={12} strokeWidth={2.5} aria-hidden="true" />
      Sign out
    </button>
  );
}
