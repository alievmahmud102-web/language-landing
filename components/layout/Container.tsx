import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Horizontal rhythm and max width for marketing sections.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-5 sm:px-8 lg:max-w-7xl lg:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
