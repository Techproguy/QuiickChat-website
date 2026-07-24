import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg width="30" height="30" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect width="64" height="64" rx="18" fill="var(--surface)" />
        <path
          d="M32 14C20.954 14 12 21.83 12 31.5c0 5.06 2.44 9.6 6.36 12.79-.22 2.55-1.02 5.07-2.36 7.21a1 1 0 0 0 1.14 1.47c3.6-1.02 6.7-2.9 9.1-5.24 1.85.5 3.8.77 5.76.77 11.046 0 20-7.83 20-17.5S43.046 14 32 14Z"
          fill="var(--accent)"
        />
        <circle cx="24" cy="31.5" r="2.75" fill="var(--on-accent)" />
        <circle cx="32" cy="31.5" r="2.75" fill="var(--on-accent)" />
        <circle cx="40" cy="31.5" r="2.75" fill="var(--on-accent)" />
      </svg>
      <span className="text-lg font-extrabold tracking-normal text-foreground">
        Qui<span className="tracking-[0.02em]">i</span>ck
        <span className="font-medium text-muted"> Chat</span>
      </span>
    </span>
  );
}
