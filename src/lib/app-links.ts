/**
 * Central config for how the website hands users off to the app.
 *
 * Invite / join links (e.g. quiickchat.com/join/ABC123) are also configured as
 * the app's **universal links / app links**, so on a device with the app
 * installed the OS opens the app directly and these web pages never render.
 * When the app is NOT installed (or on desktop), these pages render and offer:
 *   1. a custom-scheme deep link (best-effort open), then
 *   2. the app stores as a fallback.
 *
 * TODO (owner): replace the store URLs once the apps are live, and confirm the
 * custom URL scheme registered by the app (assumed `quiickchat://`).
 */

export const APP = {
  name: "Quiick Chat",
  domain: "quiickchat.com",
  scheme: "quiickchat", // custom URL scheme → quiickchat://...
  // Store links are placeholders until the apps are published.
  iosStoreUrl: "https://apps.apple.com/app/quiick-chat/id000000000",
  androidStoreUrl:
    "https://play.google.com/store/apps/details?id=com.sanga.quickchat",
} as const;

export type InviteKind = "group" | "space" | "channel" | "contact";

/** The custom-scheme deep link the browser attempts first. */
export function deepLink(kind: InviteKind, id: string): string {
  return `${APP.scheme}://${kind}/${encodeURIComponent(id)}`;
}

/** The canonical https URL for this invite (also the universal link). */
export function inviteUrl(path: string): string {
  return `https://${APP.domain}${path}`;
}
