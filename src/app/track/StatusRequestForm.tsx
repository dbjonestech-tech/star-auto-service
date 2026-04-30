"use client";

import { useState } from "react";
import { Send, CheckCircle2, Search } from "lucide-react";
import { track } from "@vercel/analytics";
import type { Locale } from "@/lib/i18n";
import { UI } from "@/lib/translations/ui";

type Props = { locale?: Locale };

type FormData = {
  name: string;
  phone: string;
  vehicle: string;
  ro: string;
  honeypot: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const INITIAL: FormData = {
  name: "",
  phone: "",
  vehicle: "",
  ro: "",
  honeypot: "",
};

const inputBase =
  "w-full bg-paper border border-line px-4 py-3 text-sm text-ink font-medium placeholder:text-stone focus:outline-none focus-visible:border-royal focus-visible:ring-2 focus-visible:ring-royal/40 transition-colors";

const labelBase =
  "block text-[11px] uppercase tracking-[0.18em] font-bold text-graphite mb-2";

/**
 * Status update request form. Locale-aware. Posts to /api/contact with a
 * clearly-labeled "STATUS UPDATE REQUEST" service so the shop sees it in
 * inbox and replies by phone or text.
 */
export function StatusRequestForm({ locale = "en" }: Props) {
  const copy = UI[locale].statusForm;
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const message = [
      formData.ro ? `${copy.messagePrefixRO}: ${formData.ro}` : null,
      formData.vehicle ? `${copy.messagePrefixVehicle}: ${formData.vehicle}` : null,
      copy.messageBody,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          name: formData.name,
          phone: formData.phone,
          email: "",
          service: copy.serviceLabel,
          message,
          honeypot: formData.honeypot,
          locale,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || copy.errorGeneric);
      }

      track("form_submit", { form: "status_request", locale });
      setStatus("success");
      setFormData(INITIAL);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : copy.errorGeneric);
    }
  }

  if (status === "success") {
    return (
      <div className="relative bg-surface border border-line p-8 md:p-12 shadow-card text-center">
        <div className="absolute top-0 left-8 right-8 h-0.5 bg-emerald" aria-hidden="true" />
        <div className="w-14 h-14 bg-emerald/15 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2
            className="text-emerald"
            size={28}
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>
        <h2 className="font-sans font-black text-2xl md:text-3xl text-ink tracking-tight">
          {copy.successHeading}
        </h2>
        <p className="mt-4 text-base text-graphite leading-relaxed font-medium max-w-md mx-auto">
          {copy.successBody}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative bg-surface border border-line p-7 md:p-10 shadow-card"
      noValidate
    >
      <div className="absolute top-0 left-7 right-7 h-0.5 bg-gold" aria-hidden="true" />
      <div className="flex items-start gap-4">
        <span className="w-12 h-12 bg-royal-tint flex items-center justify-center shrink-0">
          <Search
            size={22}
            strokeWidth={2}
            className="text-royal"
            aria-hidden="true"
          />
        </span>
        <div>
          <h2 className="font-sans font-black text-2xl md:text-3xl text-ink tracking-tight leading-none">
            {copy.headline}
          </h2>
          <p className="mt-3 text-sm md:text-base text-graphite font-medium leading-relaxed">
            {copy.intro}
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute opacity-0 h-0 w-0 overflow-hidden pointer-events-none"
      >
        <label htmlFor="track-honeypot">{copy.leaveEmpty}</label>
        <input
          type="text"
          id="track-honeypot"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="mt-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className={labelBase}>
              {copy.yourName} <span className="text-gold-deep">{copy.requiredNote}</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              className={inputBase}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelBase}>
              {copy.phoneNumber} <span className="text-gold-deep">{copy.requiredNote}</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              className={inputBase}
            />
          </div>
        </div>

        <div>
          <label htmlFor="vehicle" className={labelBase}>
            {copy.vehicleLabel}
          </label>
          <input
            type="text"
            id="vehicle"
            name="vehicle"
            placeholder={copy.vehiclePlaceholder}
            value={formData.vehicle}
            onChange={handleChange}
            className={inputBase}
          />
        </div>

        <div>
          <label htmlFor="ro" className={labelBase}>
            {copy.roLabel}
          </label>
          <input
            type="text"
            id="ro"
            name="ro"
            value={formData.ro}
            onChange={handleChange}
            className={inputBase}
          />
        </div>

        {status === "error" && (
          <p role="alert" className="text-sm text-ruby font-semibold">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center gap-2.5 bg-ink text-cream hover:bg-royal disabled:opacity-60 disabled:cursor-not-allowed px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          {status === "submitting" ? (
            copy.sending
          ) : (
            <>
              <Send size={15} strokeWidth={2.5} aria-hidden="true" />
              {copy.sendCTA}
            </>
          )}
        </button>
      </div>
    </form>
  );
}
