"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { EmailIcon, LinkedInIcon, MenuIcon, CloseIcon } from "@/components/icons";
import { NAV_LINKS, SITE_EMAIL, SITE_LINKEDIN_URL, SITE_NAME } from "@/data/site";
import { cn } from "@/lib/utils";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "group relative py-1 text-[13px] uppercase tracking-[0.14em] transition-colors",
        isActive ? "text-ink" : "text-muted hover:text-ink",
      )}
    >
      {label}
      <span
        className={cn(
          "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover:scale-x-100",
          isActive && "scale-x-100",
        )}
        aria-hidden="true"
      />
    </Link>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm">
      <Container wide>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link
            href="/"
            className="font-serif text-lg tracking-tight text-ink sm:text-xl"
          >
            {SITE_NAME}
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
            <span className="h-4 w-px bg-line" aria-hidden="true" />
            <a
              href={`mailto:${SITE_EMAIL}`}
              aria-label="Email"
              className="text-muted transition-colors hover:text-ink"
            >
              <EmailIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={SITE_LINKEDIN_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-ink"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" />
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex items-center justify-center p-2 text-ink md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-line bg-paper transition-[max-height,opacity] duration-300 ease-out md:hidden",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container>
          <nav
            className="flex flex-col gap-1 py-6"
            aria-label="Mobile"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 font-serif text-2xl text-ink"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center gap-6 border-t border-line pt-6">
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-muted"
              >
                <EmailIcon className="h-4 w-4" /> Email
              </a>
              <a
                href={SITE_LINKEDIN_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-muted"
              >
                <LinkedInIcon className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
