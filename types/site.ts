export type BookingProvider =
  | "booksy"
  | "square"
  | "vagaro"
  | "fresha"
  | "calendly"
  | "other";

export type HoursRow = {
  day: string;
  hours: string;
};

export type BusinessConfig = {
  previewMode: boolean;
  businessName: string;
  shortName: string;
  tagline: string;
  description: string;
  cityLine: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  hours: HoursRow[];
  bookingProvider: BookingProvider;
  bookingUrl: string;
  googleMapsUrl: string;
  googleReviewsUrl: string;
  googleRating: number;
  googleReviewCount: number;
  instagramUrl?: string;
  facebookUrl?: string;
  walkInsWelcome?: boolean;
  sameDayAppointments?: boolean;
  parkingNotes?: string;
  yearsInBusiness?: number;
  clientsServed?: string;
  brand: {
    background: string;
    surface: string;
    ink: string;
    muted: string;
    accent: string;
  };
};

export type Service = {
  id: string;
  name: string;
  description: string;
  price?: string;
  startingPrice?: string;
  duration?: string;
  category: string;
  featured?: boolean;
  image: string;
  bookingUrl?: string;
};

export type StaffMember = {
  id: string;
  name: string;
  role: string;
  photo: string;
  shortBio: string;
  specialties: string[];
  yearsExperience?: number;
  instagramUrl?: string;
  bookingUrl?: string;
  serviceBookingUrls?: Record<string, string>;
  featured?: boolean;
};

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: string;
};

export type Review = {
  id: string;
  name: string;
  quote: string;
  rating: number;
  detail?: string;
};

export type Promotion = {
  id: string;
  badge?: string;
  title: string;
  description: string;
  expiration?: string;
  ctaLabel: string;
  ctaUrl?: string;
  featured?: boolean;
};
