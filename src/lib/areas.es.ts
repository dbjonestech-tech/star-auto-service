/**
 * Mexican-Spanish twin of areas.ts. Same slugs, same structure, same array
 * order so callers can pick by locale. Proper nouns stay English by design:
 *   - City + neighborhood names (Richardson, Plano, Lake Highlands, Heights)
 *   - Road and highway names (Belt Line, Plano Road, 75, 78, Bush Tollway)
 *   - Brand and certification names (NAPA Auto Care, ASE)
 *   - Vehicle make/model names (F-150, Suburban, Tahoe)
 *   - "The Star Auto Service" itself
 *
 * Register: plainspoken Mexican Spanish, "tú" form, no em dashes.
 */

import type { Area } from "./areas";

export const AREAS_ES: Area[] = [
  {
    slug: "richardson-tx",
    name: "Richardson",
    state: "TX",
    driveTime: "En Belt Line, en Richardson",
    distance: "Sede",
    positioning:
      "Donde vivimos, donde trabajamos, donde estamos desde 1998.",
    intro: [
      "The Star Auto Service ha estado sobre E Belt Line Road desde 1998, veintiocho años en la misma esquina. Richardson es la casa. El taller y la gente que está dentro son parte del vecindario.",
      "Atendemos a conductores de Richardson de Canyon Creek, Heights, J.J. Pearce, Berkner, Cottonwood Heights, Dover Park, Sherrill Park y de todo lo que está en medio. Autos viejos y nuevos, nacionales e importados, desde el primer carro de un adolescente hasta la Tahoe del retiro.",
    ],
    drivers:
      "Conductores que bajan diario por la 75, familias que se reparten entre las escuelas de Richardson ISD, jubilados que llevan trayendo el mismo Camry desde la presidencia de Bush, estudiantes de UTD, gente que se mudó de otro estado. Vemos de todo.",
    localDetail:
      "Estamos frente a Coin Laundry sobre E Belt Line, a unos minutos de Richardson Square, entre Plano Road y Jupiter. Fácil entrar, fácil salir, y los clientes sin cita siempre son bienvenidos.",
    topServices: [
      "Verificación estatal de Texas, seguridad y emisiones, sin cita",
      "Reparación de frenos. Las calles locales son suaves; las vueltas largas por el freeway no",
      "Cambios de aceite ajustados a cómo manejas en realidad, no a la calcomanía",
      "Servicio de A/C antes de agosto (agéndalo en marzo y te lo vas a agradecer)",
      "Inspecciones previas a la compra para autos usados de cualquier lote cercano",
    ],
    heroImage: "/assets/area-richardson.jpg",
    heroAlt: "Vecindario de Richardson, Texas, al atardecer dorado",
  },
  {
    slug: "garland-tx",
    name: "Garland",
    state: "TX",
    driveTime: "Cerca de 8 a 12 minutos",
    distance: "5 millas",
    positioning: "Un brinco corto al este por Belt Line, y vale el viaje.",
    intro: [
      "Los conductores de Garland llevan años haciendo el viaje corto por Belt Line. Es fácil llegar: Belt Line Road va derecha, sin saltar de freeway, sin dramas de toll-tag.",
      "Ya sea que vengas de Firewheel, Duck Creek, los vecindarios cerca de Lake Highlands o de la zona de Naaman Forest High School, el camino es corto y la diferencia en honestidad es la parte por la que sigues regresando.",
    ],
    drivers:
      "Familias de Garland de toda la vida, hogares con varios autos, camiones de flota de pequeños negocios locales y mucha gente que se quemó con cadenas en Northwest Highway.",
    localDetail:
      "A menos de 6 millas del centro de Garland por E Belt Line Road, en línea recta hacia el oeste.",
    topServices: [
      "Trabajo de frenos, los recorridos Garland al centro son de pare y siga",
      "Verificación estatal de Texas (los sábados estamos abiertos hasta las 4)",
      "Diagnóstico de motor, segundas opiniones a cotizaciones del concesionario",
      "Reparación de A/C, la necesidad texana de todo el año",
      "Servicio de transmisión para vehículos commuter con más millaje",
    ],
    heroImage: "/assets/area-garland.jpeg",
    heroAlt: "Vista aérea de Garland, Texas, al atardecer dorado",
  },
  {
    slug: "plano-tx",
    name: "Plano",
    state: "TX",
    driveTime: "Cerca de 10 a 15 minutos",
    distance: "6 millas",
    positioning:
      "Viaje corto al sur, gran diferencia en el precio.",
    intro: [
      "Los conductores de Plano vienen con nosotros cuando la cotización del concesionario suena a número sacado de un sombrero. Te damos la versión directa: lo que tu auto realmente necesita, lo que no necesita y cuál es el costo realista a precio de taller independiente.",
      "Desde West Plano, Legacy West, downtown Plano o por Bob Woodruff Park, el viaje al sur por Coit o por la 75 hasta Belt Line es rápido y el estacionamiento es más fácil que en donde sea que estabas antes.",
    ],
    drivers:
      "Los conductores de Plano suelen traernos importados de modelo reciente, Lexus, Acura, BMW, Mercedes, para una segunda opinión a la cotización del concesionario. Damos diagnóstico directo en marcas europeas y asiáticas por igual.",
    localDetail:
      "Como 6 millas al sur por Coit o 15 minutos por la 75 sur, más fácil que los lotes de servicio de los concesionarios de Plano.",
    topServices: [
      "Segundas opiniones sobre el trabajo que recomienda el concesionario",
      "Mantenimiento para importados de lujo de modelo reciente sin el sobreprecio del concesionario",
      "Reparación de frenos con refacciones de calidad OEM a precios independientes",
      "Diagnóstico de motor para códigos que el concesionario no pudo resolver",
      "Servicio de sistema de enfriamiento para las flotas de Lexus, BMW y Mercedes que vemos cada semana",
    ],
    heroImage: "/assets/area-plano.jpg",
    heroAlt:
      "Centro de Plano, Texas, con edificios de ladrillo",
  },
  {
    slug: "dallas-tx",
    name: "Dallas",
    state: "TX",
    driveTime: "Cerca de 15 a 25 minutos desde el norte de Dallas",
    distance: "10 a 14 millas",
    positioning:
      "Conductores del norte de Dallas, el viaje se paga solo.",
    intro: [
      "Los conductores del norte de Dallas, Lake Highlands, Lakewood, White Rock, M Streets, Vickery Park, hacen el viaje hacia acá porque vale la pena. La tarifa del taller es honesta, el trabajo queda bien la primera vez y nadie te quiere vender un filtro de cabina que reemplazaste hace seis meses.",
      "Toma la 75 al norte hasta Belt Line, voltea al este. Veinte minutos fuera de hora pico, menos un sábado por la mañana antes de que las filas en las estaciones de inspección se hagan largas.",
    ],
    drivers:
      "Familias de Lake Highlands y Lakewood, profesionistas del corredor de la 75 y un flujo constante de recomendaciones de boca en boca de amigos en Dallas que se cansaron de la rutina del concesionario.",
    localDetail:
      "Belt Line Road cruza el área metropolitana de oriente a poniente, fácil acceso desde cualquier punto de la 75 o el Dallas North Tollway.",
    topServices: [
      "Inspecciones previas a la compra para autos de los lotes de Park Cities y Lakewood",
      "Reemplazo de frenos y discos (la vuelta al centro acaba con los frenos)",
      "Reparación de A/C, el verano del norte de Dallas es brutal año tras año",
      "Diagnóstico de motor para fallas intermitentes",
      "Planes de mantenimiento basados en cómo manejas en realidad",
    ],
    heroImage: "/assets/area-dallas.webp",
    heroAlt:
      "Skyline del centro de Dallas, Texas",
  },
  {
    slug: "allen-tx",
    name: "Allen",
    state: "TX",
    driveTime: "Cerca de 20 minutos",
    distance: "12 millas",
    positioning:
      "Flotas familiares, servicio honesto, vale el viaje al norte.",
    intro: [
      "Las familias de Allen nos traen toda la flota, Suburban, Sequoia, F-150, además del primer auto del hijo, porque lo que cuesta 1,200 dólares en una cadena de los suburbios del norte cuesta menos aquí, y el diagnóstico es real.",
      "Toma la 75 al sur o Custer hasta Belt Line, luego al este. Como veinte minutos puerta a puerta. Vale la pena el viaje cuando tienes más de un auto que mantener andando.",
    ],
    drivers:
      "Hogares de Allen con varios autos, papás llevando hijos a los partidos de Allen ISD y gente que descubrió que “taller familiar en Richardson” sí significa algo distinto a las cadenas en plazas comerciales.",
    localDetail:
      "Veinte minutos al sur por la 75 o Custer Road, en línea recta hasta E Belt Line.",
    topServices: [
      "Mantenimiento de flota familiar (te llevamos el historial de cada auto)",
      "Inspecciones previas a la compra para primer auto o reemplazos",
      "Servicio de frenos para todo el hogar; el descuento por varios autos va en la mano de obra, no en las refacciones",
      "Verificación estatal de Texas, sin cita",
      "Reparación de motor sin el sobreprecio del concesionario",
    ],
    heroImage: "/assets/area-allen.jpg",
    heroAlt:
      "Tanque de agua de la ciudad de Allen, Texas, sobre los suburbios",
  },
  {
    slug: "murphy-tx",
    name: "Murphy",
    state: "TX",
    driveTime: "Cerca de 12 minutos",
    distance: "7 millas",
    positioning:
      "El taller del barrio, justo cruzando la línea.",
    intro: [
      "Murphy es chico y se nota; los vecinos nos recomiendan a los vecinos por encima de la cerca del jardín. Como un tercio de los autos en nuestros elevadores cualquier sábado entró porque alguien en Murphy le dijo a alguien más que nos llamara.",
      "Belt Line al oeste o McCreary al norte, doce minutos desde casi todo Murphy. Más fácil que pelear con los talleres grandes sobre la 190.",
    ],
    drivers:
      "Familias de Murphy, conductores que viajan diario a Plano y Richardson y jubilados que ya no quieren manejar a la rampa de servicio de un concesionario nunca más.",
    localDetail:
      "Diez minutos por Belt Line, más cerca de nosotros que de la mayoría de los talleres grandes del concesionario en Plano.",
    topServices: [
      "Planes de mantenimiento atados a tu manejo real (Murphy a Richardson a casa)",
      "Servicio de frenos y llantas",
      "Cambios de aceite que puedes esperar, sin cita",
      "Verificación estatal de Texas",
      "Servicio de A/C (agéndalo en marzo, antes del apuro)",
    ],
    heroImage: "/assets/area-murphy.jpeg",
    heroAlt:
      "Vecindario residencial de Murphy, Texas, al atardecer",
  },
  {
    slug: "wylie-tx",
    name: "Wylie",
    state: "TX",
    driveTime: "Cerca de 18 a 22 minutos",
    distance: "10 millas",
    positioning:
      "Una corrida rápida por la 78, y vale cada milla.",
    intro: [
      "Los conductores de Wylie bajan por la 78 hasta E Belt Line porque las cuentas salen. Veinte minutos puerta a puerta, diagnóstico honesto y una garantía nacional de NAPA Auto Care que viaja contigo. Esa es toda la propuesta, y ha funcionado para un flujo constante de familias de Wylie desde que la ciudad empezó a crecer.",
      "Vivas cerca de downtown Wylie, por Lake Lavon, en Birmingham Farms o en cualquier punto del corredor de la 78, el viaje a Richardson es en línea recta. Más fácil que pelear con los precios de las cadenas de Wylie o subir hasta un concesionario en Plano.",
    ],
    drivers:
      "Familias de Wylie con hogares de varios autos, conductores que viajan diario a Richardson y a Plano, residentes de una ciudad en crecimiento que se cansaron del servicio genérico de cadena, y muchas recomendaciones de boca en boca de vecinos que ya confían en nosotros.",
    localDetail:
      "Diez millas por la 78 oeste, después al sur por Plano Road hasta Belt Line. Veinte minutos fuera de hora pico, más fácil que pelear con la rampa de servicio del concesionario.",
    topServices: [
      "Servicio de frenos para los recorridos de Wylie a Richardson y de Wylie a Plano",
      "Verificación estatal de Texas, sin cita",
      "Servicio de A/C antes de agosto (agéndalo en marzo)",
      "Diagnóstico de motor, segundas opiniones a cotizaciones del concesionario",
      "Inspecciones previas a la compra para autos usados de lotes en la zona de Wylie",
    ],
    heroImage: "/assets/area-wylie.jpeg",
    heroAlt:
      "Multitud junto a autos clásicos en un día soleado en el centro histórico de Wylie, Texas, durante una exhibición comunitaria de autos",
  },
  {
    slug: "sachse-tx",
    name: "Sachse",
    state: "TX",
    driveTime: "Cerca de 12 a 15 minutos",
    distance: "7 millas",
    positioning:
      "Justo cruzando la línea, el taller que querrías que un vecino te recomendara.",
    intro: [
      "Los conductores de Sachse nos encuentran por los vecinos y por ese tipo de recomendación de boca en boca que no se da si un taller no se la ha ganado. Doce minutos por el President George Bush Tollway y Belt Line, y la diferencia en honestidad es la parte por la que sigues regresando.",
      "Atendemos a familias de Sachse de Heritage Park, Bunker Hill y los vecindarios al este de Murphy Road. Trabajo de frenos el mismo día, cambios de aceite sin cita y verificación estatal de Texas sin esperar cuando otros talleres tienen la agenda llena por dos semanas.",
    ],
    drivers:
      "Familias de Sachse con varios autos, conductores que viajan diario a Plano y Richardson por el Bush Tollway, jubilados que no quieren una rampa de servicio del concesionario nunca más, y gente que oyó de nosotros por un vecino sobre la cerca.",
    localDetail:
      "Siete millas por el Bush Tollway al sur hasta Plano Road, después al oeste por Belt Line. Como quince minutos de manejo aun en un día laboral con tráfico.",
    topServices: [
      "Verificación estatal de Texas, seguridad y emisiones, sin cita",
      "Reparación de frenos para conductores del Bush Tollway",
      "Servicio de A/C para el verano texano",
      "Cambios de aceite que puedes esperar",
      "Inspecciones previas a la compra para autos usados de lotes en la zona de Sachse",
    ],
    heroImage: "/assets/area-sachse.jpeg",
    heroAlt:
      "Edificio cívico de la alcaldía de Sachse, Texas, recubierto de piedra, con las banderas de Estados Unidos, Texas y la ciudad al frente",
  },
  {
    slug: "lake-highlands-dallas",
    name: "Lake Highlands",
    state: "TX",
    driveTime: "Cerca de 15 a 18 minutos",
    distance: "9 millas",
    positioning:
      "El taller que los conductores del norte de Dallas suben a buscar.",
    intro: [
      "Los conductores de Lake Highlands suben por Audelia o Skillman, voltean al este en Belt Line y encuentran un taller que los trata como las cadenas allá abajo en Forest nunca terminaron de hacerlo. Técnicos certificados ASE, garantía de NAPA Auto Care y ese tipo de constancia familiar que antes podías encontrar en el mismo Lake Highlands.",
      "Atendemos un flujo constante de familias de Lake Highlands, profesionistas del corredor de la 75 y recomendaciones de boca en boca de conductores de la zona de White Rock que se cansaron de pagar precios de concesionario por el mismo trabajo que hacemos a precios independientes.",
    ],
    drivers:
      "Familias de Lake Highlands y White Rock, profesionistas que viajan diario a M-Streets y al centro, hogares con varios autos que quieren un solo taller de confianza para todos, y muchos clientes a los que llevamos años atendiendo gracias a recomendaciones discretas.",
    localDetail:
      "Nueve millas por Audelia al norte hasta Belt Line, luego al este. Como quince minutos fuera de hora pico, menos un sábado por la mañana cuando las filas de la estación de inspección por allá arriba todavía están cortas.",
    topServices: [
      "Inspecciones previas a la compra para autos de lotes de Park Cities y Lakewood",
      "Reemplazo de frenos y discos (la vuelta al centro de Dallas acaba con los frenos)",
      "Reparación de A/C, la necesidad texana de todo el año",
      "Diagnóstico de motor para fallas intermitentes",
      "Mantenimiento para importados de modelo reciente sin el sobreprecio del concesionario",
    ],
    heroImage: "/assets/area-lake-highlands.webp",
    heroAlt:
      "Vista aérea de White Rock Lake con el skyline del centro de Dallas detrás. El vecindario de Lake Highlands que atendemos en el norte de Dallas",
  },
];

export const AREA_SLUGS_ES = AREAS_ES.map((a) => a.slug);
