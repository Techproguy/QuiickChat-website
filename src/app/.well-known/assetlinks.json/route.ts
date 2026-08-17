/**
 * Android Digital Asset Links — lets Android open quiickchat.com/<path> links
 * directly in the Quiick Chat app (verified App Links, android:autoVerify).
 *
 * Served at https://quiickchat.com/.well-known/assetlinks.json.
 *
 * ⚠️ Replace the fingerprint placeholder with the app's **release signing
 * SHA-256** (uppercase, colon-separated). Get it with:
 *   keytool -list -v -keystore <release.keystore> -alias <alias>
 * or from Play Console → Setup → App integrity → App signing key certificate.
 * List BOTH the upload key and the Play-managed signing key fingerprints if you
 * use Play App Signing. Until a real fingerprint is present, Android falls back
 * to the quiickchat:// custom scheme via the invite landing pages.
 */
export const dynamic = "force-static";

const SHA256_FINGERPRINTS = [
  "REPLACE_WITH_RELEASE_SIGNING_SHA256", // e.g. "AB:CD:EF:...:12"
];

export function GET() {
  const body = [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.sanga.quickchat",
        sha256_cert_fingerprints: SHA256_FINGERPRINTS,
      },
    },
  ];
  return new Response(JSON.stringify(body, null, 2), {
    headers: { "content-type": "application/json" },
  });
}
