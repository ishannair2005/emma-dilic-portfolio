import { Container } from "@/components/container";
import { ProjectGrid } from "@/components/project-grid";
import { SITE_CREDENTIAL, SITE_NAME, SITE_ROLE } from "@/data/site";
import { getSortedProjects } from "@/data/projects";

export default function Home() {
  const projects = getSortedProjects();

  return (
    <>
      <Container wide className="pt-14 pb-10 sm:pt-20 sm:pb-14">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">{SITE_CREDENTIAL}</p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-[1.1] text-ink sm:text-5xl">
          {SITE_NAME}, {SITE_ROLE.toLowerCase()}.
        </h1>
      </Container>

      <Container wide className="pb-24 sm:pb-32">
        <ProjectGrid projects={projects} />
      </Container>
    </>
  );
}
