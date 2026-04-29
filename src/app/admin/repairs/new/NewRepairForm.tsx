"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save } from "lucide-react";

const inputBase =
  "w-full bg-paper border border-line px-4 py-3 text-sm text-ink font-medium placeholder:text-stone focus:outline-none focus-visible:border-royal focus-visible:ring-2 focus-visible:ring-royal/40 transition-colors";

const labelBase =
  "block text-[11px] uppercase tracking-[0.18em] font-bold text-graphite mb-2";

type Status = { value: string; label: string };

export function NewRepairForm({ statuses }: { statuses: Status[] }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [trackingLink, setTrackingLink] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      customerFirstName: fd.get("customerFirstName"),
      vehicle: fd.get("vehicle"),
      customerPhoneLast4: fd.get("customerPhoneLast4"),
      serviceSummary: fd.get("serviceSummary"),
      status: fd.get("status"),
      etaText: fd.get("etaText"),
      initialNote: fd.get("initialNote"),
    };

    try {
      const res = await fetch("/api/admin/repairs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save");
      const id = data.repair.id as string;
      setTrackingLink(`${window.location.origin}/track/${id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setSubmitting(false);
    }
  }

  if (trackingLink) {
    return (
      <div className="mt-8 bg-surface border border-emerald/40 p-6 md:p-8 shadow-card">
        <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-emerald">
          Repair created
        </p>
        <h2 className="mt-2 font-sans font-black text-xl md:text-2xl text-ink">
          Share this link with the customer.
        </h2>
        <div className="mt-5 p-4 bg-paper border border-line">
          <p className="break-all font-mono text-sm text-ink">{trackingLink}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(trackingLink)}
            className="inline-flex items-center justify-center bg-ink text-cream hover:bg-royal px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.14em] transition-colors"
          >
            Copy link
          </button>
          <a
            href={trackingLink}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center border-2 border-ink text-ink hover:bg-ink hover:text-cream px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.14em] transition-colors"
          >
            Open the public page
          </a>
          <button
            type="button"
            onClick={() => {
              setTrackingLink(null);
              setSubmitting(false);
              router.refresh();
            }}
            className="inline-flex items-center justify-center text-graphite hover:text-ink px-3 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.14em] transition-colors"
          >
            Create another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="customerFirstName" className={labelBase}>
            Customer first name *
          </label>
          <input
            id="customerFirstName"
            name="customerFirstName"
            type="text"
            required
            maxLength={40}
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="customerPhoneLast4" className={labelBase}>
            Phone last 4 digits *
          </label>
          <input
            id="customerPhoneLast4"
            name="customerPhoneLast4"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{4}"
            required
            maxLength={4}
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="vehicle" className={labelBase}>
          Vehicle (year + make + model + color) *
        </label>
        <input
          id="vehicle"
          name="vehicle"
          type="text"
          placeholder="2018 Toyota Camry, Silver"
          required
          maxLength={80}
          className={inputBase}
        />
      </div>

      <div>
        <label htmlFor="serviceSummary" className={labelBase}>
          Service summary
        </label>
        <input
          id="serviceSummary"
          name="serviceSummary"
          type="text"
          placeholder="Brake pads + rotors, AC service"
          maxLength={120}
          className={inputBase}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="status" className={labelBase}>
            Initial status *
          </label>
          <select
            id="status"
            name="status"
            required
            defaultValue="received"
            className={inputBase}
          >
            {statuses.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="etaText" className={labelBase}>
            Estimated completion (free text)
          </label>
          <input
            id="etaText"
            name="etaText"
            type="text"
            placeholder="Tomorrow afternoon"
            maxLength={60}
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="initialNote" className={labelBase}>
          Initial note (optional)
        </label>
        <textarea
          id="initialNote"
          name="initialNote"
          rows={3}
          maxLength={500}
          className={`${inputBase} resize-none`}
        />
      </div>

      {error ? (
        <p role="alert" className="text-sm text-ruby font-semibold">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2.5 bg-ink text-cream hover:bg-royal disabled:opacity-60 disabled:cursor-not-allowed px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] transition-colors"
      >
        {submitting ? (
          "Saving..."
        ) : (
          <>
            <Save size={14} strokeWidth={2.5} aria-hidden="true" />
            Create repair
          </>
        )}
      </button>
    </form>
  );
}
