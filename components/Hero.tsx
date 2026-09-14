"use client";

import { type RefObject } from "react";
import { useLead } from "@/components/LeadProvider";
import { useAutoSlider } from "@/lib/useAutoSlider";
import { img } from "@/lib/site";

const HERO_SLIDES = [
  {
    src: img("PDFp023_IMG015_3271x1741.webp"),
    mobile: img("PDFp023_IMG015_3271x1741-960.webp"),
    alt: "Jashn Golf Estate Lucknow landscaped water and luxury residences in Sushant Golf City",
  },
  {
    src: img("PDFp018_IMG010_3271x1741.webp"),
    mobile: img("PDFp018_IMG010_3271x1741-960.webp"),
    alt: "Floating paddle court at Jashn Golf Estate, Sushant Golf City Lucknow",
  },
  {
    src: img("PDFp022_IMG014_2665x1421.webp"),
    mobile: img("PDFp022_IMG014_2665x1421-960.webp"),
    alt: "Three-level clubhouse exterior at Jashn Golf Estate Lucknow",
  },
  {
    src: img("PDFp077_IMG097_3270x1742.webp"),
    mobile: img("PDFp077_IMG097_3270x1742-960.webp"),
    alt: "Sky Lounge jacuzzi terrace at Jashn Golf Estate luxury homes",
  },
  {
    src: img("PDFp085_IMG111_1613x1741.webp"),
    mobile: img("PDFp085_IMG111_1613x1741-960.webp"),
    alt: "Double-height Sky Villa living room at Jashn Golf Estate Lucknow",
  },
];

export function Hero({
  mediaRef,
}: {
  mediaRef: RefObject<HTMLDivElement | null>;
}) {
  const { openLead } = useLead();
  const index = useAutoSlider(HERO_SLIDES.length, 3600);
  const counter = `${String(index + 1).padStart(2, "0")} / ${String(HERO_SLIDES.length).padStart(2, "0")}`;

  return (
    <section className="screen hero" id="top">
      <div className="hero-media" ref={mediaRef}>
        <div className="hero-slides">
          {HERO_SLIDES.map((slide, i) => (
            <figure key={slide.src} className={i === index ? "hero-slide is-active" : "hero-slide"}>
              <picture>
                <source media="(max-width:700px)" srcSet={slide.mobile} />
                <img src={slide.src} alt={slide.alt} title={slide.alt} />
              </picture>
            </figure>
          ))}
        </div>
      </div>
      <div className="hero-content shell">
        <div className="hero-copy">
          <div className="hero-brandmark">
            <img src="/img/jashn-logo-official.png" alt="Jashn Golf Estate Lucknow" title="Jashn Golf Estate" />
          </div>
          <p className="eyebrow">Sushant Golf City · Lucknow</p>
          <h1>Life, on the greens at Jashn Golf Estate.</h1>
          <p className="hero-sub">
            <strong>Jashn Golf Estate</strong> in Sushant Golf City, Lucknow offers{" "}
            <strong>luxury 3, 4 and 5 BHK homes</strong> in a private residential estate shaped around
            landscape, leisure and a different rhythm of living.
          </p>
          <div className="hero-actions">
            <button className="btn light" type="button" onClick={() => openLead("hero")}>
              Request for Pricing
            </button>
            <a className="btn glass" href="#discover">
              Explore the estate
            </a>
          </div>
        </div>
        <span className="hero-counter">{counter}</span>
      </div>
      <a className="scroll-cue" href="#discover" aria-label="Continue">
        <span></span>Discover
      </a>
    </section>
  );
}
