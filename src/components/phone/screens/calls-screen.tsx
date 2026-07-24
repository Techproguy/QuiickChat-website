import { Mic, PhoneOff, Sparkles, Video } from "lucide-react";
import { PhoneStatusBar } from "../phone-frame";

export function CallsScreen() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 60% at 50% 10%, #1C6844 0%, transparent 60%), radial-gradient(80% 60% at 30% 90%, #182E4E 0%, transparent 60%), #05080B",
        }}
      />
      <div className="relative z-10">
        <PhoneStatusBar />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
        <div
          className="grid h-20 w-20 place-items-center rounded-full text-xl font-bold text-on-accent"
          style={{
            background: "radial-gradient(circle at 35% 30%, #6FE6A8, #33CE7C)",
            boxShadow: "0 0 40px 6px var(--accent-glow)",
          }}
        >
          N
        </div>
        <div>
          <p className="text-[14px] font-bold text-white">Noah Bennett</p>
          <p className="text-[11px] text-white/60">04:12 · Encrypted transport</p>
        </div>

        <div className="mt-1 flex h-8 items-end gap-[3px]">
          {[6, 14, 22, 10, 18, 26, 12, 20, 8, 16].map((h, i) => (
            <span
              key={i}
              className="w-[3px] rounded-full bg-accent-bright"
              style={{ height: h, opacity: 0.55 + (i % 3) * 0.15 }}
            />
          ))}
        </div>

        <div className="mt-2 flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-[10px] text-white/80 backdrop-blur">
          <Sparkles className="h-3 w-3 text-accent-bright" />
          &ldquo;…let&apos;s sync again once the designs are in&rdquo;
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center gap-5 pb-10">
        <button className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur">
          <Mic className="h-4 w-4" />
        </button>
        <button className="grid h-14 w-14 place-items-center rounded-full bg-danger text-white shadow-e2">
          <PhoneOff className="h-5 w-5" />
        </button>
        <button className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur">
          <Video className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
