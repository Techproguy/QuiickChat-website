import type { Metadata } from "next";
import { InviteLanding } from "@/components/invite/invite-landing";
import { APP } from "@/lib/app-links";

type Params = { phone: string };
type Search = { n?: string };

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Search>;
}): Promise<Metadata> {
  const { n } = await searchParams;
  const name = (n ?? "").trim();
  return {
    title: name ? `Add ${name} on ${APP.name}` : `Add a contact on ${APP.name}`,
    description: `Connect with ${name || "this person"} on ${APP.name}.`,
    robots: { index: false, follow: false },
  };
}

/**
 * Contact landing, reached via quiickchat.com/u/<+E164phone>?n=<name> — the
 * payload encoded in a user's "my code" contact QR. Opens the app when
 * installed (universal link); otherwise offers to open the app or get it from
 * the store. The phone is passed to the app so it opens the right chat.
 */
export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<Search>;
}) {
  const { phone } = await params;
  const { n } = await searchParams;
  const name = (n ?? "").trim();

  return (
    <InviteLanding
      kind="contact"
      id={phone}
      title={name || "Add on Quiick Chat"}
      subtitle={
        name
          ? `${name} wants to connect on ${APP.name}. Open the app to start chatting.`
          : `Open ${APP.name} to add this contact and start chatting.`
      }
      avatarInitial={(name.charAt(0) || "Q").toUpperCase()}
    />
  );
}
