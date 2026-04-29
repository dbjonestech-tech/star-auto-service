import Link from "next/link";
import { LoginForm } from "./LoginForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { isAdminConfigured } from "@/lib/admin-auth";
import { isTrackerConfigured } from "@/lib/repairs";

type SearchParams = Promise<{ next?: string; error?: string }>;

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { next, error } = await searchParams;
  const adminReady = isAdminConfigured();
  const trackerReady = isTrackerConfigured();

  return (
    <section className="bg-cream min-h-[80vh] flex items-center py-16 md:py-24">
      <div className="max-w-md mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="relative bg-surface border border-line p-8 md:p-10 shadow-card-lg">
          <div
            className="absolute top-0 left-8 right-8 h-0.5 bg-gold"
            aria-hidden="true"
          />
          <Eyebrow>Shop admin</Eyebrow>
          <h1 className="mt-3 font-sans font-black text-2xl md:text-3xl text-ink tracking-tight leading-snug">
            Sign in to manage repairs.
          </h1>

          {!adminReady ? (
            <div className="mt-6 p-5 bg-gold-tint border border-gold/40">
              <p className="text-[11px] uppercase tracking-[0.16em] font-bold text-gold-deep">
                Setup required
              </p>
              <p className="mt-2 text-sm text-ink leading-relaxed font-medium">
                Set <code className="font-mono text-xs">ADMIN_PASSWORD</code> in
                your Vercel project Environment Variables, then redeploy.
              </p>
            </div>
          ) : null}

          {!trackerReady ? (
            <div className="mt-6 p-5 bg-royal-tint border border-royal/30">
              <p className="text-[11px] uppercase tracking-[0.16em] font-bold text-royal">
                Tracker storage not connected
              </p>
              <p className="mt-2 text-sm text-ink leading-relaxed font-medium">
                Provision Upstash Redis on Vercel Marketplace. Vercel will
                inject <code className="font-mono text-xs">UPSTASH_REDIS_REST_URL</code>{" "}
                and <code className="font-mono text-xs">UPSTASH_REDIS_REST_TOKEN</code>.
              </p>
            </div>
          ) : null}

          <LoginForm next={next} initialError={error} />

          <p className="mt-6 text-xs text-graphite text-center">
            <Link href="/" className="hover:text-royal transition-colors">
              Back to the site
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
