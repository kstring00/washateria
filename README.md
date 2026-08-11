# Master Appointment Business — Barbershop Edition

This repository is the reusable **master** for appointment-based local business websites.

The operating model is:

**Master site → clone repo → tailor to one prospect → deploy preview → show the owner**

The website is the customer-facing showroom. The business's existing booking provider — Booksy, Square Appointments, Vagaro, Fresha, Calendly, or another URL — remains the booking engine.

## The two files you usually edit

### `config/business.ts`
Use this for:
- business name and tagline
- phone, email, address, city
- hours
- brand colors
- Google rating/review count
- maps/review/social URLs
- primary booking provider and URL
- walk-in / same-day / parking details
- preview mode

### `data/site.ts`
Use this for:
- services and pricing
- staff profiles
- service-specific booking URLs
- staff-specific booking URLs
- gallery images
- promotions
- reviews

The components should not need to be rewritten for normal client cloning.

## Booking logic

All booking actions flow through `lib/booking.ts`.

Fallback priority:

1. exact staff + service booking URL
2. service booking URL
3. staff booking URL
4. main business booking URL

That means the UI does not care whether the destination is Booksy, Square, Vagaro, Fresha, Calendly, or another provider.

## How to create a new prospect/client site

1. Duplicate this repository into a **new repository** for the specific business.
2. Rename the project in `package.json` if desired.
3. Update `config/business.ts`.
4. Replace the demo data in `data/site.ts`.
5. Replace the hero and gallery imagery.
6. Insert the business's actual booking links.
7. Replace placeholder reviews with approved/accurate material.
8. Confirm phone, address, hours, parking, and map links.
9. Test the site around 375px mobile width first.
10. Run `npm run build`.
11. Deploy that clone as its **own Vercel project**.
12. Leave `previewMode: true` while it is a prospect concept. Turn it off only after approval and final setup.

## Do not put multiple clients in this repo

This repo is a master, not a multi-tenant app.

Example:

```text
washateria (MASTER APPOINTMENT SITE)
   |
   +-- clone -> kings-cuts -> separate Vercel project
   +-- clone -> fade-house -> separate Vercel project
   +-- clone -> elite-nails -> separate Vercel project
```

A change to one client's repo should never change another client's website.

## Local development

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run build
npm start
```

## Main sections

- sticky header with booking CTA
- conversion-focused hero
- trust bar
- service/pricing menu
- staff profiles with direct booking
- visual work gallery
- promotions
- reviews/social proof
- first-visit flow
- location + hours
- final booking CTA
- fixed mobile booking bar

## Preview safety

When `previewMode` is `true`, the site adds `noindex, nofollow` metadata and displays a subtle concept-preview note in the footer.

## Goal

A normal clone should be customizable in roughly 30–60 minutes by changing data, images, copy, colors, and booking URLs — without rewriting the site architecture.
