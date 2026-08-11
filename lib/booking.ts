import { business } from "@/config/business";
import type { Service, StaffMember } from "@/types/site";

export function getBookingUrl({
  service,
  staff,
}: {
  service?: Service;
  staff?: StaffMember;
} = {}): string {
  if (service && staff?.serviceBookingUrls?.[service.id]) {
    return staff.serviceBookingUrls[service.id];
  }

  if (service?.bookingUrl) return service.bookingUrl;
  if (staff?.bookingUrl) return staff.bookingUrl;
  return business.bookingUrl;
}

export function bookingProviderLabel(): string {
  const labels = {
    booksy: "Booksy",
    square: "Square Appointments",
    vagaro: "Vagaro",
    fresha: "Fresha",
    calendly: "Calendly",
    other: "Online booking",
  } as const;

  return labels[business.bookingProvider];
}
