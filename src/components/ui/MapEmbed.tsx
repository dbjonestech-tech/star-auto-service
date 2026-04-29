"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

type MapEmbedProps = {
  src: string;
  title: string;
  /** Subline shown on the placeholder (typically the address). */
  address: string;
  /** Aspect-ratio + sizing classes applied to the outer box. */
  className?: string;
};

/** Click-to-load Google Maps iframe. Renders a styled placeholder until activated, eliminating ~250-350KB of map JS on initial paint. */
export function MapEmbed({ src, title, address, className = "" }: MapEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative bg-paper border border-line ${className}`}>
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
        <button
          type="button"
          onClick={() => setLoaded(true)}
          aria-label={`${title}. Activate to load interactive map.`}
          className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-paper hover:bg-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-inset transition-colors group"
        >
          <div className="w-16 h-16 bg-royal-tint flex items-center justify-center group-hover:bg-royal group-hover:text-cream transition-colors">
            <MapPin className="text-royal group-hover:text-cream transition-colors" size={28} strokeWidth={2} aria-hidden="true" />
          </div>
          <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-graphite text-center px-6">
            {address}
          </p>
          <span className="text-xs uppercase tracking-[0.16em] font-extrabold text-royal group-hover:text-royal-deep border-b-2 border-royal pb-1">
            Show interactive map
          </span>
        </button>
      )}
    </div>
  );
}
