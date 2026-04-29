"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

type MapEmbedProps = {
  src: string;
  title: string;
  /** Subline shown on the placeholder (typically the address). */
  address: string;
  /** Aspect-ratio + sizing classes applied to the outer box. */
  className?: string;
};

/** Google Maps iframe with an IntersectionObserver-triggered auto-load. Renders a styled placeholder until the user scrolls near it (200px rootMargin), then mounts the real iframe. Saves the ~250-350KB initial-load cost without requiring an explicit click. */
export function MapEmbed({ src, title, address, className = "" }: MapEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || loaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setLoaded(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [loaded]);

  return (
    <div ref={ref} className={`relative bg-paper border border-line ${className}`}>
      {loaded ? (
        <iframe
          src={src}
          title={title}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block w-full h-full"
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-paper"
          aria-label={`${title}. Loading map…`}
        >
          <div className="w-16 h-16 bg-royal-tint flex items-center justify-center">
            <MapPin
              className="text-royal motion-safe:animate-pulse"
              size={28}
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>
          <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite text-center px-6">
            {address}
          </p>
          <p className="text-xs uppercase tracking-[0.16em] font-bold text-royal/80">
            Loading map…
          </p>
        </div>
      )}
    </div>
  );
}
