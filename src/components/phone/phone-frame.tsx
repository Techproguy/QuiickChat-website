import { cn } from "@/lib/utils";

export function PhoneFrame({
  children,
  className,
  frameClassName,
}: {
  children: React.ReactNode;
  className?: string;
  frameClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19.3] w-[280px] sm:w-[300px]",
        className
      )}
    >
      {/* ambient glow behind the device */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-[4rem] blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, var(--accent-glow) 0%, transparent 70%)",
        }}
      />
      <div
        className={cn(
          "relative h-full w-full rounded-[2.6rem] border-[6px] border-[#1a1e24] bg-[#05070a] p-2 shadow-e3",
          "ring-1 ring-white/10",
          frameClassName
        )}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[2.05rem] bg-background">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-2.5 z-20 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-black" />
          {children}
        </div>
      </div>
      {/* side buttons */}
      <div className="absolute -left-[7px] top-[22%] h-8 w-[6px] rounded-l-sm bg-[#22262c]" />
      <div className="absolute -left-[7px] top-[32%] h-14 w-[6px] rounded-l-sm bg-[#22262c]" />
      <div className="absolute -right-[7px] top-[26%] h-20 w-[6px] rounded-r-sm bg-[#22262c]" />
    </div>
  );
}

export function PhoneStatusBar({ dark = true }: { dark?: boolean }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-6 pt-3.5 text-[11px] font-semibold",
        dark ? "text-white" : "text-foreground"
      )}
    >
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" aria-hidden="true">
          <rect x="0" y="6" width="2.4" height="4" rx="0.6" fill="currentColor" />
          <rect x="4" y="4" width="2.4" height="6" rx="0.6" fill="currentColor" />
          <rect x="8" y="2" width="2.4" height="8" rx="0.6" fill="currentColor" />
          <rect x="12" y="0" width="2.4" height="10" rx="0.6" fill="currentColor" />
        </svg>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
          <path
            d="M7 9.5C3.5 9.5 1 7.2 0 5.6 1.6 2.9 4 1 7 1s5.4 1.9 7 4.6C13 7.2 10.5 9.5 7 9.5Z"
            stroke="currentColor"
            strokeWidth="1.1"
          />
        </svg>
        <svg width="22" height="11" viewBox="0 0 22 11" fill="none" aria-hidden="true">
          <rect x="0.5" y="0.5" width="18" height="10" rx="2.5" stroke="currentColor" />
          <rect x="2" y="2" width="15" height="7" rx="1.3" fill="currentColor" />
          <rect x="19.5" y="3.5" width="1.6" height="4" rx="0.8" fill="currentColor" />
        </svg>
      </span>
    </div>
  );
}
