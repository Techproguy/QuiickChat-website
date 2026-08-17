/**
 * Apple App Site Association (AASA) — lets iOS open quiickchat.com/<path> links
 * directly in the Quiick Chat app (Universal Links) instead of Safari.
 *
 * Served at https://quiickchat.com/.well-known/apple-app-site-association with
 * an application/json content-type (Apple's CDN fetches this on app install).
 *
 * ⚠️ Replace TEAMID with the Apple Developer **Team ID** (10 chars, e.g.
 * "A1B2C3D4E5"). The value is `<TeamID>.<bundleId>`; the iOS bundle id is
 * com.sanga.quiickChat. Until the real Team ID is in place, iOS falls back to
 * the quiickchat:// custom scheme via the invite landing pages.
 */
export const dynamic = "force-static";

const APP_ID = "TEAMID.com.sanga.quiickChat";

export function GET() {
  const body = {
    applinks: {
      details: [
        {
          appIDs: [APP_ID],
          components: [
            { "/": "/join/*", comment: "Group / community invites" },
            { "/": "/space/*", comment: "Space invites" },
            { "/": "/channel/*", comment: "Channel follow links" },
            { "/": "/u/*", comment: "Contact add links" },
          ],
        },
      ],
    },
  };
  return new Response(JSON.stringify(body, null, 2), {
    headers: { "content-type": "application/json" },
  });
}
