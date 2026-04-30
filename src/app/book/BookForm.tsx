"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar } from "lucide-react";
import { track } from "@vercel/analytics";
import { getServices } from "@/lib/constants.es";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { UI } from "@/lib/translations/ui";

type Props = { locale?: Locale };

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

const inputBase =
  "w-full bg-paper border border-line px-4 py-3 text-sm text-ink font-medium placeholder:text-stone focus:outline-none focus-visible:border-royal focus-visible:ring-2 focus-visible:ring-royal/40 transition-colors";

const labelBase =
  "block text-[11px] uppercase tracking-[0.18em] font-bold text-graphite mb-2";

const selectStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%235c5550' d='M6 8.5 1.5 4h9z'/%3E%3C/svg%3E\")",
};

/** Booking intake form. Locale-aware. Posts to /api/contact with formType="booking", redirects on success. */
export function BookForm({ locale = "en" }: Props) {
  const copy = UI[locale].bookForm;
  const services = getServices(locale);
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
        body: JSON.stringify({ ...formData, formType: "booking", locale }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || copy.errorGeneric);
      }

      track("form_submit", { form: "booking", locale });
      router.push(localizedPath("/book/confirmation", locale));
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : copy.errorGeneric);
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
        {copy.headline}
      </h2>
      <p className="mt-4 text-sm text-graphite font-medium leading-relaxed">
        {copy.intro}{" "}
        <span className="text-gold-deep font-bold">{copy.requiredNote}</span>.
      </p>

      <div aria-hidden="true" className="absolute opacity-0 h-0 w-0 overflow-hidden pointer-events-none">
        <label htmlFor="honeypot">{copy.leaveEmpty}</label>
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
              {copy.fullName} <span className="text-gold-deep">{copy.requiredNote}</span>
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
              {copy.phone} <span className="text-gold-deep">{copy.requiredNote}</span>
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
            {copy.email}
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
          <legend className={labelBase}>{copy.vehicleLegend}</legend>
          <div className="grid grid-cols-3 gap-3">
            <input
              type="text"
              id="vehicleYear"
              name="vehicleYear"
              placeholder={copy.yearPlaceholder}
              inputMode="numeric"
              maxLength={4}
              value={formData.vehicleYear}
              onChange={handleChange}
              className={`${inputBase} tabular-nums`}
              aria-label={copy.yearAria}
            />
            <input
              type="text"
              id="vehicleMake"
              name="vehicleMake"
              placeholder={copy.makePlaceholder}
              value={formData.vehicleMake}
              onChange={handleChange}
              className={inputBase}
              aria-label={copy.makeAria}
            />
            <input
              type="text"
              id="vehicleModel"
              name="vehicleModel"
              placeholder={copy.modelPlaceholder}
              value={formData.vehicleModel}
              onChange={handleChange}
              className={inputBase}
              aria-label={copy.modelAria}
            />
          </div>
        </fieldset>

        <div>
          <label htmlFor="service" className={labelBase}>
            {copy.serviceNeeded}
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputBase} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat`}
            style={selectStyle}
          >
            <option value="">{copy.selectService}</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
            <option value="other">{copy.somethingElseBooking}</option>
          </select>
        </div>

        <div>
          <label htmlFor="preferredWindow" className={labelBase}>
            {copy.preferredWindow}
          </label>
          <select
            id="preferredWindow"
            name="preferredWindow"
            value={formData.preferredWindow}
            onChange={handleChange}
            className={`${inputBase} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat`}
            style={selectStyle}
          >
            <option value="">{copy.whenWorks}</option>
            {copy.windowOptions.map((w) => (
              <option key={w} value={w}>
                {w}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelBase}>
            {copy.whatsGoingOn}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder={copy.messagePlaceholder}
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
            copy.sending
          ) : (
            <>
              <Calendar size={16} strokeWidth={2.5} aria-hidden="true" />
              {copy.requestBooking}
            </>
          )}
        </button>
      </div>
    </form>
  );
}
