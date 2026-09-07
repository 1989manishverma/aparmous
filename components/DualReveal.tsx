"use client";

import { useState } from "react";
import { DayNightToggle } from "@/components/DayNightToggle";
import { MobileCarousel } from "@/components/MobileCarousel";
import { Reveal } from "@/components/Reveal";
import { useLead } from "@/components/LeadProvider";
import { useAutoSlider } from "@/lib/useAutoSlider";
import { img } from "@/lib/site";

const LOWER_SLIDES = [
  {
    src: img("PDFp059_IMG073_3270x1743.webp"),
    alt: "Lower ground entertainment lounge",
    label: "Private entertaining",
  },
  {
    src: img("PDFp061_IMG075_3270x1743.webp"),
    alt: "Lower ground media lounge",
    label: "Media & family space",
  },
  {
    src: img("PDFp067_IMG083_3270x1742.webp"),
    alt: "Lower ground home theatre",
    label: "Home theatre",
  },
];

export function DualReveal() {
  const { openLead } = useLead();
  const [desktopNight, setDesktopNight] = useState(false);
  const [mobileNight, setMobileNight] = useState(false);
  const lowerIndex = useAutoSlider(LOWER_SLIDES.length, 3400);

  return (
    <section className="screen dual-reveal">
      <div className="desktop-only shell dual-layout">
        <Reveal className="architecture-block">
          <div className="section-minihead">
            <div>
              <p className="eyebrow">ARCHITECTURE</p>
              <h2>One elevation. Two moods.</h2>
            </div>
            <DayNightToggle night={desktopNight} onChange={setDesktopNight} />
          </div>
          <div className={desktopNight ? "dn-frame is-night" : "dn-frame"}>
            <img src={img("PDFp047_IMG054_1604x1480.webp")} alt="Building elevation by day" />
            <img className="night" src={img("PDFp047_IMG055_1604x1480.webp")} alt="Building elevation by night" />
          </div>
        </Reveal>
        <Reveal className="lower-block">
          <div className="lower-copy">
            <p className="eyebrow">BELOW THE RESIDENCE</p>
            <h2>The room you did not expect.</h2>
            <p>
              The Lower Ground Studio adds a private layer for entertaining, family time, guests or
              focused work.
            </p>
          </div>
          <div className="lower-gallery">
            {LOWER_SLIDES.map((slide, i) => (
              <figure key={slide.src} className={i === lowerIndex ? "lower-slide is-active" : "lower-slide"}>
                <img src={slide.src} alt={slide.alt} />
                <span>{slide.label}</span>
              </figure>
            ))}
          </div>
          <button className="text-link light-link" type="button" onClick={() => openLead("lower-ground")}>
            Explore configurations <span>→</span>
          </button>
        </Reveal>
      </div>
      <div className="mobile-only mobile-scene mobile-dual shell">
        <Reveal className="mobile-scene-copy mobile-scene-copy-light">
          <p className="eyebrow">ARCHITECTURE · LOWER GROUND</p>
          <h2>Two unexpected layers of the residence.</h2>
        </Reveal>
        <Reveal className="mobile-architecture">
          <div className="mobile-architecture-head">
            <span>Elevation</span>
            <DayNightToggle
              night={mobileNight}
              onChange={setMobileNight}
              className="daynight-toggle daynight-toggle-mobile"
            />
          </div>
          <div className={mobileNight ? "mobile-dn-frame is-night" : "mobile-dn-frame"}>
            <img src={img("PDFp047_IMG054_1604x1480-960.webp")} alt="Building elevation by day" />
            <img className="night" src={img("PDFp047_IMG055_1604x1480-960.webp")} alt="Building elevation by night" />
          </div>
        </Reveal>
        <Reveal className="mobile-lower-wrap">
          <div className="mobile-lower-head">
            <strong>Lower Ground Studio</strong>
            <span>Swipe to explore</span>
          </div>
          <MobileCarousel
            className="mobile-carousel-dark mobile-lower-carousel"
            interval={3200}
            items={[
              {
                src: img("PDFp059_IMG073_3270x1743-960.webp"),
                alt: "Lower ground entertainment lounge",
                caption: (
                  <>
                    <strong>Lower Ground Studio</strong>
                    <span>Private entertaining</span>
                  </>
                ),
              },
              {
                src: img("PDFp067_IMG083_3270x1742-960.webp"),
                alt: "Lower ground home theatre",
                caption: (
                  <>
                    <strong>Lower Ground Studio</strong>
                    <span>Home theatre</span>
                  </>
                ),
              },
            ]}
          />
        </Reveal>
        <button
          className="mobile-text-cta mobile-text-cta-light"
          type="button"
          onClick={() => openLead("lower-ground-mobile")}
        >
          Explore configurations <span>→</span>
        </button>
      </div>
    </section>
  );
}
