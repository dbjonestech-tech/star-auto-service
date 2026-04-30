import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Phone,
  AlertTriangle,
  Volume2,
  Wind,
  Activity,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import { SPANISH_ENABLED } from "@/lib/i18n";
import { generateBreadcrumbJsonLd } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionWatermark } from "@/components/ui/SectionWatermark";
import { CTASection } from "@/components/sections/CTASection";

const TITLE =
  "Verificador de síntomas | Diagnostica problemas comunes | The Star Auto Service";
const DESCRIPTION =
  "Lo que significa esa luz de advertencia, ese ruido raro, ese olor o esa vibración, en lenguaje claro. Desde un taller con certificación ASE en Richardson, TX, con 28 años reconociendo patrones.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE.url}/es/symptoms`,
    languages: {
      "en-US": `${SITE.url}/symptoms`,
      "es-US": `${SITE.url}/es/symptoms`,
      "x-default": `${SITE.url}/symptoms`,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/es/symptoms`,
    siteName: SITE.name,
    locale: "es_US",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

type SymptomGroup = {
  icon: LucideIcon;
  title: string;
  intro: string;
  items: Array<{
    name: string;
    likely: string;
    severity: "now" | "soon" | "watch";
    serviceHref: string;
    resourceHref?: string;
  }>;
};

const SEVERITY_LABEL_ES: Record<SymptomGroup["items"][number]["severity"], string> = {
  now: "Deja de manejar",
  soon: "Agenda esta semana",
  watch: "Revisar en la próxima visita",
};

const SEVERITY_TINT: Record<SymptomGroup["items"][number]["severity"], string> = {
  now: "bg-ruby/10 text-ruby border-ruby/30",
  soon: "bg-gold-tint text-gold-deep border-gold/40",
  watch: "bg-royal-tint text-royal border-royal/30",
};

const GROUPS_ES: SymptomGroup[] = [
  {
    icon: AlertTriangle,
    title: "Luces de advertencia del tablero",
    intro:
      "Si una luz parpadea, trátala como urgente. Fija significa agendar, no entrar en pánico.",
    items: [
      {
        name: "Luz de check engine, fija",
        likely:
          "Decenas de causas posibles. El código las acota; el diagnóstico real las confirma.",
        severity: "soon",
        serviceHref: "/es/services/engine-diagnostics",
        resourceHref: "/es/resources/check-engine-light-guide",
      },
      {
        name: "Luz de check engine, parpadeante",
        likely:
          "Falla activa que puede arruinar el convertidor catalítico en cuestión de minutos.",
        severity: "now",
        serviceHref: "/es/services/engine-diagnostics",
        resourceHref: "/es/resources/check-engine-light-guide",
      },
      {
        name: "Batería / sistema de carga",
        likely:
          "Alternador, batería o cableado. La mayoría de las baterías mueren por problemas de carga, no por edad.",
        severity: "soon",
        serviceHref: "/es/services/battery",
      },
      {
        name: "Luz de ABS / freno",
        likely:
          "Sensor del ABS, líquido de frenos bajo o pastillas gastadas activando un sensor.",
        severity: "soon",
        serviceHref: "/es/services/brakes",
      },
      {
        name: "Luz de presión de llantas (TPMS)",
        likely:
          "Falsa alarma de mañana fría, fuga lenta o un sensor con la batería muerta.",
        severity: "watch",
        serviceHref: "/es/services/tires",
      },
      {
        name: "Indicador de temperatura en rojo",
        likely:
          "Nivel de anticongelante, termostato, bomba de agua o radiador. Oríllate de inmediato.",
        severity: "now",
        serviceHref: "/es/services/cooling-system",
      },
      {
        name: "Luz de presión de aceite",
        likely:
          "Aceite bajo, sensor malo o falla de la bomba. Deja de manejar hasta tener una respuesta.",
        severity: "now",
        serviceHref: "/es/services/engine-repair",
      },
    ],
  },
  {
    icon: Volume2,
    title: "Ruidos que tu auto no debería hacer",
    intro:
      "La mayoría de los problemas se anuncian antes de fallar. Escucha y luego ven.",
    items: [
      {
        name: "Chillido al frenar",
        likely:
          "Pestaña indicadora de desgaste en la pastilla de freno. Agéndalo dentro del mes.",
        severity: "soon",
        serviceHref: "/es/services/brakes",
      },
      {
        name: "Rechinido o metal contra metal al frenar",
        likely:
          "Las pastillas se gastaron y están rayando el disco. Esta semana, no la próxima.",
        severity: "soon",
        serviceHref: "/es/services/brakes",
      },
      {
        name: "Cascabeleo o golpeteo del motor",
        likely:
          "Levantador, componente de tiempo, aceite bajo o pre-ignición. Diagnostícalo antes de manejar lejos.",
        severity: "soon",
        serviceHref: "/es/services/engine-repair",
      },
      {
        name: "Zumbido que cambia con la velocidad",
        likely:
          "Balero de rueda o diferencial. Vale la pena un diagnóstico con prueba de manejo.",
        severity: "soon",
        serviceHref: "/es/services/engine-diagnostics",
      },
      {
        name: "Chillido cuando se prende el A/C",
        likely: "Polea del compresor de A/C o banda serpentina.",
        severity: "soon",
        serviceHref: "/es/services/hvac",
      },
      {
        name: "Click-click-click al arrancar",
        likely: "Batería débil o solenoide del motor de arranque.",
        severity: "soon",
        serviceHref: "/es/services/battery",
      },
    ],
  },
  {
    icon: Wind,
    title: "Olores en cabina o bajo el cofre",
    intro: "Los olores casi siempre indican una fuga. La fuga es la pista fácil.",
    items: [
      {
        name: "Olor dulce, como jarabe",
        likely:
          "Fuga de anticongelante. Puede ser una manguera, el radiador o el calefactor.",
        severity: "soon",
        serviceHref: "/es/services/cooling-system",
      },
      {
        name: "Olor a hule quemado",
        likely:
          "Banda patinando, manguera tocando el escape o una polea trabada.",
        severity: "soon",
        serviceHref: "/es/services/engine-repair",
      },
      {
        name: "Olor a aceite caliente / acre después de manejar",
        likely:
          "Fuga de aceite cayendo en el escape. Encuentra la fuga antes de que crezca.",
        severity: "soon",
        serviceHref: "/es/services/engine-repair",
      },
      {
        name: "Olor fuerte a gasolina",
        likely:
          "Fuga de combustible, sello del inyector con fuga o falla del sistema EVAP.",
        severity: "now",
        serviceHref: "/es/services/fuel-injection",
      },
      {
        name: "Azufre (huevo podrido)",
        likely:
          "Convertidor catalítico o motor corriendo rico. La verificación de Texas no va a pasar.",
        severity: "soon",
        serviceHref: "/es/services/state-inspections",
      },
      {
        name: "Olor a eléctrico / plástico quemado",
        likely: "Cableado sobrecalentándose en algún lado. Deja de manejar.",
        severity: "now",
        serviceHref: "/es/services/electrical",
      },
    ],
  },
  {
    icon: Activity,
    title: "Cómo se siente el auto",
    intro:
      "Vibración, jala hacia un lado, pedal blando. La forma en que el auto maneja dice la verdad.",
    items: [
      {
        name: "Vibración en el volante a velocidad de freeway",
        likely: "Balanceo de llantas, alineación o un rin doblado.",
        severity: "soon",
        serviceHref: "/es/services/tires",
      },
      {
        name: "El auto jala hacia un lado",
        likely:
          "Alineación, presión de llantas o un caliper de freno atorado.",
        severity: "soon",
        serviceHref: "/es/services/tires",
      },
      {
        name: "Pedal de freno blando o se hunde",
        likely:
          "Aire en las líneas, fuga o cilindro maestro. No manejes.",
        severity: "now",
        serviceHref: "/es/services/brakes",
      },
      {
        name: "Pedal pulsa al frenar",
        likely: "Discos alabeados. A veces se rectifican, frecuentemente se reemplazan.",
        severity: "soon",
        serviceHref: "/es/services/brakes",
      },
      {
        name: "Titubeo al acelerar",
        likely:
          "Sistema de combustible, encendido o un sensor saliéndose de especificación.",
        severity: "soon",
        serviceHref: "/es/services/fuel-injection",
      },
      {
        name: "La dirección se siente pesada",
        likely:
          "Fuga de líquido de la dirección hidráulica o falla de la bomba.",
        severity: "soon",
        serviceHref: "/es/services/engine-repair",
      },
    ],
  },
  {
    icon: Zap,
    title: "Cómo se comporta el auto",
    intro:
      "Arranque, ralentí, paros del motor. La conducta del auto es información.",
    items: [
      {
        name: "Arranque lento por la mañana",
        likely:
          "Batería (más de 3 años en el calor de Texas es vida útil normal).",
        severity: "soon",
        serviceHref: "/es/services/battery",
      },
      {
        name: "No arranca, solo hace click",
        likely:
          "Batería muerta, solenoide del motor de arranque o cableado en las terminales de la batería.",
        severity: "now",
        serviceHref: "/es/services/electrical",
      },
      {
        name: "El motor se apaga en ralentí",
        likely:
          "Control de aire en ralentí, fuga de vacío, bomba de combustible o problema de combustible.",
        severity: "soon",
        serviceHref: "/es/services/engine-diagnostics",
      },
      {
        name: "Ralentí áspero",
        likely: "Falla de motor, fuga de vacío o bujías sucias.",
        severity: "soon",
        serviceHref: "/es/services/engine-diagnostics",
      },
      {
        name: "El rendimiento empeoró de pronto",
        likely:
          "Sensor de oxígeno, falla del sistema de combustible, llantas con baja presión o sensor de flujo de aire (MAF) sucio.",
        severity: "soon",
        serviceHref: "/es/services/fuel-injection",
      },
      {
        name: "El A/C sopla tibio",
        likely:
          "Fuga de refrigerante, compresor o condensador. El calor de Texas lo expone rápido.",
        severity: "soon",
        serviceHref: "/es/services/hvac",
      },
    ],
  },
];

export default function SymptomsPageEs() {
  if (!SPANISH_ENABLED) notFound();

  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: "Inicio", url: `${SITE.url}/es` },
    { name: "Síntomas", url: `${SITE.url}/es/symptoms` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <section className="relative bg-cream pt-20 md:pt-28 lg:pt-32 pb-14 md:pb-20 lg:pb-24 border-b border-line overflow-hidden">
        <SectionWatermark
          src="https://images.unsplash.com/photo-1597767108894-fccd5b7f9ca2?w=1800&q=60&auto=format&fit=crop"
          opacity={0.05}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Verificador de síntomas</Eyebrow>
                <h1 className="mt-5 font-sans font-black text-display-1 text-ink tracking-[-0.025em] leading-[0.98]">
                  ¿Qué te está
                  <br />
                  <span className="text-royal">diciendo tu auto?</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.08}>
                <p className="text-base sm:text-lg md:text-xl text-graphite leading-relaxed font-medium">
                  Luces de advertencia, ruidos raros, olores extraños, la forma en que el auto maneja. Identifica con qué estás lidiando y agenda el servicio correcto. Veintiocho años reconociendo patrones en Richardson, TX.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-10 md:py-12 border-b border-line-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 md:gap-5 text-[11px] uppercase tracking-[0.18em] font-bold">
            <p className="text-graphite">Severidad:</p>
            <span className="inline-flex items-center gap-2 bg-ruby/10 text-ruby border border-ruby/30 px-3 py-1.5">
              <span className="w-1.5 h-1.5 bg-ruby rounded-full" aria-hidden="true" />
              Deja de manejar
            </span>
            <span className="inline-flex items-center gap-2 bg-gold-tint text-gold-deep border border-gold/40 px-3 py-1.5">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" aria-hidden="true" />
              Agenda esta semana
            </span>
            <span className="inline-flex items-center gap-2 bg-royal-tint text-royal border border-royal/30 px-3 py-1.5">
              <span className="w-1.5 h-1.5 bg-royal rounded-full" aria-hidden="true" />
              Revisar en la próxima visita
            </span>
          </div>
        </div>
      </section>

      {GROUPS_ES.map((group, gi) => {
        const Icon = group.icon;
        return (
          <section
            key={group.title}
            className={`${gi % 2 === 0 ? "bg-cream" : "bg-paper"} py-16 md:py-24 lg:py-28 border-b border-line-subtle`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 mb-10 md:mb-14">
                <div className="lg:col-span-5">
                  <Reveal>
                    <div className="inline-flex items-center gap-3 mb-5">
                      <span className="w-12 h-12 bg-royal-tint flex items-center justify-center">
                        <Icon
                          size={22}
                          strokeWidth={2}
                          className="text-royal"
                          aria-hidden="true"
                        />
                      </span>
                      <Eyebrow>Grupo {String(gi + 1).padStart(2, "0")}</Eyebrow>
                    </div>
                    <h2 className="font-sans font-black text-display-2 text-ink tracking-[-0.022em] leading-[1.04]">
                      {group.title}.
                    </h2>
                  </Reveal>
                </div>
                <div className="lg:col-span-6 lg:col-start-7 flex lg:items-end">
                  <Reveal delay={0.08}>
                    <p className="text-base md:text-lg text-graphite leading-relaxed font-medium">
                      {group.intro}
                    </p>
                  </Reveal>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {group.items.map((s, i) => (
                  <Reveal key={s.name} delay={i * 0.04}>
                    <article className="relative bg-surface border border-line p-6 md:p-7 shadow-card hover:shadow-card-lg hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col">
                      <div
                        className="absolute top-0 left-6 right-6 h-0.5 bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                        aria-hidden="true"
                      />
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-sans font-black text-lg md:text-xl text-ink tracking-tight leading-snug">
                          {s.name}
                        </h3>
                        <span
                          className={`shrink-0 inline-flex items-center px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] font-extrabold border ${SEVERITY_TINT[s.severity]}`}
                        >
                          {SEVERITY_LABEL_ES[s.severity]}
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-graphite leading-relaxed font-medium flex-1">
                        {s.likely}
                      </p>
                      <div className="mt-5 pt-4 border-t border-line-subtle flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.16em] font-extrabold">
                        <Link
                          href={s.serviceHref}
                          className="inline-flex items-center gap-1.5 text-royal hover:text-royal-deep transition-colors"
                        >
                          Ver el servicio
                          <ArrowRight
                            size={12}
                            strokeWidth={2.5}
                            aria-hidden="true"
                          />
                        </Link>
                        {s.resourceHref ? (
                          <Link
                            href={s.resourceHref}
                            className="inline-flex items-center gap-1.5 text-graphite hover:text-ink transition-colors"
                          >
                            Lee la guía
                            <ArrowRight
                              size={12}
                              strokeWidth={2.5}
                              aria-hidden="true"
                            />
                          </Link>
                        ) : null}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-ink text-cream py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Eyebrow light>¿Sigues sin estar seguro?</Eyebrow>
            <h2 className="mt-5 font-sans font-black text-display-3 text-cream tracking-tight leading-tight">
              Cuéntanos qué estás escuchando.
            </h2>
            <p className="mt-6 text-base md:text-lg text-cream/85 leading-relaxed font-medium">
              Llama al taller. Describe qué está haciendo tu auto. Te decimos si es algo para venir manejando, traer en grúa o dejarlo pasar.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 bg-gold text-ink hover:bg-gold-soft px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all shadow-gold"
              >
                <Phone size={17} strokeWidth={2.5} aria-hidden="true" />
                Llama al {SITE.phone}
              </a>
              <Link
                href="/es/book"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-cream text-cream hover:bg-cream hover:text-ink px-7 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] transition-all"
              >
                Agendar servicio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection locale="es" />
    </>
  );
}
