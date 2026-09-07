"use client";

import { MoonIcon, SunIcon } from "@/components/icons";

export function DayNightToggle({
  night,
  onChange,
  className = "daynight-toggle",
}: {
  night: boolean;
  onChange: (night: boolean) => void;
  className?: string;
}) {
  return (
    <div className={className} aria-label="Choose day or night view">
      <button
        type="button"
        className={night ? undefined : "is-active"}
        data-mode="day"
        aria-pressed={night ? "false" : "true"}
        aria-label="Day view"
        onClick={() => onChange(false)}
      >
        <SunIcon />
        <span className="sr-only">Day</span>
      </button>
      <button
        type="button"
        className={night ? "is-active" : undefined}
        data-mode="night"
        aria-pressed={night ? "true" : "false"}
        aria-label="Night view"
        onClick={() => onChange(true)}
      >
        <MoonIcon />
        <span className="sr-only">Night</span>
      </button>
    </div>
  );
}
