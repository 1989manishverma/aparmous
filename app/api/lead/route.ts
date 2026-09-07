import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";

function cleanLine(value: unknown, max = 180) {
  const text = String(value ?? "")
    .trim()
    .replace(/[\r\n]+/g, " ");
  return text.slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const name = cleanLine(data.name, 120);
  const mobile = cleanLine(data.mobile, 40);
  const email = cleanLine(data.email, 160);
  const interest = cleanLine(data.interest ?? "Not specified", 120);
  const source = cleanLine(data.source ?? "Website", 100);
  const page = cleanLine(data.page, 300);
  const timestamp = cleanLine(data.ts ?? new Date().toISOString(), 80);
  const utmSource = cleanLine(data.utm_source, 120);
  const utmMedium = cleanLine(data.utm_medium, 120);
  const utmCampaign = cleanLine(data.utm_campaign, 180);
  const gclid = cleanLine(data.gclid, 220);

  if (!name || !mobile) {
    return NextResponse.json(
      { ok: false, error: "Name and mobile are required" },
      { status: 422 }
    );
  }

  if (email && !isEmail(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 422 });
  }

  const subject = `Jashn Golf Estate Website Lead - ${interest}`;
  let body = "A new Jashn Golf Estate enquiry has been submitted.\n\n";
  body += `Name: ${name}\n`;
  body += `Mobile: ${mobile}\n`;
  body += `Email: ${email || "Not provided"}\n`;
  body += `Interest: ${interest}\n`;
  body += `Form source: ${source}\n`;
  body += `Page: ${page}\n`;
  body += `Submitted: ${timestamp}\n`;
  if (utmSource || utmMedium || utmCampaign || gclid) {
    body += "\nGoogle Ads / campaign data:\n";
    body += `utm_source: ${utmSource}\n`;
    body += `utm_medium: ${utmMedium}\n`;
    body += `utm_campaign: ${utmCampaign}\n`;
    body += `gclid: ${gclid}\n`;
  }
  body += "\nConsent: User selected the contact-consent checkbox on the website.\n";

  const recipients = SITE.leadRecipients.join(", ");
  const from = process.env.LEAD_FROM || "Jashn Golf Estate Leads <no-reply@aparamous.com>";

  if (!process.env.SMTP_HOST) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[lead] SMTP not configured. Dev capture:\n", body);
      return NextResponse.json({ ok: true, delivered: false });
    }
    return NextResponse.json(
      { ok: false, error: "Mail transport is not configured on this server" },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth:
        process.env.SMTP_USER && process.env.SMTP_PASS
          ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
          : undefined,
    });

    await transporter.sendMail({
      from,
      to: recipients,
      replyTo: email || undefined,
      subject,
      text: body,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[lead] mail failed", error);
    return NextResponse.json(
      { ok: false, error: "Mail transport is not configured on this server" },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405 });
}
