import type { BusinessConfig } from "@/types/site";

/**
 * CLIENT CLONE CHECKLIST — start here.
 * Most prospect-specific changes should happen in this file or /data/site.ts.
 */
export const business: BusinessConfig = {
  previewMode: true,
  businessName: "Northline Barber Co.",
  shortName: "Northline",
  tagline: "Sharp work. Easy booking. No guesswork.",
  description:
    "A modern neighborhood barbershop built around consistent work, easy appointments, and the kind of service that keeps clients coming back.",
  cityLine: "Serving Stafford + Southwest Houston",
  phone: "+1 (281) 555-0147",
  email: "hello@northlinebarber.com",
  address: "1234 Main Street",
  city: "Stafford",
  state: "TX",
  zip: "77477",
  hours: [
    { day: "Monday", hours: "10:00 AM – 6:00 PM" },
    { day: "Tuesday", hours: "10:00 AM – 7:00 PM" },
    { day: "Wednesday", hours: "10:00 AM – 7:00 PM" },
    { day: "Thursday", hours: "10:00 AM – 7:00 PM" },
    { day: "Friday", hours: "9:00 AM – 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  bookingProvider: "booksy",
  bookingUrl: "https://booksy.com/",
  googleMapsUrl: "https://maps.google.com/",
  googleReviewsUrl: "https://www.google.com/maps",
  googleRating: 4.9,
  googleReviewCount: 327,
  instagramUrl: "https://www.instagram.com/",
  walkInsWelcome: true,
  sameDayAppointments: true,
  parkingNotes: "Free parking directly in front of the shop.",
  yearsInBusiness: 8,
  clientsServed: "4,000+",
  brand: {
    background: "#0d0d0d",
    surface: "#171716",
    ink: "#f5f1e8",
    muted: "#aaa59b",
    accent: "#d5b67a",
  },
};

export const fullAddress = `${business.address}, ${business.city}, ${business.state} ${business.zip}`;

export const phoneHref = `tel:${business.phone.replace(/[^+\d]/g, "")}`;
