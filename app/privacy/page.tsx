import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Jashn Golf Estate",
  description:
    "How Aparamous Solutions Pvt. Ltd. collects and uses information on the Jashn Golf Estate website.",
};

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <header className="legal-topbar">
        <div className="shell">
          <a className="brand-logo" href="/" aria-label="Jashn Golf Estate home">
            <img src="/img/jashn-logo-official.png" alt="Jashn Golf Estate" />
          </a>
          <a className="ghost-btn" href="/">
            Back to estate
          </a>
        </div>
      </header>

      <article className="legal-article shell">
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="legal-meta">
          Jashn Golf Estate · Effective Date: 11 September 2026 · Last Updated: 11 September 2026
        </p>
        <p>
          Aparamous Solutions Pvt. Ltd. (“Aparamous”, “we”, “us” or “our”) respects your privacy. This
          Privacy Policy explains how we collect and use information when you visit or submit an enquiry
          through the Jashn Golf Estate website:{" "}
          <a href="https://golfestate.jashnproperties.com/">https://golfestate.jashnproperties.com/</a>
        </p>
        <p>By using this website or submitting your information, you acknowledge this Privacy Policy.</p>

        <h2>1. Information We Collect</h2>
        <p>When you submit an enquiry, we may collect:</p>
        <ul>
          <li>Name</li>
          <li>Mobile number</li>
          <li>Email address</li>
          <li>Property or residence preferences</li>
          <li>Information provided in your enquiry or communication</li>
        </ul>
        <p>
          We may also automatically collect limited technical information such as your IP address,
          browser/device information, pages visited, referring source and website usage data.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We may use your information to:</p>
        <ul>
          <li>Respond to your enquiries and requests</li>
          <li>Provide information about Jashn Golf Estate</li>
          <li>Share brochures, project details, pricing or availability</li>
          <li>Arrange calls or site visits</li>
          <li>Understand your property requirements</li>
          <li>Improve our website and marketing</li>
          <li>Maintain website security and prevent misuse</li>
          <li>Comply with applicable laws and regulations</li>
        </ul>

        <h2>3. Sharing Your Information</h2>
        <p>
          Your enquiry information may be shared with authorised Jashn Golf Estate/Jashn Realty
          representatives, developer representatives, sales personnel and relevant service providers
          where necessary to respond to or manage your enquiry.
        </p>
        <p>
          We may also use third-party service providers for website hosting, analytics, lead management,
          communication, advertising measurement and related services.
        </p>
        <p>We do not sell your personal information as a standalone commodity.</p>

        <h2>4. Calls, WhatsApp and Marketing</h2>
        <p>
          If you submit an enquiry and consent to being contacted, Aparamous and/or authorised project
          representatives may contact you by phone, WhatsApp, SMS or email regarding Jashn Golf Estate.
        </p>
        <p>
          You may request to stop marketing communications at any time. This will not necessarily
          prevent communications required to respond to an active enquiry or provide a service you have
          requested.
        </p>

        <h2>5. Cookies and Analytics</h2>
        <p>
          We may use cookies, Google Tag Manager and similar technologies to operate the website,
          understand website usage, measure marketing performance and improve user experience.
        </p>
        <p>
          You can manage or disable cookies through your browser settings. Some website functionality
          may be affected if cookies are disabled.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We take reasonable technical and organisational measures to protect your personal information
          against unauthorised access, misuse, loss or disclosure.
        </p>
        <p>However, no electronic transmission or storage system can be guaranteed to be completely secure.</p>

        <h2>7. Data Retention</h2>
        <p>
          We retain personal information only for as long as reasonably necessary to respond to
          enquiries, provide services, maintain business records, meet legal requirements and protect
          our legitimate interests.
        </p>
        <p>
          When information is no longer required, it may be deleted, anonymised or securely disposed of
          in accordance with applicable requirements.
        </p>

        <h2>8. Your Rights</h2>
        <p>Subject to applicable law, you may request to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion where applicable</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Stop marketing communications</li>
          <li>Raise a privacy-related complaint</li>
        </ul>
        <p>To make a request, please contact us using the details below.</p>

        <h2>9. Third-Party Websites</h2>
        <p>
          This website may contain links or integrations with third-party services such as WhatsApp or
          other websites. Their own privacy policies may apply when you interact directly with those
          services.
        </p>
        <p>We are not responsible for the privacy practices of third-party websites that we do not control.</p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our services,
          technology, data practices or applicable laws.
        </p>
        <p>Any updates will be posted on this page with a revised Last Updated date.</p>

        <h2>11. Contact Us</h2>
        <p>
          For questions, privacy requests or concerns regarding your personal information, please
          contact:
        </p>
        <p>
          <strong>Aparamous Solutions Pvt. Ltd.</strong>
          <br />
          Email: <a href="mailto:office@aparamous.com">office@aparamous.com</a>
          <br />
          Phone: <a href="tel:+918009227605">+91 8009227605</a>
          <br />
          Address: Office No. 205 &amp; 206, Millennium Place, Sector B, Ansal API, Sushant Golf City,
          Lucknow – 226030, Uttar Pradesh, India.
        </p>
        <p>
          We will make reasonable efforts to respond to privacy-related requests in accordance with
          applicable law.
        </p>

        <p className="legal-download">
          <a href="/Jashn_Golf_Estate_Privacy_Policy.pdf" target="_blank" rel="noopener">
            Download this policy as PDF
          </a>
        </p>
      </article>

      <footer className="legal-footer">
        <div className="shell">
          <span>Jashn Golf Estate · Sushant Golf City, Lucknow</span>
          <span>
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a> · <a href="/">Home</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
