import { Bot, MessageCircle, Phone, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  { key: "chats", label: "Chats", icon: MessageCircle },
  { key: "calls", label: "Calls", icon: Phone },
  { key: "communities", label: "Communities", icon: Users },
  { key: "ai", label: "AI", icon: Bot },
] as const;

export function PhoneBottomNav({ active }: { active: (typeof ITEMS)[number]["key"] }) {
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-white/[0.06] bg-surface/95 px-2 pb-5 pt-2.5 backdrop-blur">
      {ITEMS.map(({ key, label, icon: Icon }) => {
        const isActive = key === active;
        return (
          <div key={key} className="flex flex-col items-center gap-1">
            <Icon
              className={cn("h-[18px] w-[18px]", isActive ? "text-accent" : "text-subtle")}
              strokeWidth={isActive ? 2.4 : 1.8}
            />
            <span
              className={cn(
                "text-[9px] font-medium",
                isActive ? "text-accent" : "text-subtle"
              )}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
