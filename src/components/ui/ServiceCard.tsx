import Link from "next/link";
import * as LucideIcons from "lucide-react";
import type { Service } from "@/lib/constants";

type ServiceCardProps = {
  service: Service;
  showLink?: boolean;
};

/** Card displaying a service with icon, title, and description. */
export function ServiceCard({ service, showLink = true }: ServiceCardProps) {
  const IconComponent =
    (LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string; size?: number }>) ||
    LucideIcons.Wrench;

  return (
    <div className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-border-light">
      <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center mb-4">
        <IconComponent className="text-accent" size={24} />
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        {service.description}
      </p>
      {showLink && (
        <Link
          href={`/services#${service.id}`}
          className="text-accent font-medium text-sm hover:text-accent-hover transition-colors inline-flex items-center gap-1"
        >
          {service.title} details
          <LucideIcons.ArrowRight size={14} />
        </Link>
      )}
    </div>
  );
}
