# Campus Bazaar

Campus Bazaar is a responsive React + Vite frontend demonstration of a student-focused second-hand marketplace.

It is intentionally frontend-only: listings, wishlist items, offers, profile changes, and demo account data persist in the browser through LocalStorage. No server, real authentication, payment, or messaging system is included.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

To generate a production build:

```bash
npm run build
npm run preview
```

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Home page with categories and curated listings |
| `/explore` | Searchable, sortable, filterable marketplace |
| `/product/:id` | Listing details, seller trust score, and offer flow |
| `/sell` | Validated listing form with image preview |
| `/wishlist` | Persistent saved listings |
| `/offers` | Local offer, counter-offer, accept, and reject simulation |
| `/dashboard` | Listing management and Recharts analytics |
| `/profile` | Student profile, local editing, reviews, and account switching |

## Demo flow

Use the profile menu’s **Sign in or register a demo student** entry to switch seeded accounts or create a local demo profile. Try Aisha and Rohan to see both sides of the seeded negotiations. The Profile page also includes a **Reset demo data** control.
