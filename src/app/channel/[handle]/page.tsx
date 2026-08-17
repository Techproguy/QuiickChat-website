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
    title: `@${clean} on ${APP.name}`,
    description: `Follow @${clean} on ${APP.name}.`,
    robots: { index: false, follow: false },
  };
}

/**
 * Follow-a-channel landing, reached via quiickchat.com/channel/handle. Opens
 * the app when installed (universal link); otherwise offers app / store.
 *
 * TODO (owner): resolve the channel `handle` server-side to its display name,
 * avatar, and follower count and pass them into <InviteLanding>.
 */
export default async function ChannelPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { handle } = await params;
  const clean = handle.replace(/^@/, "");
  return (
    <InviteLanding
      kind="channel"
      id={clean}
      title={`@${clean}`}
      subtitle={`Follow this channel on ${APP.name} for posts, polls, and more.`}
      avatarInitial={clean.charAt(0).toUpperCase() || "Q"}
    />
  );
}
