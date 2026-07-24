import { Hash, Radio, Users } from "lucide-react";
import { PhoneStatusBar } from "../phone-frame";
import { PhoneBottomNav } from "../phone-bottom-nav";
import { cn } from "@/lib/utils";

const TABS = ["Spaces", "Channels", "Live", "Discover"];

const SPACES = [
  {
    name: "Product Design Guild",
    members: "12.4k",
    gradient: "linear-gradient(135deg, #1C6844, #0F2C1E)",
    live: true,
  },
  {
    name: "Night Runners Club",
    members: "3.1k",
    gradient: "linear-gradient(135deg, #182E4E, #0B1A2E)",
    live: false,
  },
  {
    name: "Indie Founders",
    members: "8.7k",
    gradient: "linear-gradient(135deg, #33CE7C, #123726)",
    live: false,
  },
];

export function CommunitiesScreen() {
  return (
    <div className="absolute inset-0 flex flex-col">
      <PhoneStatusBar />
      <div className="px-4 pt-3">
        <span className="text-[15px] font-extrabold text-foreground">Communities</span>
      </div>
      <div className="no-scrollbar mt-3 flex gap-4 border-b border-white/[0.06] px-4">
        {TABS.map((t, i) => (
          <span
            key={t}
            className={cn(
              "shrink-0 border-b-2 pb-2 text-[11px] font-semibold",
              i === 0
                ? "border-accent text-accent"
                : "border-transparent text-subtle"
            )}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex-1 space-y-3 overflow-hidden px-4 pb-24 pt-3">
        {SPACES.map((s) => (
          <div
            key={s.name}
            className="relative overflow-hidden rounded-xl border border-white/[0.06] p-3"
            style={{ background: s.gradient }}
          >
            {s.live && (
              <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/40 px-2 py-0.5 text-[9px] font-bold text-white backdrop-blur">
                <Radio className="h-2.5 w-2.5 animate-pulse text-red-400" /> LIVE
              </span>
            )}
            <div className="mb-6 grid h-8 w-8 place-items-center rounded-lg bg-white/15 backdrop-blur">
              <Hash className="h-4 w-4 text-white" />
            </div>
            <p className="text-[12.5px] font-bold text-white">{s.name}</p>
            <p className="flex items-center gap-1 text-[10px] text-white/70">
              <Users className="h-2.5 w-2.5" /> {s.members} members
            </p>
          </div>
        ))}
      </div>
      <PhoneBottomNav active="communities" />
    </div>
  );
}
