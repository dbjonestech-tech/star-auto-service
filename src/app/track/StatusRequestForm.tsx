"use client";

import { useState } from "react";
import { Send, CheckCircle2, Search } from "lucide-react";
import { track } from "@vercel/analytics";

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
 * Status update request form. Posts to the existing /api/contact endpoint
 * with a clearly-labeled "STATUS UPDATE REQUEST" service so the shop sees
 * it in inbox and replies by phone or text.
 */
export function StatusRequestForm() {
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
      formData.ro ? `Tracking / RO number: ${formData.ro}` : null,
      formData.vehicle ? `Vehicle: ${formData.vehicle}` : null,
      "Customer is requesting an update on their repair via the website.",
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
          service: "STATUS UPDATE REQUEST",
          message,
          honeypot: formData.honeypot,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      track("form_submit", { form: "status_request" });
      setStatus("success");
      setFormData(INITIAL);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
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
          Request received.
        </h2>
        <p className="mt-4 text-base text-graphite leading-relaxed font-medium max-w-md mx-auto">
          The shop has your request and will reach out by phone or text with the
          status of your repair, usually within an hour during business hours.
          For anything urgent, please call (972) 231-2886.
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
            Request a status update.
          </h2>
          <p className="mt-3 text-sm md:text-base text-graphite font-medium leading-relaxed">
            We will look up your repair and reply by phone or text, usually
            within the hour during business hours.
          </p>
        </div>
      </div>

      {/* Honeypot */}
      <div
        aria-hidden="true"
        className="absolute opacity-0 h-0 w-0 overflow-hidden pointer-events-none"
      >
        <label htmlFor="track-honeypot">Leave this field empty</label>
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
              Your name <span className="text-gold-deep">*</span>
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
              Phone number <span className="text-gold-deep">*</span>
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
            Vehicle (year, make, model)
          </label>
          <input
            type="text"
            id="vehicle"
            name="vehicle"
            placeholder="2018 Toyota Camry"
            value={formData.vehicle}
            onChange={handleChange}
            className={inputBase}
          />
        </div>

        <div>
          <label htmlFor="ro" className={labelBase}>
            Tracking number or RO# (if you have one)
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
            "Sending..."
          ) : (
            <>
              <Send size={15} strokeWidth={2.5} aria-hidden="true" />
              Request status update
            </>
          )}
        </button>
      </div>
    </form>
  );
}
