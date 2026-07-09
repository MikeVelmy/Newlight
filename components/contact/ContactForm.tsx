"use client";

import { useState, type FormEvent } from "react";
import { site, waLink } from "@/lib/site";
import { CheckIcon } from "@/components/ui/icons";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Form submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  function sendViaWhatsApp() {
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    if (!form) {
      window.open(waLink("Hi Velmure Tech, I'd like to talk about a new website."), "_blank", "noopener,noreferrer");
      return;
    }
    const data = new FormData(form);
    const name = String(data.get("full-name") || "");
    const business = String(data.get("business-name") || "");
    const pkg = String(data.get("package-interest") || "");
    const message = String(data.get("message") || "");
    const text = [
      `Hi Velmure Tech, I'd like to talk about a new website.`,
      name && `Name: ${name}`,
      business && `Business: ${business}`,
      pkg && pkg !== "Not sure yet" && `Package: ${pkg}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="card !border-t-4 !border-t-secondary p-8">
      <h2 className="text-xl font-bold text-ink">Or send us a message</h2>
      <p className="mt-2 text-sm text-slate-500">
        We&apos;ll get your message by email as soon as you hit send.
      </p>

      {status === "success" ? (
        <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-5" role="status">
          <div className="flex gap-3">
            <CheckIcon className="h-5 w-5 shrink-0 text-emerald-600" />
            <div>
              <p className="font-semibold text-emerald-800">
                Thanks — your message is on its way.
              </p>
              <p className="mt-1 text-sm text-emerald-700">
                We&apos;ll reply by email shortly. For a faster response right now, message
                us on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <form id="contact-form" className="mt-6 space-y-5" noValidate onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New website inquiry — Velmure Tech" />
          <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-slate-700">
                Full name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                required
                autoComplete="name"
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-base focus:border-secondary focus:ring-1 focus:ring-secondary"
              />
            </div>
            <div>
              <label htmlFor="business-name" className="block text-sm font-medium text-slate-700">
                Business name
              </label>
              <input
                type="text"
                id="business-name"
                name="business-name"
                required
                autoComplete="organization"
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-base focus:border-secondary focus:ring-1 focus:ring-secondary"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-base focus:border-secondary focus:ring-1 focus:ring-secondary"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                Phone <span className="font-normal text-slate-400">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-base focus:border-secondary focus:ring-1 focus:ring-secondary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="package-interest" className="block text-sm font-medium text-slate-700">
              Package of interest
            </label>
            <select
              id="package-interest"
              name="package-interest"
              defaultValue="Not sure yet"
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base focus:border-secondary focus:ring-1 focus:ring-secondary"
            >
              <option>Not sure yet</option>
              <option>Starter</option>
              <option>Growth</option>
              <option>Premium</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Tell us a bit about your business and what you're looking for."
              className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-base focus:border-secondary focus:ring-1 focus:ring-secondary"
            />
          </div>

          {status === "error" && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-5" role="alert">
              <p className="font-semibold text-red-800">
                Something went wrong sending your message.
              </p>
              <p className="mt-1 text-sm text-red-700">
                Please try again, or message us directly on WhatsApp instead.
              </p>
            </div>
          )}

          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
            <button type="submit" disabled={status === "sending"} className="btn btn-primary flex-1 disabled:opacity-60">
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            <button type="button" onClick={sendViaWhatsApp} className="btn btn-outline flex-1">
              Send via WhatsApp Instead
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
