"use client";

import { useEffect } from "react";
import { LeadForm } from "@/components/LeadForm";
import { useLead } from "@/components/LeadProvider";

export function LeadOverlay() {
  const { open, source, closeLead } = useLead();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLead();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeLead]);

  return (
    <div
      className={open ? "lead-overlay open" : "lead-overlay"}
      id="leadOverlay"
      aria-hidden={open ? "false" : "true"}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeLead();
      }}
    >
      <aside className="lead-drawer" role="dialog" aria-modal="true" aria-labelledby="leadTitle">
        <button className="drawer-close" type="button" onClick={closeLead} aria-label="Close">
          ×
        </button>
        <p className="eyebrow">PRIVATE ENQUIRY</p>
        <h2 id="leadTitle">Receive the project details.</h2>
        <p className="drawer-copy">
          Tell us where we can reach you. We’ll keep the conversation focused on the residence
          options you care about.
        </p>
        <LeadForm className="lead-form" source={source} submitLabel="Submit Enquiry" />
      </aside>
    </div>
  );
}
