"use client";

import { MobileCarousel } from "@/components/MobileCarousel";
import { Reveal } from "@/components/Reveal";
import { useLead } from "@/components/LeadProvider";
import { img } from "@/lib/site";

export function Discovery() {
  const { openLead } = useLead();

  return (
    <section className="screen discovery" id="discover">
      <div className="desktop-only shell discovery-grid discovery-grid-signature">
        <Reveal className="discovery-showcase">
          <figure className="signature-card signature-card-main">
            <img src={img("PDFp018_IMG010_3271x1741.webp")} alt="Floating paddle court surrounded by water" />
            <figcaption>Floating Paddle Court</figcaption>
          </figure>
          <figure className="signature-card">
            <img
              src={img("PDFp019_IMG011_3271x1741.webp")}
              alt="750-metre elevated skywalk through the landscape"
            />
            <figcaption>750-metre Elevated Skywalk</figcaption>
          </figure>
          <figure className="signature-card">
            <img src={img("PDFp020_IMG012_3270x1743.webp")} alt="9-hole mini golf putting range" />
            <figcaption>9-hole Mini Golf</figcaption>
          </figure>
        </Reveal>
        <Reveal className="discovery-copy">
          <p className="eyebrow">THREE SIGNATURE EXPERIENCES</p>
          <h2>Designed to make everyday leisure feel unexpected.</h2>
          <p>
            Begin with a floating paddle court, walk above the landscape on a 750-metre elevated
            skywalk, or step out for a 9-hole mini golf putting experience.
          </p>
          <button className="text-link" type="button" onClick={() => openLead("discover")}>
            See the complete experience <span>→</span>
          </button>
          <div className="compact-facts">
            <div>
              <strong>18</strong>
              <span>Acres</span>
            </div>
            <div>
              <strong>100+</strong>
              <span>Amenities</span>
            </div>
            <div>
              <strong>66,000</strong>
              <span>Sq.ft. clubhouse</span>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="mobile-only mobile-scene mobile-discovery shell">
        <Reveal className="mobile-scene-copy">
          <p className="eyebrow">SIGNATURE EXPERIENCES</p>
          <h2>Three reasons to look twice.</h2>
          <p>Floating paddle court · 750-metre elevated skywalk · 9-hole mini golf.</p>
        </Reveal>
        <MobileCarousel
            interval={3000}
            items={[
              {
                src: img("PDFp018_IMG010_3271x1741-960.webp"),
                alt: "Floating paddle court surrounded by water",
                caption: (
                  <>
                    <strong>Floating Paddle Court</strong>
                    <span>On the water</span>
                  </>
                ),
              },
              {
                src: img("PDFp019_IMG011_3271x1741-960.webp"),
                alt: "750-metre elevated skywalk through the landscape",
                caption: (
                  <>
                    <strong>750-metre Skywalk</strong>
                    <span>Above the landscape</span>
                  </>
                ),
              },
              {
                src: img("PDFp020_IMG012_3270x1743-960.webp"),
                alt: "9-hole mini golf putting range",
                caption: (
                  <>
                    <strong>9-hole Mini Golf</strong>
                    <span>Putting range</span>
                  </>
                ),
              },
            ]}
          />
        <div className="mobile-discovery-bottom">
          <button className="mobile-text-cta" type="button" onClick={() => openLead("discover-mobile")}>
            See the complete experience <span>→</span>
          </button>
          <div className="compact-facts mobile-compact-facts">
            <div>
              <strong>18</strong>
              <span>Acres</span>
            </div>
            <div>
              <strong>100+</strong>
              <span>Amenities</span>
            </div>
            <div>
              <strong>66,000</strong>
              <span>Sq.ft. clubhouse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Clubhouse() {
  const { openLead } = useLead();

  return (
    <section className="screen clubhouse">
      <div className="desktop-only shell clubhouse-layout">
        <Reveal className="clubhouse-copy">
          <p className="eyebrow">INSIDE THE CLUB</p>
          <h2>A private world in three levels.</h2>
          <p>Arrival, dining, wellness, recreation and entertainment come together as one continuous experience.</p>
          <button className="btn dark" type="button" onClick={() => openLead("clubhouse")}>
            Request clubhouse details
          </button>
        </Reveal>
        <div className="clubhouse-mosaic">
          <Reveal as="figure" className="club-tile club-tile-wide">
            <img src={img("PDFp032_IMG039_3000x1598.webp")} alt="Clubhouse entrance" />
            <span>Arrival</span>
          </Reveal>
          <Reveal as="figure" className="club-tile">
            <img src={img("PDFp034_IMG041_3270x1743.webp")} alt="Clubhouse cafe" />
            <span>Café</span>
          </Reveal>
          <Reveal as="figure" className="club-tile">
            <img src={img("PDFp042_IMG049_3270x1742.webp")} alt="Clubhouse restaurant" />
            <span>Dining</span>
          </Reveal>
          <Reveal as="figure" className="club-tile">
            <img src={img("PDFp045_IMG052_2560x1364.webp")} alt="Private theatre" />
            <span>Private theatre</span>
          </Reveal>
        </div>
      </div>
      <div className="mobile-only mobile-scene mobile-clubhouse shell">
        <Reveal className="mobile-scene-copy">
          <p className="eyebrow">INSIDE THE CLUB</p>
          <h2>A private world in three levels.</h2>
          <p>Arrival, dining, wellness and entertainment — shown one space at a time.</p>
        </Reveal>
        <MobileCarousel
            interval={2800}
            items={[
              {
                src: img("PDFp032_IMG039_3000x1598-960.webp"),
                alt: "Clubhouse entrance",
                caption: "Arrival",
              },
              {
                src: img("PDFp034_IMG041_3270x1743-960.webp"),
                alt: "Clubhouse cafe",
                caption: "Café",
              },
              {
                src: img("PDFp042_IMG049_3270x1742-960.webp"),
                alt: "Clubhouse restaurant",
                caption: "Dining",
              },
              {
                src: img("PDFp045_IMG052_2560x1364-960.webp"),
                alt: "Private theatre",
                caption: "Private theatre",
              },
            ]}
          />
        <button className="mobile-text-cta" type="button" onClick={() => openLead("clubhouse-mobile")}>
          Request clubhouse details <span>→</span>
        </button>
      </div>
    </section>
  );
}
