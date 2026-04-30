/**
 * Mexican-Spanish twin of serviceContent.ts. Same slugs, same shape,
 * mirrors the English structure for /es/services/[slug] landing pages.
 *
 * Conventions:
 *   - Slugs stay English (URLs match across locales).
 *   - Brand and certification names stay English: NAPA Auto Care, ASE,
 *     OBD-II, R-134a, R-1234yf, OEM, TPMS, Dexron, Dexcool, HOAT, OAT,
 *     ATF+4, CVT, DSG, GDI, EPA.
 *   - Vehicle makes / models stay English: BMW, Mercedes-Benz, Audi,
 *     Volkswagen, Volvo, Lexus, Honda, Subaru, Toyota, Nissan, Kia.
 *   - Phone, prices, mile counts, year ranges stay numeric and identical.
 *   - "Texas state inspection" renders as "verificación estatal de Texas".
 *   - "tú" form, plainspoken Mexican Spanish, no em dashes.
 */

import type { ServiceContent } from "./serviceContent";

export const SERVICE_CONTENT_ES: Record<string, ServiceContent> = {
  brakes: {
    eyebrow: "Frenos",
    headline: "Reparación de frenos en Richardson, bien hecha.",
    subhead:
      "Pastillas, discos, calipers, líquido, ABS, servicio completo del sistema de frenos para todas las marcas y modelos comunes.",
    heroImage: "/assets/service-brakes.avif",
    heroAlt: "Acercamiento al servicio de disco y caliper de freno",
    priceCue: "La mayoría de los trabajos de frenos el mismo día, refacciones en stock",
    symptoms: [
      "Chillido, rechinido o raspado al frenar",
      "Pulsación o vibración a través del pedal a velocidad",
      "El pedal del freno se siente blando o se va al fondo",
      "El vehículo jala hacia un lado al frenar",
      "Luz de freno o de ABS encendida en el tablero",
      "Llevas más de 25,000 a 50,000 millas desde el último servicio de frenos",
    ],
    whyUs: [
      "Técnicos certificados ASE inspeccionan todo el sistema, no nomás el chillido",
      "Evaluaciones honestas, te decimos qué necesitan tus frenos y qué no",
      "Garantía nacional NAPA Auto Care: 24 meses / 24,000 millas, válida en más de 17,000 talleres",
      "La mayoría de las reparaciones el mismo día, refacciones de calidad original en stock",
    ],
    faqs: [
      {
        q: "¿Cuánto tarda un trabajo de frenos?",
        a: "La mayoría de los cambios de pastillas y discos toman de 1 a 2 horas una vez que el auto está en el elevador. Te damos un rango de tiempo por teléfono antes de que vengas.",
      },
      {
        q: "¿Necesito discos cada vez o nada más cambio las pastillas?",
        a: "Depende del estado de los discos. Si están dentro de especificación y no están alabeados, los rectificamos o los conservamos. No te empujamos discos que no necesitas, esa ha sido la regla desde 1998.",
      },
      {
        q: "¿Cuánto cuesta el servicio de frenos?",
        a: "El cambio de pastillas en un sedán típico va de 150 a 300 dólares por eje, mano de obra incluida. Los discos suman a esa cifra. Cotizamos por adelantado después de la inspección, sin sorpresas.",
      },
      {
        q: "¿Mis frenos están cubiertos por la garantía NAPA?",
        a: "Sí. Las refacciones y mano de obra que califican están cubiertas a nivel nacional por 24 meses / 24,000 millas en cualquiera de los más de 17,000 Centros NAPA Auto Care.",
      },
    ],
    featuredTestimonialIndex: 0,
  },

  "oil-change": {
    eyebrow: "Cambio de aceite y lubricación",
    headline: "Cambio de aceite en Richardson, en menos de una hora.",
    subhead:
      "Convencional, semisintético o full sintético. Usamos el aceite correcto y un filtro de calidad para tu vehículo en específico.",
    heroImage: "/assets/service-oil-change.avif",
    heroAlt: "Aceite de motor nuevo siendo vertido en el motor",
    priceCue: "Aceptamos clientes sin cita, la mayoría termina en menos de una hora",
    symptoms: [
      "La calcomanía del parabrisas dice que ya te toca (o ya te pasó)",
      "El monitor de vida del aceite marca 15% o menos",
      "El motor suena más fuerte o más áspero de lo normal",
      "Llevas de 5,000 a 10,000 millas desde el último cambio",
      "No te acuerdas cuándo fue la última vez que se hizo",
    ],
    whyUs: [
      "Usamos el grado y filtro correcto para tu vehículo, no lo que esté en oferta",
      "Rellenamos los fluidos críticos (anticongelante, parabrisas, frenos) sin costo extra",
      "Inspección visual de bandas, mangueras, llantas y frenos mientras estás en el elevador",
      "Recordatorio honesto si algo de verdad necesita atención, nunca un sobreventa",
    ],
    faqs: [
      {
        q: "¿Cada cuándo debo cambiar el aceite?",
        a: "Depende del aceite y del vehículo. Los sintéticos modernos suelen aguantar de 7,500 a 10,000 millas; los semisintéticos van más cerca de 3,000 a 5,000. Revisamos la recomendación del fabricante y el monitor de vida del aceite.",
      },
      {
        q: "¿Atienden autos europeos?",
        a: "Sí. Tenemos en stock las viscosidades y filtros adecuados para BMW, Mercedes-Benz, Audi, Volkswagen, Volvo y la mayoría de las marcas europeas.",
      },
      {
        q: "¿Sintético o convencional?",
        a: "Los motores nuevos (2010 en adelante) casi siempre piden sintético. Los motores más viejos o de alto millaje pueden andar bien con un semisintético. Ajustamos lo que es correcto para tu auto en específico.",
      },
      {
        q: "¿Puedo esperar o lo dejo?",
        a: "La mayoría de los cambios de aceite los puedes esperar. El café está listo. Si vemos algo más que necesite atención, te lo mostramos y te cotizamos antes de hacer trabajo extra.",
      },
    ],
    featuredTestimonialIndex: 4,
  },

  "engine-diagnostics": {
    eyebrow: "Diagnóstico de motor",
    headline: "Diagnóstico de motor en Richardson, leído correctamente.",
    subhead:
      "Diagnóstico avanzado por computadora OBD-II, herramientas de escaneo específicas del fabricante y 28 años de reconocer patrones.",
    heroImage: "/assets/service-engine-diagnostics.avif",
    heroAlt:
      "Técnico conectando una herramienta de escaneo OBD-II debajo del tablero durante el análisis de códigos del motor",
    priceCue: "El diagnóstico suele costar entre 100 y 150 dólares",
    symptoms: [
      "La luz de check engine está encendida (fija o parpadeando)",
      "Falla de motor, titubeo o ralentí áspero",
      "Pérdida de potencia, mal rendimiento de gasolina, arranques difíciles",
      "No pasaste la verificación estatal de Texas por emisiones",
      "Códigos repetidos que otros talleres no pudieron resolver",
    ],
    whyUs: [
      "Leemos códigos Y los interpretamos para tu vehículo en específico",
      "Herramientas de escaneo específicas del fabricante, no nada más lectores OBD-II genéricos",
      "No adivinamos, probamos. Datos de sensores, ajustes de combustible, análisis de freeze-frame",
      "La cuota de diagnóstico se descuenta de la reparación si haces el trabajo con nosotros",
    ],
    faqs: [
      {
        q: "¿La lectura gratis de códigos en una refaccionaria me dice qué tiene mi auto?",
        a: "Te dice un código, no un diagnóstico. Un código P0420, por ejemplo, puede ser un convertidor catalítico, un sensor de oxígeno, una fuga de escape o un problema de mezcla de combustible. El diagnóstico real descarta las soluciones baratas antes de recomendar las caras.",
      },
      {
        q: "¿Por qué cuesta dinero el diagnóstico?",
        a: "Un diagnóstico real toma tiempo, herramientas específicas del fabricante y décadas de experiencia. La cuota de diagnóstico se descuenta de la reparación si autorizas el trabajo, así que cuando lo encontramos, pagas una sola vez.",
      },
      {
        q: "Mi luz de check engine está parpadeando, ¿debo seguir manejando?",
        a: "No. Una luz parpadeante significa una falla activa de motor que puede dañar el convertidor catalítico. Oríllate, manda traer el auto en grúa y llámanos al (972) 231-2886.",
      },
      {
        q: "¿Pueden ayudarme si no pasé la verificación estatal de Texas?",
        a: "Sí. El diagnóstico de emisiones es una de nuestras especialidades. Trae el papel del rechazo, diagnosticamos, reparamos y te volvemos a hacer la prueba.",
      },
    ],
    featuredTestimonialIndex: 0,
  },

  "engine-repair": {
    eyebrow: "Reparación y reemplazo de motor",
    headline: "Reparación de motor en Richardson, desde bandas de tiempo hasta reconstrucciones completas.",
    subhead:
      "Trabajo de motor con certificación ASE: juntas de cabeza, cadenas de tiempo, soportes, reemplazos. Todas las marcas y modelos comunes, nacionales e importados.",
    heroImage: "/assets/service-engine-repair.avif",
    heroAlt: "Auto de alto rendimiento de modelo reciente bajo la iluminación del taller",
    priceCue: "Cotizaciones en menos de 24 horas después de la inspección",
    symptoms: [
      "Cascabeleo, golpeteo o ruido mecánico inusual del motor",
      "Fugas de anticongelante o aceite, humo azul o blanco del escape",
      "El motor se sobrecalienta a pesar de un sistema de enfriamiento sano",
      "La banda o cadena de tiempo está en el intervalo recomendado de reemplazo",
      "Una reparación mayor cotizada en el concesionario que quieres consultar con una segunda opinión",
    ],
    whyUs: [
      "Te damos la decisión honesta entre reconstruir o reemplazar con base en las cuentas a largo plazo",
      "Refacciones de calidad original y OEM en internos del motor, nunca de saldo",
      "Certificación ASE completa y décadas de experiencia combinada en motores",
      "Manejamos el papeleo de garantía en el trabajo de motor cubierto por NAPA",
    ],
    faqs: [
      {
        q: "¿Cómo sé si necesito reemplazo de motor o reparación?",
        a: "Depende de la falla, del millaje y del costo de la reparación contra el valor del auto. Cotizamos las dos opciones cuando ambas son realistas y te decimos directamente cuál tiene sentido.",
      },
      {
        q: "¿Reemplazan bandas y cadenas de tiempo?",
        a: "Sí, incluyendo la bomba de agua, los tensores y las poleas locas como parte del mismo trabajo cuando es la decisión correcta. La falla de la banda de tiempo es catastrófica; no somos el taller que te deja brincarte el mantenimiento.",
      },
      {
        q: "¿Cuánto tarda un reemplazo de motor?",
        a: "Un trabajo típico va de 3 a 7 días hábiles dependiendo de la disponibilidad de refacciones y de qué más haya que desarmar. Te damos un rango firme después de la inspección.",
      },
      {
        q: "¿El trabajo de motor está cubierto por la garantía NAPA?",
        a: "Las reparaciones y refacciones de motor que califican están cubiertas por 24 meses / 24,000 millas a nivel nacional. Los ensambles mayores a veces tienen garantías extendidas del fabricante; te explicamos lo que aplica.",
      },
    ],
    featuredTestimonialIndex: 2,
  },

  transmission: {
    eyebrow: "Servicio de transmisión",
    headline: "Reparación de transmisión en Richardson, bien hecha.",
    subhead:
      "Automática y estándar. Desde un drenado y rellenado hasta una reconstrucción completa. Diagnosticamos qué pasa de verdad antes de cotizar trabajo.",
    heroImage: "/assets/service-transmission.avif",
    heroAlt: "Engranes de transmisión estándar y componentes del clutch",
    priceCue: "Diagnóstico honesto, sin la mentalidad de reemplazar primero",
    symptoms: [
      "Patina o cambia bruscamente, sobre todo bajo carga",
      "Ruido de chirrido o zumbido que cambia con la velocidad",
      "Fugas de fluido (rojo, café o con olor a quemado)",
      "Luz de check engine con códigos de transmisión (serie P07XX)",
      "Llevas más de 60,000 millas desde el último servicio de transmisión",
    ],
    whyUs: [
      "Diagnosticamos antes de reemplazar; la mayoría de los problemas de transmisión no son fallas totales",
      "Fluido correcto para tu transmisión en específico (Dexron VI, ATF+4, CVT, DSG, etc.)",
      "Reconstrucciones cuando reconstruir tiene sentido; reemplazos cuando no",
      "La garantía NAPA Auto Care respalda el trabajo de transmisión que califica",
    ],
    faqs: [
      {
        q: "¿Cada cuándo debo cambiar el fluido de transmisión?",
        a: "Las recomendaciones del fabricante varían mucho, desde 30,000 hasta 100,000 millas. Revisamos tu especificación y la condición del fluido, después recomendamos honestamente.",
      },
      {
        q: "¿Reconstruir o reemplazar?",
        a: "Depende de la causa de la falla, del millaje del resto del auto y de la diferencia de costo. Cotizamos las dos cuando ambas tienen sentido y te decimos cuál haríamos si fuera nuestro auto.",
      },
      {
        q: "¿Trabajan transmisiones CVT?",
        a: "Sí. Damos servicio a CVT de Nissan, Honda, Subaru, Toyota y otras marcas. Requieren fluido y procedimientos específicos que seguimos al pie de la letra.",
      },
      {
        q: "¿Un flush de transmisión es riesgoso en un auto de alto millaje?",
        a: "A veces. En un vehículo que nunca ha tenido servicio y tiene más de 150,000 millas, un flush agresivo puede soltar residuos y causar problemas. En esos casos hacemos un drenado y rellenado cuidadoso, la jugada conservadora.",
      },
    ],
    featuredTestimonialIndex: 1,
  },

  electrical: {
    eyebrow: "Sistemas eléctricos",
    headline: "Reparación eléctrica automotriz en Richardson, TX.",
    subhead:
      "Los autos modernos son computadoras con ruedas. Diagnosticamos y reparamos cada sistema eléctrico: sensores, módulos, instalación y los básicos.",
    heroImage: "/assets/service-electrical.avif",
    heroAlt: "Módulo de control eléctrico y arnés de cables del vehículo",
    priceCue: "La cuota de diagnóstico se descuenta de la reparación",
    symptoms: [
      "El vehículo no enciende, gira lento o hace clicks repetidos",
      "La batería se descarga durante la noche o tras un periodo corto sin uso",
      "Luz del sistema de carga encendida o luces interiores parpadean",
      "Vidrios eléctricos, seguros o accesorios fallan",
      "Olor a quemado eléctrico o daño visible en cables",
    ],
    whyUs: [
      "Probamos el sistema de carga antes de venderte una batería; la mayoría de las baterías mueren por problemas de carga",
      "Herramientas de escaneo modernas que leen cada módulo del bus, no solamente el motor",
      "Tiempo real de diagnóstico en fallas intermitentes, no a las adivinanzas con refacciones",
      "Reparaciones de cableado bien hechas: soldadura más termofit, no engargolados",
    ],
    faqs: [
      {
        q: "Mi batería está muerta, ¿necesito una nueva?",
        a: "Tal vez. Hacemos prueba de carga a la batería Y probamos el alternador y el consumo del motor de arranque. Como un tercio de las llamadas de “batería muerta” en realidad son problemas del sistema de carga o consumos parásitos. Una batería nueva sin diagnosticar la causa real significa el mismo problema en dos meses.",
      },
      {
        q: "¿Cuánto dura una batería?",
        a: "El calor de Texas es brutal con las baterías. La vida típica aquí es de 3 a 5 años contra 5 a 7 en climas más frescos. El grupo y los CCA importan. Instalamos lo que tu vehículo realmente requiere.",
      },
      {
        q: "¿Por qué cobran por el diagnóstico eléctrico?",
        a: "Las fallas eléctricas se esconden. Rastrear un consumo parásito o una falla intermitente toma horas de pruebas cuidadosas. La cuota de diagnóstico se descuenta de la reparación si autorizas el trabajo.",
      },
      {
        q: "¿Manejan trabajo eléctrico aftermarket?",
        a: "Sistemas de estéreo, mejoras de iluminación, dash cams, etc., sí, cuando están instalados correctamente. No tocamos chambas obvias de otros talleres, pero sí cotizamos un re-cableado limpio.",
      },
    ],
    featuredTestimonialIndex: 5,
  },

  "state-inspections": {
    eyebrow: "Verificación estatal de Texas",
    headline: "Verificación estatal de Texas en Richardson, sin cita.",
    subhead:
      "Estación autorizada de verificación estatal de Texas. Inspección anual de seguridad y emisiones, diagnóstico de inspección no aprobada y reparaciones para cumplir, todo bajo el mismo techo.",
    heroImage: "/assets/service-state-inspections.avif",
    heroAlt: "Letrero de estación de verificación estatal de Texas en el taller",
    priceCue: "$7 seguridad / $25.50 emisiones, atendemos sin cita",
    symptoms: [
      "Te toca verificación (la calcomanía de placas muestra el mes)",
      "Acabas de comprar un vehículo y necesitas registrarlo en Texas",
      "No pasaste la verificación en otro lado y necesitas diagnóstico y reparación",
      "Vehículo recién traído de fuera de Texas que necesita inspección estatal",
    ],
    whyUs: [
      "Estación autorizada de verificación de Texas, la calcomanía oficial es real",
      "¿No pasaste? Diagnosticamos Y reparamos, después volvemos a inspeccionar; sin andar de un taller a otro",
      "Atendemos sin cita cualquier día entre semana o sábado por la mañana",
      "Personal bilingüe, papeleo explicado en inglés o español",
    ],
    faqs: [
      {
        q: "¿Necesito verificación o nada más el registro?",
        a: "Texas requiere una inspección anual de seguridad para la mayoría de los vehículos. La inspección de emisiones aplica en los condados metropolitanos de DFW, Houston, El Paso y Austin. Hacemos las dos.",
      },
      {
        q: "¿Qué revisa una verificación de Texas?",
        a: "Seguridad: frenos, luces, claxon, llantas, limpiadores, espejos, vidrios, cinturones, escape. Emisiones: prueba de listo de OBD-II y prueba de presión del tapón de gasolina. Te explicamos los puntos que no pasan.",
      },
      {
        q: "¿Qué pasa si no paso?",
        a: "Te decimos exactamente qué falló y cotizamos la reparación. Después del arreglo, te damos una re-inspección gratuita en un plazo de 15 días en el mismo taller. Sin tener que andar de un lugar a otro.",
      },
      {
        q: "¿Cuánto tarda una inspección?",
        a: "De 20 a 40 minutos para la mayoría de los vehículos, sin cita. El café está listo.",
      },
      {
        q: "¿Hacen inspecciones para vehículos de fuera del estado para registrarlos en Texas?",
        a: "Sí. Verificación de VIN más seguridad y emisiones en una sola visita. Trae tu título y comprobante de seguro.",
      },
    ],
    featuredTestimonialIndex: 3,
  },

  hvac: {
    eyebrow: "Aire acondicionado y calefacción",
    headline: "Reparación de A/C en Richardson, aire frío todo el año.",
    subhead:
      "Servicio completo de A/C y calefacción: recarga, compresor, condensador, calefactor, detección de fugas de refrigerante. Sistemas R-134a y R-1234yf, todas las marcas y modelos.",
    heroImage: "/assets/service-hvac.avif",
    heroAlt: "Acercamiento al sistema de A/C y calefacción del vehículo",
    priceCue: "Agéndalo en marzo, evita la corrida de agosto",
    symptoms: [
      "El A/C sopla tibio o nada más un poco fresco",
      "Flujo de aire débil aun en máximo",
      "Olor a humedad, moho o químico saliendo de las ventilas",
      "El calefactor no calienta en invierno",
      "Chillido o traqueteo cuando enciende el A/C",
      "Los controles de clima del tablero fallan a veces",
    ],
    whyUs: [
      "Diagnosticamos antes de recargar, sellando primero la fuga, no nada más rellenando refrigerante",
      "Sistemas modernos incluyendo R-1234yf con equipo certificado por la EPA",
      "Reemplazo de calefactor, actuadores de compuerta de mezcla, reparación completa de A/C en el taller",
      "Programamos el trabajo de A/C con anticipación para que tengas frío en abril, no que sigas esperando en julio",
    ],
    faqs: [
      {
        q: "¿Por qué la reparación de A/C cuesta más de lo que esperaba?",
        a: "Los sistemas modernos usan refrigerante R-1234yf que cuesta de 4 a 6 veces más que el viejo R-134a. Además, un taller honesto sella la fuga primero en vez de nada más echar más refrigerante. Pagas más una vez, y dura.",
      },
      {
        q: "¿Cuándo debo darle servicio al A/C?",
        a: "La mejor ventana es de marzo a principios de mayo. Para junio, todos los talleres en DFW tienen 1 o 2 semanas de espera para trabajo de A/C, y tú ya estás sudando sobre el volante.",
      },
      {
        q: "¿La calefacción usa el mismo sistema?",
        a: "El calefactor usa el anticongelante del motor a través del calefactor, no el compresor del A/C. Comparten controles y ductos pero tienen modos de falla distintos. Diagnosticamos cualquier lado de manera independiente.",
      },
      {
        q: "¿Cuánto tarda el reemplazo de un compresor de A/C?",
        a: "Típicamente de 4 a 6 horas de mano de obra dependiendo del acceso. Te damos un rango firme después de la inspección, con refacciones en stock para la mayoría de las marcas nacionales e importadas.",
      },
    ],
    featuredTestimonialIndex: 4,
  },

  tires: {
    eyebrow: "Servicio de llantas",
    headline: "Reparación de llantas en Richardson, TX.",
    subhead:
      "Rotación, balanceo, reparación de poncha, reemplazo de llantas, servicio de TPMS. Montamos y balanceamos cada medida común en autos, camionetas y SUV.",
    heroImage: "/assets/service-tires.avif",
    heroAlt: "Acercamiento al dibujo de la llanta sobre el rin",
    priceCue: "Reparación de poncha sin cita · La mayoría de las rotaciones en menos de 30 minutos",
    symptoms: [
      "Vibración a través del volante a velocidad de freeway",
      "Desgaste visible del dibujo, patrones disparejos o profundidad baja",
      "Luz de TPMS encendida (presión baja o falla de sensor)",
      "Fuga lenta, pierde presión en pocos días",
      "Jala hacia un lado en una calle plana",
      "La última rotación fue hace más de 7,500 millas",
    ],
    whyUs: [
      "Inspección honesta del dibujo: medimos y te enseñamos, no nada más vendemos",
      "Patrón de rotación adaptado a tu vehículo (FWD, AWD, llantas direccionales, todo bien manejado)",
      "Reparación de poncha bien hecha: tapón y parche desde adentro, no nada más un tapón por fuera",
      "Servicio y reemplazo de sensores de TPMS, programación para todas las marcas",
    ],
    faqs: [
      {
        q: "¿Cada cuándo debo rotar las llantas?",
        a: "Cada 5,000 a 7,500 millas, o con cada segundo cambio de aceite. Las llantas delanteras y traseras se desgastan a distintas velocidades; la rotación lo empareja y alarga la vida.",
      },
      {
        q: "¿Cuándo debo cambiar las llantas?",
        a: "Profundidad de dibujo por debajo de 4/32\" para seguridad en mojado; 2/32\" es el mínimo legal pero ya es imprudente. El calor de Texas y el pare y siga son duros con las llantas; espera de 35,000 a 50,000 millas en una llanta típica para todo clima.",
      },
      {
        q: "¿Pueden reparar una poncha o necesito una llanta nueva?",
        a: "Las pinchaduras en el dibujo normalmente se pueden reparar con tapón y parche desde adentro. El daño en el costado no se puede reparar de manera segura; te enseñamos el daño y tú decides.",
      },
      {
        q: "¿Venden llantas?",
        a: "Montamos y balanceamos llantas que tú traigas Y podemos conseguir directamente la mayoría de las marcas grandes. Tráenos tu medida y cotizamos las dos opciones para que escojas.",
      },
    ],
    featuredTestimonialIndex: 5,
  },

  "cooling-system": {
    eyebrow: "Sistema de enfriamiento",
    headline: "Reparación del sistema de enfriamiento en Richardson, TX.",
    subhead:
      "Servicio del sistema de enfriamiento para el verano brutal de Texas: cambio de anticongelante, reparación de radiador, termostato, bomba de agua, mangueras. Todas las marcas grandes, todos los tipos de anticongelante.",
    heroImage: "/assets/service-cooling.avif",
    heroAlt: "Radiador y mangueras del sistema de enfriamiento del motor",
    priceCue: "No esperes a agosto, dale servicio en primavera",
    symptoms: [
      "El indicador de temperatura del motor sube más de lo normal",
      "Olor a anticongelante, dulce o como jarabe, o fuga visible verde, naranja o rosa",
      "Vapor o humo blanco saliendo de debajo del cofre",
      "El calefactor sopla frío (frecuentemente un problema de flujo de anticongelante)",
      "El nivel del anticongelante baja una y otra vez",
      "Llevas más de 60,000 millas desde un cambio de anticongelante",
    ],
    whyUs: [
      "Usamos el anticongelante con la especificación correcta para tu vehículo: Dexcool, HOAT, OAT, etc. Mezclar tipos equivocados causa gel que arruina sistemas",
      "Pruebas de presión para encontrar fugas antes de que te dejen botado",
      "Bomba de agua y banda de tiempo juntas cuando es la jugada inteligente (te ahorras una segunda mano de obra)",
      "El calor de Texas es la causa número uno de muerte de los sistemas de enfriamiento; sabemos qué buscar",
    ],
    faqs: [
      {
        q: "¿Cada cuándo debo cambiar el anticongelante?",
        a: "La mayoría de los anticongelantes modernos de larga vida aguantan de 60,000 a 100,000 millas. Revisamos la condición del fluido y la especificación del fabricante, después recomendamos honestamente.",
      },
      {
        q: "Mi auto se está sobrecalentando, ¿qué hago ahorita?",
        a: "Oríllate con seguridad, apaga el motor, no abras un radiador caliente. Llámanos al (972) 231-2886 o manda traer el auto en grúa. Manejar un motor sobrecalentado cuesta juntas de cabeza en cuestión de minutos.",
      },
      {
        q: "¿Cuánto cuesta el reemplazo de la bomba de agua?",
        a: "Depende del acceso. Algunas son trabajos de 1 a 2 horas (300 a 500 dólares); otras requieren retirar la banda de tiempo, lo que añade mucha mano de obra. Cotizamos en firme después de la inspección.",
      },
      {
        q: "¿Un cambio de anticongelante es necesario o nada más es un sobreventa?",
        a: "Genuinamente necesario en el intervalo. El anticongelante viejo se vuelve ácido y se come las aletas del radiador y los sellos de la bomba de agua. No somos un taller de “flush a todo”, pero te decimos directo si el tuyo ya se pasó.",
      },
    ],
    featuredTestimonialIndex: 1,
  },

  "fuel-injection": {
    eyebrow: "Inyección de combustible",
    headline: "Servicio de inyección de combustible en Richardson, TX.",
    subhead:
      "Limpieza de inyectores, reemplazo de filtro de combustible, servicio de bomba, limpieza del cuerpo de aceleración. Recupera el desempeño y el rendimiento de gasolina en cada marca y modelo común.",
    heroImage: "/assets/service-fuel-injection.avif",
    heroAlt: "Riel de inyectores montado sobre el motor",
    priceCue: "Diagnóstico primero, no limpiamos lo que no necesita limpieza",
    symptoms: [
      "Ralentí áspero, titubeo o tirones al acelerar",
      "Caída en el rendimiento de gasolina sin razón clara",
      "Arranques difíciles, especialmente después de pasar la noche apagado",
      "Luz de check engine con códigos del sistema de combustible (serie P017X, P019X)",
      "Olor a azufre o huevo podrido en el escape",
      "No pasaste la verificación estatal de Texas por emisiones",
    ],
    whyUs: [
      "Diagnosticamos con pruebas de presión de combustible y escaneo de datos en vivo, no a las adivinanzas con refacciones",
      "Servicio profesional de limpieza de inyectores, no los aditivos de mostrador que en realidad no funcionan",
      "Reemplazo de bomba de combustible con refacciones de calidad OEM que duran",
      "Limpieza del cuerpo de aceleración incluida con la mayoría de los servicios del sistema de combustible",
    ],
    faqs: [
      {
        q: "¿Debo usar limpiador de inyectores de la gasolinera?",
        a: "Los aditivos de botella pueden ayudar con depósitos menores pero no arreglan problemas moderados o severos de inyectores. Si ya probaste dos botellas y el síntoma sigue, ya es hora de un servicio real de taller.",
      },
      {
        q: "¿Por qué mi rendimiento es peor de lo que era?",
        a: "Pueden ser inyectores, sensor de flujo de aire, sensores de oxígeno, filtro de combustible o hasta llantas. Probamos primero las causas baratas de arreglar antes de recomendar las caras.",
      },
      {
        q: "¿Cuánto cuesta el reemplazo de la bomba de combustible?",
        a: "La mayoría de las bombas modernas dentro del tanque van de 500 a 900 dólares en refacción y mano de obra. Las bombas externas más viejas pueden costar menos. Cotizamos por adelantado después del diagnóstico.",
      },
      {
        q: "¿Manejan limpieza de inyección directa (GDI)?",
        a: "Sí. Los motores GDI (la mayoría de Toyota, Hyundai, Kia, VW, GM modernos) acumulan carbón en las válvulas de admisión que los aditivos de botella no alcanzan. Hacemos limpieza con cáscara de nuez (walnut blast) cuando se necesita.",
      },
    ],
    featuredTestimonialIndex: 3,
  },

  battery: {
    eyebrow: "Servicio de batería",
    headline: "Servicio de batería en Richardson, TX.",
    subhead:
      "Pruebas de batería, reemplazo, diagnóstico del sistema de carga, limpieza de terminales. El calor de Texas se come las baterías. Instalamos la batería correcta para tu vehículo y verificamos que el sistema de carga esté sano primero.",
    heroImage: "/assets/service-battery.avif",
    heroAlt: "Batería de vehículo instalada bajo el cofre",
    priceCue: "Prueba de batería gratis · La mayoría de los reemplazos en menos de una hora",
    symptoms: [
      "Arranque lento al encender el motor",
      "Luz de batería en el tablero",
      "Batería muerta repetida después de pasar la noche",
      "Las luces se atenúan en ralentí y se aclaran al acelerar",
      "Sonido de click al girar la llave, no enciende",
      "La batería tiene más de 3 años en Texas",
    ],
    whyUs: [
      "Probamos PRIMERO el sistema de carga; la mayoría de los casos de “batería muerta” en realidad son problemas de alternador o consumo parásito, y una batería nueva sola no los arregla",
      "El grupo y la calificación de CCA correcta para tu vehículo en específico (no lo que esté en oferta)",
      "El calor de Texas mata baterías más rápido que el frío, conocemos la vida real esperada aquí",
      "Prueba de batería gratis cuando quieras, sin cita, sin compra obligatoria",
    ],
    faqs: [
      {
        q: "¿Cuánto dura una batería en Texas?",
        a: "De 3 a 5 años, contra 5 a 7 en climas más frescos. Los veranos sostenidos de más de 100°F son la causa principal. Si la tuya tiene más de 3 años y vas a salir de viaje, reemplázala preventivamente antes de que te deje botado.",
      },
      {
        q: "¿Debo cambiar la batería yo mismo?",
        a: "DIY está bien en autos viejos sencillos. Los vehículos modernos a menudo necesitan registro de batería con una herramienta de escaneo para que el alternador cargue correctamente. Hacemos el registro como parte de cada instalación.",
      },
      {
        q: "Mi batería tiene 2 años y está muerta. ¿Está en garantía?",
        a: "La mayoría de las baterías traen 24 a 36 meses de garantía de reemplazo gratis más un periodo prorrateado más largo. Tráenos la batería vieja y el ticket; manejamos el trámite de garantía con el fabricante.",
      },
      {
        q: "¿Cuánto cuesta una batería?",
        a: "Depende del grupo: sedán típico de 130 a 200 dólares, camioneta o SUV de tamaño completo de 200 a 300, AGM (start-stop o de lujo) de 250 a 400. Instalada y registrada.",
      },
    ],
    featuredTestimonialIndex: 5,
  },
};

/** Slugs que tienen una página dedicada. Igual que SERVICE_PAGE_SLUGS en inglés. */
export const SERVICE_PAGE_SLUGS_ES = Object.keys(SERVICE_CONTENT_ES);
