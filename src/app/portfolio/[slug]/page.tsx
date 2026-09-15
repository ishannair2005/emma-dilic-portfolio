import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { MediaImage } from "@/components/media-image";
import { ProjectNav } from "@/components/project-nav";
import { ExternalLinkIcon } from "@/components/icons";
import { getAdjacentProjects, getProjectBySlug, getSortedProjects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getSortedProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.heroImage.isPlaceholder ? undefined : [{ url: project.heroImage.src }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(slug);

  const meta = [
    { label: "Year", value: project.year },
    { label: "Role", value: project.role },
    { label: "Organization", value: project.organization },
    { label: "Tools", value: project.tools.join(", ") },
  ].filter((item) => item.value);

  return (
    <article>
      <Container wide className="pt-12 pb-8 sm:pt-16">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">{project.category}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{project.summary}</p>

        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-line pt-8 sm:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-xs uppercase tracking-[0.14em] text-muted">{item.label}</dt>
              <dd className="mt-1 text-sm text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* Hero image — rendered at its true aspect ratio, never cropped or
          upscaled past its native resolution. */}
      <Container wide className="mt-4 sm:mt-8">
        <div
          className="mx-auto bg-accent-soft"
          style={{ maxWidth: project.heroImage.width }}
        >
          <MediaImage
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            isPlaceholder={project.heroImage.isPlaceholder}
            width={project.heroImage.width}
            height={project.heroImage.height}
            priority
            sizes="(min-width: 1024px) 1200px, 100vw"
          />
        </div>
      </Container>

      <Container className="mt-16 space-y-14 sm:mt-24">
        {project.problem ? (
          <section aria-labelledby="problem-heading">
            <h2 id="problem-heading" className="font-serif text-2xl text-ink">
              Research &amp; Problem Statement
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-ink/90">
              {project.problem.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ) : null}

        <section aria-labelledby="description-heading">
          <h2 id="description-heading" className="font-serif text-2xl text-ink">
            Project Description
          </h2>
          <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-ink/90">
            {project.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {project.methodology ? (
          <section aria-labelledby="methodology-heading">
            <h2 id="methodology-heading" className="font-serif text-2xl text-ink">
              Methodology
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-ink/90">
              {project.methodology.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ) : null}
      </Container>

      {/* Maps / visualizations — large, stacked vertically for close inspection */}
      {project.images.length > 0 ? (
        <Container wide className="mt-16 sm:mt-24">
          <h2 className="font-serif text-2xl text-ink">Maps &amp; Visualizations</h2>
          <div className="mt-8 space-y-14 sm:space-y-20">
            {project.images.map((image, i) => (
              <figure key={i} className="mx-auto" style={{ maxWidth: image.width }}>
                <div className="bg-accent-soft">
                  <MediaImage
                    src={image.src}
                    alt={image.alt}
                    isPlaceholder={image.isPlaceholder}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 1024px) 1200px, 100vw"
                  />
                </div>
                {image.caption ? (
                  <figcaption className="mt-3 text-sm text-muted">{image.caption}</figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </Container>
      ) : null}

      <Container className="mt-16 space-y-14 sm:mt-24">
        {project.outcome ? (
          <section aria-labelledby="outcome-heading">
            <h2 id="outcome-heading" className="font-serif text-2xl text-ink">
              Results &amp; Outcome
            </h2>
            <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-ink/90">
              {project.outcome.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ) : null}

        {project.links && project.links.length > 0 ? (
          <section aria-labelledby="links-heading">
            <h2 id="links-heading" className="font-serif text-2xl text-ink">
              Related Resources
            </h2>
            <ul className="mt-4 space-y-2">
              {project.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-[17px] text-accent underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {link.label}
                    <ExternalLinkIcon className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </Container>

      <Container wide className="mt-20 sm:mt-28">
        <ProjectNav previous={previous} next={next} />
      </Container>
    </article>
  );
}
