import type { Metadata } from "next";
import { InviteLanding } from "@/components/invite/invite-landing";
import { APP } from "@/lib/app-links";

export const metadata: Metadata = {
  title: `Join on ${APP.name}`,
  description: `You've been invited to join a group or community on ${APP.name}.`,
  robots: { index: false, follow: false },
};

/**
 * Invite landing for a group or Space, reached via a shared link like
 * quiickchat.com/join/ABC123. On a device with the app installed the OS opens
 * the app directly (universal link) and this page never renders; otherwise it
 * offers to open the app or get it from the store.
 *
 * TODO (owner): resolve the invite `code` server-side to the real group/Space
 * name + avatar (GET /invite/:code) and pass them into <InviteLanding> so the
 * page shows exactly what the person is joining.
 */
export default async function JoinPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  return (
    <InviteLanding
      kind="group"
      id={code}
      title="Join the conversation"
      subtitle={`You've been invited to a group on ${APP.name}. Open the app to accept and jump in.`}
    />
  );
}
