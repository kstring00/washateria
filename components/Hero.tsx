import { ArrowUpRight, CalendarDays, MapPin, Phone, Star } from "lucide-react";
import { business, phoneHref } from "@/config/business";
import { getBookingUrl } from "@/lib/booking";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-image-wrap" aria-hidden="true">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1800&q=90"
          alt=""
        />
        <div className="hero-shade" />
      </div>

      <div className="hero-inner shell">
        <div className="hero-copy">
          <div className="eyebrow-row">
            <span className="eyebrow"><span className="status-dot" /> Appointments available today</span>
            <span className="eyebrow"><MapPin size={14} /> {business.city}, {business.state}</span>
          </div>

          <h1>Look sharp.<br /><em>Book easy.</em></h1>
          <p className="hero-lede">{business.description}</p>

          <div className="hero-actions">
            <a className="button button-accent button-large" href={getBookingUrl()} target="_blank" rel="noreferrer">
              <CalendarDays size={19} /> Book an appointment <ArrowUpRight size={18} />
            </a>
            <a className="button button-ghost button-large" href={phoneHref}>
              <Phone size={18} /> Call the shop
            </a>
          </div>

          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span>M</span><span>A</span><span>D</span>
            </div>
            <div>
              <strong><Star size={15} fill="currentColor" /> {business.googleRating} from {business.googleReviewCount}+ locals</strong>
              <span>Known for consistency, clean work, and easy booking.</span>
            </div>
          </div>
        </div>

        <aside className="hero-card">
          <span className="mini-label">QUICK BOOK</span>
          <h2>Your next cut is a few taps away.</h2>
          <p>Choose your service, choose your barber, then finish the appointment in the shop&apos;s booking platform.</p>
          <div className="quick-book-list">
            <a href="#services"><span>01</span><div><strong>Pick a service</strong><small>See prices before booking</small></div><ArrowUpRight size={17} /></a>
            <a href="#barbers"><span>02</span><div><strong>Choose your barber</strong><small>Specialties + direct booking</small></div><ArrowUpRight size={17} /></a>
            <a href={getBookingUrl()} target="_blank" rel="noreferrer"><span>03</span><div><strong>Lock in your time</strong><small>Book with the provider they already use</small></div><ArrowUpRight size={17} /></a>
          </div>
        </aside>
      </div>
    </section>
  );
}
