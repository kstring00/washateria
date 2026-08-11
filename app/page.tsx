import type { CSSProperties } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import {
  FinalBooking,
  Footer,
  Gallery,
  HowItWorks,
  Location,
  Promotion,
  Reviews,
  Services,
  Team,
  TrustBar,
} from "@/components/Sections";
import { business, fullAddress } from "@/config/business";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: business.businessName,
    description: business.description,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.zip,
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.googleRating,
      reviewCount: business.googleReviewCount,
    },
    sameAs: [business.instagramUrl, business.facebookUrl].filter(Boolean),
    url: business.previewMode ? undefined : business.googleMapsUrl,
    location: fullAddress,
  };

  const brandStyles = {
    "--site-bg": business.brand.background,
    "--site-surface": business.brand.surface,
    "--site-ink": business.brand.ink,
    "--site-muted": business.brand.muted,
    "--site-accent": business.brand.accent,
  } as CSSProperties;

  return (
    <div className="site-root" style={brandStyles}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Team />
        <Gallery />
        <Promotion />
        <Reviews />
        <HowItWorks />
        <Location />
        <FinalBooking />
      </main>
      <Footer />
      <MobileBookingBar />
    </div>
  );
}
