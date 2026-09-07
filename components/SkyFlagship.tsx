"use client";

import { MobileCarousel } from "@/components/MobileCarousel";
import { Reveal } from "@/components/Reveal";
import { useLead } from "@/components/LeadProvider";
import { useAutoSlider } from "@/lib/useAutoSlider";
import { img } from "@/lib/site";

const SKY_SLIDES = [
  {
    src: img("PDFp077_IMG097_3270x1742.webp"),
    alt: "Sky Lounge jacuzzi terrace",
  },
  {
    src: img("PDFp078_IMG098_3270x1742.webp"),
    alt: "Sky Lounge bar and lounge",
  },
];

export function SkyFlagship() {
  const { openLead } = useLead();
  const skyIndex = useAutoSlider(SKY_SLIDES.length, 3900);

  return (
    <section className="screen sky-flagship">
      <div className="desktop-only shell sky-layout">
        <Reveal className="sky-story">
          <div className="sky-slider">
            {SKY_SLIDES.map((slide, i) => (
              <figure key={slide.src} className={i === skyIndex ? "sky-slide is-active" : "sky-slide"}>
                <img src={slide.src} alt={slide.alt} />
              </figure>
            ))}
          </div>
          <div className="image-overlay-copy">
            <p className="eyebrow">ABOVE THE RESIDENCE</p>
            <h2>And then there is the sky.</h2>
            <p>A private rooftop extension for open-air living.</p>
          </div>
        </Reveal>
        <Reveal className="villa-story">
          <img src={img("PDFp085_IMG111_1613x1741.webp")} alt="Double-height Sky Villa living space" />
          <div className="villa-caption">
            <p className="eyebrow">THE FLAGSHIP · SKY VILLA</p>
            <h2>A living room at another scale.</h2>
            <button className="btn light" type="button" onClick={() => openLead("sky-villa")}>
              Ask about Sky Villas
            </button>
          </div>
        </Reveal>
      </div>
      <div className="mobile-only mobile-scene mobile-sky shell">
        <Reveal className="mobile-scene-copy">
          <p className="eyebrow">ABOVE THE RESIDENCE</p>
          <h2>Open sky. Then another scale.</h2>
          <p>Move from the private Sky Lounge to the double-height Sky Villa without crowding the screen.</p>
        </Reveal>
        <MobileCarousel
            interval={3100}
            items={[
              {
                src: img("PDFp077_IMG097_3270x1742-960.webp"),
                alt: "Sky Lounge jacuzzi terrace",
                caption: (
                  <>
                    <strong>Sky Lounge</strong>
                    <span>Jacuzzi terrace</span>
                  </>
                ),
              },
              {
                src: img("PDFp078_IMG098_3270x1742-960.webp"),
                alt: "Sky Lounge bar and lounge",
                caption: (
                  <>
                    <strong>Sky Lounge</strong>
                    <span>Open-air entertaining</span>
                  </>
                ),
              },
              {
                src: img("PDFp085_IMG111_1613x1741-960.webp"),
                alt: "Double-height Sky Villa living space",
                className: "portrait-focus",
                caption: (
                  <>
                    <strong>Sky Villa</strong>
                    <span>Double-height living</span>
                  </>
                ),
              },
            ]}
          />
        <button className="mobile-text-cta" type="button" onClick={() => openLead("sky-villa-mobile")}>
          Ask about Sky Villas <span>→</span>
        </button>
      </div>
    </section>
  );
}
