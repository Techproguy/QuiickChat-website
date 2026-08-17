# QuiickChat — Brand Website Build Instructions

> **For the building agent.** This is the single source of truth for the QuiickChat
> marketing/brand website. Build it to look and feel **premium** — think Linear,
> Stripe, Vercel, WhatsApp/Signal marketing sites — quiet, confident, spacious,
> fast. Every value below (colors, fonts, spacing) is pulled from the real
> QuiickChat mobile app design system so the web presence matches the product.
> Do not invent brand values; use the ones in this document.

---

## 0. Read this first — non-negotiables

1. **Premium bar.** Generous whitespace, restrained color, real typographic
   hierarchy, buttery-smooth scroll and reveal motion. If a section looks like a
   default Bootstrap template, it's wrong. Aim for "designed by a studio."
2. **Calm brand.** QuiickChat's design language is deliberately **calm**:
   accent-green used sparingly, **no loud gradients, no neon glows, no drop-shadow
   soup**. Flat, clean surfaces, hairline borders, one confident accent. (This
   mirrors the app's "v3 calm" system.)
3. **Encryption messaging — ALLOWED (owner-approved).** The owner is committing
   to ship end-to-end encryption, so the site **may** advertise it as a core
   feature: *"End-to-end encrypted,"* *"Your messages stay between you,"* a lock
   badge, a dedicated security section, etc. Make it a **premium, first-class
   selling point** (Signal/WhatsApp-style — a padlock hero moment, a "Security"
   section). Preferred framing: **"End-to-end encrypted"** for messages & calls,
   plus "Private by design."
   - ⚠️ **One responsibility note (not a block):** the claim must be **true by
     public launch** — App Store / Google Play and consumer-protection rules
     treat a live "end-to-end encrypted" claim as a factual representation. So:
     ship the site's encryption copy in step with the encryption feature going
     live. If the site goes public *before* encryption ships, soften to
     *"Built for privacy — end-to-end encryption coming"* until it lands. The
     owner owns this timing call; just don't let a live public site claim a
     shipped feature that isn't shipped yet.
4. **Honesty in feature copy.** Only describe features that exist (see §7). Don't
   promise a desktop app or web app unless told they exist. Mark anything
   roadmap-y as "Coming soon" explicitly.
5. **Performance is a feature.** Lighthouse ≥ 95 on Performance, Accessibility,
   Best Practices, SEO (mobile + desktop). No layout shift. Ship it fast.

---

## 1. Product one-liner & positioning

- **Name:** QuiickChat (one word, two i's — always spelled `QuiickChat`, never
  "Quick Chat" or "Quiik").
- **Category:** All-in-one private messaging & calling app — chat, voice/video
  calls, status, channels, and communities.
- **Domain:** `quiickchat.com`
- **Positioning line (hero candidate):**
  > **"Everything you want to say. One calm app."**
- **Alternate taglines (pick/AB, keep the calm register):**
  - "Chat, call, and share — beautifully simple."
  - "Messaging that gets out of your way."
  - "Talk. Call. Share. Belong."
- **Elevator pitch (for meta description / about):**
  > QuiickChat is a fast, private messaging app for real conversations — 1:1 and
  > group chat, crystal-clear voice and video calls, disappearing-style status
  > updates, broadcast channels, and communities. Thoughtfully designed, calm to
  > use, and built for everyone.

**Voice & tone:** confident, warm, plainspoken, a little premium. Short
sentences. No hype words ("revolutionary," "next-gen"), no exclamation-mark
spam, no emoji in body copy (sparingly in feature chips at most). Think Apple
copy calm, not startup-landing-page loud.

---

## 2. Tech stack (recommended)

Build a **static, ultra-fast marketing site**. Recommended:

- **Framework:** Next.js (App Router) + TypeScript, or Astro if you prefer
  content-first. Either is fine; prioritize static export + islands of
  interactivity.
- **Styling:** Tailwind CSS with the design tokens below encoded in
  `tailwind.config` (do NOT hardcode hex in components — use tokens).
- **Animation:** Framer Motion (React) or CSS + Intersection Observer. Keep it
  subtle: fade-up on scroll (16–24px, 400–600ms, ease-out), parallax only if
  gentle. Respect `prefers-reduced-motion` — disable non-essential motion.
- **Icons:** Lucide (line icons, matches the app's rounded-line iconography).
- **Deploy:** Vercel or Netlify. Configure `quiickchat.com` + `www` redirect.
- **Analytics:** Plausible or GA4 (privacy-friendly preferred, on-brand).
- **Forms:** newsletter/contact via a serverless function or a service
  (Resend/Formspree). No PII stored client-side.

Keep dependencies lean. No jQuery, no heavy carousel libs. Inline critical CSS.

---

## 3. Brand — Colors (exact, from the app)

Encode these as design tokens. The site is **light-theme first** (marketing
sites read best bright), with an **optional dark mode** using the app's dark
palette. Provide a theme toggle in the footer or nav (subtle).

### 3.1 Core brand

| Token | Light (site default) | Dark | Use |
|---|---|---|---|
| `--brand` (primary green) | `#16C55B` | `#33CE7C` | primary buttons, links, key accents |
| `--brand-bright` (hover/hi) | `#1ED760` | `#6FE6A8` | hover states, highlights |
| `--brand-ink` (on-accent) | `#FFFFFF` | `#04160B` | text/icons on green fills |
| `--teal` (secondary) | `#0EA5A5` | `#64FFDA` | AI features, secondary accent, rare |

> The green is the hero. Teal is a **spice** — for "AI / voice room / smart"
> touches only. Never use both loudly in the same block.

### 3.2 Neutrals (light theme — site default)

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#FFFFFF` | page canvas |
| `--surface` | `#FFFFFF` | cards on white |
| `--sunken` | `#F6F7F9` | wells, alternating sections, chips, inputs |
| `--ink` | `#0B0E11` | headings, primary text (near-black) |
| `--ink-2` | `#5B636B` | body, subheads |
| `--ink-3` | `#98A0A8` | captions, timestamps, hints |
| `--line` | `#ECEEF0` | hairline borders |
| `--hair` | `#F2F4F6` | dividers |
| `--danger` | `#E5484D` | errors only |
| `--warning` | `#E0900B` | warnings only |

### 3.3 Neutrals (dark theme — optional)

| Token | Hex |
|---|---|
| `--bg` | `#090C10` (deep cool near-black) |
| `--surface` | `#12161C` |
| `--card` | `#171C23` (graphite) |
| `--elevated` | `#1E242D` |
| `--ink` | `#F2F4F6` |
| `--ink-2` | `#9AA2AA` |
| `--ink-3` | `#6A727A` |

### 3.4 Color usage rules

- **Backgrounds:** white / `--sunken` alternating. Dark mode: `--bg` / `--surface`.
- **Green coverage ≤ ~10% of any viewport.** It should feel intentional.
- **No multi-stop gradients** as brand fills. A *whisper* of a single-hue
  radial glow behind a hero device mockup is the only exception — keep it
  ≤ 6% opacity, brand-green, never rainbow.
- **Shadows:** soft, low, single. e.g. `0 8px 30px rgba(11,14,17,0.06)` on
  floating cards. No stacked neon shadows.
- **Contrast:** all text ≥ WCAG AA (4.5:1 body, 3:1 large). `#16C55B` on white
  passes for large text/UI, use `#0B7A3A` (deep emerald) for green *text* on
  white bodies to keep AA.

---

## 4. Brand — Typography

- **Primary typeface: `Inter`** (this is the app's UI typeface — the "SF Pro
  equivalent": quiet, neutral, highly legible). Load via `next/font` or
  self-host the variable font. Do **not** use Poppins (a stale bundle in the
  app) — Inter only.
- **Display option (optional, for giant hero headline only):** `Inter Tight` or
  keep Inter with tight tracking. Do not introduce a serif or a playful display
  face — it breaks the calm register.
- **Fallback stack:** `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.

### 4.1 Type scale (desktop; scale down ~15–20% on mobile)

| Role | Size / Line | Weight | Tracking |
|---|---|---|---|
| Display (hero H1) | 64–80px / 1.05 | 700 | -0.02em |
| H2 (section) | 40–48px / 1.1 | 700 | -0.01em |
| H3 (card title) | 22–24px / 1.25 | 600 | 0 |
| Lead / subhead | 20–22px / 1.5 | 400–500 | 0 |
| Body | 16–18px / 1.6 | 400 | 0 |
| Small / caption | 13–14px / 1.5 | 500 | 0 |
| Eyebrow / label | 12–13px / 1 | 600, UPPERCASE | 0.08em |

- Headings in `--ink`, body in `--ink-2`, captions in `--ink-3`.
- Max line length for body: ~66–72 characters. Never full-width paragraphs.
- Numbers/stats can go big (48–72px, weight 700) — a premium signal.

---

## 5. Layout, spacing & components

### 5.1 Grid & spacing

- **Container max-width:** 1200–1280px, centered, 24px gutters (mobile),
  32–48px (desktop).
- **Spacing scale (8pt):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Section vertical rhythm:** 96–128px between major sections on desktop,
  64–80px on mobile.
- **Border radius:** app uses soft, generous radii. Use `12px` (cards/inputs),
  `16–20px` (large cards/mockups), `999px` (pills/buttons). Consistent, rounded,
  friendly — never sharp corners.

### 5.2 Core components to build

- **Buttons:**
  - *Primary:* green fill (`--brand`), white text, pill radius, weight 600,
    subtle hover lift (`translateY(-1px)` + `--brand-bright`). No gradient.
  - *Secondary:* transparent, `--ink` text, `--line` border, hover fills `--sunken`.
  - *Ghost/link:* green text, underline-on-hover.
  - Store badges: official **App Store** + **Google Play** badges (use real SVG
    badge assets; keep them equal height, aligned).
- **Nav bar:** sticky, translucent-white with backdrop blur on scroll, hairline
  bottom border. Left: logo. Center/right: links (Features, Channels, Download,
  Support). Right CTA: "Get the app" (primary pill). Mobile: hamburger → clean
  full-screen sheet.
- **Cards:** white surface, `--line` border, `12–16px` radius, soft single
  shadow on hover only. Icon (Lucide, green stroke) + title + one-line body.
- **Feature row (alternating):** text column + product-mockup column, alternating
  left/right down the page. Mockups sit in a phone frame (see §9 assets).
- **Stat band:** 3–4 big numbers with labels on a `--sunken` strip.
- **Testimonial / quote card:** large quote, avatar, name, role. Keep it real —
  use placeholder names clearly marked if none provided.
- **FAQ accordion:** clean, hairline dividers, chevron rotate on open.
- **Footer:** big, organized (columns of links), theme toggle, socials, legal.

### 5.3 Motion

- On-scroll: elements fade + rise 16–24px, 450ms, `cubic-bezier(0.22,1,0.36,1)`,
  stagger children 60–80ms.
- Hero device: gentle float (translateY ±6px, 6s ease-in-out infinite) OR a
  looping in-app screen-record video (muted, autoplay, `playsinline`).
- Hover: 120–160ms ease. Buttons lift 1px. Cards raise shadow.
- **Always** honor `prefers-reduced-motion: reduce` → cut animation to opacity
  fades only.

---

## 6. Sitemap / pages

Build these. Home is the priority; others can be phase 2 but scaffold routes.

1. **`/` — Home / Landing** (the showpiece — see §8 for full section list)
2. **`/features` — Features** (deep dive; or make Home rich enough and skip)
3. **`/channels` — Channels & Communities** (the broadcast/creator story)
4. **`/download` — Download / Get the app** (store links + QR, platform notes)
5. **`/support` — Help / Support** (FAQ, contact, getting-started)
6. **`/privacy` — Privacy Policy** (legal; required for app stores)
7. **`/terms` — Terms of Service** (legal; required)
8. **`/blog` — Blog / Updates** (optional; scaffold, index + post template)
9. **`/404`** — branded, calm, on-message.

Global: nav + footer on every page. Consistent CTA ("Get the app").

---

## 7. The real product — feature source of truth

Use ONLY these when writing feature copy. (Grounded in the actual app.)

**Messaging**
- 1:1 and group chat; fast, local-first (chats open instantly).
- Rich media: photos, videos, voice notes, documents, GIFs, location.
- **Video notes** — round, instant video messages (WhatsApp-style).
- Reactions (any emoji), replies, edit & delete, forward, star, in-chat search.
- Voice notes with hold-to-record, slide-to-lock, playback speed.
- Media editor: crop, rotate, trim video, text, stickers, filters, draw.
- Wallpapers, read receipts, typing indicators, disappearing-style controls.

**Calls**
- 1:1 and group **voice & video calls** (powered by a real-time engine).
- Screen sharing, in-call controls, one-tap speaker, Bluetooth routing.
- Live **AI call features** (secondary/teal accent): near-live transcript,
  captions, and translation; post-call summary & notes. *(This is the "smart"
  angle — lean into it, it's a real differentiator.)*
- Shareable call links; decline-with-message.

**Status / Stories** ("Memories" & "Moments")
- Photo/video status updates, seen state, replies, reactions.
- Music on status, background posts, trimming.

**Channels** (broadcast — the creator/brand story)
- One-to-many broadcast posts: text, photo, video, voice, documents, location.
- **Polls, Quizzes (with a right answer), Questions, and Music posts.**
- Reactions, comments, forwarding, per-post view counts.
- **Creator Insights dashboard:** reach, follower growth, top regions,
  followers vs non-followers, top posts. *(A real, premium analytics story.)*
- Private "Respond" — followers send private replies; admins can share anonymously.

**Communities** ("Spaces")
- Group people into communities with multiple channels, roles, and membership
  management.

**Identity & reach**
- **@usernames** — claim a handle, be findable, message anyone by @handle, with
  privacy controls (Everyone / Contacts / Nobody).
- Contact sync that respects who's on QuiickChat.

**Platform**
- Cross-platform mobile (iOS + Android). *(Do NOT claim web/desktop unless told.)*
- Rich notifications, custom ringtones, focus/quiet controls.

**Privacy & security** (owner-approved to feature prominently — see §0.3)
- **End-to-end encryption** for messages and calls — advertise as a headline
  feature (lock badge, dedicated Security section). Ship copy in step with the
  feature going live (§0.3 timing note).
- Privacy controls: who can see your status, find you, message you.
- Block, report, and safety tools throughout.
- Secure account sign-in and delete-account controls.

---

## 8. Home page — section-by-section blueprint

Build the landing page as these stacked sections (top → bottom):

### 8.1 Nav (sticky)
Logo left · Features · Channels · Support · [Get the app] primary pill.

### 8.2 Hero
- **Eyebrow:** `MESSAGING • CALLS • CHANNELS`
- **H1:** *"Everything you want to say. One calm app."*
- **Sub:** *"QuiickChat brings chat, voice and video calls, status, and channels
  together in one beautifully simple place — fast, private, and built for the way
  you actually talk."*
- **CTAs:** App Store badge + Google Play badge. Optional secondary "See features."
- **Visual:** a floating iPhone mockup showing the chat screen (or a muted
  autoplay screen-record loop). Optional whisper-glow behind it (§3.4 rule).
- Trust strip under CTAs: "Free to use · iOS & Android · No ads in your chats"
  (only if true — verify before shipping).

### 8.3 Logo/marquee or stat band (optional)
If you have real numbers (users, messages, countries), show 3 big stats. If not,
skip — **do not fabricate metrics.**

### 8.4 "Everything in one app" — feature grid
- **H2:** *"One app. Every way to connect."*
- 6 cards (icon + title + one line): Chat, Voice & Video Calls, Status,
  Channels, Communities, @Usernames. (Pull descriptions from §7.)

### 8.5 Feature spotlight rows (alternating text ↔ mockup)
Pick the 4 strongest, one row each:
1. **Chat that feels instant.** Local-first, media-rich, video notes, reactions.
2. **Calls, made effortless — now with AI.** Voice/video, screen share, and live
   transcript, captions & translation. *(teal accent here.)*
3. **Channels & Insights for creators.** Broadcast posts, polls/quizzes/questions,
   and a real analytics dashboard (reach, growth, top regions).
4. **Your identity, your rules.** @usernames + privacy controls (Everyone /
   Contacts / Nobody).

### 8.6 Channels showcase (mini section or link to `/channels`)
Show the polls/quiz/question/music post types + the Insights dashboard visual.
This is a premium differentiator — give it a real, designed moment.

### 8.7 Security & privacy band (make this a premium moment)
- **H2:** *"End-to-end encrypted. Private by design."*
- Lead with the **encryption** story (a padlock visual is on-brand here — the
  one place a subtle icon-forward moment is welcome).
- 3–4 points: end-to-end encryption for messages & calls · privacy controls
  (who sees your status / finds you / reaches you) · block & report tools ·
  secure sign-in + delete-account controls.
- Give it real design weight — this is a top-3 reason people choose a messenger.

### 8.8 Download CTA (full-width, `--sunken` or subtle brand tint)
- **H2:** *"Get QuiickChat."*
- Store badges + a QR code that links to a smart app-store redirect.
- One line: "Free on iPhone and Android."

### 8.9 FAQ (accordion)
6–8 questions: Is it free? What platforms? How are calls quality? What are
Channels? How do usernames work? Is my data private? (Answer honestly per §7/§0.)

### 8.10 Footer
Columns: Product (Features, Channels, Download) · Company (About, Blog,
Contact) · Legal (Privacy, Terms) · Social. Logo + short tagline + theme toggle
+ copyright. Language selector optional.

---

## 9. Assets

### 9.1 Provided (in the app repo — reuse for brand consistency)
- Logo mark: `assets/icons/logo.svg`
- Logo with wordmark: `assets/icons/logo_text.svg`
- App icon (raster): `assets/images/appIcon.png`
- (Path base: the Flutter app repo `QuuickChat-Mobile-techproguy/`)

> Ask the owner for high-res logo exports (SVG preferred) and the app icon in
> 1024px. Rebuild the wordmark crisply if the SVG is low quality.

### 9.2 To produce
- **Product mockups:** clean iPhone 15 / Pixel frames containing real in-app
  screenshots (chat list, a chat with a video note, a call with live captions,
  a channel post with a poll, the Insights dashboard). Use device frames; keep
  status bars clean. Export @2x, WebP/AVIF.
- **Screen-record loops** (optional, high impact): 6–12s muted MP4/WebM of a
  chat scroll, a call, or the channel Insights. `autoplay muted loop playsinline`.
- **OG/Twitter image:** 1200×630, brand green accent + wordmark + tagline.
- **Favicon set** from the app icon (16–512 + maskable + apple-touch-icon).
- **QR code** to the download page (branded, green on white, rounded modules).

### 9.3 Imagery style
- Real UI over stock photos. If lifestyle photos are used: natural light, diverse,
  candid, warm — never cheesy corporate stock. Green accent applied via UI, not
  filters.

---

## 10. SEO, metadata, social

- Unique `<title>` + meta description per page. Home title:
  `QuiickChat — Chat, Calls, Status & Channels in one calm app`.
- Open Graph + Twitter Card tags on every page (title, description, OG image).
- `og:image` = the 1200×630 branded card.
- Semantic HTML: one `<h1>` per page, landmark regions, descriptive alt text.
- `sitemap.xml` + `robots.txt`. Structured data: `Organization` +
  `SoftwareApplication` JSON-LD on Home (name, OS, offers/free, ratings only if
  real).
- Canonical URLs. `www` → apex (or vice versa) 301.
- Preload the Inter font + hero image; lazy-load below-the-fold media.

---

## 11. Accessibility (WCAG 2.1 AA)

- Keyboard-navigable everything; visible focus rings (green, 2px).
- Color contrast AA (use `#0B7A3A` for green text on white — see §3.4).
- `alt` on all meaningful images; decorative → `alt=""`.
- `prefers-reduced-motion` respected.
- Accordion/nav = proper ARIA (`aria-expanded`, `aria-controls`).
- Forms: labels, error text, no color-only signaling.
- Min tap target 44×44px on mobile.

---

## 12. Performance budget

- Lighthouse ≥ 95 across the board (mobile + desktop).
- LCP < 2.0s, CLS < 0.05, INP < 200ms.
- Images: AVIF/WebP, responsive `srcset`, explicit width/height (no CLS).
- Fonts: `font-display: swap`, subset Inter, self-host or `next/font`.
- No render-blocking JS; defer non-critical. Total JS (home) < ~120KB gzipped.
- Static export / edge-cached HTML.

---

## 13. Content / copy pack (drop-in, calm register)

**Hero H1 options**
- "Everything you want to say. One calm app."
- "Chat, call, and share — beautifully simple."
- "The calmer way to stay close."

**Feature card lines**
- *Chat:* "Fast, media-rich messaging that opens instantly."
- *Calls:* "Crystal-clear voice and video — with live captions and translation."
- *Status:* "Share your moment. It fades when it should."
- *Channels:* "Broadcast to your audience with polls, quizzes, and real insights."
- *Communities:* "Bring your people together in organized Spaces."
- *Usernames:* "Claim your @handle. Be reachable on your terms."

**Security & privacy band**
- "End-to-end encrypted. Your messages and calls stay between you and the people
  you're talking to. You control who sees your status, who can find you, and who
  can reach you — with block and report tools everywhere you need them."

**Download CTA**
- "Get QuiickChat — free on iPhone and Android."

**Footer tagline**
- "QuiickChat — talk, call, and share, beautifully."

> Keep all copy truthful to §7. When in doubt, cut the claim.

---

## 14. Definition of done (acceptance criteria)

- [ ] Home page fully built to §8, pixel-calm and premium.
- [ ] Brand tokens (§3, §4) encoded in config; **zero hardcoded hex** in components.
- [ ] Inter loaded and rendering; no Poppins anywhere.
- [ ] **End-to-end encryption featured as a headline** (§0.3); copy shipped in
      step with the feature going live.
- [ ] All feature copy maps to a real feature in §7.
- [ ] Light theme default + working dark theme toggle (app dark palette).
- [ ] Responsive: 360px → 1440px+ with no overflow, no CLS.
- [ ] Lighthouse ≥ 95 (Perf/A11y/BP/SEO) mobile + desktop.
- [ ] `prefers-reduced-motion` respected.
- [ ] OG images, favicons, sitemap, robots, JSON-LD present.
- [ ] `/privacy` and `/terms` pages exist (real or clearly-marked placeholder).
- [ ] Store badges + QR wired to real (or clearly-TODO) links.
- [ ] Deployed to `quiickchat.com` with `www` redirect + HTTPS.

---

## 15. Open questions for the owner (confirm before/while building)

1. Are the apps **live** on the App Store / Google Play yet, or "Coming soon"?
   (Determines whether badges link out or show a waitlist.)
2. Any **real metrics** we can cite (users, countries, messages)? If not, no stats band.
3. Is there a **web/desktop** app? (Default assumption: mobile-only.)
4. Do you have **final high-res logo** + wordmark exports? Preferred logo lockup?
5. Newsletter/waitlist — collect emails? Which provider?
6. Legal copy for Privacy/Terms — provided, or placeholder for now?
7. Confirm the **primary tagline** from §1 / §13 options.
8. Any brand assets to avoid (old logos, deprecated colors)?

---

*End of instructions. Build calm, build premium, keep it honest.*
