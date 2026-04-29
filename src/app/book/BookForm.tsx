"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar } from "lucide-react";
import { track } from "@vercel/analytics";
import { SERVICES } from "@/lib/constants";

type FormData = {
  name: string;
  phone: string;
  email: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  service: string;
  preferredWindow: string;
  message: string;
  honeypot: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const INITIAL: FormData = {
  name: "",
  phone: "",
  email: "",
  vehicleYear: "",
  vehicleMake: "",
  vehicleModel: "",
  service: "",
  preferredWindow: "",
  message: "",
  honeypot: "",
};

const PREFERRED_WINDOWS = [
  "As soon as possible",
  "Today / tomorrow",
  "This week",
  "Next week",
  "I'll call to schedule",
];

const inputBase =
  "w-full bg-paper border border-line px-4 py-3 text-sm text-ink font-medium placeholder:text-stone focus:outline-none focus-visible:border-royal focus-visible:ring-2 focus-visible:ring-royal/40 transition-colors";

const labelBase =
  "block text-[11px] uppercase tracking-[0.18em] font-bold text-graphite mb-2";

const selectStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%235c5550' d='M6 8.5 1.5 4h9z'/%3E%3C/svg%3E\")",
};

/** Booking intake form. Vehicle + service + window, posts to /api/contact with formType="booking", redirects to /book/confirmation on success. */
export function BookForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "booking" }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      track("form_submit", { form: "booking" });
      router.push("/book/confirmation");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative bg-surface border border-line p-7 md:p-10 shadow-card"
      noValidate
    >
      <div className="absolute top-0 left-7 right-7 h-0.5 bg-gold" aria-hidden="true" />
      <h2 className="font-sans font-black text-2xl md:text-3xl text-ink tracking-tight leading-none">
        Book a service.
      </h2>
      <p className="mt-4 text-sm text-graphite font-medium leading-relaxed">
        Tell us about the car and what you need. We&apos;ll call back within one business day. Required fields marked with{" "}
        <span className="text-gold-deep font-bold">*</span>.
      </p>

      <div aria-hidden="true" className="absolute opacity-0 h-0 w-0 overflow-hidden pointer-events-none">
        <label htmlFor="honeypot">Leave this field empty</label>
        <input
          type="text"
          id="honeypot"
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
              Full name <span className="text-gold-deep">*</span>
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
              Phone <span className="text-gold-deep">*</span>
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
          <label htmlFor="email" className={labelBase}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={inputBase}
          />
        </div>

        <fieldset>
          <legend className={labelBase}>Vehicle</legend>
          <div className="grid grid-cols-3 gap-3">
            <input
              type="text"
              id="vehicleYear"
              name="vehicleYear"
              placeholder="Year"
              inputMode="numeric"
              maxLength={4}
              value={formData.vehicleYear}
              onChange={handleChange}
              className={`${inputBase} tabular-nums`}
              aria-label="Vehicle year"
            />
            <input
              type="text"
              id="vehicleMake"
              name="vehicleMake"
              placeholder="Make"
              value={formData.vehicleMake}
              onChange={handleChange}
              className={inputBase}
              aria-label="Vehicle make"
            />
            <input
              type="text"
              id="vehicleModel"
              name="vehicleModel"
              placeholder="Model"
              value={formData.vehicleModel}
              onChange={handleChange}
              className={inputBase}
              aria-label="Vehicle model"
            />
          </div>
        </fieldset>

        <div>
          <label htmlFor="service" className={labelBase}>
            Service needed
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputBase} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat`}
            style={selectStyle}
          >
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
            <option value="other">Something else / not sure</option>
          </select>
        </div>

        <div>
          <label htmlFor="preferredWindow" className={labelBase}>
            Preferred window
          </label>
          <select
            id="preferredWindow"
            name="preferredWindow"
            value={formData.preferredWindow}
            onChange={handleChange}
            className={`${inputBase} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat`}
            style={selectStyle}
          >
            <option value="">When works best?</option>
            {PREFERRED_WINDOWS.map((w) => (
              <option key={w} value={w}>
                {w}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelBase}>
            What&apos;s going on with the car?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Symptoms, sounds, warning lights, anything you've already had looked at…"
            className={`${inputBase} resize-none`}
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
          className="w-full inline-flex items-center justify-center gap-2.5 bg-gold text-ink hover:bg-gold-soft disabled:opacity-60 disabled:cursor-not-allowed px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-colors shadow-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          {status === "submitting" ? (
            "Sending…"
          ) : (
            <>
              <Calendar size={16} strokeWidth={2.5} aria-hidden="true" />
              Request a booking
            </>
          )}
        </button>
      </div>
    </form>
  );
}
