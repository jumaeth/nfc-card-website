"use client";

import { useState } from "react";
import { ui } from "@/lib/site";
import { useT } from "@/lib/i18n";
import { Arrow } from "@/components/ui";

// Same look as the shared solid <Button>, but a real submit button so the
// form's native validation and submit handling apply.
const submitBtnCls =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 will-change-transform bg-accent text-white hover:bg-accent-ink hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(47,109,240,0.7)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0";

const inputCls =
  "w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-ink";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const t = useT();
  const c = ui.contact;
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const set = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", company: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-card border border-line bg-paper-2/40 p-8 text-center">
        <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-full bg-accent-soft text-accent">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="display text-2xl text-ink">{t(c.successTitle)}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{t(c.successBody)}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-card border border-line bg-paper-2/40 p-6 sm:p-8">
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={t(c.fieldName)}>
            <input
              type="text"
              required
              className={inputCls}
              value={form.name}
              placeholder={t(c.fieldNamePh)}
              onChange={(e) => set("name", e.target.value)}
            />
          </Field>
          <Field label={t(c.fieldEmail)}>
            <input
              type="email"
              required
              inputMode="email"
              className={inputCls}
              value={form.email}
              placeholder={t(c.fieldEmailPh)}
              onChange={(e) => set("email", e.target.value)}
            />
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={t(c.fieldCompany)}>
            <input
              type="text"
              className={inputCls}
              value={form.company}
              placeholder={t(c.fieldCompanyPh)}
              onChange={(e) => set("company", e.target.value)}
            />
          </Field>
          <Field label={t(c.fieldPhone)}>
            <input
              type="tel"
              inputMode="tel"
              className={inputCls}
              value={form.phone}
              placeholder={t(c.fieldPhonePh)}
              onChange={(e) => set("phone", e.target.value)}
            />
          </Field>
        </div>
        <Field label={t(c.fieldMessage)}>
          <textarea
            required
            rows={5}
            className="w-full resize-y rounded-xl border border-line bg-paper px-3.5 py-2.5 text-sm leading-relaxed text-ink outline-none transition-colors focus:border-ink"
            value={form.message}
            placeholder={t(c.fieldMessagePh)}
            onChange={(e) => set("message", e.target.value)}
          />
        </Field>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm font-medium text-accent">{t(c.error)}</p>
      )}

      <div className="mt-6 flex justify-end">
        <button type="submit" disabled={status === "sending"} className={submitBtnCls}>
          {status === "sending" ? t(c.sending) : t(c.submit)} <Arrow />
        </button>
      </div>
    </form>
  );
}
