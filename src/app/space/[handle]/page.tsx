import type { Metadata } from "next";
import { InviteLanding } from "@/components/invite/invite-landing";
import { APP } from "@/lib/app-links";

type Params = { handle: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { handle } = await params;
  const clean = handle.replace(/^@/, "");
  return {
    title: `${clean} on ${APP.name}`,
    description: `Join the ${clean} community on ${APP.name}.`,
    robots: { index: false, follow: false },
  };
}

/**
 * Join-a-community (Space) landing, reached via quiickchat.com/space/handle.
 * Opens the app when installed (universal link); otherwise offers app / store.
 *
 * TODO (owner): resolve the Space `handle` server-side to its display name,
 * avatar, and member count and pass them into <InviteLanding>.
 */
export default async function SpacePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { handle } = await params;
  const clean = handle.replace(/^@/, "");
  return (
    <InviteLanding
      kind="space"
      id={clean}
      title={clean}
      subtitle={`You've been invited to join this community on ${APP.name}.`}
      avatarInitial={clean.charAt(0).toUpperCase() || "Q"}
    />
  );
}
