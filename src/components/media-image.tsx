"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  /**
   * Intrinsic pixel dimensions. When provided, the image renders at its
   * true aspect ratio, scaled to fill the container's width — no cropping.
   * Omit only when the parent supplies its own `position: relative` box
   * with a deliberately cropped aspect ratio (e.g. gallery thumbnails).
   */
  width?: number;
  height?: number;
};

/**
 * Tracks whether an <img> has finished loading, for a subtle fade-in.
 * Small/local/cached images can finish loading before React attaches the
 * onLoad listener during hydration, so this also checks `.complete` on
 * mount rather than relying on the load event alone.
 */
function useImageLoaded() {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return { ref, loaded, onLoad: () => setLoaded(true) };
}

/**
 * Renders a project/map image with a single, understated opacity fade once
 * loaded — no parallax, no motion library.
 *
 * Two modes:
 *  - Natural (width + height passed): scales to full container width at
 *    its true aspect ratio. Use this for maps that need to stay
 *    uncropped and inspectable.
 *  - Fill (no width/height): absolutely fills a parent with `position:
 *    relative` and a fixed aspect ratio, cropping via object-cover. Use
 *    this only for curated thumbnails (e.g. homepage gallery cards).
 */
export function MediaImage({
  src,
  alt,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className,
  isPlaceholder = false,
  width,
  height,
}: MediaImageProps) {
  const { ref, loaded, onLoad } = useImageLoaded();
  const natural = Boolean(width && height);

  const fadeClass = cn(
    "transition-opacity duration-700 ease-out",
    loaded ? "opacity-100" : "opacity-0",
  );

  if (isPlaceholder) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={onLoad}
        className={cn(
          fadeClass,
          natural ? "h-auto w-full" : "absolute inset-0 h-full w-full object-cover",
          className,
        )}
      />
    );
  }

  if (natural) {
    return (
      <Image
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        onLoad={onLoad}
        className={cn(fadeClass, "h-auto w-full", className)}
      />
    );
  }

  return (
    <Image
      ref={ref}
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onLoad={onLoad}
      className={cn(fadeClass, "object-cover", className)}
    />
  );
}
