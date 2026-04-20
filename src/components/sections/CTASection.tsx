import { Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

/** Call-to-action section with phone and directions links. */
export function CTASection() {
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.address.full)}`;

  return (
    <section className="bg-accent py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ready to Get Your Car Fixed?
        </h2>
        <p className="mt-4 text-lg text-white/90">
          Call us today or stop by the shop. Walk-ins welcome.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="secondary" size="lg" href={`tel:${SITE.phoneRaw}`}>
            <Phone size={20} className="mr-2" />
            Call {SITE.phone}
          </Button>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold hover:underline"
          >
            <MapPin size={18} />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
