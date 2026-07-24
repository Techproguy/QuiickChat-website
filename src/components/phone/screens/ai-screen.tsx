import { ArrowUp, Languages, Sparkles } from "lucide-react";
import { PhoneStatusBar } from "../phone-frame";
import { AIOrb } from "@/components/ui/ai-orb";

export function AIScreen() {
  return (
    <div className="absolute inset-0 flex flex-col">
      <PhoneStatusBar />
      <div className="flex items-center gap-2.5 px-4 pt-3">
        <AIOrb size="sm" rings={false} />
        <div>
          <p className="text-[13px] font-bold text-foreground">Quiick AI</p>
          <p className="text-[10px] text-muted">Always private to you</p>
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-hidden px-4 pb-28 pt-4">
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-elevated px-3 py-2 text-[11.5px] text-foreground">
          Can you catch me up on the Design Guild channel?
        </div>

        <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-accent/20 bg-accent-soft px-3 py-2.5 text-[11.5px] leading-relaxed text-foreground">
          <span className="mb-1 flex items-center gap-1 text-[10px] font-semibold text-accent">
            <Sparkles className="h-3 w-3" /> Catch me up
          </span>
          14 new messages since yesterday. Priya shared new mockups, and the
          team agreed on Friday for the design review.
        </div>

        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-elevated px-3 py-2.5 text-[11.5px] text-foreground">
          <span className="mb-1 flex items-center gap-1 text-[10px] font-semibold text-accent-alt">
            <Languages className="h-3 w-3" /> Translated from French
          </span>
          &ldquo;On se voit vendredi pour la review&rdquo; → &ldquo;See you
          Friday for the review&rdquo;
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[76px] px-3">
        <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2.5">
          <span className="flex-1 text-[11px] text-subtle">Ask Quiick AI anything…</span>
          <div className="grid h-6 w-6 place-items-center rounded-full bg-accent">
            <ArrowUp className="h-3.5 w-3.5 text-on-accent" />
          </div>
        </div>
      </div>
    </div>
  );
}
