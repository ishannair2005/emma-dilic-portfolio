import type { ResumeExperience } from "@/data/resume";

export function ResumeEntry({ entry }: { entry: ResumeExperience }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5">
        <h3 className="font-serif text-lg text-ink sm:text-xl">{entry.title}</h3>
        <span className="text-sm text-muted">{entry.dates}</span>
      </div>
      <p className="text-sm text-muted">
        {entry.organization}
        {entry.location ? ` · ${entry.location}` : ""}
      </p>
      {entry.bullets.length > 0 ? (
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-ink/90 marker:text-muted">
          {entry.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
