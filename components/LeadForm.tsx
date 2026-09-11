"use client";

import { useState, type FormEvent } from "react";
import { INTEREST_OPTIONS } from "@/lib/site";

type LeadFormProps = {
  source: string;
  submitLabel: string;
  includeEmail?: boolean;
  className?: string;
};

type Status = { kind: "idle" } | { kind: "ok"; message: string } | { kind: "error"; message: string };

export function LeadForm({
  source,
  submitLabel,
  includeEmail = true,
  className = "",
}: LeadFormProps) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [sending, setSending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (!String(data.name || "").trim() || !String(data.mobile || "").trim()) return;

    setSending(true);
    setStatus({ kind: "idle" });
    try {
      const qs = new URLSearchParams(window.location.search);
      const payload = {
        ...data,
        page: window.location.href,
        ts: new Date().toISOString(),
        utm_source: qs.get("utm_source") || "",
        utm_medium: qs.get("utm_medium") || "",
        utm_campaign: qs.get("utm_campaign") || "",
        gclid: qs.get("gclid") || "",
      };
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Endpoint rejected request");
      form.reset();
      setStatus({
        kind: "ok",
        message: "Thank you. Our team will contact you shortly.",
      });
      window.setTimeout(() => setStatus({ kind: "idle" }), 6000);
    } catch {
      setStatus({
        kind: "error",
        message: "We could not send your request. Please try again.",
      });
    } finally {
      setSending(false);
    }
  }

  const nameField = (
    <label>
      <span>Name</span>
      <input name="name" autoComplete="name" required placeholder="Your name" />
    </label>
  );

  const mobileField = (
    <label>
      <span>Mobile</span>
      <input name="mobile" autoComplete="tel" inputMode="tel" required placeholder="+91" />
    </label>
  );

  const emailField = includeEmail ? (
    <label>
      <span>
        Email <em>optional</em>
      </span>
      <input name="email" type="email" autoComplete="email" placeholder="you@example.com" />
    </label>
  ) : null;

  const interestField = (
    <label>
      <span>Interested in</span>
      <select name="interest" defaultValue="Not sure yet">
        {INTEREST_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <form className={className} data-lead-form onSubmit={onSubmit}>
      <input type="hidden" name="source" value={source} />
      {includeEmail ? (
        <>
          <div className="field-row">
            {nameField}
            {mobileField}
          </div>
          <div className="field-row">
            {emailField}
            {interestField}
          </div>
        </>
      ) : (
        <>
          {nameField}
          {mobileField}
          {interestField}
        </>
      )}
      <label className="consent">
        <input type="checkbox" name="consent" value="yes" required />
        <span>
          I agree to be contacted about Jashn Golf Estate.{" "}
          <a href="/privacy">Privacy Policy</a>
        </span>
      </label>
      <button className="btn dark" type="submit" disabled={sending}>
        {sending ? "Sending…" : submitLabel}
      </button>
      <p className="form-success" hidden={status.kind !== "ok"}>
        {status.kind === "ok" ? status.message : ""}
      </p>
      <p className="form-error" hidden={status.kind !== "error"}>
        {status.kind === "error" ? status.message : ""}
      </p>
    </form>
  );
}
