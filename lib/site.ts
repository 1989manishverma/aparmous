export const SITE = {
  name: "Jashn Golf Estate",
  title: "Jashn Golf Estate Lucknow | Luxury 3,4 & 5 BHK Homes in Sushant Golf City",
  description:
    "Jashn Golf Estate — private residential living at Sushant Golf City, Lucknow.",
  phoneDisplay: "+91 81277 77274",
  phoneTel: "+918127777274",
  whatsappUrl:
    "https://wa.me/918127777274?text=Hi%2C%20I%E2%80%99m%20interested%20in%20Jashn%20Golf%20Estate%2C%20Sushant%20Golf%20City%2C%20Lucknow.%20Please%20share%20the%20latest%20pricing%2C%20brochure%20and%20available%20configurations%20with%20me.",
  leadRecipients: ["office@aparamous.com", "aparamous@gmail.com"],
} as const;

export const INTEREST_OPTIONS = [
  "Not sure yet",
  "4.99 BHK",
  "Sky Villa",
  "Penthouse",
  "Private presentation",
] as const;

export const img = (file: string) => `/img/${file}`;
