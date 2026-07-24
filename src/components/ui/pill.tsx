import { cn } from "@/lib/utils";

export function Pill({
  className,
  children,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-accent-text",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
