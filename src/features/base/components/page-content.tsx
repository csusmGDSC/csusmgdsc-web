import { cn } from "@/lib/utils";

export default function PageContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex-center-col">
      <div className={cn("custom-max-width flex flex-col gap-10", className)}>
        {children}
      </div>
    </div>
  );
}
