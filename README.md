# Kanai — Logistics for Kenya
## OpenCode deepseek flash v4

Marketing site for **Kanai**, a Kenyan logistics company that provides trucks
and vans for cargo hauling: full loads, part loads, same-day van runs, and
cross-border freight.

Built with **Bun**, **Next.js 16** (App Router), **Tailwind CSS v4**, **Motion**,
and **Lucide** icons. Design follows the attached skin guide — large type
hierarchy, generous whitespace, a single restrained green accent, subtle
micro-interactions, and quiet on-scroll reveals.

## Getting started

```bash
bun install
bun dev          # http://localhost:3000
```

```bash
bun build        # production build
bun start        # serve the production build
bun run lint     # biome check
bun run format   # biome format --write
```

## Structure

```
app/
  layout.tsx          Root layout — fonts, metadata, header, footer
  page.tsx            Composes the landing page sections
  globals.css         Tailwind v4 theme tokens, base styles, utilities
  icon.svg            Favicon (Kanai mark)
components/           One component per file
  site-header.tsx     Sticky nav, scroll state, animated mobile menu
  hero.tsx            Headline, CTAs, hero image with overlay stat
  stats-bar.tsx       Four-up proof points
  services.tsx        Services section (grid)
  service-card.tsx    Single service card with hover lift
  fleet.tsx           Fleet section (grid)
  fleet-card.tsx      Single vehicle card with specs
  how-it-works.tsx    Four-step process
  coverage.tsx        Corridors, counties served, guarantees
  testimonials.tsx    Shipper quotes
  testimonial-card.tsx
  cta-band.tsx        Dark call-to-action band
  contact.tsx         Contact details + quote request
  contact-form.tsx    Quote form with sequential field reveal + success state
  form-field.tsx      Labelled input/textarea
  site-footer.tsx
  # shared primitives
  container.tsx  section.tsx  section-heading.tsx  button.tsx  logo.tsx  reveal.tsx
lib/
  content.ts          All site copy and data (single source of truth)
  motion.ts           Shared Motion variants and easing
  utils.ts            cn() className joiner
public/images/
  hero-truck.jpg      Optimised hero photograph
```

## Editing content

All copy lives in `lib/content.ts` — company details, nav, stats, services,
fleet, steps, corridors, counties, testimonials and footer links. Components
read from it, so text changes rarely require touching markup.

## Notes

- **Images:** the single photograph is bundled in `public/images` and served
  through `next/image` (`preload` for the hero). No remote image hosts are used.
- **Motion:** reveals use `whileInView` with `once: true` and respect
  `prefers-reduced-motion`. Content stays visible when JavaScript is disabled.
- **Accessibility:** semantic landmarks and lists, labelled form fields, visible
  focus styles, and AA-contrast text. Lighthouse reports 100 for accessibility,
  best practices and SEO.
- **Cache Components** are enabled. `lib/content.ts` avoids runtime-only values
  (for example, no `new Date()` in render) so pages prerender cleanly.
