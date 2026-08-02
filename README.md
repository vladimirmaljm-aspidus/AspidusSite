# Aspidus — Global Commodities Supplier & Trader

Professional corporate website for **Aspidus** (est. 2007), a global commodity trading company with offices in Dubai (HQ), Cape Town, and Istanbul.

> _The name for Integrity. Connecting global commodity markets since 2007._

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Animation**: Framer Motion (parallax, scroll reveals, animated counters)
- **Fonts**: Playfair Display (display) + Inter (body)
- **i18n**: Built-in 4-language support (EN / TR / RU / SR)

## Design System

- **Palette**: Deep midnight navy (`#08111d`) + champagne gold (`#c9a961`) + emerald accent
- **Motion**: Scroll-triggered reveals, parallax hero, animated stat counters, marquee, sticky header with scroll progress
- **Typography**: Editorial serif headlines paired with clean grotesque body text

## Getting Started

```bash
# Install dependencies
bun install

# Run development server
bun run dev    # → http://localhost:3000

# Build for production
bun run build
bun run start

# Lint
bun run lint
```

## Project Structure

```
src/
├── app/
│   ├── globals.css         # Design tokens (navy + gold theme)
│   ├── layout.tsx          # Fonts + metadata
│   └── page.tsx            # Main page (assembles all sections)
└── components/
    └── aspidus/
        ├── i18n.tsx         # 4-language translations (EN/TR/RU/SR)
        ├── data.ts          # Commodities, offices, stats data
        ├── motion-helpers.tsx
        ├── preloader.tsx
        ├── site-header.tsx  # Sticky header + scroll progress + mobile menu
        ├── hero.tsx         # Parallax hero
        ├── marquee.tsx
        ├── about.tsx
        ├── commodities.tsx  # 11 sector cards
        ├── stats.tsx        # Animated counters
        ├── locations.tsx    # 3 office cards
        ├── why-partner.tsx
        ├── contact.tsx      # Inquiry form (Formspree)
        └── site-footer.tsx  # Sticky footer + back-to-top
```

## Content

- **11 Commodity Sectors**: Energy, Metals, Agriculture, Meat, Raw Materials, Construction, Textiles, Fertilizers, Nuts & Dried Fruits, Cocoa & Coffee, Spices
- **3 Global Offices**: Dubai (DMCC, HQ), Cape Town (Pty Ltd), Istanbul
- **Languages**: English, Türkçe, Русский, Srpski
- **Contact form** posts to Formspree; Client Portal links to the secure portal

## Original Static Site

The previous static HTML version is preserved in [`archive/original-static/`](./archive/original-static) for reference.

## Deployment

Recommended: deploy on **Vercel** (zero-config for Next.js). Also compatible with any Node.js host via `bun run build && bun run start`.

---

© 2025 Aspidus. All rights reserved.
