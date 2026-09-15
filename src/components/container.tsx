import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** Use the wider measure for image-heavy sections. */
  wide?: boolean;
};

/**
 * Shared horizontal rhythm for the site: a comfortable reading measure by
 * default, and a wider measure for portfolio imagery. Always keeps a side
 * gutter so content never touches the viewport edge.
 */
export function Container({ children, className, wide = false }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        wide ? "max-w-[1400px]" : "max-w-3xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
