import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "glass rounded-xl shadow-e2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
