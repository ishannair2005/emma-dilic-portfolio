import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">404</p>
      <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block border border-ink px-5 py-3 text-sm uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-paper"
      >
        Back to Portfolio
      </Link>
    </Container>
  );
}
