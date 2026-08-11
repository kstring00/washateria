import { CalendarDays, MapPin } from "lucide-react";
import { business } from "@/config/business";
import { getBookingUrl } from "@/lib/booking";

const nav = [
  ["Services", "#services"],
  ["Barbers", "#barbers"],
  ["Work", "#gallery"],
  ["Reviews", "#reviews"],
  ["Visit", "#location"],
] as const;

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${business.businessName} home`}>
        <span className="brand-mark">N</span>
        <span className="brand-copy">
          <strong>{business.shortName}</strong>
          <small>BARBER CO.</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="icon-link desktop-only" href={business.googleMapsUrl} target="_blank" rel="noreferrer">
          <MapPin size={17} />
          <span>Directions</span>
        </a>
        <a className="button button-accent header-book" href={getBookingUrl()} target="_blank" rel="noreferrer">
          <CalendarDays size={17} />
          <span>Book now</span>
        </a>
      </div>
    </header>
  );
}
