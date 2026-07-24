# Design Rationale

This document explains the major UI/UX decisions behind the Quiick Chat
website and where/why the implementation deliberately diverges from a literal
reading of the build brief or the Product Bible's raw design tokens.

## Structure: a single scroll-driven page, not a multi-page site

The brief asks for a "product experience" that unfolds as the visitor
scrolls, structured as five narrative chapters (problem → introduce Quiick
Chat → show the product → build trust → invite to join). A multi-page IA
would fight that narrative — every chapter transition would require a full
navigation, breaking momentum. The site is built as one long page
(`src/app/page.tsx`) composed of section components, with anchor-based nav
links (`#product`, `#ai-suite`, `#security`, `#join`) so the header still
functions as a normal navigation for visitors who want to jump around.

## Five product pillars, not six

The brief's "Interactive Phone" spec lists six stops: Chats, Memories,
Communities, Channels, Calls, Quiick AI. The Product Bible's
`INFORMATION_ARCHITECTURE.md` is explicit that the product has **five**
pillars "no more," and that Channels are not a sixth destination — they live
*inside* Communities/Spaces ("Chats are people, groups are conversations,
Spaces are communities"). Treating Channels as a peer of Communities in the
website's own IA would misrepresent the product and contradict the Bible,
which the brief itself says takes precedence. The scroll-narrator therefore
has five stops (Chats, Memories, Communities, Calls, Quiick AI), with
Channels demonstrated as a tab *within* the Communities phone screen rather
than as its own step.

## Memories: 24 hours, not 72

The brief's copy prompt says "72-hour lifetime." `FEATURE_SPECIFICATIONS/
MEMORIES.md` says the default expiry is **24 hours**, with duration
configurable at creation. Since the Bible is the source of truth, the
website says "expires on your terms" / "24 hours by default" rather than
hardcoding a lifetime that contradicts the product spec.

## No fabricated social proof

An early reference mockup (provided alongside the Bible) showed a "Trusted by
Coinbase, Spotify, Netflix, Notion, Discord" logo strip and a "Join 1M+
people" claim. Neither is real — Quiick Chat has no verified relationship
with those companies, and the Bible's own growth guardrails explicitly
prohibit fake liveness/engagement numbers ("no growth-hacking that
manipulates the user"). The final hero has no trust-logo strip and no
invented user count; the site's credibility comes from being specific about
what the product actually does, not from borrowed or invented authority.

## Honest capability claims

Several sections needed careful wording to stay inside the Bible's explicit
"do not claim" list:

- **No "end-to-end encrypted" claim anywhere.** E2EE exists in the codebase
  but is disabled/unverified — the Trust section talks about what *is* true
  today (app lock, honest audience controls, real message expiry,
  infrastructure) instead.
- **In-call AI (transcript/translate) is flagged as "rolling out," not
  live**, since the Bible's roadmap says that backend isn't shipped yet.
- **Quiick AI is never called "a chatbot"** and the underlying model is never
  named, per the Bible's explicit, binding brand rule.
- **Monetization (wallet, paid Spaces, tickets) appears only in the "Later"
  roadmap strip**, never as a working feature.

## Design tokens: faithful to the Bible, with one accessibility-driven change

`src/app/globals.css` mirrors the Bible's `DESIGN_SYSTEM.md` tokens almost
verbatim (dark "Emerald Glass" as default, light "Slate Neutrals" as a fully
supported second theme, the same radii/spacing/motion scale, glass-morphism
spec, and the rule that the brand accent is theme-dependent rather than one
hardcoded hex).

One deliberate deviation: the light-theme brand green (`#16C55B`) only
reaches roughly **2:1 contrast** against the light background — nowhere near
the 4.5:1 WCAG AA requires for normal text, and not even the relaxed 3:1
large-text minimum. Rather than either (a) silently shipping inaccessible
green text/links, or (b) abandoning the brand color for text, a second token
— `--accent-text` — was added: identical to `--accent` in dark mode
(already ~9.5:1, no change), but a darker shade of the same green
(`#0C823A`, ~4.5:1) in light mode, used specifically where accent color
renders as small standalone text (links, eyebrow labels, the hero's gradient
headline). Backgrounds, buttons, icons, and chips still use the brighter
brand `--accent` — only bare text got the safer variant. This keeps every
page passing WCAG AA in both themes without abandoning the brand's green
identity.

The `--muted` (secondary text) token in light mode was also nudged from
`#64748B` (4.39:1 — just under the 4.5:1 bar) to `#5F6F86` (4.72:1), a
change small enough to be visually indistinguishable but enough to close a
borderline AA gap, since `--muted` is used pervasively for real body copy.

## The AI Orb as a recurring character, not a mascot

The Bible calls for the Orb to "appear throughout the website naturally...
never become distracting." It appears at three deliberately different scales
and behaviors: small and static inside the phone mockup's AI screen (in
context, like the in-app affordance it represents), large with pulsing rings
as the literal hero of the AI Suite section, and medium-sized, calm, in the
final CTA. It never appears as a floating, draggable, ever-present widget on
the marketing site itself — that behavior belongs to the *product*, and
reproducing it site-wide risked exactly the distracting-mascot outcome the
Bible warns against.

## Phone mockup content is original, not copied from the reference screenshot

The reference image includes what look like real user names/handles. Rather
than reproduce someone's plausibly-real personal data on a public marketing
site, all names, avatars, and messages shown across the phone mockups
(Chats, Memories, Communities, Calls, Quiick AI screens) are original
placeholder content invented for this build.
