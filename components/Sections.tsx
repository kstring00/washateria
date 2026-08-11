import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Instagram,
  MapPin,
  Navigation,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  UserRoundCheck,
} from "lucide-react";
import { business, fullAddress, phoneHref } from "@/config/business";
import { gallery, promotions, reviewThemes, reviews, services, staff } from "@/data/site";
import { bookingProviderLabel, getBookingUrl } from "@/lib/booking";

function SectionHeading({ kicker, title, body }: { kicker: string; title: string; body?: string }) {
  return (
    <div className="section-heading">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

export function TrustBar() {
  const items = [
    { icon: Star, value: `${business.googleRating}/5`, label: `${business.googleReviewCount}+ Google reviews` },
    { icon: Scissors, value: `${business.yearsInBusiness}+ years`, label: "behind the chair" },
    { icon: CalendarDays, value: business.sameDayAppointments ? "Same-day" : "Easy online", label: "appointments" },
    { icon: UserRoundCheck, value: business.walkInsWelcome ? "Walk-ins" : "Booked visits", label: business.walkInsWelcome ? "welcome when available" : "recommended" },
  ];

  return (
    <section className="trust-strip" aria-label="Shop highlights">
      <div className="shell trust-grid">
        {items.map(({ icon: Icon, value, label }) => (
          <div className="trust-item" key={value}>
            <Icon size={19} />
            <div><strong>{value}</strong><span>{label}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="section section-light" id="services">
      <div className="shell">
        <div className="split-heading">
          <SectionHeading
            kicker="SERVICES + PRICING"
            title="Know what you want before you hit book."
            body="The site explains the menu first. The booking platform handles the calendar second. No guessing through a wall of appointment options."
          />
          <a className="text-link" href={getBookingUrl()} target="_blank" rel="noreferrer">View full booking menu <ArrowUpRight size={17} /></a>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article className={`service-card ${index === 0 ? "service-card-featured" : ""}`} key={service.id}>
              <div className="service-image-wrap">
                <img src={service.image} alt={`${service.name} service`} loading="lazy" />
                <span className="service-category">{service.category}</span>
              </div>
              <div className="service-card-body">
                <div className="service-meta">
                  <span>{service.duration ?? "Ask for timing"}</span>
                  <strong>{service.price ?? `From ${service.startingPrice}`}</strong>
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <a href={getBookingUrl({ service })} target="_blank" rel="noreferrer">
                  Book this service <ArrowRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section className="section section-dark" id="barbers">
      <div className="shell">
        <SectionHeading
          kicker="MEET THE TEAM"
          title="Book the person, not just the shop."
          body="Each profile gives a new client enough context to choose confidently — specialties, style, experience, and a direct route to that barber's calendar."
        />

        <div className="staff-grid">
          {staff.map((member) => (
            <article className="staff-card" key={member.id}>
              <div className="staff-photo-wrap">
                <img src={member.photo} alt={`${member.name}, ${member.role}`} loading="lazy" />
                {member.featured ? <span className="photo-badge">BOOK DIRECT</span> : null}
              </div>
              <div className="staff-body">
                <div className="staff-title-row">
                  <div><h3>{member.name}</h3><span>{member.role}</span></div>
                  {member.instagramUrl ? <a className="round-icon" href={member.instagramUrl} target="_blank" rel="noreferrer" aria-label={`${member.name} on Instagram`}><Instagram size={17} /></a> : null}
                </div>
                <p>{member.shortBio}</p>
                <div className="specialty-list">{member.specialties.map((specialty) => <span key={specialty}>{specialty}</span>)}</div>
                <div className="staff-footer">
                  <span>{member.yearsExperience ? `${member.yearsExperience} years experience` : "Experienced barber"}</span>
                  <a href={getBookingUrl({ staff: member })} target="_blank" rel="noreferrer">Book with {member.name.split(" ")[0]} <ArrowUpRight size={16} /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="section section-light gallery-section" id="gallery">
      <div className="shell">
        <div className="split-heading">
          <SectionHeading
            kicker="RECENT WORK"
            title="The work should sell the appointment."
            body="A visual-first gallery gives a new customer proof before asking them to commit to a service or a barber."
          />
          {business.instagramUrl ? <a className="text-link" href={business.instagramUrl} target="_blank" rel="noreferrer"><Instagram size={17} /> See more on Instagram</a> : null}
        </div>

        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <figure className={`gallery-item gallery-item-${index + 1}`} key={item.id}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption><span>{item.category}</span><ArrowUpRight size={16} /></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Promotion() {
  const promo = promotions.find((item) => item.featured) ?? promotions[0];
  if (!promo) return null;

  return (
    <section className="promo-wrap">
      <div className="shell">
        <div className="promo-card">
          <div className="promo-orb"><Sparkles size={26} /></div>
          <div>
            <span className="kicker">{promo.badge ?? "CURRENT OFFER"}</span>
            <h2>{promo.title}</h2>
            <p>{promo.description}</p>
          </div>
          <a className="button button-dark button-large" href={promo.ctaUrl ?? getBookingUrl()} target="_blank" rel="noreferrer">
            {promo.ctaLabel} <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="section section-warm" id="reviews">
      <div className="shell reviews-layout">
        <div className="reviews-summary">
          <span className="kicker">SOCIAL PROOF</span>
          <div className="rating-display"><strong>{business.googleRating}</strong><span>/5</span></div>
          <div className="stars" aria-label={`${business.googleRating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={20} fill="currentColor" />)}
          </div>
          <p>Based on {business.googleReviewCount}+ Google reviews.</p>
          <div className="theme-list">{reviewThemes.map((theme) => <span key={theme}><Check size={14} /> {theme}</span>)}</div>
          <a className="text-link" href={business.googleReviewsUrl} target="_blank" rel="noreferrer">Read more Google reviews <ArrowUpRight size={17} /></a>
        </div>

        <div className="review-cards">
          {reviews.map((review) => (
            <article className="review-card" key={review.id}>
              <div className="review-stars">{Array.from({ length: review.rating }).map((_, index) => <Star key={index} size={14} fill="currentColor" />)}</div>
              <blockquote>“{review.quote}”</blockquote>
              <div><strong>{review.name}</strong><span>{review.detail}</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { number: "01", title: "Pick your service", body: "See the price, timing, and what is included before entering the scheduler." },
    { number: "02", title: "Choose your barber", body: "Match the style you want with a professional who specializes in it." },
    { number: "03", title: "Lock in your time", body: `Finish securely through ${bookingProviderLabel()} or whichever provider the shop already uses.` },
    { number: "04", title: "Show up", body: "Your appointment is set. Come in, sit down, and get taken care of." },
  ];

  return (
    <section className="section section-dark how-section">
      <div className="shell">
        <SectionHeading kicker="FIRST VISIT" title="From found-you-online to booked in minutes." />
        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section className="section section-light" id="location">
      <div className="shell location-grid">
        <div className="location-copy">
          <SectionHeading kicker="VISIT THE SHOP" title="Easy to find. Easy to contact." />
          <div className="location-facts">
            <div><MapPin size={19} /><span><strong>{fullAddress}</strong><small>{business.parkingNotes}</small></span></div>
            <div><Phone size={19} /><span><strong><a href={phoneHref}>{business.phone}</a></strong><small>Tap to call the shop</small></span></div>
            <div><ShieldCheck size={19} /><span><strong>{business.walkInsWelcome ? "Walk-ins welcome" : "Appointments recommended"}</strong><small>{business.walkInsWelcome ? "Subject to barber availability" : "Booking ahead is the best way to get your preferred time"}</small></span></div>
          </div>
          <div className="location-actions">
            <a className="button button-dark" href={business.googleMapsUrl} target="_blank" rel="noreferrer"><Navigation size={17} /> Get directions</a>
            <a className="button button-outline-dark" href={getBookingUrl()} target="_blank" rel="noreferrer"><CalendarDays size={17} /> Book first</a>
          </div>
        </div>

        <div className="hours-card">
          <div className="hours-head"><div><span className="kicker">SHOP HOURS</span><h3>Plan your visit</h3></div><Clock3 size={25} /></div>
          <div className="hours-list">
            {business.hours.map((row) => <div key={row.day}><span>{row.day}</span><strong>{row.hours}</strong></div>)}
          </div>
          <p>Holiday hours may vary. Check Google or call before heading over on major holidays.</p>
        </div>
      </div>
    </section>
  );
}

export function FinalBooking() {
  return (
    <section className="final-booking">
      <div className="shell final-booking-inner">
        <div><span className="kicker">READY WHEN YOU ARE</span><h2>Your next cut starts here.</h2><p>Pick the service. Pick the barber. Lock in the time.</p></div>
        <div className="final-actions">
          <a className="button button-accent button-large" href={getBookingUrl()} target="_blank" rel="noreferrer"><CalendarDays size={19} /> Book appointment <ArrowUpRight size={18} /></a>
          <a className="button button-ghost button-large" href={phoneHref}><Phone size={18} /> Not sure? Call us</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <a className="brand footer-brand" href="#top"><span className="brand-mark">N</span><span className="brand-copy"><strong>{business.shortName}</strong><small>BARBER CO.</small></span></a>
          <p>{business.tagline}</p>
        </div>
        <div><strong>Explore</strong><a href="#services">Services</a><a href="#barbers">Barbers</a><a href="#gallery">Recent work</a><a href="#reviews">Reviews</a></div>
        <div><strong>Visit</strong><span>{business.address}</span><span>{business.city}, {business.state} {business.zip}</span><a href={phoneHref}>{business.phone}</a></div>
        <div><strong>Book</strong><a href={getBookingUrl()} target="_blank" rel="noreferrer">Book online</a>{business.instagramUrl ? <a href={business.instagramUrl} target="_blank" rel="noreferrer">Instagram</a> : null}<a href={business.googleMapsUrl} target="_blank" rel="noreferrer">Directions</a></div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {business.businessName}. All rights reserved.</span>
        {business.previewMode ? <span className="preview-note">Concept preview • not an official business website yet</span> : null}
      </div>
    </footer>
  );
}
