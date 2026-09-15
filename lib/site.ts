export const SITE_URL = "https://golfestate.jashnproperties.com";

export const SITE = {
  name: "Jashn Golf Estate",
  title: "Jashn Golf Estate Lucknow | Luxury 3, 4 & 5 BHK Homes",
  description:
    "Jashn Golf Estate in Sushant Golf City, Lucknow — luxury 3, 4 and 5 BHK homes with a 66,000 sq.ft. clubhouse, Sky Villas and private leisure on the greens.",
  phoneDisplay: "+91 81277 77274",
  phoneTel: "+918127777274",
  whatsappUrl:
    "https://wa.me/918127777274?text=Hi%2C%20I%E2%80%99m%20interested%20in%20Jashn%20Golf%20Estate%2C%20Sushant%20Golf%20City%2C%20Lucknow.%20Please%20share%20the%20latest%20pricing%2C%20brochure%20and%20available%20configurations%20with%20me.",
  leadRecipients: ["office@aparamous.com", "aparamous@gmail.com"],
  ogImage: "/img/PDFp023_IMG015_3271x1741.webp",
} as const;

export const INTEREST_OPTIONS = [
  "Not sure yet",
  "4.99 BHK",
  "Sky Villa",
  "Penthouse",
  "Private presentation",
] as const;

export const img = (file: string) => `/img/${file}`;

export const GOOGLE_ADS_ID = "AW-710234943";
export const GOOGLE_ADS_LEAD_CONVERSION = "AW-710234943/AyxTCKm_7fgcEL-m1dIC";
export const GOOGLE_ANALYTICS_ID = "G-94V0Q4986E";

export function trackLeadConversion() {
  if (typeof window === "undefined") return;
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", "conversion", { send_to: GOOGLE_ADS_LEAD_CONVERSION });
}
