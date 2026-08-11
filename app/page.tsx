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

  return (
    <>
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
    </>
  );
}
