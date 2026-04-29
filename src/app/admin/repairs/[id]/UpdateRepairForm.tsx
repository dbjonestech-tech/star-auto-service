"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Trash2 } from "lucide-react";
import type { RepairRecord } from "@/lib/repairs";

const inputBase =
  "w-full bg-paper border border-line px-4 py-3 text-sm text-ink font-medium placeholder:text-stone focus:outline-none focus-visible:border-royal focus-visible:ring-2 focus-visible:ring-royal/40 transition-colors";

const labelBase =
  "block text-[11px] uppercase tracking-[0.18em] font-bold text-graphite mb-2";

type Status = { value: string; label: string };

export function UpdateRepairForm({
  repair,
  statuses,
}: {
  repair: RepairRecord;
  statuses: Status[];
}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);

    const fd = new FormData(e.currentTarget);
    const payload = {
      status: fd.get("status"),
      etaText: fd.get("etaText"),
      serviceSummary: fd.get("serviceSummary"),
      note: fd.get("note"),
    };

    try {
      const res = await fetch(`/api/admin/repairs/${repair.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to save");
      }
      setSuccess(true);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!confirm("Delete this tracking record? This cannot be undone.")) return;
    setSubmitting(true);
    try {
      const res = await fetch(`/api/admin/repairs/${repair.id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");
      router.push("/admin/repairs");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 bg-surface border border-line p-6 md:p-8 shadow-card space-y-5"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="status" className={labelBase}>
            Status
          </label>
          <select
            id="status"
            name="status"
            defaultValue={repair.status}
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
            Estimated completion
          </label>
          <input
            id="etaText"
            name="etaText"
            type="text"
            defaultValue={repair.etaText || ""}
            maxLength={60}
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="serviceSummary" className={labelBase}>
          Service summary
        </label>
        <input
          id="serviceSummary"
          name="serviceSummary"
          type="text"
          defaultValue={repair.serviceSummary || ""}
          maxLength={120}
          className={inputBase}
        />
      </div>

      <div>
        <label htmlFor="note" className={labelBase}>
          Note for this update (shown on customer page)
        </label>
        <textarea
          id="note"
          name="note"
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
      {success ? (
        <p role="status" className="text-sm text-emerald font-semibold">
          Update saved.
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2.5 bg-ink text-cream hover:bg-royal disabled:opacity-60 disabled:cursor-not-allowed px-7 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] transition-colors"
        >
          <Save size={14} strokeWidth={2.5} aria-hidden="true" />
          {submitting ? "Saving..." : "Save update"}
        </button>
        <button
          type="button"
          onClick={handleDelete}
          disabled={submitting}
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] font-extrabold text-ruby hover:text-ink hover:bg-ruby/10 px-3 py-2 transition-colors"
        >
          <Trash2 size={12} strokeWidth={2.5} aria-hidden="true" />
          Delete record
        </button>
      </div>
    </form>
  );
}
