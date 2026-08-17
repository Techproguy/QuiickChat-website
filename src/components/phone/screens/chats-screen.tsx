import { Search, SquarePen } from "lucide-react";
import { PhoneStatusBar } from "../phone-frame";
import { PhoneBottomNav } from "../phone-bottom-nav";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Unread", "Groups", "Communities"];

const CHATS = [
  {
    name: "Amara",
    preview: "See you at 6? I'll bring the playlist 🎧",
    time: "9:32",
    unread: 2,
    online: true,
    color: "#33CE7C",
  },
  {
    name: "Design Crew",
    preview: "Jules: shipped the new icon set",
    time: "9:10",
    unread: 0,
    online: false,
    color: "#64FFDA",
  },
  {
    name: "Noah",
    preview: "Voice message · 0:24",
    time: "Yesterday",
    unread: 0,
    online: true,
    color: "#6FE6A8",
  },
  {
    name: "Weekend Trip",
    preview: "Priya: dropped 12 photos in Memories",
    time: "Yesterday",
    unread: 5,
    online: false,
    color: "#33CE7C",
  },
  {
    name: "Theo",
    preview: "Translated from Spanish: \"On my way!\"",
    time: "Tue",
    unread: 0,
    online: false,
    color: "#64FFDA",
  },
];

export function ChatsScreen() {
  return (
    <div className="absolute inset-0 flex flex-col">
      <PhoneStatusBar />
      <div className="flex items-center justify-between px-4 pt-3">
        <span className="text-[15px] font-extrabold text-foreground">Chats</span>
        <div className="flex items-center gap-3 text-subtle">
          <Search className="h-4 w-4" />
          <SquarePen className="h-4 w-4" />
        </div>
      </div>
      <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto px-4">
        {FILTERS.map((f, i) => (
          <span
            key={f}
            className={cn(
              "shrink-0 rounded-full px-3 py-1 text-[10.5px] font-semibold",
              i === 0 ? "bg-accent text-on-accent" : "bg-elevated text-muted"
            )}
          >
            {f}
          </span>
        ))}
      </div>
      <div className="mt-2 flex-1 space-y-0.5 overflow-hidden px-2 pb-24 pt-2">
        {CHATS.map((chat) => (
          <div key={chat.name} className="flex items-center gap-3 rounded-xl px-2 py-2">
            <div className="relative shrink-0">
              <div
                className="grid h-11 w-11 place-items-center rounded-full text-[13px] font-bold text-[#04160B]"
                style={{ background: chat.color }}
              >
                {chat.name[0]}
              </div>
              {chat.online && (
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background bg-online" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="truncate text-[12.5px] font-semibold text-foreground">
                  {chat.name}
                </span>
                <span className="text-[10px] text-subtle">{chat.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="truncate text-[11px] text-muted">{chat.preview}</span>
                {chat.unread > 0 && (
                  <span className="ml-2 grid h-4 min-w-4 shrink-0 place-items-center rounded-full bg-accent px-1 text-[9px] font-bold text-on-accent">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <PhoneBottomNav active="chats" />
    </div>
  );
}
