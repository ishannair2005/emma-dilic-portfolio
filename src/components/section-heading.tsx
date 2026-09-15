import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  dek,
  className,
}: {
  eyebrow?: string;
  title: string;
  dek?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted">{eyebrow}</p>
      ) : null}
      <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">{title}</h1>
      {dek ? <p className="mt-4 text-lg text-muted">{dek}</p> : null}
    </div>
  );
}
