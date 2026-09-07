"use client";

import { useEffect, useRef, useState } from "react";
import { Clubhouse, Discovery } from "@/components/Discovery";
import { DualReveal } from "@/components/DualReveal";
import { FinalScreen } from "@/components/FinalScreen";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadOverlay } from "@/components/LeadOverlay";
import { LeadProvider } from "@/components/LeadProvider";
import { MobileLeadBar } from "@/components/MobileLeadBar";
import { SkyFlagship } from "@/components/SkyFlagship";

export function HomePage() {
  const [solid, setSolid] = useState(false);
  const heroMediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY || document.documentElement.scrollTop;
      setSolid(y > 24);
      if (heroMediaRef.current) {
        heroMediaRef.current.style.transform = `scale(${Math.max(1, 1.035 - y / 12000)})`;
      }
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <LeadProvider>
      <Header isSolid={solid} />
      <main className="six-scroll">
        <Hero mediaRef={heroMediaRef} />
        <Discovery />
        <Clubhouse />
        <DualReveal />
        <SkyFlagship />
        <FinalScreen />
      </main>
      <MobileLeadBar />
      <LeadOverlay />
    </LeadProvider>
  );
}
