"use client";

import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/Reveal";
import { SITE, img } from "@/lib/site";

export function FinalScreen() {
  return (
    <section className="screen final-screen" id="interest">
      <div className="final-media">
        <img src={img("PDFp097_IMG128_3114x830.webp")} alt="Penthouse living and dining panorama" />
      </div>
      <div className="desktop-only shell final-layout">
        <Reveal className="final-copy">
          <p className="eyebrow">THE PRIVATE PRESENTATION</p>
          <h2>We have shown only part of the story.</h2>
          <p>
            Request project details, residence configurations and a focused conversation around what
            interests you.
          </p>
        </Reveal>
        <Reveal>
          <LeadForm className="lead-card" source="final-form" submitLabel="Download Brochure" />
        </Reveal>
      </div>
      <div className="mobile-only mobile-final shell">
        <Reveal className="mobile-final-copy">
          <p className="eyebrow">PRIVATE PRESENTATION</p>
          <h2>Want to know what we have not shown?</h2>
          <p>
            Leave your details and we will share the project presentation and relevant residence
            options.
          </p>
        </Reveal>
        <Reveal>
          <LeadForm
            className="mobile-lead-card"
            source="final-form-mobile"
            submitLabel="Download Brochure"
            includeEmail={false}
          />
        </Reveal>
      </div>
      <footer className="final-footer shell">
        <span>Jashn Golf Estate · Sushant Golf City, Lucknow</span>
        <span>
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a> ·{" "}
          <a href={SITE.whatsappUrl} target="_blank" rel="noopener">
            WhatsApp
          </a>
        </span>
      </footer>
    </section>
  );
}
