import { ProjectCard } from "@/components/project-card";
import type { PortfolioProject } from "@/data/types";

export function ProjectGrid({ projects }: { projects: PortfolioProject[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-20">
      {projects.map((project, index) => (
        <div key={project.slug} className={index % 2 === 1 ? "sm:mt-20" : undefined}>
          <ProjectCard project={project} priority={index < 2} />
        </div>
      ))}
    </div>
  );
}
