"use client";

import { useEffect, useState } from "react";

export function useAutoSlider(length: number, interval: number) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [length, interval]);

  return index;
}
