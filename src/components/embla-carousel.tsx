"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function EmblaCarousel({
  children,
  options,
  className = "",
  hideArrows = false,
  autoplay = false,
  autoplayInterval = 2500,
  pauseOnHover = true,
  hideDots = false,
}: {
  children: React.ReactNode[] | React.ReactNode;
  options?: EmblaOptionsType;
  className?: string;
  hideArrows?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  pauseOnHover?: boolean;
  hideDots?: boolean;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true, skipSnaps: false, containScroll: "trimSnaps", ...options });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const autoplayRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
  const isPausedRef = React.useRef(false);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Autoplay logic
  React.useEffect(() => {
    if (!emblaApi || !autoplay) return;

    const start = () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        if (!isPausedRef.current) emblaApi.scrollNext();
      }, Math.max(autoplayInterval, 1200));
    };

    const stop = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    start();
    return () => stop();
  }, [emblaApi, autoplay, autoplayInterval]);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={pauseOnHover ? () => (isPausedRef.current = true) : undefined}
      onMouseLeave={pauseOnHover ? () => (isPausedRef.current = false) : undefined}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex pl-4">
          {React.Children.map(children, (child) => (
            // Prevent shrinking so slides keep intended width; 85% on small, 420px on md, 25% on lg
            <div className="shrink-0 pr-4 basis-[85%] md:basis-[420px] lg:basis-1/4">{child}</div>
          ))}
        </div>
      </div>

      {/* Edge masks to hide any thin slivers at boundaries */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-background to-transparent" />

      {/* Arrows */}
      {!hideArrows && (
        <>
          <button
            aria-label="Previous"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center size-9 rounded-full border border-border/60 bg-card/80 backdrop-blur hover:text-accent"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center size-9 rounded-full border border-border/60 bg-card/80 backdrop-blur hover:text-accent"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {/* Dots */}
      {!hideDots && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === selectedIndex ? "w-6 bg-accent" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

