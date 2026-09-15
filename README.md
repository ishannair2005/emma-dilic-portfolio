# Emma Dilic — Cartography & Geospatial Portfolio

The personal portfolio website of Emma Dilic, a cartographer and geospatial
analyst. The site showcases her map and GIS work, academic research, resume,
and background, with a minimal, editorial design that keeps the maps as the
visual focus.

Live structure: **Local project → Git → GitHub → Vercel → Custom domain.**

## Tech Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-based theme, no `tailwind.config.js`)
- `next/image` for optimized, responsive images
- `next/font` (Newsreader + Inter) for typography
- Plain data files for content (no CMS) — see [Content Architecture](#content-architecture)
- Deploys to [Vercel](https://vercel.com)

No animation library, icon library, or CSS framework beyond Tailwind is used
— interactions are small CSS transitions only, and icons are hand-rolled
inline SVGs in `src/components/icons.tsx`.

## Getting Started

Requires Node.js 20+ (developed on Node 22).

```bash
npm install       # install dependencies
npm run dev       # start the local dev server at http://localhost:3000
npm run lint      # run ESLint
npm run build     # create a production build (also type-checks)
npm run start     # serve the production build locally, after `build`
```

## Project Structure

```
src/
  app/                        # Next.js App Router routes
    layout.tsx                # Root layout: fonts, global <head> metadata, header/footer
    page.tsx                  # Homepage — hero intro + portfolio gallery
    portfolio/[slug]/page.tsx # Reusable project detail page template
    research/page.tsx         # Research page
    resume/page.tsx           # Resume page (HTML, not a PDF embed)
    about/page.tsx            # About page
    sitemap.ts, robots.ts     # SEO plumbing
    not-found.tsx             # 404 page
    globals.css               # Design tokens (colors, fonts) + base styles
  components/                 # Shared, reusable UI components
  data/                       # All site content — see below
  lib/                        # Small shared utilities

public/
  images/
    portfolio/<project-slug>/ # Images for each portfolio project
    about/                    # Headshot (placeholder until replaced)
    placeholders/             # Generated placeholder graphics
  resume/                     # The downloadable resume PDF
```

## Content Architecture

All written content lives in `src/data/`, separate from the page components,
so new work can be added without touching any layout code.

| File | Powers |
|---|---|
| `src/data/site.ts` | Name, role, contact info, nav links — site-wide constants |
| `src/data/projects.ts` | Every portfolio project (homepage gallery + `/portfolio/[slug]` pages) |
| `src/data/research.ts` | Every entry on the Research page |
| `src/data/resume.ts` | Structured resume content rendered on the Resume page |
| `src/data/types.ts` | Shared TypeScript types for the above |

### Adding a new portfolio project

1. Add the project's images under `public/images/portfolio/<a-new-slug>/`.
2. Note each image's real pixel width and height (e.g. `sips -g pixelWidth -g pixelHeight file.jpg` on macOS, or check
   the file's properties). This is what lets maps render uncropped at their
   true aspect ratio on the project page.
3. In `src/data/projects.ts`, add a new object to the `PROJECTS` array with a
   unique `slug`, the image paths + dimensions, and an `order` (controls
   position in the homepage grid, lowest first).
4. That's it — the homepage grid, the `/portfolio/<slug>` page, its metadata,
   its entry in `sitemap.ts`, and its Previous/Next navigation are all
   generated automatically from that one entry.

A project with no real photography yet can point its images at
`/images/placeholders/map-placeholder.svg` and set `isPlaceholder: true` —
see the existing "Historical Map of Botetourt County" entry for reference.

### Adding a new research entry

Add an object to the `RESEARCH_ENTRIES` array in `src/data/research.ts` with
a unique `slug` and an `order`. Set `relatedProjectSlug` if the research also
has a corresponding portfolio project, and it'll show a "View the related
portfolio project" link automatically.

### Where images go

- Portfolio project images: `public/images/portfolio/<project-slug>/`
- About page headshot: `public/images/about/headshot.jpg` (replace the
  placeholder at `public/images/about/headshot-placeholder.svg` and update
  the `src` in `src/app/about/page.tsx`)
- Generated/placeholder graphics: `public/images/placeholders/`

Prefer well-compressed but high-resolution source images (long edge
2000–3600px is typical for the maps already in this repo) — `next/image`
handles responsive resizing and format conversion (AVIF/WebP) automatically
at request time, so there's no need to manually export multiple sizes.
Avoid over-compressing scans/exports of maps to the point labels become
illegible.

### Where the resume PDF goes

The Resume page is a fully formatted HTML page (not a PDF embed), but it also
links to a downloadable PDF at:

```
public/resume/emma-dilic-resume.pdf
```

**Replace this file** with your actual exported resume PDF — a generated
placeholder (produced from the same content as the Resume page) ships in the
repo so the download link works out of the box. The filename and the link
target are both controlled by `RESUME_PDF_PATH` in `src/data/site.ts`.

### Known placeholders to replace

A few things were left as clearly-marked placeholders because the source
resume didn't include them:

- `SITE_LINKEDIN_URL` in `src/data/site.ts` — set to a real LinkedIn URL.
- `SITE_URL` in `src/data/site.ts` — set to the production domain once purchased.
- `public/images/about/headshot-placeholder.svg` — replace with a real photo.
- The three portfolio projects using `map-placeholder.svg` (Botetourt,
  Safe Routes to School, Pediatric Vaccine Uptake) — replace with real map
  images once available.
- `public/resume/emma-dilic-resume.pdf` — replace with the real exported PDF.
- A personal phone number was intentionally left out of the public site
  (spam/scraping risk on a public page). To add it back, set `SITE_PHONE` in
  `src/data/site.ts` and render it wherever needed.

## Git & Version Control Workflow

This repo is set up so you can keep developing with Claude Code (or any
editor) locally and ship through GitHub + Vercel:

```
Local project  →  git commit  →  git push (GitHub)  →  Vercel auto-deploy
```

- `.gitignore` excludes `node_modules`, `.next`, build output, `.env*`,
  `.vercel`, and OS/editor cruft — no secrets, dependencies, or build
  artifacts should ever be committed.
- Make focused commits per logical change (a new project, a design tweak, a
  content update) rather than one giant commit — this keeps history useful
  and makes it easy to revert a single change if needed.
- Typical loop for a future change:
  ```bash
  npm run dev              # verify the change locally
  npm run lint && npm run build   # confirm it's clean before committing
  git add <files>
  git commit -m "Describe the change"
  git push
  ```
  Once the repo is connected to Vercel (see below), pushing to the
  production branch (`main`) triggers an automatic deployment — no manual
  rebuild step is needed.

### Connecting to GitHub (first time)

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploying to Vercel

1. Push this repository to GitHub (see above).
2. In the [Vercel dashboard](https://vercel.com/new), import the GitHub
   repository. Vercel auto-detects Next.js — no configuration is required.
3. Every push to the `main` branch triggers a new production deployment.
   Every other branch and pull request automatically gets its own **preview
   deployment** with a unique URL, so changes can be reviewed before merging.
4. If environment variables are ever needed (none are required today), set
   them in the Vercel project's **Settings → Environment Variables** —
   never hard-code secrets into the repository.

## Custom Domain (Network Solutions → Vercel)

The intended final architecture keeps each concern in its own place, so
nothing is locked into a single vendor:

- **Network Solutions** — domain registrar and DNS
- **GitHub** — source code and version history
- **Vercel** — hosting, builds, previews, and production deployment

To point a domain purchased through Network Solutions at this Vercel
project:

1. In the Vercel project, go to **Settings → Domains** and add the domain
   (e.g. `emmadilic.com`).
2. Vercel will show the DNS records it needs — typically either:
   - An **A record** for the root domain (`@`) pointing to Vercel's IP, plus
     a **CNAME** for `www` pointing to `cname.vercel-dns.com`, or
   - If using Vercel as the domain's nameservers, Vercel will provide
     nameserver values instead.
3. Log into Network Solutions' DNS management for the domain and add/update
   those records (or nameservers) as shown by Vercel.
4. DNS changes can take anywhere from a few minutes to 24–48 hours to
   propagate. Vercel will show the domain as "Valid" once it detects the
   correct records, and will automatically provision an SSL certificate.
5. Once verified, update `SITE_URL` in `src/data/site.ts` to the final
   domain and redeploy, so metadata, Open Graph tags, and the sitemap point
   to the correct URL.

No code changes are required to switch domains later — everything reads
from `SITE_URL` in one place.
