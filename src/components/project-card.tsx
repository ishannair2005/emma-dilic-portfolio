import Link from "next/link";
import { MediaImage } from "@/components/media-image";
import type { PortfolioProject } from "@/data/types";
import { cn } from "@/lib/utils";

const ORIENTATION_ASPECT: Record<string, string> = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

export function ProjectCard({
  project,
  priority = false,
}: {
  project: PortfolioProject;
  priority?: boolean;
}) {
  const aspect = ORIENTATION_ASPECT[project.heroImage.orientation ?? "landscape"];

  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <div className={cn("relative overflow-hidden bg-accent-soft", aspect)}>
        <MediaImage
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          isPlaceholder={project.heroImage.isPlaceholder}
          priority={priority}
          sizes="(min-width: 1024px) 45vw, 90vw"
          className="transition-opacity duration-500 ease-out group-hover:opacity-90"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-xl text-ink transition-colors group-hover:text-accent sm:text-2xl">
          {project.title}
        </h3>
        <span className="shrink-0 text-sm text-muted">{project.year}</span>
      </div>
      <p className="mt-1 text-sm text-muted">
        {project.category}
        {project.organization ? ` · ${project.organization}` : ""}
      </p>
    </Link>
  );
}
