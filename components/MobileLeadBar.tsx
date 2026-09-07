"use client";

import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { useLead } from "@/components/LeadProvider";
import { SITE } from "@/lib/site";

export function MobileLeadBar() {
  const { openLead } = useLead();

  return (
    <div className="mobile-lead">
      <a className="mobile-action" href={`tel:${SITE.phoneTel}`} aria-label={`Call ${SITE.phoneDisplay}`}>
        <PhoneIcon />
        <span>Call</span>
      </a>
      <a
        className="mobile-action"
        href={SITE.whatsappUrl}
        target="_blank"
        rel="noopener"
        aria-label={`WhatsApp ${SITE.phoneDisplay}`}
      >
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
      <button
        className="mobile-action mobile-action-enquire"
        type="button"
        onClick={() => openLead("mobile-sticky")}
      >
        <span>Enquire</span>
      </button>
    </div>
  );
}
