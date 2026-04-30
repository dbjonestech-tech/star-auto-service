/**
 * Mexican-Spanish twin of resources.ts. Same slugs, same shape, same array
 * order so callers can pick by locale. /es/resources/[slug] uses these.
 *
 * Conventions:
 *   - Slugs and `related` slug arrays stay English (URLs match across locales).
 *   - Brand and certification names stay English (NAPA Auto Care, ASE,
 *     OBD-II, OEM, TPMS, Carfax, AutoCheck, R-134a, R-1234yf, EPA, Texas).
 *   - Vehicle make/model names stay English (BMW, Mercedes, Audi, Honda,
 *     Toyota, Subaru, Volkswagen, Hyundai, Kia, Volvo, Lexus, Porsche).
 *   - Highway, road, and place names stay English (75, Belt Line, Bush
 *     Tollway, Coit, Dallas, Plano, Houston, El Paso, Austin, DFW).
 *   - Phone, prices, mile counts, year ranges, temperatures stay numeric.
 *   - "tú" form, plainspoken Mexican Spanish, no em dashes.
 *   - Article schema fields like publishedDate stay as-is (ISO date format).
 */

import type { Resource } from "./resources";

export const RESOURCES_ES: Resource[] = [
  {
    slug: "check-engine-light-guide",
    category: "Diagnóstico",
    title: "Luz de check engine: qué significa y qué hacer después",
    description:
      "Una guía clara de qué dispara la luz de check engine, qué tan grave es y qué hacer antes de entrar en pánico, desde un taller en Richardson, TX que diagnostica esto a diario.",
    publishedDate: "2026-04-15",
    readMinutes: 6,
    heroImage: "/assets/resource-check-engine.avif",
    heroAlt:
      "Luz amarilla de advertencia de check engine encendida en el tablero de un vehículo",
    eyebrow: "Diagnóstico",
    lede: "Se acaba de encender tu luz de check engine. Antes de entrar en pánico o de ignorarla por los próximos seis meses, esto es lo que realmente significa, qué hacer en la próxima hora y cómo un taller real la diagnostica.",
    sections: [
      { type: "h2", text: "Fija contra parpadeante: hay una gran diferencia" },
      {
        type: "p",
        text: "Una luz de check engine fija (continua) significa que la computadora del auto detectó algo fuera de especificación, pero no está dañando el motor activamente en este momento. Es una situación de “ven al taller en la próxima semana o dos”.",
      },
      {
        type: "p",
        text: "Una luz de check engine parpadeante es distinta. Parpadear significa que el motor tiene una falla activa lo suficientemente fuerte como para destruir el convertidor catalítico. Los convertidores catalíticos son caros, a veces de 1,500 a 3,000 dólares, y una falla sostenida puede freír uno en minutos.",
      },
      {
        type: "callout",
        title: "Si tu luz de check engine está parpadeando",
        body: "Oríllate con seguridad. No sigas manejando. Llámanos al (972) 231-2886 o manda traer el auto en grúa. Mientras más tiempo siga prendido parpadeando, más daño arriesgas.",
      },

      { type: "h2", text: "Qué la puede disparar" },
      {
        type: "p",
        text: "Existen más de 1,400 códigos OBD-II posibles. Los disparadores más comunes que vemos en el taller, ordenados aproximadamente por frecuencia:",
      },
      {
        type: "ul",
        items: [
          "Tapón de gasolina suelto, agrietado o faltante (sí, de verdad)",
          "Sensores de oxígeno fallando",
          "Problemas con el sensor de flujo de aire (MAF)",
          "Convertidor catalítico fallando",
          "Problemas con bujías o bobinas de encendido",
          "Fugas en el sistema EVAP (frecuentemente una pequeña fuga de vacío)",
          "Termostato o sensor de temperatura del motor",
        ],
      },
      {
        type: "p",
        text: "Algunas de estas son arreglos de 20 dólares. Otras son arreglos de 2,000 dólares. El código por sí solo nada más estrecha las posibilidades. Un diagnóstico real distingue entre ellas.",
      },

      { type: "h2", text: "Por qué una lectura gratis en una refaccionaria no es un diagnóstico" },
      {
        type: "p",
        text: "Un lector de refaccionaria te da un código. No te dice qué está mal en realidad y definitivamente no te dice cuál de varias causas posibles es la tuya.",
      },
      {
        type: "p",
        text: "Toma un código P0420, por ejemplo. P0420 significa “eficiencia del convertidor catalítico debajo del umbral”. Ese código puede causarse por:",
      },
      {
        type: "ul",
        items: [
          "Un convertidor catalítico realmente fallando (reparación de 1,500 dólares en adelante)",
          "Un sensor de O2 anterior o posterior fallando (reparación de 150 a 400 dólares)",
          "Una fuga de escape antes del catalizador (reparación de 100 a 300 dólares)",
          "Un problema de mezcla de combustible que hace que el catalizador lea ineficiente (50 a 500 dólares para resolver la causa anterior)",
        ],
      },
      {
        type: "p",
        text: "Los arreglos baratos pueden verse exactamente igual que los caros desde la perspectiva de un lector de códigos. Un taller real con herramientas de escaneo específicas del fabricante, datos de freeze-frame y décadas de reconocer patrones descarta las causas baratas antes de recomendar la cara.",
      },

      { type: "h2", text: "Qué hacer en las próximas 24 horas" },
      {
        type: "ol",
        items: [
          "Si la luz parpadea: deja de manejar y llama a un taller o pide grúa.",
          "Si la luz está fija y el auto anda normal: aprieta el tapón de gasolina (ha sido la causa para cientos de clientes a lo largo de los años). Espera dos o tres ciclos de manejo a ver si la luz se apaga sola.",
          "Si la luz sigue prendida después de unos días: agenda una cita real de diagnóstico. No esperes seis meses con la esperanza de que se quite. Los códigos pueden acumularse.",
        ],
      },

      { type: "h2", text: "Qué hacemos en The Star Auto Service" },
      {
        type: "p",
        text: "El diagnóstico aquí es un proceso real, no un “lee el código y adivina”. Sacamos los códigos, capturamos datos de freeze-frame que muestran el estado del motor en el momento en que se disparó el código, registramos datos en vivo de los sensores en una prueba de manejo y descartamos las causas baratas antes de recomendar las caras. La cuota de diagnóstico se descuenta de la reparación si autorizas el trabajo, así que cuando lo encontramos, pagas una sola vez.",
      },
    ],
    related: ["when-to-replace-brakes", "texas-state-inspection-guide"],
  },

  {
    slug: "when-to-replace-brakes",
    category: "Frenos",
    title: "Cuándo cambiar los frenos: 5 señales (y cuánto cuestan)",
    description:
      "Pastillas, discos, líquido, calipers, cuándo le toca a cada uno, cómo se ve la falla y cuáles son los costos realistas en un taller honesto, familiar, en Richardson, TX.",
    publishedDate: "2026-03-22",
    readMinutes: 5,
    heroImage: "/assets/service-brakes.avif",
    heroAlt: "Acercamiento al disco de freno y al caliper",
    eyebrow: "Frenos",
    lede: "Los frenos son la parte del auto que más probablemente se degrada en silencio hasta fallar justo en el momento equivocado. Aquí están las cinco señales a las que poner atención, además de expectativas realistas de costo.",
    sections: [
      { type: "h2", text: "1. Chillido, rechinido o raspado" },
      {
        type: "p",
        text: "La pequeña pestaña metálica integrada en la mayoría de las pastillas de freno está diseñada para hacer un chillido agudo cuando la pastilla se adelgaza. Eso es una advertencia de “ven en el próximo mes”, no de “está bien por otros seis meses”.",
      },
      {
        type: "p",
        text: "Rechinido o raspado de metal contra metal significa que la pastilla está gastada y ahora estás rayando el disco. Esto es una situación de “ven esta semana”. Sigue manejando y vas a necesitar discos en lugar de nada más pastillas, lo que duplica el costo de la reparación.",
      },

      { type: "h2", text: "2. Pulsación a través del pedal" },
      {
        type: "p",
        text: "Si el pedal del freno pulsa o vibra al frenar a velocidad de freeway, lo más probable es que tus discos estén alabeados (técnicamente: variación de espesor). Las causas incluyen enfriamiento desigual después de paradas fuertes o pastillas pegadas en un punto. A veces el rectificado lo arregla; muchas veces el disco ya pasó la especificación.",
      },

      { type: "h2", text: "3. Pedal blando, pedal que se hunde o que se va al fondo" },
      {
        type: "p",
        text: "Esto es un problema de líquido de frenos: aire en la línea, una fuga en el sistema o un cilindro maestro fallando. No lo manejes. Llámanos, mándalo en grúa si tienes que hacerlo. El líquido de frenos es la diferencia entre que pares y que no pares.",
      },

      { type: "h2", text: "4. Jala hacia un lado al frenar" },
      {
        type: "p",
        text: "Si el auto se desvía a la izquierda o la derecha al frenar, un lado está trabajando más que el otro. Causas comunes: un caliper atorado, una manguera de freno colapsada o pastillas con desgaste disparejo. Todas necesitan atención antes de que empeoren.",
      },

      { type: "h2", text: "5. El reloj, o más bien, el millaje" },
      {
        type: "p",
        text: "Las pastillas de freno en la mayoría de los autos modernos duran de 30,000 a 70,000 millas dependiendo de las condiciones de manejo. El pare y siga (sí, los conductores de Dallas) es más duro con los frenos que el freeway constante. Si no te acuerdas la última vez que te hicieron frenos y ya pasaste las 40,000 millas, mándalos a inspeccionar.",
      },

      { type: "h2", text: "Cuánto cuesta" },
      {
        type: "ul",
        items: [
          "Cambio de pastillas delanteras, sedán típico: 150 a 300 dólares por eje, refacciones y mano de obra",
          "Cambio de pastillas y discos (delanteros): 300 a 550 dólares por eje para la mayoría de las marcas",
          "Cambio de líquido de frenos: 80 a 150 dólares",
          "Reemplazo de un caliper: 250 a 500 dólares",
          "Cilindro maestro: 400 a 800 dólares",
        ],
      },
      {
        type: "p",
        text: "Los frenos de lujo europeos (BMW, Mercedes, Porsche, Audi) cuestan aproximadamente 50 a 80 por ciento más porque las refacciones cuestan más. Usamos refacciones de calidad OEM, nunca de saldo, pero no te hacemos pagar precios de concesionario por ellas.",
      },

      {
        type: "callout",
        title: "Revisión gratuita de frenos cuando quieras",
        body: "Con gusto subimos tu auto al elevador y te decimos honestamente cómo estás: grosor de pastillas, condición de los discos, color del líquido. Sin cita, sin compromiso.",
      },
    ],
    related: ["check-engine-light-guide", "seasonal-car-care-texas"],
  },

  {
    slug: "oil-change-frequency",
    category: "Mantenimiento",
    title: "¿Cada cuándo debes cambiar el aceite? (La respuesta honesta)",
    description:
      "Las 3,000 millas están muertas. Las 5,000 también. Los intervalos de cambio de aceite modernos dependen del tipo de aceite, del motor y de tus condiciones reales de manejo. Aquí va la respuesta directa para conductores en Texas.",
    publishedDate: "2026-02-14",
    readMinutes: 4,
    heroImage: "/assets/service-oil-change.avif",
    heroAlt: "Aceite de motor nuevo siendo vertido durante el servicio",
    eyebrow: "Mantenimiento",
    lede: "El cambio de aceite cada 3,000 millas es un mito de marketing de los años 70. Los aceites modernos, los motores modernos y los monitores modernos de vida del aceite empujan el intervalo real mucho más lejos, pero no tan lejos como algunas personas quieren creer.",
    sections: [
      { type: "h2", text: "La respuesta corta" },
      {
        type: "ul",
        items: [
          "Aceite convencional: 3,000 a 5,000 millas",
          "Semisintético: 5,000 a 7,500 millas",
          "Full sintético: 7,500 a 10,000 millas, a veces 15,000 en autos europeos nuevos",
          "Confía en la recomendación del fabricante en el manual",
          "Confía en el monitor de vida del aceite si tu auto lo tiene; son sorprendentemente precisos",
        ],
      },

      { type: "h2", text: "Por qué los intervalos se hicieron más largos" },
      {
        type: "p",
        text: "Dos razones. Primero, los sintéticos modernos resisten mucho mejor el rompimiento a altas temperaturas que los aceites convencionales antiguos. Segundo, los motores modernos son más cerrados, entran menos contaminantes al aceite. Combinado, eso significa que un aceite sintético puede hacer su trabajo dos a tres veces más tiempo que un aceite convencional de los años 70.",
      },

      { type: "h2", text: "Cuándo conviene ir más corto que el manual" },
      {
        type: "p",
        text: "Algunas condiciones de manejo son más duras con el aceite que el promedio que asume el fabricante. Si la mayoría de tu manejo es:",
      },
      {
        type: "ul",
        items: [
          "Viajes cortos de menos de 10 minutos (el motor nunca calienta del todo, se acumula agua y combustible en el aceite)",
          "Pare y siga en el calor del área de Dallas",
          "Remolque o carga pesada de manera regular",
          "Condiciones polvosas o caminos sin pavimentar",
          "Días de pista o manejo deportivo intenso",
        ],
      },
      {
        type: "p",
        text: "...entonces ve por el lado conservador del rango recomendado. Eso no significa 3,000 millas para sintético, pero si el manual dice “7,500 a 10,000”, vete a las 7,500.",
      },

      { type: "h2", text: "Notas específicas para Texas" },
      {
        type: "p",
        text: "El calor y el polvo son los dos factores del norte de Texas. Manejar sostenidamente con más de 100°F en verano pone más estrés térmico en el aceite. Si tu auto pasa agosto en ralentí en carpools, inclínate al lado corto del intervalo. Si pasa agosto en cochera techada y la mayor parte de su manejo es freeway, está bien irte largo.",
      },

      { type: "h2", text: "Qué hacer si no te acuerdas del último cambio" },
      {
        type: "p",
        text: "Cámbialo. Después empieza a llevar un registro. La mayoría de los autos modernos lleva la vida del aceite en el menú del tablero; aprende a leerlo. Si el tuyo no, nada más anota el millaje en una calcomanía (lo hacemos por ti) y revísalo cada mes.",
      },

      {
        type: "callout",
        title: "Cambio de aceite sin cita",
        body: "La mayoría de los cambios de aceite los puedes esperar. El café está listo. Ajustamos la viscosidad correcta y la especificación del filtro para tu vehículo en específico y rellenamos los demás fluidos mientras estás en el elevador.",
      },
    ],
    related: ["seasonal-car-care-texas", "when-to-replace-brakes"],
  },

  {
    slug: "texas-state-inspection-guide",
    category: "Verificaciones",
    title: "Verificación estatal de Texas: guía completa para 2026",
    description:
      "Qué se revisa, qué falla más, cuánto cuesta y qué hacer si no pasas, desde una estación autorizada de verificación estatal en Richardson.",
    publishedDate: "2026-01-30",
    readMinutes: 5,
    heroImage: "/assets/resource-state-inspection.webp",
    heroAlt: "Reporte de inspección de vehículo y herramientas en el taller",
    eyebrow: "Verificaciones",
    lede: "Cada vehículo de Texas necesita una inspección anual para registrarse. Aquí está lo que se revisa, qué hace tropezar a la mayoría de la gente y qué hacer si tu auto no pasa, desde una estación autorizada de verificación que hace esto cientos de veces al año.",
    sections: [
      { type: "h2", text: "Dos partes: seguridad y emisiones" },
      {
        type: "p",
        text: "Texas requiere una inspección anual de seguridad para casi todos los vehículos. Si vives en el área metropolitana de Dallas-Fort Worth (condados de Dallas, Tarrant, Collin, Denton, Ellis, Johnson, Kaufman, Parker o Rockwall), también necesitas inspección de emisiones. Hacemos las dos, la mayoría de los autos en 30 a 45 minutos, sin cita.",
      },

      { type: "h2", text: "Qué revisa la inspección de seguridad" },
      {
        type: "ul",
        items: [
          "Frenos, incluido el freno de mano",
          "Faros, luces de freno, direccionales y calaveras",
          "Claxon",
          "Limpiaparabrisas (las dos plumas, funcionando)",
          "Espejos",
          "Dirección, suspensión y sistema de escape",
          "Llantas (profundidad de dibujo y condición)",
          "Polarizado de vidrios (debe cumplir los límites legales de Texas)",
          "Cinturones de seguridad",
          "Vidrio (sin grietas en el área de barrido del limpiador)",
          "Verificación de VIN",
        ],
      },

      { type: "h2", text: "Qué revisa la inspección de emisiones" },
      {
        type: "p",
        text: "Para la mayoría de los vehículos modernos (1996 en adelante), la prueba de emisiones es una verificación de listo del OBD-II. La computadora del auto reporta si todos sus monitores de emisiones se han ejecutado con éxito y si hay algún código de check engine. Los vehículos más viejos pueden recibir una prueba de gases por el escape.",
      },

      { type: "h2", text: "Qué falla con más frecuencia" },
      {
        type: "ul",
        items: [
          "Luz de check engine encendida (rechazo automático en emisiones)",
          "Dibujo de llanta por debajo de 2/32 de pulgada",
          "Foco de freno u otro foco fundido",
          "Polarizado demasiado oscuro en la ventanilla del conductor o el parabrisas",
          "Parabrisas estrellado en el campo de visión del conductor",
          "Monitores de OBD-II no listos (frecuente después de desconectar la batería)",
        ],
      },

      { type: "h2", text: "Cuánto cuesta" },
      {
        type: "ul",
        items: [
          "Seguridad y emisiones (la mayoría de los autos en DFW): 25.50 dólares en el taller, más la cuota separada de registro del estado en el DMV",
          "Solo seguridad (vehículos en condados sin emisiones): 7.00 dólares",
          "Inspección no aprobada: re-inspección gratuita en un plazo de 15 días en el mismo taller después de la reparación",
        ],
      },

      { type: "h2", text: "Si no pasas" },
      {
        type: "p",
        text: "Te decimos exactamente qué falló, cotizamos la reparación y, después del arreglo, te damos una re-inspección gratuita en el mismo taller en un plazo de 15 días. Sin tener que andar de un lugar a otro. Si no podemos arreglarlo el mismo día (lo cual es raro), te damos el formulario para llevar al DMV explicando la situación y que no pierdas tu ventana de registro.",
      },

      {
        type: "callout",
        title: "Verificación sin cita, en inglés o español",
        body: "Lunes a viernes 8:00 AM – 6:30 PM, sábados 8:00 AM – 4:00 PM. Trae tu tarjeta del seguro. El café está listo.",
      },
    ],
    related: ["check-engine-light-guide", "seasonal-car-care-texas"],
  },

  {
    slug: "seasonal-car-care-texas",
    category: "Mantenimiento",
    title: "Cuidado del auto por temporada para conductores en Texas",
    description:
      "El calor es el enemigo. El polvo es el segundo. El raro hielo es el tercero. Aquí va una lista por temporada para mantener tu auto andando con el clima del norte de Texas.",
    publishedDate: "2026-01-12",
    readMinutes: 6,
    heroImage: "/assets/resource-seasonal-care.avif",
    heroAlt: "Atardecer sobre una autopista de Texas, condiciones de manejo por temporada",
    eyebrow: "Mantenimiento",
    lede: "Los autos en el norte de Texas no fallan igual que en Minnesota. Nuestro clima estresa sistemas distintos. Aquí va una lista temporada por temporada con las cosas que de verdad importan para tu auto aquí.",
    sections: [
      { type: "h2", text: "Primavera (marzo a mayo)" },
      {
        type: "p",
        text: "Esta es la ventana antes de que pegue el calor. Aprovéchala.",
      },
      {
        type: "ul",
        items: [
          "Manda revisar tu A/C. Recárgalo si no está soplando frío para abril. Para agosto, todos los talleres en DFW tienen 2 semanas de espera para trabajo de A/C.",
          "Revisa el nivel y la condición del anticongelante. El termostato que aguantó el verano pasado puede que no sobreviva este.",
          "Inspecciona bandas y mangueras. El calor mata cualquier cosa que ya esté agrietada.",
          "Prueba de batería. El calor mata baterías más rápido que el frío. Si tu batería tiene más de 4 años, reemplázala preventivamente antes de que te deje botado.",
        ],
      },

      { type: "h2", text: "Verano (junio a septiembre)" },
      {
        type: "p",
        text: "Días de más de 100°F durante semanas seguidas. La temporada más dura para un auto en este estado.",
      },
      {
        type: "ul",
        items: [
          "Vigila el indicador de temperatura a diario. Cualquier subida arriba de lo normal es una advertencia.",
          "Revisa la presión de las llantas mensualmente. El calor sube la presión; las llantas con baja presión fallan más rápido en calor.",
          "No ignores el chillido de bandas, eso es el compresor del A/C o la polea del alternador diciéndote algo.",
          "Si tu auto tiene tecnología start-stop, la batería trabaja horas extra con calor. Cuídate de los arranques lentos.",
        ],
      },

      { type: "h2", text: "Otoño (octubre a noviembre)" },
      {
        type: "p",
        text: "La temporada más suave aquí. Aprovéchala para ponerte al día con lo que dejaste pendiente en verano.",
      },
      {
        type: "ul",
        items: [
          "Verificación anual si te toca, las filas son más cortas que en primavera o verano.",
          "Revisión de frenos. La pérdida de freno por calor y el manejo de pare y siga del verano gastan pastillas más rápido de lo que la gente cree.",
          "Cambio de plumas limpiadoras antes de las tormentas eléctricas de otoño.",
          "Revisa la dirección y el brillo de los faros para los días más cortos.",
        ],
      },

      { type: "h2", text: "Invierno (diciembre a febrero)" },
      {
        type: "p",
        text: "No tenemos inviernos reales la mayoría de los años, pero la rara helada fuerte hace daños que los estados más cálidos nunca ven.",
      },
      {
        type: "ul",
        items: [
          "Revisa la concentración del anticongelante antes de cualquier helada fuerte pronosticada.",
          "Condición de las llantas: en frío pierden presión y agarre; el hielo y el aguanieve no perdonan.",
          "Otra prueba de batería: el arranque en frío es lo segundo más duro para una batería después del calor sostenido.",
          "No ignores una alerta de “anticongelante bajo”. Una manguera de anticongelante congelada agrieta blocks.",
        ],
      },

      { type: "h2", text: "Qué mata autos antes de tiempo en el norte de Texas" },
      {
        type: "ul",
        items: [
          "Saltarse cambios de aceite en verano: el aceite caliente se rompe más rápido",
          "Saltarse el servicio del A/C: cuando el compresor falla, son 1,500 dólares en adelante",
          "Ignorar advertencias de batería en calor: paros repentinos en estacionamientos en agosto",
          "Dejar las llantas pelonas: calor más llantas pelonas más lluvia es igual a hidroplaneo",
        ],
      },

      {
        type: "callout",
        title: "Inspección de temporada gratuita",
        body: "Trae tu auto cualquier día entre semana o sábado por la mañana. Hacemos una revisión sin compromiso de arriba abajo, anotamos lo que se viene y tú decides qué arreglar y cuándo.",
      },
    ],
    related: ["oil-change-frequency", "when-to-replace-brakes"],
  },

  {
    slug: "ac-compressor-replacement-cost",
    category: "A/C y calefacción",
    title: "Costo del reemplazo del compresor de A/C: lo que de verdad pagan los conductores en Texas",
    description:
      "Rangos reales de costo para el reemplazo del compresor de A/C en el norte de Texas, por qué nuestro clima los desgasta más rápido y los síntomas a los que poner atención antes de que el tuyo falle.",
    publishedDate: "2026-05-04",
    readMinutes: 6,
    heroImage: "/assets/service-hvac.avif",
    heroAlt: "Acercamiento al sistema de A/C y calefacción del vehículo",
    eyebrow: "A/C y calefacción",
    lede: "Los compresores de A/C mueren más rápido en el norte de Texas que en casi cualquier otro lugar del país. Aquí va lo que puedes esperar pagar, por qué cuesta lo que cuesta y los síntomas que aparecen antes de que el sistema se rinda por completo.",
    sections: [
      { type: "h2", text: "Por qué los compresores de A/C fallan más rápido aquí" },
      {
        type: "p",
        text: "Los compresores son bombas mecánicas que trabajan sin parar en verano. La combinación de días de más de 100°F, el ciclo de presión del refrigerante y el tráfico defensa con defensa en la 75 hacen que un compresor de A/C en el área de Dallas viva una vida mucho más dura que uno en San Diego. La mayoría falla entre las 100,000 y 150,000 millas en este clima.",
      },
      { type: "h2", text: "El rango realista de precios" },
      {
        type: "ul",
        items: [
          "Sedán con refrigerante R-134a: 900 a 1,400 dólares en refacciones y mano de obra",
          "Camioneta o SUV con R-134a: 1,100 a 1,600 dólares",
          "Vehículo más nuevo con refrigerante R-1234yf: 1,400 a 2,200 dólares",
          "Lujo europeo (BMW, Mercedes, Audi): 1,800 a 2,800 dólares",
          "Reemplazo completo del sistema (compresor, condensador, secador, líneas): 2,500 a 4,500 dólares",
        ],
      },
      {
        type: "p",
        text: "El mayor brinco lo hace el refrigerante. R-1234yf es lo que usan los autos fabricados desde aproximadamente 2017 y cuesta de cuatro a seis veces más que el viejo R-134a. Un reemplazo de compresor en una camioneta 2020 implica recuperar, evacuar y recargar de cuatro a seis libras de un refrigerante de 80 dólares por libra. Esa es la cuenta.",
      },
      { type: "h2", text: "Síntomas que indican compresor, no recarga" },
      {
        type: "ul",
        items: [
          "El aire sopla tibio incluso después de una recarga",
          "El clutch del A/C hace ruido de click, rechinido o chillido al activarse",
          "Residuo visible de refrigerante o aceite alrededor del compresor",
          "La banda chilla solamente cuando el A/C está prendido",
          "El A/C funciona los primeros minutos y después se apaga",
          "La cabina huele ligeramente aceitosa",
        ],
      },
      {
        type: "callout",
        title: "Lo que nunca hacemos en este taller",
        body: "Rellenar y rezar. Si tu refrigerante está bajo, hay una fuga. Encontramos la fuga, la sellamos y luego recargamos. De otra manera lo mismo pasa en tres meses y ya pagaste dos veces.",
      },
      { type: "h2", text: "Por qué agendamos trabajo de A/C en marzo, no en agosto" },
      {
        type: "p",
        text: "Para junio, todos los talleres en DFW tienen una a dos semanas de espera para trabajo de A/C, y los talleres que sobreagendan son los que se brincan el paso de detección de fugas. Manda a revisar el tuyo en marzo o abril, y si algo no cuadra, tenemos tiempo para hacerlo bien.",
      },
      { type: "h2", text: "Qué hacemos en el taller en realidad" },
      {
        type: "p",
        text: "Prueba de desempeño del sistema, detección electrónica de fugas con tinte UV si se necesita, evacuamos y pesamos el refrigerante, reemplazamos el componente fallido con una refacción de calidad OEM, recargamos a especificación de fábrica y verificamos la caída de temperatura en cabina. Cada paso documentado en la factura. La garantía nacional NAPA Auto Care aplica al trabajo de A/C que califica.",
      },
    ],
    related: ["seasonal-car-care-texas", "why-is-my-car-overheating"],
  },

  {
    slug: "alternator-vs-battery-symptoms",
    category: "Sistemas eléctricos",
    title: "¿Es el alternador o la batería? Un árbol de decisión de 30 segundos",
    description:
      "Cómo saber si el problema de no arranca, arranca lento o luces tenues es la batería o el sistema de carga, y por qué una prueba gratuita en una refaccionaria falla la mitad de las veces.",
    publishedDate: "2026-04-21",
    readMinutes: 5,
    heroImage: "/assets/resource-alternator.avif",
    heroAlt:
      "Acercamiento a un alternador automotriz con su banda serpentina y polea, el componente del sistema de carga que se diagnostica junto con la batería",
    eyebrow: "Sistemas eléctricos",
    lede: "Como un tercio de los autos que vemos por una “batería muerta” en realidad tienen un problema del sistema de carga. Cambiar la batería sin diagnosticar el alternador significa que vas a estar de vuelta en el estacionamiento en dos meses con el mismo problema. Aquí va cómo distinguir.",
    sections: [
      { type: "h2", text: "El árbol de decisión de 30 segundos" },
      {
        type: "ol",
        items: [
          "Intenta encender el auto. ¿Gira lento, hace click sin girar o no hace nada?",
          "Si gira lento: probablemente batería. Tal vez alternador si la batería es nueva.",
          "Si hace click pero no gira: batería débil, marcha mala o terminal corroída.",
          "Si funciona con cables y el auto anda bien por horas: la batería es la sospechosa.",
          "Si funciona con cables pero el auto se vuelve a morir en menos de un día: alternador (no está recargando la batería).",
        ],
      },
      { type: "h2", text: "Cinco síntomas de falla de alternador" },
      {
        type: "ul",
        items: [
          "Luz de batería en el tablero mientras manejas",
          "Los faros se atenúan en ralentí y se aclaran cuando aceleras",
          "La batería se muere en horas después de un paso de corriente",
          "Olor a hule quemado del cofre (banda serpentina patinando)",
          "El estéreo se corta, los indicadores parpadean o los vidrios suben lento",
        ],
      },
      { type: "h2", text: "Cinco síntomas de falla de batería" },
      {
        type: "ul",
        items: [
          "Arranque lento que ha empeorado en pocas semanas",
          "La batería tiene más de 3 años en Texas (4 a 5 en otros lados)",
          "Corrosión blanca o azul en las terminales",
          "El cuerpo de la batería está hinchado o tiene fugas",
          "Varios viajes cortos en clima frío sin un manejo largo en medio",
        ],
      },
      { type: "h2", text: "Por qué la prueba gratuita de la refaccionaria deja cosas fuera" },
      {
        type: "p",
        text: "Una prueba aislada de batería bajo carga te dice si la batería todavía aguanta la carga. No te puede decir si el alternador está recargando bien la batería mientras manejas. Como un tercio de las veces, una batería que falla la prueba de la refaccionaria está fallando porque el alternador se rindió hace semanas y el cliente ha estado descargando la batería una y otra vez.",
      },
      {
        type: "callout",
        title: "Prueba gratuita del sistema de carga, sin cita",
        body: "Probamos batería Y sistema de carga juntos, sin compra obligatoria. Cinco minutos, sin cita. Tráelo cualquier día entre semana o sábado por la mañana.",
      },
      { type: "h2", text: "El calor de Texas es el verdadero asesino" },
      {
        type: "p",
        text: "Los veranos sostenidos de más de 100°F cocinan baterías por dentro. De 3 a 5 años es vida normal aquí, contra 5 a 7 en climas más frescos. Si tu batería tiene más de 3 años y se viene un viaje, reemplázala preventivamente. El costo de un acarreo a medianoche en la carretera es mucho más alto que el costo de una batería.",
      },
    ],
    related: ["seasonal-car-care-texas", "check-engine-light-guide"],
  },

  {
    slug: "timing-belt-replacement-guide",
    category: "Reparación de motor",
    title: "Reemplazo de banda de tiempo: cuándo, cuánto y por qué no puede esperar",
    description:
      "Todo lo que necesitas saber sobre el servicio de banda de tiempo: banda contra cadena, intervalos del fabricante, qué pasa si se rompe, rangos de costo realistas y por qué cambiamos la bomba de agua al mismo tiempo.",
    publishedDate: "2026-04-09",
    readMinutes: 6,
    heroImage: "/assets/service-engine-repair.avif",
    heroAlt: "Auto de alto rendimiento de modelo reciente bajo la iluminación del taller",
    eyebrow: "Reparación de motor",
    lede: "Una banda de tiempo es la única pieza de mantenimiento con el costo más alto de falla catastrófica relativo a su costo de reemplazo. Sáltatela una vez pasado el intervalo y un trabajo de 700 dólares se vuelve un trabajo de 4,000 dólares de la noche a la mañana. Aquí va todo lo que de verdad necesitas saber.",
    sections: [
      { type: "h2", text: "Banda o cadena, cómo saber cuál tienes" },
      {
        type: "p",
        text: "Algunos motores usan una banda de tiempo de hule que necesita reemplazo en un intervalo. Otros usan una cadena metálica que se supone que dura la vida del motor (aunque las cadenas se estiran y los tensores fallan, especialmente en ciertos motores de VW, BMW y Hyundai). Tu manual del propietario te dice cuál tienes. Si no tienes el manual, lo buscamos por VIN en 30 segundos.",
      },
      { type: "h2", text: "Intervalos típicos del fabricante" },
      {
        type: "ul",
        items: [
          "Banda de tiempo Honda: 100,000 a 105,000 millas o 7 años",
          "Banda de tiempo Toyota (modelos viejos): 90,000 millas",
          "Banda de tiempo Subaru: 100,000 millas",
          "Banda de tiempo Volkswagen: 80,000 a 100,000 millas",
          "Hyundai / Kia: 60,000 a 90,000 millas dependiendo del motor",
          "La mayoría de los Toyota / Honda / Mazda nuevos: cadena de tiempo, sin reemplazo programado",
        ],
      },
      {
        type: "p",
        text: "Siempre revisa tu año, marca y modelo en específico. Los fabricantes actualizan los intervalos entre años, y el intervalo en un foro de 2010 puede no aplicar a tu 2018.",
      },
      { type: "h2", text: "Qué pasa cuando una se rompe" },
      {
        type: "p",
        text: "En un motor de interferencia (la mayoría de los motores modernos lo son), las válvulas y los pistones comparten espacio. La banda de tiempo es lo que los mantiene fuera del camino del otro. Cuando se rompe, los pistones golpean a las válvulas a toda velocidad. Válvulas dobladas, daño en la cabeza de los pistones, a veces una cabeza agrietada. La reparación pasa de un cambio de banda de 700 dólares a una rectificación de cabeza de 3,500 a 4,500 dólares o un reemplazo total de motor.",
      },
      {
        type: "callout",
        title: "Si tu auto está en o cerca del intervalo",
        body: "No le apuestes. La diferencia de costo entre el reemplazo programado y la reparación tras la falla es la diferencia entre un proyecto largo de fin de semana y una decisión financiera mayor. Llámanos con tu año, marca, modelo y millaje. Te decimos directo si debes agendarlo ahorita o si te quedan unos miles de millas de margen.",
      },
      { type: "h2", text: "Rangos de costo realistas" },
      {
        type: "ul",
        items: [
          "Solo banda de tiempo, sedán de fácil acceso (Honda, Toyota): 400 a 700 dólares",
          "Banda de tiempo más bomba de agua más tensores más poleas locas: 700 a 1,400 dólares",
          "Banda de tiempo más bomba de agua en motor europeo o de acceso difícil: 1,200 a 2,000 dólares",
          "Rectificación de cabeza tras falla en motor de interferencia: 3,500 a 4,500 dólares",
          "Reemplazo de motor (usado) tras falla: 3,500 a 6,500 dólares",
        ],
      },
      { type: "h2", text: "Por qué siempre cambiamos la bomba de agua al mismo tiempo" },
      {
        type: "p",
        text: "En la mayoría de los motores, la bomba de agua es accionada por la banda de tiempo, y para llegar a ella hay que quitar todo lo que ya quitamos para llegar a la banda. Cambiarla con la banda cuesta una hora extra de mano de obra. Cambiarla después cuesta las mismas horas de mano de obra que ya te cobramos una vez. Hacerlo junto es la jugada financiera inteligente casi siempre, y lo recomendamos como política.",
      },
    ],
    related: ["check-engine-light-guide", "when-to-replace-brakes"],
  },

  {
    slug: "synthetic-vs-conventional-oil",
    category: "Mantenimiento",
    title: "Sintético contra convencional: ¿cuál necesita realmente tu auto?",
    description:
      "La respuesta honesta sobre aceite de motor sintético, semisintético y convencional. Costo, intervalos y cuál vale la pena para tu vehículo en específico y para el manejo en Texas.",
    publishedDate: "2026-03-15",
    readMinutes: 5,
    heroImage: "/assets/resource-synthetic-vs-conventional.avif",
    heroAlt:
      "Dos botellas de aceite de motor lado a lado comparando sintético y convencional para un cambio de aceite",
    eyebrow: "Mantenimiento",
    lede: "El aceite sintético cuesta como el doble que el convencional y dura como dos veces y media más. ¿Vale la pena? Depende totalmente de tu vehículo, tu manejo y de lo que diga tu manual del propietario.",
    sections: [
      { type: "h2", text: "La química, en lenguaje claro" },
      {
        type: "p",
        text: "El aceite convencional es petróleo crudo refinado con aditivos. El aceite sintético arranca con una base que ha sido diseñada químicamente para comportarse de manera más consistente entre temperaturas. El resultado: el sintético resiste el rompimiento térmico a altas temperaturas y sigue fluyendo mejor a bajas temperaturas. En un agosto de 100°F en Texas, eso importa.",
      },
      { type: "h2", text: "Cuándo se requiere sintético" },
      {
        type: "p",
        text: "La mayoría de los vehículos fabricados desde aproximadamente 2010 piden sintético de fábrica. Los autos de lujo europeos (BMW, Mercedes, Audi, Volvo, Volkswagen) requieren aceites sintéticos muy específicos con aprobaciones del fabricante impresas en la botella. Usar aceite convencional en un auto que requiere sintético anula la garantía del tren motriz y puede causar desgaste prematuro del motor.",
      },
      { type: "h2", text: "Cuándo el convencional sigue siendo correcto" },
      {
        type: "ul",
        items: [
          "Vehículos viejos, de antes del 2008 más o menos, que siempre han usado convencional",
          "Autos de alto millaje con buena presión de aceite donde cambiar trae riesgo de fugas",
          "Vehículos de flota uso diario donde intervalos cortos y costo de entrada bajo tienen sentido",
          "Cualquier vehículo cuyo manual especifique convencional",
        ],
      },
      { type: "h2", text: "Semisintético: el intermedio" },
      {
        type: "p",
        text: "Un semisintético mezcla sintético y convencional. Aguanta más que un convencional puro pero no dura tanto como un full sintético. Caso de uso realista: un vehículo de alto millaje donde el dueño quiere mejor protección térmica sin el precio del full sintético.",
      },
      { type: "h2", text: "Cuánto cuesta de verdad" },
      {
        type: "ul",
        items: [
          "Cambio de aceite convencional: 35 a 55 dólares",
          "Semisintético: 50 a 75 dólares",
          "Full sintético: 70 a 110 dólares",
          "Sintético europeo con aprobación del fabricante (BMW, MB, VW, Volvo): 95 a 145 dólares",
        ],
      },
      { type: "h2", text: "Cuánto dura cada uno en condiciones de Texas" },
      {
        type: "ul",
        items: [
          "Convencional: 3,000 a 5,000 millas, inclínate a más corto en verano",
          "Semisintético: 5,000 a 7,500 millas",
          "Full sintético: 7,500 a 10,000 millas, a veces 15,000 en autos europeos nuevos",
          "Confía en la recomendación del fabricante y en tu monitor de vida del aceite, ambos están calibrados para el mundo real",
        ],
      },
      {
        type: "callout",
        title: "Usamos el aceite correcto para tu auto",
        body: "No lo que esté en oferta, no el más barato disponible. La viscosidad y el estándar de certificación correctos para tu año, marca y modelo en específico. Si tu manual dice 0W-20 con API SP y dexos1 Gen 3, eso es lo que entra.",
      },
    ],
    related: ["oil-change-frequency", "seasonal-car-care-texas"],
  },

  {
    slug: "why-is-my-car-overheating",
    category: "Sistema de enfriamiento",
    title: "¿Por qué se sobrecalienta mi auto? Siete causas y cuánto cuesta arreglarlas",
    description:
      "Las siete causas más comunes de sobrecalentamiento del motor, qué hacer en la carretera, cuánto cuesta cada reparación y por qué el verano de Texas es la temporada en la que esto les pasa a la mayoría de los conductores.",
    publishedDate: "2026-05-22",
    readMinutes: 6,
    heroImage: "/assets/resource-overheating.avif",
    heroAlt:
      "Vapor saliendo del cofre de un auto sobrecalentado orillado en la carretera",
    eyebrow: "Sistema de enfriamiento",
    lede: "El sobrecalentamiento del motor es el tipo de problema en el que la reacción equivocada convierte una reparación de 400 dólares en una de 4,000. Oríllate en cuanto suba el indicador. Aquí van las siete causas más comunes, qué hacer en el momento y cuánto cuesta cada una.",
    sections: [
      { type: "h2", text: "Primero, haz esto de inmediato" },
      {
        type: "ol",
        items: [
          "Oríllate con seguridad. Sal del freeway, busca un estacionamiento.",
          "Apaga el motor. No lo dejes en ralentí “nada más para mantener el A/C”.",
          "Saca el seguro del cofre desde adentro del auto. No te acerques al motor todavía.",
          "Espera al menos 20 minutos antes de abrir nada. El radiador está bajo alta presión cuando está caliente, y un tapón de radiador caliente abierto antes de tiempo puede causar quemaduras severas.",
          "Llámanos al (972) 231-2886 o pide grúa. Manejar un motor sobrecalentado cuesta juntas de cabeza en cuestión de minutos.",
        ],
      },
      { type: "h2", text: "Las siete causas más comunes, por frecuencia" },
      {
        type: "p",
        text: "Estas son las causas que vemos en nuestras bahías de Richardson, ordenadas aproximadamente por qué tan seguido aparecen.",
      },
      { type: "h2", text: "1. Anticongelante bajo" },
      {
        type: "p",
        text: "El anticongelante se ha fugado, evaporado o nunca se rellenó bien después del último servicio. El sistema se queda sin fluido para llevarse el calor. Costo de relleno: 20 a 60 dólares si no hay fuga subyacente. Costo de encontrar y arreglar la fuga: 100 a 400 dólares dependiendo del origen.",
      },
      { type: "h2", text: "2. Termostato fallado" },
      {
        type: "p",
        text: "El termostato regula el flujo del anticongelante con base en la temperatura. Cuando falla cerrado, el anticongelante no puede circular y el motor se sobrecalienta rápido. Reemplazo: 220 a 500 dólares dependiendo del acceso.",
      },
      { type: "h2", text: "3. Falla de bomba de agua" },
      {
        type: "p",
        text: "La bomba mueve el anticongelante por el motor. Cuando se rompe el impulsor o se traba el balero, el anticongelante deja de fluir. Reemplazo: 450 a 1,200 dólares dependiendo de si va con la banda de tiempo.",
      },
      { type: "h2", text: "4. Ventilador de enfriamiento o relé del ventilador" },
      {
        type: "p",
        text: "A baja velocidad, el ventilador eléctrico jala aire por el radiador. Si el motor del ventilador o su relé fallaron, el motor se sobrecalienta en pare y siga pero se enfría en el freeway. Costo: 250 a 700 dólares.",
      },
      { type: "h2", text: "5. Radiador tapado o fallando" },
      {
        type: "p",
        text: "Corrosión interna o daño externo. El reemplazo va de 500 a 1,200 dólares incluyendo mano de obra y un relleno de anticongelante nuevo.",
      },
      { type: "h2", text: "6. Manguera reventada o partida" },
      {
        type: "p",
        text: "Las mangueras de hule del sistema de enfriamiento se vuelven quebradizas en el calor de Texas con los años. Una manguera reventada tira anticongelante en segundos. Cambio de manguera: 150 a 400 dólares.",
      },
      { type: "h2", text: "7. Falla de junta de cabeza" },
      {
        type: "p",
        text: "La grave, casi siempre resultado de un sobrecalentamiento que se siguió manejando. Los gases de combustión entran al sistema de enfriamiento, el anticongelante entra a los cilindros. Reparación: 1,800 a 3,500 dólares. Por eso decimos: oríllate.",
      },
      {
        type: "callout",
        title: "Si tu indicador está subiendo ahorita",
        body: "Oríllate. Apaga el motor. No abras el tapón del radiador hasta que el motor se haya enfriado por al menos 20 minutos. Llama al (972) 231-2886 o consigue una grúa. Manejar un motor sobrecalentado para llegar a casa es la decisión más cara que vas a tomar este año.",
      },
      { type: "h2", text: "Por qué el verano es la temporada en la que esto pasa" },
      {
        type: "p",
        text: "Temperaturas ambiente de más de 100°F, A/C corriendo todo el tiempo y pare y siga en la 75 son la tormenta perfecta para los sistemas de enfriamiento. Las mangueras al límite fallan, los termostatos al límite se atoran, las bombas de agua al límite se rinden. Si tu sistema lleva más de 60,000 millas desde el último cambio, mándalo a revisar en primavera antes de que agosto tenga la última palabra.",
      },
    ],
    related: ["seasonal-car-care-texas", "oil-change-frequency"],
  },

  {
    slug: "dealer-vs-independent-mechanic",
    category: "Compra y mantenimiento",
    title: "Concesionario contra mecánico independiente: cuándo conviene cada uno",
    description:
      "Cuándo el concesionario es la decisión correcta, cuándo gana un taller independiente y cuáles son las verdaderas diferencias de tarifa de mano de obra y calidad para conductores de Richardson y DFW.",
    publishedDate: "2026-03-29",
    readMinutes: 5,
    heroImage: "/assets/resource-dealer-vs-independent.avif",
    heroAlt:
      "Bahía de un taller mecánico independiente de barrio con un vehículo en el elevador, el tipo de mecánico familiar que es alternativa al concesionario",
    eyebrow: "Compra y mantenimiento",
    lede: "Si llevar tu auto al concesionario o a un taller independiente es una de las preguntas más comunes que recibimos. La respuesta honesta: como el 90 por ciento de las veces, el taller independiente es la decisión correcta. Aquí va el otro 10 por ciento, y las cuentas detrás de los dos.",
    sections: [
      { type: "h2", text: "Cuándo el concesionario sí es la decisión correcta" },
      {
        type: "ul",
        items: [
          "Recall activo del fabricante: los recalls son gratis en el concesionario sin importar el millaje",
          "Trabajo en garantía: cualquier cosa todavía cubierta por garantía del tren motriz o de defensa a defensa",
          "Actualizaciones de software de fábrica, algunas son solo del concesionario",
          "Modelos nuevos donde las refacciones todavía escasean en el aftermarket",
          "Diagnóstico específico solo por software en ciertas marcas europeas (algunos módulos de BMW, MB, Porsche)",
        ],
      },
      { type: "h2", text: "Cuándo gana un taller independiente" },
      {
        type: "ul",
        items: [
          "Mantenimiento y reparación fuera de garantía (90 por ciento de los autos en la calle)",
          "Cualquier cosa donde la cotización del concesionario suene a número sacado de un sombrero",
          "Trabajos de frenos, cambios de aceite, llantas, servicio de A/C, cada reparación de rutina",
          "Trabajo de motor y transmisión, misma calidad, la mitad del costo de mano de obra",
          "Cuando quieres al mismo técnico trabajando en tu auto cada vez",
        ],
      },
      { type: "h2", text: "Las cuentas de la mano de obra" },
      {
        type: "p",
        text: "Las tarifas de mano de obra del concesionario en DFW van de 150 a 200 dólares por hora. Los talleres independientes en la misma zona van de 90 a 130 por hora. En una reparación de cinco horas, eso son 300 a 500 dólares de diferencia antes de refacciones. Multiplícalo por un año de mantenimiento de flota familiar y los números suman.",
      },
      { type: "h2", text: "El mito de la calidad" },
      {
        type: "p",
        text: "Hay una historia de que los técnicos del concesionario están mejor capacitados que los técnicos independientes. Eso en general no es cierto. Los dos suelen ser certificados ASE. Los dos se entrenan en los mismos sistemas. La diferencia real es que los concesionarios tienden a ser especialistas en Toyota o en Honda o en BMW, mientras que un buen taller independiente ve cada marca cada día. Para problemas inusuales o entre marcas, esa amplitud frecuentemente gana.",
      },
      { type: "h2", text: "Qué dejas de tener en un taller independiente" },
      {
        type: "p",
        text: "Autos de cortesía (a veces), máquinas de espresso en la sala de espera (definitivamente) y proximidad al showroom de autos nuevos (lo que no vamos a fingir que sea una pérdida significativa). Los autos de cortesía son el verdadero punto, la mayoría de los independientes no los proveen, aunque normalmente podemos arreglar un aventón o recomendarte un lugar cercano.",
      },
      {
        type: "callout",
        title: "¿Tienes una cotización del concesionario y quieres una segunda opinión?",
        body: "Tráela. Inspeccionamos tu auto, te damos nuestra evaluación honesta y te decimos directamente si el trabajo recomendado por el concesionario es necesario. La cuota de diagnóstico se descuenta de la reparación si haces el trabajo con nosotros.",
      },
      { type: "h2", text: "El desempate de NAPA Auto Care" },
      {
        type: "p",
        text: "Nuestra garantía nacional de NAPA viaja. Si te mudas a Phoenix, vas de viaje a Maine o te quedas botado en un pueblito de Oklahoma un martes, la garantía aplica en cualquiera de los más de 17,000 Centros NAPA Auto Care. La garantía del concesionario es más rígida y específica de la marca.",
      },
    ],
    related: ["check-engine-light-guide", "oil-change-frequency"],
  },

  {
    slug: "catalytic-converter-replacement-cost",
    category: "Emisiones y verificaciones",
    title: "Reemplazo del convertidor catalítico: señales, costo y el problema del robo",
    description:
      "Qué hace en realidad un convertidor catalítico, los síntomas de falla, rangos de costo reales, comparación entre OEM y aftermarket y la epidemia de robo de catalizadores en DFW.",
    publishedDate: "2026-04-02",
    readMinutes: 6,
    heroImage: "/assets/resource-catalytic-converter.avif",
    heroAlt:
      "Vista desde abajo de un convertidor catalítico montado en el sistema de escape de un vehículo, el componente de emisiones vulnerable a robo y falla",
    eyebrow: "Emisiones y verificaciones",
    lede: "El reemplazo del convertidor catalítico es uno de los rubros de mantenimiento más caros que la mayoría de los conductores van a enfrentar, y uno de los más mal diagnosticados. Aquí va lo que hace en realidad, cuándo falla en realidad y lo que debes esperar pagar.",
    sections: [
      { type: "h2", text: "Qué hace en realidad un convertidor catalítico" },
      {
        type: "p",
        text: "Tu motor produce escape que contiene monóxido de carbono, hidrocarburos y óxidos de nitrógeno. El convertidor catalítico es una cámara dentro del sistema de escape rellena con un recubrimiento de metales preciosos (platino, paladio, rodio) que convierte esos gases dañinos en otros menos dañinos antes de que salgan por el escape. Sin él, tu auto reprobaría toda inspección de emisiones y produciría mucha más contaminación.",
      },
      { type: "h2", text: "Síntomas de un catalizador fallando" },
      {
        type: "ul",
        items: [
          "Luz de check engine con código P0420 o P0430 (eficiencia del catalizador debajo del umbral)",
          "Olor a azufre o huevo podrido en el escape",
          "Aceleración perezosa, especialmente en subidas",
          "No pasaste la verificación estatal de Texas en emisiones",
          "Sonido de cascabeleo desde abajo en ralentí (sustrato roto)",
          "Caída dramática en el rendimiento de gasolina",
        ],
      },
      { type: "h2", text: "Por qué P0420 no siempre significa el catalizador" },
      {
        type: "p",
        text: "P0420 reporta que el catalizador está leyendo ineficiente. La causa puede ser el catalizador mismo. O puede ser un sensor de oxígeno fallando que da una lectura mala, una fuga de escape antes del catalizador o un problema anterior de mezcla de combustible que hace que el catalizador lea ineficiente. Un proceso real de diagnóstico descarta los arreglos baratos (150 a 400 dólares) antes de recomendar el caro (1,500 dólares en adelante).",
      },
      { type: "h2", text: "Rangos de costo realistas" },
      {
        type: "ul",
        items: [
          "Reemplazo de catalizador aftermarket, sedán: 800 a 1,500 dólares",
          "Reemplazo de catalizador OEM, sedán: 1,500 a 2,500 dólares",
          "Camioneta o SUV (sistema más grande): 1,500 a 3,500 dólares",
          "Lujo europeo o híbrido: 2,500 a 5,000 dólares en adelante",
          "Solo el sensor de O2 anterior (cuando esa es la causa real): 150 a 400 dólares",
        ],
      },
      { type: "h2", text: "OEM contra aftermarket, el trade-off honesto" },
      {
        type: "p",
        text: "Los catalizadores OEM usan más metal precioso y duran más (frecuentemente la vida del auto). Los catalizadores aftermarket que cumplen con California son refacciones de calidad y cumplen emisiones, normalmente duran de 5 a 7 años. Los catalizadores aftermarket baratos que cumplen federal pueden fallar en uno o dos años y son ilegales de vender en California (Texas los permite pero no los exige). Por defecto usamos aftermarket que cumplen con California; OEM si lo pides.",
      },
      { type: "h2", text: "Verificación estatal de Texas: el catalizador es obligatorio" },
      {
        type: "p",
        text: "Si tu luz de check engine está prendida por un código del catalizador, no pasas emisiones. Sin excepciones. Diagnosticamos, reparamos y volvemos a inspeccionar en un plazo de 15 días en el mismo taller sin cuota adicional de inspección.",
      },
      { type: "h2", text: "Robo de catalizadores en DFW" },
      {
        type: "p",
        text: "El robo de catalizadores ha sido un problema serio en todo el área metropolitana por varios años. Los metales preciosos adentro son valiosos para los chatarreros, y un ladrón con una sierra inalámbrica puede robar uno en menos de dos minutos. Las camionetas (despeje alto, acceso fácil) y los Toyota Prius (alto contenido de metal precioso) son los vehículos más atacados.",
      },
      {
        type: "ul",
        items: [
          "Estaciónate en cochera cuando puedas",
          "Graba el número de placa en el catalizador (la mayoría de los seguros lo exigen para recuperación)",
          "Agrega un escudo de acero para el catalizador (200 a 400 dólares instalado)",
          "Estaciona de frente contra una pared, ilumina el área",
          "Si tu seguro cubre el robo, el reemplazo puede ser más accesible de lo que crees",
        ],
      },
      {
        type: "callout",
        title: "¿Sospechas que ya no tienes catalizador?",
        body: "Señal clave: ruido fuerte y dramático del escape al momento de encender el auto. No manejes lejos. Tráelo, confirmamos y cotizamos el reemplazo.",
      },
    ],
    related: ["check-engine-light-guide", "texas-state-inspection-guide"],
  },

  {
    slug: "tpms-warning-light-guide",
    category: "Llantas",
    title: "¿Luz de TPMS prendida? Qué significa y qué hacer (y qué no)",
    description:
      "Una guía práctica de tu luz de advertencia de presión de llantas: qué la dispara, por qué las mañanas frías causan falsas alarmas, cuándo mueren los sensores y cuándo llamar al taller.",
    publishedDate: "2026-04-26",
    readMinutes: 4,
    heroImage: "/assets/resource-tpms.png",
    heroAlt:
      "Símbolo amarillo de la luz de advertencia de presión de llantas TPMS encendido en el cluster de instrumentos de un vehículo",
    eyebrow: "Llantas",
    lede: "La luz de advertencia con forma de herradura del TPMS es uno de los indicadores del tablero más ignorados en la calle. Aquí va lo que de verdad significa, por qué a veces miente y cuándo debes tratarla como urgente.",
    sections: [
      { type: "h2", text: "Qué es TPMS y por qué tu auto lo trae" },
      {
        type: "p",
        text: "TPMS significa Tire Pressure Monitoring System (sistema de monitoreo de presión de llantas). La ley federal lo ha exigido en todos los vehículos de pasajeros nuevos vendidos en EUA desde septiembre de 2007. Cada llanta tiene un pequeño sensor adentro que reporta su presión a la computadora del auto. Cuando la presión baja un 25 por ciento por debajo de la recomendación de la calcomanía, la luz se prende.",
      },
      { type: "h2", text: "Fija contra parpadeante" },
      {
        type: "p",
        text: "Una luz fija significa que al menos una llanta de verdad está baja de presión. Una luz parpadeante (típicamente parpadea por 60 segundos al arrancar y luego se queda fija) significa que el sistema mismo tiene una falla, normalmente un sensor muerto o un sensor que no se programó después de un cambio de llanta.",
      },
      { type: "h2", text: "La falsa alarma de mañana fría" },
      {
        type: "p",
        text: "La presión del aire baja como 1 PSI por cada 10°F de caída de temperatura. Después de un frente frío repentino en DFW (típico en noviembre y febrero), las llantas que estaban bien infladas ayer por la tarde pueden estar 4 a 5 PSI bajas esta mañana. Solución: rellena las llantas cuando entibie, maneja unas millas y la luz normalmente se quita sola. Si no se quita, tienes una fuga lenta.",
      },
      { type: "h2", text: "Causas reales que vale la pena conocer" },
      {
        type: "ul",
        items: [
          "Fuga lenta por un clavo o tornillo (la más común, encuéntrala antes de que empeore)",
          "Fuga del vástago de la válvula (rara en rines modernos pero posible)",
          "La batería del sensor de TPMS murió (los sensores duran típicamente de 7 a 10 años)",
          "El sensor se dañó durante un cambio de llanta en otro taller",
          "Rines aftermarket instalados sin transferir o reemplazar los sensores de TPMS",
        ],
      },
      { type: "h2", text: "Qué hacer, en orden" },
      {
        type: "ol",
        items: [
          "Revisa las cuatro llantas con un manómetro (no confíes solamente en la lectura del tablero, puede ir retrasada).",
          "Infla las llantas bajas a la presión de la calcomanía (normalmente está impresa en la calcomanía del marco de la puerta).",
          "Maneja de 10 a 15 millas. La luz se debe quitar sola una vez que las presiones se estabilicen.",
          "Si la luz vuelve en pocos días: tienes una fuga lenta. Agéndalo con nosotros.",
          "Si la luz parpadea al arrancar: necesitas un diagnóstico de sensor. Agéndalo con nosotros.",
        ],
      },
      {
        type: "callout",
        title: "Diagnóstico de TPMS gratuito con cualquier servicio de llantas",
        body: "Tráelo cualquier día entre semana o sábado por la mañana. Escaneamos cada sensor, revisamos el estado de relearn y diagnosticamos cualquier falla de sensor. Si un sensor necesita reemplazo, cotizamos por adelantado antes de empezar trabajo.",
      },
      { type: "h2", text: "Por qué no recomendamos apagar la luz e ignorarla" },
      {
        type: "p",
        text: "Existen kits y métodos en línea para deshabilitar el TPMS. No recomendamos ninguno. La luz existe para advertirte de una condición real de seguridad. Las llantas con baja presión generan calor extra, se desgastan disparejo, reducen el rendimiento de gasolina y aumentan el riesgo de reventón, especialmente en el calor del verano de Texas. Encuentra la causa, arregla la causa, deja el sistema prendido.",
      },
    ],
    related: ["seasonal-car-care-texas", "when-to-replace-brakes"],
  },

  {
    slug: "pre-purchase-inspection-checklist",
    category: "Compra y mantenimiento",
    title: "Inspección previa a la compra: lo que revisamos en un usado (y qué preguntar)",
    description:
      "La inspección de 30 puntos que hacemos en autos usados antes de que nuestros clientes los compren, las banderas rojas a las que ponemos atención y por qué una PPI de 150 dólares ahorra miles.",
    publishedDate: "2026-03-08",
    readMinutes: 6,
    heroImage: "/assets/resource-pre-purchase-inspection.avif",
    heroAlt:
      "Mecánico inspeccionando un vehículo usado en un elevador del taller, haciendo una inspección previa a la compra antes de que el comprador firme el título",
    eyebrow: "Compra y mantenimiento",
    lede: "Una inspección previa a la compra cuesta 150 dólares y toma como una hora. El auto usado más caro que puedes comprar es el que no mandaste a inspeccionar primero. Aquí va lo que revisamos, por qué lo revisamos y qué te hace caminar y no comprar.",
    sections: [
      { type: "h2", text: "Por qué una PPI de 150 dólares ahorra miles" },
      {
        type: "p",
        text: "Una vez que firmas el título, cada problema es tuyo. Una inspección previa a la compra es el seguro más barato que existe contra comprar el mantenimiento postergado de alguien más, daño oculto por accidente o una reparación mayor inminente. El cliente que se brincó la PPI en un SUV de lujo 2015 el año pasado y nos llamó la siguiente semana con una cotización de transmisión por 4,200 dólares es el cliente que nos enseñó a escribir este artículo.",
      },
      { type: "h2", text: "La inspección de 30 puntos que hacemos" },
      { type: "h2", text: "Motor y tren motriz" },
      {
        type: "ul",
        items: [
          "Observación de arranque en frío (humo, golpeteo, ralentí áspero)",
          "Inspección visual de mangueras, bandas, juntas",
          "Condición y nivel del aceite (lodo, contaminación con agua)",
          "Condición del anticongelante (la contaminación con aceite indica problemas de junta de cabeza)",
          "Color y olor del fluido de transmisión (oscuro o quemado es problema)",
          "Prueba de compresión en motores sospechosos",
          "Escaneo de datos en vivo de todos los módulos",
        ],
      },
      { type: "h2", text: "Frenos y suspensión" },
      {
        type: "ul",
        items: [
          "Grosor de pastillas, desgaste de discos, condición del líquido",
          "Inspección de calipers, mangueras y líneas",
          "Condición de amortiguadores, soportes y bujes",
          "Juego del cremallera de la dirección, terminales, rótulas",
          "Ruido de balero de rueda en una prueba de manejo",
        ],
      },
      { type: "h2", text: "Carrocería, chasis y estructura" },
      {
        type: "ul",
        items: [
          "Inspección de chasis y monocasco buscando señales de reparación por colisión",
          "Lecturas con calibrador de espesor de pintura en paneles de carrocería",
          "Consistencia de los espacios de puertas, cofre y cajuela (paneles que no embonan implican colisión reparada)",
          "Óxido bajo el auto, especialmente en camionetas viejas",
          "Revisión de auto inundado (líneas de agua en el interior, arena en lugares raros)",
        ],
      },
      { type: "h2", text: "Llantas, sistema eléctrico y A/C" },
      {
        type: "ul",
        items: [
          "Profundidad de dibujo, edad (fecha DOT) y patrón de desgaste de las llantas",
          "Edad de la batería y prueba del sistema de carga",
          "Cada luz interior y exterior",
          "Prueba de desempeño del A/C (aire frío en máximo, en las dos posiciones de ventilación)",
          "Funcionamiento del calefactor",
        ],
      },
      { type: "h2", text: "Revisión de documentos" },
      {
        type: "ul",
        items: [
          "Historial de Carfax o AutoCheck",
          "Registros de servicio si están disponibles",
          "Coincidencia de VIN entre placa, motor y tablero",
          "Plausibilidad del odómetro (discrepancia en el cluster es bandera roja mayor)",
          "Verificación del título por estatus previo de salvage o reconstruido",
        ],
      },
      { type: "h2", text: "Banderas rojas que significan caminar y no comprar" },
      {
        type: "ul",
        items: [
          "Discrepancia del cluster (la lectura del odómetro no concuerda con el desgaste y los registros de servicio)",
          "Evidencia de enderezado de chasis (soldaduras mal alineadas, pintura desigual bajo el cofre)",
          "Daño por inundación (corrosión bajo las alfombras, arena en lugares oscuros, mal olor)",
          "Varios fluidos mayores contaminados (aceite en el anticongelante, anticongelante en el aceite)",
          "Módulos mayores arrojando códigos que el vendedor se niega a atender",
        ],
      },
      { type: "h2", text: "Cosas específicas de DFW que buscamos" },
      {
        type: "ul",
        items: [
          "Reparación por daño de granizo (las temporadas de granizo en Texas son severas)",
          "Vehículos inundados después de tormentas en el área de Houston (los autos inundados frecuentemente migran por la I-45)",
          "Hule y plásticos cocidos por calor (mangueras quebradizas más allá de su intervalo)",
          "Sistemas de A/C que han sido rellenados repetidamente (residuos de refrigerante en las conexiones)",
        ],
      },
      {
        type: "callout",
        title: "Trae el auto. Te entregamos el reporte.",
        body: "Agenda una PPI por teléfono, como una hora, 150 dólares. Te damos un reporte por escrito que puedes usar para negociar, caminarte o comprar con confianza. No tenemos relación con ningún vendedor, concesionario ni subasta.",
      },
    ],
    related: ["check-engine-light-guide", "texas-state-inspection-guide"],
  },

  {
    slug: "wheel-alignment-vs-balancing",
    category: "Llantas",
    title: "Alineación contra balanceo: ¿cuál es la diferencia?",
    description:
      "Los dos servicios que se confunden todo el tiempo. Qué hace cada uno, los síntomas de cada uno y por qué normalmente necesitas los dos después de llantas nuevas.",
    publishedDate: "2026-02-28",
    readMinutes: 4,
    heroImage: "/assets/resource-wheel-alignment.avif",
    heroAlt:
      "Vehículo en un rack de alineación con sensores montados en cada rueda durante un servicio de alineación de cuatro ruedas",
    eyebrow: "Llantas",
    lede: "Alineación y balanceo son dos servicios distintos que resuelven dos problemas distintos. La mitad de los clientes que piden uno necesitan el otro. Aquí va la diferencia en lenguaje claro.",
    sections: [
      { type: "h2", text: "Alineación, en una oración" },
      {
        type: "p",
        text: "La alineación ajusta los ángulos en los que tus llantas tocan el camino. Cuando los ángulos están fuera, el auto jala hacia un lado, el volante queda chueco al ir derecho y las llantas se desgastan disparejo a lo ancho del dibujo.",
      },
      { type: "h2", text: "Balanceo, en una oración" },
      {
        type: "p",
        text: "El balanceo distribuye el peso de manera pareja alrededor de cada rueda y llanta. Cuando el peso está disparejo, la rueda se bambolea al girar. Sientes ese bamboleo como vibración, casi siempre a velocidad de freeway.",
      },
      { type: "h2", text: "Síntomas que piden alineación" },
      {
        type: "ul",
        items: [
          "El auto jala hacia un lado en un camino plano con las manos suaves en el volante",
          "El volante queda chueco al manejar derecho",
          "Llantas con desgaste disparejo (más en el borde interior o exterior)",
          "Después de un baché fuerte o de pegarle a una banqueta",
          "Después de cambiar terminales, mesetas o alguna otra pieza de suspensión",
          "Después de una reparación de colisión",
        ],
      },
      { type: "h2", text: "Síntomas que piden balanceo" },
      {
        type: "ul",
        items: [
          "El volante vibra a velocidad de freeway (típicamente de 55 a 70 mph)",
          "Vibración en el asiento o en el piso (llantas traseras desbalanceadas)",
          "La vibración desaparece debajo de 50 mph",
          "Después de que se cayó un contrapeso (a veces puedes ver las marcas)",
          "Después de un parche en la llanta",
        ],
      },
      { type: "h2", text: "Por qué los dos después de llantas nuevas" },
      {
        type: "p",
        text: "Cuando compras llantas nuevas, el taller las balancea como parte de la instalación. Pero la alineación no se afecta por el cambio de llanta; si tu auto estaba mal alineado con las llantas viejas, sigue mal alineado con las nuevas, y las nuevas van a empezar a desgastarse disparejo en pocas miles de millas. Gastar 100 a 140 dólares extra en alineación después de llantas nuevas frecuentemente se paga solo en la vida útil que ganas.",
      },
      { type: "h2", text: "Temporada de baches en DFW" },
      {
        type: "p",
        text: "Después de cada ciclo de congelar y descongelar en Texas y de cada tormenta fuerte, los caminos del área metropolitana ganan una nueva generación de baches. Pegarle a uno fuerte como para doblar una meseta o sacar la alineación es una posibilidad real en Belt Line, en la 75, en Coit, en el Bush Tollway. Si tu dirección no se siente bien después de un golpe fuerte, manda a revisar la alineación.",
      },
      {
        type: "callout",
        title: "Combo de alineación más balanceo",
        body: "La mayoría de los autos necesitan alineación de cuatro ruedas y balanceo. Los cotizamos por separado para que tú decidas qué necesita tu auto. Después de llantas nuevas, recomendamos los dos como paquete.",
      },
      { type: "h2", text: "Cómo se ven los números en realidad" },
      {
        type: "ul",
        items: [
          "Balanceo de las cuatro llantas: 50 a 80 dólares",
          "Alineación de cuatro ruedas: 100 a 140 dólares",
          "Las dos juntas con llantas nuevas: 150 a 220 dólares",
          "Ahorro en vida útil de la llanta gracias a una buena alineación: aproximadamente 25 por ciento",
        ],
      },
    ],
    related: ["seasonal-car-care-texas", "tpms-warning-light-guide"],
  },
];

export const RESOURCE_SLUGS_ES = RESOURCES_ES.map((r) => r.slug);
