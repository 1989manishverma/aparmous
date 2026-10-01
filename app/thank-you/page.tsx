import type { Metadata } from "next";
import Script from "next/script";
import { GOOGLE_ADS_LEAD_CONVERSION, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank you | Jashn Golf Estate",
  description: "Your enquiry for Jashn Golf Estate has been received.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/thank-you",
  },
};

export default function ThankYouPage() {
  return (
    <div className="legal-page">
      <Script id="google-ads-lead-conversion" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('event', 'conversion', {'send_to': '${GOOGLE_ADS_LEAD_CONVERSION}'});`}
      </Script>
      <header className="legal-topbar">
        <div className="shell">
          <a className="brand-logo" href="/" aria-label="Jashn Golf Estate home">
            <img
              src="/img/jashn-logo-official.png"
              alt="Jashn Golf Estate Lucknow logo"
              title="Jashn Golf Estate"
            />
          </a>
          <a className="ghost-btn" href="/">
            Back to estate
          </a>
        </div>
      </header>

      <article className="legal-article shell">
        <p className="eyebrow">Enquiry received</p>
        <h1>Thank you.</h1>
        <p className="legal-meta">Jashn Golf Estate · Sushant Golf City, Lucknow</p>
        <p>
          Our team will contact you shortly with project details, residence configurations and the
          information you requested.
        </p>
        <p>
          Call us on <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a> or write on{" "}
          <a href={SITE.whatsappUrl} target="_blank" rel="noopener">
            WhatsApp
          </a>
          .
        </p>
        <p className="legal-download">
          <a className="btn dark" href="/">
            Return to the estate
          </a>
        </p>
      </article>

      <footer className="legal-footer">
        <div className="shell">
          <span>Jashn Golf Estate · Sushant Golf City, Lucknow</span>
          <span>
            <a href="/privacy">Privacy Policy</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
