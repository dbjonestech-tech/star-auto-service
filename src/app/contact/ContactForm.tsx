"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { track } from "@vercel/analytics";
import { getServices } from "@/lib/constants.es";
import type { Locale } from "@/lib/i18n";
import { UI } from "@/lib/translations/ui";

type Props = { locale?: Locale };

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  honeypot: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const INITIAL: FormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
  honeypot: "",
};

const inputBase =
  "w-full bg-paper border border-line px-4 py-3 text-sm text-ink font-medium placeholder:text-stone focus:outline-none focus-visible:border-royal focus-visible:ring-2 focus-visible:ring-royal/40 transition-colors";

const labelBase =
  "block text-[11px] uppercase tracking-[0.18em] font-bold text-graphite mb-2";

/** Editorial contact form. Locale-aware. Resend-backed via /api/contact. */
export function ContactForm({ locale = "en" }: Props) {
  const copy = UI[locale].contactForm;
  const services = getServices(locale);
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
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || copy.errorGeneric);
      }

      track("form_submit", { form: "contact", locale });
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
          <CheckCircle2 className="text-emerald" size={28} strokeWidth={2} aria-hidden="true" />
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
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%235c5550' d='M6 8.5 1.5 4h9z'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">{copy.selectService}</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
            <option value="other">{copy.somethingElse}</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelBase}>
            {copy.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
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
          className="w-full inline-flex items-center justify-center gap-2.5 bg-ink text-cream hover:bg-royal disabled:opacity-60 disabled:cursor-not-allowed px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          {status === "submitting" ? (
            copy.sending
          ) : (
            <>
              <Send size={15} strokeWidth={2.5} aria-hidden="true" />
              {copy.sendMessage}
            </>
          )}
        </button>
      </div>
    </form>
  );
}
