"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type MediaImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Decorative/generated placeholder graphics are served as plain <img>,
   * since Next's image optimizer does not process local SVGs by default. */
  isPlaceholder?: boolean;
};

/**
 * Fills its parent (which should set position: relative and an aspect
 * ratio or fixed height). Applies a single, understated opacity fade once
 * the image has loaded — no parallax, no motion library.
 */
export function MediaImage({
  src,
  alt,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className,
  isPlaceholder = false,
}: MediaImageProps) {
  const [loaded, setLoaded] = useState(false);

  if (isPlaceholder) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover transition-opacity duration-700 ease-out",
        loaded ? "opacity-100" : "opacity-0",
        className,
      )}
    />
  );
}
