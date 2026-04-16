"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const disabled = status === "submitting";

  const statusText = useMemo(() => {
    if (status === "success") return "Message sent — we’ll get back to you soon.";
    if (status === "error") return "Couldn’t send message. Please try again.";
    return null;
  }, [status]);

  return (
    <form
      className="rounded-3xl border border-black/5 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("submitting");
        setError(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const payload = {
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          phone: String(formData.get("phone") ?? ""),
          service: String(formData.get("service") ?? ""),
          currency: String(formData.get("currency") ?? ""),
          message: String(formData.get("message") ?? ""),
        };

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (!res.ok) {
            const data = (await res.json().catch(() => null)) as
              | { error?: string }
              | null;
            throw new Error(data?.error ?? "Request failed");
          }

          form.reset();
          setStatus("success");
        } catch (err) {
          setStatus("error");
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          placeholder="Insert your full name"
          required
          disabled={disabled}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="name@company.com"
          required
          disabled={disabled}
        />
        <Field
          label="Phone"
          name="phone"
          placeholder="+92..."
          disabled={disabled}
        />
        <Field
          label="Currency"
          name="currency"
          type="select"
          options={["USD", "GBP", "EUR", "PKR", "AED"]}
          disabled={disabled}
        />
        <Field
          label="Service"
          name="service"
          type="select"
          options={[
            "Application Development",
            "Portal Development",
            "Cyber Security",
            "IT Consulting",
            "IT Installation",
            "Hardware & Network Maintenance",
            "Other",
          ]}
          disabled={disabled}
        />
        <div className="sm:col-span-2">
          <label className="text-sm font-semibold">
            Message
            <textarea
              name="message"
              required
              disabled={disabled}
              placeholder="Tell us about your project..."
              className="mt-2 h-28 w-full resize-none rounded-2xl border border-black/10 bg-background px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-[color:var(--brand)] disabled:opacity-70 dark:border-white/15 dark:placeholder:text-zinc-500"
            />
          </label>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs leading-5 text-zinc-600 dark:text-zinc-300">
          <div>By submitting, you agree to be contacted about your request.</div>
          {statusText ? (
            <div
              className={
                status === "success"
                  ? "mt-1 font-semibold text-foreground"
                  : "mt-1 font-semibold text-red-600 dark:text-red-400"
              }
              role="status"
              aria-live="polite"
            >
              {statusText}
              {status === "error" && error ? (
                <span className="font-normal"> ({error})</span>
              ) : null}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={disabled}
          className="inline-flex h-11 items-center justify-center rounded-full bg-[color:var(--brand)] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}

function Field(props: {
  label: string;
  name: string;
  placeholder?: string;
  type?: "text" | "email" | "select";
  options?: string[];
  required?: boolean;
  disabled?: boolean;
}) {
  const type = props.type ?? "text";
  return (
    <label className="text-sm font-semibold">
      {props.label}
      {type === "select" ? (
        <select
          name={props.name}
          disabled={props.disabled}
          className="mt-2 h-11 w-full rounded-2xl border border-black/10 bg-background px-4 text-sm outline-none focus:border-[color:var(--brand)] disabled:opacity-70 dark:border-white/15"
          defaultValue={props.options?.[0] ?? ""}
        >
          {(props.options ?? []).map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={props.name}
          type={type}
          required={props.required}
          disabled={props.disabled}
          placeholder={props.placeholder}
          className="mt-2 h-11 w-full rounded-2xl border border-black/10 bg-background px-4 text-sm outline-none placeholder:text-zinc-400 focus:border-[color:var(--brand)] disabled:opacity-70 dark:border-white/15 dark:placeholder:text-zinc-500"
        />
      )}
    </label>
  );
}

