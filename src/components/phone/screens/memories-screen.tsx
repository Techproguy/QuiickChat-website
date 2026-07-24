import { Heart, Music2, Send, X } from "lucide-react";

export function MemoriesScreen() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      {/* immersive background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 20% 0%, #1C6844 0%, transparent 55%), radial-gradient(100% 80% at 90% 100%, #182E4E 0%, transparent 60%), linear-gradient(180deg, #0B1A14 0%, #060B10 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

      <div className="relative z-10 flex flex-col gap-2 px-3 pt-3">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/25">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: i < 2 ? "100%" : i === 2 ? "55%" : "0%" }}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-accent text-[11px] font-bold text-on-accent">
              P
            </div>
            <div className="leading-tight">
              <p className="text-[12px] font-semibold text-white">Priya</p>
              <p className="text-[10px] text-white/60">2h left · Close Friends</p>
            </div>
          </div>
          <X className="h-4 w-4 text-white/80" />
        </div>
      </div>

      <div className="relative z-10 flex flex-1 items-end pb-24">
        <div className="px-4">
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-[10px] text-white/90 backdrop-blur">
            <Music2 className="h-3 w-3" /> Golden Hour — Amber Skies
          </span>
          <p className="max-w-[220px] text-[13px] font-medium leading-snug text-white">
            last light of the road trip. this is the one 🌅
          </p>
        </div>
      </div>

      <div className="relative z-10 flex items-center gap-2 px-4 pb-24">
        <div className="flex flex-1 items-center rounded-full bg-white/10 px-3 py-2 text-[11px] text-white/60 backdrop-blur">
          Send a message
        </div>
        <Heart className="h-5 w-5 text-white" />
        <Send className="h-5 w-5 text-white" />
      </div>
    </div>
  );
}
