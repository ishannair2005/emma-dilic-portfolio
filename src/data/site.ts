// Central place for site-wide facts. Edit here to update the name, role,
// contact details, and navigation across the whole site.

export const SITE_NAME = "Emma Dilic";
export const SITE_ROLE = "Cartographer & Geospatial Analyst";

// A short, resume-supported credential line used in the homepage hero and
// metadata. Keep this factual and update it as new work is added.
export const SITE_CREDENTIAL = "National Geographic Cartography Intern";

export const SITE_LOCATION = "Fairfax, Virginia";

export const SITE_EMAIL = "emmadilic@vt.edu";

// TODO(placeholder): the source resume does not include a LinkedIn URL.
// Replace with the real profile URL. Left as an obvious non-resolving
// placeholder so it's easy to find and swap out.
export const SITE_LINKEDIN_URL = "https://www.linkedin.com/in/REPLACE-WITH-EMMA-DILIC-LINKEDIN";

// The resume lists a personal phone number. Public portfolio sites
// generally omit direct phone numbers to avoid spam/scraping, so it is
// intentionally left out of the rendered UI. Set this and wire it into
// the Resume/About contact blocks if you'd like it public.
export const SITE_PHONE: string | undefined = undefined;

export const SITE_URL = "https://www.example.com"; // TODO(placeholder): set to the production domain once purchased.

export const RESUME_PDF_PATH = "/resume/emma-dilic-resume.pdf";

export const NAV_LINKS = [
  { label: "Portfolio", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Resume", href: "/resume" },
  { label: "About", href: "/about" },
] as const;

export const CURRENT_YEAR = new Date().getFullYear();
