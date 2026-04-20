import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Customer testimonials section with review cards. */
export function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reviews"
          heading="What Our Customers Say"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-surface rounded-xl p-6 shadow-sm border border-border-light"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-accent"
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="border-t border-border-light pt-4">
                <p className="font-semibold text-primary text-sm">
                  {testimonial.author}
                </p>
                <p className="text-text-muted text-xs">{testimonial.vehicle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
