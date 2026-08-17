import { ChevronLeft, Phone, Play, Plus, Send, Video } from "lucide-react";
import { PhoneStatusBar } from "../phone-frame";

/** A 1:1 chat conversation — sent bubbles use the app's deep-green sender
 *  style, received use graphite; includes a voice-note bubble. Mirrors the real
 *  Quiick Chat message view. */
export function ChatConversationScreen() {
  return (
    <div className="absolute inset-0 flex flex-col bg-background">
      <PhoneStatusBar />

      {/* header */}
      <div className="flex items-center gap-2.5 border-b border-white/[0.06] px-3 py-2.5">
        <ChevronLeft className="h-4 w-4 text-muted" />
        <div className="grid h-8 w-8 place-items-center rounded-full bg-accent text-[11px] font-bold text-on-accent">
          T
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[12.5px] font-bold text-foreground">
            Tosin Adeyemi
          </p>
          <p className="text-[10px] text-accent-text">Online</p>
        </div>
        <Phone className="h-[17px] w-[17px] text-muted" />
        <Video className="h-[17px] w-[17px] text-muted" />
      </div>

      {/* messages */}
      <div className="flex-1 space-y-2.5 overflow-hidden px-3 py-4">
        <p className="text-center text-[9px] font-semibold uppercase tracking-wider text-subtle">
          Today
        </p>

        {/* received */}
        <div className="flex">
          <div
            className="max-w-[75%] rounded-2xl rounded-tl-md px-3 py-2 text-[11.5px] leading-snug"
            style={{ background: "var(--receiver-top)", color: "#E7ECEE" }}
          >
            Hey! Are we still meeting later today?
            <span className="mt-1 block text-right text-[8.5px] text-subtle">
              9:40 AM
            </span>
          </div>
        </div>

        {/* sent */}
        <div className="flex justify-end">
          <div
            className="max-w-[75%] rounded-2xl rounded-tr-md px-3 py-2 text-[11.5px] leading-snug"
            style={{ background: "var(--sender-top)", color: "var(--sender-text)" }}
          >
            Yes, definitely! See you at 6pm 😊
            <span className="mt-1 block text-right text-[8.5px] text-[color:var(--sender-meta)]">
              9:41 AM ✓✓
            </span>
          </div>
        </div>

        {/* sent voice note */}
        <div className="flex justify-end">
          <div
            className="flex max-w-[80%] items-center gap-2.5 rounded-2xl rounded-tr-md px-3 py-2.5"
            style={{ background: "var(--sender-top)" }}
          >
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/15 text-white">
              <Play className="h-3.5 w-3.5" />
            </span>
            <div className="flex items-end gap-[2px]">
              {[6, 10, 14, 9, 16, 7, 12, 18, 8, 13, 6, 11].map((h, i) => (
                <span
                  key={i}
                  className="w-[2px] rounded-full"
                  style={{
                    height: `${h}px`,
                    background: "var(--sender-meta)",
                    opacity: i < 5 ? 1 : 0.45,
                  }}
                />
              ))}
            </div>
            <span className="text-[8.5px] text-[color:var(--sender-meta)]">0:18</span>
          </div>
        </div>
      </div>

      {/* input bar */}
      <div className="flex items-center gap-2 border-t border-white/[0.06] px-3 py-2.5">
        <Plus className="h-5 w-5 text-muted" />
        <div className="flex-1 rounded-full bg-elevated px-3 py-2 text-[11px] text-subtle">
          Message
        </div>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-on-accent">
          <Send className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}
