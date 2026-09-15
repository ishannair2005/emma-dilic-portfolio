import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import type { PortfolioProject } from "@/data/types";

export function ProjectNav({
  previous,
  next,
}: {
  previous?: PortfolioProject;
  next?: PortfolioProject;
}) {
  if (!previous && !next) return null;

  return (
    <nav
      aria-label="More projects"
      className="grid grid-cols-1 border-t border-line sm:grid-cols-2"
    >
      <div className="border-b border-line sm:border-b-0 sm:border-r sm:border-line">
        {previous ? (
          <Link
            href={`/portfolio/${previous.slug}`}
            className="group flex h-full flex-col justify-center gap-2 py-10 pr-8 sm:items-start"
          >
            <span className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted">
              <ArrowLeftIcon className="h-3.5 w-3.5" />
              Previous
            </span>
            <span className="font-serif text-xl text-ink transition-colors group-hover:text-accent sm:text-2xl">
              {previous.title}
            </span>
          </Link>
        ) : (
          <span aria-hidden="true" />
        )}
      </div>
      <div>
        {next ? (
          <Link
            href={`/portfolio/${next.slug}`}
            className="group flex h-full flex-col justify-center gap-2 py-10 pl-0 sm:items-end sm:pl-8 sm:text-right"
          >
            <span className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted">
              Next
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </span>
            <span className="font-serif text-xl text-ink transition-colors group-hover:text-accent sm:text-2xl">
              {next.title}
            </span>
          </Link>
        ) : (
          <span aria-hidden="true" />
        )}
      </div>
    </nav>
  );
}
