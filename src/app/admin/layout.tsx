import type { Metadata } from "next";

/**
 * Admin layout. Wraps every /admin/* page with shared metadata that
 * keeps the entire admin section out of the search index.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true, noarchive: true },
  title: { absolute: "Admin · The Star Auto Service" },
};

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
