import {
  LayoutGrid,
  Layers,
  MessageCircle,
  Phone,
  Sparkles,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Mirrors the real Quiick Chat app tab bar: Chats · Memories · Communities ·
 * Calls · Me — with the single floating Quiick AI orb that lives above the bar
 * on the main tabs.
 */
const ITEMS = [
  { key: "chats", label: "Chats", icon: MessageCircle },
  { key: "memories", label: "Memories", icon: Layers },
  { key: "communities", label: "Communities", icon: LayoutGrid },
  { key: "calls", label: "Calls", icon: Phone },
  { key: "me", label: "Me", icon: User },
] as const;

export type PhoneTab = (typeof ITEMS)[number]["key"];

export function PhoneBottomNav({
  active,
  showAiOrb = true,
}: {
  active: PhoneTab;
  showAiOrb?: boolean;
}) {
  return (
    <>
      {showAiOrb && (
        <div className="absolute bottom-[70px] right-4 z-10">
          <div
            className="grid h-10 w-10 place-items-center rounded-full text-on-accent shadow-[0_0_20px_2px_var(--accent-glow)]"
            style={{
              background:
                "radial-gradient(120% 120% at 30% 25%, var(--accent-bright) 0%, var(--accent) 70%)",
            }}
          >
            <Sparkles className="h-4 w-4" />
          </div>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-white/[0.06] bg-surface/95 px-1 pb-5 pt-2.5 backdrop-blur">
        {ITEMS.map(({ key, label, icon: Icon }) => {
          const isActive = key === active;
          return (
            <div key={key} className="flex flex-col items-center gap-1">
              <Icon
                className={cn(
                  "h-[18px] w-[18px]",
                  isActive ? "text-accent" : "text-subtle",
                )}
                strokeWidth={isActive ? 2.4 : 1.8}
              />
              <span
                className={cn(
                  "text-[8.5px] font-medium",
                  isActive ? "text-accent" : "text-subtle",
                )}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
