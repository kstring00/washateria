import type { GalleryItem, Promotion, Review, Service, StaffMember } from "@/types/site";

export const services: Service[] = [
  {
    id: "classic-cut",
    name: "Classic Cut",
    description: "Consultation, precision cut, clean finish, and styling.",
    price: "$35",
    duration: "35 min",
    category: "Haircuts",
    featured: true,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85",
    bookingUrl: "https://booksy.com/",
  },
  {
    id: "skin-fade",
    name: "Skin Fade",
    description: "Detailed fade work with a crisp lineup and finished style.",
    price: "$45",
    duration: "45 min",
    category: "Haircuts",
    featured: true,
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "cut-beard",
    name: "Cut + Beard",
    description: "Full haircut paired with beard shaping, lineup, and finish.",
    price: "$55",
    duration: "60 min",
    category: "Packages",
    featured: true,
    image: "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "beard-trim",
    name: "Beard Detail",
    description: "Shape, line, trim, and finish for a clean balanced beard.",
    price: "$25",
    duration: "25 min",
    category: "Beard",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "kids-cut",
    name: "Young Gentleman",
    description: "Patient, polished cut for clients 12 and under.",
    price: "$30",
    duration: "30 min",
    category: "Haircuts",
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "design-work",
    name: "Design / Line Work",
    description: "Custom line work and detail added to your haircut service.",
    startingPrice: "$10",
    duration: "+15 min",
    category: "Add-ons",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=85",
  },
];

export const staff: StaffMember[] = [
  {
    id: "marcus",
    name: "Marcus Reed",
    role: "Master Barber",
    photo: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=85",
    shortBio: "Known for sharp fades, natural beard work, and taking the extra minute to get the details right.",
    specialties: ["Fades", "Beards", "Designs"],
    yearsExperience: 9,
    bookingUrl: "https://booksy.com/",
    serviceBookingUrls: {
      "skin-fade": "https://booksy.com/",
      "cut-beard": "https://booksy.com/",
    },
    featured: true,
  },
  {
    id: "andre",
    name: "Andre Lewis",
    role: "Barber",
    photo: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=900&q=85",
    shortBio: "Clean tapers, textured cuts, and easy-going appointments built around what works for your hair.",
    specialties: ["Tapers", "Texture", "Scissor Work"],
    yearsExperience: 6,
    bookingUrl: "https://squareup.com/appointments",
    featured: true,
  },
  {
    id: "devon",
    name: "Devon Price",
    role: "Barber",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    shortBio: "Classic cuts, kid-friendly service, and dependable results for clients who like to keep it simple.",
    specialties: ["Classic Cuts", "Kids", "Lineups"],
    yearsExperience: 5,
    featured: true,
  },
];

export const gallery: GalleryItem[] = [
  { id: "g1", src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85", alt: "Fresh fade haircut", category: "Fades" },
  { id: "g2", src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85", alt: "Barber finishing a haircut", category: "Cuts" },
  { id: "g3", src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=85", alt: "Detailed barber work", category: "Detail" },
  { id: "g4", src: "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?auto=format&fit=crop&w=1200&q=85", alt: "Modern barbershop cut", category: "Cuts" },
  { id: "g5", src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=85", alt: "Barber tools and service", category: "Shop" },
  { id: "g6", src: "https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?auto=format&fit=crop&w=1200&q=85", alt: "Barbershop interior", category: "Shop" },
];

export const promotions: Promotion[] = [
  {
    id: "first-visit",
    badge: "NEW CLIENT",
    title: "$10 off your first appointment.",
    description: "A simple reason to stop scrolling and come see what the shop is about.",
    ctaLabel: "Book your first visit",
    featured: true,
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Jordan M.",
    quote: "Booked on my lunch break, walked right in at my time, and the fade was exactly what I asked for.",
    rating: 5,
    detail: "Google review",
  },
  {
    id: "r2",
    name: "Chris T.",
    quote: "The shop is clean, everybody is welcoming, and Marcus is consistent every single time.",
    rating: 5,
    detail: "Google review",
  },
  {
    id: "r3",
    name: "Anthony R.",
    quote: "Finally found a place I can book online without having to DM somebody and wait for a reply.",
    rating: 5,
    detail: "Google review",
  },
];

export const reviewThemes = ["Clean fades", "On-time appointments", "Friendly shop", "Easy booking"];
