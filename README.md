# Quiick Chat — Official Website

The official product website for Quiick Chat, the AI-first communication
platform. Built as a scroll-driven product experience rather than a static
marketing page — content, copy, and design tokens are sourced directly from
the Quiick Chat Product Bible.

## Stack

- **Next.js 16** (App Router, Turbopack) + TypeScript
- **Tailwind CSS v4** (CSS-first config via `@theme`, no `tailwind.config.js`)
- **Framer Motion** for scroll-linked and viewport-reveal animation
- **next-themes** for the dark/light theme toggle
- **lucide-react** for iconography

## Getting started

```bash
npm install
npm run dev      # start the dev server on localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Project structure

```
src/
  app/
    page.tsx              # the single long-scroll home page
    layout.tsx             # root layout, fonts, metadata, JSON-LD
    globals.css             # design tokens (colors, radii, shadows, motion)
    privacy/, terms/        # placeholder legal pages
    icon.svg, manifest.ts, robots.ts, sitemap.ts, opengraph-image.tsx
  components/
    ui/                     # design-system primitives (Button, Pill, GlassCard,
                             #   AIOrb, Logo, ThemeToggle, Reveal, Container)
    layout/                 # SiteHeader, SiteFooter
    phone/                  # PhoneFrame + the five app "screens" rendered inside it
    sections/                # one file per homepage section (Hero, Trust, …)
  lib/
    utils.ts                # cn() class-merging helper
    motion.ts                # shared Framer Motion variants/tokens
```

## Design tokens

All color, radius, shadow, and motion values live in `src/app/globals.css` as
CSS custom properties, mirrored 1:1 from the Product Bible's `DESIGN_SYSTEM.md`
(dark "Emerald Glass" is the default theme; light "Slate Neutrals" is a fully
supported second theme, not an afterthought). A few values were deliberately
adjusted from the literal brand hex codes — see
[`DESIGN_RATIONALE.md`](./DESIGN_RATIONALE.md) for what changed and why
(mainly: guaranteeing WCAG AA text contrast for accent-green text in light
mode, where the raw brand green does not pass on its own).

Do not hardcode a hex color into a component. Use the semantic Tailwind
utilities generated from the token file (`bg-background`, `text-foreground`,
`text-muted`, `bg-accent`, `text-accent-text`, `border-border`, `shadow-e1` /
`e2` / `e3`, `rounded-xs` … `rounded-xl`, etc.).

## Brand / content constraints

Copy on this site is bound by explicit rules from the Product Bible — see
`DESIGN_RATIONALE.md` for the full list. In short:

- Never claim end-to-end encryption (it exists in the codebase but is
  disabled and unverified).
- Never name the underlying AI provider/model.
- Never position Quiick AI as "a chatbot," and never position the product as
  "a WhatsApp clone."
- No fabricated social proof (user counts, "as seen in" logos, fake
  liveness) — only real, verifiable claims.
- Features not yet live in the product (wallet, paid Spaces, verification
  badges, in-call AI transcription) are marked "coming soon" / "rolling out,"
  never depicted as shipped today.

## SEO & accessibility

- Full `Metadata` API usage (title templates, OpenGraph, Twitter cards),
  dynamic OG image (`opengraph-image.tsx`), JSON-LD (`SoftwareApplication`),
  `robots.ts`, `sitemap.ts`, and a `manifest.ts` web app manifest.
- Skip-to-content link, visible focus rings, semantic landmarks
  (`header`/`main`/`footer`/`nav`), one `<h1>` per page with a logical
  heading hierarchy beneath it.
- `prefers-reduced-motion` is honored both in CSS (disables CSS
  transitions/animations) and in Framer Motion (`MotionConfig
  reducedMotion="user"`, which simplifies/removes transform animation for
  users who request it).
- All interactive icon-only controls (menu toggle, theme toggle, social
  links) carry `aria-label`s.

## Known placeholders to replace before launch

- `metadataBase` in `layout.tsx` and the `SITE_URL` constants in
  `robots.ts`/`sitemap.ts` point at `https://quiickchat.com` — update once
  the real domain is confirmed.
- `/privacy` and `/terms` contain placeholder copy, not reviewed legal text.
- Header/footer "Sign in", "About", "Careers", "Blog", "Support" links are
  anchors/placeholders pending those pages actually existing.
- App Store / Play Store buttons in the final CTA are not yet wired to real
  store URLs.
