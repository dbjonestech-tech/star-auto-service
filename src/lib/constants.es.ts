/**
 * Mexican-Spanish twins of the SERVICES + SITE-text constants. Same shape
 * and order as the English source so callers can pick by locale.
 *
 * What stays English (by design):
 *   - SITE structural data (address, phone, email, hours, rating, URL)
 *   - "The Star Auto Service" itself
 *   - Service slugs / IDs (URLs match across locales)
 *   - Lucide icon names
 *   - "NAPA Auto Care", "ASE", "OEM" certifications/brand names
 *   - "TPMS" and other widely-recognized acronyms
 *   - Customer testimonial quotes (real Google reviews)
 */

import type { Service, Testimonial } from "./constants";
import type { Locale } from "./i18n";
import { SERVICES, TESTIMONIALS, SITE } from "./constants";

export const SITE_TAGLINE_ES = "Reparación automotriz experta con integridad";

export const SITE_DESCRIPTION_ES =
  "Taller familiar de reparación automotriz con certificación ASE, atendiendo Richardson, TX desde 1998. Evaluaciones honestas, reparaciones de calidad, servicio bilingüe.";

export const SERVICES_ES: Service[] = [
  {
    id: "brakes",
    title: "Frenos",
    icon: "Disc",
    description:
      "Inspección, reparación y reemplazo completo del sistema de frenos. Pastillas, discos, calipers y servicio de líquido de frenos.",
    features: [
      "Reemplazo de pastillas de freno",
      "Rectificado y reemplazo de discos",
      "Cambio de líquido de frenos",
      "Servicio de calipers",
      "Diagnóstico de ABS",
    ],
  },
  {
    id: "oil-change",
    title: "Cambio de aceite y lubricación",
    icon: "Droplets",
    description:
      "Mantén tu motor andando suave con cambios de aceite regulares, filtros de calidad y el aceite correcto para tu vehículo.",
    features: [
      "Cambio de aceite convencional",
      "Cambio de aceite semisintético",
      "Cambio de aceite full sintético",
      "Reemplazo de filtro",
      "Relleno de fluidos",
    ],
  },
  {
    id: "engine-diagnostics",
    title: "Diagnóstico de motor",
    icon: "ScanLine",
    description:
      "Diagnóstico avanzado por computadora para identificar luces de check engine, problemas de desempeño y fallas eléctricas.",
    features: [
      "Diagnóstico de la luz check engine",
      "Escaneo de códigos por computadora",
      "Solución de problemas de desempeño",
      "Pruebas de sensores",
      "Diagnóstico de emisiones",
    ],
  },
  {
    id: "engine-repair",
    title: "Reparación y reemplazo de motor",
    icon: "Cog",
    description:
      "Desde reparaciones menores hasta el reemplazo completo del motor, nuestros técnicos certificados ASE se encargan de todo.",
    features: [
      "Reconstrucción de motor",
      "Reemplazo de motor",
      "Banda o cadena de tiempo",
      "Reparación de junta de cabeza",
      "Reemplazo de soportes de motor",
    ],
  },
  {
    id: "transmission",
    title: "Servicio de transmisión",
    icon: "Settings",
    description:
      "Cuidado completo de la transmisión, incluyendo cambios de fluido, reparaciones y reconstrucciones para automáticas y estándar.",
    features: [
      "Cambio de fluido de transmisión",
      "Reparación de transmisión",
      "Reemplazo de clutch",
      "Servicio de convertidor de torque",
      "Reconstrucción de transmisión",
    ],
  },
  {
    id: "electrical",
    title: "Sistemas eléctricos",
    icon: "Zap",
    description:
      "Diagnóstico y reparación de todos los sistemas eléctricos del vehículo, incluyendo marchas, alternadores e instalación.",
    features: [
      "Prueba y reemplazo de batería",
      "Reparación de alternador",
      "Reemplazo de marcha",
      "Reparación de instalación",
      "Diagnóstico eléctrico",
    ],
  },
  {
    id: "hvac",
    title: "Aire acondicionado y calefacción",
    icon: "Thermometer",
    description:
      "Mantente cómodo todo el año con servicio completo de calefacción y aire acondicionado.",
    features: [
      "Recarga de A/C",
      "Reemplazo de compresor",
      "Reparación del calefactor",
      "Detección de fugas de refrigerante",
      "Diagnóstico de control de clima",
    ],
  },
  {
    id: "tires",
    title: "Servicio de llantas",
    icon: "Circle",
    description:
      "Rotación, balanceo, reparación y reemplazo de llantas para que viajes seguro.",
    features: [
      "Rotación de llantas",
      "Balanceo de rines",
      "Reparación de llanta ponchada",
      "Reemplazo de llantas",
      "Servicio de TPMS",
    ],
  },
  {
    id: "state-inspections",
    title: "Verificación estatal",
    icon: "ClipboardCheck",
    description:
      "Verificación estatal de Texas y prueba de emisiones, rápidas y sin complicaciones.",
    features: [
      "Inspección anual de seguridad",
      "Prueba de emisiones",
      "Diagnóstico de inspección no aprobada",
      "Reparaciones para cumplir con la verificación",
    ],
  },
  {
    id: "cooling-system",
    title: "Sistema de enfriamiento",
    icon: "Fan",
    description:
      "Servicio de radiador, cambio de anticongelante, reemplazo de termostato y reparación del sistema de enfriamiento.",
    features: [
      "Cambio de anticongelante",
      "Reparación de radiador",
      "Reemplazo de termostato",
      "Servicio de bomba de agua",
      "Reemplazo de mangueras",
    ],
  },
  {
    id: "fuel-injection",
    title: "Inyección de combustible",
    icon: "Fuel",
    description:
      "Limpieza y servicio de inyectores para recuperar desempeño y rendimiento de combustible.",
    features: [
      "Limpieza de inyectores",
      "Reemplazo de filtro de combustible",
      "Servicio de bomba de combustible",
      "Limpieza del cuerpo de aceleración",
    ],
  },
  {
    id: "battery",
    title: "Servicio de batería",
    icon: "BatteryFull",
    description:
      "Pruebas completas de batería, diagnóstico del sistema de carga y reemplazo de batería.",
    features: [
      "Prueba de carga de batería",
      "Reemplazo de batería",
      "Revisión del sistema de carga",
      "Limpieza de terminales",
      "Reemplazo de cables",
    ],
  },
];

/**
 * Customer testimonials are real Google reviews and stay English by design.
 * Re-exported so callers can use one shape regardless of locale.
 */
export const TESTIMONIALS_ES: Testimonial[] = TESTIMONIALS;

export function getServices(locale: Locale): Service[] {
  return locale === "es" ? SERVICES_ES : SERVICES;
}

export function getService(id: string, locale: Locale): Service | undefined {
  return getServices(locale).find((s) => s.id === id);
}

export function getTestimonials(locale: Locale): Testimonial[] {
  return locale === "es" ? TESTIMONIALS_ES : TESTIMONIALS;
}

export function getSiteTagline(locale: Locale): string {
  return locale === "es" ? SITE_TAGLINE_ES : SITE.tagline;
}

export function getSiteDescription(locale: Locale): string {
  return locale === "es" ? SITE_DESCRIPTION_ES : SITE.description;
}
