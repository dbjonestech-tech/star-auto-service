import { Award, Calendar, Languages, ShieldCheck } from "lucide-react";

const TRUST_ITEMS = [
  { icon: Award, label: "ASE Certified" },
  { icon: Calendar, label: "Since 1998" },
  { icon: Languages, label: "Bilingual Service" },
  { icon: ShieldCheck, label: "NAPA Auto Care" },
] as const;

/** Horizontal trust bar showing key credentials. */
export function TrustBar() {
  return (
    <section className="bg-primary-dark py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-3"
            >
              <item.icon size={22} className="text-accent" />
              <span className="text-white font-medium text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
