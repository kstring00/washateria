import { CalendarDays, Phone } from "lucide-react";
import { phoneHref } from "@/config/business";
import { getBookingUrl } from "@/lib/booking";

export function MobileBookingBar() {
  return (
    <div className="mobile-booking-bar" aria-label="Quick actions">
      <a href={phoneHref}><Phone size={18} /> Call</a>
      <a className="mobile-primary" href={getBookingUrl()} target="_blank" rel="noreferrer"><CalendarDays size={18} /> Book appointment</a>
    </div>
  );
}
