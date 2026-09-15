import type { Metadata } from "next";
import { Container } from "@/components/container";
import { EmailIcon, LinkedInIcon } from "@/components/icons";
import { MediaImage } from "@/components/media-image";
import { SITE_EMAIL, SITE_LINKEDIN_URL, SITE_LOCATION, SITE_NAME, SITE_ROLE } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE_NAME}, ${SITE_ROLE.toLowerCase()} based in ${SITE_LOCATION}.`,
};

const CURRENT_FOCUS = [
  "B.A. in Geography, minor in GIS — Virginia Tech, expected May 2027",
  "National Geographic Cartography Intern, Washington, D.C. (2026)",
  "Teaching Assistant, Cartography — Virginia Tech",
  "Undergraduate research supporting a new advanced cartography & geovisualization course",
];

const INTERESTS = [
  "Editorial and narrative cartography",
  "Biogeography & environmental mapping",
  "Medical geography and disease mapping",
  "GIS pedagogy and cartography instruction",
  "Historical cartography",
];

const TOOLS = [
  "ArcGIS Pro",
  "ArcGIS Online Suite",
  "QGIS",
  "MAPublisher",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Python",
  "R",
];

export default function AboutPage() {
  return (
    <Container className="pt-14 pb-24 sm:pt-20 sm:pb-32">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-[220px_1fr] sm:gap-14">
        <div>
          <div className="relative aspect-square w-full max-w-[220px] overflow-hidden bg-accent-soft">
            <MediaImage
              src="/images/about/headshot-placeholder.svg"
              alt="Placeholder headshot — replace with a professional photo"
              isPlaceholder
              priority
            />
          </div>
          <p className="mt-3 text-xs text-muted">
            Placeholder — add a photo at /public/images/about/headshot.jpg
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">About</p>
          <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">{SITE_NAME}</h1>
          <p className="mt-2 text-lg text-muted">
            {SITE_ROLE} · {SITE_LOCATION}
          </p>

          <div className="mt-8 max-w-2xl space-y-5 text-[17px] leading-relaxed text-ink/90">
            <p>
              I&rsquo;m a geography student at Virginia Tech, finishing a B.A. in Geography with a
              minor in GIS. In the summer of 2026 I worked as a Cartography Intern with National
              Geographic in Washington, D.C., building print and digital maps for editorial stories
              and a forthcoming Bookazine atlas.
            </p>
            <p>
              Most of my work sits at the intersection of research and design: turning spatial data
              into maps that hold up to close reading, whether that&rsquo;s a plant-distribution map
              for an Association of American Geographers publication or a historical map of
              Botetourt County built for a 1776 reenactment. I&rsquo;ve also spent the past two years
              as a teaching assistant for Virginia Tech&rsquo;s cartography and maps-and-mapping
              courses, which has sharpened how I think about what makes a map easy to read at a
              glance.
            </p>
            <p>
              Right now I&rsquo;m splitting my time between coursework, an independent study in
              medical geography on malaria transmission in Bangladesh, and research supporting a new
              advanced cartography and geovisualization course at Virginia Tech. I work primarily in
              ArcGIS Pro and the ArcGIS Online suite, with QGIS, Adobe Illustrator, Photoshop, and
              MAPublisher for production, and I&rsquo;m building out my Python and R for spatial
              analysis.
            </p>
            <p>
              I&rsquo;m particularly drawn to cartographic design for storytelling — the editorial
              side of mapmaking, where accuracy and legibility have to meet an audience that
              isn&rsquo;t necessarily trained to read a map.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 border-t border-line pt-12 sm:grid-cols-3 sm:gap-8 sm:pt-16">
        <div>
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">Current Focus</h2>
          <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-ink/90">
            {CURRENT_FOCUS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">Areas of Interest</h2>
          <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-ink/90">
            {INTERESTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">Tools</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {TOOLS.map((tool) => (
              <li
                key={tool}
                className="border border-line px-2.5 py-1 text-sm text-ink/90"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-line pt-12 sm:pt-16">
        <h2 className="text-xs uppercase tracking-[0.16em] text-muted">Contact</h2>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="flex items-center gap-2 text-[17px] text-ink transition-colors hover:text-accent"
          >
            <EmailIcon className="h-4 w-4" />
            {SITE_EMAIL}
          </a>
          <a
            href={SITE_LINKEDIN_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-[17px] text-ink transition-colors hover:text-accent"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </Container>
  );
}
