import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { MediaImage } from "@/components/media-image";
import { SectionHeading } from "@/components/section-heading";
import { getSortedResearch } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Undergraduate and independent research in cartography, geovisualization, biogeography, and medical geography.",
};

export default function ResearchPage() {
  const entries = getSortedResearch();

  return (
    <>
      <Container className="pt-14 pb-10 sm:pt-20">
        <SectionHeading
          eyebrow="Academic Research"
          title="Research"
          dek="Undergraduate and independent research spanning geovisualization, biogeography, and medical geography."
        />
      </Container>

      <Container className="pb-24 sm:pb-32">
        <div className="space-y-20 sm:space-y-28">
          {entries.map((entry, index) => (
            <section
              key={entry.slug}
              id={entry.slug}
              aria-labelledby={`${entry.slug}-heading`}
              className={index > 0 ? "border-t border-line pt-16 sm:pt-20" : undefined}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h2 id={`${entry.slug}-heading`} className="font-serif text-3xl text-ink sm:text-4xl">
                  {entry.title}
                </h2>
                <span className="text-sm text-muted">{entry.dates}</span>
              </div>
              <p className="mt-2 text-sm text-muted">
                {entry.role} · {entry.institution}
              </p>

              <p className="mt-6 max-w-2xl font-serif text-xl italic leading-snug text-ink">
                {entry.question}
              </p>

              <div className="mt-6 max-w-2xl space-y-4 text-[17px] leading-relaxed text-ink/90">
                {entry.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.14em] text-muted">
                    Methods &amp; Approach
                  </h3>
                  <ul className="mt-2 space-y-1 text-sm text-ink/90">
                    {entry.methods.map((method) => (
                      <li key={method}>{method}</li>
                    ))}
                  </ul>
                </div>
                {entry.outputs && entry.outputs.length > 0 ? (
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.14em] text-muted">
                      Outputs
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm text-ink/90">
                      {entry.outputs.map((output) => (
                        <li key={output}>{output}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              {entry.image ? (
                <div className="relative mt-10 aspect-[3/2] w-full overflow-hidden bg-accent-soft">
                  <MediaImage src={entry.image.src} alt={entry.image.alt} isPlaceholder={entry.image.isPlaceholder} />
                </div>
              ) : null}

              {entry.relatedProjectSlug ? (
                <Link
                  href={`/portfolio/${entry.relatedProjectSlug}`}
                  className="mt-6 inline-block text-sm text-accent underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                >
                  View the related portfolio project &rarr;
                </Link>
              ) : null}
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
