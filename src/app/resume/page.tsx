import type { Metadata } from "next";
import { Container } from "@/components/container";
import { DownloadIcon } from "@/components/icons";
import { ResumeEntry } from "@/components/resume-entry";
import { SITE_EMAIL, SITE_LINKEDIN_URL, SITE_NAME, SITE_ROLE, RESUME_PDF_PATH } from "@/data/site";
import {
  AWARDS,
  EDUCATION,
  EXPERIENCE,
  GIS_PROJECTS,
  LANGUAGES,
  OTHER_EXPERIENCE,
  PUBLICATIONS,
  SKILLS,
} from "@/data/resume";
import { getSortedResearch } from "@/data/research";

export const metadata: Metadata = {
  title: "Resume",
  description: `Education, experience, research, and technical skills for ${SITE_NAME}, ${SITE_ROLE.toLowerCase()}.`,
};

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line py-12 first:border-t-0 first:pt-0 sm:py-14">
      <h2 className="text-xs uppercase tracking-[0.16em] text-muted">{title}</h2>
      <div className="mt-6 space-y-10">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  const research = getSortedResearch();

  return (
    <Container className="pt-14 pb-24 sm:pt-20 sm:pb-32">
      <div className="flex flex-col gap-6 border-b border-line pb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Resume</p>
          <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">{SITE_NAME}</h1>
          <p className="mt-2 text-lg text-muted">{SITE_ROLE}</p>
          <p className="mt-4 text-sm text-muted">
            <a href={`mailto:${SITE_EMAIL}`} className="underline decoration-line underline-offset-4 hover:decoration-ink">
              {SITE_EMAIL}
            </a>
            {" · "}
            <a
              href={SITE_LINKEDIN_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="underline decoration-line underline-offset-4 hover:decoration-ink"
            >
              LinkedIn
            </a>
          </p>
        </div>

        <a
          href={RESUME_PDF_PATH}
          download
          className="inline-flex shrink-0 items-center gap-2 border border-ink px-5 py-3 text-sm uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          <DownloadIcon className="h-4 w-4" />
          Download Resume (PDF)
        </a>
      </div>

      <ResumeSection title="Education">
        {EDUCATION.map((edu) => (
          <div key={edu.institution}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5">
              <h3 className="font-serif text-lg text-ink sm:text-xl">{edu.institution}</h3>
              <span className="text-sm text-muted">{edu.dates}</span>
            </div>
            <p className="text-sm text-muted">{edu.location}</p>
            <p className="mt-2 text-[15px] text-ink/90">
              {edu.degree}
              {edu.minor ? ` · Minor in ${edu.minor}` : ""}
            </p>
          </div>
        ))}
      </ResumeSection>

      <ResumeSection title="Experience">
        {EXPERIENCE.map((entry) => (
          <ResumeEntry key={entry.title} entry={entry} />
        ))}
      </ResumeSection>

      <ResumeSection title="GIS Projects">
        {GIS_PROJECTS.map((entry) => (
          <ResumeEntry key={entry.title} entry={entry} />
        ))}
      </ResumeSection>

      <ResumeSection title="Research">
        <div className="space-y-8">
          {research.map((entry) => (
            <div key={entry.slug}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5">
                <h3 className="font-serif text-lg text-ink sm:text-xl">{entry.title}</h3>
                <span className="text-sm text-muted">{entry.dates}</span>
              </div>
              <p className="text-sm text-muted">
                {entry.role} · {entry.institution}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/90">{entry.description[0]}</p>
            </div>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Additional Experience & Involvement">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {OTHER_EXPERIENCE.map((entry) => (
            <div key={entry.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-[15px] text-ink">{entry.title}</h3>
              </div>
              <p className="text-sm text-muted">
                {entry.organization}
                {entry.location ? ` · ${entry.location}` : ""} · {entry.dates}
              </p>
            </div>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Technical Skills">
        <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="flex items-baseline justify-between border-b border-line/70 pb-2">
              <span className="text-[15px] text-ink">{skill.name}</span>
              <span className="text-sm text-muted">{skill.level}</span>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.14em] text-muted">Languages</h3>
          <div className="mt-3 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            {LANGUAGES.map((lang) => (
              <div key={lang.name} className="flex items-baseline justify-between">
                <span className="text-[15px] text-ink">{lang.name}</span>
                <span className="text-sm text-muted">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </ResumeSection>

      <ResumeSection title="Awards & Honors">
        <ul className="space-y-2 text-[15px] text-ink/90">
          {AWARDS.map((award) => (
            <li key={award}>{award}</li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection title="Publications & Presentations">
        <ul className="space-y-2 text-[15px] text-ink/90">
          {PUBLICATIONS.map((pub) => (
            <li key={pub}>{pub}</li>
          ))}
        </ul>
      </ResumeSection>
    </Container>
  );
}
