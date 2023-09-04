import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md dark:bg-muted bg-foreground/40",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
