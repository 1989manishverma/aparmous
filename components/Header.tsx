"use client";

import { useLead } from "@/components/LeadProvider";
import { WhatsAppIcon } from "@/components/icons";
import { SITE } from "@/lib/site";

export function Header({ isSolid }: { isSolid: boolean }) {
  const { openLead } = useLead();

  return (
    <header className={isSolid ? "topbar is-solid" : "topbar"}>
      <div className="shell">
        <a className="brand-logo" href="#top" aria-label="Jashn Golf Estate home">
          <img src="/img/jashn-logo-official.png" alt="Jashn Golf Estate" />
        </a>
        <div className="top-actions">
          <a className="contact-phone" href={`tel:${SITE.phoneTel}`} aria-label={`Call ${SITE.phoneDisplay}`}>
            {SITE.phoneDisplay}
          </a>
          <a
            className="whatsapp-btn"
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener"
            aria-label={`WhatsApp ${SITE.phoneDisplay}`}
          >
            <WhatsAppIcon />
          </a>
          <button className="ghost-btn" type="button" onClick={() => openLead("header")}>
            Enquire
          </button>
        </div>
      </div>
    </header>
  );
}
