import { Container } from "@/components/container";
import { EmailIcon, LinkedInIcon } from "@/components/icons";
import { CURRENT_YEAR, SITE_EMAIL, SITE_LINKEDIN_URL, SITE_NAME, SITE_ROLE } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <Container wide>
        <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-base text-ink">{SITE_NAME}</p>
            <p className="text-sm text-muted">{SITE_ROLE}</p>
          </div>

          <div className="flex items-center gap-5 text-sm text-muted">
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="flex items-center gap-2 transition-colors hover:text-ink"
            >
              <EmailIcon className="h-4 w-4" />
              {SITE_EMAIL}
            </a>
            <a
              href={SITE_LINKEDIN_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 transition-colors hover:text-ink"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <p className="text-xs text-muted">
            &copy; {CURRENT_YEAR} {SITE_NAME}
          </p>
        </div>
      </Container>
    </footer>
  );
}
