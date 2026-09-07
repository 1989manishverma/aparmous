"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type LeadContextValue = {
  open: boolean;
  source: string;
  openLead: (source?: string) => void;
  closeLead: () => void;
};

const LeadContext = createContext<LeadContextValue | null>(null);

export function LeadProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState("drawer");

  const openLead = useCallback((nextSource = "cta") => {
    setSource(nextSource);
    setOpen(true);
    document.body.classList.add("no-scroll");
  }, []);

  const closeLead = useCallback(() => {
    setOpen(false);
    document.body.classList.remove("no-scroll");
  }, []);

  const value = useMemo(
    () => ({ open, source, openLead, closeLead }),
    [open, source, openLead, closeLead]
  );

  return <LeadContext.Provider value={value}>{children}</LeadContext.Provider>;
}

export function useLead() {
  const ctx = useContext(LeadContext);
  if (!ctx) throw new Error("useLead must be used within LeadProvider");
  return ctx;
}
